import { NextResponse } from "next/server";
import { buildVcard } from "@/lib/build-vcard";
import { getBusinessContactBySlug } from "@/lib/business-contacts";

function originFromRequest(request: Request): string {
  const url = new URL(request.url);
  const forwardedProto = request.headers.get("x-forwarded-proto");
  const forwardedHost = request.headers.get("x-forwarded-host");
  const host = forwardedHost ?? request.headers.get("host") ?? url.host;
  const protocol =
    forwardedProto ?? (url.protocol === "https:" ? "https" : "http");
  return `${protocol}://${host}`;
}

export async function GET(
  _request: Request,
  context: { params: Promise<{ slug: string }> },
) {
  const { slug } = await context.params;
  const contact = getBusinessContactBySlug(slug);
  if (!contact) {
    return new NextResponse("Not found", { status: 404 });
  }

  const body = buildVcard(contact, originFromRequest(_request));
  const filename = `${contact.slug}.vcf`;

  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "private, max-age=3600",
    },
  });
}
