"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Braces,
  CarFront,
  CloudCog,
  Code2,
  Download,
  Gauge,
  GitBranch,
  Laptop,
  Network,
  RadioTower,
  Settings2,
  ShieldCheck,
  Smartphone,
  SlidersHorizontal,
  Wrench,
} from "lucide-react";
import "./software-solutions-page.css";

const software = [
  {
    name: "NTC Configurator",
    label: "DEVICE CONFIGURATION",
    description: "Configure device settings, inspect live telemetry and prepare configurations in one professional desktop tool",
    platforms: ["Windows", "macOS", "Linux"],
    icon: SlidersHorizontal,
    logo: "/software/solutions/ntc-configurator.png",
    className: "configurator",
    href: "/products/software-solutions/ntc-configurator",
  },
  {
    name: "CAN Spy",
    label: "CAN ENGINEERING",
    description: "Capture, analyze and decode CAN data, validate parameters and create decoding files for vehicle integration",
    platforms: ["CAN analysis", "Decoding files"],
    icon: Activity,
    logo: "/software/solutions/can-spy.svg",
    className: "sw-can-spy",
    href: "/products/software-solutions/can-spy",
  },
  {
    name: "DRC",
    label: "REMOTE DEVICE MANAGEMENT",
    description: "Configure, update and manage large device fleets remotely from a centralized web interface",
    platforms: ["Web platform", "Fleet-scale"],
    icon: CloudCog,
    logo: "/software/solutions/drc.svg",
    className: "sw-drc",
    href: "/products/software-solutions/drc",
  },
  {
    name: "Complex Events",
    label: "ON-DEVICE AUTOMATION",
    description: "Create custom operating logic, integrations and automation that run directly on supported devices",
    platforms: ["Visual logic", "Offline execution"],
    icon: GitBranch,
    logo: "/software/solutions/complex-events.svg",
    className: "sw-complex-events",
    href: "/products/software-solutions/complex-events",
  },
  {
    name: "NTC Control",
    label: "MOBILE CONFIGURATION",
    description: "Configure and validate Navtelecom devices from a smartphone during installation and field service",
    platforms: ["Android", "iOS"],
    icon: Smartphone,
    logo: "/software/solutions/ntc-control.svg",
    className: "sw-ntc-control",
    href: "/products/software-solutions/ntc-control",
  },
  {
    name: "Eco Driving",
    label: "DRIVING INTELLIGENCE",
    description: "Detect critical driving events and provide structured data for reporting, scoring and driver coaching",
    platforms: ["On-device", "Fleet analytics"],
    icon: Gauge,
    logo: "/software/solutions/eco-driving.png",
    className: "sw-eco-driving",
    href: "/products/software-solutions/eco-driving",
  },
];

const tasks = [
  { icon: Settings2, title: "Configure devices", text: "Create, edit and validate device settings", tool: "NTC Configurator", href: "/products/software-solutions/ntc-configurator" },
  { icon: Network, title: "Decode vehicle CAN", text: "Capture traffic and prepare decoding files", tool: "CAN Spy", href: "/products/software-solutions/can-spy" },
  { icon: RadioTower, title: "Manage devices remotely", text: "Deploy settings, files and updates at scale", tool: "DRC", href: "/products/software-solutions/drc" },
  { icon: Braces, title: "Build custom logic", text: "Automate integrations and device behavior", tool: "Complex Events", href: "/products/software-solutions/complex-events" },
  { icon: Wrench, title: "Work in the field", text: "Configure and validate devices from a phone", tool: "NTC Control", href: "/products/software-solutions/ntc-control" },
  { icon: CarFront, title: "Analyze driving behavior", text: "Detect maneuvers and support driver scoring", tool: "Eco Driving", href: "/products/software-solutions/eco-driving" },
];

const resources = [
  { icon: BookOpen, label: "DOCUMENTATION", title: "Knowledge Base", text: "Configuration guides, manuals and technical instructions", href: "/support/knowledge-base" },
  { icon: Download, label: "SOFTWARE", title: "Software Downloads & Releases", text: "Download the latest NTC Configurator for Windows, macOS or Linux and review release notes", href: "https://wiki.navtelecom.ru/en/home/ntc_configurator/history" },
  { icon: Code2, label: "INTEGRATION", title: "Developer Resources", text: "Protocols, integration documentation and resources for connecting Navtelecom devices", href: "https://wiki.navtelecom.ru/en/home/developers" },
];

function HeroVisual() {
  return (
    <div className="soft-hero-visual" aria-label="Navtelecom software tools">
      <div className="soft-orbit-track sw-orbit-track-one">
        <div className="soft-hero-orbit sw-orbit-one"><i className="soft-orbit-dot sw-dot-one" /><i className="soft-orbit-dot sw-dot-two" /></div>
      </div>
      <div className="soft-orbit-track sw-orbit-track-two">
        <div className="soft-hero-orbit sw-orbit-two"><i className="soft-orbit-dot sw-dot-three" /></div>
      </div>
      <div className="soft-core">
        <img className="soft-core-logo" src={"/software/solutions/navtelecom-mark.png"} alt="" aria-hidden="true" />
      </div>
      <div className="soft-float-card sw-float-configurator"><img src={"/software/solutions/ntc-configurator.png"} alt="" aria-hidden="true" /><span>NTC Configurator</span></div>
      <div className="soft-float-card sw-float-can-spy"><img src={"/software/solutions/can-spy.svg"} alt="" aria-hidden="true" /><span>CAN Spy</span></div>
      <div className="soft-float-card sw-float-drc"><img src={"/software/solutions/drc.svg"} alt="" aria-hidden="true" /><span>DRC</span></div>
      <div className="soft-float-card sw-float-complex"><img src={"/software/solutions/complex-events.svg"} alt="" aria-hidden="true" /><span>Complex Events</span></div>
      <div className="soft-float-card sw-float-control"><img src={"/software/solutions/ntc-control.svg"} alt="" aria-hidden="true" /><span>NTC Control</span></div>
    </div>
  );
}

