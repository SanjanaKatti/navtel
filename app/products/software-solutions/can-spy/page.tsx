"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const canSpyEnablesItems = [
  "Real-time CAN bus monitoring",
  "Raw frame logging",
  "ID filtering and signal tracking",
  "Data export for analysis",
  "Support for custom decoding files",
];

const builtForEngineeringItems = [
  "Verifying CAN signal availability",
  "Testing new vehicle models",
  "Creating and validating decoding files",
  "Troubleshooting integration issues",
  "Analyzing unknown CAN traffic",
];

const canScriptEnablesItems = [
  "Receive and transmit CAN messages",
  "Apply conditional logic",
  "Use delays and repeat loops",
  "Execute message sequences with defined results",
];

const designedForDebuggingItems = [
  "Send specific CAN frames",
  "Wait for defined responses",
  "Repeat communication sequences",
  "Stop execution based on conditions",
];

const CanSpyPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[calc(100vh-5rem)] min-h-[calc(100dvh-5rem)] flex items-center bg-cover bg-center can-spy-hero-background overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 z-10">
            <div className="grid lg:grid-cols-1 gap-20 items-center">
              <div className="space-y-8 lg:w-2/5">
                <div>
                  <h1 className="text-5xl md:text-6xl font-black text-brand-navy leading-tight mb-4">
                    Navtelecom CAN SPY
                  </h1>
                  <p className="text-sm font-bold text-brand-navy tracking-[0.3em] uppercase">
                    Integrated CAN Analysis Module
                  </p>
                </div>

                <p className="text-xl text-brand-navy leading-relaxed font-medium">
                  Capture, analyze and validate CAN data directly from the vehicle inside NTC Configurator.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What CAN SPY Enables Section */}
        <section className="pt-20 md:pt-24 pb-20 md:pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-4 lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1">
                <div className="rounded-3xl border border-gray-200 bg-[#1E293B] p-8 md:p-10 text-white">
                  <ul className="space-y-2 text-base md:text-lg text-white/90">
                    {canSpyEnablesItems.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/80 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-gray-200 bg-brand-light-3 p-8 md:p-10 flex items-center justify-center text-center">
                  <h3 className="text-h2">What CAN SPY Enables</h3>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-4 lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1">
                <div className="rounded-3xl border border-gray-200 bg-brand-light-3 p-8 md:p-10 flex items-center justify-center text-center">
                  <h3 className="text-h2">Built for Engineering Work</h3>
                </div>
                <div className="rounded-3xl border border-gray-200 bg-[#1E293B] p-8 md:p-10 text-white">
                  <p className="text-base md:text-lg mb-4 text-white/90">
                    CAN SPY is not just a viewer.
                  </p>
                  <p className="text-base md:text-lg mb-4 text-white/90">
                    It is a diagnostic and validation tool used for:
                  </p>
                  <ul className="space-y-2 text-base md:text-lg text-white/90">
                    {builtForEngineeringItems.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/80 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CAN Script intro */}
              <div className="space-y-3 text-center my-12 md:my-16 max-w-3xl mx-auto">
                <h3 className="text-h2 text-brand-navy">CAN Script</h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Advanced CAN Interaction Engine
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  In addition to monitoring, CAN SPY includes a scripting system for controlled CAN communication.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-4 lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1">
                <div className="rounded-3xl border border-gray-200 bg-[#1E293B] p-8 md:p-10 text-white">
                  <ul className="space-y-2 text-base md:text-lg text-white/90">
                    {canScriptEnablesItems.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/80 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-gray-200 bg-brand-light-3 p-8 md:p-10 flex items-center justify-center text-center">
                  <h3 className="text-h2">What CAN Script Enables</h3>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-4 lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1">
                <div className="rounded-3xl border border-gray-200 bg-brand-light-3 p-8 md:p-10 flex items-center justify-center text-center">
                  <h3 className="text-h2">Designed for Debugging and Automation</h3>
                </div>
                <div className="rounded-3xl border border-gray-200 bg-[#1E293B] p-8 md:p-10 text-white">
                  <p className="text-base md:text-lg mb-4 text-white/90">
                    CAN Script allows engineers to:
                  </p>
                  <ul className="space-y-2 text-base md:text-lg mb-5 text-white/90">
                    {designedForDebuggingItems.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/80 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm md:text-base text-white/90">
                    It is used for diagnostics, testing and automation of interaction with CAN-based equipment.
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-4 lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1">
                <div className="rounded-3xl border border-gray-200 bg-[#1E293B] p-8 md:p-10 text-white">
                  <p className="text-base md:text-lg text-white/90">
                    CAN monitoring provides visibility.
                  </p>
                  <p className="text-base md:text-lg text-white/90 mt-2">
                    CAN Script provides interaction.
                  </p>
                  <p className="text-base md:text-lg text-white/90 mt-4">
                    Together, they turn CAN SPY into a complete CAN engineering tool — from passive analysis to controlled communication.
                  </p>
                </div>
                <div className="rounded-3xl border border-gray-200 bg-brand-light-3 p-8 md:p-10 flex items-center justify-center text-center">
                  <h3 className="text-h2">Why It Matters</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CanSpyPage;
