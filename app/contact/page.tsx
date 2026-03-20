"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FieldError } from "@/components/forms/FieldError";
import {
  contactPageSchema,
  type ContactPageFormValues,
} from "@/lib/validation/form-schemas";
import {
  isEmailJsConfigured,
  sendWebsiteFormEmail,
} from "@/lib/emailjs/send-website-form";

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<ContactPageFormValues>({
    resolver: zodResolver(contactPageSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      mobile: "",
      country: "",
      message: "",
    },
    mode: "onTouched",
  });

  const onSubmit = async (data: ContactPageFormValues) => {
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
        formType: "Contact page",
        fullName: data.name,
        userEmail: data.email,
        company: data.company,
        mobile: data.mobile,
        country: data.country,
        message: data.message,
      });
      reset();
    } catch {
      setError("root", {
        message: "Could not send. Check your connection or try again later.",
      });
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full rounded-2xl border bg-brand-light-3 px-6 py-4 text-body transition-all focus:bg-white focus:outline-none ${
      hasError
        ? "border-red-500 focus:border-red-600"
        : "border-gray-100 focus:border-brand-primary"
    }`;

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy overflow-x-hidden">
      <Navbar />

      <main className="flex flex-col items-center justify-center bg-brand-light-3 min-h-[calc(100dvh-5rem)] pb-8">
        {/* Spacer to push content below fixed Navbar */}
        <div className="pt-20 my-8" />
        <div className="relative z-10 w-full max-w-3xl p-8 md:p-12 bg-white rounded-[3rem] shadow-2xl shadow-brand-navy/10 border border-white">
          <h1 className="text-display text-center leading-tight mb-8">
            Get In <span className="text-brand-primary">Touch</span>
          </h1>
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            {errors.root?.message ? (
              <p
                role="alert"
                className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-center text-sm text-red-800"
              >
                {errors.root.message}
              </p>
            ) : null}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="ml-1 text-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  autoComplete="name"
                  placeholder="Your full name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-err" : undefined}
                  className={inputClass(!!errors.name)}
                  {...register("name")}
                />
                <FieldError id="name-err" message={errors.name?.message} />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="ml-1 text-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  autoComplete="email"
                  inputMode="email"
                  placeholder="your@email.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-err" : undefined}
                  className={inputClass(!!errors.email)}
                  {...register("email")}
                />
                <FieldError id="email-err" message={errors.email?.message} />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="company" className="ml-1 text-label">
                  Name of the Company
                </label>
                <input
                  type="text"
                  id="company"
                  autoComplete="organization"
                  placeholder="Company name"
                  aria-invalid={!!errors.company}
                  aria-describedby={
                    errors.company ? "company-err" : undefined
                  }
                  className={inputClass(!!errors.company)}
                  {...register("company")}
                />
                <FieldError
                  id="company-err"
                  message={errors.company?.message}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="mobile" className="ml-1 text-label">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  autoComplete="tel"
                  placeholder="+1 (555) 000-0000"
                  aria-invalid={!!errors.mobile}
                  aria-describedby={
                    errors.mobile ? "mobile-err" : undefined
                  }
                  className={inputClass(!!errors.mobile)}
                  {...register("mobile")}
                />
                <FieldError id="mobile-err" message={errors.mobile?.message} />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="country" className="ml-1 text-label">
                Country
              </label>
              <input
                type="text"
                id="country"
                autoComplete="country-name"
                placeholder="Your country"
                aria-invalid={!!errors.country}
                aria-describedby={
                  errors.country ? "country-err" : undefined
                }
                className={inputClass(!!errors.country)}
                {...register("country")}
              />
              <FieldError id="country-err" message={errors.country?.message} />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="ml-1 text-label">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="How can we help you?"
                aria-invalid={!!errors.message}
                aria-describedby={
                  errors.message ? "message-err" : undefined
                }
                className={`${inputClass(!!errors.message)} resize-none`}
                {...register("message")}
              />
              <FieldError id="message-err" message={errors.message?.message} />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 w-full rounded-full bg-brand-navy py-5 text-base font-black uppercase text-white shadow-xl shadow-brand-navy/20 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-primary active:scale-95 disabled:opacity-60 disabled:pointer-events-none"
            >
              {isSubmitting ? "SENDING…" : "SEND MESSAGE"}
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
