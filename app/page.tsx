import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import ProductLineup from "@/components/ProductLineup";
import ToolsSection from "@/components/ToolsSection";
import StatsAndFAQ from "@/components/StatsAndFAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#0F172A]">
      <Navbar />

      <main>
        <Hero />
        <ValueProposition />
        <ProductLineup />
        <ToolsSection />
        <StatsAndFAQ />
      </main>

      <Footer />
    </div>
  );
}
