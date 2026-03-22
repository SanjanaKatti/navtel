import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "S-2651 SIGNAL GPS Tracker",
  description:
    "S-2651 SIGNAL series GPS tracker with RS-485, RS-232, BLE, CAN, and two-way communication for advanced fleet management.",
  keywords: ["S-2651", "SIGNAL series"],
};

export default function S2651Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
