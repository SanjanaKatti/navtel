import { NextRequest, NextResponse } from "next/server";
import {
  knowledgeErrorResponse,
  uploadKnowledgePdf,
  type KnowledgeFile,
} from "@/lib/openai-knowledge";
import { WikiFetchError, wikiUrlToPdf } from "@/lib/wiki-pdf";

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
    const pdf = await wikiUrlToPdf(url);
    const uploaded: KnowledgeFile = await uploadKnowledgePdf({
      bytes: pdf.bytes,
      filename: pdf.filename,
    });
    if (uploaded.status !== "completed") {
      return NextResponse.json(
        {
          error: uploaded.error ?? "OpenAI could not index this page.",
          file: uploaded,
        },
        { status: 422 },
      );
    }
    return NextResponse.json(
      { file: uploaded, sourceUrl: pdf.sourceUrl },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (err) {
    return jsonError(err);
  }
}
