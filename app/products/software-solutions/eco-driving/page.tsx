"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const detectBehaviorItems = [
  "Acceleration events",
  "Braking events",
  "Aggressive maneuvers",
  "Inefficient driving patterns",
];

const builtForFleetItems = [
  "Logistics fleets",
  "Construction and mining equipment",
  "Public transport fleets",
  "Delivery and service vehicles",
];

const EcoDrivingPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section - no image, gradient background */}
        <section className="relative min-h-[50vh] flex items-center bg-gradient-to-b from-brand-light-3 to-white overflow-hidden border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 z-10">
            <div className="grid lg:grid-cols-1 gap-20 items-center">
              <div className="space-y-8 lg:w-3/4">
                <div>
                  <h1 className="text-5xl md:text-6xl font-black text-brand-navy leading-tight mb-4">
                    Eco Driving
                  </h1>
                  <p className="text-sm font-bold text-brand-navy tracking-[0.3em] uppercase">
                    Understand how vehicles are really driven
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="text-xl text-gray-600 leading-relaxed font-medium">
                    Eco Driving analyzes driving behavior using motion sensors and vehicle telemetry.
                  </p>
                  <p className="text-xl text-gray-600 leading-relaxed font-medium">
                    The system detects aggressive driving patterns and inefficient driving habits that affect fuel consumption, vehicle wear and road safety.
                  </p>
                  <p className="text-xl text-gray-600 leading-relaxed font-medium">
                    By analyzing real driving behavior, fleet operators gain better visibility into how vehicles are actually used in daily operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pt-20 md:pt-24 pb-20 md:pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-4 lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1">
                <div className="rounded-3xl border border-gray-200 bg-[#1E293B] p-8 md:p-10 text-white">
                  <ul className="space-y-2 text-base md:text-lg text-white/90">
                    {detectBehaviorItems.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/80 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-gray-200 bg-brand-light-3 p-8 md:p-10 flex items-center justify-center text-center">
                  <h3 className="text-h2">Detect driving behavior in real time</h3>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-4 lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1">
                <div className="rounded-3xl border border-gray-200 bg-brand-light-3 p-8 md:p-10 flex items-center justify-center text-center">
                  <h3 className="text-h2">How It Works</h3>
                </div>
                <div className="rounded-3xl border border-gray-200 bg-[#1E293B] p-8 md:p-10 text-white">
                  <p className="text-base md:text-lg mb-4 text-white/90">
                    Eco Driving algorithms analyze motion data from the internal accelerometer together with vehicle telemetry such as speed and engine state.
                  </p>
                  <p className="text-base md:text-lg mb-4 text-white/90">
                    When driving behavior exceeds predefined thresholds, the system records a driving event.
                  </p>
                  <p className="text-base md:text-lg text-white/90">
                    These events can then be used by fleet management platforms to evaluate driver performance and analyze driving patterns.
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-center my-12 md:my-16 max-w-3xl mx-auto">
                <h3 className="text-h2 text-brand-navy">Driver Scoring Ready</h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Eco Driving data can be used by fleet management platforms to build driver scoring systems.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  This allows fleet operators to evaluate driving behavior, compare drivers and improve fleet safety and efficiency.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-4 lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1">
                <div className="rounded-3xl border border-gray-200 bg-brand-light-3 p-8 md:p-10 flex items-center justify-center text-center">
                  <h3 className="text-h2">Built for Fleet Operations</h3>
                </div>
                <div className="rounded-3xl border border-gray-200 bg-[#1E293B] p-8 md:p-10 text-white">
                  <p className="text-base md:text-lg mb-4 text-white/90">
                    Eco Driving is used in fleets where driving behavior directly affects operating costs and safety.
                  </p>
                  <p className="text-base md:text-lg mb-4 text-white/90">
                    Typical applications include:
                  </p>
                  <ul className="space-y-2 text-base md:text-lg text-white/90">
                    {builtForFleetItems.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/80 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-4 lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1">
                <div className="rounded-3xl border border-gray-200 bg-[#1E293B] p-8 md:p-10 text-white">
                  <p className="text-base md:text-lg mb-4 text-white/90">
                    Driving style has a direct impact on fuel consumption, vehicle wear and accident risk.
                  </p>
                  <p className="text-base md:text-lg mb-4 text-white/90">
                    Eco Driving helps fleet operators detect unsafe behavior early and improve driver discipline across the fleet.
                  </p>
                  <p className="text-base md:text-lg text-white/90">
                    The result is safer operations, lower maintenance costs and more efficient vehicle usage.
                  </p>
                </div>
                <div className="rounded-3xl border border-gray-200 bg-brand-light-3 p-8 md:p-10 flex items-center justify-center text-center">
                  <h3 className="text-h2">Why It Matters</h3>
                </div>
              </div>

              <div className="space-y-3 text-center my-12 md:my-16 max-w-3xl mx-auto">
                <h3 className="text-h2 text-brand-navy">Available on Supported Devices</h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Eco Driving functionality depends on the device model.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Please refer to individual device specifications for feature availability.
                </p>
              </div>

              <div className="text-center my-12 md:my-16 max-w-3xl mx-auto">
                <h3 className="text-h2 text-brand-navy leading-tight">
                  Understand how vehicles are driven.
                </h3>
                <h3 className="text-h2 text-brand-navy leading-tight mt-2">
                  Improve safety.
                </h3>
                <h3 className="text-h2 text-brand-navy leading-tight mt-2">
                  Reduce operating costs.
                </h3>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EcoDrivingPage;
