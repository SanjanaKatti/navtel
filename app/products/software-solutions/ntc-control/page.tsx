"use client";
import React, { useState } from "react";
import Link from "next/link";
import { X } from "phosphor-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const enablesItems = [
  "Upload configuration files on-site",
  "Perform basic parameter setup",
  "Monitor device and sensor status",
  "Access live telemetry preview",
  "Connect directly to the device from your phone",
];

const builtForFieldItems = [
  "Upload prepared configuration files",
  "Adjust key parameters",
  "Check sensor connections",
  "Verify real-time data",
];

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
        {/* Hero Section */}
        <section className="relative h-[calc(100vh-5rem)] min-h-[calc(100dvh-5rem)] flex items-center bg-cover bg-center ntc-control-hero-background overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 z-10">
            <div className="grid lg:grid-cols-1 gap-20 items-center">
              <div className="space-y-8 lg:w-2/5">
                <div>
                  <h1 className="text-5xl md:text-6xl font-black text-brand-navy leading-tight mb-4">
                    NTC Control
                  </h1>
                  <p className="text-sm font-bold text-brand-navy tracking-[0.3em] uppercase">
                    Mobile Configuration for Engineers
                  </p>
                </div>

                <p className="text-xl text-brand-navy leading-relaxed font-medium">
                  Configure and validate Navtelecom devices directly from your smartphone.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    href="https://play.google.com/store/apps/details?id=ru.navtelecom.ntc.control"
                    className="bg-[#002D49] text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-brand-deep transition-all shadow-xl hover:shadow-2xl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download for Android
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What NTC Control Enables Section */}
        <section className="pt-20 md:pt-24 pb-20 md:pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-4 lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1">
                <div className="rounded-3xl border border-gray-200 bg-[#1E293B] p-8 md:p-10 text-white">
                  <ul className="space-y-2 text-base md:text-lg text-white/90">
                    {enablesItems.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/80 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-gray-200 bg-brand-light-3 p-8 md:p-10 flex items-center justify-center text-center">
                  <h3 className="text-h2">What NTC Control Enables</h3>
                </div>
              </div>

              <div className="space-y-3 text-center my-12 md:my-16 max-w-3xl mx-auto">
                <h3 className="text-h2 text-brand-navy">Live Telemetry in Your Pocket</h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  See exactly what the device will send to the server.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Validate sensor values and configuration results before completing installation.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium">
                  No assumptions.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium">
                  No return visits.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-4 lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1">
                <div className="rounded-3xl border border-gray-200 bg-brand-light-3 p-8 md:p-10 flex items-center justify-center text-center">
                  <h3 className="text-h2">Built for Field Installation</h3>
                </div>
                <div className="rounded-3xl border border-gray-200 bg-[#1E293B] p-8 md:p-10 text-white">
                  <p className="text-base md:text-lg mb-4 text-white/90">
                    NTC Control is designed for engineers working on-site.
                  </p>
                  <p className="text-base md:text-lg mb-4 text-white/90">
                    When using a laptop is not practical, the app allows you to:
                  </p>
                  <ul className="space-y-2 text-base md:text-lg mb-5 text-white/90">
                    {builtForFieldItems.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/80 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm md:text-base text-white/90">
                    All from your mobile device.
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-4 lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1">
                <div className="rounded-3xl border border-gray-200 bg-[#1E293B] p-8 md:p-10 text-white">
                  <p className="text-base md:text-lg text-white/90">
                    Correct configuration during installation prevents future support issues.
                  </p>
                  <p className="text-base md:text-lg text-white/90 mt-4">
                    NTC Control helps ensure that every device leaves the installation site fully verified.
                  </p>
                </div>
                <div className="rounded-3xl border border-gray-200 bg-brand-light-3 p-8 md:p-10 flex items-center justify-center text-center">
                  <h3 className="text-h2">Why It Matters</h3>
                </div>
              </div>

              <div className="text-center my-12 md:my-16 max-w-3xl mx-auto">
                <h3 className="text-h2 text-brand-navy leading-tight">
                  Configure on-site.
                </h3>
                <h3 className="text-h2 text-brand-navy leading-tight mt-2">
                  Validate instantly.
                </h3>
                <h3 className="text-h2 text-brand-navy leading-tight mt-2">
                  Deploy with confidence.
                </h3>
              </div>
            </div>
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
