import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMART Series GPS Trackers",
  description:
    "Flexible connectivity and custom logic. SMART series supports CAN, BLE, RS-485 for fuel monitoring, sensor integration, and advanced telematics.",
  keywords: [
    "SMART series",
    "CAN bus tracker",
    "BLE telematics",
    "fuel monitoring",
  ],
};

export default function SmartSeriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
