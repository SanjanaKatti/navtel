"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  CheckCircle,
  ArrowsCounterClockwise,
  CloudArrowUp,
  MagnifyingGlass,
} from "phosphor-react";
import LayoutContainer from "@/components/LayoutContainer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NTCConfiguratorPage = () => {
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
        <section className="relative h-[calc(100vh-5rem)] min-h-[calc(100dvh-5rem)] flex items-center bg-cover bg-center cfg-hero-background overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 z-10 text-white">
            <div className="grid lg:grid-cols-1 gap-20 items-center">
              <div className="space-y-8 lg:w-2/5">
                <div>
                  <h1 className="text-5xl md:text-6xl font-black text-brand-navy leading-tight mb-4">
                    NTC Configurator
                  </h1>
                  <p className="text-sm font-bold text-gray-500 tracking-[0.3em] uppercase">
                    Full Control Over Navtelecom Devices
                  </p>
                </div>

                <p className="text-xl text-gray-500 leading-relaxed font-medium">
                  Advanced setup, live telemetry and remote configuration in one
                  professional tool.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    href="https://wiki.navtelecom.ru/programs/ntc_configurator/ntc_configurator_last.exe"
                    className="bg-[#002D49] text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-brand-deep transition-all shadow-xl hover:shadow-2xl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download
                  </Link>
                  <Link
                    href="https://wiki.navtelecom.ru/en/home/ntc_configurator/history"
                    className="bg-white text-brand-navy px-10 py-5 rounded-2xl font-bold text-lg border-2 border-gray-100 hover:border-brand-deep transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Release Notes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white">
          <LayoutContainer>
            <h2 className="text-4xl md:text-5xl font-black text-brand-navy mb-16 text-center">
              Features
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="group p-10 bg-[#F8FAFC] rounded-[40px] border border-gray-50 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-brand-navy rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg shadow-brand-navy/20">
                  <CheckCircle size={32} weight="bold" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">
                  Advanced Configuration
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Full control over device settings, logic, interfaces and
                  sensors. No simplified modes.
                </p>
              </div>

              <div className="group p-10 bg-[#F8FAFC] rounded-[40px] border border-gray-50 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-brand-navy rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg shadow-brand-navy/20">
                  <ArrowsCounterClockwise size={32} weight="bold" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">
                  Live Telemetry
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Real-time data preview. See exactly what the server receives.
                </p>
              </div>

              <div className="group p-10 bg-[#F8FAFC] rounded-[40px] border border-gray-50 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-brand-navy rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg shadow-brand-navy/20">
                  <CloudArrowUp size={32} weight="bold" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">
                  Remote Access
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Configure devices online. No physical connection required.
                  Instant updates.
                </p>
              </div>

              <div className="group p-10 bg-[#F8FAFC] rounded-[40px] border border-gray-50 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-brand-navy rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg shadow-brand-navy/20">
                  <MagnifyingGlass size={32} weight="bold" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">
                  Deep Diagnostics
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Firmware tools, debug mode, network analysis and full
                  parameter visibility.
                </p>
              </div>
            </div>
          </LayoutContainer>
        </section>
      </main>
      <Footer />

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
              className="absolute top-6 right-6 text-color-neutral-medium-gray hover:text-gray-500 transition-colors"
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
    </div>
  );
};

export default NTCConfiguratorPage;
