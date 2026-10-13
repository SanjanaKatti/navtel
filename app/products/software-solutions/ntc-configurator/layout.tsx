import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NTC Configurator",
  description:
    "Configure, diagnose and update Navtelecom devices. Connect locally via USB or Bluetooth, or work remotely through RCS.",
  keywords: [
    "NTC Configurator",
    "device configuration",
    "telemetry",
    "remote setup",
  ],
};

export default function NtcConfiguratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
