import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare GPS Trackers",
  description:
    "Compare Navtelecom GPS trackers side by side. Review specifications, connectivity, interfaces, and features across START, SMART, and SIGNAL series.",
  keywords: [
    "Compare Navtelecom devices",
    "tracker comparison",
    "fleet device specs",
  ],
};

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
