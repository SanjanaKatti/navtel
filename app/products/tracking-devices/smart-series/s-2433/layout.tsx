import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "S-2433 SMART GPS Tracker",
  description:
    "S-2433 SMART series GPS tracker with RS-485, RS-232, BLE, CAN, and custom algorithm for advanced telematics.",
  keywords: ["S-2433", "SMART series"],
};

export default function S2433Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
