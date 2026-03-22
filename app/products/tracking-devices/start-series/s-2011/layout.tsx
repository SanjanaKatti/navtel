import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "S-2011 START GPS Tracker",
  description:
    "S-2011 START series GPS tracker. Basic GPS tracking for location and fuel monitoring. Reliable and cost-effective for fleet operations.",
  keywords: ["S-2011", "START series", "fleet tracker"],
};

export default function S2011Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
