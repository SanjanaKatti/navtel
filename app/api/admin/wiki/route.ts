import { NextRequest, NextResponse } from "next/server";
import {
  knowledgeErrorResponse,
  uploadKnowledgePdf,
  type KnowledgeFile,
} from "@/lib/openai-knowledge";
import { WikiFetchError, wikiUrlToDocuments } from "@/lib/wiki-pdf";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 300;

function jsonError(err: unknown) {
  if (err instanceof WikiFetchError) {
    return NextResponse.json({ error: err.message }, { status: err.status });
  }
  const { status, message } = knowledgeErrorResponse(err);
  return NextResponse.json({ error: message }, { status });
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Enter a Wikipedia or NTC Wiki link." }, { status: 400 });
  }

  const url =
    typeof body === "object" && body !== null && "url" in body && typeof body.url === "string"
      ? body.url
      : "";

  try {
    const documents = await wikiUrlToDocuments(url);
    const files: KnowledgeFile[] = [];
    const failures: string[] = [...documents.warnings];
    for (const pdf of documents.files) {
      const uploaded = await uploadKnowledgePdf({
        bytes: pdf.bytes,
        filename: pdf.filename,
      });
      if (uploaded.status !== "completed") {
        failures.push(uploaded.error ?? `OpenAI could not index ${pdf.filename}.`);
        continue;
      }
      files.push(uploaded);
    }
    if (files.length === 0) {
      return NextResponse.json(
        { error: failures[0] ?? "OpenAI could not index this page." },
        { status: 422 },
      );
    }
    return NextResponse.json(
      { files, warnings: failures, sourceUrl: url },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (err) {
    return jsonError(err);
  }
}
