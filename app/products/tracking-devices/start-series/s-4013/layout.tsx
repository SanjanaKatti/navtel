import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "S-4013 START GPS Tracker",
  description:
    "S-4013 START series 4G GPS tracker. Ultra-compact with BLE and engine hours for efficient fleet tracking.",
  keywords: ["S-4013", "4G START"],
};

export default function S4013Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
