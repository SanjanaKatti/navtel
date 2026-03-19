"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ShareNetwork,
  Activity,
  Plug,
  GitBranch,
  WifiSlash,
  GearSix,
  Bluetooth,
  BatteryCharging,
  SimCard,
  LinkSimple,
  ArrowsLeftRight,
  CurrencyDollar,
  Clock,
  ArrowsInSimple,
} from "phosphor-react";

const Hero = () => {
  const heroBackgrounds = [
    "homepage-hero-bg-1",
    "homepage-hero-bg-2",
    "homepage-hero-bg-3",
  ];

  const slides = [
    {
      id: "complex-events",
      title: "Complex Events",
      subtitle: "From Inputs to Intelligence.",
      features: [
        "VISUAL LOGIC BUILDER",
        "REAL-TIME REACTIONS",
        "3RD PARTY INTEGRATION",
        "IF / THEN CONDITIONS",
        "OFFLINE EXECUTION",
        "FULLY CUSTOMIZABLE",
      ],
      button: {
        label: "Learn More",
        href: "/products/software-solutions/complex-events",
      },
    },
    {
      id: "smart-s-4513",
      title: "SMART S-4513",
      subtitle: "New platform. Built for tomorrow. Available today.",
      features: [
        "4G • DUAL SIM",
        "RS-485 • 1-WIRE • MODBUS • BLUETOOTH",
        "5 IN / 2 OUT",
        "BACKUP BATTERY",
        "COMPLEX EVENTS",
      ],
      button: {
        label: "Discover",
        href: "/products/tracking-devices/smart-series/s-4513",
      },
    },
    {
      id: "start-s-2011",
      title: "OUR BEST SELLER START S-2011",
      subtitle: "Compact. Connected. Controlled.",
      features: [
        "ULTRA-COMPACT",
        "WORKS WITH ANY BLE SENSOR",
        "BACKUP BATTERY",
        "COST-EFFECTIVE",
        "ENGINE HOURS CALCULATION",
      ],
      button: {
        label: "Explore",
        href: "/products/tracking-devices/start-series/s-2011",
      },
    },
  ];

  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackgroundIndex(
        (prevIndex) => (prevIndex + 1) % heroBackgrounds.length,
      );
    }, 3000); // 3 seconds delay
    return () => clearInterval(interval);
  }, [heroBackgrounds.length]);

  const featureIcons = [
    <ShareNetwork
      key="share"
      weight="regular"
      className="h-3.5 w-3.5 sm:h-4 sm:w-4 2xl:h-6 2xl:w-6"
    />,
    <Activity
      key="activity"
      weight="regular"
      className="h-3.5 w-3.5 sm:h-4 sm:w-4 2xl:h-6 2xl:w-6"
    />,
    <Plug
      key="plug"
      weight="regular"
      className="h-3.5 w-3.5 sm:h-4 sm:w-4 2xl:h-6 2xl:w-6"
    />,
    <GitBranch
      key="branch"
      weight="regular"
      className="h-3.5 w-3.5 sm:h-4 sm:w-4 2xl:h-6 2xl:w-6"
    />,
    <WifiSlash
      key="wifi"
      weight="regular"
      className="h-3.5 w-3.5 sm:h-4 sm:w-4 2xl:h-6 2xl:w-6"
    />,
    <GearSix
      key="gear"
      weight="regular"
      className="h-3.5 w-3.5 sm:h-4 sm:w-4 2xl:h-6 2xl:w-6"
    />,
  ];

  const currentSlide = slides[currentBackgroundIndex];
  const isComplexEvents = currentSlide.id === "complex-events";
  const isStart2011 = currentSlide.id === "start-s-2011";
  const isSmart4513 = currentSlide.id === "smart-s-4513";

  const iconForFeature = (slideId: string, feature: string) => {
    const sizeClass = "h-4 w-4 sm:h-4.5 sm:w-4.5 2xl:h-6 2xl:w-6";

    if (slideId === "start-s-2011") {
      if (feature === "ULTRA-COMPACT")
        return <ArrowsInSimple weight="regular" className={sizeClass} />;
      if (feature === "WORKS WITH ANY BLE SENSOR")
        return <Bluetooth weight="regular" className={sizeClass} />;
      if (feature === "BACKUP BATTERY")
        return <BatteryCharging weight="regular" className={sizeClass} />;
      if (feature === "COST-EFFECTIVE")
        return <CurrencyDollar weight="regular" className={sizeClass} />;
      if (feature === "ENGINE HOURS CALCULATION")
        return <Clock weight="regular" className={sizeClass} />;
    }

    if (slideId === "smart-s-4513") {
      if (feature === "4G • DUAL SIM")
        return <SimCard weight="regular" className={sizeClass} />;
      if (feature === "RS-485 • 1-WIRE • MODBUS • BLUETOOTH")
        return <LinkSimple weight="regular" className={sizeClass} />;
      if (feature === "5 IN / 2 OUT")
        return <ArrowsLeftRight weight="regular" className={sizeClass} />;
      if (feature === "BACKUP BATTERY")
        return <BatteryCharging weight="regular" className={sizeClass} />;
      if (feature === "COMPLEX EVENTS")
        return <ShareNetwork weight="regular" className={sizeClass} />;
    }

    return null;
  };

  return (
    <>
      <section
        className={`relative overflow-hidden bg-white h-[calc(100vh-5rem)] min-h-[calc(100dvh-5rem)] flex items-center product-background-image ${heroBackgrounds[currentBackgroundIndex]}`}
      >
        <div className="relative z-20 h-full w-full max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-16">
          <div className="h-full flex items-start justify-start pt-[10%] sm:pt-[9%] lg:pt-[11%] 2xl:pt-[10%]">
            <div
              className={`w-full ${
                isComplexEvents
                  ? "max-w-[62%] sm:max-w-[56%] lg:max-w-[48%] 2xl:max-w-[44%]"
                  : isStart2011
                    ? "max-w-[78%] sm:max-w-[72%] lg:max-w-[64%] 2xl:max-w-[60%]"
                    : isSmart4513
                      ? "max-w-[72%] sm:max-w-[66%] lg:max-w-[58%] 2xl:max-w-[54%]"
                      : "max-w-[62%] sm:max-w-[56%] lg:max-w-[48%] 2xl:max-w-[44%]"
              }`}
            >
              <h1
                className={`leading-[0.95] font-black tracking-tight uppercase ${
                  isComplexEvents
                    ? "text-[clamp(1.4rem,4vw,5.2rem)] text-white"
                    : isStart2011
                      ? "text-[clamp(1.2rem,3.2vw,4.2rem)] text-brand-navy whitespace-nowrap"
                      : "text-[clamp(1.4rem,4vw,5.2rem)] text-brand-navy"
                }`}
              >
                {currentSlide.title}
              </h1>
              <p
                className={`mt-2 sm:mt-3 text-[clamp(0.7rem,1.45vw,2rem)] font-medium tracking-[0.12em] uppercase ${
                  isComplexEvents ? "text-white" : "text-brand-navy"
                }`}
              >
                {currentSlide.subtitle}
              </p>

              <div className="mt-6 sm:mt-8 lg:mt-12 2xl:mt-16">
                {currentSlide.features.map((feature, idx) => {
                  const icon =
                    iconForFeature(currentSlide.id, feature) ??
                    featureIcons[idx] ??
                    null;

                  const textClass = isComplexEvents
                    ? "text-white"
                    : "text-brand-navy";
                  const dividerClass = isComplexEvents
                    ? "bg-white/35"
                    : "bg-brand-navy/25";
                  const dividerWidthClass = isComplexEvents
                    ? "w-[52%] 2xl:w-[62%]"
                    : "w-[46%] 2xl:w-[52%]";

                  return (
                    <div key={feature}>
                      <div className="flex items-center gap-2.5 sm:gap-3 2xl:gap-4 py-2 sm:py-2.5 2xl:py-3.5">
                        {icon && <span className={textClass}>{icon}</span>}
                        <p
                          className={`text-[clamp(0.58rem,1.2vw,1.15rem)] font-semibold tracking-[0.08em] uppercase leading-tight ${textClass}`}
                        >
                          {feature}
                        </p>
                      </div>
                      {idx < currentSlide.features.length - 1 && (
                        <div
                          className={`h-px ${dividerWidthClass} ml-6 sm:ml-7 2xl:ml-9 ${dividerClass}`}
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              {currentSlide.button && (
                <div className="mt-8 sm:mt-10 lg:mt-14 2xl:mt-20">
                  <Link
                    href={currentSlide.button.href}
                    className={`inline-flex items-center justify-center w-[30%] rounded-full px-10 py-3 font-bold text-sm shadow-lg transition-all transform hover:-translate-y-1 active:scale-95
                      ${
                        currentBackgroundIndex === 0
                          ? "bg-white text-[#7fc1e5] hover:bg-white/90"
                          : "bg-[#515254] text-white hover:bg-gray-700"
                      }`}
                  >
                    {currentSlide.button.label}
                  </Link>
                </div>
              )}
            </div>
          </div>
          {/* Carousel Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
            {heroBackgrounds.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full bg-white transition-all duration-300 ${index === currentBackgroundIndex ? "scale-150 opacity-100" : "opacity-50 hover:opacity-80"}`}
                onClick={() => setCurrentBackgroundIndex(index)}
              ></button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
