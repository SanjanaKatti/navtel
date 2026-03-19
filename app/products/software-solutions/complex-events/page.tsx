"use client";
import React from "react";
import { Code, Plugs, Cpu } from "phosphor-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  SoftwareHero,
  SoftwareKeyFeatures,
  SoftwareContentBlock,
  SoftwareCTA,
  SoftwareSidePanelContent,
} from "@/components/software";

const ComplexEventsPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />
      <main className="pt-20">
        <SoftwareHero
          title="Complex Events"
          subtitle="Advanced Tool for Custom Tracker Logic"
          tagline="Take tracker configuration to the next level by designing custom algorithms that fit your unique projects. Build intelligent automation and optimize device performance with ease."
          breadcrumb={{
            label: "Software Solutions",
            href: "/products/software-solutions",
          }}
          backgroundClass="complex-events-hero-background"
          textColor="white"
        />

        <SoftwareKeyFeatures
          heading="Key Features"
          scrollable
          features={[
            {
              title: "Custom Logic Deployment",
              desc: "Create and implement smart algorithms through an intuitive interface.",
              icon: <Code size={32} weight="bold" />,
            },
            {
              title: "Seamless Integration",
              desc: "Support and incorporate third-party peripherals into projects.",
              icon: <Plugs size={32} weight="bold" />,
            },
            {
              title: "CAN-Based Automation",
              desc: "Utilize CAN data to develop scripts and control vehicle functions.",
              icon: <Cpu size={32} weight="bold" />,
            },
          ]}
        />

        <section className="py-20 md:py-24 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SoftwareSidePanelContent
                sections={[
                  {
                    title: "Integrated Logic Module for NTC Configurator",
                    content: (
                      <p className="text-body text-gray-600">
                        Define device behavior through configurable on-device
                        algorithms. Complex Events allows you to control device
                        logic at the interface and signal level.
                      </p>
                    ),
                  },
                  {
                    title: "What Complex Events Enables",
                    content: (
                      <ul className="space-y-2 text-body text-gray-600 list-disc list-inside">
                        <li>Monitor parameters from any device interface</li>
                        <li>Use data from RS-232 and RS-485</li>
                        <li>Work with digital and analog inputs and outputs</li>
                        <li>Process CAN bus data</li>
                        <li>React to changes in real time</li>
                      </ul>
                    ),
                  },
                  {
                    title: "Interface-Level Control",
                    content: (
                      <>
                        <p className="text-body text-gray-600 mb-4">
                          The module allows you to build algorithms based on
                          data received through:
                        </p>
                        <ul className="space-y-2 text-body text-gray-600 list-disc list-inside mb-4">
                          <li>CAN</li>
                          <li>RS-232</li>
                          <li>RS-485</li>
                          <li>Any signals from inputs</li>
                          <li>Internal device parameters</li>
                        </ul>
                        <div className="mt-6 rounded-2xl bg-brand-navy/10 border border-brand-navy/20 p-4 text-brand-navy">
                          <p className="text-sm md:text-base text-brand-navy/90">
                            Any parameter can become a condition. Any condition
                            can trigger an action.
                          </p>
                        </div>
                      </>
                    ),
                  },
                  {
                    title: "Device Actions",
                    content: (
                      <>
                        <p className="text-body text-gray-600 mb-4">
                          When defined conditions are met, the device can:
                        </p>
                        <ul className="space-y-2 text-body text-gray-600 list-disc list-inside mb-4">
                          <li>Activate an output line</li>
                          <li>Change internal state</li>
                          <li>Control external equipment</li>
                          <li>Execute local logic</li>
                        </ul>
                        <div className="mt-6 rounded-2xl bg-brand-navy/10 border border-brand-navy/20 p-4 text-brand-navy">
                          <p className="text-sm md:text-base text-brand-navy/90">
                            All actions are processed inside the tracker,
                            without server dependency.
                          </p>
                        </div>
                      </>
                    ),
                  },
                  {
                    title: "Working with CAN",
                    content: (
                      <>
                        <p className="text-body text-gray-600 mb-4">
                          Complex Events allows CAN data to be used not only for
                          transmission to the server, but as part of device
                          logic. For example:
                        </p>
                        <ul className="space-y-2 text-body text-gray-600 list-disc list-inside mb-4">
                          <li>Trigger actions based on specific CAN signals</li>
                          <li>React to defined CAN values</li>
                          <li>Control outputs based on vehicle data</li>
                        </ul>
                        <div className="mt-6 rounded-2xl bg-brand-navy/10 border border-brand-navy/20 p-4 text-brand-navy">
                          <p className="text-sm md:text-base text-brand-navy/90">
                            This transforms the tracker from a passive data
                            collector into an active system component.
                          </p>
                        </div>
                      </>
                    ),
                  },
                  {
                    title: "Why It Matters",
                    content: (
                      <p className="text-body text-gray-600">
                        CAN monitoring provides visibility. CAN Script provides
                        interaction. Together, they turn CAN SPY into a complete
                        CAN engineering tool — from passive analysis to
                        controlled communication.
                      </p>
                    ),
                  },
                ]}
              />
            </div>
          </section>

        <section className="pt-0 pb-20 md:pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SoftwareCTA title="Complex Events empowers you to transform your tracker into a fully customizable solution tailored to your needs." />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ComplexEventsPage;
