import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Find technical documentation or create a support ticket for device configuration, installation, diagnostics and integration questions.",
  keywords: [
    "Navtelecom support",
    "technical support",
    "warranty",
    "knowledge base",
    "FAQ",
  ],
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
