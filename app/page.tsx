import Footer from "@/components/Footer";
import HomePage from "@/components/home/HomePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GPS Tracking Devices & Telematics Solutions | Navtelecom",
  description:
    "GPS tracking devices, CAN engineering tools and software for configuring, deploying and supporting telematics projects.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#0F172A]">
      <HomePage />
      <Footer />
    </div>
  );
}
