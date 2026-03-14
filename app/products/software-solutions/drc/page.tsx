"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  CheckCircle,
  ArrowsCounterClockwise,
  CloudArrowUp, // TODO: Remove this import if not used
  MagnifyingGlass,
} from "phosphor-react";
import LayoutContainer from "@/components/LayoutContainer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const enablesItems = [
  " Centralized management of hundreds or thousands of devices",
  " Bulk configuration and command execution",
  " Firmware updates across device groups",
  " CAN decoding and configuration file deployment in one action",
  " Full action history and configuration tracking",
];

const howItWorksItems = [
  "No device-by-device work.",
  "No repetitive manual tasks.",
  "No configuration inconsistency.",
];

const whyItMattersItems = [
  "Consistent configuration across all devices",
  "Faster project rollouts",
  "Fewer on-site interventions",
  "Predictable fleet performance as deployments grow",
];

const DRCPage = () => {
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
        <section className="relative h-[calc(100vh-5rem)] min-h-[calc(100dvh-5rem)] flex items-center bg-cover bg-center drc-hero-background overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 z-10 text-white">
            <div className="grid lg:grid-cols-1 gap-20 items-center">
              <div className="space-y-8 lg:w-2/5">
                <div>
                  <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-4">
                    DRC
                  </h1>
                  <p className="text-sm font-bold text-white tracking-[0.3em] uppercase">
                    Mass Device Management Made Simple
                  </p>
                </div>

                <p className="text-xl text-white leading-relaxed font-medium">
                  Control, update and manage hundreds or thousands of devices
                  from a single web interface.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    href="https://drc.navtelecom.ru/login"
                    className="bg-[#002D49] text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-brand-deep transition-all shadow-xl hover:shadow-2xl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Log In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What DRC Enables Section */}
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
                  <h3 className="text-h2">What DRC Enables</h3>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-4 lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1">
                <div className="rounded-3xl border border-gray-200 bg-brand-light-3 p-8 md:p-10 flex items-center justify-center text-center">
                  <h3 className="text-h2">How It Works</h3>
                </div>
                <div className="rounded-3xl border border-gray-200 bg-[#1E293B] p-8 md:p-10 text-white">
                  <p className="text-base md:text-lg mb-4 text-white/90">
                    All operations are performed through a single web-based interface built for large-scale telematics deployments.
                  </p>
                  <ul className="space-y-2 text-base md:text-lg text-white/90">
                    {howItWorksItems.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/80 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-3 text-center my-12 md:my-16 max-w-3xl mx-auto">
                <h3 className="text-h2 text-brand-navy">Built for Large Deployments</h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  From pilot projects to thousands of active devices — DRC keeps your fleet under control.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-4 lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1">
                <div className="rounded-3xl border border-gray-200 bg-[#1E293B] p-8 md:p-10 text-white">
                  <p className="text-base md:text-lg mb-4 text-white/90">
                    DRC transforms device management from manual routine into a scalable operational process.
                  </p>
                  <p className="text-base md:text-lg mb-4 text-white/90">
                    For system integrators this means:
                  </p>
                  <ul className="space-y-2 text-base md:text-lg text-white/90">
                    {whyItMattersItems.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/80 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-gray-200 bg-brand-light-3 p-8 md:p-10 flex items-center justify-center text-center">
                  <h3 className="text-h2">Why It Matters</h3>
                </div>
              </div>

              <div className="text-center my-12 md:my-16 max-w-3xl mx-auto">
                <h3 className="text-h2 text-brand-navy leading-tight">
                  Telematics does not scale by adding more people.
                </h3>
                <h3 className="text-h2 text-brand-navy leading-tight mt-2">
                  It scales by managing devices in bulk.
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

export default DRCPage;
