"use client";
import React from "react";
import {
  ChartLine,
  FileText,
  Wrench,
  Code,
  Broadcast,
} from "phosphor-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  SoftwareHero,
  SoftwareKeyFeatures,
  SoftwareContentBlock,
  SoftwareCTA,
} from "@/components/software";

const CanSpyPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />
      <main className="pt-20">
        <SoftwareHero
          title="Navtelecom CAN SPY"
          subtitle="Integrated CAN Analysis Module"
          tagline="Capture, analyze and validate CAN data directly from the vehicle inside NTC Configurator."
          backgroundClass="can-spy-hero-background"
          textColor="navy"
        />

        <SoftwareKeyFeatures
          heading="Features"
          features={[
            {
              title: "Real-time Monitoring",
              desc: "Real-time CAN bus monitoring and raw frame logging.",
              icon: <ChartLine size={32} weight="bold" />,
            },
            {
              title: "ID Filtering",
              desc: "ID filtering and signal tracking for focused analysis.",
              icon: <Broadcast size={32} weight="bold" />,
            },
            {
              title: "Data Export",
              desc: "Data export for analysis and custom decoding file support.",
              icon: <FileText size={32} weight="bold" />,
            },
            {
              title: "Engineering Tool",
              desc: "Diagnostic and validation tool for CAN integration work.",
              icon: <Wrench size={32} weight="bold" />,
            },
            {
              title: "CAN Script",
              desc: "Scripting system for controlled CAN communication.",
              icon: <Code size={32} weight="bold" />,
            },
          ]}
        />

        <section className="py-20 md:py-24 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
            <SoftwareContentBlock
              title="What CAN SPY Enables"
              titleFirst={true}
              content={{
                items: [
                  "Real-time CAN bus monitoring",
                  "Raw frame logging",
                  "ID filtering and signal tracking",
                  "Data export for analysis",
                  "Support for custom decoding files",
                ],
              }}
            />

            <SoftwareContentBlock
              title="Built for Engineering Work"
              content={{
                paragraphs: [
                  "CAN SPY is not just a viewer.",
                  "It is a diagnostic and validation tool used for:",
                ],
                items: [
                  "Verifying CAN signal availability",
                  "Testing new vehicle models",
                  "Creating and validating decoding files",
                  "Troubleshooting integration issues",
                  "Analyzing unknown CAN traffic",
                ],
              }}
            />

            <SoftwareContentBlock
              title="CAN Script"
              titleFirst={true}
              content={{
                paragraphs: [
                  "Advanced CAN Interaction Engine. In addition to monitoring, CAN SPY includes a scripting system for controlled CAN communication.",
                ],
              }}
            />

            <SoftwareContentBlock
              title="What CAN Script Enables"
              content={{
                items: [
                  "Receive and transmit CAN messages",
                  "Apply conditional logic",
                  "Use delays and repeat loops",
                  "Execute message sequences with defined results",
                ],
              }}
            />

            <SoftwareContentBlock
              title="Designed for Debugging and Automation"
              content={{
                paragraphs: [
                  "CAN Script allows engineers to:",
                ],
                items: [
                  "Send specific CAN frames",
                  "Wait for defined responses",
                  "Repeat communication sequences",
                  "Stop execution based on conditions",
                ],
                highlight: {
                  line1: "It is used for diagnostics, testing and automation of interaction with CAN-based equipment.",
                },
              }}
            />

            <SoftwareContentBlock
              title="Why It Matters"
              titleFirst={true}
              content={{
                paragraphs: [
                  "CAN monitoring provides visibility.",
                  "CAN Script provides interaction.",
                  "Together, they turn CAN SPY into a complete CAN engineering tool — from passive analysis to controlled communication.",
                ],
              }}
            />
          </div>
        </section>

        <section className="pt-0 pb-20 md:pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SoftwareCTA
              title="From passive analysis to controlled communication — CAN SPY is the complete CAN engineering tool."
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CanSpyPage;
