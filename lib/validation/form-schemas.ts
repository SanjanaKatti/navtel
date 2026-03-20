import { z, type infer as ZodInfer } from "zod";

/** Trim and enforce length for free-text fields */
function textField(
  minLen: number,
  maxLen: number,
  emptyMsg: string,
  maxMsg?: string,
) {
  return z
    .string()
    .trim()
    .min(minLen, emptyMsg)
    .max(maxLen, maxMsg ?? `Use at most ${maxLen} characters`);
}

/** International-style phone: digits and common separators, min meaningful length */
const phoneSchema = z
  .string()
  .trim()
  .min(8, "Enter a valid phone number")
  .max(24, "Phone number is too long")
  .regex(
    /^[\d\s+().-]+$/,
    "Use only digits, spaces, and + ( ) . -",
  )
  .refine(
    (val) => val.replace(/\D/g, "").length >= 7,
    "Enter at least 7 digits",
  );

const messageSchema = z
  .string()
  .trim()
  .min(10, "Please enter at least 10 characters")
  .max(4000, "Message is too long (max 4000 characters)");

/** Footer newsletter modal */
export const newsletterSchema = z.object({
  company: textField(2, 200, "Company name is required"),
  fullName: textField(2, 120, "Full name is required"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Enter a valid email address"),
  mobile: phoneSchema,
  country: textField(2, 100, "Country is required"),
});

/** Product lineup “Contact sales” modal */
export const salesInquirySchema = z.object({
  fullName: textField(2, 120, "Full name is required"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Enter a valid email address"),
  mobile: phoneSchema,
  country: textField(2, 100, "Country is required"),
  message: messageSchema,
});

/** /contact page */
export const contactPageSchema = z.object({
  name: textField(2, 120, "Name is required"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Enter a valid email address"),
  company: textField(2, 200, "Company name is required"),
  mobile: phoneSchema,
  country: textField(2, 100, "Country is required"),
  message: messageSchema,
});

export type NewsletterFormValues = ZodInfer<typeof newsletterSchema>;
export type SalesInquiryFormValues = ZodInfer<typeof salesInquirySchema>;
export type ContactPageFormValues = ZodInfer<typeof contactPageSchema>;
