import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#0F172A]">
      <Navbar />

      <main className="pt-20">
        {/* Section 1: Image and Description */}
        <section className="h-[calc(100vh-5rem)] min-h-[calc(100dvh-5rem)] flex items-center bg-gradient-to-b from-[#F8FAFC] to-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-blue-500/5 rounded-[60px] blur-3xl group-hover:bg-blue-500/10 transition-all duration-700"></div>
                <div className="relative aspect-square bg-white rounded-[48px] shadow-2xl border border-gray-100 flex items-center justify-center p-12 transform hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-full h-full bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-3xl flex items-center justify-center relative overflow-hidden">
                    <span className="text-white/5 text-[120px] font-black absolute rotate-12">
                      XYZ
                    </span>
                    <div className="relative z-10 text-center">
                      <div className="w-32 h-32 bg-blue-600/20 rounded-full blur-2xl absolute -top-10 -left-10"></div>
                      <span className="text-white text-3xl font-bold tracking-widest">
                        PRODUCT IMAGE
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h1 className="text-5xl md:text-6xl font-black text-[#00529B] leading-tight mb-4">
                    PRODUCT MODEL XYZ
                  </h1>
                  <p className="text-sm font-bold text-gray-400 tracking-[0.3em] uppercase">
                    Professional Telematics Series
                  </p>
                </div>

                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                  This is a temporary description line 1 for the product. It
                  covers the general overview of the device and its primary
                  functions. Line 2 describes the technical innovation. Line 3
                  explains the market positioning. Line 4 highlights the
                  reliability and performance of this specific telematics
                  hardware in various conditions.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <button className="bg-[#00529B] text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-[#003d74] transition-all shadow-xl hover:shadow-2xl">
                    Request a Quote
                  </button>
                  <button className="bg-white text-[#00529B] px-10 py-5 rounded-2xl font-bold text-lg border-2 border-gray-100 hover:border-[#00529B] transition-all">
                    Download Datasheet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Features */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-black text-[#00529B] mb-16 text-center">
              CORE FEATURES
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="group p-10 bg-[#F8FAFC] rounded-[40px] border border-gray-50 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-[#00529B] rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg shadow-blue-500/20">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
                    Feature Line {i}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Description for feature {i}. This text explains the
                    technical benefit of this specific feature. It mentions how
                    line XYZ works to improve the overall performance of the
                    device.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Use Cases */}
        <section className="py-24 bg-[#0F172A] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 blur-[120px]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-[#8ECAE6] mb-16 text-center">
              USE CASES
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Logistics and Fleet Management",
                "Asset and Cargo Tracking",
                "Personal and VIP Security",
                "Construction and Heavy Machinery",
              ].map((title, idx) => (
                <div
                  key={idx}
                  className="group flex gap-8 p-10 bg-white/5 rounded-[40px] border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#00529B] to-blue-400 rounded-3xl flex items-center justify-center text-3xl font-black shadow-xl">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#8ECAE6] transition-colors">
                      {title}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      This is dummy text for use case {idx + 1}. It describes
                      the specific scenario where product XYZ is deployed to
                      solve industry-specific challenges. Line A, B, and C
                      explain the results.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Specifications */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-black text-[#00529B] mb-16 text-center">
              SPECIFICATIONS
            </h2>
            <div className="bg-[#F8FAFC] rounded-[48px] p-8 md:p-12 border border-gray-100 shadow-xl">
              <div className="divide-y divide-gray-200">
                {[
                  ["Parameter XYZ", "Value 123"],
                  ["Parameter ABC", "Value 456"],
                  ["Dimensions", "00 x 00 x 00 mm"],
                  ["Weight", "000g"],
                  ["Operating Voltage", "10V - 30V DC"],
                  ["Internal Battery", "Li-Po 000 mAh"],
                  ["GNSS Channels", "99 Channels"],
                  ["Interfaces", "CAN, RS-485, BLE"],
                  ["Operating Temp", "-40C to +85C"],
                  ["IP Rating", "IP67 Rated"],
                ].map(([param, val], idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-2 py-6 px-4 hover:bg-white rounded-2xl transition-colors"
                  >
                    <span className="text-lg font-bold text-[#0F172A]">
                      {param}
                    </span>
                    <span className="text-lg text-gray-500 text-right">
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductPage;
