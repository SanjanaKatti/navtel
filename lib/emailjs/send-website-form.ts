import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

/** Trim .env values (spaces / accidental quotes break EmailJS → 400). */
function env(name: string): string | undefined {
  const raw = process.env[name];
  if (typeof raw !== "string") return undefined;
  return raw.trim().replace(/^["']|["']$/g, "");
}

/** Payload keys should match {{variables}} in your EmailJS template (see .env.example). */
export type WebsiteFormEmailPayload = {
  /** Shown in email, e.g. "Newsletter signup", "Contact page", "Sales inquiry" */
  formType: string;
  fullName: string;
  userEmail: string;
  company: string;
  mobile: string;
  country: string;
  message: string;
};

export function isEmailJsConfigured(): boolean {
  return Boolean(
    env("NEXT_PUBLIC_EMAILJS_PUBLIC_KEY") &&
      env("NEXT_PUBLIC_EMAILJS_SERVICE_ID") &&
      env("NEXT_PUBLIC_EMAILJS_TEMPLATE_ID"),
  );
}

function emailJsErrorMessage(err: unknown): string {
  if (err instanceof EmailJSResponseStatus && err.text) {
    return err.text;
  }
  if (err instanceof Error && err.message) {
    return err.message;
  }
  return "Email send failed";
}

/**
 * Sends one email per submission. Configure a single EmailJS template with e.g.:
 * form_type, full_name, user_email, reply_to, company, mobile, country, message
 */
export async function sendWebsiteFormEmail(
  params: WebsiteFormEmailPayload,
): Promise<void> {
  const publicKey = env("NEXT_PUBLIC_EMAILJS_PUBLIC_KEY");
  const serviceId = env("NEXT_PUBLIC_EMAILJS_SERVICE_ID");
  const templateId = env("NEXT_PUBLIC_EMAILJS_TEMPLATE_ID");

  if (!publicKey || !serviceId || !templateId) {
    throw new Error(
      "EmailJS is not configured. Set NEXT_PUBLIC_EMAILJS_* in .env.local.",
    );
  }

  // Keys must match {{variables}} in your EmailJS template.
  // `from_name` / `from_email` are common in EmailJS sample templates — included as extras.
  const templateParams: Record<string, string> = {
    form_type: params.formType,
    full_name: params.fullName,
    user_email: params.userEmail,
    from_name: params.fullName,
    from_email: params.userEmail,
    reply_to: params.userEmail,
    company: params.company || "—",
    mobile: params.mobile,
    country: params.country,
    message: params.message.trim() ? params.message : "—",
  };

  try {
    const result = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      { publicKey },
    );
    if (result.status < 200 || result.status >= 300) {
      throw new Error(result.text || "Email send failed");
    }
  } catch (err: unknown) {
    throw new Error(emailJsErrorMessage(err));
  }
}
