"use client";
import React, { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import {
  Bluetooth,
  ArrowsIn,
  ClockCounterClockwise,
  GlobeSimple,
  Check,
  X,
} from "phosphor-react";
import { useRouter } from "next/navigation";
import ProductFAQ from "@/components/product/ProductFAQ";

type DeviceConnectivity = "2g" | "4g";

interface Device {
  name: string;
  connectivity: DeviceConnectivity;
  image: string;
  specs: string[];
}

const SmartSeriesPage = () => {
  const [filter, setFilter] = useState<"all" | "2g" | "4g">("all");
  const [selectedForCompare, setSelectedForCompare] = useState<string[]>([]);
  const router = useRouter();
  const lineupRef = useRef<HTMLDivElement>(null);

  const scrollToLineupFromExplore = () => {
    lineupRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleCompare = (deviceName: string) => {
    setSelectedForCompare((prev) => {
      if (prev.includes(deviceName)) {
        return prev.filter((name) => name !== deviceName);
      }
      if (prev.length >= 4) return prev;
      return [...prev, deviceName];
    });
  };

  const handleCompareNow = () => {
    if (selectedForCompare.length > 0) {
      const query = selectedForCompare.join(",");
      router.push(`/products/compare?devices=${query}`);
    }
  };

  const devices: Device[] = [
    // 2G Models
    {
      name: "S-2437",
      connectivity: "2g" as const,
      image: "/Navtelecom/sample2.PNG",
      specs: [
        "Dual SIM",
        "Eco Driving",
        "Custom Logic",
        "RS-485",
        "1-Wire, MODBUS",
        "Dual CAN",
        "Bluetooth 4.0",
        "3 Universal IN",
        "2 OUT",
        "800 mAh",
      ],
    },
    {
      name: "S-2435",
      connectivity: "2g" as const,
      image: "/Navtelecom/sample2.PNG",
      specs: [
        "Dual SIM",
        "Eco Driving",
        "Custom Logic",
        "RS-485, RS-232",
        "1-Wire, MODBUS",
        "CAN",
        "Bluetooth 4.0",
        "3 Universal IN",
        "2 OUT",
        "800 mAh",
      ],
    },
    {
      name: "S-2433",
      connectivity: "2g" as const,
      image: "/Navtelecom/sample2.PNG",
      specs: [
        "Single SIM",
        "Eco Driving",
        "Custom Logic",
        "RS-485, RS-232",
        "1-Wire, MODBUS",
        "Bluetooth 4.0",
        "3 Universal IN",
        "2 OUT",
        "800 mAh",
      ],
    },
    {
      name: "S-2425",
      connectivity: "2g" as const,
      image: "/Navtelecom/sample2.PNG",
      specs: [
        "Dual SIM",
        "Eco Driving",
        "RS-485, RS-232",
        "1-Wire",
        "Bluetooth 4.0",
        "3 Universal IN",
        "2 OUT",
        "380 mAh",
      ],
    },
    {
      name: "S-2423",
      connectivity: "2g" as const,
      image: "/Navtelecom/sample2.PNG",
      specs: [
        "Single SIM",
        "Eco Driving",
        "RS-485",
        "1-Wire",
        "Bluetooth 4.0",
        "3 Universal IN",
        "2 OUT",
        "380 mAh",
      ],
    },
    // 4G Models
    {
      name: "S-4513",
      connectivity: "4g" as const,
      image: "/Navtelecom/sample2.PNG",
      specs: [
        "Dual SIM",
        "Custom Logic",
        "RS-485",
        "1-Wire, MODBUS",
        "Bluetooth 4.0 (v5.0 compatible)",
        "4 Digital IN & 1 Analog IN",
        "2 OUT",
        "380 mAh",
      ],
    },
    {
      name: "S-4511",
      connectivity: "4g" as const,
      image: "/Navtelecom/sample2.PNG",
      specs: [
        "Single SIM",
        "Custom Logic",
        "Bluetooth 4.0 (v5.0 compatible)",
        "4 Digital IN & 1 Analog IN",
        "2 OUT",
        "380 mAh",
      ],
    },
    {
      name: "S-4537",
      connectivity: "4g" as const,
      image: "/Navtelecom/sample2.PNG",
      specs: [
        "Dual SIM",
        "Eco Driving",
        "Custom Logic",
        "RS-485",
        "1-Wire, MODBUS",
        "Dual CAN",
        "Bluetooth 4.0 (v5.0 compatible)",
        "3 Universal IN",
        "2 OUT",
        "800 mAh",
      ],
    },
    {
      name: "S-4535",
      connectivity: "4g" as const,
      image: "/Navtelecom/sample2.PNG",
      specs: [
        "Dual SIM",
        "Eco Driving",
        "Custom Logic",
        "RS-485, RS-232",
        "1-Wire, MODBUS",
        "CAN",
        "Bluetooth 4.0 (v5.0 compatible)",
        "3 Universal IN",
        "2 OUT",
        "800 mAh",
      ],
    },
    {
      name: "S-4533",
      connectivity: "4g" as const,
      image: "/Navtelecom/sample2.PNG",
      specs: [
        "Dual SIM",
        "Eco Driving",
        "Custom Logic",
        "RS-485, RS-232",
        "1-Wire, MODBUS",
        "Bluetooth 4.0 (v5.0 compatible)",
        "3 Universal IN",
        "2 OUT",
        "800 mAh",
      ],
    },
  ];

  const smartFaqs = [
    {
      question: "Where can I download the Configurator?",
      answer:
        "You can download the latest version of NTC Configurator here: Get the latest version (https://www.navtelecom.ru/en/downloads/software). Note: Available for Windows OS only.",
    },
    {
      question: "How can I manage devices remotely?",
      answer:
        "SMS Commands: Send direct commands to the device (e.g. APN, server, status, reboot). Full command list (https://www.navtelecom.ru/en/downloads/sms-commands). Remote connection via NTC Configurator: Connect to an online device via Internet, read/write config, update firmware. How it works (https://www.navtelecom.ru/en/cloud/remote-configurator). DRC Cloud Service: Cloud-based platform for remote updates, config sync, diagnostics, and device health monitoring. Learn more (https://www.navtelecom.ru/en/cloud/drc-cloud).",
    },
    {
      question: "Where can I find SMS/GPRS commands?",
      answer:
        "You can find the full list of SMS/GPRS commands here: Full command list (https://www.navtelecom.ru/en/downloads/sms-commands). If you need a complex combined command, please contact Technical Support at support@navtelecom.in",
    },
    {
      question: "Where can I check supported vehicles for CAN decoding?",
      answer:
        "The list of supported vehicles and decoding files is available here: Supported vehicles list (https://www.navtelecom.ru/en/downloads/can-decoder-list).",
    },
    {
      question: "Which device should I choose — 2G or 4G?",
      answer:
        "2G models are budget-friendly and work where 2G networks are stable. 4G models support both 4G and 2G, offering longer lifecycle and future-proof connectivity. Need advice? Contact support@navtelecom.in",
    },
    {
      question: "How long is the warranty on Navtelecom devices?",
      answer:
        "All Navtelecom devices are covered by a 3-year warranty. The backup battery and the RTC battery (clock battery) are covered for 1 year.",
    },
  ];

  const filteredDevices =
    filter === "all"
      ? devices
      : devices.filter((device) => device.connectivity === filter);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans antialiased text-brand-navy">
      <Navbar />

      <main className="pt-20">
        {/* HERO SECTION */}
        <section className="relative h-[calc(100vh-5rem)] min-h-[calc(100dvh-5rem)] overflow-hidden flex items-center bg-[#EFEFEF]">
          {/* Hero image - larger, device aligned to top */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                src="/Navtelecom/smart_device.png"
                alt="SMART Series"
                fill
                className="object-contain object-center scale-100"
                priority
              />
            </div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="grid lg:grid-cols-[1fr_1.5fr_1fr] gap-12 items-center py-12 md:py-20">
              {/* Left Info */}
              <div className="space-y-8 ml-10">
                <div>
                  <h1 className="text-h1">
                    SMART
                    <br />
                    <span className="text-brand-primary">Series</span>
                  </h1>
                </div>
                <div className="space-y-4 max-w-sm">
                  <p className="text-body-lg">
                    Advanced GPS tracking devices. Designed for fleets,
                    transportation and industrial automation.
                  </p>
                </div>
                <button
                  onClick={scrollToLineupFromExplore}
                  className="bg-brand-navy text-white px-20 py-4 rounded-full font-bold text-lg hover:bg-brand-deep transition-all shadow-lg shadow-brand-primary/20 transform hover:-translate-y-1"
                >
                  Explore
                </button>
              </div>

              {/* Middle spacer column (background image already covers the section) */}
              <div className="ml-10" />

              {/* Right Big Text */}
              <div className="lg:text-right">
                <h2 className="text-display mr-10">
                  <span className="text-brand-primary">NEW</span>
                  <br />
                  Models
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* KEY FEATURES */}
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

        {/* EXPLORE THE LINEUP (Screenshot UI with Rounding) */}
        <section ref={lineupRef} className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-h1 text-center mb-10">Explore the Lineup</h2>

            {/* Filter Buttons - Squared from Screenshot */}
            <div className="flex justify-center gap-4 mb-12">
              {["all", "2g", "4g"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f as "all" | "2g" | "4g")}
                  className={`px-10 py-3 font-bold transition-all border-2 rounded-xl ${
                    filter === f
                      ? "bg-brand-navy text-white border-brand-navy"
                      : "bg-white text-brand-navy border-gray-200 hover:border-brand-navy"
                  }`}
                >
                  {f === "all" ? "All Devices" : `${f.toUpperCase()} Devices`}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDevices.map((device, idx) => (
                <div
                  key={idx}
                  className={`bg-white flex flex-col border rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden group relative ${
                    selectedForCompare.includes(device.name)
                      ? "border-brand-primary ring-2 ring-brand-primary/20"
                      : "border-gray-100"
                  }`}
                >
                  {/* Compare Toggle Button */}
                  <button
                    onClick={() => toggleCompare(device.name)}
                    className={`absolute top-6 right-6 z-20 w-6 h-6 rounded-md border-2 transition-all flex items-center justify-center ${
                      selectedForCompare.includes(device.name)
                        ? "bg-brand-primary border-brand-primary shadow-lg"
                        : "bg-white/80 backdrop-blur-sm border-gray-300 hover:border-brand-primary"
                    }`}
                    title="Add to comparison"
                  >
                    {selectedForCompare.includes(device.name) && (
                      <Check size={14} weight="bold" className="text-white" />
                    )}
                  </button>

                  <div className="p-10 pb-0 flex flex-col items-start">
                    {/* Connectivity Highlight */}
                    <div className="mb-8 w-full flex justify-between items-center">
                      <div
                        className={`px-4 py-1.5 rounded-full text-caption border ${
                          device.connectivity === "4g"
                            ? "bg-brand-primary/10 text-brand-primary border-brand-primary/20"
                            : "bg-blue-100 text-blue-800 border-blue-200"
                        }`}
                      >
                        {device.connectivity} Network
                      </div>
                    </div>

                    {/* Device image area – responsive card with aspect ratio */}
                    <div className="w-full mb-12 flex flex-col justify-start">
                      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden flex items-center justify-center mb-4 bg-[#EFEFEF]">
                        {device.image ? (
                          <>
                            <Image
                              src={device.image}
                              alt={`${device.name} device`}
                              fill
                              className="object-contain"
                            />
                            <span className="absolute left-6 top-6 text-brand-navy text-xl font-black tracking-widest uppercase">
                              {device.name}
                            </span>
                          </>
                        ) : (
                          <span className="text-brand-navy text-2xl font-black tracking-widest uppercase">
                            {device.name}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Subtitle / Series Info */}
                    <div className="mb-8">
                      <p className="text-label">Smart Series</p>
                    </div>

                    {/* Feature list - Left Aligned with Tick */}
                    <div className="space-y-4 mb-12 w-full">
                      {device.specs.map((spec, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-center gap-3 group/item"
                        >
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-primary/10 flex items-center justify-center group-hover/item:bg-brand-primary transition-colors duration-300">
                            <Check
                              size={12}
                              weight="bold"
                              className="text-brand-primary group-hover/item:text-white transition-colors duration-300"
                            />
                          </div>
                          <span className="text-caption text-gray-500 group-hover:text-brand-navy transition-colors duration-300">
                            {spec}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-10 pt-0 mt-auto">
                    <Link
                      href={`/products/tracking-devices/smart-series/${device.name.toLowerCase()}`}
                      className="w-full bg-brand-navy text-white py-5 rounded-2xl font-black text-sm hover:bg-brand-primary transition-all shadow-xl shadow-brand-navy/10 transform hover:-translate-y-1 active:scale-95 flex items-center justify-center"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY SMART STANDS OUT */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-h1 text-center mb-10">
              Why <span className="text-brand-primary">SMART</span> Stands Out
              in GPS Tracking
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
              {[
                {
                  title: (
                    <>
                      Reliable
                      <br />
                      Updates
                    </>
                  ),
                  desc: "New features and improvements, delivered with stability in mind.",
                },
                {
                  title: (
                    <>
                      Easy USB
                      <br />
                      Configuration
                    </>
                  ),
                  desc: "Configure the device directly via USB — no external power supply required.",
                },
                {
                  title: (
                    <>
                      Expert
                      <br />
                      Support
                    </>
                  ),
                  desc: "Fast, clear, and helpful assistance — from people who know the product inside and out.",
                },
                {
                  title: (
                    <>
                      36-Month
                      <br />
                      Warranty
                    </>
                  ),
                  desc: "Enjoy extended protection with a 3-year manufacturer warranty.",
                },
                {
                  title: (
                    <>
                      Industry-Proven
                      <br />
                      Reliability
                    </>
                  ),
                  desc: "10+ years of service life in real-world deployments.",
                },
                {
                  title: (
                    <>
                      Russian
                      <br />
                      Engineering
                    </>
                  ),
                  desc: "Produced in Russia. Delivered to you — without third-party layers.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#F8FAFC] p-10 md:p-12 rounded-[3rem] shadow-xl shadow-brand-navy/5 border border-white group hover:-translate-y-2 transition-all duration-500"
                >
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-brand-navy mb-4 group-hover:text-brand-primary transition-colors leading-tight min-h-[80px]">
                    {item.title}
                  </h3>
                  <p className="text-body">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY SMART STANDS OUT */}
        <ProductFAQ faqs={smartFaqs} />

        {/* Floating Compare Bar */}
        {selectedForCompare.length > 0 && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
            <div className="bg-brand-navy text-white p-4 md:p-6 rounded-[2rem] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 backdrop-blur-md">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-bold">
                  Devices selected for comparison:
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedForCompare.map((name, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/10 group/tag"
                    >
                      <span className="text-xs font-black tracking-widest">
                        {name}
                      </span>
                      <button
                        onClick={() => toggleCompare(name)}
                        className="hover:text-brand-primary transition-colors"
                      >
                        <X size={14} weight="bold" />
                      </button>
                    </div>
                  ))}
                  {selectedForCompare.length < 4 && (
                    <div className="flex items-center px-3 py-1.5 rounded-full border border-dashed border-white/20 text-[10px] uppercase tracking-widest text-white/40">
                      Select up to 4 devices
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-4 w-full md:w-auto">
                <button
                  onClick={() => setSelectedForCompare([])}
                  className="text-xs font-bold text-white/60 hover:text-white transition-colors px-4"
                >
                  Clear All
                </button>
                <button
                  onClick={handleCompareNow}
                  className="flex-1 md:flex-none bg-brand-primary text-white px-8 py-3 rounded-xl font-black text-sm hover:bg-white hover:text-brand-navy transition-all shadow-lg active:scale-95 whitespace-nowrap"
                >
                  Compare Now
                </button>
              </div>
            </div>
          </div>
        )}

        <Footer />
      </main>
    </div>
  );
};

export default SmartSeriesPage;
