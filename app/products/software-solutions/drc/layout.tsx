import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DRC Device Management",
  description:
    "Configure, diagnose and maintain Navtelecom devices remotely—from individual units to large-scale deployments—through a single web interface.",
  keywords: [
    "DRC",
    "remote device management",
    "firmware updates",
    "bulk configuration",
  ],
};

export default function DrcLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
