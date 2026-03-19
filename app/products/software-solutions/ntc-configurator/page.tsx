"use client";
import React from "react";
import {
  CheckCircle,
  ArrowsCounterClockwise,
  CloudArrowUp,
  MagnifyingGlass,
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

const NTCConfiguratorPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />
      <main className="pt-20">
        <SoftwareHero
          title="NTC Configurator"
          subtitle="Full Control Over Navtelecom Devices"
          tagline="Advanced setup, live telemetry and remote configuration in one professional tool."
          ctaPrimary={{
            label: "Download",
            href: "https://wiki.navtelecom.ru/programs/ntc_configurator/ntc_configurator_last.exe",
          }}
          ctaSecondary={{
            label: "Release Notes",
            href: "https://wiki.navtelecom.ru/en/home/ntc_configurator/history",
          }}
          backgroundClass="cfg-hero-background"
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
              title: "Advanced Configuration",
              desc: "Full control over device settings, logic, interfaces and sensors. No simplified modes.",
              icon: <CheckCircle size={32} weight="bold" />,
            },
            {
              title: "Live Telemetry",
              desc: "Real-time data preview. See exactly what the server receives.",
              icon: <ArrowsCounterClockwise size={32} weight="bold" />,
            },
            {
              title: "Remote Access",
              desc: "Configure devices online. No physical connection required. Instant updates.",
              icon: <CloudArrowUp size={32} weight="bold" />,
            },
            {
              title: "Deep Diagnostics",
              desc: "Firmware tools, debug mode, network analysis and full parameter visibility.",
              icon: <MagnifyingGlass size={32} weight="bold" />,
            },
          ]}
        />

        <section className="py-20 md:py-24 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SoftwareSidePanelContent
              sections={[
                {
                  title: "Engineering Tools",
                  content: (
                    <>
                      <p className="text-body text-gray-600 mb-4">
                        NTC Configurator includes a set of tools designed for diagnostics, testing and integration of telematics devices.
                      </p>
                      <ul className="space-y-2 text-body text-gray-600 list-disc list-inside">
                        <li>CAN Spy for monitoring CAN bus traffic</li>
                        <li>Complex Events configuration</li>
                        <li>Device communication diagnostics</li>
                        <li>Configuration file management</li>
                        <li>Sensor testing and validation</li>
                        <li>Firmware update tools</li>
                      </ul>
                    </>
                  ),
                },
                {
                  title: "Supported Interfaces",
                  content: (
                    <>
                      <p className="text-body text-gray-600 mb-4">
                        NTC Configurator allows configuration and diagnostics of all device interfaces.
                      </p>
                      <ul className="space-y-2 text-body text-gray-600 list-disc list-inside">
                        <li>CAN bus</li>
                        <li>RS-485</li>
                        <li>RS-232</li>
                        <li>Bluetooth sensors</li>
                        <li>Digital inputs and outputs</li>
                        <li>Analog inputs</li>
                      </ul>
                    </>
                  ),
                },
                {
                  title: "Typical Use Cases",
                  content: (
                    <>
                      <p className="text-body text-gray-600 mb-4">
                        NTC Configurator is used by engineers and system integrators during device installation and integration. Typical scenarios include:
                      </p>
                      <ul className="space-y-2 text-body text-gray-600 list-disc list-inside">
                        <li>Device configuration during installation</li>
                        <li>Sensor integration and testing</li>
                        <li>CAN data verification</li>
                        <li>Troubleshooting device behavior</li>
                        <li>Firmware updates and diagnostics</li>
                      </ul>
                    </>
                  ),
                },
                {
                  title: "Why It Matters",
                  content: (
                    <p className="text-body text-gray-600">
                      Reliable configuration is critical for telematics deployments. NTC Configurator gives engineers full visibility and control over device behavior, helping prevent configuration errors and reduce support issues in production fleets.
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
              title="Professional configuration tool for Navtelecom devices."
              subtitle="One tool for all setup, telemetry and remote configuration needs."
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NTCConfiguratorPage;
