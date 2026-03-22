import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Warranty",
  description:
    "Navtelecom limited warranty – coverage details, service terms, and straightforward claims process for all Navtelecom GPS trackers and telematics devices.",
  keywords: [
    "Navtelecom warranty",
    "device coverage",
    "service terms",
  ],
};

export default function WarrantyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
