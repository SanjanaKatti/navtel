import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "S-4513 SMART GPS Tracker",
  description:
    "S-4513 SMART series GPS tracker with RS-485, BLE, 1-Wire sensors, and Eco Driving for fleet telematics.",
  keywords: ["S-4513", "SMART series"],
};

export default function S4513Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
