import React from "react";
import LayoutContainer from "./LayoutContainer";

const tools = [
  {
    number: "01",
    name: "NTC Configurator",
    description: "Main PC tool for tracker setup",
    dark: false,
  },
  {
    number: "02",
    name: "Can Spy",
    description: "CAN bus Scanning & Decoding Toolchain",
    dark: true,
  },
  {
    number: "04",
    name: "DRC",
    description: "Cloud Device Management & Diagnostics Platform",
    dark: true,
  },
  {
    number: "03",
    name: "Complex Events",
    description: "Script-building tool to formulate tracker operation logic",
    dark: true,
  },
  {
    number: "05",
    name: "NTC Control",
    description: "Mobile app for quick on-side setup",
    dark: true,
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
          <div className="row-span-2 bg-[#F1F5F9] p-10 flex flex-col justify-between transition-all hover:shadow-lg border border-gray-200 rounded-2xl group">
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
              className="bg-[#1E293B] p-10 flex flex-col justify-between h-[280px] transition-all hover:shadow-lg hover:bg-[#0F172A] border border-gray-800 rounded-2xl group"
            >
              <div>
                <span className="text-h3 text-gray-500 block mb-6">
                  {tool.number}
                </span>
                <h3 className="text-h3 text-white mb-4">{tool.name}</h3>
              </div>
              <p className="text-body text-gray-400">{tool.description}</p>
            </div>
          ))}
        </div>
      </LayoutContainer>
    </section>
  );
};

export default ToolsSection;
