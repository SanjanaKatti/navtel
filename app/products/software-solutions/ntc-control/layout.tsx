import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NTC Control Mobile App",
  description:
    "Configure, diagnose and service supported Navtelecom devices locally or remotely from your smartphone, without carrying a laptop.",
  keywords: [
    "NTC Control",
    "mobile app",
    "Bluetooth",
    "device configuration",
  ],
};

export default function NtcControlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
