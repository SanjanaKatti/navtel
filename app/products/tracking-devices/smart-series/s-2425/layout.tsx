import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "S-2425 SMART GPS Tracker",
  description:
    "S-2425 SMART series GPS tracker with RS-485, RS-232, BLE, Eco Driving, and engine hours for professional fleet management.",
  keywords: ["S-2425", "SMART series"],
};

export default function S2425Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
