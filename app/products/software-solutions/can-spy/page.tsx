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
  SoftwareSidePanelContent,
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SoftwareSidePanelContent
              sections={[
                {
                  title: "What CAN SPY Enables",
                  content: (
                    <ul className="space-y-2 text-body text-gray-600 list-disc list-inside">
                      <li>Real-time CAN bus monitoring</li>
                      <li>Raw frame logging</li>
                      <li>ID filtering and signal tracking</li>
                      <li>Data export for analysis</li>
                      <li>Support for custom decoding files</li>
                    </ul>
                  ),
                },
                {
                  title: "Built for Engineering Work",
                  content: (
                    <>
                      <p className="text-body text-gray-600 mb-4">
                        CAN SPY is not just a viewer. It is a diagnostic and validation tool used for:
                      </p>
                      <ul className="space-y-2 text-body text-gray-600 list-disc list-inside">
                        <li>Verifying CAN signal availability</li>
                        <li>Testing new vehicle models</li>
                        <li>Creating and validating decoding files</li>
                        <li>Troubleshooting integration issues</li>
                        <li>Analyzing unknown CAN traffic</li>
                      </ul>
                    </>
                  ),
                },
                {
                  title: "CAN Script",
                  content: (
                    <p className="text-body text-gray-600">
                      Advanced CAN Interaction Engine. In addition to monitoring, CAN SPY includes a scripting system for controlled CAN communication.
                    </p>
                  ),
                },
                {
                  title: "What CAN Script Enables",
                  content: (
                    <ul className="space-y-2 text-body text-gray-600 list-disc list-inside">
                      <li>Receive and transmit CAN messages</li>
                      <li>Apply conditional logic</li>
                      <li>Use delays and repeat loops</li>
                      <li>Execute message sequences with defined results</li>
                    </ul>
                  ),
                },
                {
                  title: "Designed for Debugging and Automation",
                  content: (
                    <>
                      <p className="text-body text-gray-600 mb-4">
                        CAN Script allows engineers to:
                      </p>
                      <ul className="space-y-2 text-body text-gray-600 list-disc list-inside mb-4">
                        <li>Send specific CAN frames</li>
                        <li>Wait for defined responses</li>
                        <li>Repeat communication sequences</li>
                        <li>Stop execution based on conditions</li>
                      </ul>
                      <div className="mt-6 rounded-2xl bg-brand-navy/10 border border-brand-navy/20 p-4 text-brand-navy">
                        <p className="text-sm md:text-base text-brand-navy/90">
                          It is used for diagnostics, testing and automation of interaction with CAN-based equipment.
                        </p>
                      </div>
                    </>
                  ),
                },
                {
                  title: "Why It Matters",
                  content: (
                    <p className="text-body text-gray-600">
                      CAN monitoring provides visibility. CAN Script provides interaction. Together, they turn CAN SPY into a complete CAN engineering tool — from passive analysis to controlled communication.
                    </p>
                  ),
                },
              ]}
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
