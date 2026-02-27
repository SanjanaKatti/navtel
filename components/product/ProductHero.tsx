"use client";
import React from "react";
import LayoutContainer from "../LayoutContainer";

interface ProductHeroProps {
  title: string;
  subtitle: string;
  description: string[];
  buttonText: string;
  onButtonClick?: () => void;
  visual?: React.ReactNode;
  badge?: string;
  rightText?: string;
}

const ProductHero: React.FC<ProductHeroProps> = ({
  title,
  subtitle,
  description,
  buttonText,
  onButtonClick,
  visual,
  badge,
  rightText,
}) => {
  return (
    <section className="bg-[#EFEFEF] overflow-hidden min-h-[calc(100dvh-5rem)] flex flex-col justify-center py-8 md:py-12">
      {/* Full-width hero: override LayoutContainer's max-width for this section */}
      <LayoutContainer className="max-w-none px-0 w-full flex-1 flex items-center">
        <div className="grid lg:grid-cols-[1.2fr_1.6fr_0.8fr] gap-8 lg:gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h1 className="flex flex-col">
                <span className="text-h3 opacity-80 uppercase tracking-widest mb-1">
                  {subtitle}
                </span>
                <span className="text-display text-brand-primary drop-shadow-sm">
                  {title}
                </span>
              </h1>
            </div>
            <div className="space-y-2 max-w-sm">
              {description.map((text, idx) => (
                <p key={idx} className="text-body">
                  {text}
                </p>
              ))}
            </div>
            <button
              onClick={onButtonClick}
              className="bg-brand-navy text-white px-8 py-3.5 rounded-full font-black text-base hover:bg-brand-primary transition-all shadow-lg shadow-brand-navy/20 transform hover:-translate-y-1"
            >
              {buttonText}
            </button>
          </div>

          {/* Middle Visual - fixed height so image scales to fit on any screen, no zoom/crop */}
          <div className="relative flex justify-center items-center w-full h-[clamp(18rem,48vw,38rem)] min-h-[18rem] shrink-0">
            <div className="w-full h-full max-w-2xl flex items-center justify-center [&>*]:max-h-full [&>*]:max-w-full">
              {visual}
            </div>
          </div>

          {/* Right Text Accent */}
          <div className="lg:text-right hidden md:block">
            <h2 className="text-display flex flex-col items-end opacity-40">
              <span className="text-brand-primary">
                {rightText?.split(" ")[0]}
              </span>
              <span className="text-brand-primary/80">
                {rightText?.split(" ")[1]}
              </span>
            </h2>
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
};

export default ProductHero;
