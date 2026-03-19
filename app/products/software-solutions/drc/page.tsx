"use client";
import React from "react";
import {
  CheckCircle,
  ArrowsCounterClockwise,
  CloudArrowUp,
  MagnifyingGlass,
  Database,
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

const DRCPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />
      <main className="pt-20">
        <SoftwareHero
          title="DRC"
          subtitle="Mass Device Management Made Simple"
          tagline="Control, update and manage hundreds or thousands of devices from a single web interface."
          ctaPrimary={{
            label: "Log In",
            href: "https://drc.navtelecom.ru/login",
          }}
          backgroundClass="drc-hero-background"
          textColor="white"
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
              title: "Centralized Management",
              desc: "Manage hundreds or thousands of devices from a single web interface.",
              icon: <Database size={32} weight="bold" />,
            },
            {
              title: "Bulk Configuration",
              desc: "Bulk configuration and command execution across device groups.",
              icon: <ArrowsCounterClockwise size={32} weight="bold" />,
            },
            {
              title: "Firmware Updates",
              desc: "Deploy firmware updates across device groups in one action.",
              icon: <CloudArrowUp size={32} weight="bold" />,
            },
            {
              title: "CAN & Config Deployment",
              desc: "CAN decoding and configuration file deployment in one action.",
              icon: <CheckCircle size={32} weight="bold" />,
            },
            {
              title: "Full Action History",
              desc: "Complete action history and configuration tracking.",
              icon: <MagnifyingGlass size={32} weight="bold" />,
            },
          ]}
        />

        <section className="py-20 md:py-24 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SoftwareSidePanelContent
              sections={[
                {
                  title: "What DRC Enables",
                  content: (
                    <ul className="space-y-2 text-body text-gray-600 list-disc list-inside">
                      <li>Centralized management of hundreds or thousands of devices</li>
                      <li>Bulk configuration and command execution</li>
                      <li>Firmware updates across device groups</li>
                      <li>CAN decoding and configuration file deployment in one action</li>
                      <li>Full action history and configuration tracking</li>
                    </ul>
                  ),
                },
                {
                  title: "How It Works",
                  content: (
                    <>
                      <p className="text-body text-gray-600 mb-4">
                        All operations are performed through a single web-based interface built for large-scale telematics deployments.
                      </p>
                      <ul className="space-y-2 text-body text-gray-600 list-disc list-inside">
                        <li>No device-by-device work.</li>
                        <li>No repetitive manual tasks.</li>
                        <li>No configuration inconsistency.</li>
                      </ul>
                    </>
                  ),
                },
                {
                  title: "Why It Matters",
                  content: (
                    <>
                      <p className="text-body text-gray-600 mb-4">
                        DRC transforms device management from manual routine into a scalable operational process.
                      </p>
                      <p className="text-body text-gray-600 mb-4">
                        For system integrators this means:
                      </p>
                      <ul className="space-y-2 text-body text-gray-600 list-disc list-inside">
                        <li>Consistent configuration across all devices</li>
                        <li>Faster project rollouts</li>
                        <li>Fewer on-site interventions</li>
                        <li>Predictable fleet performance as deployments grow</li>
                      </ul>
                    </>
                  ),
                },
              ]}
            />
          </div>
        </section>

        <section className="pt-0 pb-20 md:pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
            <SoftwareCTA
              title="Built for Large Deployments"
              subtitle="From pilot projects to thousands of active devices — DRC keeps your fleet under control."
            />
            <SoftwareCTA
              title="Telematics does not scale by adding more people. It scales by managing devices in bulk."
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DRCPage;
