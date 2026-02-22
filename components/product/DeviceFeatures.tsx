"use client";
import React from "react";
import LayoutContainer from "../LayoutContainer";

interface Feature {
  title: string;
  sub?: string;
  desc: string;
  icon: React.ReactNode;
}

interface DeviceFeaturesProps {
  heading: string;
  highlightedHeading: string;
  description: string;
  features: Feature[];
}

const DeviceFeatures: React.FC<DeviceFeaturesProps> = ({
  heading,
  highlightedHeading,
  description,
  features,
}) => {
  return (
    <section className="py-16 md:py-20 bg-white rounded-t-[2.5rem] shadow-2xl relative z-10 -mt-8">
      <LayoutContainer>
        <div className="text-center mb-12">
          <h2 className="text-h1 mb-3">
            {heading}{" "}
            <span className="text-brand-primary">{highlightedHeading}</span>
          </h2>
          {description && (
            <p className="text-body max-w-2xl mx-auto">{description}</p>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group p-6 md:p-8 bg-[#F8FAFC] rounded-[1.5rem] border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-6 right-6 text-gray-300 group-hover:text-brand-primary transition-colors duration-500 scale-90 md:scale-100">
                {feature.icon}
              </div>
              <div className="pt-2">
                <h3 className="text-h3 mb-1">{feature.title}</h3>
                {feature.sub && (
                  <p className="text-caption text-brand-primary mb-2">
                    {feature.sub}
                  </p>
                )}
                <p className="text-body-sm">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </LayoutContainer>
    </section>
  );
};

export default DeviceFeatures;
