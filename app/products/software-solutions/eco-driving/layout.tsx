import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eco Driving",
  description:
    "Eco Driving – understand how vehicles are really driven. Analyze driving behavior using motion sensors and vehicle telemetry to improve fleet safety and fuel efficiency.",
  keywords: [
    "Eco Driving",
    "driving behavior",
    "fleet safety",
    "fuel efficiency",
  ],
};

export default function EcoDrivingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
