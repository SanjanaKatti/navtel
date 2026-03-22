import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Navtelecom for sales inquiries, GPS tracker quotes, and technical support. Get in touch with our team for fleet management solutions.",
  keywords: [
    "Contact Navtelecom",
    "sales inquiry",
    "support",
    "GPS tracker quote",
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
