"use client";
import React from "react";
import {
  DeviceMobile,
  UploadSimple,
  ChartLine,
  Bluetooth,
  CheckCircle,
} from "phosphor-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  SoftwareHero,
  SoftwareKeyFeatures,
  SoftwareCTA,
  SoftwareSidePanelContent,
} from "@/components/software";

const NTCControlPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />
      <main className="pt-20">
        <SoftwareHero
          title="NTC Control"
          subtitle="Mobile Configuration for Engineers"
          tagline="Configure and validate Navtelecom devices directly from your smartphone."
          ctaPrimary={{
            label: "Download for Android",
            href: "https://play.google.com/store/apps/details?id=ru.navtelecom.ntc.control",
          }}
          backgroundClass="ntc-control-hero-background"
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
              title: "On-Site Configuration",
              desc: "Upload configuration files and perform basic parameter setup on-site.",
              icon: <UploadSimple size={32} weight="bold" />,
            },
            {
              title: "Device & Sensor Monitoring",
              desc: "Monitor device and sensor status in real time.",
              icon: <Bluetooth size={32} weight="bold" />,
            },
            {
              title: "Live Telemetry",
              desc: "Access live telemetry preview to see exactly what the server receives.",
              icon: <ChartLine size={32} weight="bold" />,
            },
            {
              title: "Direct Connection",
              desc: "Connect directly to the device from your phone.",
              icon: <DeviceMobile size={32} weight="bold" />,
            },
            {
              title: "Installation Verification",
              desc: "Validate configuration before completing installation.",
              icon: <CheckCircle size={32} weight="bold" />,
            },
          ]}
        />

        <section className="py-20 md:py-24 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SoftwareSidePanelContent
              sections={[
                {
                  title: "What NTC Control Enables",
                  content: (
                    <ul className="space-y-2 text-body text-gray-600 list-disc list-inside">
                      <li>Upload configuration files on-site</li>
                      <li>Perform basic parameter setup</li>
                      <li>Monitor device and sensor status</li>
                      <li>Access live telemetry preview</li>
                      <li>Connect directly to the device from your phone</li>
                    </ul>
                  ),
                },
                {
                  title: "Built for Field Installation",
                  content: (
                    <>
                      <p className="text-body text-gray-600 mb-4">
                        NTC Control is designed for engineers working on-site. When using a laptop is not practical, the app allows you to:
                      </p>
                      <ul className="space-y-2 text-body text-gray-600 list-disc list-inside mb-4">
                        <li>Upload prepared configuration files</li>
                        <li>Adjust key parameters</li>
                        <li>Check sensor connections</li>
                        <li>Verify real-time data</li>
                      </ul>
                      <div className="mt-6 rounded-2xl bg-brand-navy/10 border border-brand-navy/20 p-4 text-brand-navy">
                        <p className="text-sm md:text-base text-brand-navy/90">
                          All from your mobile device.
                        </p>
                      </div>
                    </>
                  ),
                },
                {
                  title: "Why It Matters",
                  content: (
                    <p className="text-body text-gray-600">
                      Correct configuration during installation prevents future support issues. NTC Control helps ensure that every device leaves the installation site fully verified.
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
              title="Live Telemetry in Your Pocket"
              subtitle="See exactly what the device will send to the server. Validate sensor values and configuration results before completing installation. No assumptions. No return visits."
            />
            <SoftwareCTA
              title={
                <>
                  Configure on-site. <br />
                  Validate instantly. <br />
                  Deploy with confidence.
                </>
              }
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NTCControlPage;
