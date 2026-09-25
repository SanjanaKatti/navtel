import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "S-4511 SMART GPS Tracker",
  description:
    "S-4511 SMART series GPS tracker with BLE, 1-Wire sensors, Eco Driving, and engine hours calculation for advanced fleet telematics.",
  keywords: ["S-4511", "SMART series"],
};

export default function S4511Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
