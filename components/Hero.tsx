"use client";
import React from 'react';
import {
  ShareNetwork,
  Activity,
  Plug,
  GitBranch,
  WifiSlash,
  GearSix,
} from 'phosphor-react';

const Hero = () => {
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
    <section className="relative overflow-hidden bg-white">
      <div className="relative w-full overflow-hidden aspect-[4/5] max-h-[540px] sm:max-h-none sm:aspect-[3/2] lg:aspect-[16/9] 2xl:aspect-[3840/1646]">
        <picture className="absolute inset-0 block h-full w-full">
          <source
            media="(max-width: 639px)"
            srcSet="/Navtelecom/banner1_1080x1350.png"
          />
          <source
            media="(min-width: 640px) and (max-width: 1279px)"
            srcSet="/Navtelecom/banner1_2048x1365.png"
          />
          <source
            media="(min-width: 1280px) and (max-width: 1919px)"
            srcSet="/Navtelecom/banner1_2560x1440.png"
          />
          <source
            media="(min-width: 1920px)"
            srcSet="/Navtelecom/banner1_3840x1646.png"
          />
          <img
            src="/Navtelecom/banner1_2048x1365.png"
            alt="Navtelecom Hero"
            className="h-full w-full object-cover object-center"
            loading="eager"
          />
        </picture>

        <div className="absolute inset-0 z-10">
          <div className="h-full w-full max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-16">
            <div className="h-full flex items-start justify-start pt-[10%] sm:pt-[9%] lg:pt-[11%] 2xl:pt-[10%]">
              <div className="w-full max-w-[62%] sm:max-w-[56%] lg:max-w-[48%] 2xl:max-w-[44%] text-white">
                <h1 className="text-[clamp(1.4rem,4vw,5.2rem)] leading-[0.95] font-black tracking-tight uppercase">
                  Complex Events
                </h1>
                <p className="mt-2 sm:mt-3 text-[clamp(0.7rem,1.45vw,2rem)] font-medium tracking-[0.12em] uppercase text-white/90">
                  From Inputs to Intelligence.
                </p>

                <div className="mt-6 sm:mt-8 lg:mt-12 2xl:mt-16">
                  {featureItems.map((item, idx) => (
                    <div key={item.title}>
                      <div className="flex items-center gap-2.5 sm:gap-3 2xl:gap-4 py-2 sm:py-2.5 2xl:py-3.5">
                        <span className="text-[#0F3A62]">{item.icon}</span>
                        <p className="text-[clamp(0.58rem,1.2vw,1.15rem)] font-semibold tracking-[0.08em] uppercase text-white/90 leading-tight">
                          {item.title}
                        </p>
                      </div>
                      {idx < featureItems.length - 1 && (
                        <div className="h-px w-[52%] 2xl:w-[62%] bg-white/35 ml-6 sm:ml-7 2xl:ml-9" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

