import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Navtelecom GPS trackers and telematics devices – START, SMART, and SIGNAL series for fleet management and vehicle tracking.",
  keywords: [
    "GPS trackers",
    "telematics devices",
    "fleet management solutions",
    "Navtelecom products",
  ],
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
