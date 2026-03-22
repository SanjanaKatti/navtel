import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "S-2423 SMART GPS Tracker",
  description:
    "S-2423 SMART series GPS tracker with RS-485, BLE, and Eco Driving for fuel monitoring and sensor integration.",
  keywords: ["S-2423", "RS-485 tracker"],
};

export default function S2423Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
