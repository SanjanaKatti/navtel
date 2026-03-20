"use client";
import React, { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Product3DVisual from "@/components/product/Product3DVisual";
import DeviceFeatures from "@/components/product/DeviceFeatures";
import TechnicalSpecs from "@/components/product/TechnicalSpecs";
import ProductCenter from "@/components/product/ProductCenter";
import {
  Bluetooth,
  ArrowsIn,
  ClockCounterClockwise,
  GlobeSimple,
} from "phosphor-react";

const S2013Page = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans antialiased overflow-x-hidden">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[calc(100dvh-5rem)] overflow-hidden flex items-start lg:items-center bg-[#EFEFEF] product-background-image start-device-hero-background">
          <div
            className="absolute inset-0 bg-white/30 lg:bg-transparent z-[1]"
            aria-hidden
          />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col lg:block">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr] gap-8 lg:gap-12 items-start lg:items-center py-8 sm:py-12 md:py-16 lg:py-20">
              {/* Left Info - stacked at top on mobile/tablet */}
              <div className="w-full max-w-lg flex flex-col items-center lg:items-start text-center lg:text-left mx-auto lg:mx-0 lg:ml-10 space-y-5 sm:space-y-8">
                <div>
                  <h1 className="text-h1 break-words">
                    S-2013
                    <br />
                    <span className="text-brand-primary">START</span>
                  </h1>
                </div>
                <div className="space-y-4 max-w-sm">
                  <p className="text-body-lg">
                    Basic GPS tracking for location and fuel monitoring.
                    Reliable and cost-effective solution for fleet operations
                    and transport automation.
                  </p>
                </div>
                <button
                  onClick={() =>
                    featuresRef.current?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-brand-navy text-white px-12 sm:px-16 lg:px-20 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-brand-deep transition-all shadow-lg shadow-brand-primary/20 transform hover:-translate-y-1 w-full sm:w-auto mb-8 sm:mb-12 lg:mb-0"
                >
                  Explore
                </button>
              </div>

              {/* Middle column - spacer on desktop only; on mobile/tablet adds breathing room before image area */}
              <div className="hidden lg:block lg:ml-10 w-full h-[clamp(12rem,36vw,28rem)]" />
              <div
                className="lg:hidden min-h-[14rem] sm:min-h-[18rem] flex-shrink-0"
                aria-hidden
              />

              {/* Right Big Text - hidden on mobile/tablet to avoid overlap */}
              <div className="hidden lg:block lg:text-right">
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
        <div ref={featuresRef}>
          <DeviceFeatures
            heading="Device"
            highlightedHeading="Features"
            description=""
            features={[
              {
                title: "RS-485 Ready",
                sub: "Wired. Reliable. Precise.",
                desc: "Connect 6 fuel sensors via RS-485. LLS protocol ensures accurate readings.",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-8 h-8"
                  >
                    <rect x="4" y="6" width="16" height="12" rx="2" />
                    <circle cx="8" cy="10" r="0.5" fill="currentColor" />
                    <circle cx="12" cy="10" r="0.5" fill="currentColor" />
                    <circle cx="16" cy="10" r="0.5" fill="currentColor" />
                  </svg>
                ),
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
        </div>

        {/* Technical Specifications Section */}
        <TechnicalSpecs
          groups={[
            {
              groupName: "Interfaces",
              items: [
                {
                  label: "Digital Inputs",
                  value: "2 (with overvoltage protection up to 200 V)",
                },
                {
                  label: "Analog Inputs",
                  value: "1 (configurable as Digital, range 0–31 V)",
                },
                {
                  label: "Digital Outputs",
                  value: "1 (up to 48 V / 500 mA, open collector type)",
                },
                { label: "RS-485 Interface", value: true },
                {
                  label: "USB Interface",
                  value: "USB Type-C (configuration, data, diagnostics)",
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
                {
                  label: "Backup Battery",
                  value: "Li-Po, 3.7 V, 130 mAh",
                },
                {
                  label: "EEPROM Data Retention (power-off)",
                  value: "5 days",
                },
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
                  label: "Accuracy (CEP, static, –130 dBm)",
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
                    "Class 4 (2 W) in GSM 850 and EGSM 900, Class 1 (1 W) in DCS 1800 and PCS 1900",
                },
                { label: "Data Support", value: "SMS (Text / Data)" },
                { label: "SIM Slots", value: "1" },
                {
                  label: "SIM Type",
                  value: "Slot 1: External, nano-SIM",
                },
              ],
            },
            {
              groupName: "Memory & Storage",
              items: [{ label: "Data Storage", value: "up to 25,000 records" }],
            },
            {
              groupName: "Environmental",
              items: [
                {
                  label: "Operating Temperature (with internal battery)",
                  value: "–20 °C to +60 °C",
                },
                {
                  label: "Operating Temperature (without internal battery)",
                  value: "–40 °C to +85 °C",
                },
                {
                  label: "Storage Temperature (with internal battery)",
                  value: "0 °C to +40 °C",
                },
                {
                  label: "Storage Temperature (without internal battery)",
                  value: "–40 °C to +85 °C",
                },
                {
                  label: "Charging Temperature (internal battery)",
                  value: "0 °C to +50 °C",
                },
                {
                  label: "Humidity",
                  value: "up to 95% (at +35 °C, non-condensing)",
                },
              ],
            },
            {
              groupName: "Physical Specification",
              items: [
                { label: "Ingress Protection", value: "IP54" },
                { label: "Shock Resistance", value: "up to 24 g" },
                {
                  label: "Dimensions",
                  value: "65.5 × 38.4 × 14.3 mm (L × W × H)",
                },
                { label: "Weight", value: "31 g" },
                { label: "Indicators (LEDs)", value: "SYS, GSM, GNSS" },
              ],
            },
          ]}
        />

        {/* Product Center Section - placeholder; replace with your content later */}
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
              href: "https://wiki.navtelecom.ru/en/home/devices/s2013",
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

        {/* FAQ redirect notice */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-body text-center">
              For answers about S-2013 installation, RS-485 peripherals, or
              commands, please visit our{" "}
              <a
                href="/support/faq"
                className="text-brand-primary font-bold hover:underline"
              >
                FAQ page
              </a>
              .
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default S2013Page;
