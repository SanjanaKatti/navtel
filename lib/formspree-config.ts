/**
 * Formspree form IDs. No .env required.
 *
 * Setup:
 * 1. Go to https://formspree.io and sign up (free, 50 submissions/month)
 * 2. Create 3 forms: Contact, Newsletter, Sales Inquiry
 * 3. For each form, set the recipient email (where submissions will be sent)
 * 4. Copy the form ID from the endpoint URL (e.g. from https://formspree.io/f/xyzk8abd use "xyzk8abd")
 * 5. Paste below
 */
export const FORMSPREE_IDS = {
  contact: "",
  newsletter: "",
  salesInquiry: "",
} as const;
