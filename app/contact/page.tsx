"use client";
import React, { useState } from "react";
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
  isFormspreeConfigured,
  submitToFormspree,
  submitToTempCapture,
} from "@/lib/formspree/send-form";
import { SuccessPopup } from "@/components/forms/SuccessPopup";

const ContactPage = () => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
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
    const payload = {
      formType: "Contact page",
      fullName: data.name,
      userEmail: data.email,
      company: data.company,
      mobile: data.mobile,
      country: data.country,
      message: data.message,
    };
    try {
      if (isFormspreeConfigured()) {
        await submitToFormspree("contact", payload);
      } else {
        await submitToTempCapture(payload);
      }
      reset();
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
                  aria-invalid={!!errors.company}
                  aria-describedby={errors.company ? "company-err" : undefined}
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
                  aria-invalid={!!errors.mobile}
                  aria-describedby={errors.mobile ? "mobile-err" : undefined}
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
                aria-invalid={!!errors.country}
                aria-describedby={errors.country ? "country-err" : undefined}
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
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-err" : undefined}
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

      <SuccessPopup
        isOpen={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
      />
    </div>
  );
};

export default ContactPage;
