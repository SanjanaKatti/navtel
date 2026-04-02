import type { BusinessContact } from "@/lib/business-contacts";

/** Split display name into vCard N components (Family;Given;...) for better mobile import */
function splitNameForVcard(fullName: string): { family: string; given: string } {
  const t = fullName.trim();
  if (!t) return { family: "", given: "" };
  const parts = t.split(/\s+/);
  if (parts.length === 1) return { family: "", given: parts[0]! };
  return { family: parts[parts.length - 1]!, given: parts.slice(0, -1).join(" ") };
}

/** vCard 3.0 with CRLF line endings */
export function buildVcard(contact: BusinessContact, absoluteOrigin: string): string {
  const photoUrl = `${absoluteOrigin}${contact.imageSrc}`;
  const { family, given } = splitNameForVcard(contact.name);
  const lines: string[] = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${escapeVcardText(contact.name)}`,
    `N:${escapeVcardText(family)};${escapeVcardText(given)};;;`,
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
