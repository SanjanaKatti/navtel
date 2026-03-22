import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "S-2613 SIGNAL GPS Tracker",
  description:
    "S-2613 SIGNAL series GPS tracker with RS-485, BLE, multiple inputs and outputs, and two-way communication for pro-grade fleet telematics.",
  keywords: ["S-2613", "SIGNAL series"],
};

export default function S2613Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
