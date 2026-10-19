import OpenAI, { toFile } from "openai";

export const MAX_PDF_BYTES = 32 * 1024 * 1024;

export type KnowledgeFileStatus =
  | "in_progress"
  | "completed"
  | "cancelled"
  | "failed";

export type KnowledgeFile = {
  id: string;
  filename: string;
  status: KnowledgeFileStatus;
  createdAt: number;
  error: string | null;
};

export class KnowledgeConfigError extends Error {
  constructor() {
    super("OPENAI_API_KEY or OPENAI_VECTOR_STORE_ID is not set.");
    this.name = "KnowledgeConfigError";
  }
}

export class PdfValidationError extends Error {
  status: 400 | 413;

  constructor(message: string, status: 400 | 413 = 400) {
    super(message);
    this.name = "PdfValidationError";
    this.status = status;
  }
}

export function knowledgeErrorResponse(err: unknown): {
  status: number;
  message: string;
} {
  if (err instanceof KnowledgeConfigError) {
    console.error("[admin/files]", err.message);
    return { status: 503, message: "The knowledge store is not configured." };
  }
  if (err instanceof PdfValidationError) {
    return { status: err.status, message: err.message };
  }
  console.error("[admin/files]", err);
  if (err instanceof OpenAI.APIError) {
    const status = err.status >= 400 && err.status < 500 ? err.status : 502;
    return { status, message: err.message };
  }
  return { status: 500, message: "The knowledge store request failed." };
}

type StoreConfig = {
  client: OpenAI;
  vectorStoreId: string;
};

function storeConfig(): StoreConfig {
  const apiKey = process.env.OPENAI_API_KEY;
  const vectorStoreId = process.env.OPENAI_VECTOR_STORE_ID;
  if (!apiKey || !vectorStoreId) throw new KnowledgeConfigError();
  return { client: new OpenAI({ apiKey }), vectorStoreId };
}

function pdfFilename(name: string): string {
  const base = name.split(/[/\\]/).pop()?.trim() ?? "";
  if (!base || base === "." || base === "..") {
    throw new PdfValidationError("Choose a PDF file.");
  }
  if (base.includes("\0") || base.length > 255) {
    throw new PdfValidationError("Invalid file name.");
  }
  if (!base.toLowerCase().endsWith(".pdf")) {
    throw new PdfValidationError("Only PDF files are allowed.");
  }
  return base;
}

function assertPdf(bytes: Buffer, filename: string): void {
  pdfFilename(filename);
  if (bytes.length === 0) {
    throw new PdfValidationError("The PDF is empty.");
  }
  if (bytes.length > MAX_PDF_BYTES) {
    throw new PdfValidationError("File is too large. Maximum size is 32 MB.", 413);
  }
  if (bytes.subarray(0, 5).toString("latin1") !== "%PDF-") {
    throw new PdfValidationError("Only PDF files are allowed.");
  }
}

export async function listKnowledgeFiles(): Promise<KnowledgeFile[]> {
  const { client, vectorStoreId } = storeConfig();
  const files: KnowledgeFile[] = [];

  for await (const vsFile of client.vectorStores.files.list(vectorStoreId, {
    limit: 100,
  })) {
    // The vector store list can briefly still include a file after its object
    // has been deleted. Skip it instead of failing the whole list.
    const meta = await client.files.retrieve(vsFile.id).catch((err: unknown) => {
      if (err instanceof OpenAI.NotFoundError) return null;
      throw err;
    });
    if (!meta) continue;
    files.push({
      id: vsFile.id,
      filename: meta.filename,
      status: vsFile.status,
      createdAt: vsFile.created_at,
      error: vsFile.last_error?.message ?? null,
    });
  }

  files.sort((a, b) => b.createdAt - a.createdAt);
  return files;
}

export async function deleteKnowledgeFile(fileId: string): Promise<void> {
  const { client, vectorStoreId } = storeConfig();
  try {
    await client.vectorStores.files.delete(fileId, {
      vector_store_id: vectorStoreId,
    });
  } catch (err) {
    if (!(err instanceof OpenAI.NotFoundError)) throw err;
  }
  await client.files.delete(fileId).catch((err: unknown) => {
    if (err instanceof OpenAI.NotFoundError) return;
    console.error("[admin/files] OpenAI file delete failed", err);
  });
}

export async function uploadKnowledgePdf(input: {
  bytes: Buffer;
  filename: string;
  replaceId?: string;
}): Promise<KnowledgeFile> {
  const filename = pdfFilename(input.filename);
  assertPdf(input.bytes, filename);

  const { client, vectorStoreId } = storeConfig();
  const existing = await listKnowledgeFiles();
  const toDelete = new Set<string>();
  if (input.replaceId) toDelete.add(input.replaceId);
  for (const file of existing) {
    if (file.filename === filename) toDelete.add(file.id);
  }
  for (const id of toDelete) {
    await deleteKnowledgeFile(id);
  }

  const uploaded = await client.files.create({
    file: await toFile(input.bytes, filename, { type: "application/pdf" }),
    purpose: "assistants",
  });

  try {
    const vsFile = await client.vectorStores.files.createAndPoll(
      vectorStoreId,
      { file_id: uploaded.id },
      { pollIntervalMs: 1000 },
    );
    return {
      id: vsFile.id,
      filename,
      status: vsFile.status,
      createdAt: vsFile.created_at,
      error: vsFile.last_error?.message ?? null,
    };
  } catch (err) {
    await client.files.delete(uploaded.id).catch(() => undefined);
    throw err;
  }
}
