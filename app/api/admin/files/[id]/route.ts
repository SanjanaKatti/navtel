import { NextRequest, NextResponse } from "next/server";
import {
  deleteKnowledgeFile,
  knowledgeErrorResponse,
} from "@/lib/openai-knowledge";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const FILE_ID = /^file-[A-Za-z0-9]+$/;

function jsonError(err: unknown) {
  const { status, message } = knowledgeErrorResponse(err);
  return NextResponse.json({ error: message }, { status });
}

export async function DELETE(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
  if (!FILE_ID.test(id)) {
    return NextResponse.json({ error: "Invalid file id." }, { status: 400 });
  }

  try {
    await deleteKnowledgeFile(id);
    return NextResponse.json(
      { deleted: true },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (err) {
    return jsonError(err);
  }
}
