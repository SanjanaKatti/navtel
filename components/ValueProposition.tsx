import React from "react";
import LayoutContainer from "./LayoutContainer";

const ValueProposition = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-light-3">
      <LayoutContainer className="text-center">
        <p className="text-base md:text-lg font-bold text-brand-navy uppercase tracking-[0.2em] mb-4 md:mb-6 md:whitespace-nowrap">
          POWERED BY NAVTELECOM
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-brand-navy mb-6 md:mb-8 max-w-6xl mx-auto">
          <span className="block md:whitespace-nowrap">
            Powerful solutions for integrators.
          </span>
          <span className="block md:whitespace-nowrap">
            <span
              className="font-bold bg-gradient-to-r from-[#002d49] to-[#32bef0] bg-clip-text text-transparent"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Reliable tracking for every fleet.
            </span>
          </span>
        </h2>
        <p className="text-base md:text-lg font-bold text-brand-navy max-w-4xl mx-auto leading-relaxed md:whitespace-nowrap">
          From GPS Tracking to CAN Diagnostics. Built for Integrators, Trusted
          Worldwide.
        </p>
      </LayoutContainer>
    </section>
  );
};

export default ValueProposition;
