import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "We design and manufacture professional telematics hardware for system integrators and fleet operators worldwide.",
  keywords: [
    "Navtelecom",
    "GPS tracking company",
    "telematics manufacturer",
    "fleet solutions",
  ],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
