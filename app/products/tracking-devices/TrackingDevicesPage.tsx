"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bluetooth,
  BusFront,
  Cable,
  CircleGauge,
  Cpu,
  Database,
  FileText,
  Fuel,
  Network,
  Navigation2,
  RadioTower,
  Route,
  Satellite,
  Settings2,
  ShieldCheck,
  Thermometer,
  UserRoundCheck,
} from "lucide-react";
import "./tracking-devices-page.css";

const hero = {
  eyebrow: "TRACKING DEVICES",
  title: "Professional GPS Tracking Solution",
  text: "Comprehensive range of telematics devices designed for fleet management, vehicle tracking, fuel monitoring and industrial automation.",
  visualTitle: "COMPLETE DEVICE RANGE",
  visualText: "START · SMART · SIGNAL",
};

const series = [
  {
    name: "START",
    fullName: "START Series",
    label: "COST-EFFECTIVE · COMPACT",
    bestFor: "Best for essential vehicle tracking, fuel monitoring and connected sensors.",
    points: ["Compact installation", "BLE and wired sensor options", "Essential fleet functions"],
    href: "/products/tracking-devices/start-series",
    className: "trk-series-start",
    image: "/tracking-devices/start.png",
  },
  {
    name: "SMART",
    fullName: "SMART Series",
    label: "FLEXIBLE CONNECTIVITY · CUSTOM LOGIC",
    bestFor: "Best for CAN, Modbus, advanced sensor integration and custom device logic.",
    points: ["CAN options", "RS-485 and Modbus", "Custom algorithms"],
    href: "/products/tracking-devices/smart-series",
    className: "trk-series-smart",
    image: "/tracking-devices/smart.png",
  },
  {
    name: "SIGNAL",
    fullName: "SIGNAL Series",
    label: "PROFESSIONAL · EXPANDED I/O",
    bestFor: "Best for advanced fleet operations, external antennas and communication with drivers.",
    points: ["Expanded inputs and outputs", "External antennas", "Driver communication"],
    href: "/products/tracking-devices/signal-series",
    className: "trk-series-signal",
    image: "/tracking-devices/signal.png",
  },
];

const applications = [
  {
    icon: Route,
    title: "Fleet Vehicle Tracking",
    text: "Track vehicle location, routes, trips, ignition status and engine hours.",
    href: "/products/compare?devices=S-2011,S-2421,S-4011,S-4511",
  },
  {
    icon: Fuel,
    title: "Fuel Monitoring & Theft Detection",
    text: "Monitor fuel level, consumption, refuelling and possible fuel theft.",
    href: "/products/compare?devices=S-2013,S-2433,S-4013,S-4533",
  },
  {
    icon: Cpu,
    title: "CAN & Vehicle Diagnostics",
    text: "Collect vehicle parameters, diagnostic information and operational data through CAN.",
    href: "/products/compare?devices=S-2435,S-2437,S-4535,S-4537",
  },
  {
    icon: Thermometer,
    title: "Refrigerated Transport Monitoring",
    text: "Monitor temperature, humidity and door status in refrigerated vehicles and temperature-controlled transport.",
    href: "/products/compare?devices=S-2433,S-4511,S-4533,S-4535",
  },
  {
    icon: UserRoundCheck,
    title: "Driver Identification & Eco Driving",
    text: "Identify drivers and monitor driving behaviour, safety and efficiency.",
    href: "/products/compare?devices=S-2421,S-2433,S-4511,S-4533",
  },
  {
    icon: BusFront,
    title: "Public Transport & Driver Communication",
    text: "Enable voice communication, driver buttons and additional controls for public transport and specialised vehicles.",
    href: "/products/compare?devices=S-4751,S-4753,S-2651,S-2653",
  },
];

function DeviceVisual() {
  return (
    <div className="track-device-visual" aria-label="Telematics data flow">
      <span className="track-product-orbit trk-orbit-one" />
      <span className="track-product-orbit trk-orbit-two" />
      <span className="track-product-dot trk-dot-one" />
      <span className="track-product-dot trk-dot-two" />
      <div className="track-telemetry-core">
        <span className="track-core-radar"><Navigation2 aria-hidden="true" /></span>
        <strong>LIVE TELEMATICS</strong>
        <small>Position · Connectivity · Data</small>
      </div>
      <div className="track-node-orbit trk-orbit-gnss"><div className="track-telemetry-node"><Satellite aria-hidden="true" /><span><strong>GNSS</strong><small>Positioning</small></span></div></div>
      <div className="track-node-orbit trk-orbit-network"><div className="track-telemetry-node"><RadioTower aria-hidden="true" /><span><strong>CELLULAR</strong><small>Connectivity</small></span></div></div>
      <div className="track-node-orbit trk-orbit-data"><div className="track-telemetry-node"><Database aria-hidden="true" /><span><strong>TELEMETRY</strong><small>Data exchange</small></span></div></div>
    </div>
  );
}

