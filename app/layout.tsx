import type { Metadata } from "next";
import { Barlow, Geist_Mono } from "next/font/google";
import { CookieConsent } from "@/components/CookieConsent";
import { GoogleAnalyticsConsentGate } from "@/components/GoogleAnalyticsConsentGate";
import "./globals.css";
import { WithChunkLoadProtection } from "@/components/ChunkLoadErrorBoundary";

const barlow = Barlow({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://navtelecom-iot.com"),
  title: "Navtelecom",
  description:
    "GPS Trackers for fleet management – Reliable tracking from Navtelecom",
  keywords: [
    "GPS tracking",
    "telematics",
    "fleet management",
    "vehicle tracking",
    "asset tracking",
    "Navtelecom",
  ],
  icons: {
    icon: "/favicon_navtel.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlow.variable} ${geistMono.variable} antialiased`}
      >
        <WithChunkLoadProtection>{children}</WithChunkLoadProtection>
        <GoogleAnalyticsConsentGate />
        <CookieConsent />
      </body>
    </html>
  );
}
