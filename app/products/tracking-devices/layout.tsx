import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GPS Tracking Devices",
  description:
    "Comprehensive range of Navtelecom telematics devices for fleet management, asset tracking, and vehicle monitoring. START, SMART, and SIGNAL series.",
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
