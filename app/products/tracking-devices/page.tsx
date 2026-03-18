import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import ProductLineup from "@/components/ProductLineup";

const TrackingDevicesPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy overflow-x-hidden">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[360px] sm:min-h-[min(100dvh,500px)] md:min-h-[min(100dvh,600px)] lg:h-[calc(100vh-5rem)] lg:min-h-[calc(100dvh-5rem)] flex items-start overflow-hidden bg-brand-light-3 product-background-image tracking-devices-hero-background">
          <div className="absolute inset-0 bg-white/40 z-10" aria-hidden />
          <div className="relative z-40 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-12 pb-10 sm:pb-16 lg:pb-20">
            <div className="w-full max-w-full sm:max-w-xl lg:max-w-lg xl:max-w-xl flex flex-col items-center lg:items-start text-center lg:text-left mx-auto lg:mx-0">
              <p className="text-caption mb-2 sm:mb-4 text-brand-navy">
                TRACKING DEVICES
              </p>
              <h1 className="text-h1 mb-3 sm:mb-6 text-brand-navy break-words">
                Professional GPS Tracking Solutions
              </h1>
              <p className="text-body sm:text-body-lg max-w-full sm:max-w-md text-brand-navy mb-5 sm:mb-8">
                Comprehensive range of telematics devices designed for fleet
                management, asset tracking, and vehicle monitoring.
              </p>
              <Link
                href="/products/all-devices"
                className="inline-flex items-center gap-2 sm:gap-3 bg-[#00529B] text-white px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-bold hover:bg-[#003d74] transition-colors border-2 border-[#00529B] rounded-full"
              >
                <span>View All Devices</span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
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
