import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIGNAL Series GPS Trackers",
  description:
    "External antennas and pro-grade features. SIGNAL series for extended GNSS, fuel control, diagnostics, and voice communication with drivers.",
  keywords: [
    "SIGNAL series",
    "external antenna GPS",
    "voice communication tracker",
  ],
};

export default function SignalSeriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
