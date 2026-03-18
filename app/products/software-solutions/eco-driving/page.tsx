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
          textColor="navy"
        />

        <SoftwareKeyFeatures
          heading="Features"
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
            <SoftwareContentBlock
              title="Detect driving behavior in real time"
              titleFirst={true}
              content={{
                items: [
                  "Acceleration events",
                  "Braking events",
                  "Aggressive maneuvers",
                  "Inefficient driving patterns",
                ],
              }}
            />

            <SoftwareContentBlock
              title="How It Works"
              content={{
                paragraphs: [
                  "Eco Driving algorithms analyze motion data from the internal accelerometer together with vehicle telemetry such as speed and engine state.",
                  "When driving behavior exceeds predefined thresholds, the system records a driving event.",
                  "These events can then be used by fleet management platforms to evaluate driver performance and analyze driving patterns.",
                ],
              }}
            />

            <SoftwareContentBlock
              title="Built for Fleet Operations"
              content={{
                paragraphs: [
                  "Eco Driving is used in fleets where driving behavior directly affects operating costs and safety.",
                  "Typical applications include:",
                ],
                items: [
                  "Logistics fleets",
                  "Construction and mining equipment",
                  "Public transport fleets",
                  "Delivery and service vehicles",
                ],
              }}
            />

            <SoftwareContentBlock
              title="Why It Matters"
              titleFirst={true}
              content={{
                paragraphs: [
                  "Driving style has a direct impact on fuel consumption, vehicle wear and accident risk.",
                  "Eco Driving helps fleet operators detect unsafe behavior early and improve driver discipline across the fleet.",
                  "The result is safer operations, lower maintenance costs and more efficient vehicle usage.",
                ],
              }}
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
              titleLines={[
                "Understand how vehicles are driven.",
                "Improve safety.",
                "Reduce operating costs.",
              ]}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EcoDrivingPage;
