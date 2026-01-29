import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <div className="relative h-12 w-48">
              <Image
                src="/Navtelecom/Navtelecom_logo.svg"
                alt="Navtelecom Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            <Link
              href="/"
              className="text-gray-700 hover:text-brand-primary font-medium transition-colors"
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-brand-primary font-medium transition-colors"
            >
              ABOUT US
            </Link>
            <Link
              href="/about/color"
              className="text-gray-700 hover:text-brand-primary font-medium transition-colors"
            >
              ABOUT US – COLOR
            </Link>

            {/* Products Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-brand-primary font-medium transition-colors py-8">
                PRODUCTS
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Category Dropdown - right-aligned so it doesn't get cut off */}
              <div className="absolute right-0 top-full w-64 bg-white border border-gray-200 shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 rounded-xl">
                {/* Tracking Devices */}
                <div className="relative group/sub">
                  <Link
                    href="/products/tracking-devices"
                    className="w-full flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-primary transition-colors"
                  >
                    <span className="flex-1 text-left">Tracking Devices</span>
                    <svg
                      className="w-4 h-4 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>

                  {/* Series Dropdown - opens to the left so it stays in view */}
                  <div className="absolute right-full top-0 w-64 bg-white border border-gray-200 shadow-xl py-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 z-50 rounded-xl ml-0">
                    <Link
                      href="/products/tracking-devices/start-series"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-primary transition-colors"
                    >
                      START Series
                    </Link>
                    <Link
                      href="/products/tracking-devices/smart-series"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-primary transition-colors"
                    >
                      SMART Series
                    </Link>
                    <Link
                      href="/products/tracking-devices/signal-series"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-primary transition-colors"
                    >
                      SIGNAL Series
                    </Link>
                  </div>
                </div>

                {/* Software Solutions */}
                <div className="relative group/sub">
                  <Link
                    href="/products/software-products"
                    className="w-full flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-primary transition-colors"
                  >
                    <span className="flex-1 text-left">Software Solutions</span>
                    <svg
                      className="w-4 h-4 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>

                  {/* Software Dropdown - opens to the left so it stays in view */}
                  <div className="absolute right-full top-0 w-64 bg-white border border-gray-200 shadow-xl py-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 z-50 rounded-xl">
                    <Link
                      href="/products/software-products/ntc-configurator"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-primary transition-colors"
                    >
                      NTC Configurator
                    </Link>
                    <Link
                      href="/products/software-products/can-spy"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-primary transition-colors"
                    >
                      Can Spy
                    </Link>
                    <Link
                      href="/products/software-products/drc"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-primary transition-colors"
                    >
                      DRC
                    </Link>
                    <Link
                      href="/products/software-products/complex-events"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-primary transition-colors"
                    >
                      Complex Events
                    </Link>
                    <Link
                      href="/products/software-products/ntc-control"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-primary transition-colors"
                    >
                      NTC Control
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-brand-primary font-medium transition-colors py-8">
                SUPPORT
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Support Dropdown Menu - right-aligned so it doesn't get cut off */}
              <div className="absolute right-0 top-full w-64 bg-white border border-gray-200 shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 rounded-xl">
                <Link
                  href="/support/knowledge-base"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-primary transition-colors"
                >
                  Knowledge Base
                </Link>
                <Link
                  href="/support/telegram-bot"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-primary transition-colors"
                >
                  Telegram Support Bot
                </Link>
                <Link
                  href="/support/warranty"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-primary transition-colors"
                >
                  Warranty
                </Link>
              </div>
            </div>

            <Link
              href="/contact"
              className="text-gray-700 hover:text-brand-primary font-medium transition-colors"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
