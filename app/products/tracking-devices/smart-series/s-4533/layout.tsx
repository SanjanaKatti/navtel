import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "S-4533 SMART GPS Tracker",
  description:
    "S-4533 SMART series GPS tracker with RS-485, RS-232, BLE, Eco Driving, and remote control for fleet management.",
  keywords: ["S-4533", "SMART series"],
};

export default function S4533Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
