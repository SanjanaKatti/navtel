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

const StartSeriesPage = () => {
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

  const devices = [
    // 2G Models
    {
      name: "S-2010",
      connectivity: "2g" as const,
      image: "/Navtelecom/sample1.png",
      specs: [
        "Single SIM",
        "Engine Hours",
        "Bluetooth 4.0",
        "4 Digital IN & 1 Analog IN",
        "1 OUT",
      ],
    },
    {
      name: "S-2011",
      connectivity: "2g" as const,
      image: "/Navtelecom/sample1.png",
      specs: [
        "Single SIM",
        "Engine Hours",
        "Bluetooth 4.0",
        "4 Digital IN & 1 Analog IN",
        "1 OUT",
        "130 mAh Battery",
      ],
    },
    {
      name: "S-2013",
      connectivity: "2g" as const,
      image: "/Navtelecom/sample1.png",
      specs: [
        "Single SIM",
        "Engine Hours",
        "RS-485",
        "Bluetooth 4.0",
        "2 Digital IN & 1 Analog IN",
        "1 OUT",
        "130 mAh Battery",
      ],
    },
    // 4G Models
    {
      name: "S-4011",
      connectivity: "4g" as const,
      image: "/Navtelecom/sample1.png",
      specs: [
        "Single SIM",
        "Engine Hours",
        "Bluetooth 4.0",
        "4 Digital IN & 1 Analog IN",
        "1 OUT",
        "130 mAh Battery",
      ],
    },
    {
      name: "S-4013",
      connectivity: "4g" as const,
      image: "/Navtelecom/sample1.png",
      specs: [
        "Single SIM",
        "Engine Hours",
        "RS-485",
        "Bluetooth 4.0",
        "2 Digital IN & 1 Analog IN",
        "1 OUT",
        "130 mAh Battery",
      ],
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
                src="/Navtelecom/Start_series.png"
                alt="START Series"
                fill
                className="object-cover object-[center_85%] scale-90 -translate-y-[15%]"
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
                    START
                    <br />
                    <span className="text-brand-primary">Series</span>
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
                  <span className="text-brand-primary">Basic</span>
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
                Track your fleet.{" "}
                <span className="text-brand-primary">Monitor your fuel.</span>
              </h2>
              <p className="text-body max-w-2xl mx-auto">
                Essential tools for GPS tracking, fuel control, and fleet
                automation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
              {[
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
                  desc: "Seamlessly connect BLE sensors to your tracker.",
                  icon: <Bluetooth size={40} weight="light" />,
                },
                {
                  title: "Ultra-Compact Design",
                  sub: "Install anywhere. Stay invisible.",
                  desc: "Tiny size allows discreet installation even in tight or unexpected places.",
                  icon: <ArrowsIn size={40} weight="light" />,
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
                      strokeWidth="2"
                      className="w-10 h-10"
                    >
                      <rect x="3" y="8" width="18" height="8" rx="4" />
                      <rect
                        x="7"
                        y="11"
                        width="10"
                        height="2"
                        rx="1"
                        fill="currentColor"
                        stroke="none"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Engine Hours Calculation",
                  sub: "Smart logic. Clear insights.",
                  desc: "Track engine runtime based on internal algorithms — no external sensors needed.",
                  icon: <ClockCounterClockwise size={40} weight="light" />,
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
                  className="group p-10 md:p-12 bg-white rounded-[3rem] border border-gray-100 hover:shadow-2xl transition-all duration-500 relative overflow-hidden min-h-[18rem] lg:min-h-[20rem]"
                >
                  <div className="absolute top-8 right-8 text-gray-300 group-hover:text-brand-primary transition-colors duration-500 scale-110">
                    {feature.icon}
                  </div>
                  <div className="pt-5 pr-4">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-brand-navy mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-caption text-brand-primary mb-3">
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
              <button
                onClick={() => setFilter("all")}
                className={`px-10 py-3 font-bold transition-all border-2 rounded-xl ${
                  filter === "all"
                    ? "bg-brand-navy text-white border-brand-navy"
                    : "bg-white text-brand-navy border-gray-200 hover:border-brand-navy"
                }`}
              >
                All Devices
              </button>
              <button
                onClick={() => setFilter("2g")}
                className={`px-10 py-3 font-bold transition-all border-2 rounded-xl ${
                  filter === "2g"
                    ? "bg-brand-navy text-white border-brand-navy"
                    : "bg-white text-brand-navy border-gray-200 hover:border-brand-navy"
                }`}
              >
                2G Devices
              </button>
              <button
                onClick={() => setFilter("4g")}
                className={`px-10 py-3 font-bold transition-all border-2 rounded-xl ${
                  filter === "4g"
                    ? "bg-brand-navy text-white border-brand-navy"
                    : "bg-white text-brand-navy border-gray-200 hover:border-brand-navy"
                }`}
              >
                4G Devices
              </button>
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
                            : "bg-gray-100 text-gray-500 border-gray-200"
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
                      <p className="text-label">Start Series</p>
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
                      href={`/products/tracking-devices/start-series/${device.name.toLowerCase()}`}
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

        {/* WHY START STANDS OUT */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-h1 text-center mb-16">
              Why <span className="text-brand-primary">START</span> Stands Out
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
              {[
                {
                  title: "Reliable Updates",
                  desc: "New features and improvements, delivered with stability in mind.",
                },
                {
                  title: "Easy USB Configuration",
                  desc: "Configure the device directly via USB — no external power supply required.",
                },
                {
                  title: "Expert Support",
                  desc: "Fast, clear, and helpful assistance — from people who know the product inside and out.",
                },
                {
                  title: "36-Month Warranty",
                  desc: "Enjoy extended protection with a 3-year manufacturer warranty.",
                },
                {
                  title: "Industry-Proven Reliability",
                  desc: "10+ years of service life in real-world deployments.",
                },
                {
                  title: "Russian Engineering",
                  desc: "Produced in Russia. Delivered to you — without third-party layers.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#F8FAFC] p-10 md:p-12 rounded-[3rem] shadow-xl shadow-brand-navy/5 border border-white group hover:-translate-y-2 transition-all duration-500"
                >
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-brand-navy mb-4 group-hover:text-brand-primary transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-body">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

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
    </div>
  );
};

export default StartSeriesPage;
