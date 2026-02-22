import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";

const TrackingDevicesPage = () => {
  const series = [
    {
      title: "START Series",
      subtitle: "Cost-effective, ultra-compact",
      description: "For essential GPS tracking and entry-level fleet management.",
      href: "/products/tracking-devices/start-series",
      features: ["4G Connectivity", "Plug & Play", "Small Form Factor"]
    },
    {
      title: "SMART Series",
      subtitle: "Flexible connectivity, custom logic",
      description: "Supports CAN, BLE, RS-485. Ideal for fuel monitoring and sensor integration.",
      href: "/products/tracking-devices/smart-series",
      features: ["CAN Bus Support", "Bluetooth 4.0", "Fuel Monitoring"]
    },
    {
      title: "SIGNAL Series",
      subtitle: "External antennas, pro-grade features",
      description: "Extended GNSS, fuel control, diagnostics, voice communication with drivers.",
      href: "/products/tracking-devices/signal-series",
      features: ["High Precision GNSS", "Voice Comm", "Advanced I/O"]
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#0F172A]">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="h-[calc(100vh-5rem)] min-h-[calc(100dvh-5rem)] flex items-center py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm font-bold text-gray-500 tracking-[0.2em] uppercase mb-4">
                TRACKING DEVICES
              </p>
              <h1 className="text-5xl md:text-6xl font-extrabold text-[#0F172A] leading-tight mb-6">
                Professional GPS Tracking Solutions
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                Comprehensive range of telematics devices designed for fleet management, asset tracking, and vehicle monitoring.
              </p>
            </div>
          </div>
        </section>

        {/* All Devices Link */}
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Link
                href="/products/all-devices"
                className="inline-flex items-center gap-3 bg-[#00529B] text-white px-8 py-4 font-bold hover:bg-[#003d74] transition-colors border-2 border-[#00529B]"
              >
                <span>View All Devices</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Series Grid */}
        <section className="py-24 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-10">
              {series.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="group bg-white p-12 flex flex-col transition-all duration-300 hover:shadow-lg border border-gray-200"
                >
                  <div className="mb-10 relative">
                    <h3 className="text-3xl font-black text-[#00529B] mb-2">{item.title}</h3>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{item.subtitle}</p>
                  </div>

                  <div className="w-full aspect-[4/3] mb-10 relative flex items-center justify-center bg-[#F8FAFC] overflow-hidden border border-gray-200">
                    <div className="w-2/3 h-1/2 bg-[#0F172A] flex items-center justify-center">
                      <span className="text-white/10 text-3xl font-black tracking-widest">{item.title.split(' ')[0]}</span>
                      <div className="absolute top-4 right-4 flex gap-1.5">
                        <div className="w-2.5 h-2.5 bg-green-500"></div>
                        <div className="w-2.5 h-2.5 bg-yellow-500/50"></div>
                        <div className="w-2.5 h-2.5 bg-red-500/50"></div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-10 leading-relaxed text-lg font-medium">
                    {item.description}
                  </p>

                  <div className="space-y-4 mb-10">
                    {item.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3 text-sm font-bold text-[#0F172A]/70">
                        <div className="w-5 h-5 bg-green-100 flex items-center justify-center text-green-600">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-8 border-t border-gray-200">
                    <button className="w-full bg-[#00529B] text-white py-5 px-8 font-bold text-lg hover:bg-[#003d74] transition-colors border-2 border-[#00529B]">
                      View Series
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TrackingDevicesPage;

