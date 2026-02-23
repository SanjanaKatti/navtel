"use client";
import React from "react";
import { Check } from "phosphor-react";
import LayoutContainer from "../LayoutContainer";

interface SpecItem {
  label: string;
  value: string | boolean;
}

interface SpecGroup {
  groupName: string;
  items: SpecItem[];
}

interface TechnicalSpecsProps {
  groups: SpecGroup[];
}

const TechnicalSpecs: React.FC<TechnicalSpecsProps> = ({ groups }) => {
  return (
    <section className="py-16 md:py-20 bg-[#F8FAFC]">
      <LayoutContainer className="max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-h1 mb-3">Technical Specifications</h2>
          <p className="text-body max-w-2xl mx-auto">Detailed hardware and software capabilities</p>
        </div>

        <div className="space-y-3">
          {groups.map((group, gIdx) => (
            <details 
              key={gIdx} 
              className="group bg-white border border-gray-100 rounded-xl shadow-sm transition-all duration-300 open:shadow-md"
            >
              <summary className="flex justify-between items-center cursor-pointer list-none p-5 sm:p-6">
                <h3 className="text-h3 flex items-center gap-3">
                  <div className="w-1 h-5 bg-brand-primary rounded-full"></div>
                  {group.groupName}
                </h3>
                <div className="text-brand-navy/30 group-hover:text-brand-primary transition-colors">
                  <svg className="w-5 h-5 transform transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-gray-50">
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 pt-4">
                  {group.items.map((item, iIdx) => (
                    <div key={iIdx} className="flex flex-col gap-1 border-l-2 border-brand-light-2 pl-3 py-0.5">
                      <span className="text-label">
                        {item.label}
                      </span>
                      <span className="text-body-sm font-bold text-brand-navy/80">
                        {typeof item.value === 'boolean' ? (
                          item.value ? (
                            <span className="text-brand-primary flex items-center gap-1.5">
                              <Check size={14} weight="bold" />
                              Supported
                            </span>
                          ) : 'Not available'
                        ) : item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </details>
          ))}
        </div>
      </LayoutContainer>
    </section>
  );
};

export default TechnicalSpecs;
