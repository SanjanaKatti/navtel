import { FORMSPREE_IDS } from "@/lib/formspree-config";

export type FormPayload = {
  formType: string;
  fullName: string;
  userEmail: string;
  company: string;
  mobile: string;
  country: string;
  message: string;
};

export function isFormspreeConfigured(): boolean {
  return Boolean(
    FORMSPREE_IDS.contact &&
      FORMSPREE_IDS.newsletter &&
      FORMSPREE_IDS.salesInquiry,
  );
}

function getFormId(formType: "contact" | "newsletter" | "salesInquiry"): string {
  const id = FORMSPREE_IDS[formType];
  if (!id) {
    throw new Error(
      "Formspree is not configured. Add form IDs to lib/formspree-config.ts",
    );
  }
  return id;
}

/**
 * Submits form data to Formspree. Formspree sends the email to your configured recipient.
 * No API keys or .env needed — just form IDs from https://formspree.io
 */
export async function submitToFormspree(
  formType: "contact" | "newsletter" | "salesInquiry",
  params: FormPayload,
): Promise<void> {
  const formId = getFormId(formType);
  const res = await fetch(`https://formspree.io/f/${formId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      _form_type: params.formType,
      full_name: params.fullName,
      email: params.userEmail,
      company: params.company || "—",
      mobile: params.mobile,
      country: params.country,
      message: params.message.trim() ? params.message : "—",
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Could not send. Try again or email us directly.");
  }
}

/**
 * TEMPORARY: Captures form data locally when Formspree is not configured.
 * - Submissions are logged (check deployment logs)
 * - When running locally, also saved to form-submissions-temp.json
 * Replace with Formspree when ready.
 */
export async function submitToTempCapture(params: FormPayload): Promise<void> {
  const base = typeof window !== "undefined" ? window.location.origin : "";
  const res = await fetch(`${base}/api/form-capture`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      formType: params.formType,
      fullName: params.fullName,
      userEmail: params.userEmail,
      company: params.company || "—",
      mobile: params.mobile,
      country: params.country,
      message: params.message?.trim() || "—",
    }),
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(
      (data as { error?: string })?.error || "Could not save. Try again.",
    );
  }
}
