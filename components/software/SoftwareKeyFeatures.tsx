"use client";
import React from "react";
import LayoutContainer from "../LayoutContainer";

export interface SoftwareFeature {
  title: string;
  sub?: string;
  desc: string;
  icon: React.ReactNode;
}

interface SoftwareKeyFeaturesProps {
  heading: string;
  features: SoftwareFeature[];
  description?: string;
}

const SoftwareKeyFeatures: React.FC<SoftwareKeyFeaturesProps> = ({
  heading,
  features,
  description,
}) => {
  return (
    <section className="py-20 md:py-24 bg-white">
      <LayoutContainer>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-brand-navy mb-3">
            {heading}
          </h2>
          {description && (
            <p className="text-body max-w-2xl mx-auto">{description}</p>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group p-8 md:p-10 bg-[#F8FAFC] rounded-[2rem] border border-gray-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-brand-navy rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-brand-navy/20 group-hover:bg-brand-primary transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-2">
                {feature.title}
              </h3>
              {feature.sub && (
                <p className="text-caption text-brand-primary mb-2">
                  {feature.sub}
                </p>
              )}
              <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </LayoutContainer>
    </section>
  );
};

export default SoftwareKeyFeatures;
