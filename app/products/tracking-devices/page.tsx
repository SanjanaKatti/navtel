import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";
import ProductLineup from "@/components/ProductLineup";

const TrackingDevicesPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy overflow-x-hidden">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section — mobile/tablet: centered stack + room for portrait 1080×1350 art */}
        <section className="relative flex flex-col lg:block overflow-hidden bg-brand-light-3 product-background-image tracking-devices-hero-background min-h-[min(100svh,36rem)] min-[400px]:min-h-[min(100svh,40rem)] sm:min-h-[min(100svh,44rem)] md:min-h-[min(100svh,48rem)] lg:min-h-[calc(100dvh-5rem)] lg:h-[calc(100vh-5rem)]">
          <div className="relative z-40 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 flex flex-col flex-1 lg:absolute lg:inset-0 lg:grid lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] xl:grid-cols-[minmax(0,380px)_minmax(0,1fr)] lg:items-center lg:py-0 pt-6 sm:pt-8 md:pt-10 lg:pt-0 pb-32 sm:pb-36 md:pb-40 lg:pb-0">
            {/* Desktop: hard column cap so copy cannot extend under the 3D art; mobile/tablet unchanged */}
            <div className="w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-none xl:max-w-none flex flex-col items-center lg:items-start text-center lg:text-left mx-auto lg:mx-0 lg:pr-8 xl:pr-12 lg:min-w-0">
              <p className="text-caption mb-2 sm:mb-3 md:mb-4 text-brand-navy tracking-[0.12em] sm:tracking-widest">
                TRACKING DEVICES
              </p>
              <h1 className="text-[1.65rem] leading-tight min-[400px]:text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-black tracking-tight text-brand-navy mb-3 sm:mb-4 md:mb-6 text-pretty px-1 sm:px-0 lg:px-0">
                Professional GPS Tracking Solutions
              </h1>
              <p className="text-sm sm:text-base md:text-body-lg max-w-full sm:max-w-md md:max-w-lg lg:max-w-none text-brand-navy/90 mb-6 sm:mb-7 md:mb-8 leading-relaxed text-pretty px-1 sm:px-0 lg:px-0">
                Comprehensive range of telematics devices designed for fleet
                management, asset tracking, and vehicle monitoring.
              </p>
              <Link
                href="/products/all-devices"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#00529B] text-white px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-bold hover:bg-[#003d74] transition-colors border-2 border-[#00529B] rounded-full min-h-[48px] touch-manipulation shrink-0"
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
