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

  const desktopCarousel = scrollable && features.length > 3;

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !desktopCarousel) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState);
    const ro = new ResizeObserver(updateScrollState);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      ro.disconnect();
    };
  }, [desktopCarousel, features.length]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const cardBase =
    "group p-6 sm:p-8 md:p-10 bg-[#F8FAFC] rounded-2xl sm:rounded-[2rem] border border-gray-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300";

  const renderCardInner = (
    feature: SoftwareFeature,
    headingClass: string,
    bodyClass = "text-sm sm:text-base",
  ) => (
    <>
      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-navy rounded-2xl flex items-center justify-center mb-5 sm:mb-6 text-white shadow-lg shadow-brand-navy/20 group-hover:bg-brand-primary transition-colors shrink-0">
        {feature.icon}
      </div>
      <h3
        className={`font-bold text-brand-navy mb-2 text-pretty ${headingClass}`}
      >
        {feature.title}
      </h3>
      {feature.sub && (
        <p className="text-caption text-brand-primary mb-2">{feature.sub}</p>
      )}
      <p className={`text-gray-500 leading-relaxed text-pretty ${bodyClass}`}>
        {feature.desc}
      </p>
    </>
  );

  return (
    <section className="pb-12 sm:py-16 md:py-20 lg:py-24 bg-white max-lg:pt-10">
      <LayoutContainer>
        <div className="text-center mb-8 sm:mb-10 lg:mb-12 px-1">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-brand-navy mb-3">
            {heading}
          </h2>
          {description && (
            <p className="text-body max-w-2xl mx-auto text-pretty">
              {description}
            </p>
          )}
        </div>

        {/* Mobile & tablet: touch horizontal scroll (does not affect lg+ desktop) */}
        {features.length >= 3 && (
          <div className="lg:hidden -mx-4 px-4 sm:-mx-6 sm:px-6 overflow-x-auto overscroll-x-contain snap-x snap-mandatory pb-3 [scrollbar-width:thin] [scrollbar-color:rgba(0,45,73,0.22)_transparent]">
            <div className="flex flex-row gap-4 sm:gap-6 w-max min-w-0 pr-2">
              {features.map((feature, idx) => (
                <div
                  key={`m-${idx}`}
                  className={`${cardBase} flex-none snap-start w-[min(20rem,88vw)] sm:w-[min(22rem,85vw)] md:w-[min(24rem,72vw)] min-h-[13rem] sm:min-h-[14rem]`}
                >
                  {renderCardInner(feature, "text-xl sm:text-2xl md:text-2xl")}
                </div>
              ))}
            </div>
          </div>
        )}

        {features.length > 0 && features.length < 3 && (
          <div className="lg:hidden flex flex-col gap-5 sm:gap-6">
            {features.map((feature, idx) => (
              <div key={`ms-${idx}`} className={cardBase}>
                {renderCardInner(feature, "text-xl sm:text-2xl")}
              </div>
            ))}
          </div>
        )}

        {/* Desktop (lg+): unchanged carousel or grid */}
        <div className="hidden lg:block">
          {desktopCarousel ? (
            <div className="flex items-center gap-4 max-w-7xl mx-auto">
              <button
                type="button"
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
                    className={`${cardBase} flex-shrink-0 w-[min(300px,calc((100%-4.5rem)/4))]`}
                  >
                    {renderCardInner(feature, "text-2xl", "text-body")}
                  </div>
                ))}
              </div>
              <button
                type="button"
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
            <div
              className={`grid md:grid-cols-2 ${features.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-3"} gap-6`}
            >
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className={`${cardBase} min-h-[16rem] lg:min-h-[17rem]`}
                >
                  {renderCardInner(
                    feature,
                    "text-2xl md:text-3xl",
                    "text-body",
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </LayoutContainer>
    </section>
  );
};

export default SoftwareKeyFeatures;
