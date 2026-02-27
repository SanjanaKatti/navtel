"use client";

import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";
import Image from "next/image";

const features = [
  {
    title: "Custom Logic Deployment",
    description:
      "Create and implement smart algorithms through an intuitive interface.",
  },
  {
    title: "Seamless Integration",
    description:
      "Support and incorporate third-party peripherals into projects.",
  },
  {
    title: "CAN-Based Automation",
    description:
      "Utilize CAN data to develop scripts and control vehicle functions.",
  },
];

const enablesItems = [
  "Monitor parameters from any device interface",
  "Use data from RS-232 and RS-485",
  "Work with digital and analog inputs and outputs",
  "Process CAN bus data",
  "React to changes in real time",
];

const interfaceItems = [
  "CAN",
  "RS-232",
  "RS-485",
  "Any signals from inputs",
  "Internal device parameters",
];

const actionItems = [
  "Activate an output line",
  "Change internal state",
  "Control external equipment",
  "Execute local logic",
];

const canUseCases = [
  "Trigger actions based on specific CAN signals",
  "React to defined CAN values",
  "Control outputs based on vehicle data",
];

const ComplexEventsPage = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);

  useEffect(() => {
    if (isAutoScrollPaused) return;

    const node = carouselRef.current;
    if (!node) return;

    const interval = window.setInterval(() => {
      const firstCard = node.firstElementChild as HTMLElement | null;
      if (!firstCard) return;

      const cardWidth = firstCard.getBoundingClientRect().width;
      const styles = window.getComputedStyle(node);
      const gap = Number.parseFloat(styles.columnGap || styles.gap || "0") || 0;
      const step = cardWidth + gap;
      const maxScrollLeft = node.scrollWidth - node.clientWidth;
      const nextLeft = node.scrollLeft + step;

      if (nextLeft >= maxScrollLeft - 2) {
        node.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }

      node.scrollTo({ left: nextLeft, behavior: "smooth" });
    }, 2800);

    return () => window.clearInterval(interval);
  }, [isAutoScrollPaused]);

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />

      <main className="pt-20">
        <section className="py-20 md:py-24 bg-brand-light-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link
                href="/products/software-solutions"
                className="text-[#28398c] hover:text-brand-deep font-medium mb-4 inline-block"
              >
                ← Back to Software Solutions
              </Link>
            </div>
            <div className="grid lg:grid-cols-[1.4fr_0.8fr] gap-8 lg:gap-12 items-start">
              <div>
                <p className="text-base md:text-lg font-black uppercase tracking-[0.2em] text-[#28398c] mb-4 md:mb-6 md:whitespace-nowrap">
                  COMPLEX EVENTS
                </p>
                <h1 className="text-h1 mb-6">
                  Advanced Tool for Custom Tracker Logic
                </h1>
                <p className="text-body-lg max-w-3xl">
                  Take tracker configuration to the next level by designing
                  custom algorithms that fit your unique projects. Build
                  intelligent automation and optimize device performance with
                  ease.
                </p>
              </div>
              <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 lg:p-10 shadow-sm">
                <div className="relative h-32 sm:h-36 lg:h-40 w-full mb-6 rounded-2xl bg-brand-light-3 overflow-hidden">
                  <Image
                    src="/Navtelecom/complex_events.svg"
                    alt="Complex Events"
                    fill
                    className="object-contain p-3"
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 40vw, 80vw"
                  />
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
            <div className="mb-12 text-center">
              <h2 className="text-h2 inline-block">Key Features</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-brand-light-3 rounded-3xl p-8 border border-gray-200"
                >
                  <h3 className="text-h3 text-[#28398c] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-body">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20 md:pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="bg-brand-light-3 text-center rounded-3xl border border-gray-200 p-8 md:p-10">
              <p className="text-base md:text-lg font-bold uppercase tracking-[0.2em] text-[#28398c] mb-3 md:whitespace-nowrap">
                COMPLEX EVENTS
              </p>
              <h2 className="text-h2 mb-4">
                Integrated Logic Module for NTC Configurator
              </h2>
              <p className="text-body-lg mb-4">
                Define device behavior through configurable on-device
                algorithms.
              </p>
              <p className="text-body">
                Complex Events allows you to control device logic at the
                interface and signal level.
              </p>
            </div>

            <div
              ref={carouselRef}
              onClick={() => setIsAutoScrollPaused(true)}
              className="grid grid-flow-col auto-cols-[92%] sm:auto-cols-[78%] lg:auto-cols-[calc((100%-1rem)/2)] gap-4 overflow-x-auto pb-2 snap-x snap-mandatory"
            >
              <div className="snap-start bg-[#1E293B] rounded-3xl border border-white/10 p-8 text-white">
                <h3 className="text-h3 text-white mb-4">
                  What Complex Events Enables
                </h3>
                <p className="text-body text-white mb-4">This means you can:</p>
                <ul className="space-y-2 text-body text-white">
                  {enablesItems.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/80 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="snap-start bg-[#1E293B] rounded-3xl border border-white/10 p-8 text-white">
                <h3 className="text-h3 text-white mb-4">
                  Interface-Level Control
                </h3>
                <p className="text-body text-white mb-4">
                  The module allows you to build algorithms based on data
                  received through:
                </p>
                <ul className="space-y-2 text-body text-white mb-5">
                  {interfaceItems.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/80 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="rounded-2xl bg-white/10 border border-white/20 p-4">
                  <p className="text-body-sm text-white">
                    Any parameter can become a condition.
                  </p>
                  <p className="text-body-sm text-white">
                    Any condition can trigger an action.
                  </p>
                </div>
              </div>

              <div className="snap-start bg-[#1E293B] rounded-3xl border border-white/10 p-8 text-white">
                <h3 className="text-h3 text-white mb-4">Device Actions</h3>
                <p className="text-body text-white mb-4">
                  When defined conditions are met, the device can:
                </p>
                <ul className="space-y-2 text-body text-white mb-5">
                  {actionItems.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/80 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-body-sm text-white">
                  All actions are processed inside the tracker, without server
                  dependency.
                </p>
              </div>

              <div className="snap-start bg-[#1E293B] rounded-3xl border border-white/10 p-8 text-white">
                <h3 className="text-h3 text-white mb-4">Working with CAN</h3>
                <p className="text-body text-white mb-4">
                  Complex Events allows CAN data to be used not only for
                  transmission to the server, but as part of device logic.
                </p>
                <p className="text-body text-white mb-3">For example:</p>
                <ul className="space-y-2 text-body text-white mb-5">
                  {canUseCases.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/80 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-body-sm text-white">
                  This transforms the tracker from a passive data collector into
                  an active system component.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 md:pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-light-3 rounded-[2rem] p-8 md:p-10 text-center">
              <p className="text-h3 text-[#28398c]">
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
