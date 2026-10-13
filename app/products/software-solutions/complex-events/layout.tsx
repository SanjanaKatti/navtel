import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complex Events",
  description:
    "Build custom automation, integrate third-party equipment and process data directly on supported Navtelecom devices with Complex Events.",
  keywords: [
    "Complex Events",
    "CE Blocks",
    "CE Code",
    "on-device logic",
    "NTC Configurator",
  ],
};

export default function ComplexEventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
