import emailjs from "@emailjs/browser";

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
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY &&
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  );
}

/**
 * Sends one email per submission. Configure a single EmailJS template with e.g.:
 * form_type, full_name, user_email, reply_to, company, mobile, country, message
 */
export async function sendWebsiteFormEmail(
  params: WebsiteFormEmailPayload,
): Promise<void> {
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

  if (!publicKey || !serviceId || !templateId) {
    throw new Error(
      "EmailJS is not configured. Set NEXT_PUBLIC_EMAILJS_* in .env.local.",
    );
  }

  const templateParams: Record<string, string> = {
    form_type: params.formType,
    full_name: params.fullName,
    user_email: params.userEmail,
    reply_to: params.userEmail,
    company: params.company || "—",
    mobile: params.mobile,
    country: params.country,
    message: params.message.trim() ? params.message : "—",
  };

  const result = await emailjs.send(
    serviceId,
    templateId,
    templateParams,
    { publicKey },
  );

  if (result.status < 200 || result.status >= 300) {
    throw new Error(result.text || "Email send failed");
  }
}
