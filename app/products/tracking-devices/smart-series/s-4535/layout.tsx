import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "S-4535 SMART GPS Tracker",
  description:
    "S-4535 SMART series GPS tracker with RS-485, RS-232, BLE, CAN, and custom algorithm for advanced telematics.",
  keywords: ["S-4535", "SMART series"],
};

export default function S4535Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
