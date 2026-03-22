import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CAN SPY",
  description:
    "Navtelecom CAN SPY – integrated CAN analysis module for real-time monitoring, ID filtering, data export, and vehicle diagnostics.",
  keywords: ["CAN SPY", "CAN bus analysis", "vehicle diagnostics"],
};

export default function CanSpyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
