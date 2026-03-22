import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "S-2435 SMART GPS Tracker",
  description:
    "S-2435 SMART series GPS tracker with CAN, BLE, RS-485, RS-232, and custom algorithm for fleet telematics.",
  keywords: ["S-2435", "SMART series"],
};

export default function S2435Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
