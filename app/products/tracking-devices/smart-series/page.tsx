"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";
import { Check, X } from "phosphor-react";

interface Device {
  name: string;
  connectivity: "2g" | "4g";
  specs: string[];
  href: string;
}

const SmartSeriesPage = () => {
  const [filter, setFilter] = useState<"all" | "2g" | "4g">("all");
  const [selectedDevices, setSelectedDevices] = useState<Device[]>([]);

  useEffect(() => {
    const storedDevices = localStorage.getItem('compareDevices');
    if (storedDevices) {
      setSelectedDevices(JSON.parse(storedDevices));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('compareDevices', JSON.stringify(selectedDevices));
  }, [selectedDevices]);

  const handleCompareToggle = (device: Device) => {
    setSelectedDevices(prevSelected => {
      if (prevSelected.some(d => d.name === device.name)) {
        return prevSelected.filter(d => d.name !== device.name);
      } else {
        if (prevSelected.length < 4) {
          return [...prevSelected, device];
        }
        return prevSelected; // Max 4 devices
      }
    });
  };

  const devices: Device[] = [
    // 2G Models (from first 2 images)
    { 
      name: "S-2437", 
      connectivity: "2g",
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
        "800 mAh"
      ],
      href: "/products/tracking-devices/smart-series/s-2437"
    },
    { 
      name: "S-2435", 
      connectivity: "2g",
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
        "800 mAh"
      ],
      href: "/products/tracking-devices/smart-series/s-2435"
    },
    { 
      name: "S-2433", 
      connectivity: "2g",
      specs: [
        "Single SIM",
        "Eco Driving",
        "Custom Logic",
        "RS-485, RS-232",
        "1-Wire, MODBUS",
        "—",
        "Bluetooth 4.0",
        "3 Universal IN",
        "2 OUT",
        "800 mAh"
      ],
      href: "/products/tracking-devices/smart-series/s-2433"
    },
    { 
      name: "S-2425", 
      connectivity: "2g",
      specs: [
        "Dual SIM",
        "Eco Driving",
        "—",
        "RS-485, RS-232",
        "1-Wire",
        "—",
        "Bluetooth 4.0",
        "3 Universal IN",
        "2 OUT",
        "380 mAh"
      ],
      href: "/products/tracking-devices/smart-series/s-2425"
    },
    { 
      name: "S-2423", 
      connectivity: "2g",
      specs: [
        "Single SIM",
        "Eco Driving",
        "—",
        "RS-485",
        "1-Wire",
        "—",
        "Bluetooth 4.0",
        "3 Universal IN",
        "2 OUT",
        "380 mAh"
      ],
      href: "/products/tracking-devices/smart-series/s-2423"
    },
    // 4G Models (from next 2 images)
    { 
      name: "S-4513", 
      connectivity: "4g",
      specs: [
        "Dual SIM",
        "—",
        "Custom Logic",
        "RS-485",
        "1-Wire, MODBUS",
        "—",
        "Bluetooth 4.0 (v5.0 compatible)",
        "4 Digital IN & 1 Analog IN",
        "2 OUT",
        "380 mAh"
      ],
      href: "/products/tracking-devices/smart-series/s-4513"
    },
    { 
      name: "S-4511", 
      connectivity: "4g",
      specs: [
        "Single SIM",
        "—",
        "Custom Logic",
        "—",
        "—",
        "—",
        "Bluetooth 4.0 (v5.0 compatible)",
        "4 Digital IN & 1 Analog IN",
        "2 OUT",
        "380 mAh"
      ],
      href: "/products/tracking-devices/smart-series/s-4511"
    },
    { 
      name: "S-4537", 
      connectivity: "4g",
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
        "800 mAh"
      ],
      href: "/products/tracking-devices/smart-series/s-4537"
    },
    { 
      name: "S-4535", 
      connectivity: "4g",
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
        "800 mAh"
      ],
      href: "/products/tracking-devices/smart-series/s-4535"
    },
    { 
      name: "S-4533", 
      connectivity: "4g",
      specs: [
        "Dual SIM",
        "Eco Driving",
        "Custom Logic",
        "RS-485, RS-232",
        "1-Wire, MODBUS",
        "—",
        "Bluetooth 4.0 (v5.0 compatible)",
        "3 Universal IN",
        "2 OUT",
        "800 mAh"
      ],
      href: "/products/tracking-devices/smart-series/s-4533"
    },
  ];

  const filteredDevices = filter === "all" 
    ? devices 
    : devices.filter(device => device.connectivity === filter);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans antialiased text-brand-navy">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="h-[calc(100vh-5rem)] min-h-[calc(100dvh-5rem)] flex items-center bg-[#F8FAFC] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_1.5fr_1fr] gap-12 items-center">
              {/* Left Info */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-h1">
                    SMART<br/>
                    <span className="text-brand-primary">Series</span>
                  </h1>
                </div>
                <div className="space-y-4 max-w-sm">
                  <p className="text-body-lg">
                    Flexible connectivity and custom logic for advanced telematics.
                  </p>
                  <p className="text-body-lg">
                    Supports CAN, BLE, and RS-485. Ideal for fuel monitoring and sensor integration.
                  </p>
                </div>
                <button className="bg-brand-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-deep transition-all shadow-lg shadow-brand-primary/20 transform hover:-translate-y-1">
                  Explore
                </button>
              </div>

              {/* Middle Hardware Outline */}
              <div className="relative flex justify-center">
                <div className="w-full max-w-md aspect-[4/3] border-4 border-brand-primary/20 rounded-[3rem] p-8 flex flex-col justify-between relative bg-white/50 backdrop-blur-sm shadow-inner">
                  <div className="flex justify-center gap-2">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className="w-2 h-8 bg-brand-primary/10 rounded-full"></div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center px-4">
                    <div className="space-y-2 text-[10px] font-black text-brand-primary/40">
                      <div>• +U<sub>G</sub></div>
                      <div>• CAN H</div>
                      <div>• CAN L</div>
                      <div>• RS485 A</div>
                      <div>• RS485 B</div>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 text-brand-primary/30 mx-auto mb-2">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                      </div>
                      <p className="text-[8px] font-black tracking-widest text-brand-navy/30 uppercase">NAVTELECOM</p>
                    </div>
                    <div className="text-right space-y-2 text-[10px] font-black text-brand-primary/40 uppercase tracking-widest">
                      <p>SYS</p>
                      <p>GSM</p>
                      <p>GNSS</p>
                    </div>
                  </div>
                  <div className="flex justify-center gap-2 transform rotate-180">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className="w-2 h-8 bg-brand-primary/10 rounded-full"></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Big Text */}
              <div className="lg:text-right">
                <h2 className="text-display opacity-10">
                  <span className="text-brand-primary">Smart</span><br/>
                  Logic
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* Explore the Lineup */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-h2 text-center mb-12">Explore the Lineup</h2>
            
            {/* Filter Buttons */}
            <div className="flex justify-center gap-4 mb-16">
              {["all", "2g", "4g"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f as any)}
                  className={`px-10 py-3 font-bold transition-all border-2 rounded-xl uppercase text-sm tracking-wider ${
                    filter === f
                      ? "bg-brand-navy text-white border-brand-navy"
                      : "bg-white text-brand-navy border-gray-200 hover:border-brand-navy"
                  }`}
                >
                  {f === "all" ? "All Devices" : `${f.toUpperCase()} Devices`}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDevices.map((device, idx) => (
                <div
                  key={idx}
                  className="bg-white flex flex-col border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden group relative"
                >
                  <div className="p-10 pb-0 flex flex-col items-start">
                    {/* Compare Checkbox */}
                    <div className="absolute top-6 right-6 z-10">
                      <button
                        onClick={() => handleCompareToggle(device)}
                        className={`w-8 h-8 rounded-md border-2 flex items-center justify-center transition-colors duration-200 ${
                          selectedDevices.some(d => d.name === device.name)
                            ? 'bg-brand-primary border-brand-primary text-white'
                            : 'bg-white border-gray-300 text-transparent hover:border-brand-primary hover:bg-brand-light-3'
                        }`}
                      >
                        {selectedDevices.some(d => d.name === device.name) && <Check size={18} weight="bold" />}
                      </button>
                    </div>

                    {/* Connectivity Highlight */}
                    <div className="mb-8 w-full flex justify-between items-center">
                      <div className={`px-4 py-1.5 rounded-full text-caption border ${
                        device.connectivity === '4g' 
                          ? 'bg-brand-primary/10 text-brand-primary border-brand-primary/20' 
                          : 'bg-gray-100 text-gray-500 border-gray-200'
                      }`}>
                        {device.connectivity.toUpperCase()} Network
                      </div>
                    </div>

                    {/* Stylized Hardware Visualization with Device Name */}
                    <div className="w-full aspect-[16/10] mb-8 bg-brand-light-3 rounded-2xl flex items-center justify-center relative overflow-hidden group-hover:bg-brand-light-2 transition-colors duration-500">
                      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                      <div className="w-4/5 h-3/5 bg-brand-navy rounded-xl shadow-2xl relative transform -rotate-2 group-hover:rotate-0 transition-all duration-700 flex items-center justify-center">
                        <span className="text-brand-primary text-3xl font-black tracking-widest uppercase opacity-80 group-hover:opacity-100 transition-opacity">
                          {device.name}
                        </span>
                        <div className="absolute inset-x-6 bottom-4 h-px bg-white/10"></div>
                        <div className="absolute inset-x-6 bottom-6 h-px bg-white/5"></div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <p className="text-label">Smart Series</p>
                    </div>
                    
                    {/* Feature list */}
                    <div className="space-y-4 mb-12 w-full">
                      {device.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-3 group/item">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-primary/10 flex items-center justify-center group-hover/item:bg-brand-primary transition-colors duration-300">
                            <Check size={12} weight="bold" className="text-brand-primary group-hover/item:text-white transition-colors duration-300" />
                          </div>
                          <span className="text-caption text-gray-500 group-hover:text-brand-navy transition-colors duration-300">
                            {spec}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-10 pt-0 mt-auto">
                    <Link href={device.href} className="w-full bg-brand-navy text-white py-5 rounded-2xl font-black text-sm hover:bg-brand-primary transition-all shadow-xl shadow-brand-navy/10 transform hover:-translate-y-1 active:scale-95 text-center block uppercase tracking-widest">
                      Learn more
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Floating Compare Bar */}
      {selectedDevices.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-brand-navy text-white p-4 z-50 shadow-lg">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-body-sm font-bold whitespace-nowrap">Devices selected for comparison:</span>
              {selectedDevices.map(device => (
                <span key={device.name} className="bg-brand-primary text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  {device.name}
                  <button onClick={() => handleCompareToggle(device)} className="ml-1 text-white/80 hover:text-white">
                    <X size={12} weight="bold" />
                  </button>
                </span>
              ))}
              {selectedDevices.length < 4 && (
                <span className="text-body-sm text-gray-400">Select up to {4 - selectedDevices.length} more devices</span>
              )}
            </div>
            <Link 
              href={`/products/compare?devices=${selectedDevices.map(d => d.name).join(',')}`}
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

export default SmartSeriesPage;


