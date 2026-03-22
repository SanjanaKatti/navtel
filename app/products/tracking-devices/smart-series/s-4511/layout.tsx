import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "S-4511 SMART GPS Tracker",
  description:
    "S-4511 SMART series GPS tracker with 5 input lines, BLE, engine hours, Eco Driving, and custom algorithm.",
  keywords: ["S-4511", "SMART series"],
};

export default function S4511Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
