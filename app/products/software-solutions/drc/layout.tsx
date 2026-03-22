import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DRC Device Management",
  description:
    "DRC – mass device management for Navtelecom fleet. Control, update, and manage thousands of devices from a single web interface. Bulk configuration and firmware updates.",
  keywords: [
    "DRC",
    "mass device management",
    "fleet configuration",
    "firmware updates",
  ],
};

export default function DrcLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
