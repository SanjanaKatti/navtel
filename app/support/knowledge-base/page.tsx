"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LayoutContainer from "@/components/LayoutContainer";
import { Check } from "phosphor-react";

const KnowledgeBasePage = () => {
  const features = [
    "SMS commands for device configuration",
    "NTC Configurator documentation",
    "Step-by-step installation and setup guides",
    "Diagnostic and troubleshooting materials",
    "Sensor connection instructions and integration examples",
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans antialiased text-brand-navy">
      <Navbar />

      <main className="pt-20">
        {/* Hero */}
        <section className="relative h-[calc(100vh-5rem)] min-h-[calc(100dvh-5rem)] flex items-center max-lg:items-start overflow-hidden product-background-image knowledge-base-hero-background">
          <LayoutContainer className="max-lg:pt-8">
            <div className="max-w-xl text-left z-10">
              <p className="text-base md:text-lg font-bold uppercase tracking-[0.2em] text-[#28398c] mb-4">
                KNOWLEDGE BASE
              </p>
              <h1 className="text-h1 mb-5">Navtelecom Knowledge Base</h1>
              <p className="text-body-lg mb-6">
                Everything You Need — In One Place
              </p>
              <p className="text-body mb-8">
                Technical documentation, setup guides and reference materials
                for working with Navtelecom devices.
              </p>
              <Link
                href="https://wiki.navtelecom.ru/en/home"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-brand-navy text-white rounded-full px-10 py-4 font-bold text-base hover:bg-brand-primary transition-all shadow-lg"
              >
                Discover
              </Link>
            </div>
          </LayoutContainer>
        </section>

        {/* What You'll Find Inside */}
        <section className="py-16 md:py-20 bg-white">
          <LayoutContainer>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-h2 text-center mb-10">
                What You&apos;ll Find Inside
              </h2>
              <ul className="space-y-4">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 group/item">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center group-hover/item:bg-brand-primary transition-colors duration-300">
                      <Check
                        size={14}
                        weight="bold"
                        className="text-brand-primary group-hover/item:text-white transition-colors duration-300"
                      />
                    </div>
                    <span className="text-body-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </LayoutContainer>
        </section>

        {/* Built for Real-World Work */}
        <section className="py-16 md:py-20 bg-[#F8FAFC]">
          <LayoutContainer>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-h2 mb-6">Built for Real-World Work</h2>
              <p className="text-body-lg">
                The Knowledge Base is created for integrators and engineers who
                need clear answers and practical documentation.
              </p>
              <p className="text-body-lg mt-4">
                No marketing descriptions.
                <br />
                No unnecessary theory.
                <br />
                Only structured technical information.
              </p>
            </div>
          </LayoutContainer>
        </section>

        {/* Why It Matters */}
        <section className="py-16 md:py-20 bg-white">
          <LayoutContainer>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-h2 mb-6">Why It Matters</h2>
              <p className="text-body-lg">
                Fast access to accurate documentation reduces support time,
                simplifies integration and ensures consistent device
                configuration across projects.
              </p>
              <p className="text-body-lg mt-4">
                Whether you are installing a single device or managing a fleet,
                the right documentation makes the difference.
              </p>
              <Link
                href="https://wiki.navtelecom.ru/en/home"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-brand-navy text-white rounded-full px-10 py-4 font-bold text-base hover:bg-brand-primary transition-all shadow-lg mt-8"
              >
                Open Knowledge Base
              </Link>
            </div>
          </LayoutContainer>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default KnowledgeBasePage;
