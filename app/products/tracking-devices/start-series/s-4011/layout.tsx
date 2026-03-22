import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "S-4011 START GPS Tracker",
  description:
    "S-4011 START series 4G GPS tracker. Compact design with engine hours calculation and remote control for modern fleet management.",
  keywords: ["S-4011", "4G GPS tracker"],
};

export default function S4011Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
