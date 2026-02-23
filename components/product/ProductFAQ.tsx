"use client";
import React from "react";
import LayoutContainer from "../LayoutContainer";

interface FAQItem {
  question: string;
  answer: string;
}

interface ProductFAQProps {
  faqs: FAQItem[];
}

const ProductFAQ: React.FC<ProductFAQProps> = ({ faqs }) => {
  return (
    <section className="py-8 md:py-12 bg-white">
      <LayoutContainer className="text-center max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-h1 mb-3">FAQs</h2>
          <p className="text-body max-w-2xl mx-auto">
            Common questions about installation and support
          </p>
        </div>

        <div className="space-y-3 text-left">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group bg-brand-light-3 border border-gray-200 px-5 sm:px-6 transition-all duration-200 open:shadow-md rounded-xl"
            >
              <summary className="flex justify-between items-center cursor-pointer list-none py-6">
                <span className="text-h3 group-hover:text-brand-primary transition-colors pr-6">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-8 h-8 bg-white border border-gray-200 flex items-center justify-center text-gray-400 group-open:bg-brand-primary group-open:text-white group-open:border-brand-primary transition-all rounded-lg shadow-sm">
                  <svg
                    className="w-4 h-4 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </summary>
              <div className="text-body-sm pb-8 pt-1 border-t border-gray-100 mt-1">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </LayoutContainer>
    </section>
  );
};

export default ProductFAQ;
