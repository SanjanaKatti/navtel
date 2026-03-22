import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All GPS Tracking Devices",
  description:
    "Browse the complete Navtelecom device catalog. Compare GPS trackers across START, SMART, and SIGNAL series. Filter by connectivity, interfaces, and features.",
  keywords: [
    "Navtelecom device catalog",
    "compare GPS trackers",
    "fleet devices",
  ],
};

export default function AllDevicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
