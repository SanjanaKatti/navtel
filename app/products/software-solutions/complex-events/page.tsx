import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";

const features = [
  {
    title: "Custom Logic Deployment",
    description:
      "Create and implement smart algorithms through an intuitive interface.",
  },
  {
    title: "Seamless Integration",
    description: "Support and incorporate third-party peripherals into projects.",
  },
  {
    title: "CAN-Based Automation",
    description:
      "Utilize CAN data to develop scripts and control vehicle functions.",
  },
];

const ComplexEventsPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />

      <main className="pt-20">
        <section className="py-20 md:py-24 bg-brand-light-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link
                href="/products/software-solutions"
                className="text-brand-primary hover:text-brand-deep font-medium mb-4 inline-block"
              >
                ← Back to Software Solutions
              </Link>
            </div>
            <div className="grid lg:grid-cols-[1.4fr_0.8fr] gap-12 items-start">
              <div>
                <p className="text-caption text-brand-primary mb-4">
                  COMPLEX EVENTS
                </p>
                <h1 className="text-h1 mb-6">
                  Advanced Tool for
                  <br />
                  Custom Tracker Logic
                </h1>
                <p className="text-body-lg max-w-3xl">
                  Take tracker configuration to the next level by designing
                  custom algorithms that fit your unique projects. Build
                  intelligent automation and optimize device performance with
                  ease.
                </p>
              </div>
              <div className="bg-white rounded-3xl border border-gray-200 p-8 lg:p-10 shadow-sm">
                <div className="h-16 w-16 rounded-2xl bg-brand-primary/15 flex items-center justify-center mb-6">
                  <span className="text-brand-primary font-black text-xs tracking-[0.2em]">
                    CE
                  </span>
                </div>
                <h2 className="text-h3 mb-3">Complex Events</h2>
                <p className="text-body-sm">
                  Build configurable event pipelines and execute custom response
                  logic directly on compatible trackers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-h2">
                Key <span className="text-brand-primary">Features</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-brand-light-3 rounded-3xl p-8 border border-gray-200"
                >
                  <h3 className="text-h3 text-brand-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-body">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20 md:pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-light-3 rounded-[2rem] p-8 md:p-10 text-center">
              <p className="text-h3 text-brand-primary">
                Complex Events empowers you to transform your tracker into a
                fully customizable solution tailored to your needs.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ComplexEventsPage;
