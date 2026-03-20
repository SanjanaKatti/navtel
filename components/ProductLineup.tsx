"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import LayoutContainer from "./LayoutContainer";
import { FieldError } from "@/components/forms/FieldError";
import {
  salesInquirySchema,
  type SalesInquiryFormValues,
} from "@/lib/validation/form-schemas";
import {
  isEmailJsConfigured,
  sendWebsiteFormEmail,
} from "@/lib/emailjs/send-website-form";

const products = [
  {
    seriesTitle: "START Series",
    label: "START",
    subtitle: "COST-EFFECTIVE, ULTRA-COMPACT",
    description: "For essential GPS tracking and entry-level fleet management.",
    features: ["4G Connectivity", "Plug & Play", "Small Form Factor"],
    imageMobile: "/Navtelecom/start_pl_1600x1200.png",
    imageDesktop: "/Navtelecom/start_pl_2400x1800.png",
    href: "/products/tracking-devices/start-series",
  },
  {
    seriesTitle: "SMART Series",
    label: "SMART",
    subtitle: "FLEXIBLE CONNECTIVITY, CUSTOM LOGIC",
    description:
      "Supports CAN, BLE, RS-485. Ideal for fuel monitoring and sensor integration.",
    features: ["CAN Bus Support", "Bluetooth 4.0", "Fuel Monitoring"],
    imageMobile: "/Navtelecom/smart_pl_1600x1200.png",
    imageDesktop: "/Navtelecom/smart_pl_2400x1800.png",
    href: "/products/tracking-devices/smart-series",
  },
  {
    seriesTitle: "SIGNAL Series",
    label: "SIGNAL",
    subtitle: "EXTERNAL ANTENNAS, PRO-GRADE FEATURES",
    description:
      "Extended GNSS, fuel control, diagnostics, voice communication with drivers.",
    features: ["High Precision GNSS", "Voice Comm", "Advanced I/O"],
    imageMobile: "/Navtelecom/signal_pl_1600x1200.png",
    imageDesktop: "/Navtelecom/signal_pl_2400x1800.png",
    href: "/products/tracking-devices/signal-series",
  },
];

