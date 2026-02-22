"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "phosphor-react";
import LayoutContainer from "./LayoutContainer";

const products = [
  {
    seriesTitle: "START Series",
    label: "START",
    subtitle: "COST-EFFECTIVE, ULTRA-COMPACT",
    description: "For essential GPS tracking and entry-level fleet management.",
    features: ["4G Connectivity", "Plug & Play", "Small Form Factor"],
    image: "/Navtelecom/start_device.png",
    href: "/products/tracking-devices/start-series",
  },
  {
    seriesTitle: "SMART Series",
    label: "SMART",
    subtitle: "FLEXIBLE CONNECTIVITY, CUSTOM LOGIC",
    description:
      "Supports CAN, BLE, RS-485. Ideal for fuel monitoring and sensor integration.",
    features: ["CAN Bus Support", "Bluetooth 4.0", "Fuel Monitoring"],
    image: "/Navtelecom/smart_device.png",
    href: "/products/tracking-devices/smart-series",
  },
  {
    seriesTitle: "SIGNAL Series",
    label: "SIGNAL",
    subtitle: "EXTERNAL ANTENNAS, PRO-GRADE FEATURES",
    description:
      "Extended GNSS, fuel control, diagnostics, voice communication with drivers.",
    features: ["High Precision GNSS", "Voice Comm", "Advanced I/O"],
    image: "/Navtelecom/signal_device.png",
    href: "/products/tracking-devices/signal-series",
  },
];

const ProductLineup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <LayoutContainer>
        <div className="text-center mb-20">
          <p className="text-caption text-[#004A8C] mb-4">
            DISCOVER OUR LINEUP
          </p>
          <h2 className="text-h1">Device Series for Every Fleet</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="group relative bg-white px-10 pt-10 pb-12 flex flex-col transition-all duration-300 hover:shadow-lg border border-gray-200 rounded-3xl"
            >
              {/* Heading */}
              <div className="min-h-[80px] flex flex-col justify-start">
                <h3 className="text-h3 font-black text-[#004A8C]">
                  {product.seriesTitle}
                </h3>
                <p className="mt-1 text-[11px] font-extrabold tracking-normal text-gray-400 uppercase">
                  {product.subtitle}
                </p>
              </div>

              {/* Image frame with label strip */}
              <div className="w-full mb-2">
                <div className="w-full bg-[#F8FAFC] rounded-2xl border border-gray-200 overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#07bcd4]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#4bae51]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ff9800]" />
                    </div>
                    <span className="text-[10px] font-semibold tracking-[0.2em] text-gray-400 uppercase">
                      {product.label}
                    </span>
                  </div>
                  <div className="px-6 py-4">
                    <div
                      className="relative flex items-start justify-center w-full h-[280px] sm:h-[300px]"
                    >
                      <Image
                        src={product.image}
                        alt={product.label}
                        className={`absolute w-full h-full object-scale-down object-top ${
                          product.label === "START"
                            ? "!h-[380px] !w-[480px] sm:!h-[430px] sm:!w-[530px] -translate-y-[10%]"
                            : "!h-[180px] !w-[230px] sm:!h-[200px] sm:!w-[250px]"
                        }`}
                        width={product.label === "START" ? 700 : 300}
                        height={product.label === "START" ? 500 : 200}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-body mb-6 font-semibold">
                {product.description}
              </p>

              {/* Actions – keep existing buttons */}
              <div className="mt-auto pt-4 border-t border-gray-200 flex flex-col gap-4">
                <Link
                  href={product.href}
                  className="w-full bg-[#004A8C] text-white py-4 px-8 font-bold rounded-xl hover:bg-[#003366] transition-colors shadow-lg shadow-blue-900/20 flex items-center justify-center uppercase tracking-wider text-sm"
                >
                  View Specifications
                </Link>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-[#004A8C] text-white py-4 px-8 font-bold rounded-xl hover:bg-[#003366] transition-colors shadow-lg shadow-blue-900/20 uppercase tracking-wider text-sm"
                >
                  Contact Us
                </button>
              </div>
            </div>
          ))}
        </div>
      </LayoutContainer>

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
                className="w-full py-4 bg-brand-navy text-white rounded-xl font-black text-sm hover:bg-brand-primary transition-all transform hover:-translate-y-1 active:scale-95 shadow-lg shadow-brand-navy/20 mt-4"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductLineup;
