"use client";
import React, { useState } from "react";
import Link from "next/link";
import { X } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldError } from "@/components/forms/FieldError";
import {
  newsletterSchema,
  type NewsletterFormValues,
} from "@/lib/validation/form-schemas";
import { SuccessPopup } from "@/components/forms/SuccessPopup";
import { submitToBrevo } from "@/lib/formspree/send-form";
import "./footer.css";

const footerGroups = [
  {
    title: "Tracking devices",
    links: [
      ["Overview", "/products/tracking-devices"],
      ["START Series", "/products/tracking-devices/start-series"],
      ["SMART Series", "/products/tracking-devices/smart-series"],
      ["SIGNAL Series", "/products/tracking-devices/signal-series"],
      ["All devices", "/products/all-devices"],
    ],
  },
  {
    title: "Software",
    links: [
      ["All solutions", "/products/software-solutions"],
      ["NTC Configurator", "/products/software-solutions/ntc-configurator"],
      ["CAN Spy", "/products/software-solutions/can-spy"],
      ["DRC", "/products/software-solutions/drc"],
      ["NTC Control", "/products/software-solutions/ntc-control"],
      ["Complex Events", "/products/software-solutions/complex-events"],
      ["Eco Driving", "/products/software-solutions/eco-driving"],
    ],
  },
  {
    title: "Support & company",
    links: [
      ["About us", "/about"],
      ["Support", "/support"],
      ["FAQ", "/support/faq"],
      ["Knowledge base", "/support/knowledge-base"],
      ["Warranty", "/support/warranty"],
      ["Contact us", "/contact"],
    ],
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

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
    const payload = {
      formType: "Newsletter signup",
      fullName: data.fullName,
      userEmail: data.email,
      company: data.company,
      mobile: data.mobile,
      country: data.country,
      message: "",
    };
    try {
      await submitToBrevo(payload);
      reset();
      setIsModalOpen(false);
      setShowSuccessPopup(true);
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
    <footer className="nt-footer">
      <div className="nt-footer-shell">
        <section className="nt-footer-newsletter" aria-labelledby="newsletter-title">
          <div>
            <p className="nt-footer-eyebrow">STAY IN THE LOOP</p>
            <h2 id="newsletter-title">Subscribe to our Newsletter</h2>
            <p>Stay updated with the latest news, product updates and industry insights.</p>
          </div>
          <button type="button" className="nt-footer-subscribe" onClick={() => setIsModalOpen(true)}>
            Subscribe now <ArrowIcon />
          </button>
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
                  <label
                    htmlFor="footer-nl-country"
                    className="text-label ml-1"
                  >
                    Country
                  </label>
                  <input
                    id="footer-nl-country"
                    type="text"
                    autoComplete="country-name"
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

        <div className="nt-footer-main">
          <div className="nt-footer-brand">
            <Link href="/" aria-label="Navtelecom home">
              <img className="nt-footer-logo-image" src="/Navtelecom/logo-navtelecom-EN-light.png" alt="Navtelecom" />
            </Link>
            <p>Developer and manufacturer of professional telematics hardware and software for fleet management, asset tracking and industrial integration.</p>
          </div>

          {footerGroups.map((group) => (
            <nav className="nt-footer-column" aria-label={group.title} key={group.title}>
              <h3>{group.title}</h3>
              {group.links.map(([label, href]) => (
                <Link href={href} key={label}>{label}</Link>
              ))}
            </nav>
          ))}

          <div className="nt-footer-column nt-footer-contact">
            <h3>Contact</h3>
            <span>Sales Department</span>
            <a href="mailto:sales@navtelecom-iot.com">sales@navtelecom-iot.com</a>
            <span>Support</span>
            <a href="mailto:support@navtelecom.ru">support@navtelecom.ru</a>
            <p>For integration and technical questions, reach out via email or your regional partner.</p>
          </div>
        </div>

        <div className="nt-footer-bottom">
          <p suppressHydrationWarning>
            © {new Date().getFullYear()} Navtelecom. All rights reserved.
          </p>
          <nav aria-label="Legal links">
            <Link href="/privacy">Privacy & data</Link>
            <Link href="/cookie-policy">Cookie policy</Link>
            <Link href="/terms-of-use">Terms of use</Link>
          </nav>
        </div>
      </div>

      <SuccessPopup
        isOpen={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
      />
    </footer>
  );
};

export default Footer;
