import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NTC Control Mobile App",
  description:
    "NTC Control – configure and validate Navtelecom devices directly from your smartphone. Efficient on-site setup and device management.",
  keywords: [
    "NTC Control",
    "mobile app",
    "smartphone device config",
  ],
};

export default function NtcControlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
