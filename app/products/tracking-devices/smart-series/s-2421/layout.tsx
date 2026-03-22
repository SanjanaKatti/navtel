import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "S-2421 SMART GPS Tracker",
  description:
    "S-2421 SMART series GPS tracker with BLE, 1-Wire sensors, Eco Driving, and engine hours calculation for advanced fleet telematics.",
  keywords: ["S-2421", "SMART series"],
};

export default function S2421Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
