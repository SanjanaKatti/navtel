"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import DeviceFeatures from "@/components/product/DeviceFeatures";
import TechnicalSpecs from "@/components/product/TechnicalSpecs";
import ProductCenter from "@/components/product/ProductCenter";
import ProductFAQ from "@/components/product/ProductFAQ";
import {
  Cpu,
  Bluetooth,
  ArrowsIn,
  ClockCounterClockwise,
  GlobeSimple,
  ArrowsLeftRight,
} from "phosphor-react";

const S2010Page = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans antialiased overflow-x-hidden">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[calc(100vh-5rem)] min-h-[calc(100dvh-5rem)] overflow-hidden flex items-center bg-[#EFEFEF]">
          <div className="absolute inset-0 overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                src="/Navtelecom/start_device.png"
                alt="S-2010 device"
                fill
                className="object-contain object-center scale-[1.02] 2xl:object-cover 2xl:object-[center_60%] 2xl:scale-100"
                sizes="100vw"
                priority
              />
            </div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="grid lg:grid-cols-[1fr_1.5fr_1fr] gap-12 items-center py-12 md:py-20">
              {/* Left Info */}
              <div className="space-y-8 ml-0 lg:ml-10">
                <div>
                  <h1 className="text-h1">
                    S-2010
                    <br />
                    <span className="text-brand-primary">START</span>
                  </h1>
                </div>
                <div className="space-y-4 max-w-sm">
                  <p className="text-body-lg">
                    Basic GPS tracking for location and fuel monitoring.
                  </p>
                  <p className="text-body-lg">
                    Reliable and cost-effective solution for fleet operations
                    and transport automation.
                  </p>
                </div>
                <button className="bg-brand-navy text-white px-20 py-4 rounded-full font-bold text-lg hover:bg-brand-deep transition-all shadow-lg shadow-brand-primary/20 transform hover:-translate-y-1">
                  Explore
                </button>
              </div>

              {/* Middle spacer column (background image already covers the section) */}
              <div className="ml-0 lg:ml-10" />

              {/* Right Big Text */}
              <div className="lg:text-right">
                <h2 className="text-display mr-10">
                  <span className="text-brand-primary">2G</span>
                  <br />
                  GSM
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* Device Features Section */}
        <DeviceFeatures
          heading="Device"
          highlightedHeading="Features"
          description=""
          features={[
            {
              title: "5 Input Lines",
              sub: "Reliable. Clear control.",
              desc: "Connect ignition, doors, seat belts and other switches.",
              icon: <ArrowsLeftRight size={32} weight="light" />,
            },
            {
              title: "BLE Available",
              sub: "Wireless. Effortless.",
              desc: "Seamlessly connect BLE sensors to your tracker.",
              icon: <Bluetooth size={32} weight="light" />,
            },
            {
              title: "Ultra-Compact Design",
              sub: "Install anywhere. Stay invisible.",
              desc: "Tiny size allows discreet installation even in tight or unexpected places.",
              icon: <ArrowsIn size={32} weight="light" />,
            },
            {
              title: "USB Type-C",
              sub: "Fast setup. Flexible use.",
              desc: "Configure or switch modes with ease using a modern USB-C connection.",
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-8 h-8"
                >
                  <rect x="4" y="10" width="16" height="4" rx="2" />
                  <circle cx="12" cy="12" r="1" fill="currentColor" />
                </svg>
              ),
            },
            {
              title: "Engine Hours Calculation",
              sub: "Smart logic. Clear insights.",
              desc: "Track engine runtime based on internal algorithms — no external sensors needed.",
              icon: <ClockCounterClockwise size={32} weight="light" />,
            },
            {
              title: "Remote Control",
              sub: "Configure anytime. From anywhere.",
              desc: "Remote setup made easy.",
              icon: <GlobeSimple size={32} weight="light" />,
            },
          ]}
        />

        {/* Technical Specifications Section */}
        <TechnicalSpecs
          groups={[
            {
              groupName: "Interfaces",
              items: [
                {
                  label: "Digital Inputs",
                  value: "4 (with overvoltage protection up to 200 V)",
                },
                {
                  label: "Analog Inputs",
                  value: "1 (configurable as Digital, range 0–31 V)",
                },
                {
                  label: "Digital Outputs",
                  value: "1 (up to 48 V / 500 mA, open collector type)",
                },
                {
                  label: "USB Interface",
                  value: "Type-C (configuration, data, diagnostics)",
                },
                {
                  label: "Supported Antennas",
                  value: "Internal GNSS / Cellular",
                },
                { label: "3-Axis Accelerometer", value: true },
              ],
            },
            {
              groupName: "Bluetooth",
              items: [
                {
                  label: "Version",
                  value: "4.0 + LE (up to 4 BLE sensors supported)",
                },
                {
                  label: "Supported Peripherals",
                  value:
                    "Fuel Level, Temperature & Humidity, Axle Load, Tilt Angle",
                },
                {
                  label: "All Sensor Parameters",
                  value:
                    "Battery Voltage, Signal Strength, Pressure, Illumination, etc.",
                },
              ],
            },
            {
              groupName: "Power",
              items: [
                { label: "Input Voltage Range", value: "9.5 – 47 V DC" },
                { label: "Average Current Consumption (12 V)", value: "75 mA" },
                {
                  label: "Current Consumption (12 V, GNSS & GSM off)",
                  value: "25 mA",
                },
                { label: "Max. Current Consumption (12 V)", value: "200 mA" },
                { label: "Overvoltage Protection", value: "up to 200 V" },
                { label: "Backup Battery", value: false },
                { label: "EEPROM Data Retention", value: "5 days" },
              ],
            },
            {
              groupName: "GNSS",
              items: [
                { label: "Supported Systems", value: "GPS / GLONASS / BeiDou" },
                { label: "Channels", value: "99 acquisition, 33 tracking" },
                {
                  label: "Sensitivity",
                  value: "–167 dBm (tracking), –149 dBm (cold start)",
                },
                {
                  label: "Time to First Fix",
                  value:
                    "Hot start < 1 s, Warm start < 22 s, Cold start < 29 s",
                },
                {
                  label: "Accuracy",
                  value: "2.5 m (horizontal), 5 m (vertical)",
                },
                { label: "Update Rate", value: "1 Hz" },
              ],
            },
            {
              groupName: "Cellular",
              items: [
                { label: "Network", value: "GSM / GPRS" },
                { label: "Max Data Rate", value: "85.6 kbps" },
                {
                  label: "2G Bands",
                  value:
                    "Class 4 (2W) in GSM 850/900, Class 1 (1W) in DCS 1800/1900",
                },
                { label: "Data Support", value: "SMS (Text / Data)" },
                { label: "SIM Slots", value: "1" },
                { label: "SIM Type", value: "Nano-SIM" },
              ],
            },
            {
              groupName: "Memory & Storage",
              items: [
                { label: "Internal Memory", value: "4 MB Flash" },
                { label: "Data Storage", value: "up to 25,000 records" },
              ],
            },
            {
              groupName: "Environmental",
              items: [
                { label: "Operating Temperature", value: "–40 °C to +85 °C" },
                { label: "Storage Temperature", value: "–40 °C to +85 °C" },
                { label: "Humidity", value: "up to 95% non-condensing" },
              ],
            },
            {
              groupName: "Physical Specification",
              items: [
                { label: "Ingress Protection", value: "IP54" },
                { label: "Shock Resistance", value: "up to 24 g" },
                { label: "Dimensions", value: "65.5 × 38.4 × 14.3 mm" },
                { label: "Weight", value: "31 g" },
                { label: "Indicators (LEDs)", value: "SYS, GSM, GNSS" },
              ],
            },
          ]}
        />

        {/* Product Center Section */}
        <ProductCenter
          heading="Product Center"
          products={[
            {
              name: "Brochures",
              series:
                "Download product brochures with key features and benefits.",
              connectivity: "2g",
              specs: [],
              buttonText: "Download",
            },
            {
              name: "Knowledge Base",
              series: "Explore pages with full manuals, and guides.",
              connectivity: "2g",
              specs: [],
              buttonText: "Explore",
            },
            {
              name: "PC Configurator",
              series:
                "Configure, update, and manage devices from your desktop.",
              connectivity: "2g",
              specs: [],
              buttonText: "Download",
            },
            {
              name: "Android Configurator",
              series:
                "Set up and control devices on the go with our mobile app.",
              connectivity: "2g",
              specs: [],
              buttonText: "Download",
            },
          ]}
        />

        {/* FAQ Section */}
        <ProductFAQ
          faqs={[
            {
              question: "Where can I download the Configurator?",
              answer:
                "You can download the latest version of our PC and Android Configurator from the Product Center section above.",
            },
            {
              question: "How can I manage devices remotely?",
              answer:
                "Devices can be managed remotely via SMS commands or through our specialized NTC Control software.",
            },
            {
              question: "Where can I find SMS/GPRS commands?",
              answer:
                "Detailed lists of all supported commands are available in the device manual within our Knowledge Base.",
            },
            {
              question: "Which device should I choose — 2G or 4G?",
              answer:
                "2G is cost-effective for basic tracking. 4G provides faster data transfer and is better for future-proofing in regions where 2G is being phased out.",
            },
            {
              question: "How long is the warranty on Navtelecom devices?",
              answer:
                "We offer a 36-month manufacturer warranty on all tracking equipment.",
            },
          ]}
        />
      </main>

      <Footer />
    </div>
  );
};

export default S2010Page;
