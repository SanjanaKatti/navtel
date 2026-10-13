import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Knowledge Base",
  description:
    "Technical documentation, setup guides and engineering reference materials for Navtelecom devices and software.",
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
