"use client";
import React, { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Check, Minus } from "phosphor-react";
import Link from "next/link";

const deviceData = {
  "S-2010": {
    name: "S-2010",
    series: "Start Series",
    connectivity: "2G",
    specs: {
      "SIM Support": "Single SIM",
      "Engine Hours": "Engine Hours",
      "Bluetooth": "Bluetooth 4.0",
      "Eco Driving": false,
      "Communication interface": "UART, Micro USB",
      "Custom Logic": false,
      "Interfaces and Protocols": "1-Wire",
      "Inputs": "4 Digital IN & 1 Analog IN",
      "Outputs": "1 OUT",
      "CAN": false,
      "Voice Communication": false,
      "Battery": false
    }
  },
  "S-2011": {
    name: "S-2011",
    series: "Start Series",
    connectivity: "2G",
    specs: {
      "SIM Support": "Single SIM",
      "Engine Hours": "Engine Hours",
      "Bluetooth": "Bluetooth 4.0",
      "Eco Driving": false,
      "Communication interface": "UART, Micro USB",
      "Custom Logic": false,
      "Interfaces and Protocols": "1-Wire",
      "Inputs": "4 Digital IN & 1 Analog IN",
      "Outputs": "1 OUT",
      "CAN": false,
      "Voice Communication": false,
      "Battery": "130 mAh"
    }
  },
  "S-2013": {
    name: "S-2013",
    series: "Start Series",
    connectivity: "2G",
    specs: {
      "SIM Support": "Single SIM",
      "Engine Hours": "Engine Hours",
      "Bluetooth": "Bluetooth 4.0",
      "Eco Driving": true,
      "Communication interface": "RS-485",
      "Custom Logic": true,
      "Interfaces and Protocols": "1-Wire",
      "Inputs": "2 Digital IN & 1 Analog IN",
      "Outputs": "1 OUT",
      "CAN": true,
      "Voice Communication": false,
      "Battery": "130 mAh"
    }
  },
  "S-4011": {
    name: "S-4011",
    series: "Start Series",
    connectivity: "4G",
    specs: {
      "SIM Support": "Single SIM",
      "Engine Hours": "Engine Hours",
      "Bluetooth": "Bluetooth 4.0",
      "Eco Driving": false,
      "Communication interface": "UART, Micro USB",
      "Custom Logic": false,
      "Interfaces and Protocols": "1-Wire",
      "Inputs": "4 Digital IN & 1 Analog IN",
      "Outputs": "1 OUT",
      "CAN": false,
      "Voice Communication": false,
      "Battery": "130 mAh"
    }
  },
  "S-4013": {
    name: "S-4013",
    series: "Start Series",
    connectivity: "4G",
    specs: {
      "SIM Support": "Single SIM",
      "Engine Hours": "Engine Hours",
      "Bluetooth": "Bluetooth 4.0",
      "Eco Driving": true,
      "Communication interface": "RS-485",
      "Custom Logic": true,
      "Interfaces and Protocols": "1-Wire",
      "Inputs": "2 Digital IN & 1 Analog IN",
      "Outputs": "1 OUT",
      "CAN": true,
      "Voice Communication": false,
      "Battery": "130 mAh"
    }
  },
  "S-4513": {
    name: "S-4513",
    series: "Smart Series",
    connectivity: "4G",
    specs: {
      "SIM Support": "Dual SIM",
      "Engine Hours": "Engine Hours",
      "Bluetooth": "Bluetooth 4.0 (v5.0 compatible)",
      "Eco Driving": true,
      "Communication interface": "RS-485",
      "Custom Logic": true,
      "Interfaces and Protocols": "1-Wire, MODBUS",
      "Inputs": "4 Digital IN & 1 Analog IN",
      "Outputs": "2 OUT",
      "CAN": "Dual CAN",
      "Voice Communication": false,
      "Battery": "380 mAh"
    }
  },
  "S-4511": {
    name: "S-4511",
    series: "Smart Series",
    connectivity: "4G",
    specs: {
      "SIM Support": "Single SIM",
      "Engine Hours": "Engine Hours",
      "Bluetooth": "Bluetooth 4.0 (v5.0 compatible)",
      "Eco Driving": false,
      "Communication interface": "RS-485",
      "Custom Logic": false,
      "Interfaces and Protocols": "1-Wire, MODBUS",
      "Inputs": "4 Digital IN & 1 Analog IN",
      "Outputs": "2 OUT",
      "CAN": false,
      "Voice Communication": false,
      "Battery": "380 mAh"
    }
  },
  "S-4537": {
    name: "S-4537",
    series: "Smart Series",
    connectivity: "4G",
    specs: {
      "SIM Support": "Dual SIM",
      "Engine Hours": "Engine Hours",
      "Bluetooth": "Bluetooth 4.0 (v5.0 compatible)",
      "Eco Driving": true,
      "Communication interface": "RS-485",
      "Custom Logic": true,
      "Interfaces and Protocols": "1-Wire, MODBUS",
      "Inputs": "3 Universal IN",
      "Outputs": "2 OUT",
      "CAN": "Dual CAN",
      "Voice Communication": false,
      "Battery": "800 mAh"
    }
  },
  "S-4535": {
    name: "S-4535",
    series: "Smart Series",
    connectivity: "4G",
    specs: {
      "SIM Support": "Dual SIM",
      "Engine Hours": "Engine Hours",
      "Bluetooth": "Bluetooth 4.0 (v5.0 compatible)",
      "Eco Driving": true,
      "Communication interface": "RS-485, RS-232",
      "Custom Logic": true,
      "Interfaces and Protocols": "1-Wire, MODBUS",
      "Inputs": "3 Universal IN",
      "Outputs": "2 OUT",
      "CAN": "CAN",
      "Voice Communication": false,
      "Battery": "800 mAh"
    }
  },
  "S-4533": {
    name: "S-4533",
    series: "Smart Series",
    connectivity: "4G",
    specs: {
      "SIM Support": "Dual SIM",
      "Engine Hours": "Engine Hours",
      "Bluetooth": "Bluetooth 4.0 (v5.0 compatible)",
      "Eco Driving": true,
      "Communication interface": "RS-485, RS-232",
      "Custom Logic": true,
      "Interfaces and Protocols": "1-Wire, MODBUS",
      "Inputs": "3 Universal IN",
      "Outputs": "2 OUT",
      "CAN": false,
      "Voice Communication": false,
      "Battery": "800 mAh"
    }
  },
  "S-2437": {
    name: "S-2437",
    series: "Signal Series",
    connectivity: "2G",
    specs: {
      "SIM Support": "Dual SIM",
      "Engine Hours": "Engine Hours",
      "Bluetooth": "Bluetooth 4.0",
      "Eco Driving": true,
      "Communication interface": "RS-485",
      "Custom Logic": true,
      "Interfaces and Protocols": "1-Wire, MODBUS",
      "Inputs": "3 Universal IN",
      "Outputs": "2 OUT",
      "CAN": "Dual CAN",
      "Voice Communication": true,
      "Battery": "800 mAh"
    }
  },
  "S-2435": {
    name: "S-2435",
    series: "Signal Series",
    connectivity: "2G",
    specs: {
      "SIM Support": "Dual SIM",
      "Engine Hours": "Engine Hours",
      "Bluetooth": "Bluetooth 4.0",
      "Eco Driving": true,
      "Communication interface": "RS-485, RS-232",
      "Custom Logic": true,
      "Interfaces and Protocols": "1-Wire, MODBUS",
      "Inputs": "3 Universal IN",
      "Outputs": "2 OUT",
      "CAN": "CAN",
      "Voice Communication": true,
      "Battery": "800 mAh"
    }
  },
  "S-2433": {
    name: "S-2433",
    series: "Signal Series",
    connectivity: "2G",
    specs: {
      "SIM Support": "Single SIM",
      "Engine Hours": "Engine Hours",
      "Bluetooth": "Bluetooth 4.0",
      "Eco Driving": true,
      "Communication interface": "RS-485, RS-232",
      "Custom Logic": true,
      "Interfaces and Protocols": "1-Wire, MODBUS",
      "Inputs": "3 Universal IN",
      "Outputs": "2 OUT",
      "CAN": false,
      "Voice Communication": true,
      "Battery": "800 mAh"
    }
  },
  "S-2425": {
    name: "S-2425",
    series: "Signal Series",
    connectivity: "2G",
    specs: {
      "SIM Support": "Dual SIM",
      "Engine Hours": "Engine Hours",
      "Bluetooth": "Bluetooth 4.0",
      "Eco Driving": true,
      "Communication interface": "RS-485, RS-232",
      "Custom Logic": false,
      "Interfaces and Protocols": "1-Wire",
      "Inputs": "3 Universal IN",
      "Outputs": "2 OUT",
      "CAN": false,
      "Voice Communication": false,
      "Battery": "380 mAh"
    }
  },
  "S-2423": {
    name: "S-2423",
    series: "Signal Series",
    connectivity: "2G",
    specs: {
      "SIM Support": "Dual SIM",
      "Engine Hours": "Engine Hours",
      "Bluetooth": "Bluetooth 4.0",
      "Eco Driving": true,
      "Communication interface": "RS-485",
      "Custom Logic": false,
      "Interfaces and Protocols": "1-Wire",
      "Inputs": "3 Universal IN",
      "Outputs": "2 OUT",
      "CAN": false,
      "Voice Communication": false,
      "Battery": "380 mAh"
    }
  },
  "S-2653": {
    name: "S-2653",
    series: "Signal Series",
    connectivity: "2G",
    specs: {
      "SIM Support": "Dual SIM",
      "Engine Hours": "Engine Hours",
      "Bluetooth": "Bluetooth 4.0",
      "Eco Driving": true,
      "Communication interface": "RS-485",
      "Custom Logic": true,
      "Interfaces and Protocols": "1-Wire, MODBUS",
      "Inputs": "6 Universal IN",
      "Outputs": "4 OUT",
      "CAN": "Dual CAN",
      "Voice Communication": true,
      "Battery": "800 mAh"
    }
  },
  "S-2613": {
    name: "S-2613",
    series: "Signal Series",
    connectivity: "2G",
    specs: {
      "SIM Support": "Single SIM",
      "Engine Hours": "Engine Hours",
      "Bluetooth": "Bluetooth 4.0",
      "Eco Driving": false,
      "Communication interface": "RS-485",
      "Custom Logic": false,
      "Interfaces and Protocols": "-",
      "Inputs": "4 Digital IN & 1 Analog IN",
      "Outputs": "4 OUT",
      "CAN": false,
      "Voice Communication": true,
      "Battery": "800 mAh"
    }
  },
  "S-2651": {
    name: "S-2651",
    series: "Signal Series",
    connectivity: "2G",
    specs: {
      "SIM Support": "Dual SIM",
      "Engine Hours": "Engine Hours",
      "Bluetooth": "Bluetooth 4.0",
      "Eco Driving": true,
      "Communication interface": "RS-485, RS-232",
      "Custom Logic": true,
      "Interfaces and Protocols": "1-Wire, MODBUS",
      "Inputs": "6 Universal IN",
      "Outputs": "4 OUT",
      "CAN": "CAN",
      "Voice Communication": true,
      "Battery": "800 mAh"
    }
  },
  "S-4753": {
    name: "S-4753",
    series: "Signal Series",
    connectivity: "4G",
    specs: {
      "SIM Support": "Dual SIM",
      "Engine Hours": "Engine Hours",
      "Bluetooth": "Bluetooth 4.0 (v5.0 compatible)",
      "Eco Driving": true,
      "Communication interface": "RS-485",
      "Custom Logic": true,
      "Interfaces and Protocols": "1-Wire, MODBUS",
      "Inputs": "6 Universal IN",
      "Outputs": "4 OUT",
      "CAN": "Dual CAN",
      "Voice Communication": true,
      "Battery": "800 mAh"
    }
  },
  "S-4751": {
    name: "S-4751",
    series: "Signal Series",
    connectivity: "4G",
    specs: {
      "SIM Support": "Dual SIM",
      "Engine Hours": "Engine Hours",
      "Bluetooth": "Bluetooth 4.0 (v5.0 compatible)",
      "Eco Driving": true,
      "Communication interface": "RS-485, RS-232",
      "Custom Logic": true,
      "Interfaces and Protocols": "1-Wire, MODBUS",
      "Inputs": "6 Universal IN",
      "Outputs": "4 OUT",
      "CAN": "CAN",
      "Voice Communication": true,
      "Battery": "800 mAh"
    }
  }
};

const ComparisonContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const devicesQuery = searchParams.get("devices");
  const selectedDeviceNames = devicesQuery ? devicesQuery.split(",") : [];
  
  const selectedDevices = selectedDeviceNames
    .map(name => deviceData[name as keyof typeof deviceData])
    .filter(Boolean);

  const parameters = [
    "SIM Support",
    "Engine Hours",
    "Bluetooth",
    "Eco Driving",
    "Communication interface",
    "Custom Logic",
    "Interfaces and Protocols",
    "Inputs",
    "Outputs",
    "CAN",
    "Voice Communication",
    "Battery"
  ];

  if (selectedDevices.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-h2 mb-4">No devices selected for comparison</h2>
        <p className="text-body mb-8">Please go back and select at least one device to compare.</p>
        <Link 
          href="/products/tracking-devices/start-series"
          className="bg-brand-navy text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-primary transition-colors"
        >
          Back to Lineup
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-12">
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-brand-navy font-bold hover:text-brand-primary transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Lineup
        </button>
        <h1 className="text-h1">Device <span className="text-brand-primary">Comparison</span></h1>
        <div className="w-24"></div> {/* Spacer for centering */}
      </div>

      <div className="bg-white rounded-[3rem] shadow-2xl shadow-brand-navy/5 border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="p-8 text-left bg-gray-50/50 min-w-[200px]">
                  <p className="text-label">Parameters</p>
                </th>
                {selectedDevices.map((device, idx) => (
                  <th key={idx} className="p-8 text-center min-w-[250px] border-l border-gray-100">
                    <div className="space-y-4">
                      <div className="inline-block px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-[10px] font-black uppercase tracking-widest">
                        {device.connectivity} Network
                      </div>
                      <h3 className="text-h3 text-3xl">%{device.name}%</h3>
                      <p className="text-label text-gray-400">%{device.series}%</p>
                      <Link 
                        href={`/products/tracking-devices/start-series/${device.name.toLowerCase()}`}
                        className="inline-block text-xs font-black text-brand-navy hover:text-brand-primary transition-colors underline underline-offset-4"
                      >
                        View Details
                      </Link>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {parameters.map((param, pIdx) => (
                <tr key={pIdx} className="border-b border-gray-100 group hover:bg-gray-50/30 transition-colors">
                  <td className="p-8 bg-gray-50/50">
                    <p className="text-body-sm font-bold text-brand-navy/60">{param}</p>
                  </td>
                  {selectedDevices.map((device, dIdx) => {
                    const value = device.specs[param as keyof typeof device.specs];

                    return (
                      <td key={dIdx} className="p-8 text-center border-l border-gray-100">
                        {typeof value === 'boolean' ? (
                          value ? (
                            <div className="flex flex-col items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-1">
                                <Check size={14} weight="bold" />
                              </div>
                            </div>
                          ) : (
                            <div className="flex flex-col items-center gap-2 opacity-20">
                              <Minus size={20} weight="bold" className="text-gray-400" />
                            </div>
                          )
                        ) : (
                          value !== "-" && value !== "" ? (
                            <span className="text-body-sm font-bold text-brand-navy">{value}</span>
                          ) : (
                            <div className="flex flex-col items-center gap-2 opacity-20">
                              <Minus size={20} weight="bold" className="text-gray-400" />
                            </div>
                          )
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-body-sm text-gray-400">
          * Specifications are subject to change. Please contact support for the most up-to-date information.
        </p>
      </div>
    </div>
  );
};

const ComparisonPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans antialiased text-brand-navy">
      <Navbar />
      <main className="pt-20">
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
          <ComparisonContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default ComparisonPage;
