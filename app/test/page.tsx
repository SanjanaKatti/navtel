import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeTest from "./HomeTest";

export const metadata: Metadata = {
  title: "Navtelecom",
  description:
    "GPS trackers and professional software for fleet management, device configuration, and telematics integration.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function HomeTestPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />
      <HomeTest />
      <Footer />
    </div>
  );
}
