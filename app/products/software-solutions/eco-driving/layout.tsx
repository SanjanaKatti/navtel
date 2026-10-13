import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eco Driving",
  description:
    "Detect acceleration, braking, cornering and other critical events with calibrated on-device motion analysis. Send structured driving data to your fleet platform for scoring, reporting and driver coaching.",
  keywords: [
    "Eco Driving",
    "driving behavior",
    "on-device analysis",
    "fleet safety",
  ],
};

export default function EcoDrivingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
