import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import ProductLineup from "@/components/ProductLineup";

const TrackingDevicesPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[calc(100vh-5rem)] min-h-[calc(100dvh-5rem)] flex items-center overflow-hidden bg-brand-light-3">
          <Image
            src="/Navtelecom/Alldevices.png"
            alt="Tracking devices lineup"
            fill
            priority
            className="object-contain object-center"
          />
          <div className="absolute inset-0 bg-white/65" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-caption mb-4">
                TRACKING DEVICES
              </p>
              <h1 className="text-h1 mb-6">
                Professional GPS Tracking Solutions
              </h1>
              <p className="text-body-lg max-w-3xl mx-auto">
                Comprehensive range of telematics devices designed for fleet
                management, asset tracking, and vehicle monitoring.
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

        <ProductLineup />
      </main>

      <Footer />
    </div>
  );
};

export default TrackingDevicesPage;