function StaticHero() {
  return (
    <section className="track-hero trk-hero-blue">
      <div className="track-hero-grid" aria-hidden="true" />
      <div className="track-shell track-hero-layout">
        <div className="track-hero-copy">
          <p className="track-eyebrow">{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
          <p className="track-lead">{hero.text}</p>
          <Link className="track-button track-button-primary" href="/products/all-devices">Explore All Devices <ArrowRight aria-hidden="true" /></Link>
        </div>
        <DeviceVisual />
      </div>
    </section>
  );
}

export default function TrackingDevicesPage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const nodes = root.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("trk-is-visible");
      });
    }, { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="track-page pt-20" ref={rootRef}>
      <main>
        <StaticHero />

        <section className="track-series track-section" data-reveal>
          <div className="track-shell">
            <div className="track-heading track-heading-action">
              <div><p className="track-eyebrow">DISCOVER OUR LINEUP</p><h2>Device Series for Every Fleet</h2></div>
              <Link className="track-button track-button-outline" href="/products/all-devices">Explore All Devices <ArrowUpRight aria-hidden="true" /></Link>
            </div>
            <div className="track-series-grid">
              {series.map((item) => (
                <Link className={`track-series-card ${item.className}`} href={item.href} key={item.name}>
                  <div className="track-series-title"><div><p>{item.label}</p><h3>{item.fullName}</h3></div><ArrowUpRight aria-hidden="true" /></div>
                  <div className="track-series-device"><img src={item.image} alt={`Navtelecom ${item.name} tracking device`} /></div>
                  <p className="track-best-for">{item.bestFor}</p>
                  <ul>{item.points.map((point) => <li key={point}><ShieldCheck aria-hidden="true" />{point}</li>)}</ul>
                  <strong>Explore {item.name} Series <ArrowRight aria-hidden="true" /></strong>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="track-applications track-section" data-reveal>
          <div className="track-shell">
            <div className="track-heading track-heading-center"><p className="track-eyebrow">CHOOSE BY APPLICATION</p><h2>Built for real fleet requirements.</h2><p>Start with the task you need to solve, then compare compatible devices and interfaces.</p></div>
            <div className="track-application-grid">
              {applications.map(({ icon: Icon, title, text, href }, index) => (
                <Link className="track-application-link" href={href} key={title}>
                  <article><div><span>{String(index + 1).padStart(2, "0")}</span><Icon aria-hidden="true" /></div><h3>{title}</h3><p>{text}</p></article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="track-flexibility track-section" data-reveal>
          <div className="track-shell track-flex-card">
            <div className="track-flex-copy"><p className="track-eyebrow track-eyebrow-light">FLEXIBLE BY DESIGN</p><h2>Choose the right connectivity for each project.</h2><p>From essential tracking to complex vehicle and industrial integration, select the interfaces and capabilities your deployment actually needs.</p></div>
            <div className="track-flex-grid">
              <div><Bluetooth aria-hidden="true" /><strong>BLE</strong><small>Wireless sensors</small></div>
              <div><Cable aria-hidden="true" /><strong>RS-485</strong><small>Wired equipment</small></div>
              <div><Network aria-hidden="true" /><strong>CAN</strong><small>Vehicle data</small></div>
              <div><Settings2 aria-hidden="true" /><strong>I/O</strong><small>Signals and control</small></div>
            </div>
          </div>
        </section>

        <section className="track-resource track-section" data-reveal>
          <div className="track-shell">
            <div className="track-heading track-heading-center"><p className="track-eyebrow">PRODUCT RESOURCES</p><h2>Compare devices or request the catalogue.</h2><p>Use the detailed comparison page to filter the range, or request the current catalogue from our team.</p></div>
            <div className="track-resource-grid">
              <Link href="/products/all-devices"><span><CircleGauge aria-hidden="true" /></span><div><p>ONLINE COMPARISON</p><h3>Explore All Devices</h3><small>Filter devices by series, network, interfaces, inputs, outputs and other specifications.</small></div><ArrowUpRight aria-hidden="true" /></Link>
              <Link href="/contact?request=product-catalogue"><span><FileText aria-hidden="true" /></span><div><p>PRODUCT CATALOGUE</p><h3>Request the Current Catalogue</h3><small>Send a request and receive the appropriate product materials from our sales team.</small></div><ArrowUpRight aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section className="track-final track-section" data-reveal>
          <div className="track-shell"><div className="track-final-banner"><div><p className="track-eyebrow track-eyebrow-light">DEVICE SELECTION</p><h2>Not sure which device fits your requirements?</h2><p>Tell us about your vehicles, sensors, network and integration requirements. We’ll help you narrow down the options.</p></div><Link className="track-button track-button-light" href="/contact">Talk to Sales <ArrowRight aria-hidden="true" /></Link></div></div>
        </section>
      </main>
    </div>
  );
}
