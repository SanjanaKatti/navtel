import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Navtelecom – a global GPS tracking and telematics solutions provider for fleet management, hardware production, and integration support.",
  keywords: [
    "Navtelecom",
    "GPS tracking company",
    "telematics manufacturer",
    "fleet solutions",
  ],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
