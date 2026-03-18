"use client";
import React from "react";
import Link from "next/link";

export interface CTAItem {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

interface SoftwareHeroProps {
  title: string;
  subtitle: string;
  tagline: string;
  ctaPrimary?: CTAItem;
  ctaSecondary?: CTAItem;
  backgroundClass?: string;
  textColor?: "white" | "navy";
  breadcrumb?: { label: string; href: string };
  center?: boolean;
}

const SoftwareHero: React.FC<SoftwareHeroProps> = ({
  title,
  subtitle,
  tagline,
  ctaPrimary,
  ctaSecondary,
  backgroundClass = "",
  textColor = "white",
  breadcrumb,
  center = false,
}) => {
  const isWhite = textColor === "white";
  const textCls = isWhite ? "text-white" : "text-brand-navy";
  const bgCls = backgroundClass
    ? `product-background-image bg-cover bg-center ${backgroundClass}`
    : "bg-gradient-to-b from-brand-light-3 to-white";

  return (
    <section
      className={`relative h-[calc(100vh-5rem)] min-h-[calc(100dvh-5rem)] flex items-center overflow-hidden ${bgCls}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 z-10 w-full">
        <div className={`grid lg:grid-cols-1 gap-20 items-center ${center ? "justify-items-center" : ""}`}>
          <div className={`space-y-8 ${center ? "lg:w-full max-w-3xl mx-auto text-center" : "lg:w-2/5"}`}>
            {breadcrumb && (
              <Link
                href={breadcrumb.href}
                className={`text-sm font-medium hover:underline ${isWhite ? "text-white/80" : "text-brand-navy/80"}`}
              >
                ← {breadcrumb.label}
              </Link>
            )}
            <div>
              <h1
                className={`text-5xl md:text-6xl font-black leading-tight mb-4 ${textCls}`}
              >
                {title}
              </h1>
              <p
                className={`text-sm font-bold tracking-[0.3em] uppercase ${textCls}`}
              >
                {subtitle}
              </p>
            </div>

            <p className={`text-xl leading-relaxed font-medium ${textCls}`}>
              {tagline}
            </p>

            {(ctaPrimary || ctaSecondary) && (
              <div className={`flex flex-wrap gap-4 pt-4 ${center ? "justify-center" : ""}`}>
                {ctaPrimary &&
                  (ctaPrimary.href ? (
                    <Link
                      href={ctaPrimary.href}
                      target={ctaPrimary.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        ctaPrimary.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className={
                        ctaPrimary.variant === "secondary"
                          ? "bg-white text-brand-navy px-10 py-5 rounded-2xl font-bold text-lg border-2 border-gray-100 hover:border-brand-deep transition-all"
                          : "bg-[#002D49] text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-brand-deep transition-all shadow-xl hover:shadow-2xl"
                      }
                    >
                      {ctaPrimary.label}
                    </Link>
                  ) : (
                    <button
                      onClick={ctaPrimary.onClick}
                      className="bg-[#002D49] text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-brand-deep transition-all shadow-xl hover:shadow-2xl"
                    >
                      {ctaPrimary.label}
                    </button>
                  ))}
                {ctaSecondary &&
                  (ctaSecondary.href ? (
                    <Link
                      href={ctaSecondary.href}
                      target={ctaSecondary.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        ctaSecondary.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="bg-white text-brand-navy px-10 py-5 rounded-2xl font-bold text-lg border-2 border-gray-100 hover:border-brand-deep transition-all"
                    >
                      {ctaSecondary.label}
                    </Link>
                  ) : (
                    <button
                      onClick={ctaSecondary.onClick}
                      className="bg-white text-brand-navy px-10 py-5 rounded-2xl font-bold text-lg border-2 border-gray-100 hover:border-brand-deep transition-all"
                    >
                      {ctaSecondary.label}
                    </button>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareHero;
