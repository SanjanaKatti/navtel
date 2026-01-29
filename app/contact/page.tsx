"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy overflow-x-hidden">
      <Navbar />

      <main className="pt-20">
        <section className="py-12 md:py-16 bg-brand-light-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">
              
              {/* Left Content: Offices */}
              <div className="space-y-12 lg:pt-4">
                <div className="mb-12">
                  <p className="text-caption text-brand-primary mb-3">GET IN TOUCH</p>
                  <h1 className="text-display leading-tight">
                    Reach out <span className="text-brand-primary">to us!</span>
                  </h1>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-12">
                  {/* India Office */}
                  <div className="space-y-5 group">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-8 bg-brand-primary rounded-full"></div>
                      <h2 className="text-h2 text-brand-navy group-hover:text-brand-primary transition-colors">India Office</h2>
                    </div>
                    <p className="text-body text-gray-500 leading-relaxed max-w-sm">
                      Our India team is ready to support you with product details, technical assistance, or partnership inquiries.
                    </p>
                    <div className="space-y-4 pt-2">
                      <div className="flex items-center gap-4 text-body font-bold text-brand-navy">
                        <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-primary border border-gray-100">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        sales@navtelecom.in
                      </div>
                      <div className="flex items-start gap-4 text-body text-gray-500">
                        <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-primary border border-gray-100 mt-1 flex-shrink-0">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <p className="pt-1">
                          Sector 49, Sohna Road,<br />
                          Spaze I-Tech Park, Tower B4, Unit 408,<br />
                          Gurugram, Haryana, 122018
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* UAE Office */}
                  <div className="space-y-5 group">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-8 bg-brand-primary rounded-full"></div>
                      <h2 className="text-h2 text-brand-navy group-hover:text-brand-primary transition-colors">UAE Office</h2>
                    </div>
                    <p className="text-body text-gray-500 leading-relaxed max-w-sm">
                      For clients and distributors across the Middle East region, please contact our UAE branch.
                    </p>
                    <div className="space-y-4 pt-2">
                      <div className="flex items-center gap-4 text-body font-bold text-brand-navy">
                        <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-primary border border-gray-100">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        sales@navtelecom-iot.com
                      </div>
                      <div className="flex items-start gap-4 text-body text-gray-500">
                        <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-primary border border-gray-100 mt-1 flex-shrink-0">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <p className="pt-1">
                          Warehouse No. LV-70-D,<br />
                          Hamriyah Free Zone, Sharjah,<br />
                          United Arab Emirates
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Follow Us */}
                <div className="pt-8 border-t border-brand-navy/5">
                  <h3 className="text-label text-brand-navy mb-5">FOLLOW US</h3>
                  <div className="flex gap-4">
                    <a href="#" className="w-12 h-12 bg-brand-navy text-white rounded-xl flex items-center justify-center hover:bg-brand-primary transition-all transform hover:-translate-y-1 shadow-lg shadow-brand-navy/10">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a href="#" className="w-12 h-12 bg-white border-2 border-gray-100 text-brand-primary rounded-xl flex items-center justify-center hover:border-brand-primary transition-all transform hover:-translate-y-1 shadow-sm">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-brand-navy/10 border border-white relative z-10">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-label ml-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Your full name"
                        className="w-full px-6 py-4 bg-brand-light-3 border border-gray-100 rounded-2xl focus:outline-none focus:border-brand-primary focus:bg-white transition-all text-body"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-label ml-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="your@email.com"
                        className="w-full px-6 py-4 bg-brand-light-3 border border-gray-100 rounded-2xl focus:outline-none focus:border-brand-primary focus:bg-white transition-all text-body"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-label ml-1">Name of the Company</label>
                      <input
                        type="text"
                        id="company"
                        placeholder="Company name"
                        className="w-full px-6 py-4 bg-brand-light-3 border border-gray-100 rounded-2xl focus:outline-none focus:border-brand-primary focus:bg-white transition-all text-body"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="mobile" className="text-label ml-1">Mobile Number</label>
                      <input
                        type="tel"
                        id="mobile"
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-6 py-4 bg-brand-light-3 border border-gray-100 rounded-2xl focus:outline-none focus:border-brand-primary focus:bg-white transition-all text-body"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="country" className="text-label ml-1">Country</label>
                    <input
                      type="text"
                      id="country"
                      placeholder="Your country"
                      className="w-full px-6 py-4 bg-brand-light-3 border border-gray-100 rounded-2xl focus:outline-none focus:border-brand-primary focus:bg-white transition-all text-body"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-label ml-1">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="How can we help you?"
                      className="w-full px-6 py-4 bg-brand-light-3 border border-gray-100 rounded-2xl focus:outline-none focus:border-brand-primary focus:bg-white transition-all text-body resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 bg-brand-navy text-white rounded-2xl font-black text-base hover:bg-brand-primary transition-all transform hover:-translate-y-1 active:scale-95 shadow-xl shadow-brand-navy/20 mt-4"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
