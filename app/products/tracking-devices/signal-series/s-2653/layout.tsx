import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "S-2653 SIGNAL GPS Tracker",
  description:
    "S-2653 SIGNAL series GPS tracker with dual CAN, RS-485, RS-232, BLE, and two-way communication for professional telematics.",
  keywords: ["S-2653", "SIGNAL series"],
};

export default function S2653Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
