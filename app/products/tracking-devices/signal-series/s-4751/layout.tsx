import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "S-4751 SIGNAL GPS Tracker",
  description:
    "S-4751 SIGNAL series GPS tracker with CAN, RS-485, RS-232, BLE, and two-way communication for fleet management and diagnostics.",
  keywords: ["S-4751", "SIGNAL series"],
};

export default function S4751Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
