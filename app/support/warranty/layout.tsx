import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Warranty",
  description:
    "Understand what is covered, prepare the right diagnostic information and move through the service process with fewer delays.",
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