const ProductLineup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<SalesInquiryFormValues>({
    resolver: zodResolver(salesInquirySchema),
    defaultValues: {
      fullName: "",
      email: "",
      mobile: "",
      country: "",
      message: "",
    },
    mode: "onTouched",
  });

  const onSalesSubmit = async (data: SalesInquiryFormValues) => {
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
        formType: "Sales inquiry (product lineup)",
        fullName: data.fullName,
        userEmail: data.email,
        company: "—",
        mobile: data.mobile,
        country: data.country,
        message: data.message,
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
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F8FAFC]">
      <LayoutContainer>
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 px-2 sm:px-0">
          <p className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-[0.2em] text-[#004A8C] mb-2 md:mb-3">
            DISCOVER OUR LINEUP
          </p>
          <h2 className="text-h1 px-2 sm:px-0">Device Series for Every Fleet</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="group relative bg-white px-6 sm:px-8 lg:px-10 pt-8 sm:pt-10 pb-10 sm:pb-12 flex flex-col transition-all duration-300 hover:shadow-lg border border-gray-200 rounded-2xl sm:rounded-3xl"
            >
              {/* Heading */}
              <div className="min-h-[80px] flex flex-col justify-start">
                <h3 className="text-h3 font-black text-[#28398c]">
                  {product.seriesTitle}
                </h3>
                <p className="mt-1 text-[11px] font-extrabold tracking-normal text-gray-400 uppercase">
                  {product.subtitle}
                </p>
              </div>

              {/* Image frame with label strip */}
              <div className="w-full mb-2">
                <div className="w-full bg-[#F8FAFC] rounded-2xl border border-gray-200 overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#07bcd4]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#4bae51]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ff9800]" />
                    </div>
                    <span className="text-[10px] font-semibold tracking-[0.2em] text-gray-400 uppercase">
                      {product.label}
                    </span>
                  </div>
                  <div className="px-1 sm:px-2 md:px-3 py-1.5 sm:py-2">
                    <div className="relative w-full aspect-[4/3]">
                      <Image
                        src={product.imageMobile}
                        alt={product.label}
                        fill
                        sizes="(max-width: 1023px) 90vw, 1px"
                        className={`object-contain object-center md:hidden p-0 sm:p-0.5 ${
                          product.label === "START"
                            ? "scale-[1.6]"
                            : "scale-[1.45]"
                        }`}
                      />
                      <Image
                        src={product.imageDesktop}
                        alt={product.label}
                        fill
                        sizes="(min-width: 1280px) 26vw, (min-width: 1024px) 30vw, 1px"
                        className={`hidden md:block object-contain object-center p-0.5 md:p-1 ${
                          product.label === "START"
                            ? "scale-[1.65]"
                            : "scale-[1.5]"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-body mb-6 font-semibold">
                {product.description}
              </p>

              {/* Actions – keep existing buttons */}
              <div className="mt-auto pt-4 border-t border-gray-200 flex flex-col gap-3 sm:gap-4">
                <Link
                  href={product.href}
                  className="w-full bg-[#004A8C] text-white py-3 sm:py-4 px-6 sm:px-8 font-bold rounded-full hover:bg-[#003366] transition-colors shadow-lg shadow-blue-900/20 flex items-center justify-center uppercase tracking-wider text-xs sm:text-sm"
                >
                  View Specifications
                </Link>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-[#004A8C] text-white py-3 sm:py-4 px-6 sm:px-8 font-bold rounded-full hover:bg-[#003366] transition-colors shadow-lg shadow-blue-900/20 uppercase tracking-wider text-xs sm:text-sm"
                >
                  Contact Us
                </button>
              </div>
            </div>
          ))}
        </div>
      </LayoutContainer>

      {/* Contact Sales Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-brand-navy/80 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>

          <div className="relative bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl p-8 md:p-12 overflow-hidden animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-brand-navy transition-colors"
            >
              <X size={24} weight="bold" />
            </button>

            <div className="text-center mb-10">
              <h2 className="text-h2 mb-3">
                Contact <span className="text-brand-primary">Sales</span>
              </h2>
              <p className="text-body-sm">
                Our team will get back to you shortly.
              </p>
            </div>

            <form
              noValidate
              onSubmit={handleSubmit(onSalesSubmit)}
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
                <label htmlFor="pl-sales-name" className="text-label ml-1">
                  Full Name
                </label>
                <input
                  id="pl-sales-name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  aria-invalid={!!errors.fullName}
                  aria-describedby={
                    errors.fullName ? "pl-sales-name-err" : undefined
                  }
                  className={inputClass(!!errors.fullName)}
                  {...register("fullName")}
                />
                <FieldError
                  id="pl-sales-name-err"
                  message={errors.fullName?.message}
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="pl-sales-email" className="text-label ml-1">
                  Email Address
                </label>
                <input
                  id="pl-sales-email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  placeholder="your@email.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={
                    errors.email ? "pl-sales-email-err" : undefined
                  }
                  className={inputClass(!!errors.email)}
                  {...register("email")}
                />
                <FieldError
                  id="pl-sales-email-err"
                  message={errors.email?.message}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="pl-sales-mobile" className="text-label ml-1">
                    Mobile Number
                  </label>
                  <input
                    id="pl-sales-mobile"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+1..."
                    aria-invalid={!!errors.mobile}
                    aria-describedby={
                      errors.mobile ? "pl-sales-mobile-err" : undefined
                    }
                    className={inputClass(!!errors.mobile)}
                    {...register("mobile")}
                  />
                  <FieldError
                    id="pl-sales-mobile-err"
                    message={errors.mobile?.message}
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="pl-sales-country" className="text-label ml-1">
                    Country
                  </label>
                  <input
                    id="pl-sales-country"
                    type="text"
                    autoComplete="country-name"
                    placeholder="Your country"
                    aria-invalid={!!errors.country}
                    aria-describedby={
                      errors.country ? "pl-sales-country-err" : undefined
                    }
                    className={inputClass(!!errors.country)}
                    {...register("country")}
                  />
                  <FieldError
                    id="pl-sales-country-err"
                    message={errors.country?.message}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="pl-sales-message" className="text-label ml-1">
                  Message
                </label>
                <textarea
                  id="pl-sales-message"
                  rows={3}
                  placeholder="How can we help you?"
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "pl-sales-message-err" : undefined
                  }
                  className={`${inputClass(!!errors.message)} resize-none`}
                  {...register("message")}
                />
                <FieldError
                  id="pl-sales-message-err"
                  message={errors.message?.message}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-brand-navy text-white rounded-full font-black text-sm hover:bg-brand-primary transition-all transform hover:-translate-y-1 active:scale-95 shadow-lg shadow-brand-navy/20 mt-4 disabled:opacity-60 disabled:pointer-events-none"
              >
                {isSubmitting ? "SENDING…" : "SEND MESSAGE"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductLineup;
