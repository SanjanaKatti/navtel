import React from "react";
import LayoutContainer from "./LayoutContainer";

const tools = [
  {
    number: "01",
    name: "NTC Configurator",
    description: "Main PC tool for tracker setup",
    dark: false,
    cardClass: "bg-[#EAF4FF]",
  },
  {
    number: "02",
    name: "Can Spy",
    description: "CAN bus Scanning & Decoding Toolchain",
    dark: true,
    cardClass: "bg-[#2d57a4]",
  },
  {
    number: "04",
    name: "DRC",
    description: "Cloud Device Management & Diagnostics Platform",
    dark: true,
    cardClass: "bg-[#009ccc]",
  },
  {
    number: "03",
    name: "Complex Events",
    description: "Script-building tool to formulate tracker operation logic",
    dark: true,
    cardClass: "bg-[#1278be]",
  },
  {
    number: "05",
    name: "NTC Control",
    description: "Mobile app for quick on-side setup",
    dark: true,
    cardClass: "bg-[#52c3f1]",
  },
];

const ToolsSection = () => {
  return (
    <section className="py-24 bg-white">
      <LayoutContainer>
        <div className="flex flex-col justify-center items-center mb-16 gap-8">
          <p className="text-base md:text-lg font-bold uppercase tracking-[0.2em] text-gray-400 pt-2">
            DISCOVER OUR TOOLS
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-center max-w-none">
            Professional Tools for Configuration,
            <br />
            CAN Analysis & Cloud Control
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First tool is large/tall as seen in screenshot */}
          <div
            className={`row-span-2 ${tools[0].cardClass ?? "bg-[#F1F5F9]"} p-10 flex flex-col justify-between border border-gray-200 rounded-2xl group relative overflow-hidden transform-gpu motion-safe:animate-[toolCardIn_520ms_ease-out_both] motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-xl transition-[transform,box-shadow] duration-300`}
            style={{ animationDelay: "60ms" }}
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(900px_circle_at_20%_20%,rgba(50,190,240,0.18),transparent_55%)]" />
            <div>
              <span className="text-h3 text-gray-400 block mb-6">
                {tools[0].number}
              </span>
              <h3 className="text-h3 mb-4">{tools[0].name}</h3>
            </div>
            <p className="text-body">{tools[0].description}</p>
          </div>

          {/* Other tools */}
          {tools.slice(1).map((tool, idx) => (
            <div
              key={idx}
              className={`${tool.cardClass ?? "bg-[#1E293B]"} p-10 flex flex-col justify-between h-[280px] border border-transparent rounded-2xl group relative overflow-hidden transform-gpu motion-safe:animate-[toolCardIn_520ms_ease-out_both] motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-xl transition-[transform,box-shadow,filter] duration-300 hover:brightness-110`}
              style={{ animationDelay: `${120 + idx * 60}ms` }}
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(900px_circle_at_20%_20%,rgba(255,255,255,0.16),transparent_55%)]" />
              <div>
                <span className="text-h3 text-white/80 block mb-6">
                  {tool.number}
                </span>
                <h3 className="text-h3 text-white mb-4">{tool.name}</h3>
              </div>
              <p className="text-body text-white/80">{tool.description}</p>
            </div>
          ))}
        </div>
      </LayoutContainer>
    </section>
  );
};

export default ToolsSection;
