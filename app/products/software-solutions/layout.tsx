import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Solutions",
  description:
    "Configure devices, decode vehicle data, deploy updates, build custom logic and support fleet operations with a connected suite of Navtelecom tools.",
  keywords: [
    "NTC Configurator",
    "CAN SPY",
    "DRC",
    "telematics software",
    "device configuration",
  ],
};

export default function SoftwareSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
