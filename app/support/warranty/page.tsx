"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LayoutContainer from "@/components/LayoutContainer";
import {
  ShieldCheck,
  XCircle,
  Prohibit,
  Headset,
  Package,
  Clock,
  BatteryCharging,
} from "phosphor-react";

export default function WarrantyPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />

      <main className="pt-20">
        {/* Hero */}
        <section className="relative h-[calc(100vh-5rem)] min-h-[calc(100dvh-5rem)] flex items-start overflow-hidden product-background-image bg-cover bg-center warranty-hero-background">
          <div className="absolute inset-0 bg-white/30 z-[1]" aria-hidden />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 pb-16 z-10 w-full relative text-left">
            <div className="space-y-6 max-w-xl lg:max-w-md">
              <p className="text-sm font-bold tracking-[0.3em] uppercase text-brand-navy">
                RELIABLE COVERAGE FOR NAVTELECOM DEVICES
              </p>
              <h1 className="text-5xl md:text-6xl font-black leading-tight text-brand-navy">
                Limited Warranty
              </h1>
              <p className="text-body-lg text-brand-navy">
                Advanced warranty terms, clear coverage conditions, and a
                straightforward service process for all Navtelecom devices.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 bg-[#F8FAFC]">
          <LayoutContainer>
            <div className="max-w-3xl mx-auto space-y-8">
              {/* Main warranty terms - card */}
              <div className="bg-white rounded-[2rem] border border-gray-200 p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-light-2 flex items-center justify-center text-brand-navy">
                    <ShieldCheck size={28} weight="bold" />
                  </div>
                  <div>
                    <h2 className="text-h2">Warranty Terms</h2>
                    <div className="h-1 w-12 bg-brand-primary rounded-full mt-1" />
                  </div>
                </div>
                <div className="space-y-6">
                <p className="text-body-lg">
                  NAVTELECOM provides a limited warranty of 3 years for GPS
                  tracking equipment.
                </p>
                <p className="text-body-lg">
                  The built-in battery is covered for 1 year.
                </p>
                <p className="text-body-lg">
                  The warranty period begins on the date of sale.
                </p>
                <p className="text-body-lg">
                  This warranty applies only if the device has been installed,
                  operated, stored, and transported in accordance with the
                  Operational Manual and recommended guidelines.
                </p>
                <p className="text-body-lg">
                  Minor cosmetic wear resulting from normal use does not affect
                  warranty coverage.
                </p>
                <p className="text-body-lg">
                  The expected service life of the equipment (excluding the
                  built-in battery) is 10 years.
                </p>
                <p className="text-body-lg">
                  NAVTELECOM does not guarantee compatibility with third-party
                  hardware or software not included in the original product
                  package unless explicitly specified in the Operational Manual.
                </p>
                <p className="text-body-lg">
                  NAVTELECOM is not responsible for damage caused by improper
                  installation, misuse, incorrect storage, or transportation of
                  the device.
                </p>
                </div>
              </div>

              {/* Warranty Exclusions */}
              <div className="bg-white rounded-[2rem] border border-gray-200 p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-red-600">
                    <XCircle size={28} weight="bold" />
                  </div>
                  <div>
                    <h2 className="text-h2">Warranty Exclusions</h2>
                    <div className="h-1 w-12 bg-brand-primary rounded-full mt-1" />
                  </div>
                </div>
                <p className="text-body-lg mb-4">
                  This warranty does not cover:
                </p>
                <ul className="list-disc list-inside space-y-2 text-body-lg">
                  <li>Documentation and packaging materials</li>
                  <li>
                    Accessories supplied with the device (power cables, antennas,
                    fuses), unless originally defective
                  </li>
                  <li>Damage caused by improper installation or misuse</li>
                  <li>
                    Damage caused by external factors or environmental
                    conditions
                  </li>
                  <li>Any unauthorized modification of the device</li>
                </ul>
              </div>

              {/* Warranty Void Conditions */}
              <div className="bg-white rounded-[2rem] border border-gray-200 p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600">
                    <Prohibit size={28} weight="bold" />
                  </div>
                  <div>
                    <h2 className="text-h2">Warranty Void Conditions</h2>
                    <div className="h-1 w-12 bg-brand-primary rounded-full mt-1" />
                  </div>
                </div>
                <p className="text-body-lg mb-4">
                  Warranty coverage becomes void if:
                </p>
                <ul className="list-disc list-inside space-y-2 text-body-lg mb-6">
                  <li>
                    The device was used in violation of installation, operation,
                    storage, or transportation guidelines
                  </li>
                  <li>The device was opened or modified without authorization</li>
                  <li>Warranty seals were removed or damaged</li>
                  <li>
                    The device was used with incompatible or malfunctioning
                    equipment or software
                  </li>
                  <li>
                    The hardware, firmware, or internal configuration of the
                    device has been modified without authorization from
                    NAVTELECOM
                  </li>
                </ul>
                <p className="text-body-lg mb-4">
                  This includes, but is not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-body-lg mb-6">
                  <li>hardware modification of the device or circuit board</li>
                  <li>
                    soldering, chip replacement, or alteration of electronic
                    components
                  </li>
                  <li>installation of unofficial or modified firmware</li>
                  <li>modification of internal system parameters</li>
                  <li>
                    reverse engineering or any other interference with device
                    hardware or software
                  </li>
                </ul>
                <p className="text-body-lg mb-4">
                  Such actions are performed entirely at the user&apos;s own risk
                  and immediately terminate warranty coverage.
                </p>
                <p className="text-body-lg">
                  NAVTELECOM reserves the right to refuse warranty service if
                  signs of hardware or firmware modification are detected.
                </p>
              </div>

              {/* Service */}
              <div className="bg-white rounded-[2rem] border border-gray-200 p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-light-2 flex items-center justify-center text-brand-navy">
                    <Headset size={28} weight="bold" />
                  </div>
                  <div>
                    <h2 className="text-h2">Service</h2>
                    <div className="h-1 w-12 bg-brand-primary rounded-full mt-1" />
                  </div>
                </div>
                <p className="text-body-lg mb-4">
                  Before requesting warranty service, please contact NAVTELECOM
                  Technical Support:
                </p>
                <p className="text-body-lg mb-4">
                  <a
                    href="mailto:support@navtelecom.ru"
                    className="text-brand-primary font-bold hover:underline"
                  >
                    support@navtelecom.ru
                  </a>
                </p>
                <p className="text-body-lg mb-4">
                  Many issues can be resolved remotely without returning the
                  device.
                </p>
                <p className="text-body-lg mb-4">
                  To assist with diagnostics, please provide:
                </p>
                <ul className="list-disc list-inside space-y-2 text-body-lg mb-6">
                  <li>Device model, IMEI</li>
                  <li>NTC Configurator version</li>
                  <li>Device firmware version</li>
                  <li>Device configuration file</li>
                </ul>
                <p className="text-body-lg">
                  If a manufacturing defect is confirmed after diagnostics,
                  NAVTELECOM reserves the right to determine the appropriate
                  warranty                   remedy in accordance with its warranty policy.
                </p>
              </div>

              {/* Shipping */}
              <div className="bg-white rounded-[2rem] border border-gray-200 p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-light-2 flex items-center justify-center text-brand-navy">
                    <Package size={28} weight="bold" />
                  </div>
                  <div>
                    <h2 className="text-h2">Shipping</h2>
                    <div className="h-1 w-12 bg-brand-primary rounded-full mt-1" />
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-body-lg">
                  <li>
                    The customer is responsible for shipping defective equipment
                    to the service location
                  </li>
                  <li>
                    If the warranty claim is approved, NAVTELECOM covers the
                    cost of shipping the replacement or serviced device
                  </li>
                  <li>
                    If the defect is caused by improper use, the device may be
                    returned at the customer&apos;s expense
                  </li>
                  <li>
                    NAVTELECOM is not responsible for loss during return
                    transportation
                  </li>
                  <li>
                    Returned devices must be properly packaged to prevent damage
                  </li>
                  <li>Please send only the device, without accessories.</li>
                </ul>
              </div>
            </div>
          </LayoutContainer>
        </section>

        {/* Stats badges */}
        <section className="py-16 md:py-24 bg-white border-t border-gray-200">
          <LayoutContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-brand-light-3 rounded-[2rem] border border-gray-200 p-8 md:p-10 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-brand-navy flex items-center justify-center text-white mx-auto mb-4 group-hover:bg-brand-primary transition-colors">
                  <ShieldCheck size={32} weight="bold" />
                </div>
                <p className="text-3xl md:text-4xl font-black text-brand-navy mb-2">
                  3-Year
                </p>
                <p className="text-body font-bold text-brand-navy">
                  Device Warranty
                </p>
              </div>
              <div className="bg-brand-light-3 rounded-[2rem] border border-gray-200 p-8 md:p-10 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-brand-navy flex items-center justify-center text-white mx-auto mb-4 group-hover:bg-brand-primary transition-colors">
                  <BatteryCharging size={32} weight="bold" />
                </div>
                <p className="text-3xl md:text-4xl font-black text-brand-navy mb-2">
                  1-Year
                </p>
                <p className="text-body font-bold text-brand-navy">
                  Battery Coverage
                </p>
              </div>
              <div className="bg-brand-light-3 rounded-[2rem] border border-gray-200 p-8 md:p-10 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-brand-navy flex items-center justify-center text-white mx-auto mb-4 group-hover:bg-brand-primary transition-colors">
                  <Clock size={32} weight="bold" />
                </div>
                <p className="text-3xl md:text-4xl font-black text-brand-navy mb-2">
                  10-Year
                </p>
                <p className="text-body font-bold text-brand-navy">
                  Product Lifetime
                </p>
              </div>
            </div>
          </LayoutContainer>
        </section>
      </main>

      <Footer />
    </div>
  );
}
