"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactPage = () => {
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
          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="ml-1 text-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your full name"
                  className="w-full rounded-2xl border border-gray-100 bg-brand-light-3 px-6 py-4 text-body transition-all focus:bg-white focus:outline-none focus:border-brand-primary"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="ml-1 text-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="w-full rounded-2xl border border-gray-100 bg-brand-light-3 px-6 py-4 text-body transition-all focus:bg-white focus:outline-none focus:border-brand-primary"
                />
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
                  placeholder="Company name"
                  className="w-full rounded-2xl border border-gray-100 bg-brand-light-3 px-6 py-4 text-body transition-all focus:bg-white focus:outline-none focus:border-brand-primary"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="mobile" className="ml-1 text-label">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  placeholder="+1 (555) 000-0000"
                  className="w-full rounded-2xl border border-gray-100 bg-brand-light-3 px-6 py-4 text-body transition-all focus:bg-white focus:outline-none focus:border-brand-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="country" className="ml-1 text-label">
                Country
              </label>
              <input
                type="text"
                id="country"
                placeholder="Your country"
                className="w-full rounded-2xl border border-gray-100 bg-brand-light-3 px-6 py-4 text-body transition-all focus:bg-white focus:outline-none focus:border-brand-primary"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="ml-1 text-label">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="How can we help you?"
                className="w-full resize-none rounded-2xl border border-gray-100 bg-brand-light-3 px-6 py-4 text-body transition-all focus:bg-white focus:outline-none focus:border-brand-primary"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 w-full rounded-full bg-brand-navy py-5 text-base font-black uppercase text-white shadow-xl shadow-brand-navy/20 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-primary active:scale-95"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
