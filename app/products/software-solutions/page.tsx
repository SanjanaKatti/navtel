import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";

const SoftwareSolutionsPage = () => {
  const software = [
    {
      name: "NTC Configurator",
      description: "Main PC tool for tracker setup",
      href: "/products/software-solutions/ntc-configurator",
      number: "01",
      category: "Configuration",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    },
    {
      name: "Can Spy",
      description: "CAN bus Scanning & Decoding Toolchain",
      href: "/products/software-solutions/can-spy",
      number: "02",
      category: "Diagnostics",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
    },
    {
      name: "Complex Events",
      description:
        "Advanced tool for implementing custom tracker event logic and automation",
      href: "/products/software-solutions/complex-events",
      number: "03",
      category: "Automation",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    },
    {
      name: "DRC",
      description: "Cloud Device Management & Diagnostics Platform",
      href: "/products/software-solutions/drc",
      number: "04",
      category: "Cloud Platform",
      icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
    },
    {
      name: "NTC Control",
      description: "Mobile app for quick on-side setup",
      href: "/products/software-solutions/ntc-control",
      number: "05",
      category: "Mobile App",
      icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />

      <main className="pt-20">
        <section className="h-[calc(100vh-5rem)] min-h-[calc(100dvh-5rem)] flex items-center py-12 md:py-16 bg-gradient-to-b from-brand-light-3 to-white border-b border-gray-200 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-navy transform rotate-45 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-navy transform -rotate-45 -translate-x-1/2 translate-y-1/2"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <p className="text-caption text-brand-primary mb-4">
                SOFTWARE SOLUTIONS
              </p>
              <h1 className="text-h1 mb-6">Professional Software Solutions</h1>
              <p className="text-body-lg max-w-3xl mx-auto mb-8">
                Comprehensive suite of software tools for device configuration,
                management, and advanced telematics operations.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-h2 mb-2">Our Software Suite</h2>
              <p className="text-body">
                Choose the right tool for your telematics needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {software.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="group bg-white border-2 border-gray-200 hover:border-brand-primary p-8 flex flex-col transition-all hover:shadow-xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary opacity-0 group-hover:opacity-5 transition-opacity"></div>
                  <div className="flex items-start justify-between mb-6 relative z-10">
                    <div className="flex items-center gap-4">
                      <span className="text-5xl font-black text-gray-100 group-hover:text-brand-primary transition-colors">
                        {item.number}
                      </span>
                      <div className="w-14 h-14 bg-brand-light-3 border-2 border-gray-200 flex items-center justify-center group-hover:bg-brand-primary group-hover:border-brand-primary transition-all">
                        <svg
                          className="w-7 h-7 text-gray-400 group-hover:text-white transition-colors"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={item.icon}
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 relative z-10">
                    <span className="px-3 py-1 bg-brand-light-3 text-brand-primary text-xs font-bold border border-gray-200 group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-all">
                      {item.category}
                    </span>
                  </div>

                  <div className="flex-1 relative z-10">
                    <h3 className="text-h3 mb-4 group-hover:text-brand-primary transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-body mb-6">{item.description}</p>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-200 relative z-10">
                    <div className="flex items-center gap-2 text-brand-primary font-bold text-sm group-hover:gap-4 transition-all">
                      <span>Learn More</span>
                      <svg
                        className="w-5 h-5"
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
                    </div>
                    <div className="w-8 h-8 bg-brand-light-3 border border-gray-200 flex items-center justify-center group-hover:bg-brand-primary group-hover:border-brand-primary transition-all">
                      <svg
                        className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors"
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
                    </div>
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

export default SoftwareSolutionsPage;
