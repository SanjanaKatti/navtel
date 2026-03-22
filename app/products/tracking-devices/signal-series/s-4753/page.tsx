"use client";
import React, { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DeviceFeatures from "@/components/product/DeviceFeatures";
import TechnicalSpecs from "@/components/product/TechnicalSpecs";
import ProductCenter from "@/components/product/ProductCenter";
import { Bluetooth, GlobeSimple, Cpu, Code } from "phosphor-react";

const S4753Page = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans antialiased overflow-x-hidden">
      <Navbar />
      <main className="pt-20">
      <section className="relative min-h-[calc(100dvh-5rem)] overflow-hidden flex items-start lg:items-center bg-[#EFEFEF] product-background-image signal-device-hero-background">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full w-full">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start lg:items-center py-8 sm:py-12 md:py-20">
            <div className="space-y-8 ml-0 lg:ml-10">
              <div>
                <h1 className="text-h1">
                  S-4753
                  <br />
                  <span className="text-brand-primary">SIGNAL</span>
                </h1>
              </div>
              <div className="space-y-4 max-w-sm">
                <p className="text-body-lg">
                  All-in-one tracking and control solution for transport,
                  fleets, and industrial automation.
                </p>
              </div>
                <button
                  onClick={() =>
                    featuresRef.current?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-brand-navy text-white px-20 py-4 rounded-full font-bold text-lg hover:bg-brand-deep transition-all shadow-lg shadow-brand-primary/20 transform hover:-translate-y-1"
                >
                  Explore
                </button>
            </div>
            <div className="ml-0 lg:ml-10 w-full h-[clamp(12rem,36vw,28rem)]" />
          </div>
        </div>
      </section>
      <div ref={featuresRef}>
        <DeviceFeatures
        heading="Device"
        highlightedHeading="Features"
        description=""
        features={[
          {
            title: "RS-485 & RS-232 Ready",
            sub: "Wired. Reliable. Universal.",
            desc: "Supports MODBUS. Connect fuel, temperature, and more.",
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
            desc: "Seamlessly connect any BLE sensors to your tracker.",
            icon: <Bluetooth size={32} weight="light" />,
          },
          {
            title: "1-Wire Sensors & Driver ID",
            sub: "Simple. Accurate. Connected.",
            desc: "Integrate temperature sensors, iButton driver ID keys, and more via 1-Wire interface.",
            icon: (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-8 h-8"
              >
                <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
              </svg>
            ),
          },
          {
            title: "Dual CAN Connected",
            sub: "Vehicle data. No delay.",
            desc: "Fuel, RPM, mileage — straight from the bus.",
            icon: <Cpu size={32} weight="light" />,
          },
          {
            title: "Custom Algorithm",
            sub: "Smart triggers. Smarter fleets.",
            desc: "Create your own logic inside the device.",
            icon: <Code size={32} weight="light" />,
          },
          {
            title: "Two-Way Communication",
            sub: "Stay connected. Act faster.",
            desc: "Exchange instructions with drivers instantly.",
            icon: <GlobeSimple size={32} weight="light" />,
          },
        ]}
      />
      <TechnicalSpecs
        groups={[
          {
            groupName: "Interfaces",
            items: [
              {
                label: "Universal Inputs",
                value: "6 (with overvoltage protection up to 200 V)",
              },
              {
                label: "Input Modes",
                value:
                  "Digital, Impulse, Frequency, Analog, or Tachometer (RPM)",
              },
              {
                label: "Digital Outputs",
                value: "4 (up to 48 V / 500 mA, open collector type)",
              },
              {
                label: "USB Interface",
                value: "Mini-USB (configuration, data, diagnostics)",
              },
              { label: "1-Wire Interface", value: true },
              { label: "RS-232 Interface", value: true },
              { label: "RS-485 Interface", value: true },
              { label: "CAN Interface", value: "Dual CAN" },
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
              { label: "Backup Battery", value: "Li-Po, 3.7 V, 800 mAh" },
              { label: "EEPROM Data Retention (power-off)", value: "5 days" },
            ],
          },
          {
            groupName: "GNSS",
            items: [
              {
                label: "Supported Systems",
                value: "GPS / GLONASS / BeiDou / QZSS / Galileo",
              },
              { label: "Channels", value: "99 acquisition, 33 tracking" },
              {
                label: "Sensitivity",
                value: "–167 dBm (tracking), –149 dBm (cold start)",
              },
              {
                label: "Time to First Fix",
                value: "Hot start < 1 s, Warm start < 22 s, Cold start < 29 s",
              },
              {
                label: "Accuracy (CEP, static, –130 dBm)",
                value: "2.5 m (horizontal), 5 m (vertical)",
              },
              { label: "Update Rate", value: "1 Hz" },
              { label: "A-GPS Support", value: "available" },
            ],
          },
          {
            groupName: "Cellular",
            items: [
              { label: "Network", value: "GSM / GPRS / EDGE / LTE" },
              { label: "Max Data Rate (2G)", value: "85.6 kbps" },
              {
                label: "2G Bands",
                value:
                  "Class 4 (2 W) in GSM 850 / EGSM 900, Class 1 (1 W) in DCS 1800 / PCS 1900",
              },
              {
                label: "EDGE Power Class",
                value:
                  "E2 (27 dBm ±3 dB) @ EGSM 900, E1 (26 dBm +3 / –4 dB) @ DCS 1800",
              },
              { label: "LTE Power Class", value: "3 (23 dBm ±2.7 dB)" },
              { label: "Data Support", value: "SMS (Text / Data)" },
              { label: "SIM Slots", value: "2" },
              {
                label: "SIM Type",
                value: "Slot 1: External, mini-SIM; Slot 2: Internal, nano-SIM",
              },
            ],
          },
          {
            groupName: "Memory & Storage",
            items: [
              { label: "Data Storage", value: "up to 100,000 records" },
              {
                label: "External Memory",
                value: "microSD card support (up to 32 GB)",
              },
              {
                label: "Telemetry Records on microSD",
                value: "not less than 2,000,000 per 1 GB",
              },
            ],
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
              { label: "Dimensions", value: "105 × 78 × 20.5 mm (L × W × H)" },
              { label: "Weight", value: "98 g" },
              { label: "Indicators (LEDs)", value: "SYS, GSM, GNSS" },
            ],
          },
        ]}
      />
      <ProductCenter
        heading="Product Center"
        products={[
          {
            name: "Brochures",
            series: "Download product brochures.",
            connectivity: "4g",
            specs: [],
            buttonText: "Download",
          },
          {
            name: "Knowledge Base",
            series: "Full manuals and guides.",
            connectivity: "4g",
            specs: [],
            buttonText: "Explore",
            href: "https://wiki.navtelecom.ru/en/home/devices/s4753",
          },
          {
            name: "PC Configurator",
            series: "Configure devices from desktop.",
            connectivity: "4g",
            specs: [],
            buttonText: "Download",
          },
          {
            name: "Android Configurator",
            series: "Mobile app for device setup.",
            connectivity: "4g",
            specs: [],
            buttonText: "Download",
          },
        ]}
      />
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-body text-center">
            For questions about S-4753, visit our{" "}
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
      </div>
    </main>
    <>
      <Footer />
    </>
  </div>
  );
}

export default S4753Page;
