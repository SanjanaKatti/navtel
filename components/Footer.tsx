"use client";
import React, { useState } from "react";
import Link from "next/link";
import { X, EnvelopeSimple, LinkedinLogo, InstagramLogo } from "phosphor-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import LayoutContainer from "./LayoutContainer";
import { FieldError } from "@/components/forms/FieldError";
import {
  newsletterSchema,
  type NewsletterFormValues,
} from "@/lib/validation/form-schemas";
import {
  isEmailJsConfigured,
  sendWebsiteFormEmail,
} from "@/lib/emailjs/send-website-form";

const footerLinkClass =
  "text-sm text-white/70 hover:text-brand-primary transition-colors duration-200";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      company: "",
      fullName: "",
      email: "",
      mobile: "",
      country: "",
    },
    mode: "onTouched",
  });

  const onNewsletterSubmit = async (data: NewsletterFormValues) => {
    clearErrors("root");
    if (!isEmailJsConfigured()) {
      setError("root", {
        message:
          "Email is not set up yet. Add EmailJS keys to .env.local (see .env.example).",
      });
      return;
    }
    try {
      await sendWebsiteFormEmail({
        formType: "Newsletter signup",
        fullName: data.fullName,
        userEmail: data.email,
        company: data.company,
        mobile: data.mobile,
        country: data.country,
        message: "",
      });
      reset();
      setIsModalOpen(false);
    } catch (err) {
      setError("root", {
        message:
          err instanceof Error
            ? err.message
            : "Could not send. Try again or email us directly.",
      });
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full px-5 py-3.5 bg-brand-light-3 border rounded-xl focus:outline-none focus:bg-white transition-all text-body-sm ${
      hasError
        ? "border-red-500 focus:border-red-600"
        : "border-gray-200 focus:border-brand-primary"
    }`;

  return (
    <div className="relative bg-brand-navy text-white border-t border-white/10">
      {/* Newsletter — kept per product request */}
      <section className="relative">
        <LayoutContainer className="relative py-14 sm:py-16 md:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-label text-brand-primary mb-3 sm:mb-4">
              Stay in the loop
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white mb-4 sm:mb-5">
              Subscribe to our Newsletter
            </h2>
            <p className="text-body-sm sm:text-base text-white/75 mb-8 sm:mb-10 max-w-lg mx-auto leading-relaxed">
              Stay updated with the latest news, product updates, and industry
              insights.
            </p>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center bg-brand-primary text-white px-10 sm:px-12 py-3.5 sm:py-4 font-black text-sm sm:text-base tracking-wide rounded-full hover:brightness-110 transition-all shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              SUBSCRIBE NOW
            </button>
          </div>
        </LayoutContainer>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-brand-navy/80 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
            aria-hidden
          />
          <div className="relative bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl p-8 md:p-12 overflow-hidden animate-in fade-in zoom-in duration-300">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-brand-navy transition-colors"
              aria-label="Close"
            >
              <X size={24} weight="bold" />
            </button>

            <div className="text-center mb-10">
              <h2 className="text-h2 mb-3">
                Join our <span className="text-brand-primary">Newsletter</span>
              </h2>
              <p className="text-body-sm">
                Get the latest telematics updates directly in your inbox.
              </p>
            </div>

            <form
              noValidate
              onSubmit={handleSubmit(onNewsletterSubmit)}
              className="space-y-5"
            >
              {errors.root?.message ? (
                <p
                  role="alert"
                  className="text-sm text-red-600 text-center px-1"
                >
                  {errors.root.message}
                </p>
              ) : null}
              <div className="space-y-1.5">
                <label htmlFor="footer-nl-company" className="text-label ml-1">
                  Company
                </label>
                <input
                  id="footer-nl-company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Your company name"
                  aria-invalid={!!errors.company}
                  aria-describedby={
                    errors.company ? "footer-nl-company-err" : undefined
                  }
                  className={inputClass(!!errors.company)}
                  {...register("company")}
                />
                <FieldError
                  id="footer-nl-company-err"
                  message={errors.company?.message}
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="footer-nl-name" className="text-label ml-1">
                  Full Name
                </label>
                <input
                  id="footer-nl-name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  aria-invalid={!!errors.fullName}
                  aria-describedby={
                    errors.fullName ? "footer-nl-name-err" : undefined
                  }
                  className={inputClass(!!errors.fullName)}
                  {...register("fullName")}
                />
                <FieldError
                  id="footer-nl-name-err"
                  message={errors.fullName?.message}
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="footer-nl-email" className="text-label ml-1">
                  Email Address
                </label>
                <input
                  id="footer-nl-email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  placeholder="your@email.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={
                    errors.email ? "footer-nl-email-err" : undefined
                  }
                  className={inputClass(!!errors.email)}
                  {...register("email")}
                />
                <FieldError
                  id="footer-nl-email-err"
                  message={errors.email?.message}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="footer-nl-mobile" className="text-label ml-1">
                    Mobile Number
                  </label>
                  <input
                    id="footer-nl-mobile"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+1..."
                    aria-invalid={!!errors.mobile}
                    aria-describedby={
                      errors.mobile ? "footer-nl-mobile-err" : undefined
                    }
                    className={inputClass(!!errors.mobile)}
                    {...register("mobile")}
                  />
                  <FieldError
                    id="footer-nl-mobile-err"
                    message={errors.mobile?.message}
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="footer-nl-country" className="text-label ml-1">
                    Country
                  </label>
                  <input
                    id="footer-nl-country"
                    type="text"
                    autoComplete="country-name"
                    placeholder="Your country"
                    aria-invalid={!!errors.country}
                    aria-describedby={
                      errors.country ? "footer-nl-country-err" : undefined
                    }
                    className={inputClass(!!errors.country)}
                    {...register("country")}
                  />
                  <FieldError
                    id="footer-nl-country-err"
                    message={errors.country?.message}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-brand-navy text-white rounded-full font-black text-sm hover:bg-brand-primary transition-all transform hover:-translate-y-1 active:scale-95 shadow-lg shadow-brand-navy/20 mt-4 disabled:opacity-60 disabled:pointer-events-none"
              >
                {isSubmitting ? "SENDING…" : "SUBSCRIBE"}
              </button>
            </form>
          </div>
        </div>
      )}

      <footer className="relative">
        <LayoutContainer className="py-14 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 pb-12 lg:pb-16 border-b border-white/10">
            {/* Brand — mirrors navbar trust, inverted for dark ground */}
            <div className="lg:col-span-4 space-y-5">
              <Link href="/" className="inline-block">
                <div className="relative h-11 w-44 sm:h-12 sm:w-48 brightness-0 invert opacity-95 hover:opacity-100 transition-opacity">
                  <Image
                    src="/Navtelecom/Navtelecom_logo.svg"
                    alt="Navtelecom"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </Link>
              <p className="text-sm text-white/65 leading-relaxed max-w-sm">
                Developer and manufacturer of professional telematics hardware
                and software for fleet management, asset tracking, and industrial
                integration.
              </p>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href="https://www.linkedin.com/company/navtelecom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 hover:border-brand-primary hover:text-brand-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinLogo size={22} weight="fill" />
                </a>
                <a
                  href="https://www.instagram.com/navtelecom?igsh=OWRkZ3kyOG5mdjZq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 hover:border-brand-primary hover:text-brand-primary transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramLogo size={22} weight="regular" />
                </a>
              </div>
            </div>

            {/* Tracking — aligned with Products dropdown */}
            <div className="lg:col-span-2">
              <h3 className="text-label text-brand-primary mb-4 sm:mb-5">
                Tracking devices
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/products/tracking-devices" className={footerLinkClass}>
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/tracking-devices/start-series"
                    className={footerLinkClass}
                  >
                    START Series
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/tracking-devices/smart-series"
                    className={footerLinkClass}
                  >
                    SMART Series
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/tracking-devices/signal-series"
                    className={footerLinkClass}
                  >
                    SIGNAL Series
                  </Link>
                </li>
                <li>
                  <Link href="/products/all-devices" className={footerLinkClass}>
                    All devices
                  </Link>
                </li>
              </ul>
            </div>

            {/* Software — matches navbar submenu */}
            <div className="lg:col-span-2">
              <h3 className="text-label text-brand-primary mb-4 sm:mb-5">
                Software
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/products/software-solutions"
                    className={footerLinkClass}
                  >
                    All solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/software-solutions/ntc-configurator"
                    className={footerLinkClass}
                  >
                    NTC Configurator
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/software-solutions/can-spy"
                    className={footerLinkClass}
                  >
                    CAN SPY
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/software-solutions/drc"
                    className={footerLinkClass}
                  >
                    DRC
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/software-solutions/ntc-control"
                    className={footerLinkClass}
                  >
                    NTC Control
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/software-solutions/complex-events"
                    className={footerLinkClass}
                  >
                    Complex Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/software-solutions/eco-driving"
                    className={footerLinkClass}
                  >
                    Eco Driving
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support + company */}
            <div className="lg:col-span-2">
              <h3 className="text-label text-brand-primary mb-4 sm:mb-5">
                Support &amp; company
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className={footerLinkClass}>
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/support" className={footerLinkClass}>
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="/support/faq" className={footerLinkClass}>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support/knowledge-base"
                    className={footerLinkClass}
                  >
                    Knowledge base
                  </Link>
                </li>
                <li>
                  <Link href="/support/warranty" className={footerLinkClass}>
                    Warranty
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={footerLinkClass}>
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-2">
              <h3 className="text-label text-brand-primary mb-4 sm:mb-5">
                Contact
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:support@navtelecom.com"
                    className="group flex items-start gap-3 text-sm text-white/70 hover:text-brand-primary transition-colors"
                  >
                    <EnvelopeSimple
                      className="mt-0.5 shrink-0 text-brand-primary/90 group-hover:text-brand-primary"
                      size={20}
                      weight="duotone"
                    />
                    <span className="leading-snug break-all">
                      support@navtelecom.com
                    </span>
                  </a>
                </li>
              </ul>
              <p className="mt-6 text-xs text-white/45 leading-relaxed">
                For integration and technical questions, reach out via email or
                your regional partner.
              </p>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-white/50">
            <p>© {new Date().getFullYear()} Navtelecom. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              <Link
                href="/contact"
                className="hover:text-brand-primary transition-colors"
              >
                Privacy &amp; data
              </Link>
              <Link
                href="/contact"
                className="hover:text-brand-primary transition-colors"
              >
                Terms of use
              </Link>
            </div>
          </div>
        </LayoutContainer>
      </footer>
    </div>
  );
};

export default Footer;
