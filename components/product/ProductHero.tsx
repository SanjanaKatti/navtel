"use client";
import React from "react";

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
  rightText
}) => {
  return (
    <section className="py-12 md:py-16 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.2fr_1.5fr_0.8fr] gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h1 className="flex flex-col">
                <span className="text-h3 opacity-80 uppercase tracking-widest mb-1">{subtitle}</span>
                <span className="text-display text-brand-primary drop-shadow-sm">{title}</span>
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
              className="bg-brand-navy text-white px-8 py-3.5 rounded-xl font-black text-base hover:bg-brand-primary transition-all shadow-lg shadow-brand-navy/20 transform hover:-translate-y-1"
            >
              {buttonText}
            </button>
          </div>

          {/* Middle Visual */}
          <div className="relative flex justify-center scale-90 md:scale-100">
            {visual}
          </div>

          {/* Right Text Accent */}
          <div className="lg:text-right hidden md:block">
            <h2 className="text-display flex flex-col items-end opacity-10">
              <span className="text-brand-primary">{rightText?.split(' ')[0]}</span>
              <span>{rightText?.split(' ')[1]}</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
