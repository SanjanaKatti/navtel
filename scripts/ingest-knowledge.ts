/**
 * Uploads every supported file in ./knowledge to an OpenAI vector store.
 *
 *   npm run ingest              -> uses OPENAI_VECTOR_STORE_ID, or creates a new store
 *   npm run ingest -- --new     -> always creates a new store
 *   npm run ingest -- --refresh -> re-upload files whose name already exists in the store
 *
 * Files already in the store (matched by filename) are skipped by default.
 *
 * Reads OPENAI_API_KEY (and OPENAI_VECTOR_STORE_ID) from .env.local.
 */
import fs from "node:fs";
import path from "node:path";
import OpenAI from "openai";

for (const file of [".env.local", ".env"]) {
  if (fs.existsSync(file)) process.loadEnvFile(file);
}

const KNOWLEDGE_DIR = path.resolve(process.cwd(), "knowledge");
const SUPPORTED = new Set([
  ".pdf",
  ".docx",
  ".doc",
  ".pptx",
  ".txt",
  ".md",
  ".html",
  ".json",
  ".csv",
]);

async function main() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error("OPENAI_API_KEY is missing in .env.local");

  if (!fs.existsSync(KNOWLEDGE_DIR)) {
    throw new Error(`Folder not found: ${KNOWLEDGE_DIR}`);
  }

  const files = fs
    .readdirSync(KNOWLEDGE_DIR)
    .filter((f) => SUPPORTED.has(path.extname(f).toLowerCase()))
    .filter((f) => f.toLowerCase() !== "readme.md")
    .map((f) => path.join(KNOWLEDGE_DIR, f));

  if (files.length === 0) {
    console.log("No documents found in ./knowledge. Add files and re-run.");
    return;
  }

  const client = new OpenAI({ apiKey });
  const forceNew = process.argv.includes("--new");
  let vectorStoreId = forceNew ? "" : (process.env.OPENAI_VECTOR_STORE_ID ?? "");

  if (!vectorStoreId) {
    const store = await client.vectorStores.create({
      name: "navtel-kb",
      // Trial safety net: auto-delete 30 days after last activity.
      expires_after: { anchor: "last_active_at", days: 30 },
    });
    vectorStoreId = store.id;
    console.log(`Created vector store: ${vectorStoreId}`);
    console.log(`Add this to .env.local:\nOPENAI_VECTOR_STORE_ID=${vectorStoreId}\n`);
  } else {
    console.log(`Using existing vector store: ${vectorStoreId}`);
  }

  // Find files already in the store (by filename) so re-runs don't create duplicates.
  const existing = new Map<string, string>(); // filename -> file id
  for await (const vsFile of client.vectorStores.files.list(vectorStoreId, { limit: 100 })) {
    const meta = await client.files.retrieve(vsFile.id);
    existing.set(meta.filename, vsFile.id);
  }

  const refresh = process.argv.includes("--refresh");
  const toUpload: string[] = [];
  for (const f of files) {
    const name = path.basename(f);
    const oldId = existing.get(name);
    if (!oldId) {
      toUpload.push(f);
    } else if (refresh) {
      await client.vectorStores.files.delete(oldId, { vector_store_id: vectorStoreId });
      await client.files.delete(oldId).catch(() => undefined);
      console.log(`Replacing: ${name}`);
      toUpload.push(f);
    } else {
      console.log(`Skipping (already uploaded): ${name}`);
    }
  }

  if (toUpload.length === 0) {
    console.log("Nothing new to upload. Use --refresh to re-upload changed files.");
    return;
  }

  console.log(`Uploading ${toUpload.length} file(s)...`);
  const batch = await client.vectorStores.fileBatches.uploadAndPoll(
    vectorStoreId,
    { files: toUpload.map((f) => fs.createReadStream(f)) },
  );

  console.log("Batch status:", batch.status, batch.file_counts);
  if (batch.file_counts.failed > 0) {
    console.warn("Some files failed. Check the OpenAI dashboard > Storage.");
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
});
