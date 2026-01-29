import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";

const NTCControlPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#0F172A]">
      <Navbar />

      <main className="pt-20">
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link href="/products/software-products" className="text-[#00529B] hover:text-[#003d74] font-medium mb-4 inline-block">
                ← Back to Software Products
              </Link>
            </div>
            <div className="text-center mb-16">
              <p className="text-sm font-bold text-gray-500 tracking-[0.2em] uppercase mb-4">
                NTC CONTROL
              </p>
              <h1 className="text-5xl md:text-6xl font-extrabold text-[#0F172A] leading-tight mb-6">
                Mobile App for Quick On-Site Setup
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                Convenient mobile application for configuring and managing devices directly from the field.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#F8FAFC]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-12 border border-gray-200">
              <h2 className="text-3xl font-bold text-[#0F172A] mb-8">Features</h2>
              <div className="space-y-6">
                <div className="p-6 bg-[#F8FAFC] border border-gray-200">
                  <h3 className="text-xl font-bold text-[#00529B] mb-3">Mobile Configuration</h3>
                  <p className="text-gray-600">Configure devices on-the-go using your smartphone or tablet.</p>
                </div>
                <div className="p-6 bg-[#F8FAFC] border border-gray-200">
                  <h3 className="text-xl font-bold text-[#00529B] mb-3">Quick Setup</h3>
                  <p className="text-gray-600">Fast and easy device setup without needing a computer.</p>
                </div>
                <div className="p-6 bg-[#F8FAFC] border border-gray-200">
                  <h3 className="text-xl font-bold text-[#00529B] mb-3">Field Management</h3>
                  <p className="text-gray-600">Manage and troubleshoot devices directly at installation sites.</p>
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

export default NTCControlPage;

