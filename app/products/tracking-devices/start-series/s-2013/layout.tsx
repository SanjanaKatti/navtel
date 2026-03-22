import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "S-2013 START GPS Tracker",
  description:
    "S-2013 START series GPS tracker with RS-485, Eco Driving, and custom logic. Advanced features for fleet management and transport automation.",
  keywords: ["S-2013", "RS-485", "Eco Driving"],
};

export default function S2013Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
