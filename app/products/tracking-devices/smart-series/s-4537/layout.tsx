import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "S-4537 SMART GPS Tracker",
  description:
    "S-4537 SMART series GPS tracker with RS-485, BLE, dual CAN, and custom algorithm for professional fleet telematics.",
  keywords: ["S-4537", "SMART series"],
};

export default function S4537Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
