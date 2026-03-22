import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Knowledge Base",
  description:
    "Navtelecom Knowledge Base – technical documentation, setup guides, SMS commands, NTC Configurator docs, and troubleshooting for Navtelecom devices.",
  keywords: [
    "Navtelecom wiki",
    "setup guides",
    "documentation",
    "SMS commands",
  ],
};

export default function KnowledgeBaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
