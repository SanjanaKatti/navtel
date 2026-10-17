import { NextRequest, NextResponse } from "next/server";
import {
  MAX_PDF_BYTES,
  knowledgeErrorResponse,
  listKnowledgeFiles,
  uploadKnowledgePdf,
  type KnowledgeFile,
} from "@/lib/openai-knowledge";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 300;

const FILE_ID = /^file-[A-Za-z0-9]+$/;

function jsonError(err: unknown) {
  const { status, message } = knowledgeErrorResponse(err);
  return NextResponse.json({ error: message }, { status });
}

export async function GET() {
  try {
    const files = await listKnowledgeFiles();
    return NextResponse.json(
      { files },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (err) {
    return jsonError(err);
  }
}

export async function POST(request: NextRequest) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_PDF_BYTES + 1024 * 1024) {
    return NextResponse.json(
      { error: "File is too large. Maximum size is 32 MB." },
      { status: 413 },
    );
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid upload." }, { status: 400 });
  }

  const file = form.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Choose a PDF to upload." }, { status: 400 });
  }
  if (file.size > MAX_PDF_BYTES) {
    return NextResponse.json(
      { error: "File is too large. Maximum size is 32 MB." },
      { status: 413 },
    );
  }

  const replaceRaw = form.get("replaceId");
  const replaceId =
    typeof replaceRaw === "string" && replaceRaw.length > 0 ? replaceRaw : undefined;
  if (replaceId && !FILE_ID.test(replaceId)) {
    return NextResponse.json({ error: "Invalid file id." }, { status: 400 });
  }

  try {
    const bytes = Buffer.from(await file.arrayBuffer());
    const uploaded: KnowledgeFile = await uploadKnowledgePdf({
      bytes,
      filename: file.name,
      replaceId,
    });
    if (uploaded.status !== "completed") {
      return NextResponse.json(
        {
          error: uploaded.error ?? "OpenAI could not index this PDF.",
          file: uploaded,
        },
        { status: 422 },
      );
    }
    return NextResponse.json(
      { file: uploaded },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (err) {
    return jsonError(err);
  }
}
