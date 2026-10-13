"use client";
import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { Check, X, Funnel, ArrowRight } from "phosphor-react";
import "./all-devices-page.css";

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
  /** Card display: connectivity, inputs+outputs, interfaces, battery */
  cardDisplay?: {
    connectivity: string;
    inputsOutputs: string;
    interfaces: string;
    battery: string;
  };
}

const AllDevicesPage = () => {
  const seriesImages: Record<Device["series"], string> = {
    START: "/Navtelecom/sample1.PNG",
    SMART: "/Navtelecom/sample2.PNG",
    SIGNAL: "/Navtelecom/sample3.PNG",
  };
  const startModelImages: Record<string, string> = {
    "S-2010": "/Navtelecom/start s-2010_1800x1350.png",
    "S-2011": "/Navtelecom/start s-2011_1800x1350.png",
    "S-2013": "/Navtelecom/start s-2013_1800x1350.png",
    "S-4011": "/Navtelecom/start s-4011_1800x1350.png",
    "S-4013": "/Navtelecom/start s-4013_1800x1350.png",
  };

  const [selectedDevices, setSelectedDevices] = useState<Device[]>([]);
  /** Avoid writing [] to localStorage before we have read the saved compare list (client-only). */
  const [compareStorageReady, setCompareStorageReady] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const scrollPositionRef = useRef<number | null>(null);

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
      cardDisplay: {
        connectivity: "2G",
        inputsOutputs: "4 Digital Inputs & 1 Analog Input, 1 Output",
        interfaces: "BLE",
        battery: "No battery",
      },
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
      cardDisplay: {
        connectivity: "2G",
        inputsOutputs: "4 Digital Inputs & 1 Analog Input, 1 Output",
        interfaces: "BLE",
        battery: "Battery 130 mAh",
      },
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
      cardDisplay: {
        connectivity: "2G",
        inputsOutputs: "2 Digital Inputs & 1 Analog Input, 1 Output",
        interfaces: "RS-485, BLE",
        battery: "Battery 130 mAh",
      },
    },
    {
      name: "S-4011",
      category: "Basic",
      series: "START",
      connectivity: "4G / 2G",
      sim: "Single SIM",
      interfaces: ["USB Type-C"],
      bluetooth: "Bluetooth 5.0",
      inputs: "4 Digital IN & 1 Analog IN",
      outputs: "1 OUT",
      antennas: "Internal",
      battery: "130 mAh",
      href: "/products/tracking-devices/start-series/s-4011",
      cardDisplay: {
        connectivity: "4G / 2G",
        inputsOutputs: "4 Digital Inputs & 1 Analog Input, 1 Output",
        interfaces: "BLE",
        battery: "Battery 130 mAh",
      },
    },
    {
      name: "S-4013",
      category: "Basic",
      series: "START",
      connectivity: "4G / 2G",
      sim: "Single SIM",
      interfaces: ["RS-485", "USB Type-C"],
      bluetooth: "Bluetooth 5.0",
      inputs: "2 Digital IN & 1 Analog IN",
      outputs: "1 OUT",
      antennas: "Internal",
      battery: "130 mAh",
      href: "/products/tracking-devices/start-series/s-4013",
      cardDisplay: {
        connectivity: "4G / 2G",
        inputsOutputs: "2 Digital Inputs & 1 Analog Input, 1 Output",
        interfaces: "RS-485, BLE",
        battery: "Battery 130 mAh",
      },
    },
    // SMART Series (Basic)
    {
      name: "S-2437",
      category: "Advanced",
      series: "SMART",
      connectivity: "2G",
      sim: "Dual SIM",
      interfaces: ["RS-485", "1-Wire", "MODBUS RTU", "Dual CAN"],
      bluetooth: "Bluetooth 4.0",
      inputs: "3 Universal IN",
      outputs: "2 OUT",
      antennas: "Internal",
      battery: "800 mAh",
      href: "/products/tracking-devices/smart-series/s-2437",
      cardDisplay: {
        connectivity: "2G",
        inputsOutputs: "3 Universal Inputs, 2 Outputs",
        interfaces: "Dual CAN, 1-Wire, RS-485, MODBUS RTU, BLE",
        battery: "Battery 800 mAh",
      },
    },
    {
      name: "S-2435",
      category: "Advanced",
      series: "SMART",
      connectivity: "2G",
      sim: "Dual SIM",
      interfaces: ["RS-485", "RS-232", "1-Wire", "MODBUS RTU", "CAN"],
      bluetooth: "Bluetooth 4.0",
      inputs: "3 Universal IN",
      outputs: "2 OUT",
      antennas: "Internal",
      battery: "800 mAh",
      href: "/products/tracking-devices/smart-series/s-2435",
      cardDisplay: {
        connectivity: "2G",
        inputsOutputs: "3 Universal Inputs, 2 Outputs",
        interfaces: "CAN, 1-Wire, RS-485, RS-232, MODBUS RTU, BLE",
        battery: "Battery 800 mAh",
      },
    },
    {
      name: "S-2433",
      category: "Advanced",
      series: "SMART",
      connectivity: "2G",
      sim: "Single SIM",
      interfaces: ["RS-485", "RS-232", "1-Wire", "MODBUS RTU"],
      bluetooth: "Bluetooth 4.0",
      inputs: "3 Universal IN",
      outputs: "2 OUT",
      antennas: "Internal",
      battery: "800 mAh",
      href: "/products/tracking-devices/smart-series/s-2433",
      cardDisplay: {
        connectivity: "2G",
        inputsOutputs: "3 Universal Inputs, 2 Outputs",
        interfaces: "1-Wire, RS-485, RS-232, MODBUS RTU, BLE",
        battery: "Battery 800 mAh",
      },
    },
    {
      name: "S-2421",
      category: "Basic",
      series: "SMART",
      connectivity: "2G",
      sim: "Single SIM",
      interfaces: ["1-Wire"],
      bluetooth: "Bluetooth 4.0",
      inputs: "3 Universal IN",
      outputs: "2 OUT",
      antennas: "Internal",
      battery: "380 mAh",
      href: "/products/tracking-devices/smart-series/s-2421",
      cardDisplay: {
        connectivity: "2G",
        inputsOutputs: "3 Universal Inputs, 2 Outputs",
        interfaces: "1-Wire, BLE",
        battery: "Battery 380 mAh",
      },
    },
    {
      name: "S-2425",
      category: "Basic",
      series: "SMART",
      connectivity: "2G",
      sim: "Single SIM",
      interfaces: ["RS-485", "RS-232", "1-Wire"],
      bluetooth: "Bluetooth 4.0",
      inputs: "3 Universal IN",
      outputs: "2 OUT",
      antennas: "Internal",
      battery: "380 mAh",
      href: "/products/tracking-devices/smart-series/s-2425",
      cardDisplay: {
        connectivity: "2G",
        inputsOutputs: "3 Universal Inputs, 2 Outputs",
        interfaces: "1-Wire, RS-485, RS-232, MODBUS RTU, BLE",
        battery: "Battery 380 mAh",
      },
    },
    {
      name: "S-4513",
      category: "Basic",
      series: "SMART",
      connectivity: "4G / 2G",
      sim: "Dual SIM",
      interfaces: ["RS-485", "1-Wire", "MODBUS RTU"],
      bluetooth: "Bluetooth 5.0",
      inputs: "4 Digital IN & 1 Analog IN",
      outputs: "2 OUT",
      antennas: "Internal",
      battery: "380 mAh",
      href: "/products/tracking-devices/smart-series/s-4513",
      cardDisplay: {
        connectivity: "4G / 2G, Dual SIM",
        inputsOutputs: "4 Digital Inputs & 1 Analog Input, 2 Outputs",
        interfaces: "1-Wire, RS-485, BLE",
        battery: "Battery 380 mAh",
      },
    },
    {
      name: "S-4511",
      category: "Basic",
      series: "SMART",
      connectivity: "4G / 2G",
      sim: "Single SIM",
      interfaces: ["1-Wire"],
      bluetooth: "Bluetooth 5.0",
      inputs: "4 Digital IN & 1 Analog IN",
      outputs: "2 OUT",
      antennas: "Internal",
      battery: "380 mAh",
      href: "/products/tracking-devices/smart-series/s-4511",
      cardDisplay: {
        connectivity: "4G / 2G",
        inputsOutputs: "4 Digital Inputs & 1 Analog Input, 2 Outputs",
        interfaces: "1-Wire, BLE",
        battery: "Battery 380 mAh",
      },
    },
    {
      name: "S-4537",
      category: "Advanced",
      series: "SMART",
      connectivity: "4G / 2G",
      sim: "Dual SIM",
      interfaces: ["RS-485", "1-Wire", "MODBUS RTU", "Dual CAN"],
      bluetooth: "Bluetooth 5.0",
      inputs: "3 Universal IN",
      outputs: "2 OUT",
      antennas: "Internal",
      battery: "800 mAh",
      href: "/products/tracking-devices/smart-series/s-4537",
      cardDisplay: {
        connectivity: "4G / 2G, Dual SIM",
        inputsOutputs: "3 Universal Inputs, 2 Outputs",
        interfaces: "Dual CAN, 1-Wire, RS-485, MODBUS RTU, BLE",
        battery: "Battery 800 mAh",
      },
    },
    {
      name: "S-4535",
      category: "Advanced",
      series: "SMART",
      connectivity: "4G / 2G",
      sim: "Dual SIM",
      interfaces: ["RS-485", "RS-232", "1-Wire", "MODBUS RTU", "CAN"],
      bluetooth: "Bluetooth 5.0",
      inputs: "3 Universal IN",
      outputs: "2 OUT",
      antennas: "Internal",
      battery: "800 mAh",
      href: "/products/tracking-devices/smart-series/s-4535",
      cardDisplay: {
        connectivity: "4G / 2G, Dual SIM",
        inputsOutputs: "3 Universal Inputs, 2 Outputs",
        interfaces: "CAN, 1-Wire, RS-485, RS-232, MODBUS RTU, BLE",
        battery: "Battery 800 mAh",
      },
    },
    {
      name: "S-4533",
      category: "Advanced",
      series: "SMART",
      connectivity: "4G / 2G",
      sim: "Dual SIM",
      interfaces: ["RS-485", "RS-232", "1-Wire", "MODBUS RTU"],
      bluetooth: "Bluetooth 5.0",
      inputs: "3 Universal IN",
      outputs: "2 OUT",
      antennas: "Internal",
      battery: "800 mAh",
      href: "/products/tracking-devices/smart-series/s-4533",
      cardDisplay: {
        connectivity: "4G / 2G, Dual SIM",
        inputsOutputs: "3 Universal Inputs, 2 Outputs",
        interfaces: "1-Wire, RS-485, RS-232, MODBUS RTU, BLE",
        battery: "Battery 800 mAh",
      },
    },
    // SIGNAL Series (Professional)
    {
      name: "S-2653",
      category: "Professional",
      series: "SIGNAL",
      connectivity: "2G",
      sim: "Dual SIM",
      interfaces: ["RS-485", "1-Wire", "MODBUS RTU", "Dual CAN"],
      bluetooth: "Bluetooth 4.0",
      inputs: "6 Universal IN",
      outputs: "4 OUT",
      antennas: "External",
      battery: "800 mAh",
      href: "/products/tracking-devices/signal-series/s-2653",
      cardDisplay: {
        connectivity: "2G",
        inputsOutputs: "6 Universal Inputs, 4 Outputs",
        interfaces: "Dual CAN, 1-Wire, RS-485, MODBUS RTU, BLE",
        battery: "Battery 800 mAh",
      },
    },
    {
      name: "S-2613",
      category: "Basic",
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
      cardDisplay: {
        connectivity: "2G",
        inputsOutputs: "4 Digital Inputs & 1 Analog Input, 4 Outputs",
        interfaces: "RS-485, BLE",
        battery: "Battery 800 mAh",
      },
    },
    {
      name: "S-2651",
      category: "Professional",
      series: "SIGNAL",
      connectivity: "2G",
      sim: "Dual SIM",
      interfaces: ["RS-485", "RS-232", "1-Wire", "MODBUS RTU", "CAN"],
      bluetooth: "Bluetooth 4.0",
      inputs: "6 Universal IN",
      outputs: "4 OUT",
      antennas: "External",
      battery: "800 mAh",
      href: "/products/tracking-devices/signal-series/s-2651",
      cardDisplay: {
        connectivity: "2G",
        inputsOutputs: "6 Universal Inputs, 4 Outputs",
        interfaces: "CAN, 1-Wire, RS-485, RS-232, MODBUS RTU, BLE",
        battery: "Battery 800 mAh",
      },
    },
    {
      name: "S-4753",
      category: "Professional",
      series: "SIGNAL",
      connectivity: "4G / 2G",
      sim: "Dual SIM",
      interfaces: ["RS-485", "1-Wire", "MODBUS RTU", "Dual CAN"],
      bluetooth: "Bluetooth 5.0",
      inputs: "6 Universal IN",
      outputs: "4 OUT",
      antennas: "External",
      battery: "800 mAh",
      href: "/products/tracking-devices/signal-series/s-4753",
      cardDisplay: {
        connectivity: "4G / 2G, Dual SIM",
        inputsOutputs: "6 Universal Inputs, 4 Outputs",
        interfaces: "Dual CAN, 1-Wire, RS-485, MODBUS RTU, BLE",
        battery: "Battery 800 mAh",
      },
    },
    {
      name: "S-4751",
      category: "Professional",
      series: "SIGNAL",
      connectivity: "4G / 2G",
      sim: "Dual SIM",
      interfaces: ["RS-485", "RS-232", "1-Wire", "MODBUS RTU", "CAN"],
      bluetooth: "Bluetooth 5.0",
      inputs: "6 Universal IN",
      outputs: "4 OUT",
      antennas: "External",
      battery: "800 mAh",
      href: "/products/tracking-devices/signal-series/s-4751",
      cardDisplay: {
        connectivity: "4G / 2G, Dual SIM",
        inputsOutputs: "6 Universal Inputs, 4 Outputs",
        interfaces: "CAN, 1-Wire, RS-485, RS-232, MODBUS RTU, BLE",
        battery: "Battery 800 mAh",
      },
    },
  ];

  const filterOptions = {
    category: ["Basic", "Advanced", "Professional"],
    sim: ["Dual SIM"],
    interfaces: ["RS-485", "RS-232", "1-Wire", "MODBUS RTU", "CAN", "Dual CAN"],
    bluetooth: ["Bluetooth 4.0", "Bluetooth 5.0"],
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

  const resetFilters = () => {
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
        filters.interfaces.every((i) => device.interfaces.includes(i))) &&
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

  const seriesOrder: Record<Device["series"], number> = {
    START: 0,
    SMART: 1,
    SIGNAL: 2,
  };

  const sortedDevices = [...filteredDevices].sort((a, b) => {
    const bySeries = seriesOrder[a.series] - seriesOrder[b.series];
    if (bySeries !== 0) return bySeries;

    const connOrder = (c: Device["connectivity"]) => (c === "2G" ? 0 : 1); // 2G first, then 4G / 2G

    const byConn = connOrder(a.connectivity) - connOrder(b.connectivity);
    if (byConn !== 0) return byConn;

    const num = (name: string) => {
      const match = name.match(/\d+/);
      return match ? parseInt(match[0] ?? "0", 10) : 0;
    };

    return num(a.name) - num(b.name);
  });

  const handleCompareToggle = (device: Device) => {
    setSelectedDevices((prev) => {
      if (prev.some((d) => d.name === device.name)) {
        return prev.filter((d) => d.name !== device.name);
      }
      return prev.length < 4 ? [...prev, device] : prev;
    });
  };

  const handleCompareCancel = () => {
    setSelectedDevices([]);
    if (typeof window !== "undefined") {
      localStorage.removeItem("compareDevices");
    }
  };

  useEffect(() => {
    try {
      const stored = localStorage.getItem("compareDevices");
      if (stored) {
        const parsed = JSON.parse(stored) as Device[];
        setSelectedDevices(parsed);
      }
    } catch {
      // ignore invalid JSON
    }
    setCompareStorageReady(true);
  }, []);

  useEffect(() => {
    if (!compareStorageReady || typeof window === "undefined") return;
    localStorage.setItem("compareDevices", JSON.stringify(selectedDevices));
  }, [selectedDevices, compareStorageReady]);


  return (
    <div className="ad-page min-h-screen font-sans antialiased">
      <Navbar />

      <main>
        <section className="ad-hero">
          <div className="ad-hero-grid" aria-hidden="true" />
          <div className="ad-shell ad-hero-layout">
            <div className="ad-hero-copy">
              <p className="ad-eyebrow">COMPLETE CATALOG</p>
              <h1>Explore All Devices</h1>
              <p className="ad-lead">
                Filter through our entire range of START, SMART, and SIGNAL
                series trackers to find the perfect fit for your project.
              </p>
            </div>
            <div className="ad-hero-stage">
              <div className="ad-stage-glow" aria-hidden="true" />
              <span className="ad-pulse" aria-hidden="true" />
              <span className="ad-pulse" aria-hidden="true" />
              <span className="ad-pulse" aria-hidden="true" />
              <div className="ad-stage-floor" aria-hidden="true" />
              <Link
                href="/products/tracking-devices/start-series"
                className="ad-unit ad-unit-start"
                tabIndex={-1}
                aria-hidden="true"
              >
                <img src="/tracking-devices/start-hero.png" alt="" />
              </Link>
              <Link
                href="/products/tracking-devices/signal-series"
                className="ad-unit ad-unit-signal"
                tabIndex={-1}
                aria-hidden="true"
              >
                <img src="/tracking-devices/signal-hero.png" alt="" />
              </Link>
              <Link
                href="/products/tracking-devices/smart-series"
                className="ad-unit ad-unit-smart"
                tabIndex={-1}
                aria-hidden="true"
              >
                <img src="/tracking-devices/smart-hero.png" alt="" />
              </Link>
              <nav className="ad-stage-tags" aria-label="Browse by series">
                <Link href="/products/tracking-devices/start-series" className="ad-tag-start">
                  <i />START<ArrowRight size={12} weight="bold" />
                </Link>
                <Link href="/products/tracking-devices/smart-series" className="ad-tag-smart">
                  <i />SMART<ArrowRight size={12} weight="bold" />
                </Link>
                <Link href="/products/tracking-devices/signal-series" className="ad-tag-signal">
                  <i />SIGNAL<ArrowRight size={12} weight="bold" />
                </Link>
              </nav>
            </div>
          </div>
        </section>

        <section className="ad-toolbar">
          <div className="ad-shell ad-toolbar-inner">
            <div className="ad-toolbar-group">
              <span className="ad-toolbar-label">SERIES</span>
              <div className="ad-chip-row">
                {["all", "start", "smart", "signal"].map((s) => (
                  <button
                    key={s}
                    onClick={() => setQuickSeries(s)}
                    className={`ad-chip${quickSeries === s ? " is-active" : ""}`}
                  >
                    {s.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
            <div className="ad-toolbar-group">
              <span className="ad-toolbar-label">NETWORK</span>
              <div className="ad-chip-row">
                {["all", "2g", "4g"].map((n) => (
                  <button
                    key={n}
                    onClick={() => setQuickNetwork(n)}
                    className={`ad-chip${quickNetwork === n ? " is-active" : ""}`}
                  >
                    {n.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="ad-shell ad-catalog">
          <div className="ad-layout">
            <aside className="ad-filters">
              <div className="ad-filters-head">
                <h2>
                  <Funnel size={18} weight="bold" />
                  Filters
                </h2>
                <button type="button" onClick={resetFilters} className="ad-reset">
                  Reset
                </button>
              </div>
              <div className="ad-filter-list">
                {Object.entries(filterOptions).map(([key, options]) => (
                  <div key={key} className="ad-filter-group">
                    <h3>{key}</h3>
                    {options.map((option) => {
                      const filterKey = key as keyof typeof filters;
                      const on = filters[filterKey].includes(option);
                      return (
                        <label key={option} className="ad-check">
                          <div
                            onClick={() => toggleFilter(filterKey, option)}
                            className={`ad-box${on ? " is-on" : ""}`}
                          >
                            {on && <Check size={12} weight="bold" />}
                          </div>
                          <span>{option}</span>
                        </label>
                      );
                    })}
                  </div>
                ))}
              </div>
            </aside>

            <button
              type="button"
              onClick={() => setIsFilterOpen(true)}
              className="ad-mobile-filters"
            >
              <Funnel size={18} weight="bold" />
              Detailed filters ({Object.values(filters).flat().length})
            </button>

            <div className="ad-results">
              <p className="ad-count">
                SHOWING <strong>{sortedDevices.length}</strong> DEVICES
              </p>
              <div className="ad-grid">
                {sortedDevices.map((device) => {
                  const selected = selectedDevices.some((d) => d.name === device.name);
                  return (
                    <article key={device.name} className="ad-card">
                      <div className="ad-card-top">
                        <span className="ad-series">{device.series} SERIES</span>
                        <button
                          type="button"
                          onClick={() => handleCompareToggle(device)}
                          className={`ad-compare${selected ? " is-on" : ""}`}
                          aria-label={`Compare ${device.name}`}
                        >
                          {selected && <Check size={14} weight="bold" />}
                        </button>
                      </div>
                      <h3>{device.name}</h3>
                      <div className="ad-visual">
                        <Image
                          src={
                            device.series === "START" && startModelImages[device.name]
                              ? startModelImages[device.name]
                              : seriesImages[device.series]
                          }
                          alt={`${device.series} series device`}
                          fill
                          className="object-contain object-bottom"
                        />
                      </div>
                      <div className="ad-specs">
                        {(device.cardDisplay
                          ? [
                              device.cardDisplay.connectivity,
                              device.cardDisplay.inputsOutputs,
                              device.cardDisplay.interfaces,
                              device.cardDisplay.battery,
                            ]
                          : [
                              device.connectivity,
                              `${device.inputs}, ${device.outputs}`,
                              [...device.interfaces, device.bluetooth].filter(Boolean).join(", ") || device.bluetooth,
                              device.battery === "—" ? "No battery" : `Battery ${device.battery}`,
                            ]
                        ).map((line) => (
                          <p key={line}><i />{line}</p>
                        ))}
                      </div>
                      <Link href={device.href} className="ad-more">Learn more</Link>
                    </article>
                  );
                })}
              </div>
              {filteredDevices.length === 0 && (
                <div className="ad-empty">
                  <Funnel size={40} weight="light" />
                  <p>No devices match your selected filters.</p>
                  <button type="button" onClick={resetFilters}>Clear all filters</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Filter Modal */}
      {isFilterOpen && (
        <div className="ad-sheet">
          <div className="ad-sheet-backdrop" onClick={() => setIsFilterOpen(false)} />
          <div className="ad-sheet-panel">
            <div className="ad-sheet-head">
              <h2>Filters</h2>
              <button type="button" onClick={() => setIsFilterOpen(false)} aria-label="Close filters">
                <X size={18} weight="bold" />
              </button>
            </div>
            <div className="ad-sheet-body">
              {Object.entries(filterOptions).map(([key, options]) => (
                <div key={key} className="ad-filter-group">
                  <h3>{key}</h3>
                  {options.map((option) => {
                    const filterKey = key as keyof typeof filters;
                    const on = filters[filterKey].includes(option);
                    return (
                      <label key={option} className="ad-check">
                        <div
                          onClick={() => toggleFilter(filterKey, option)}
                          className={`ad-box${on ? " is-on" : ""}`}
                        >
                          {on && <Check size={12} weight="bold" />}
                        </div>
                        <span>{option}</span>
                      </label>
                    );
                  })}
                </div>
              ))}
            </div>
            <div className="ad-sheet-foot">
              <button type="button" onClick={() => setIsFilterOpen(false)} className="ad-apply">
                Apply filters
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedDevices.length > 0 && (
        <div className="ad-compare-bar">
          <div className="ad-shell ad-compare-inner">
            <div className="ad-picks">
              <p>Devices selected for comparison:</p>
              {selectedDevices.map((device) => (
                <span key={device.name} className="ad-pick">
                  {device.name}
                  <button type="button" onClick={() => handleCompareToggle(device)} aria-label={`Remove ${device.name}`}>
                    <X size={12} weight="bold" />
                  </button>
                </span>
              ))}
              {selectedDevices.length < 4 && (
                <span className="ad-more-note">Select up to {4 - selectedDevices.length} more</span>
              )}
            </div>
            <div className="ad-compare-actions">
              <Link
                href={`/products/compare?devices=${selectedDevices.map((d) => d.name).join(",")}`}
                className="ad-compare-go"
              >
                Compare now ({selectedDevices.length})
              </Link>
              <button type="button" onClick={handleCompareCancel} className="ad-compare-cancel">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default AllDevicesPage;
