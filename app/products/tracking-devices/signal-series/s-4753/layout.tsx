import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "S-4753 SIGNAL GPS Tracker",
  description:
    "S-4753 SIGNAL series GPS tracker with advanced interfaces, CAN, and two-way communication for professional fleet telematics.",
  keywords: ["S-4753", "SIGNAL series"],
};

export default function S4753Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
