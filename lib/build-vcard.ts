import type { BusinessContact } from "@/lib/business-contacts";

/** vCard 3.0 with CRLF line endings */
export function buildVcard(contact: BusinessContact, absoluteOrigin: string): string {
  const photoUrl = `${absoluteOrigin}${contact.imageSrc}`;
  const lines: string[] = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${escapeVcardText(contact.name)}`,
    `ORG:${escapeVcardText(contact.company)}`,
    `TITLE:${escapeVcardText(contact.title)}`,
    `TEL;TYPE=CELL:${contact.phoneE164}`,
    `EMAIL;TYPE=INTERNET:${contact.email}`,
    `URL:${contact.websiteUrl}`,
  ];
  if (contact.linkedInUrl) {
    lines.push(`URL:${contact.linkedInUrl}`);
  }
  lines.push(`PHOTO;VALUE=URI:${photoUrl}`);
  lines.push("END:VCARD");
  return lines.join("\r\n");
}

function escapeVcardText(value: string): string {
  return value.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,");
}
