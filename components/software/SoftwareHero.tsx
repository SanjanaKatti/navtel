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
  ctaMobileAlign?: "center" | "left";
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
  ctaMobileAlign = "center",
}) => {
  const isWhite = textColor === "white";
  const textCls = isWhite ? "text-white" : "text-brand-navy";
  const bgCls = backgroundClass
    ? `product-background-image bg-cover bg-center ${backgroundClass}`
    : "bg-gradient-to-b from-brand-light-3 to-white";

  const ctaMobileJustify =
    ctaMobileAlign === "left"
      ? "max-lg:justify-start"
      : "max-lg:justify-center";
  const mobileHeroItemsAlign = "max-lg:items-start";
  const mobileHeroPaddingY = "max-lg:py-6";

  /* Subtle readability on mobile/tablet without the frosted panel (desktop unchanged) */
  const shadowTitle = isWhite
    ? "max-lg:drop-shadow-[0_2px_14px_rgba(0,45,73,0.5)]"
    : "max-lg:drop-shadow-[0_0_20px_rgba(255,255,255,0.92)]";
  const shadowSub = isWhite
    ? "max-lg:drop-shadow-[0_1px_10px_rgba(0,45,73,0.45)]"
    : "max-lg:drop-shadow-[0_0_14px_rgba(255,255,255,0.88)]";
  const shadowBody = isWhite
    ? "max-lg:drop-shadow-[0_1px_10px_rgba(0,45,73,0.4)]"
    : "max-lg:drop-shadow-[0_0_16px_rgba(255,255,255,0.9)]";

  return (
    <section
      className={`relative flex items-center overflow-hidden ${bgCls} py-10 sm:py-14 md:py-16 ${mobileHeroItemsAlign} ${mobileHeroPaddingY} max-lg:min-h-[calc(100dvh-5rem)] lg:min-h-[calc(100dvh-5rem)] lg:h-[calc(100vh-5rem)] lg:py-0`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full lg:py-16 xl:py-24">
        <div
          className={`grid lg:grid-cols-1 gap-10 sm:gap-14 lg:gap-20 items-center max-lg:items-start ${center ? "justify-items-center" : ""}`}
        >
          <div
            className={`space-y-5 sm:space-y-6 md:space-y-8 lg:space-y-8 ${
              center
                ? "lg:w-full max-w-3xl mx-auto text-center max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center"
                : "lg:w-2/5 max-lg:max-w-xl"
            }`}
          >
            {breadcrumb && (
              <Link
                href={breadcrumb.href}
                className={`hidden lg:inline-block text-sm font-medium hover:underline ${isWhite ? "text-white/90" : "text-brand-navy/80"}`}
              >
                ← {breadcrumb.label}
              </Link>
            )}
            <div
              className={center ? "max-lg:w-full max-lg:px-1 max-lg:pt-32" : ""}
            >
              <h1
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.08] sm:leading-tight mb-3 sm:mb-4 ${textCls} text-pretty ${shadowTitle}`}
              >
                {title}
              </h1>
              <p
                className={`text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.18em] sm:tracking-[0.25em] lg:tracking-[0.3em] uppercase ${textCls} ${shadowSub}`}
              >
                {subtitle}
              </p>
            </div>

            <p
              className={`text-base sm:text-lg md:text-xl leading-relaxed font-medium ${textCls} text-pretty max-w-prose ${center ? "lg:mx-auto max-lg:max-w-md" : "max-lg:max-w-xl"} ${shadowBody}`}
            >
              {tagline}
            </p>

            {(ctaPrimary || ctaSecondary) && (
              <div
                className={`flex flex-col sm:flex-row max-lg:flex-row max-lg:flex-nowrap ${ctaMobileJustify} gap-3 sm:gap-4 pt-2 sm:pt-4 w-full ${center ? "lg:justify-center max-lg:items-center max-lg:max-w-md" : "max-lg:max-w-xl"}`}
              >
                {ctaPrimary &&
                  (ctaPrimary.href ? (
                    <Link
                      href={ctaPrimary.href}
                      target={
                        ctaPrimary.href.startsWith("http")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        ctaPrimary.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className={
                        ctaPrimary.variant === "secondary"
                          ? "text-center bg-white text-brand-navy px-6 py-4 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-2xl font-bold text-base sm:text-lg border-2 border-gray-100 hover:border-brand-deep transition-all max-lg:w-[calc(50%-0.375rem)] max-lg:flex-none max-lg:shadow-lg lg:w-auto"
                          : "text-center bg-[#002D49] text-white px-6 py-4 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-2xl font-black text-base sm:text-lg hover:bg-brand-deep transition-all shadow-xl hover:shadow-2xl max-lg:w-[calc(50%-0.375rem)] max-lg:flex-none max-lg:shadow-[0_4px_24px_rgba(0,45,73,0.35)] lg:w-auto"
                      }
                    >
                      {ctaPrimary.label}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={ctaPrimary.onClick}
                      className="bg-[#002D49] text-white px-6 py-4 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-2xl font-black text-base sm:text-lg hover:bg-brand-deep transition-all shadow-xl hover:shadow-2xl max-lg:w-[calc(50%-0.375rem)] max-lg:flex-none max-lg:shadow-[0_4px_24px_rgba(0,45,73,0.35)] lg:w-auto"
                    >
                      {ctaPrimary.label}
                    </button>
                  ))}
                {ctaSecondary &&
                  (ctaSecondary.href ? (
                    <Link
                      href={ctaSecondary.href}
                      target={
                        ctaSecondary.href.startsWith("http")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        ctaSecondary.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-center bg-white text-brand-navy px-6 py-4 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-2xl font-bold text-base sm:text-lg border-2 border-gray-100 hover:border-brand-deep transition-all max-lg:w-[calc(50%-0.375rem)] max-lg:flex-none max-lg:shadow-lg lg:w-auto"
                    >
                      {ctaSecondary.label}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={ctaSecondary.onClick}
                      className="bg-white text-brand-navy px-6 py-4 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-2xl font-bold text-base sm:text-lg border-2 border-gray-100 hover:border-brand-deep transition-all max-lg:w-[calc(50%-0.375rem)] max-lg:flex-none max-lg:shadow-lg lg:w-auto"
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
