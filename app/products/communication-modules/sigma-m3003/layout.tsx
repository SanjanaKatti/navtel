import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIGMA M-3003",
  description:
    "A host-controlled communication module with Wi-Fi, Bluetooth, RS-232, RS-485, one universal input and one digital output.",
  keywords: [
    "SIGMA M-3003",
    "communication module",
    "Wi-Fi",
    "Bluetooth",
    "AT-MODEM",
    "Navtelecom",
  ],
};

export default function SigmaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
