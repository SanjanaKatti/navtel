"use client";
import React, { useState } from "react";
import {
  X,
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
  SoftwareContentBlock,
  SoftwareCTA,
} from "@/components/software";

const NTCControlPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

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
          ctaSecondary={{
            label: "Contact Sales",
            onClick: () => setIsModalOpen(true),
          }}
          backgroundClass="ntc-control-hero-background"
          textColor="navy"
        />

        <SoftwareKeyFeatures
          heading="Features"
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
            <SoftwareContentBlock
              title="What NTC Control Enables"
              titleFirst={true}
              content={{
                items: [
                  "Upload configuration files on-site",
                  "Perform basic parameter setup",
                  "Monitor device and sensor status",
                  "Access live telemetry preview",
                  "Connect directly to the device from your phone",
                ],
              }}
            />

            <SoftwareContentBlock
              title="Built for Field Installation"
              content={{
                paragraphs: [
                  "NTC Control is designed for engineers working on-site.",
                  "When using a laptop is not practical, the app allows you to:",
                ],
                items: [
                  "Upload prepared configuration files",
                  "Adjust key parameters",
                  "Check sensor connections",
                  "Verify real-time data",
                ],
                highlight: {
                  line1: "All from your mobile device.",
                },
              }}
            />

            <SoftwareContentBlock
              title="Why It Matters"
              titleFirst={true}
              content={{
                paragraphs: [
                  "Correct configuration during installation prevents future support issues.",
                  "NTC Control helps ensure that every device leaves the installation site fully verified.",
                ],
              }}
            />
          </div>
        </section>

        <section className="pt-0 pb-20 md:pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
            <SoftwareCTA
              title="Live Telemetry in Your Pocket"
              items={[
                "See exactly what the device will send to the server.",
                "Validate sensor values and configuration results before completing installation.",
                "No assumptions.",
                "No return visits.",
              ]}
            />
            <SoftwareCTA
              titleLines={[
                "Configure on-site.",
                "Validate instantly.",
                "Deploy with confidence.",
              ]}
            />
          </div>
        </section>
      </main>

      {/* Contact Sales Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-brand-navy/80 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>

          <div className="relative bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl p-8 md:p-12 overflow-hidden animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-brand-navy transition-colors"
            >
              <X size={24} weight="bold" />
            </button>

            <div className="text-center mb-10">
              <h2 className="text-h2 mb-3">
                Contact <span className="text-brand-primary">Sales</span>
              </h2>
              <p className="text-body-sm">
                Our team will get back to you shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-label ml-1">Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="Your name"
                  className="w-full px-5 py-3.5 bg-brand-light-3 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-primary focus:bg-white transition-all text-body-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-label ml-1">Email Address</label>
                <input
                  required
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-5 py-3.5 bg-brand-light-3 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-primary focus:bg-white transition-all text-body-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-label ml-1">Mobile Number</label>
                  <input
                    required
                    type="tel"
                    placeholder="+1..."
                    className="w-full px-5 py-3.5 bg-brand-light-3 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-primary focus:bg-white transition-all text-body-sm"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-label ml-1">Country</label>
                  <input
                    required
                    type="text"
                    placeholder="Your country"
                    className="w-full px-5 py-3.5 bg-brand-light-3 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-primary focus:bg-white transition-all text-body-sm"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-label ml-1">Message</label>
                <textarea
                  required
                  rows={3}
                  placeholder="How can we help you?"
                  className="w-full px-5 py-3.5 bg-brand-light-3 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-primary focus:bg-white transition-all text-body-sm resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-brand-navy text-white rounded-full font-black text-sm hover:bg-brand-primary transition-all transform hover:-translate-y-1 active:scale-95 shadow-lg shadow-brand-navy/20 mt-4"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default NTCControlPage;
