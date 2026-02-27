"use client";
import React, { useState, useEffect, useRef } from "react";
import LayoutContainer from "./LayoutContainer";
import Image from "next/image";

const AnimatedCounter = ({
  value,
  label,
}: {
  value: string;
  label: string;
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Parse the number and suffix
  const numericValue = parseInt(value.replace(/[^0-9]/g, "")) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 },
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTime: number | null = null;
    const duration = 2000; // 3 seconds

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Using easeOutQuad for a nice slow-down effect at the end
      const easeOutQuad = (t: number) => t * (2 - t);
      const currentCount = Math.floor(easeOutQuad(progress) * numericValue);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(numericValue);
      }
    };

    requestAnimationFrame(animate);
  }, [hasAnimated, numericValue]);

  return (
    <div ref={countRef} className="text-center">
      <p className="text-6xl md:text-7xl lg:text-[90px] xl:text-[120px] font-bold text-brand-navy mb-2">
        {count}
        {suffix}
      </p>
      <p className="text-xl md:text-2xl text-gray-500">{label}</p>
    </div>
  );
};

const stats = [
  { value: "20+", label: "Years in Industry" },
  { value: "3M", label: "Total Devices" },
  { value: "45+", label: "Countries Deployed" },
  { value: "3K", label: "Customers Worldwide" },
];

const partners = [
  { src: "/Navtelecom/logo_1.png", alt: "Partner logo 1" },
  { src: "/Navtelecom/logo_2.png", alt: "Partner logo 2" },
  { src: "/Navtelecom/logo_3.png", alt: "Partner logo 3" },
  { src: "/Navtelecom/logo_4.png", alt: "Partner logo 4" },
  { src: "/Navtelecom/logo_5.png", alt: "Partner logo 5" },
  { src: "/Navtelecom/logo_6.png", alt: "Partner logo 6" },
];

const faqs = [
  {
    q: "Where can I download the Configurator?",
    a: (
      <div className="space-y-4">
        <p>You can download the latest version of NTC Configurator here:</p>
        <a
          href="#"
          className="inline-block text-brand-primary font-bold hover:underline"
        >
          Get the latest version
        </a>
        <p className="text-sm text-gray-400 italic">
          Note: Available for Windows OS only.
        </p>
      </div>
    ),
  },
  {
    q: "How can I manage devices remotely?",
    a: (
      <div className="space-y-6">
        <div>
          <p className="font-bold text-brand-navy mb-1">SMS Commands</p>
          <p className="mb-2">
            Send direct commands to the device (e.g. APN, server, status,
            reboot).
          </p>
          <a
            href="#"
            className="text-[#28398c] text-sm font-bold hover:underline"
          >
            Full command list
          </a>
        </div>
        <div>
          <p className="font-bold text-brand-navy mb-1">
            Remote connection via NTC Configurator
          </p>
          <p className="mb-2">
            Connect to an online device via Internet, read/write config, update
            firmware.
          </p>
          <a
            href="#"
            className="text-[#28398c] text-sm font-bold hover:underline"
          >
            How it works
          </a>
        </div>
        <div>
          <p className="font-bold text-brand-navy mb-1">DRC Cloud Service</p>
          <p className="mb-2">
            Cloud-based platform for remote updates, config sync, diagnostics,
            and device health monitoring.
          </p>
          <a
            href="#"
            className="text-[#28398c] text-sm font-bold hover:underline"
          >
            Learn more
          </a>
        </div>
      </div>
    ),
  },
  {
    q: "Where can I find SMS/GPRS commands?",
    a: (
      <div className="space-y-4">
        <p>You can find the full list of SMS/GPRS commands here:</p>
        <a
          href="#"
          className="inline-block text-[#28398c] font-bold hover:underline"
        >
          Full command list
        </a>
        <div className="pt-2 border-t border-gray-100">
          If you need a complex combined command, please contact Technical
          Support at{" "}
          <a
            href="mailto:support@navtelecom.in"
            className="text-[#28398c] hover:underline"
          >
            support@navtelecom.in
          </a>
        </div>
      </div>
    ),
  },
  {
    q: "Where can I check supported vehicles for CAN decoding?",
    a: (
      <div className="space-y-4">
        <p>
          The list of supported vehicles and decoding files is available here:
        </p>
        <a
          href="#"
          className="inline-block text-[#28398c] font-bold hover:underline"
        >
          Supported vehicles list
        </a>
      </div>
    ),
  },
  {
    q: "How can I integrate Navtelecom devices with my system?",
    a: (
      <div className="space-y-4">
        <p>
          You can integrate Navtelecom devices with your system using the FLEX
          protocol.
        </p>
        <p>
          We provide documentation and developer consultations to support
          integration.
        </p>
      </div>
    ),
  },
];

const StatsAndFAQ = () => {
  return (
    <div className="bg-brand-light-3">
      {/* Stats Section */}
      <section className="py-24 border-b border-gray-200">
        <LayoutContainer>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, idx) => (
              <AnimatedCounter
                key={idx}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </LayoutContainer>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-white">
        <LayoutContainer className="text-center">
          <h2 className="text-h1 mb-12">OUR PARTNERS</h2>
          <div className="bg-brand-light-3 p-6 sm:p-8 md:p-10 border border-gray-200 rounded-2xl overflow-hidden">
            <div
              className="flex w-max items-center gap-10 sm:gap-14 md:gap-16"
              style={{ animation: "partnersMarquee 26s linear infinite" }}
            >
              {[...partners, ...partners].map((partner, idx) => (
                <div
                  key={`${partner.src}-${idx}`}
                  className="relative h-14 w-36 sm:h-16 sm:w-44 md:h-20 md:w-52 shrink-0"
                >
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    fill
                    className="object-contain grayscale hover:grayscale-0 transition duration-300"
                    sizes="(min-width: 768px) 208px, (min-width: 640px) 176px, 144px"
                  />
                </div>
              ))}
            </div>
          </div>
        </LayoutContainer>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <LayoutContainer className="text-center max-w-4xl">
          <h2 className="text-h1 mb-12 text-center">FAQs</h2>

          <div className="space-y-4 text-left">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-brand-light-3 border border-gray-200 px-6 sm:px-8 transition-all duration-200 open:shadow-sm rounded-xl"
              >
                <summary className="flex justify-between items-center cursor-pointer list-none py-6">
                  <span className="text-h3 group-hover:text-[#28398c] transition-colors pr-6">
                    {faq.q}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 bg-white border border-gray-300 flex items-center justify-center text-gray-400 group-open:bg-[#28398c] group-open:text-white group-open:border-[#28398c] transition-all rounded">
                    <svg
                      className="w-5 h-5 group-open:rotate-180 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </summary>
                <div className="text-body text-[#28398c] pb-8 pt-2 border-t border-gray-200 mt-2">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </LayoutContainer>
      </section>
      <style jsx>{`
        @keyframes partnersMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default StatsAndFAQ;

