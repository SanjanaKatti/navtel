import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CAN Spy",
  description:
    "CAN Spy is Navtelecom’s professional environment for capturing, analyzing and decoding vehicle CAN data, testing decoding files and recording CAN traffic.",
  keywords: [
    "CAN Spy",
    "CAN bus analysis",
    "CAN decoding",
    "vehicle diagnostics",
    "NTC Configurator",
  ],
};

export default function CanSpyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
