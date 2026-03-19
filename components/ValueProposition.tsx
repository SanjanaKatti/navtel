import React from "react";
import LayoutContainer from "./LayoutContainer";

const ValueProposition = () => {
  return (
    <section className="py-16 md:py-24 bg-[#EFEFEF]">
      <LayoutContainer className="text-center">
        <p className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-[0.2em] text-[#004A8C] mb-2 md:mb-3">
          POWERED BY NAVTELECOM
        </p>
        <h2 className="text-h1 px-2 sm:px-0 font-bold tracking-tight leading-tight text-brand-navy mb-6 md:mb-8 max-w-6xl mx-auto">
          <span className="block md:whitespace-nowrap">
            Powerful solutions for integrators.
          </span>
          <span className="block md:whitespace-nowrap">
            <span
              className="font-bold animated-fleet-text"
              style={{
                transition: "color 220ms ease-in-out",
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
