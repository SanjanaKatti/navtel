import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Browse practical guidance for Navtelecom devices, software, installation, integration and technical support.",
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
