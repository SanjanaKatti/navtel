import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: {
    default: "Navtelecom | GPS Tracking & Telematics Solutions",
    template: "%s | Navtelecom",
  },
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
      </body>
    </html>
  );
}
