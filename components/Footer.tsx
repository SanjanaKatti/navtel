"use client";
import React, { useState } from "react";
import { X } from "phosphor-react";
import Image from "next/image";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Newsletter Subscription Section */}
      <section className="bg-[#0F172A] text-white py-16 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              SUBSCRIBE TO OUR NEWSLETTER
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Stay updated with the latest news, product updates, and industry insights.
            </p>
          </div>
          <div className="max-w-md mx-auto text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-brand-primary text-white px-12 py-4 font-black text-lg hover:bg-brand-deep transition-all shadow-lg shadow-brand-primary/20 transform hover:-translate-y-1 rounded-xl"
            >
              SUBSCRIBE NOW
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-brand-navy/80 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl p-8 md:p-12 overflow-hidden animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-brand-navy transition-colors"
            >
              <X size={24} weight="bold" />
            </button>

            <div className="text-center mb-10">
              <h2 className="text-h2 mb-3">Join our <span className="text-brand-primary">Newsletter</span></h2>
              <p className="text-body-sm">Get the latest telematics updates directly in your inbox.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-label ml-1">Company</label>
                <input
                  required
                  type="text"
                  placeholder="Your company name"
                  className="w-full px-5 py-3.5 bg-brand-light-3 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-primary focus:bg-white transition-all text-body-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-label ml-1">Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="Your name"
                  className="w-full px-5 py-3.5 bg-brand-light-3 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-primary focus:bg-white transition-all text-body-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-label ml-1">Email Address</label>
                <input
                  required
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-5 py-3.5 bg-brand-light-3 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-primary focus:bg-white transition-all text-body-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-label ml-1">Mobile Number</label>
                  <input
                    required
                    type="tel"
                    placeholder="+1..."
                    className="w-full px-5 py-3.5 bg-brand-light-3 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-primary focus:bg-white transition-all text-body-sm"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-label ml-1">Country</label>
                  <input
                    required
                    type="text"
                    placeholder="Your country"
                    className="w-full px-5 py-3.5 bg-brand-light-3 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-primary focus:bg-white transition-all text-body-sm"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-brand-navy text-white rounded-xl font-black text-sm hover:bg-brand-primary transition-all transform hover:-translate-y-1 active:scale-95 shadow-lg shadow-brand-navy/20 mt-4"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#0F172A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-700 pb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="relative h-12 w-48 brightness-0 invert">
                  <Image
                    src="/Navtelecom/Navtelecom_logo.svg"
                    alt="Navtelecom Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Leading developer and manufacturer of professional telematics
                equipment for fleet management, asset tracking, and personal
                security.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Equipment</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li>
                  <a href="/products/tracking-devices/start-series" className="hover:text-blue-400 transition-colors">
                    START Series
                  </a>
                </li>
                <li>
                  <a href="/products/tracking-devices/smart-series" className="hover:text-blue-400 transition-colors">
                    SMART Series
                  </a>
                </li>
                <li>
                  <a href="/products/tracking-devices/signal-series" className="hover:text-blue-400 transition-colors">
                    SIGNAL Series
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Accessories
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Support</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li>
                  <a href="/support/knowledge-base" className="hover:text-blue-400 transition-colors">
                    Knowledge Base
                  </a>
                </li>
                <li>
                  <a href="/support/telegram-bot" className="hover:text-blue-400 transition-colors">
                    Telegram Support Bot
                  </a>
                </li>
                <li>
                  <a href="/support/warranty" className="hover:text-blue-400 transition-colors">
                    Warranty
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-blue-400 transition-colors">
                    Contact Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Contact</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li>support@navtelecom.com</li>
                <li>9xx</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2026 Navtelecom. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

