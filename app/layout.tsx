import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CookieConsent } from "@/components/CookieConsent";
import { GoogleAnalyticsConsentGate } from "@/components/GoogleAnalyticsConsentGate";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <GoogleAnalyticsConsentGate />
        <CookieConsent />
      </body>
    </html>
  );
}
