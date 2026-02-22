"use client";
import React from "react";
import { Check } from "phosphor-react";
import Link from "next/link";
import LayoutContainer from "../LayoutContainer";

interface ProductCard {
  name: string;
  series: string;
  connectivity: "2g" | "4g" | "LTE";
  specs: string[];
  buttonText: string;
  onButtonClick?: () => void;
  href?: string;
}

interface ProductCenterProps {
  heading: string;
  products: ProductCard[];
}

const ProductCenter: React.FC<ProductCenterProps> = ({ heading, products }) => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <LayoutContainer>
        <div className="text-center mb-12">
          <h2 className="text-h1 mb-3">{heading}</h2>
          <p className="text-body max-w-2xl mx-auto">
            Resources and tools for implementation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.05)] transition-all duration-500 flex flex-col items-center text-center group relative border-b-2 hover:border-brand-primary"
            >
              {/* Heading with fixed height */}
              <div className="min-h-[60px] flex items-center justify-center mb-2">
                <h3 className="text-h3 leading-tight">{product.name}</h3>
              </div>

              {/* Description with fixed height */}
              <div className="min-h-[80px] flex items-start justify-center mb-6 px-2">
                <p className="text-body-sm text-gray-400">{product.series}</p>
              </div>

              {/* Button with fixed position at bottom */}
              <div className="mt-auto w-full">
                {product.href ? (
                  <Link
                    href={product.href}
                    className="w-full py-3 rounded-xl font-black text-xs transition-all transform hover:-translate-y-1 active:scale-95 shadow-md bg-brand-navy text-white shadow-brand-navy/20 hover:bg-brand-primary flex items-center justify-center"
                  >
                    {product.buttonText}
                  </Link>
                ) : (
                  <button
                    onClick={product.onButtonClick}
                    className="w-full py-3 rounded-xl font-black text-xs transition-all transform hover:-translate-y-1 active:scale-95 shadow-md bg-brand-navy text-white shadow-brand-navy/20 hover:bg-brand-primary"
                  >
                    {product.buttonText}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </LayoutContainer>
    </section>
  );
};

export default ProductCenter;
