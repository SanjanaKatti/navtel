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
        />

        <SoftwareKeyFeatures
          heading="Features"
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
            <SoftwareContentBlock
              title="Engineering Tools"
              titleFirst
              content={{
                paragraphs: [
                  "NTC Configurator includes a set of tools designed for diagnostics, testing and integration of telematics devices.",
                ],
                items: [
                  "CAN Spy for monitoring CAN bus traffic",
                  "Complex Events configuration",
                  "Device communication diagnostics",
                  "Configuration file management",
                  "Sensor testing and validation",
                  "Firmware update tools",
                ],
              }}
            />
            <SoftwareContentBlock
              title="Supported Interfaces"
              content={{
                paragraphs: [
                  "NTC Configurator allows configuration and diagnostics of all device interfaces.",
                ],
                items: [
                  "CAN bus",
                  "RS-485",
                  "RS-232",
                  "Bluetooth sensors",
                  "Digital inputs and outputs",
                  "Analog inputs",
                ],
              }}
            />
            <SoftwareContentBlock
              title="Typical Use Cases"
              titleFirst
              content={{
                paragraphs: [
                  "NTC Configurator is used by engineers and system integrators during device installation and integration. Typical scenarios include:",
                ],
                items: [
                  "Device configuration during installation",
                  "Sensor integration and testing",
                  "CAN data verification",
                  "Troubleshooting device behavior",
                  "Firmware updates and diagnostics",
                ],
              }}
            />
            <SoftwareContentBlock
              title="Why It Matters"
              content={{
                paragraphs: [
                  "Reliable configuration is critical for telematics deployments. NTC Configurator gives engineers full visibility and control over device behavior, helping prevent configuration errors and reduce support issues in production fleets.",
                ],
              }}
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
