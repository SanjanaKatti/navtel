"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./unified-header.css";

const productGroups = [
  {
    title: "Tracking Devices",
    description: "GPS trackers for fleets, transport and connected equipment",
    href: "/products/tracking-devices",
    links: [
      ["START Series", "/products/tracking-devices/start-series"],
      ["SMART Series", "/products/tracking-devices/smart-series"],
      ["SIGNAL Series", "/products/tracking-devices/signal-series"],
      ["Compare all devices", "/products/all-devices"],
    ],
    note: "",
  },
  {
    title: "Accessories",
    description: "Modules that extend tracker capabilities",
    href: "",
    links: [["SIGMA M-3003", "/products/communication-modules/sigma-m3003"]],
    note: "More accessories coming soon",
  },
  {
    title: "Software Solutions",
    description: "Configuration, diagnostics and on-device automation tools",
    href: "/products/software-solutions",
    links: [
      ["NTC Configurator", "/products/software-solutions/ntc-configurator"],
      ["CAN Spy", "/products/software-solutions/can-spy"],
      ["DRC", "/products/software-solutions/drc"],
      ["Complex Events", "/products/software-solutions/complex-events"],
      ["NTC Control", "/products/software-solutions/ntc-control"],
      ["Eco Driving", "/products/software-solutions/eco-driving"],
    ],
    note: "",
  },
];

const supportResources = [
  ["Frequently Asked Questions", "/support/faq"],
  ["Knowledge Base", "/support/knowledge-base"],
  ["Software Developers", "/support/software-developers"],
  ["Compatible Platforms", "/support/compatible-platforms"],
  ["Warranty", "/support/warranty"],
];

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m7 9 5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={open ? "M6 6l12 12M18 6 6 18" : "M4 7h16M4 12h16M4 17h16"} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ProductsMenu({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="unified-products-menu" aria-label="Product categories">
      <div className="unified-products-intro">
        <span>PRODUCTS</span>
        <strong>One connected telematics platform</strong>
        <p>Choose hardware, extend it with accessories and manage it with Navtelecom software.</p>
      </div>
      {productGroups.map((group) => (
        <section className="unified-products-group" key={group.title}>
          {group.href ? (
            <Link className="unified-products-title" href={group.href} onClick={onNavigate}>
              {group.title}
              <ArrowIcon />
            </Link>
          ) : (
            <div className="unified-products-title is-static">{group.title}</div>
          )}
          <p>{group.description}</p>
          <div className="unified-products-links">
            {group.links.map(([label, href]) => (
              <Link href={href} key={href} onClick={onNavigate}>
                {label}
              </Link>
            ))}
          </div>
          {group.note && <small>{group.note}</small>}
        </section>
      ))}
    </div>
  );
}

function SupportMenu({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="unified-support-menu" aria-label="Support options">
      <div className="unified-support-intro">
        <span>SUPPORT</span>
        <strong>Get the right help quickly</strong>
        <p>Email and Telegram requests are registered in the same technical support ticket system.</p>
      </div>
      <section className="unified-support-contact">
        <p>CREATE A SUPPORT TICKET</p>
        <a href="mailto:support@navtelecom.ru">
          <strong>Email Support</strong>
          <small>Send technical details and attachments</small>
          <ArrowIcon />
        </a>
        <a href="https://t.me/NavtelecomSupport_bot" target="_blank" rel="noreferrer">
          <strong>Telegram Bot</strong>
          <small>Create a ticket from Telegram</small>
          <ArrowIcon />
        </a>
      </section>
      <section className="unified-support-resources">
        <p>SUPPORT RESOURCES</p>
        <div>
          {supportResources.map(([label, href]) => (
            <Link href={href} key={href} onClick={onNavigate}>
              {label}
              <ArrowIcon />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function UnifiedHeader({ active = "" }: { active?: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const close = () => setMobileOpen(false);
  const activeClass = (section: string) =>
    section === active || (section === "products" && active === "software")
      ? "active"
      : undefined;

  return (
    <header className={`unified-header${mobileOpen ? " mobile-open" : ""}`}>
      <div className="unified-header-shell">
        <Link className="unified-header-brand" href="/" aria-label="Navtelecom home" onClick={close}>
          <picture>
            <source media="(prefers-color-scheme: dark)" srcSet="/brand/logo-navtelecom-EN-light.png" />
            <img src="/brand/navtelecom-logo-en.svg" alt="Navtelecom Telematics Systems" />
          </picture>
        </Link>
        <nav className="unified-header-nav" aria-label="Main navigation">
          <Link className={activeClass("home")} href="/" onClick={close}>
            Home
          </Link>
          <div className="unified-products-nav">
            <Link className={activeClass("products")} href="/products">
              Products <ChevronIcon />
            </Link>
            <ProductsMenu onNavigate={close} />
          </div>
          <Link className={activeClass("use-cases")} href="/use-cases" onClick={close}>
            Use Cases
          </Link>
          <div className="unified-support-nav">
            <Link className={activeClass("support")} href="/support">
              Support <ChevronIcon />
            </Link>
            <SupportMenu onNavigate={close} />
          </div>
          <Link className={activeClass("about")} href="/about" onClick={close}>
            About Us
          </Link>
        </nav>
        <Link
          className={
            activeClass("contact")
              ? "unified-header-cta active"
              : "unified-header-cta"
          }
          href="/contact"
          onClick={close}
        >
          Contact Sales <ArrowIcon />
        </Link>
        <button
          className="unified-menu-toggle"
          type="button"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((value) => !value)}
        >
          <MenuIcon open={mobileOpen} />
        </button>
      </div>
      <div className="unified-mobile-panel">
        <nav aria-label="Mobile navigation">
          <Link href="/" onClick={close}>Home</Link>
          <Link href="/use-cases" onClick={close}>Use Cases</Link>
          <Link href="/support" onClick={close}>Support</Link>
          <Link href="/about" onClick={close}>About Us</Link>
          <Link href="/contact" onClick={close}>Contact Sales</Link>
        </nav>
        <ProductsMenu onNavigate={close} />
        <SupportMenu onNavigate={close} />
      </div>
    </header>
  );
}
