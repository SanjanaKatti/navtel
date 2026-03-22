import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "S-2010 START GPS Tracker",
  description:
    "S-2010 START series GPS tracker. Ultra-compact, cost-effective fleet tracking with 2G connectivity and essential telematics features.",
  keywords: ["S-2010", "START series", "2G GPS tracker"],
};

export default function S2010Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
