import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";
import LayoutContainer from "@/components/LayoutContainer";

const SoftwareSolutionsPage = () => {
  const software = [
    {
      name: "NTC Configurator",
      description: "Full control over device settings, live telemetry, and remote configuration in one professional tool.",
      href: "/products/software-solutions/ntc-configurator",
      category: "Configuration",
      icon: "/Navtelecom/CFG.svg",
    },
    {
      name: "Can Spy",
      description: "Capture, analyze, and validate CAN data directly from the vehicle for in-depth diagnostics.",
      href: "/products/software-solutions/can-spy",
      category: "Diagnostics",
      icon: "/Navtelecom/Can_spy.svg",
    },
    {
      name: "Complex Events",
      description: "Design custom algorithms for intelligent automation and optimized device performance.",
      href: "/products/software-solutions/complex-events",
      category: "Automation",
      icon: "/Navtelecom/complex_events.svg",
    },
    {
      name: "DRC",
      description: "Control, update, and manage thousands of devices from a single web interface for scalable operations.",
      href: "/products/software-solutions/drc",
      category: "Cloud Platform",
      icon: "/Navtelecom/DRC.svg",
    },
    {
      name: "NTC Control",
      description: "Configure and validate Navtelecom devices directly from your smartphone for efficient on-site setup.",
      href: "/products/software-solutions/ntc-control",
      category: "Mobile App",
      icon: "/Navtelecom/NTC_control.svg",
    },
    {
      name: "Eco Driving",
      description: "Analyze driving behavior using motion sensors and vehicle telemetry to improve fleet safety and efficiency.",
      href: "/products/software-solutions/eco-driving",
      category: "Analytics",
      icon: "",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />

      <main className="pt-20">
        <section className="relative h-60 md:h-80 lg:h-96 flex items-center overflow-hidden software-solutions-hero-background">
          <LayoutContainer>
            <div className="text-center max-w-3xl mx-auto z-10">
              <p className="text-base md:text-lg font-bold uppercase tracking-[0.2em] text-white mb-4">
                SOFTWARE SOLUTIONS
              </p>
              <h1 className="text-h1 mb-5 text-white md:whitespace-nowrap">Professional Software Solutions</h1>
              <p className="text-body-lg text-white/90">
                Comprehensive suite of software tools for device configuration,
                management, and advanced telematics operations.
              </p>
            </div>
          </LayoutContainer>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
              {software.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="bg-white rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 p-8 flex flex-col relative"
                >
                  <div className="absolute top-8 right-8 transition-opacity">
                    {item.icon && <img src={item.icon} alt={`${item.name} icon`} className="w-10 h-10 object-contain" />}
                  </div>
                  <h2 className="text-h3 mb-3 text-[#28398c]">{item.name}</h2>
                  <p className="text-body mb-8 flex-1">{item.description}</p>
                  <div className="inline-flex items-center justify-center bg-brand-navy text-white rounded-full px-8 py-3 font-bold text-sm hover:bg-brand-primary transition-all">
                    Learn More
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
