"use client";
import React from "react";
import {
  Activity,
  Car,
  ChartBar,
  Users,
  ShieldCheck,
} from "phosphor-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  SoftwareHero,
  SoftwareKeyFeatures,
  SoftwareContentBlock,
  SoftwareCTA,
  SoftwareSidePanelContent,
} from "@/components/software";

const EcoDrivingPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />
      <main className="pt-20">
        <SoftwareHero
          title="Eco Driving"
          subtitle="Understand how vehicles are really driven"
          tagline="Eco Driving analyzes driving behavior using motion sensors and vehicle telemetry. The system detects aggressive driving patterns and inefficient driving habits that affect fuel consumption, vehicle wear and road safety. By analyzing real driving behavior, fleet operators gain better visibility into how vehicles are actually used in daily operations."
          backgroundClass="eco-driving-hero-background"
          textColor="navy"
          center
          breadcrumb={{
            label: "Software Solutions",
            href: "/products/software-solutions",
          }}
        />

        <SoftwareKeyFeatures
          heading="Features"
          scrollable
          features={[
            {
              title: "Real-Time Detection",
              desc: "Detect acceleration, braking, and aggressive maneuvers in real time.",
              icon: <Activity size={32} weight="bold" />,
            },
            {
              title: "Driving Patterns",
              desc: "Identify inefficient driving patterns that affect fuel and safety.",
              icon: <Car size={32} weight="bold" />,
            },
            {
              title: "Driver Scoring",
              desc: "Data for fleet management platforms to build driver scoring systems.",
              icon: <ChartBar size={32} weight="bold" />,
            },
            {
              title: "Fleet Operations",
              desc: "Built for logistics, construction, transport, and delivery fleets.",
              icon: <Users size={32} weight="bold" />,
            },
            {
              title: "Safety & Efficiency",
              desc: "Safer operations, lower maintenance costs, more efficient vehicle usage.",
              icon: <ShieldCheck size={32} weight="bold" />,
            },
          ]}
        />

        <section className="py-20 md:py-24 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SoftwareSidePanelContent
              sections={[
                {
                  title: "Detect driving behavior in real time",
                  content: (
                    <ul className="space-y-2 text-body text-gray-600 list-disc list-inside">
                      <li>Acceleration events</li>
                      <li>Braking events</li>
                      <li>Aggressive maneuvers</li>
                      <li>Inefficient driving patterns</li>
                    </ul>
                  ),
                },
                {
                  title: "How It Works",
                  content: (
                    <p className="text-body text-gray-600">
                      Eco Driving algorithms analyze motion data from the internal accelerometer together with vehicle telemetry such as speed and engine state. When driving behavior exceeds predefined thresholds, the system records a driving event. These events can then be used by fleet management platforms to evaluate driver performance and analyze driving patterns.
                    </p>
                  ),
                },
                {
                  title: "Built for Fleet Operations",
                  content: (
                    <>
                      <p className="text-body text-gray-600 mb-4">
                        Eco Driving is used in fleets where driving behavior directly affects operating costs and safety. Typical applications include:
                      </p>
                      <ul className="space-y-2 text-body text-gray-600 list-disc list-inside">
                        <li>Logistics fleets</li>
                        <li>Construction and mining equipment</li>
                        <li>Public transport fleets</li>
                        <li>Delivery and service vehicles</li>
                      </ul>
                    </>
                  ),
                },
                {
                  title: "Why It Matters",
                  content: (
                    <p className="text-body text-gray-600">
                      Driving style has a direct impact on fuel consumption, vehicle wear and accident risk. Eco Driving helps fleet operators detect unsafe behavior early and improve driver discipline across the fleet. The result is safer operations, lower maintenance costs and more efficient vehicle usage.
                    </p>
                  ),
                },
              ]}
            />
          </div>
        </section>

        <section className="pt-0 pb-20 md:pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
            <SoftwareCTA
              title="Driver Scoring Ready"
              subtitle="Eco Driving data can be used by fleet management platforms to build driver scoring systems. This allows fleet operators to evaluate driving behavior, compare drivers and improve fleet safety and efficiency."
            />
            <SoftwareCTA
              title="Available on Supported Devices"
              subtitle="Eco Driving functionality depends on the device model. Please refer to individual device specifications for feature availability."
            />
            <SoftwareCTA
              title="Understand how vehicles are driven. Improve safety. Reduce operating costs."
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EcoDrivingPage;
