import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrivacyPage from "./PrivacyPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Navtelecom",
  description:
    'This Privacy Policy explains how NAVTELECOM ("we", "us", "our") collects, uses, and protects personal data.',
};

export default function PrivacyRoute() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />
      <PrivacyPage />
      <Footer />
    </div>
  );
}
