"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  Headphones,
  Mail,
  MessageSquareText,
  Send,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FieldError } from "@/components/forms/FieldError";
import {
  contactPageSchema,
  type ContactPageFormValues,
} from "@/lib/validation/form-schemas";
import { submitToBrevo } from "@/lib/formspree/send-form";
import "./contact-page.css";

const SALES_EMAIL = "sales@navtelecom-iot.com";

const inquiryOptions = [
  "Product Information",
  "Pricing & Availability",
  "Sales Inquiry",
  "Partnership",
  "Software & Integration",
  "Technical Support",
  "Media & Company Information",
  "Other",
];

function ContactVisual() {
  return (
    <div className="contact-visual" aria-label="Your message is routed to the appropriate Navtelecom team">
      <div className="contact-visual-orbit contact-orbit-one" />
      <div className="contact-visual-orbit contact-orbit-two" />
      <div className="contact-message-card">
        <span><MessageSquareText aria-hidden="true" /></span>
        <strong>Your Message</strong>
        <small>Question or request</small>
      </div>
      <svg className="contact-route-map contact-route-branch" viewBox="0 0 100 150" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 75 H12" />
        <path d="M12 75 Q20 75 23 63 L28 12 Q29 0 38 0 H100" />
        <path d="M12 75 Q20 75 23 87 L28 138 Q29 150 38 150 H100" />
      </svg>
      <svg className="contact-route-map contact-route-merge" viewBox="0 0 100 150" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 0 H62 Q71 0 72 12 L77 63 Q80 75 88 75" />
        <path d="M0 150 H62 Q71 150 72 138 L77 87 Q80 75 88 75" />
        <path d="M88 75 H100" />
      </svg>
      <div className="contact-team-card contact-team-sales">
        <span><Building2 aria-hidden="true" /></span><strong>Sales & General</strong>
      </div>
      <div className="contact-team-card contact-team-support">
        <span><Headphones aria-hidden="true" /></span><strong>Technical Support</strong>
      </div>
      <div className="contact-route-label"><CheckCircle2 aria-hidden="true" /> Routed to the right team</div>
    </div>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ContactPageFormValues>({
    resolver: zodResolver(contactPageSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      country: "",
      mobile: "",
      inquiry: "",
      message: "",
      consent: false,
    },
    mode: "onTouched",
  });
  const inquiryType = useWatch({ control, name: "inquiry" });

  const onSubmit = async (data: ContactPageFormValues) => {
    clearErrors("root");
    try {
      await submitToBrevo({
        formType: "Contact page",
        fullName: data.name,
        userEmail: data.email,
        company: data.company,
        mobile: data.mobile,
        country: data.country,
        message: `Inquiry: ${data.inquiry}\n\n${data.message}`,
      });
      reset();
      setSubmitted(true);
    } catch (err) {
      setError("root", {
        message:
          err instanceof Error
            ? err.message
            : "Could not send. Try again or email us directly.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />
      <div className="contact-page">
        <main>
          <section className="contact-hero">
            <div className="contact-grid-pattern" aria-hidden="true" />
            <div className="contact-shell contact-hero-grid">
              <div className="contact-hero-copy">
                <p className="contact-eyebrow">CONTACT NAVTELECOM</p>
                <h1>Get in touch with Navtelecom</h1>
                <p className="contact-lead">Have a question about our products, software, partnership opportunities or company? Choose the appropriate contact channel or send us a message.</p>
                <a className="contact-button contact-button-primary" href="#contact-form">Send Us a Message <ArrowRight aria-hidden="true" /></a>
              </div>
              <ContactVisual />
            </div>
          </section>

          <section className="contact-channels-section">
            <div className="contact-shell">
              <div className="contact-heading contact-heading-center">
                <p className="contact-eyebrow">CHOOSE THE RIGHT CONTACT</p>
                <h2>How can we help?</h2>
                <p>Use the general contact form for company and commercial questions. Technical requests are handled through our dedicated support system.</p>
              </div>
              <div className="contact-channel-grid">
                <article className="contact-channel-card contact-channel-sales">
                  <div className="contact-channel-top"><span className="contact-icon-box"><Building2 aria-hidden="true" /></span><span className="contact-number">01</span></div>
                  <p className="contact-card-label">GENERAL & COMMERCIAL</p>
                  <h3>Sales & General Inquiries</h3>
                  <p>Questions about products, pricing, availability, partnerships, distribution and cooperation.</p>
                  <a className="contact-address" href={`mailto:${SALES_EMAIL}`}>{SALES_EMAIL}</a>
                  <a className="contact-button contact-button-light" href={`mailto:${SALES_EMAIL}`}>Contact Sales <ArrowUpRight aria-hidden="true" /></a>
                </article>
                <article className="contact-channel-card contact-channel-support">
                  <div className="contact-channel-top"><span className="contact-icon-box"><Headphones aria-hidden="true" /></span><span className="contact-number">02</span></div>
                  <p className="contact-card-label">DEDICATED SUPPORT</p>
                  <h3>Technical Support</h3>
                  <p>Help with device configuration, diagnostics, firmware, software and technical integration.</p>
                  <div className="contact-support-note"><ShieldCheck aria-hidden="true" /><span>Your request will be registered and tracked through the technical support system.</span></div>
                  <Link className="contact-button contact-button-outline" href="/support">Open Support Page <ArrowUpRight aria-hidden="true" /></Link>
                </article>
              </div>
            </div>
          </section>

          <section className="contact-form-section" id="contact-form">
            <div className="contact-shell contact-form-layout">
              <div className="contact-form-copy">
                <p className="contact-eyebrow">CONTACT FORM</p>
                <h2>Send us a message</h2>
                <p>Complete the form and your message will be forwarded to the appropriate Navtelecom team.</p>
                <div className="contact-direct-email">
                  <span className="contact-icon-box"><Mail aria-hidden="true" /></span>
                  <div><small>Prefer email?</small><a href={`mailto:${SALES_EMAIL}`}>{SALES_EMAIL}</a></div>
                </div>
              </div>

              <div className="contact-form-card">
                {submitted ? (
                  <div className="contact-success" role="status">
                    <span><CheckCircle2 aria-hidden="true" /></span>
                    <p className="contact-eyebrow">MESSAGE SENT</p>
                    <h3>Thank you for contacting Navtelecom.</h3>
                    <p>Your message has been submitted and will be forwarded to the appropriate team using the information provided.</p>
                    <button type="button" className="contact-button contact-button-primary" onClick={() => setSubmitted(false)}>Send Another Message</button>
                  </div>
                ) : (
                  <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    {errors.root?.message ? (
                      <p role="alert" className="contact-error">{errors.root.message}</p>
                    ) : null}
                    <div className="contact-fields-row">
                      <label>
                        <span>Full Name*</span>
                        <div className={`contact-field${errors.name ? " is-error" : ""}`}>
                          <UserRound aria-hidden="true" />
                          <input id="name" autoComplete="name" aria-invalid={!!errors.name} placeholder="Your full name" {...register("name")} />
                        </div>
                        <FieldError id="name-err" message={errors.name?.message} />
                      </label>
                      <label>
                        <span>Email*</span>
                        <div className={`contact-field${errors.email ? " is-error" : ""}`}>
                          <Mail aria-hidden="true" />
                          <input id="email" type="email" autoComplete="email" inputMode="email" aria-invalid={!!errors.email} placeholder="name@company.com" {...register("email")} />
                        </div>
                        <FieldError id="email-err" message={errors.email?.message} />
                      </label>
                    </div>
                    <div className="contact-fields-row">
                      <label>
                        <span>Company</span>
                        <div className={`contact-field${errors.company ? " is-error" : ""}`}>
                          <Building2 aria-hidden="true" />
                          <input id="company" autoComplete="organization" placeholder="Company name" {...register("company")} />
                        </div>
                        <FieldError id="company-err" message={errors.company?.message} />
                      </label>
                      <label>
                        <span>Country / Region*</span>
                        <div className={`contact-field${errors.country ? " is-error" : ""}`}>
                          <Sparkles aria-hidden="true" />
                          <input id="country" autoComplete="country-name" aria-invalid={!!errors.country} placeholder="Country or region" {...register("country")} />
                        </div>
                        <FieldError id="country-err" message={errors.country?.message} />
                      </label>
                    </div>
                    <div className="contact-fields-row">
                      <label>
                        <span>Phone Number</span>
                        <div className={`contact-field${errors.mobile ? " is-error" : ""}`}>
                          <CircleHelp aria-hidden="true" />
                          <input id="phone" type="tel" autoComplete="tel" aria-invalid={!!errors.mobile} placeholder="Optional" {...register("mobile")} />
                        </div>
                        <FieldError id="phone-err" message={errors.mobile?.message} />
                      </label>
                      <label>
                        <span>How Can We Help?*</span>
                        <div className={`contact-field contact-select-field${errors.inquiry ? " is-error" : ""}`}>
                          <MessageSquareText aria-hidden="true" />
                          <select id="inquiry" aria-invalid={!!errors.inquiry} {...register("inquiry")}>
                            <option value="" disabled>Select inquiry type</option>
                            {inquiryOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                          </select>
                          <ChevronDown aria-hidden="true" />
                        </div>
                        <FieldError id="inquiry-err" message={errors.inquiry?.message} />
                      </label>
                    </div>

                    {inquiryType === "Technical Support" && (
                      <div className="contact-support-routing" role="note">
                        <Headphones aria-hidden="true" />
                        <div><strong>Need technical assistance?</strong><span>For faster handling, please use our dedicated Support page.</span></div>
                        <Link href="/support">Go to Support <ArrowUpRight aria-hidden="true" /></Link>
                      </div>
                    )}

                    <label className="contact-message-label">
                      <span>Message*</span>
                      <textarea id="message" rows={6} aria-invalid={!!errors.message} placeholder="Please describe your question or request and include any relevant details." className={errors.message ? "is-error" : undefined} {...register("message")} />
                      <FieldError id="message-err" message={errors.message?.message} />
                    </label>
                    <label className="contact-consent">
                      <input type="checkbox" aria-invalid={!!errors.consent} {...register("consent")} />
                      <span>By submitting this form, you agree that Navtelecom may use the provided information to respond to your inquiry. <Link href="/privacy">Privacy Policy</Link></span>
                    </label>
                    <FieldError id="consent-err" message={errors.consent?.message} />
                    <button type="submit" className="contact-button contact-button-primary contact-submit" disabled={isSubmitting}>
                      {isSubmitting ? "Sending…" : "Send Message"} {!isSubmitting && <Send aria-hidden="true" />}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </section>

          <section className="contact-next-section">
            <div className="contact-shell">
              <div className="contact-heading contact-heading-center"><p className="contact-eyebrow">AFTER YOU CONTACT US</p><h2>What happens next?</h2></div>
              <div className="contact-next-grid">
                <article><span>01</span><h3>Message Review</h3><p>We review your request and identify the appropriate Navtelecom team.</p></article>
                <ArrowRight aria-hidden="true" />
                <article><span>02</span><h3>Internal Routing</h3><p>Your message is forwarded to the relevant sales, partnership or company contact.</p></article>
                <ArrowRight aria-hidden="true" />
                <article><span>03</span><h3>Follow-Up</h3><p>The responsible team contacts you using the details provided in the form.</p></article>
              </div>
            </div>
          </section>

          <section className="contact-final-section">
            <div className="contact-shell">
              <div className="contact-final-banner">
                <div className="contact-final-glow" aria-hidden="true" />
                <div className="contact-final-content">
                  <span className="contact-final-icon"><Mail aria-hidden="true" /></span>
                  <div className="contact-final-copy">
                    <p className="contact-eyebrow contact-eyebrow-light">DIRECT CONTACT</p>
                    <h2>Prefer to write directly?</h2>
                    <p>Send your general or commercial question to our international sales team.</p>
                  </div>
                  <a className="contact-button contact-button-light" href={`mailto:${SALES_EMAIL}`}>{SALES_EMAIL} <ArrowUpRight aria-hidden="true" /></a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
