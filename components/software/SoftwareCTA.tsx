"use client";
import React from "react";

interface SoftwareCTAProps {
  title?: string;
  titleLines?: string[];
  subtitle?: string;
  items?: string[];
}

const SoftwareCTA: React.FC<SoftwareCTAProps> = ({
  title,
  titleLines,
  subtitle,
  items = [],
}) => {
  return (
    <div className="text-center my-12 md:my-16 max-w-3xl mx-auto">
      {titleLines && titleLines.length > 0 ? (
        <div className="space-y-2">
          {titleLines.map((line, i) => (
            <h3
              key={i}
              className="text-h2 text-brand-navy leading-tight"
            >
              {line}
            </h3>
          ))}
        </div>
      ) : title ? (
        <h3 className="text-h2 text-brand-navy leading-tight">{title}</h3>
      ) : null}
      {subtitle && (
        <p className="text-base md:text-lg text-gray-600 leading-relaxed mt-3">
          {subtitle}
        </p>
      )}
      {items.length > 0 && (
        <div className="mt-4 space-y-2">
          {items.map((item, i) => (
            <p
              key={i}
              className="text-base md:text-lg text-gray-600 leading-relaxed"
            >
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SoftwareCTA;
