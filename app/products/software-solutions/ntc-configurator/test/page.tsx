import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NtcConfiguratorTest from "./NtcConfiguratorTest";

export const metadata: Metadata = {
  title: "NTC Configurator",
  description:
    "Configure, diagnose and update Navtelecom devices. Connect locally via USB or Bluetooth, or work remotely through RCS.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NtcConfiguratorTestPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />
      <NtcConfiguratorTest />
      <Footer />
    </div>
  );
}
