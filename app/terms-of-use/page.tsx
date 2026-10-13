import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TermsOfUsePage from "./TermsOfUsePage";

export const metadata: Metadata = {
  title: "Terms of Use | Navtelecom",
  description:
    'These Terms of Use ("Terms") govern your use of NAVTELECOM products, services, website, and support channels.',
};

export default function TermsOfUseRoute() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />
      <TermsOfUsePage />
      <Footer />
    </div>
  );
}
