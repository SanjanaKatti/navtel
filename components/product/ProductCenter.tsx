"use client";
import React from "react";
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
    <section className="pt-12 pb-8 md:pt-12 md:pb-20 bg-white">
      <LayoutContainer>
        <div className="text-center mb-12">
          <h2 className="text-h1 mb-3">{heading}</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Resources and tools for implementation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-gray-50/50 p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center group relative"
            >
              {/* Heading with fixed height for alignment */}
              <div className="min-h-[72px] flex items-center justify-center mb-3">
                <h3 className="text-h3 leading-tight text-brand-navy">
                  {product.name}
                </h3>
              </div>

              {/* Description with fixed height for consistent card heights */}
              <div className="min-h-[96px] flex items-start justify-center mb-8 px-2">
                <p className="text-body-[18px] text-gray-500">
                  {product.series}
                </p>
              </div>

              {/* CTA anchored to bottom of card */}
              <div className="mt-auto w-full">
                {product.href ? (
                  <Link
                    href={product.href}
                    className="w-full py-5 rounded-2xl font-black text-sm transition-all transform hover:-translate-y-1 active:scale-95 shadow-xl shadow-brand-navy/10 bg-brand-navy text-white hover:bg-brand-primary flex items-center justify-center uppercase tracking-widest"
                  >
                    {product.buttonText}
                  </Link>
                ) : (
                  <button
                    onClick={product.onButtonClick}
                    className="w-full py-5 rounded-2xl font-black text-sm transition-all transform hover:-translate-y-1 active:scale-95 shadow-xl shadow-brand-navy/10 bg-brand-navy text-white hover:bg-brand-primary uppercase tracking-widest"
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
