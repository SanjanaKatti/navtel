 "use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import LayoutContainer from "./LayoutContainer";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <LayoutContainer>
        <div className="flex items-center justify-between h-20 min-w-0 gap-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <div className="relative h-10 w-36 sm:h-11 sm:w-40 lg:h-12 lg:w-48">
              <Image
                src="/Navtelecom/Navtelecom_logo.svg"
                alt="Navtelecom Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Flexible space between logo and nav links - ensures minimum gap on all screens */}
          <div className="flex-1 min-w-[1rem]" />

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-3 lg:gap-5 xl:gap-7 flex-shrink-0">
            <Link
              href="/"
              className="text-gray-700 hover:text-brand-primary font-medium transition-colors whitespace-nowrap text-sm lg:text-base"
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-brand-primary font-medium transition-colors whitespace-nowrap text-sm lg:text-base"
            >
              ABOUT US
            </Link>

            {/* Products Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-brand-primary font-medium transition-colors py-8 whitespace-nowrap text-sm lg:text-base">
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
                    href="/products/software-solutions"
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
                      href="/products/software-solutions/ntc-configurator"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-primary transition-colors"
                    >
                      NTC Configurator
                    </Link>
                    <Link
                      href="/products/software-solutions/can-spy"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-primary transition-colors"
                    >
                      Can Spy
                    </Link>
                    <Link
                      href="/products/software-solutions/drc"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-primary transition-colors"
                    >
                      DRC
                    </Link>
                    <Link
                      href="/products/software-solutions/complex-events"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-primary transition-colors"
                    >
                      Complex Events
                    </Link>
                    <Link
                      href="/products/software-solutions/ntc-control"
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
              <button className="flex items-center text-gray-700 hover:text-brand-primary font-medium transition-colors py-8 whitespace-nowrap text-sm lg:text-base">
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
              className="text-gray-700 hover:text-brand-primary font-medium transition-colors whitespace-nowrap text-sm lg:text-base"
            >
              CONTACT US
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 text-gray-700 hover:text-brand-primary hover:border-brand-primary transition-colors"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </LayoutContainer>

      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <LayoutContainer className="py-4">
            <div className="flex flex-col gap-1">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-primary"
              >
                HOME
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-primary"
              >
                ABOUT US
              </Link>
              <Link
                href="/products"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-primary"
              >
                PRODUCTS
              </Link>
              <Link
                href="/products/tracking-devices"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-6 py-2 text-sm text-gray-600 hover:text-brand-primary"
              >
                Tracking Devices
              </Link>
              <Link
                href="/products/software-solutions"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-6 py-2 text-sm text-gray-600 hover:text-brand-primary"
              >
                Software Solutions
              </Link>
              <Link
                href="/support/knowledge-base"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-primary"
              >
                SUPPORT
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-primary"
              >
                CONTACT US
              </Link>
            </div>
          </LayoutContainer>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
