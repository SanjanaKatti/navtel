import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";

const DRCPage = () => {
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
              <p className="text-caption mb-4">DRC</p>
              <h1 className="text-h1 mb-6">
                Cloud Device Management & Diagnostics Platform
              </h1>
              <p className="text-body-lg max-w-3xl mx-auto">
                Comprehensive cloud-based platform for remote device management,
                monitoring, and diagnostics.
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
                    Remote Management
                  </h3>
                  <p className="text-body">
                    Manage and configure devices remotely from anywhere.
                  </p>
                </div>
                <div className="p-6 bg-brand-light-3 border border-gray-200">
                  <h3 className="text-h3 text-brand-primary mb-3">
                    Real-time Monitoring
                  </h3>
                  <p className="text-body">
                    Monitor device status and performance in real-time.
                  </p>
                </div>
                <div className="p-6 bg-brand-light-3 border border-gray-200">
                  <h3 className="text-h3 text-brand-primary mb-3">
                    Diagnostics
                  </h3>
                  <p className="text-body">
                    Advanced diagnostics and troubleshooting tools.
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

export default DRCPage;
