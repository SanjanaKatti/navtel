"use client";
import React, { useRef, useState, useEffect } from "react";
import LayoutContainer from "../LayoutContainer";
import { CaretLeft, CaretRight } from "phosphor-react";

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
  scrollable?: boolean;
}

const SoftwareKeyFeatures: React.FC<SoftwareKeyFeaturesProps> = ({
  heading,
  features,
  description,
  scrollable = false,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Determine if scrolling should be enabled based on prop and feature count
  const effectiveScrollable = scrollable && features.length > 3;

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(
      el.scrollLeft < el.scrollWidth - el.clientWidth - 1
    );
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !scrollable) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState);
    const ro = new ResizeObserver(updateScrollState);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      ro.disconnect();
    };
  }, [scrollable, features.length]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const cardClass =
    "group p-8 md:p-10 bg-[#F8FAFC] rounded-[2rem] border border-gray-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex-shrink-0";

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

        {effectiveScrollable ? (
          <div className="flex items-center gap-4 max-w-7xl mx-auto">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`flex-shrink-0 w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                canScrollLeft
                  ? "bg-white shadow-lg border-gray-200 text-brand-navy hover:bg-brand-navy hover:text-white hover:border-brand-navy"
                  : "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed"
              }`}
              aria-label="Scroll left"
            >
              <CaretLeft size={24} weight="bold" />
            </button>
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4 flex-1 min-w-0"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {features.map((feature, idx) => (
                <div
                  key={idx}
                          className="group p-8 md:p-10 bg-[#F8FAFC] rounded-[2rem] border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300 flex-shrink-0 w-[min(300px,calc((100%-4.5rem)/4))]"

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
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`flex-shrink-0 w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                canScrollRight
                  ? "bg-white shadow-lg border-gray-200 text-brand-navy hover:bg-brand-navy hover:text-white hover:border-brand-navy"
                  : "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed"
              }`}
              aria-label="Scroll right"
            >
              <CaretRight size={24} weight="bold" />
            </button>
          </div>
        ) : (
          <div className={`grid md:grid-cols-2 ${features.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-3"} gap-6`}>
            {features.map((feature, idx) => (
              <div key={idx} className={cardClass}>
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
        )}
      </LayoutContainer>
    </section>
  );
};

export default SoftwareKeyFeatures;
