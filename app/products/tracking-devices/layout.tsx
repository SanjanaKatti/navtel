import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GPS Tracking Devices",
  description:
    "Comprehensive range of telematics devices designed for fleet management, vehicle tracking, fuel monitoring and industrial automation.",
  keywords: [
    "GPS trackers",
    "telematics hardware",
    "fleet tracking devices",
    "START SMART SIGNAL series",
  ],
};

export default function TrackingDevicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
