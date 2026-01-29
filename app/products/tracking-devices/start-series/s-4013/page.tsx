"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductHero from "@/components/product/ProductHero";
import DeviceFeatures from "@/components/product/DeviceFeatures";
import TechnicalSpecs from "@/components/product/TechnicalSpecs";
import ProductCenter from "@/components/product/ProductCenter";
import ProductFAQ from "@/components/product/ProductFAQ";
import { Cpu, Bluetooth, GlobeSimple, ClockCounterClockwise } from "phosphor-react";

const S4013Page = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <ProductHero
          title="S-4013"
          subtitle="Start Series"
          badge="4G LTE GPS TRACKER"
          description={[
            "Advanced 4G solution for high-performance fleet monitoring.",
            "Featuring RS-485 support and integrated battery for mission-critical reliability."
          ]}
          buttonText="Request Quote"
          onButtonClick={() => console.log("Request Quote Clicked")}
          visual={
            <div className="w-full max-w-md aspect-[16/10] bg-brand-light-1 rounded-[3rem] flex items-center justify-center relative shadow-inner">
               <div className="w-4/5 h-3/5 bg-brand-navy rounded-[2rem] shadow-2xl flex items-center justify-center">
                  <span className="text-brand-primary text-4xl font-black tracking-[0.2em] uppercase">S-4013</span>
               </div>
            </div>
          }
        />

        {/* Device Features Section */}
        <DeviceFeatures
          heading="High-Speed Tracking."
          highlightedHeading="Globally."
          description="The S-4013 combines high-speed 4G connectivity with advanced sensor support."
          features={[
            {
              title: "4G LTE Support",
              sub: "Fast. Reliable. Global.",
              desc: "Ensure stable data transmission even in low-coverage areas with modern 4G technology.",
              icon: <GlobeSimple size={32} weight="light" />
            },
            {
              title: "RS-485 Interface",
              sub: "Professional. Precise.",
              desc: "Connect multiple fuel level sensors and digital accessories for complete fleet transparency.",
              icon: <Cpu size={32} weight="light" />
            },
            {
              title: "Internal Battery",
              sub: "Always. Active.",
              desc: "The 130 mAh backup battery keeps the device tracking even if the main power is disconnected.",
              icon: <ClockCounterClockwise size={32} weight="light" />
            },
            {
              title: "USB Type-C",
              sub: "Universal. Quick.",
              desc: "Configure the device in seconds with the industry-standard USB-C port.",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                  <rect x="4" y="10" width="16" height="4" rx="2" />
                  <circle cx="12" cy="12" r="1" fill="currentColor" />
                </svg>
              )
            }
          ]}
        />

        {/* Technical Specifications Section */}
        <TechnicalSpecs
          groups={[
            {
              groupName: "Main Characteristics",
              items: [
                { label: "Network", value: "4G LTE / 3G / 2G" },
                { label: "Navigation", value: "GPS/GLONASS/Galileo/BDS" },
                { label: "SIM Support", value: "Single Nano-SIM" },
                { label: "Bluetooth", value: "4.0 LE" }
              ]
            },
            {
              groupName: "Inputs & Outputs",
              items: [
                { label: "Digital Inputs", value: "2" },
                { label: "Analog Inputs", value: "1" },
                { label: "Digital Outputs", value: "1" },
                { label: "RS-485", value: "Supported (LLS/RFID/etc.)" }
              ]
            }
          ]}
        />

        {/* Product Center Section (Related Products) */}
        <ProductCenter
          heading="Explore the Series"
          products={[
            {
              name: "S-4011",
              series: "Start Series",
              connectivity: "4g",
              specs: ["Single SIM", "Engine Hours", "130 mAh Battery"],
              buttonText: "Learn more",
              href: "/products/tracking-devices/start-series/s-4011"
            },
            {
              name: "S-2013",
              series: "Start Series",
              connectivity: "2g",
              specs: ["RS-485", "Bluetooth 4.0", "130 mAh Battery"],
              buttonText: "Learn more",
              href: "/products/tracking-devices/start-series/s-2013"
            }
          ]}
        />

        {/* FAQ Section */}
        <ProductFAQ
          faqs={[
            {
              question: "Does the S-4013 support remote configuration?",
              answer: "Yes, it can be fully configured remotely via SMS or GPRS/LTE commands."
            },
            {
              question: "What is the warranty period?",
              answer: "All Navtelecom devices come with a standard 36-month manufacturer warranty."
            }
          ]}
        />
      </main>

      <Footer />
    </div>
  );
};

export default S4013Page;
