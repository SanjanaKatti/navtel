import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Access Navtelecom support resources – knowledge base, Telegram bot, warranty information, and FAQ for GPS trackers and telematics devices.",
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
