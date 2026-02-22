import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";

const SoftwareProductsPage = () => {
  const software = [
    {
      name: "NTC Configurator",
      description: "Main PC tool for tracker setup",
      href: "/products/software-products/ntc-configurator",
      number: "01",
      category: "Configuration",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    },
    {
      name: "Can Spy",
      description: "CAN bus Scanning & Decoding Toolchain",
      href: "/products/software-products/can-spy",
      number: "02",
      category: "Diagnostics",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
    },
    {
      name: "Complex Events",
      description: "Script-building tool to formulate tracker operation logic",
      href: "/products/software-products/complex-events",
      number: "03",
      category: "Automation",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    },
    {
      name: "DRC",
      description: "Cloud Device Management & Diagnostics Platform",
      href: "/products/software-products/drc",
      number: "04",
      category: "Cloud Platform",
      icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
    },
    {
      name: "NTC Control",
      description: "Mobile app for quick on-side setup",
      href: "/products/software-products/ntc-control",
      number: "05",
      category: "Mobile App",
      icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#0F172A]">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="h-[calc(100vh-5rem)] min-h-[calc(100dvh-5rem)] flex items-center py-12 md:py-16 bg-gradient-to-b from-[#F8FAFC] to-white border-b border-gray-200 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00529B] transform rotate-45 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00529B] transform -rotate-45 -translate-x-1/2 translate-y-1/2"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <p className="text-sm font-bold text-[#00529B] tracking-[0.2em] uppercase mb-4">
                SOFTWARE PRODUCTS
              </p>
              <h1 className="text-5xl md:text-6xl font-extrabold text-[#0F172A] leading-tight mb-6">
                Professional Software Solutions
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium mb-8">
                Comprehensive suite of software tools for device configuration, management, and advanced telematics operations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-[#00529B] text-white font-bold text-sm">5 Software Tools</span>
                <span className="px-4 py-2 bg-[#F8FAFC] text-[#00529B] border-2 border-[#00529B] font-bold text-sm">Cloud & Desktop</span>
                <span className="px-4 py-2 bg-[#F8FAFC] text-[#00529B] border-2 border-[#00529B] font-bold text-sm">Mobile Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Software Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0F172A] mb-2">Our Software Suite</h2>
              <p className="text-gray-600">Choose the right tool for your telematics needs</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {software.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="group bg-white border-2 border-gray-200 hover:border-[#00529B] p-8 flex flex-col transition-all hover:shadow-xl relative overflow-hidden"
                >
                  {/* Background accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#00529B] opacity-0 group-hover:opacity-5 transition-opacity"></div>
                  
                  {/* Number Badge */}
                  <div className="flex items-start justify-between mb-6 relative z-10">
                    <div className="flex items-center gap-4">
                      <span className="text-5xl font-black text-gray-100 group-hover:text-[#00529B] transition-colors">
                        {item.number}
                      </span>
                      <div className="w-14 h-14 bg-[#F8FAFC] border-2 border-gray-200 flex items-center justify-center group-hover:bg-[#00529B] group-hover:border-[#00529B] transition-all">
                        <svg className="w-7 h-7 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="mb-4 relative z-10">
                    <span className="px-3 py-1 bg-[#F8FAFC] text-[#00529B] text-xs font-bold border border-gray-200 group-hover:bg-[#00529B] group-hover:text-white group-hover:border-[#00529B] transition-all">
                      {item.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 relative z-10">
                    <h3 className="text-2xl font-bold text-[#0F172A] mb-4 group-hover:text-[#00529B] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 font-medium leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer Link */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-200 relative z-10">
                    <div className="flex items-center gap-2 text-[#00529B] font-bold text-sm group-hover:gap-4 transition-all">
                      <span>Learn More</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-[#F8FAFC] border border-gray-200 flex items-center justify-center group-hover:bg-[#00529B] group-hover:border-[#00529B] transition-all">
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-[#F8FAFC] border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#0F172A] mb-4">
                Why Choose Our Software?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Powerful tools designed for seamless integration and maximum efficiency
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Easy Integration",
                  description: "Seamlessly integrate with existing telematics infrastructure and workflows",
                  icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                },
                {
                  title: "Comprehensive Support",
                  description: "Extensive documentation and dedicated support for all software products",
                  icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                },
                {
                  title: "Regular Updates",
                  description: "Continuous improvements and feature updates to keep your tools current",
                  icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                }
              ].map((feature, idx) => (
                <div key={idx} className="bg-white p-8 border-2 border-gray-200 hover:border-[#00529B] transition-all group">
                  <div className="w-16 h-16 bg-[#00529B] flex items-center justify-center mb-6 group-hover:bg-[#003d74] transition-colors">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#00529B] transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SoftwareProductsPage;

