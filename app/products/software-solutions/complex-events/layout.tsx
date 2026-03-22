import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complex Events",
  description:
    "Complex Events – advanced tool for custom tracker logic. Deploy custom algorithms, seamless integration, and CAN-based automation for Navtelecom devices.",
  keywords: [
    "Complex Events",
    "custom logic",
    "NTC Configurator automation",
  ],
};

export default function ComplexEventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
