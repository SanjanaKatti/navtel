import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  const recipientEmail = process.env.BREVO_RECIPIENT_EMAIL;

  // --- DIAGNOSTIC: log which env vars are present (never log the full key)
  console.log("[NAVTEL_SEND_EMAIL] ENV CHECK", {
    hasApiKey: Boolean(apiKey),
    apiKeyPrefix: apiKey ? apiKey.slice(0, 12) + "…" : "MISSING",
    senderEmail: senderEmail ?? "MISSING",
    recipientEmail: recipientEmail ?? "MISSING",
  });

  if (!apiKey || !senderEmail || !recipientEmail) {
    console.error("[NAVTEL_SEND_EMAIL] One or more env vars are missing.");
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  let body: {
    formType?: string;
    fullName?: string;
    userEmail?: string;
    company?: string;
    mobile?: string;
    country?: string;
    message?: string;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const {
    formType = "Contact",
    fullName = "—",
    userEmail = "",
    company = "—",
    mobile = "—",
    country = "—",
    message = "—",
  } = body;

  const htmlContent = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a2e">
      <h2 style="color:#0057ff">New ${formType} Submission</h2>
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:8px 0;font-weight:bold;width:140px">Name</td><td>${fullName}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold">Email</td><td><a href="mailto:${userEmail}">${userEmail}</a></td></tr>
        <tr><td style="padding:8px 0;font-weight:bold">Company</td><td>${company}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold">Mobile</td><td>${mobile}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold">Country</td><td>${country}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold;vertical-align:top">Message</td><td style="white-space:pre-wrap">${message}</td></tr>
      </table>
      <hr style="margin-top:24px;border:none;border-top:1px solid #e5e7eb"/>
      <p style="font-size:12px;color:#6b7280">Sent from the Navtel website contact form.</p>
    </div>
  `;

  const brevoPayload = {
    sender: { name: "Navtel Website", email: senderEmail },
    to: [{ email: recipientEmail, name: "Navtel" }],
    ...(userEmail ? { replyTo: { email: userEmail, name: fullName } } : {}),
    subject: `[Navtel] ${formType} from ${fullName}`,
    htmlContent,
  };

  // --- DIAGNOSTIC: log what we're sending to Brevo (minus htmlContent to keep logs short)
  console.log("[NAVTEL_SEND_EMAIL] Calling Brevo API with payload (no htmlContent):", {
    sender: brevoPayload.sender,
    to: brevoPayload.to,
    replyTo: (brevoPayload as { replyTo?: unknown }).replyTo,
    subject: brevoPayload.subject,
  });

  let brevoRes: Response;
  try {
    brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(brevoPayload),
    });
  } catch (networkErr) {
    console.error("[NAVTEL_SEND_EMAIL] Network error reaching Brevo:", networkErr);
    return NextResponse.json(
      { error: "Could not reach email service. Check server network." },
      { status: 502 },
    );
  }

  // --- DIAGNOSTIC: always log Brevo's HTTP status
  console.log("[NAVTEL_SEND_EMAIL] Brevo response status:", brevoRes.status);

  if (!brevoRes.ok) {
    const errText = await brevoRes.text();
    // Log the full Brevo error in server logs so you can diagnose it
    console.error(
      `[NAVTEL_SEND_EMAIL] Brevo rejected the request (HTTP ${brevoRes.status}):`,
      errText,
    );
    // Return the real Brevo error to the browser (visible in Network tab response body)
    return NextResponse.json(
      {
        error: "Could not send email. Please try again.",
        _brevoStatus: brevoRes.status,
        _brevoError: errText,
      },
      { status: 502 },
    );
  }

  console.log("[NAVTEL_SEND_EMAIL] Email sent successfully.");
  return NextResponse.json({ ok: true }, { status: 200 });
}
