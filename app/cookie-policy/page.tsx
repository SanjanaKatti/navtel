import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookiePolicyPage from "./CookiePolicyPage";

export const metadata: Metadata = {
  title: "Cookie Policy | Navtelecom",
  description:
    "This Cookie Policy explains how NAVTELECOM uses cookies and similar technologies on our website.",
};

export default function CookiePolicyRoute() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />
      <CookiePolicyPage />
      <Footer />
    </div>
  );
}