export default function SoftwareSolutionsPage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const items = root.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("sw-is-visible");
      });
    }, { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="soft-page pt-20" ref={rootRef}>
      <main>
        <section className="soft-hero">
          <div className="soft-hero-grid" aria-hidden="true" />
          <div className="soft-shell soft-hero-layout">
            <div className="soft-hero-copy">
              <p className="soft-eyebrow">SOFTWARE SOLUTIONS</p>
              <h1>Professional tools for every stage of telematics</h1>
              <p className="soft-lead">Configure devices, decode vehicle data, deploy updates, build custom logic and support fleet operations with a connected suite of Navtelecom tools</p>
              <a className="soft-button soft-button-primary" href="#all-solutions">Explore All Solutions <ArrowRight aria-hidden="true" /></a>
            </div>
            <HeroVisual />
          </div>
        </section>

        <section className="soft-solutions soft-section" id="all-solutions" data-reveal>
          <div className="soft-shell">
            <div className="soft-heading">
              <p className="soft-eyebrow">ALL SOFTWARE</p>
              <h2>Six tools. One professional workflow</h2>
              <p>Each solution is designed for a specific part of device configuration, engineering, deployment or fleet operation</p>
            </div>
            <div className="soft-solution-grid">
              {software.map(({ name, label, description, platforms, icon: Icon, logo, className, href }) => (
                <Link className={`soft-solution-card ${className}`} href={href} key={name}>
                  <div className="soft-card-top">
                    <span className="soft-product-icon">{logo ? <img src={logo} alt="" aria-hidden="true" /> : <Icon aria-hidden="true" />}</span>
                    <ArrowUpRight className="soft-card-arrow" aria-hidden="true" />
                  </div>
                  <p className="soft-card-label">{label}</p>
                  <h3>{name}</h3>
                  <p className="soft-card-description">{description}</p>
                  <div className="soft-tags">{platforms.map((platform) => <span key={platform}>{platform}</span>)}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="soft-task-section soft-section" data-reveal>
          <div className="soft-shell">
            <div className="soft-heading soft-heading-centered">
              <p className="soft-eyebrow">CHOOSE BY TASK</p>
              <h2>Start with what you need to do</h2>
              <p>Choose your task and go directly to the Navtelecom tool designed for it</p>
            </div>
            <div className="soft-task-grid">
              {tasks.map(({ icon: Icon, title, text, tool, href }, index) => (
                <Link className="soft-task-card" href={href} key={title}>
                  <div className="soft-task-top"><span>{String(index + 1).padStart(2, "0")}</span><Icon aria-hidden="true" /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <strong>{tool}<ArrowRight aria-hidden="true" /></strong>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="soft-workflow soft-section" data-reveal>
          <div className="soft-shell soft-workflow-card">
            <div className="soft-workflow-copy">
              <p className="soft-eyebrow soft-eyebrow-light">BUILT FOR PROFESSIONAL OPERATIONS</p>
              <h2>From one device to an entire fleet</h2>
              <p>Use the tools independently or combine them across engineering, installation and fleet operations</p>
            </div>
            <div className="soft-workflow-steps">
              <div><span><Laptop aria-hidden="true" /></span><strong>Configure</strong><small>Prepare device settings</small></div>
              <ArrowRight aria-hidden="true" />
              <div><span><ShieldCheck aria-hidden="true" /></span><strong>Validate</strong><small>Check data and behavior</small></div>
              <ArrowRight aria-hidden="true" />
              <div><span><CloudCog aria-hidden="true" /></span><strong>Deploy</strong><small>Manage devices remotely</small></div>
            </div>
          </div>
        </section>

        <section className="soft-resources soft-section" data-reveal>
          <div className="soft-shell">
            <div className="soft-heading soft-heading-wide">
              <div><p className="soft-eyebrow">RESOURCES</p><h2>Everything you need to get started</h2></div>
              <p>Go from product selection to configuration and integration using official Navtelecom resources</p>
            </div>
            <div className="soft-resource-grid">
              {resources.map(({ icon: Icon, label, title, text, href }) => (
                <Link className="soft-resource-card" href={href} key={title} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
                  <span className="soft-resource-icon"><Icon aria-hidden="true" /></span>
                  <p>{label}</p><h3>{title}</h3><span>{text}</span>
                  <ArrowUpRight className="soft-resource-arrow" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="soft-final soft-section" data-reveal>
          <div className="soft-shell">
            <div className="soft-final-banner">
              <div><p className="soft-eyebrow soft-eyebrow-light">NEED HELP CHOOSING?</p><h2>Not sure which tool fits your task?</h2><p>Tell us what you need to configure, analyze or automate. We’ll point you to the right solution</p></div>
              <Link className="soft-button soft-button-light" href="/contact">Contact Our Team <ArrowRight aria-hidden="true" /></Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
