import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Navtelecom GPS trackers – configurator download, remote management, SMS commands, setup, and integration.",
  keywords: [
    "Navtelecom FAQ",
    "configurator download",
    "remote management",
  ],
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
