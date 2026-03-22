import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "S-2437 SMART GPS Tracker",
  description:
    "S-2437 SMART series GPS tracker with advanced interfaces and telematics features for fleet management.",
  keywords: ["S-2437", "SMART series"],
};

export default function S2437Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
