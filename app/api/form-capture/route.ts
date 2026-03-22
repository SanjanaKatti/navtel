/**
 * TEMPORARY: Captures form submissions when Formspree is not configured.
 * - Logs every submission (check Vercel/deployment logs or `vercel logs`)
 * - Writes to form-submissions-temp.json in project root when possible (e.g. local dev)
 * Remove or replace with Formspree/Resend when ready for production.
 */
import { NextRequest, NextResponse } from "next/server";
import { writeFileSync, existsSync, readFileSync } from "fs";
import { join } from "path";

export type FormCapturePayload = {
  formType: string;
  fullName: string;
  userEmail: string;
  company: string;
  mobile: string;
  country: string;
  message: string;
};

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as FormCapturePayload;
    const timestamp = new Date().toISOString();
    const record = { ...body, _capturedAt: timestamp };

    // Always log - visible in Vercel logs, server logs, etc.
    console.log("[NAVTEL_FORM_SUBMISSION]", JSON.stringify(record, null, 2));

    // Try to append to file (works in local dev; Vercel filesystem is read-only, will skip)
    try {
      const filePath = join(process.cwd(), "form-submissions-temp.json");
      const entries = existsSync(filePath)
        ? JSON.parse(readFileSync(filePath, "utf-8"))
        : [];
      entries.push(record);
      writeFileSync(filePath, JSON.stringify(entries, null, 2), "utf-8");
    } catch {
      // Ignore - e.g. Vercel has read-only fs; logs above already captured it
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("[NAVTEL_FORM_CAPTURE_ERROR]", err);
    return NextResponse.json(
      { error: "Could not capture form" },
      { status: 500 }
    );
  }
}
