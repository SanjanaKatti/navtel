"use client";
import React, { useState } from "react";

interface SoftwareSidePanelContentProps {
  sections: {
    title: string;
    content: React.ReactNode;
  }[];
}

const SoftwareSidePanelContent: React.FC<SoftwareSidePanelContentProps> = ({
  sections,
}) => {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  return (
        <div className="flex flex-col lg:flex-row gap-8 relative overflow-x-hidden">
      {/* Left Panel: Section Headings */}
      <div className="lg:w-1/3 flex-shrink-0">
        <ul className="space-y-2">
          {sections.map((section, index) => (
            <li key={section.title}>
              <button
                onClick={() => setActiveSectionIndex(index)}
                className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-200 flex justify-between items-center
                  ${
                    index === activeSectionIndex
                      ? "bg-[#002d49] text-white shadow-lg"
                      : "bg-white text-[#002d49] hover:bg-gray-100"
                  }`}
              >
                <span className="text-lg font-semibold">{section.title}</span>
                <svg
                  className={`w-5 h-5 transition-transform ${index === activeSectionIndex ? "rotate-90" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Mobile: Inline content expansion */}
              <div
                className={`lg:hidden mt-2 px-4 py-3 bg-white rounded-xl text-gray-700
                  ${index === activeSectionIndex ? "block" : "hidden"}`}
              >
                {sections[index].content}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Panel: Content (Desktop Only) */}
      <div
        key={activeSectionIndex} // Key changes to force re-render and trigger transition
        className="hidden lg:block lg:flex-1 bg-white shadow-sm rounded-2xl p-8 transition-transform duration-300 ease-out transform translate-x-0"
      >
        {sections[activeSectionIndex].content}
      </div>
    </div>
  );
};

export default SoftwareSidePanelContent;
