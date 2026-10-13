import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Have a question about our products, software, partnership opportunities or company? Choose the appropriate contact channel or send us a message.",
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
