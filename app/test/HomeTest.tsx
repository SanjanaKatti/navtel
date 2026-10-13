"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CaretDown } from "phosphor-react";
import "../products/software-solutions/ntc-configurator/ntc-configurator.css";
import "./home-test.css";

const highlights = [
  {
    id: "complex-events",
    label: "Software",
    title: "Complex Events",
    subtitle: "From inputs to intelligence.",
    features: [
      "Visual logic builder",
      "Real-time reactions",
      "Third-party integration",
      "If / then conditions",
    ],
    href: "/products/software-solutions/complex-events",
    cta: "Learn more",
  },
  {
    id: "smart",
    label: "SMART S-4513",
    title: "SMART S-4513",
    subtitle: "New platform. Built for tomorrow. Available today.",
    features: ["4G • dual SIM", "RS-485 • 1-Wire • Modbus", "Bluetooth", "Backup battery"],
    href: "/products/tracking-devices/smart-series/s-4513",
    cta: "Discover",
  },
  {
    id: "start",
    label: "START S-2011",
    title: "START S-2011",
    subtitle: "Compact. Connected. Controlled.",
    features: ["Ultra-compact", "BLE sensors", "Backup battery", "Cost-effective"],
    href: "/products/tracking-devices/start-series/s-2011",
    cta: "Explore",
  },
];

const series = [
  {
    title: "START Series",
    kicker: "Cost-effective, ultra-compact",
    description: "For essential GPS tracking and entry-level fleet management.",
    features: ["4G connectivity", "Plug and play", "Small form factor"],
    image: "/Navtelecom/start_pl_1600x1200.png",
    href: "/products/tracking-devices/start-series",
  },
  {
    title: "SMART Series",
    kicker: "Flexible connectivity, custom logic",
    description: "Supports CAN, BLE and RS-485. Ideal for fuel monitoring and sensor integration.",
    features: ["CAN bus support", "Bluetooth", "Fuel monitoring"],
    image: "/Navtelecom/smart_pl_1600x1200.png",
    href: "/products/tracking-devices/smart-series",
  },
  {
    title: "SIGNAL Series",
    kicker: "External antennas, pro-grade features",
    description: "Extended GNSS, fuel control, diagnostics and voice communication with drivers.",
    features: ["High-precision GNSS", "Voice communication", "Advanced inputs and outputs"],
    image: "/Navtelecom/signal_pl_1600x1200.png",
    href: "/products/tracking-devices/signal-series",
  },
];

const tools = [
  {
    number: "01",
    name: "NTC Configurator",
    description: "Desktop tool for device setup, telemetry and remote configuration.",
    href: "/products/software-solutions/ntc-configurator",
  },
  {
    number: "02",
    name: "CAN Spy",
    description: "Scan and decode CAN bus traffic for vehicle data validation.",
    href: "/products/software-solutions/can-spy",
  },
  {
    number: "03",
    name: "Complex Events",
    description: "Build custom device logic from inputs, conditions and actions.",
    href: "/products/software-solutions/complex-events",
  },
  {
    number: "04",
    name: "DRC",
    description: "Cloud platform for device management, updates and diagnostics.",
    href: "/products/software-solutions/drc",
  },
  {
    number: "05",
    name: "NTC Control",
    description: "Mobile app for quick on-site setup and validation.",
    href: "/products/software-solutions/ntc-control",
  },
];

const stats = [
  { value: "20", label: "Years in industry" },
  { value: "3M+", label: "Total devices" },
  { value: "45", label: "Countries deployed" },
  { value: "3K", label: "Customers worldwide" },
];

const partners = [
  "/Navtelecom/logo_1.png",
  "/Navtelecom/logo_2.png",
  "/Navtelecom/logo_3.png",
  "/Navtelecom/logo_4.png",
  "/Navtelecom/logo_5.png",
  "/Navtelecom/logo_6.png",
  "/Navtelecom/logo_7.svg",
  "/Navtelecom/logo_8.png",
  "/Navtelecom/logo_9.svg",
  "/Navtelecom/logo_10.png",
];

