"use client";
import React from "react";
import {
  Code,
  Plugs,
  Cpu,
} from "phosphor-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  SoftwareHero,
  SoftwareKeyFeatures,
  SoftwareContentBlock,
  SoftwareCTA,
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
          breadcrumb={{ label: "Software Solutions", href: "/products/software-solutions" }}
          backgroundClass="complex-events-hero-background"
          textColor="white"
        />

        <SoftwareKeyFeatures
          heading="Key Features"
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
            <SoftwareContentBlock
              title="Integrated Logic Module for NTC Configurator"
              titleFirst={true}
              content={{
                paragraphs: [
                  "Define device behavior through configurable on-device algorithms.",
                  "Complex Events allows you to control device logic at the interface and signal level.",
                ],
              }}
            />

            <SoftwareContentBlock
              title="What Complex Events Enables"
              content={{
                items: [
                  "Monitor parameters from any device interface",
                  "Use data from RS-232 and RS-485",
                  "Work with digital and analog inputs and outputs",
                  "Process CAN bus data",
                  "React to changes in real time",
                ],
              }}
            />

            <SoftwareContentBlock
              title="Interface-Level Control"
              titleFirst={true}
              content={{
                paragraphs: [
                  "The module allows you to build algorithms based on data received through:",
                ],
                items: [
                  "CAN",
                  "RS-232",
                  "RS-485",
                  "Any signals from inputs",
                  "Internal device parameters",
                ],
                highlight: {
                  line1: "Any parameter can become a condition.",
                  line2: "Any condition can trigger an action.",
                },
              }}
            />

            <SoftwareContentBlock
              title="Device Actions"
              content={{
                paragraphs: [
                  "When defined conditions are met, the device can:",
                ],
                items: [
                  "Activate an output line",
                  "Change internal state",
                  "Control external equipment",
                  "Execute local logic",
                ],
                highlight: {
                  line1: "All actions are processed inside the tracker, without server dependency.",
                },
              }}
            />

            <SoftwareContentBlock
              title="Working with CAN"
              titleFirst={true}
              content={{
                paragraphs: [
                  "Complex Events allows CAN data to be used not only for transmission to the server, but as part of device logic.",
                  "For example:",
                ],
                items: [
                  "Trigger actions based on specific CAN signals",
                  "React to defined CAN values",
                  "Control outputs based on vehicle data",
                ],
                highlight: {
                  line1: "This transforms the tracker from a passive data collector into an active system component.",
                },
              }}
            />
          </div>
        </section>

        <section className="pt-0 pb-20 md:pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SoftwareCTA
              title="Complex Events empowers you to transform your tracker into a fully customizable solution tailored to your needs."
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ComplexEventsPage;
