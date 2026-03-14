"use client";
import React, { useState, useEffect } from 'react';
import {
  ShareNetwork,
  Activity,
  Plug,
  GitBranch,
  WifiSlash,
  GearSix,
} from 'phosphor-react';

const Hero = () => {
  const heroBackgrounds = [
    "homepage-hero-bg-1",
    "homepage-hero-bg-2",
    "homepage-hero-bg-3",
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

  const featureItems = [
    {
      title: "VISUAL LOGIC BUILDER",
      icon: <ShareNetwork weight="regular" className="h-3.5 w-3.5 sm:h-4 sm:w-4 2xl:h-6 2xl:w-6" />,
    },
    {
      title: "REAL-TIME REACTIONS",
      icon: <Activity weight="regular" className="h-3.5 w-3.5 sm:h-4 sm:w-4 2xl:h-6 2xl:w-6" />,
    },
    {
      title: "3RD PARTY INTEGRATION",
      icon: <Plug weight="regular" className="h-3.5 w-3.5 sm:h-4 sm:w-4 2xl:h-6 2xl:w-6" />,
    },
    {
      title: "IF / THEN CONDITIONS",
      icon: <GitBranch weight="regular" className="h-3.5 w-3.5 sm:h-4 sm:w-4 2xl:h-6 2xl:w-6" />,
    },
    {
      title: "OFFLINE EXECUTION",
      icon: <WifiSlash weight="regular" className="h-3.5 w-3.5 sm:h-4 sm:w-4 2xl:h-6 2xl:w-6" />,
    },
    {
      title: "FULLY CUSTOMIZABLE",
      icon: <GearSix weight="regular" className="h-3.5 w-3.5 sm:h-4 sm:w-4 2xl:h-6 2xl:w-6" />,
    },
  ];

  return (
    <>
    <section
      className={`relative overflow-hidden bg-white h-[calc(100vh-5rem)] min-h-[calc(100dvh-5rem)] flex items-center product-background-image transition-background duration-1000 ease-in-out ${heroBackgrounds[currentBackgroundIndex]}`}
    >
      <div className="relative z-20 h-full w-full max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-16">
            <div className="h-full flex items-start justify-start pt-[10%] sm:pt-[9%] lg:pt-[11%] 2xl:pt-[10%]">
              <div className="w-full max-w-[62%] sm:max-w-[56%] lg:max-w-[48%] 2xl:max-w-[44%] text-white">
                <h1 className="text-[clamp(1.4rem,4vw,5.2rem)] leading-[0.95] font-black tracking-tight uppercase">
                  Complex Events
                </h1>
                <p className="mt-2 sm:mt-3 text-[clamp(0.7rem,1.45vw,2rem)] font-medium tracking-[0.12em] uppercase text-brand-navy">
                  From Inputs to Intelligence.
                </p>

                <div className="mt-6 sm:mt-8 lg:mt-12 2xl:mt-16">
                  {featureItems.map((item, idx) => (
                    <div key={item.title}>
                      <div className="flex items-center gap-2.5 sm:gap-3 2xl:gap-4 py-2 sm:py-2.5 2xl:py-3.5">
                        <span className="text-white">{item.icon}</span>
                        <p className="text-[clamp(0.58rem,1.2vw,1.15rem)] font-semibold tracking-[0.08em] uppercase text-brand-navy leading-tight">
                          {item.title}
                        </p>
                      </div>
                      {idx < featureItems.length - 1 && (
                        <div className="h-px w-[52%] 2xl:w-[62%] bg-brand-navy/35 ml-6 sm:ml-7 2xl:ml-9" />
                      )}
                    </div>
                  ))}
                </div>
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
