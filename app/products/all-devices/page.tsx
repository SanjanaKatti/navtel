"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { Check, X, Funnel } from "phosphor-react";

interface Device {
  name: string;
  category: "Basic" | "Advanced" | "Professional";
  series: "START" | "SMART" | "SIGNAL";
  connectivity: "2G" | "4G / 2G";
  sim: "Single SIM" | "Dual SIM";
  interfaces: string[];
  bluetooth: string;
  inputs: string;
  outputs: string;
  antennas: "Internal" | "External";
  battery: string;
  href: string;
}

const AllDevicesPage = () => {
  const seriesImages: Record<Device["series"], string> = {
    START: "/Navtelecom/sample1.PNG",
    SMART: "/Navtelecom/sample2.PNG",
    SIGNAL: "/Navtelecom/sample3.PNG",
  };

  const [selectedDevices, setSelectedDevices] = useState<Device[]>(() => {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem("compareDevices");
    if (!stored) return [];
    try {
      return JSON.parse(stored) as Device[];
    } catch {
      return [];
    }
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Old style quick filters
  const [quickSeries, setQuickSeries] = useState<string>("all");
  const [quickNetwork, setQuickNetwork] = useState<string>("all");

  // Detailed Filter States
  const [filters, setFilters] = useState({
    category: [] as string[],
    sim: [] as string[],
    interfaces: [] as string[],
    bluetooth: [] as string[],
    inputs: [] as string[],
    outputs: [] as string[],
    antennas: [] as string[],
    battery: [] as string[],
  });

  const allDevices: Device[] = [
    // START Series (Basic)
    {
      name: "S-2010",
      category: "Basic",
      series: "START",
      connectivity: "2G",
      sim: "Single SIM",
      interfaces: ["USB Type-C"],
      bluetooth: "Bluetooth 4.0",
      inputs: "4 Digital IN & 1 Analog IN",
      outputs: "1 OUT",
      antennas: "Internal",
      battery: "—",
      href: "/products/tracking-devices/start-series/s-2010",
    },
    {
      name: "S-2011",
      category: "Basic",
      series: "START",
      connectivity: "2G",
      sim: "Single SIM",
      interfaces: ["USB Type-C"],
      bluetooth: "Bluetooth 4.0",
      inputs: "4 Digital IN & 1 Analog IN",
      outputs: "1 OUT",
      antennas: "Internal",
      battery: "130 mAh",
      href: "/products/tracking-devices/start-series/s-2011",
    },
    {
      name: "S-2013",
      category: "Basic",
      series: "START",
      connectivity: "2G",
      sim: "Single SIM",
      interfaces: ["RS-485", "USB Type-C"],
      bluetooth: "Bluetooth 4.0",
      inputs: "2 Digital IN & 1 Analog IN",
      outputs: "1 OUT",
      antennas: "Internal",
      battery: "130 mAh",
      href: "/products/tracking-devices/start-series/s-2013",
    },
    {
      name: "S-4011",
      category: "Basic",
      series: "START",
      connectivity: "4G / 2G",
      sim: "Single SIM",
      interfaces: ["USB Type-C"],
      bluetooth: "Bluetooth 4.0",
      inputs: "4 Digital IN & 1 Analog IN",
      outputs: "1 OUT",
      antennas: "Internal",
      battery: "130 mAh",
      href: "/products/tracking-devices/start-series/s-4011",
    },
    {
      name: "S-4013",
      category: "Basic",
      series: "START",
      connectivity: "4G / 2G",
      sim: "Single SIM",
      interfaces: ["RS-485", "USB Type-C"],
      bluetooth: "Bluetooth 4.0",
      inputs: "2 Digital IN & 1 Analog IN",
      outputs: "1 OUT",
      antennas: "Internal",
      battery: "130 mAh",
      href: "/products/tracking-devices/start-series/s-4013",
    },
    // SMART Series (Advanced)
    {
      name: "S-2437",
      category: "Advanced",
      series: "SMART",
      connectivity: "2G",
      sim: "Dual SIM",
      interfaces: ["RS-485", "1-Wire", "MODBUS", "Dual CAN"],
      bluetooth: "Bluetooth 4.0",
      inputs: "3 Universal IN",
      outputs: "2 OUT",
      antennas: "Internal",
      battery: "800 mAh",
      href: "/products/tracking-devices/smart-series/s-2437",
    },
    {
      name: "S-2435",
      category: "Advanced",
      series: "SMART",
      connectivity: "2G",
      sim: "Dual SIM",
      interfaces: ["RS-485", "RS-232", "1-Wire", "MODBUS", "CAN"],
      bluetooth: "Bluetooth 4.0",
      inputs: "3 Universal IN",
      outputs: "2 OUT",
      antennas: "Internal",
      battery: "800 mAh",
      href: "/products/tracking-devices/smart-series/s-2435",
    },
    {
      name: "S-2433",
      category: "Advanced",
      series: "SMART",
      connectivity: "2G",
      sim: "Single SIM",
      interfaces: ["RS-485", "RS-232", "1-Wire", "MODBUS"],
      bluetooth: "Bluetooth 4.0",
      inputs: "3 Universal IN",
      outputs: "2 OUT",
      antennas: "Internal",
      battery: "800 mAh",
      href: "/products/tracking-devices/smart-series/s-2433",
    },
    {
      name: "S-2425",
      category: "Advanced",
      series: "SMART",
      connectivity: "2G",
      sim: "Dual SIM",
      interfaces: ["RS-485", "RS-232", "1-Wire"],
      bluetooth: "Bluetooth 4.0",
      inputs: "3 Universal IN",
      outputs: "2 OUT",
      antennas: "Internal",
      battery: "380 mAh",
      href: "/products/tracking-devices/smart-series/s-2425",
    },
    {
      name: "S-2423",
      category: "Advanced",
      series: "SMART",
      connectivity: "2G",
      sim: "Single SIM",
      interfaces: ["RS-485", "1-Wire"],
      bluetooth: "Bluetooth 4.0",
      inputs: "3 Universal IN",
      outputs: "2 OUT",
      antennas: "Internal",
      battery: "380 mAh",
      href: "/products/tracking-devices/smart-series/s-2423",
    },
    {
      name: "S-4513",
      category: "Advanced",
      series: "SMART",
      connectivity: "4G / 2G",
      sim: "Dual SIM",
      interfaces: ["RS-485", "1-Wire", "MODBUS"],
      bluetooth: "Bluetooth 4.0 (v5.0 compatible)",
      inputs: "4 Digital IN & 1 Analog IN",
      outputs: "2 OUT",
      antennas: "Internal",
      battery: "380 mAh",
      href: "/products/tracking-devices/smart-series/s-4513",
    },
    {
      name: "S-4511",
      category: "Advanced",
      series: "SMART",
      connectivity: "4G / 2G",
      sim: "Single SIM",
      interfaces: [],
      bluetooth: "Bluetooth 4.0 (v5.0 compatible)",
      inputs: "4 Digital IN & 1 Analog IN",
      outputs: "2 OUT",
      antennas: "Internal",
      battery: "380 mAh",
      href: "/products/tracking-devices/smart-series/s-4511",
    },
    {
      name: "S-4537",
      category: "Advanced",
      series: "SMART",
      connectivity: "4G / 2G",
      sim: "Dual SIM",
      interfaces: ["RS-485", "1-Wire", "MODBUS", "Dual CAN"],
      bluetooth: "Bluetooth 4.0 (v5.0 compatible)",
      inputs: "3 Universal IN",
      outputs: "2 OUT",
      antennas: "Internal",
      battery: "800 mAh",
      href: "/products/tracking-devices/smart-series/s-4537",
    },
    {
      name: "S-4535",
      category: "Advanced",
      series: "SMART",
      connectivity: "4G / 2G",
      sim: "Dual SIM",
      interfaces: ["RS-485", "RS-232", "1-Wire", "MODBUS", "CAN"],
      bluetooth: "Bluetooth 4.0 (v5.0 compatible)",
      inputs: "3 Universal IN",
      outputs: "2 OUT",
      antennas: "Internal",
      battery: "800 mAh",
      href: "/products/tracking-devices/smart-series/s-4535",
    },
    {
      name: "S-4533",
      category: "Advanced",
      series: "SMART",
      connectivity: "4G / 2G",
      sim: "Dual SIM",
      interfaces: ["RS-485", "RS-232", "1-Wire", "MODBUS"],
      bluetooth: "Bluetooth 4.0 (v5.0 compatible)",
      inputs: "3 Universal IN",
      outputs: "2 OUT",
      antennas: "Internal",
      battery: "800 mAh",
      href: "/products/tracking-devices/smart-series/s-4533",
    },
    // SIGNAL Series (Professional)
    {
      name: "S-2653",
      category: "Professional",
      series: "SIGNAL",
      connectivity: "2G",
      sim: "Dual SIM",
      interfaces: ["RS-485", "1-Wire", "MODBUS", "Dual CAN"],
      bluetooth: "Bluetooth 4.0",
      inputs: "6 Universal IN",
      outputs: "4 OUT",
      antennas: "External",
      battery: "800 mAh",
      href: "/products/tracking-devices/signal-series/s-2653",
    },
    {
      name: "S-2613",
      category: "Professional",
      series: "SIGNAL",
      connectivity: "2G",
      sim: "Single SIM",
      interfaces: ["RS-485"],
      bluetooth: "Bluetooth 4.0",
      inputs: "4 Digital IN & 1 Analog IN",
      outputs: "4 OUT",
      antennas: "External",
      battery: "800 mAh",
      href: "/products/tracking-devices/signal-series/s-2613",
    },
    {
      name: "S-2651",
      category: "Professional",
      series: "SIGNAL",
      connectivity: "2G",
      sim: "Dual SIM",
      interfaces: ["RS-485", "RS-232", "1-Wire", "MODBUS", "CAN"],
      bluetooth: "Bluetooth 4.0",
      inputs: "6 Universal IN",
      outputs: "4 OUT",
      antennas: "External",
      battery: "800 mAh",
      href: "/products/tracking-devices/signal-series/s-2651",
    },
    {
      name: "S-4753",
      category: "Professional",
      series: "SIGNAL",
      connectivity: "4G / 2G",
      sim: "Dual SIM",
      interfaces: ["RS-485", "1-Wire", "MODBUS", "Dual CAN"],
      bluetooth: "Bluetooth 4.0 (v5.0 compatible)",
      inputs: "6 Universal IN",
      outputs: "4 OUT",
      antennas: "External",
      battery: "800 mAh",
      href: "/products/tracking-devices/signal-series/s-4753",
    },
    {
      name: "S-4751",
      category: "Professional",
      series: "SIGNAL",
      connectivity: "4G / 2G",
      sim: "Dual SIM",
      interfaces: ["RS-485", "RS-232", "1-Wire", "MODBUS", "CAN"],
      bluetooth: "Bluetooth 4.0 (v5.0 compatible)",
      inputs: "6 Universal IN",
      outputs: "4 OUT",
      antennas: "External",
      battery: "800 mAh",
      href: "/products/tracking-devices/signal-series/s-4751",
    },
  ];

  const filterOptions = {
    category: ["Basic", "Advanced", "Professional"],
    sim: ["Dual SIM"],
    interfaces: ["RS-485", "RS-232", "1-Wire", "MODBUS", "CAN", "Dual CAN"],
    bluetooth: [
      "Bluetooth 4.0",
      "Bluetooth 4.0 (v5.0 compatible)",
      "Bluetooth 5.0",
    ],
    inputs: [
      "2 Digital IN & 1 Analog IN",
      "4 Digital IN & 1 Analog IN",
      "3 Universal IN",
      "6 Universal IN",
    ],
    outputs: ["1 OUT", "2 OUT", "4 OUT"],
    antennas: ["Internal", "External"],
    battery: ["—", "130 mAh", "380 mAh", "800 mAh"],
  };

  const toggleFilter = (key: keyof typeof filters, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((v) => v !== value)
        : [...prev[key], value],
    }));
  };

  const filteredDevices = allDevices.filter((device) => {
    const seriesMatch =
      quickSeries === "all" || device.series.toLowerCase() === quickSeries;
    const networkMatch =
      quickNetwork === "all" ||
      (quickNetwork === "2g"
        ? device.connectivity === "2G"
        : device.connectivity === "4G / 2G");

    return (
      seriesMatch &&
      networkMatch &&
      (filters.category.length === 0 ||
        filters.category.includes(device.category)) &&
      (filters.sim.length === 0 || filters.sim.includes(device.sim)) &&
      (filters.interfaces.length === 0 ||
        filters.interfaces.some((i) => device.interfaces.includes(i))) &&
      (filters.bluetooth.length === 0 ||
        filters.bluetooth.includes(device.bluetooth)) &&
      (filters.inputs.length === 0 || filters.inputs.includes(device.inputs)) &&
      (filters.outputs.length === 0 ||
        filters.outputs.includes(device.outputs)) &&
      (filters.antennas.length === 0 ||
        filters.antennas.includes(device.antennas)) &&
      (filters.battery.length === 0 || filters.battery.includes(device.battery))
    );
  });

  const handleCompareToggle = (device: Device) => {
    setSelectedDevices((prev) => {
      if (prev.some((d) => d.name === device.name)) {
        return prev.filter((d) => d.name !== device.name);
      }
      return prev.length < 4 ? [...prev, device] : prev;
    });
  };

  useEffect(() => {
    localStorage.setItem("compareDevices", JSON.stringify(selectedDevices));
  }, [selectedDevices]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans antialiased text-brand-navy">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[clamp(24rem,62vh,42rem)] flex items-start overflow-hidden bg-brand-light-3">
          <Image
            src="/Navtelecom/Alldevices2_banner.png"
            alt="All devices lineup banner"
            fill
            priority
            className="object-cover object-bottom"
          />
          <div className="relative z-40 w-full max-w-[1440px] mx-auto px-[clamp(1rem,2.4vw,2.5rem)] pt-6 md:pt-8">
            <div className="text-left">
              <p className="text-caption mb-4 text-brand-navy">
                COMPLETE CATALOG
              </p>
              <h1 className="text-h1 mb-6">Explore All Devices</h1>
              <p className="text-body-lg max-w-3xl text-brand-navy">
                Filter through our entire range of START, SMART, and SIGNAL
                series trackers to find the perfect fit for your project.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Filters (Old Style) */}
        <section className="py-8 bg-[#F8FAFC] border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-8">
              {/* Series Quick Filter */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-black uppercase tracking-widest text-gray-400">
                  Series:
                </span>
                <div className="flex bg-white p-1 rounded-xl border border-gray-200 shadow-sm">
                  {["all", "start", "smart", "signal"].map((s) => (
                    <button
                      key={s}
                      onClick={() => setQuickSeries(s)}
                      className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                        quickSeries === s
                          ? "bg-brand-navy text-white shadow-md"
                          : "text-gray-500 hover:text-brand-navy"
                      }`}
                    >
                      {s.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Network Quick Filter */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-black uppercase tracking-widest text-gray-400">
                  Network:
                </span>
                <div className="flex bg-white p-1 rounded-xl border border-gray-200 shadow-sm">
                  {["all", "2g", "4g"].map((n) => (
                    <button
                      key={n}
                      onClick={() => setQuickNetwork(n)}
                      className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                        quickNetwork === n
                          ? "bg-brand-navy text-white shadow-md"
                          : "text-gray-500 hover:text-brand-navy"
                      }`}
                    >
                      {n.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Desktop Filters Sidebar */}
            <aside className="hidden lg:block w-72 flex-shrink-0 space-y-8">
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm sticky top-28">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-h3 flex items-center gap-2">
                    <Funnel
                      size={20}
                      weight="bold"
                      className="text-brand-primary"
                    />
                    Filters
                  </h2>
                  <button
                    onClick={() => {
                      setFilters({
                        category: [],
                        sim: [],
                        interfaces: [],
                        bluetooth: [],
                        inputs: [],
                        outputs: [],
                        antennas: [],
                        battery: [],
                      });
                      setQuickSeries("all");
                      setQuickNetwork("all");
                    }}
                    className="text-xs font-bold text-gray-400 hover:text-brand-primary transition-colors"
                  >
                    RESET
                  </button>
                </div>

                <div className="space-y-6 overflow-y-auto max-h-[calc(100vh-350px)] pr-2 custom-scrollbar">
                  {Object.entries(filterOptions).map(([key, options]) => (
                    <div key={key} className="space-y-3">
                      <h3 className="text-label text-brand-navy/60">{key}</h3>
                      <div className="space-y-2">
                        {options.map((option) => {
                          const filterKey = key as keyof typeof filters;
                          return (
                            <label
                              key={option}
                              className="flex items-center gap-3 cursor-pointer group"
                            >
                              <div
                                onClick={() => toggleFilter(filterKey, option)}
                                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                                  filters[filterKey].includes(option)
                                    ? "bg-brand-primary border-brand-primary text-white"
                                    : "border-gray-200 group-hover:border-brand-primary"
                                }`}
                              >
                                {filters[filterKey].includes(option) && (
                                  <Check size={12} weight="bold" />
                                )}
                              </div>
                              <span className="text-body-sm group-hover:text-brand-navy transition-colors">
                                {option}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsFilterOpen(true)}
              className="lg:hidden w-full bg-white p-4 rounded-full border border-gray-200 flex items-center justify-center gap-2 font-bold text-brand-navy shadow-sm mb-8"
            >
              <Funnel size={20} weight="bold" />
              Detailed Filters ({Object.values(filters).flat().length})
            </button>

            {/* Devices Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-8">
                <p className="text-body-sm font-bold text-gray-400">
                  SHOWING{" "}
                  <span className="text-brand-navy">
                    {filteredDevices.length}
                  </span>{" "}
                  DEVICES
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {filteredDevices.map((device, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50/50 flex flex-col border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group relative"
                  >
                    <div className="p-10 pb-0 flex flex-col items-start">
                      {/* Compare Checkbox */}
                      <div className="absolute top-6 right-6 z-10">
                        <button
                          onClick={() => handleCompareToggle(device)}
                          className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
                            selectedDevices.some((d) => d.name === device.name)
                              ? "bg-brand-primary border-brand-primary text-white"
                              : "bg-white border-gray-300 text-transparent hover:border-brand-primary"
                          }`}
                        >
                          {selectedDevices.some(
                            (d) => d.name === device.name,
                          ) && <Check size={16} weight="bold" />}
                        </button>
                      </div>

                      {/* Series Badge */}
                      <div className="mb-6 mt-2">
                        <span className="px-3 py-1 bg-brand-light-3 text-brand-navy text-[10px] font-black uppercase tracking-widest rounded-full">
                          {device.series} SERIES
                        </span>
                      </div>

                      {/* Device name + hardware visualization */}
                      <h3 className="text-3xl font-black tracking-widest uppercase text-brand-navy mb-4 leading-none">
                        {device.name}
                      </h3>
                      <div className="w-full aspect-[4/3] mb-4 bg-[#EFEFEF] rounded-2xl flex items-center justify-center relative overflow-hidden">
                        <Image
                          src={seriesImages[device.series]}
                          alt={`${device.series} series device`}
                          fill
                          className="object-contain object-bottom"
                        />
                      </div>

                      {/* Specs Summary */}
                      <div className="space-y-4 mb-10 w-full">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                          <span className="text-body-sm text-gray-500">
                            {device.connectivity}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                          <span className="text-body-sm text-gray-500">
                            {device.sim}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                          <span className="text-body-sm text-gray-500 line-clamp-1">
                            {device.inputs}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-10 pt-0 mt-auto">
                      <Link
                        href={device.href}
                        className="w-full bg-brand-navy text-white py-5 rounded-full font-black text-sm hover:bg-brand-primary transition-all text-center block uppercase tracking-widest shadow-xl shadow-brand-navy/10 transform hover:-translate-y-1 active:scale-95"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {filteredDevices.length === 0 && (
                <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-gray-200">
                  <Funnel
                    size={48}
                    weight="light"
                    className="mx-auto text-gray-200 mb-4"
                  />
                  <p className="text-body-lg text-gray-400">
                    No devices match your selected filters.
                  </p>
                  <button
                    onClick={() => {
                      setFilters({
                        category: [],
                        sim: [],
                        interfaces: [],
                        bluetooth: [],
                        inputs: [],
                        outputs: [],
                        antennas: [],
                        battery: [],
                      });
                      setQuickSeries("all");
                      setQuickNetwork("all");
                    }}
                    className="mt-6 text-brand-primary font-bold hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Filter Modal */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div
            className="absolute inset-0 bg-brand-navy/80 backdrop-blur-sm"
            onClick={() => setIsFilterOpen(false)}
          ></div>
          <div className="absolute inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-h3">Filters</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X size={24} weight="bold" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {Object.entries(filterOptions).map(([key, options]) => (
                <div key={key} className="space-y-4">
                  <h3 className="text-label text-brand-navy/60">{key}</h3>
                  <div className="space-y-3">
                    {options.map((option) => {
                      const filterKey = key as keyof typeof filters;
                      return (
                        <label key={option} className="flex items-center gap-3">
                          <div
                            onClick={() => toggleFilter(filterKey, option)}
                            className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
                              filters[filterKey].includes(option)
                                ? "bg-brand-primary border-brand-primary text-white"
                                : "border-gray-200"
                            }`}
                          >
                            {filters[filterKey].includes(option) && (
                              <Check size={14} weight="bold" />
                            )}
                          </div>
                          <span className="text-body">{option}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 border-t border-gray-100">
              <button
                onClick={() => setIsFilterOpen(false)}
                className="w-full py-4 bg-brand-navy text-white rounded-full font-black uppercase tracking-widest"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Compare Bar */}
      {selectedDevices.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-brand-navy text-white p-4 z-50 shadow-lg">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-body-sm font-bold whitespace-nowrap">
                Devices selected for comparison:
              </span>
              {selectedDevices.map((device) => (
                <span
                  key={device.name}
                  className="bg-brand-primary text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1"
                >
                  {device.name}
                  <button
                    onClick={() => handleCompareToggle(device)}
                    className="ml-1 text-white/80 hover:text-white"
                  >
                    <X size={12} weight="bold" />
                  </button>
                </span>
              ))}
              {selectedDevices.length < 4 && (
                <span className="text-body-sm text-gray-400">
                  Select up to {4 - selectedDevices.length} more
                </span>
              )}
            </div>
            <Link
              href={`/products/compare?devices=${selectedDevices.map((d) => d.name).join(",")}`}
              className="bg-white text-brand-navy px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors whitespace-nowrap"
            >
              Compare Now ({selectedDevices.length})
            </Link>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default AllDevicesPage;
