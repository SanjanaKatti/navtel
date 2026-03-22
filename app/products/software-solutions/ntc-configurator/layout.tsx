import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NTC Configurator",
  description:
    "Full control over Navtelecom device settings, live telemetry, and remote configuration. Professional configuration tool for all Navtelecom devices.",
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