export default function HomeTest() {
  const [activeHighlight, setActiveHighlight] = useState(highlights[0].id);
  const highlight = highlights.find((item) => item.id === activeHighlight) ?? highlights[0];

  return (
    <div className="ntc-page">
      <main>
        <section className="ntc-hero">
          <div className="ntc-shell ntc-hero-grid">
            <div>
              <p className="ntc-eyebrow">Powered by Navtelecom</p>
              <h1>
                Powerful solutions
                <br />
                for integrators
              </h1>
              <p className="ntc-lead">
                Reliable tracking for every fleet. From GPS tracking to CAN
                diagnostics, built for integrators and trusted worldwide.
              </p>
              <div className="home-actions">
                <Link className="home-button" href="/products/tracking-devices">
                  Explore devices <ArrowRight aria-hidden="true" />
                </Link>
                <Link
                  className="home-button home-button-secondary"
                  href="/products/software-solutions"
                >
                  Explore software
                </Link>
              </div>
            </div>

            <div className="home-spotlight">
              <div className="home-spotlight-tabs" role="tablist" aria-label="Featured products">
                {highlights.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={activeHighlight === item.id}
                    onClick={() => setActiveHighlight(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <p className="ntc-eyebrow">Featured</p>
              <h2>{highlight.title}</h2>
              <p>{highlight.subtitle}</p>
              <ul className="home-chips">
                {highlight.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Link className="home-button" href={highlight.href}>
                {highlight.cta} <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className="ntc-section">
          <div className="ntc-shell">
            <div className="ntc-section-heading">
              <p className="ntc-eyebrow">Device series</p>
              <h2>Hardware for every fleet</h2>
              <p>
                Three device families cover compact tracking, sensor integration
                and professional installations.
              </p>
            </div>
            <div className="home-series-grid">
              {series.map((item) => (
                <article className="home-series-card" key={item.title}>
                  <p className="home-series-kicker">{item.kicker}</p>
                  <h3>{item.title}</h3>
                  <div className="home-series-media">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="(max-width: 900px) 90vw, 30vw"
                    />
                  </div>
                  <p>{item.description}</p>
                  <ul className="home-chips">
                    {item.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <Link className="home-button" href={item.href}>
                    View series <ArrowRight aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ntc-section ntc-features-section">
          <div className="ntc-shell">
            <div className="ntc-section-heading">
              <p className="ntc-eyebrow">Software</p>
              <h2>Tools for configuration, CAN analysis and cloud control</h2>
            </div>
            <div className="home-tool-grid">
              {tools.map((tool) => (
                <Link className="home-tool-card" href={tool.href} key={tool.name}>
                  <span>{tool.number}</span>
                  <h3>{tool.name}</h3>
                  <p>{tool.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="ntc-section ntc-process-section">
          <div className="ntc-shell">
            <div className="ntc-section-heading">
              <p className="ntc-eyebrow">Navtelecom</p>
              <h2>Trusted in telematics deployments worldwide</h2>
            </div>
            <div className="home-stat-grid">
              {stats.map((stat) => (
                <article className="home-stat" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <p>{stat.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ntc-section">
          <div className="ntc-shell">
            <div className="ntc-section-heading">
              <p className="ntc-eyebrow">Partners</p>
              <h2>Working with telematics teams around the world</h2>
            </div>
            <div className="home-partner-frame">
              <div className="home-marquee-track">
                {[...partners, ...partners].map((src, index) => (
                  <div className="home-partner" key={`${src}-${index}`}>
                    <Image src={src} alt="" fill sizes="180px" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="ntc-section ntc-features-section">
          <div className="ntc-shell">
            <div className="ntc-section-heading">
              <p className="ntc-eyebrow">Support</p>
              <h2>Frequently asked questions</h2>
            </div>
            <div className="home-faq">
              <details>
                <summary>
                  Where can I download the Configurator?
                  <CaretDown aria-hidden="true" />
                </summary>
                <div className="home-faq-body">
                  <p>
                    Download installers for Windows, macOS and Linux from the
                    Navtelecom Wiki. The Wiki lists the current build for each
                    platform.
                  </p>
                  <p>
                    <a
                      href="https://wiki.navtelecom.ru/en/home/ntc_configurator#downloads"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open downloads
                    </a>
                  </p>
                </div>
              </details>
              <details>
                <summary>
                  How can I manage devices remotely?
                  <CaretDown aria-hidden="true" />
                </summary>
                <div className="home-faq-body">
                  <p>
                    Send SMS commands, connect through NTC Configurator over
                    the internet, or manage fleets in DRC.
                  </p>
                  <p>
                    <a
                      href="https://wiki.navtelecom.ru/en/home/devices/commands"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Command list
                    </a>
                    {" · "}
                    <a
                      href="https://wiki.navtelecom.ru/en/home/devices/diagnostics/remote_configurator"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Remote configurator
                    </a>
                    {" · "}
                    <a
                      href="https://wiki.navtelecom.ru/en/home/drc"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      DRC
                    </a>
                  </p>
                </div>
              </details>
              <details>
                <summary>
                  Where can I find SMS and GPRS commands?
                  <CaretDown aria-hidden="true" />
                </summary>
                <div className="home-faq-body">
                  <p>
                    The full command list is published in the Wiki. For a
                    combined command, contact support at{" "}
                    <a href="mailto:support@navtelecom.ru">support@navtelecom.ru</a>.
                  </p>
                  <p>
                    <a
                      href="https://wiki.navtelecom.ru/en/home/devices/commands"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Full command list
                    </a>
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>

        <section className="ntc-guides-section">
          <div className="ntc-shell">
            <div className="ntc-guides-box">
              <div>
                <h2>Talk with the Navtelecom team</h2>
                <p>
                  Ask about device selection, integration or a deployment
                  already in the field.
                </p>
              </div>
              <Link className="ntc-light-button" href="/contact">
                Contact us <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
