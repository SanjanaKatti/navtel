"use client";
import React from "react";
import Link from "next/link";
import { useSiteDialogs } from "@/components/lead-modal/SiteDialogs";
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
      ["Use cases", "/use-cases"],
      ["SIGMA M-3003", "/products/communication-modules/sigma-m3003"],
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
      ["Software developers", "/support/software-developers"],
      ["Compatible platforms", "/support/compatible-platforms"],
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
  const { openNewsletter } = useSiteDialogs();

  return (
    <footer className="nt-footer">
      <div className="nt-footer-shell">
        <section className="nt-footer-newsletter" aria-labelledby="newsletter-title">
          <div>
            <p className="nt-footer-eyebrow">STAY IN THE LOOP</p>
            <h2 id="newsletter-title">Subscribe to our newsletter</h2>
            <p>Get company news, product announcements, software updates and selected industry insights.</p>
          </div>
          <button type="button" className="nt-footer-subscribe" onClick={openNewsletter}>
            Subscribe now <ArrowIcon />
          </button>
        </section>

        <div className="nt-footer-main">
          <div className="nt-footer-brand">
            <Link href="/" aria-label="Navtelecom home">
              <img className="nt-footer-logo-image" src="/Navtelecom/logo-navtelecom-EN-light.png" alt="Navtelecom" />
            </Link>
            <p>Developer and manufacturer of professional telematics hardware for vehicle monitoring and integration with onboard systems and sensors.</p>
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
            <Link href="/terms">Terms of use</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
