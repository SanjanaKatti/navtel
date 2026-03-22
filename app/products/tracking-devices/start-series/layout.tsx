import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "START Series GPS Trackers",
  description:
    "Cost-effective, ultra-compact START series GPS trackers for essential fleet tracking and entry-level telematics. 2G and 4G connectivity.",
  keywords: [
    "START series",
    "compact GPS tracker",
    "2G 4G tracking",
    "cost-effective telematics",
  ],
};

export default function StartSeriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
