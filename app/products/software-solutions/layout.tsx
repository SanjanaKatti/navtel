import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Solutions",
  description:
    "Professional software tools for Navtelecom devices – NTC Configurator, CAN SPY, DRC, Complex Events, NTC Control, and Eco Driving for configuration, diagnostics, and fleet management.",
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
