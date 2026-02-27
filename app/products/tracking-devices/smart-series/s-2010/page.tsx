"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import DeviceFeatures from "@/components/product/DeviceFeatures";
import TechnicalSpecs from "@/components/product/TechnicalSpecs";
import ProductCenter from "@/components/product/ProductCenter";
import ProductFAQ from "@/components/product/ProductFAQ";
import { Cpu, Bluetooth, ArrowsIn, GlobeSimple, ArrowsLeftRight } from "phosphor-react";

const SmartS2010Page = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans antialiased overflow-x-hidden">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[calc(100vh-5rem)] min-h-[calc(100dvh-5rem)] overflow-hidden flex items-center bg-[#EFEFEF]">
          <div className="absolute inset-0 overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                src="/Navtelecom/smart_device.png"
                alt="SMART-2410 device"
                fill
                className="object-contain object-center scale-100 2xl:object-cover 2xl:object-center"
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
                    SMART-2410
                    <br />
                    <span className="text-brand-primary">SMART</span>
                  </h1>
                </div>
                <div className="space-y-4 max-w-sm">
                  <p className="text-body-lg">
                    Advanced GPS tracking for comprehensive fleet management
                    and enhanced vehicle security.
                  </p>
                  <p className="text-body-lg">
                    Feature-rich solution for complex telematics tasks,
                    offering flexibility and scalability for diverse
                    applications.
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
                  <span className="text-brand-primary">Advanced</span>
                  <br />
                  Model
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* Device Features Section */}
        <section className="py-16 md:py-20 bg-white shadow-2xl relative z-10 -mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-h1 mb-3">
                Technology That{" "}
                <span className="text-brand-primary">Moves Fleets</span>
              </h2>
              <p className="text-body max-w-2xl mx-auto">
                CAN, BLE and GPS integration. Engineered for transport and
                telematics providers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
              {[
                {
                  title: "RS-485 Ready",
                  sub: "Wired. Reliable. Universal.",
                  desc: "Supports MODBUS. Connect fuel, temperature, and more.",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="w-10 h-10"
                    >
                      <rect x="4" y="6" width="16" height="12" rx="2" />
                      <circle cx="8" cy="10" r="0.5" fill="currentColor" />
                      <circle cx="12" cy="10" r="0.5" fill="currentColor" />
                      <circle cx="16" cy="10" r="0.5" fill="currentColor" />
                      <circle cx="10" cy="14" r="0.5" fill="currentColor" />
                      <circle cx="14" cy="14" r="0.5" fill="currentColor" />
                    </svg>
                  ),
                },
                {
                  title: "BLE Available",
                  sub: "Wireless. Effortless.",
                  desc: "Seamlessly connect any BLE sensors to your tracker.",
                  icon: <Bluetooth size={40} weight="light" />,
                },
                {
                  title: "CAN Connected",
                  sub: "Vehicle data. No delay.",
                  desc: "Fuel, RPM, mileage — straight from the bus.",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="w-10 h-10"
                    >
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 17a7 7 0 1 1 0-14 7 7 0 0 1 0 14zM12 8l4 4-4 4-4-4 4-4z" />
                    </svg>
                  ),
                },
                {
                  title: "Eco Driving",
                  sub: "Less fuel. Less risk.",
                  desc: "Monitor driving style and reduce costs fleet-wide.",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="w-10 h-10"
                    >
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 17a7 7 0 1 1 0-14 7 7 0 0 1 0 14zM12 8l4 4-4 4-4-4 4-4z" />
                    </svg>
                  ),
                },
                {
                  title: "Custom Algorithm",
                  sub: "Smart triggers. Smarter fleets.",
                  desc: "Create your own logic inside the device.",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="w-10 h-10"
                    >
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 17a7 7 0 1 1 0-14 7 7 0 0 1 0 14zM12 8l4 4-4 4-4-4 4-4z" />
                    </svg>
                  ),
                },
                {
                  title: "Remote Control",
                  sub: "Configure anytime. From anywhere.",
                  desc: "Remote setup made easy.",
                  icon: <GlobeSimple size={40} weight="light" />,
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="group p-10 md:p-12 bg-white rounded-[3rem] border border-gray-100 hover:shadow-2xl transition-all duration-500 relative overflow-hidden min-h-[16rem] lg:min-h-[17rem]"
                >
                  <div className="absolute top-8 right-8 text-gray-300 group-hover:text-brand-primary transition-colors duration-500 scale-110">
                    {feature.icon}
                  </div>
                  <div className="pt-5 pr-4">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-brand-navy mb-2 min-h-[72px] flex items-center">
                      {feature.title}
                    </h3>
                    <p className="text-caption text-brand-primary mb-3 min-h-[20px]">
                      {feature.sub}
                    </p>
                    <p className="text-body">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

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

export default SmartS2010Page;