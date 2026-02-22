import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";

const CanSpyPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />

      <main className="pt-20">
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link
                href="/products/software-solutions"
                className="text-brand-primary hover:text-brand-deep font-medium mb-4 inline-block"
              >
                ← Back to Software Solutions
              </Link>
            </div>
            <div className="text-center mb-16">
              <p className="text-caption mb-4">CAN SPY</p>
              <h1 className="text-h1 mb-6">
                CAN Bus Scanning & Decoding Toolchain
              </h1>
              <p className="text-body-lg max-w-3xl mx-auto">
                Advanced tool for scanning, analyzing, and decoding CAN bus data
                from vehicles.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#F8FAFC]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-12 border border-gray-200">
              <h2 className="text-h2 mb-8">Features</h2>
              <div className="space-y-6">
                <div className="p-6 bg-brand-light-3 border border-gray-200">
                  <h3 className="text-h3 text-brand-primary mb-3">
                    CAN Bus Scanning
                  </h3>
                  <p className="text-body">
                    Scan and identify CAN bus messages and protocols.
                  </p>
                </div>
                <div className="p-6 bg-brand-light-3 border border-gray-200">
                  <h3 className="text-h3 text-brand-primary mb-3">
                    Data Decoding
                  </h3>
                  <p className="text-body">
                    Decode vehicle-specific data formats and parameters.
                  </p>
                </div>
                <div className="p-6 bg-brand-light-3 border border-gray-200">
                  <h3 className="text-h3 text-brand-primary mb-3">
                    Protocol Support
                  </h3>
                  <p className="text-body">
                    Support for multiple vehicle manufacturers and protocols.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CanSpyPage;
