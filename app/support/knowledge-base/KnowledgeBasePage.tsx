"use client";

import React, { useEffect, useRef } from "react";
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  CircleHelp,
  Code2,
  Cpu,
  ExternalLink,
  Gauge,
  Laptop,
  LifeBuoy,
  Radio,
  Search,
  Settings2,
  TerminalSquare,
  Wrench,
} from "lucide-react";
import "./knowledge-base-page.css";

const WIKI = "https://wiki.navtelecom.ru/en/home";

const topics = [
  {
    icon: Cpu,
    title: "Device Documentation",
    text: "Specifications, wiring diagrams, manuals, firmware and model-specific guidance.",
    href: `${WIKI}/devices`,
  },
  {
    icon: Settings2,
    title: "Configuration & Diagnostics",
    text: "NTC Configurator setup, telemetry, connection and diagnostic workflows.",
    href: `${WIKI}/ntc_configurator`,
  },
  {
    icon: TerminalSquare,
    title: "Commands & Protocols",
    text: "Standard commands, parameters and communication reference materials.",
    href: `${WIKI}/devices/commands`,
  },
  {
    icon: Radio,
    title: "CAN & Vehicle Data",
    text: "CAN configuration, decoding resources, scripts and vehicle-data workflows.",
    href: `${WIKI}/can_spy`,
  },
  {
    icon: Code2,
    title: "Complex Events",
    text: "Visual blocks, CE Code, function reference and automation examples.",
    href: `${WIKI}/complex_events`,
  },
  {
    icon: Laptop,
    title: "Remote Management",
    text: "DRC documentation for devices, files, firmware and remote deployment.",
    href: `${WIKI}/drc`,
  },
];

const resources = [
  {
    icon: Code2,
    label: "AUTOMATION GUIDE",
    title: "Complex Events Guide",
    text: "Build device logic with visual blocks or CE Code and explore the complete function reference.",
    href: `${WIKI}/complex_events`,
  },
  {
    icon: Radio,
    label: "CAN ENGINEERING GUIDE",
    title: "CAN Spy Guide",
    text: "Capture CAN traffic, work with decoding files and validate vehicle data.",
    href: `${WIKI}/can_spy`,
  },
  {
    icon: Gauge,
    label: "REMOTE MANAGEMENT GUIDE",
    title: "DRC Guide",
    text: "Manage devices and distribute configurations, firmware and programs remotely.",
    href: `${WIKI}/drc`,
  },
  {
    icon: Settings2,
    label: "CONFIGURATION GUIDE",
    title: "NTC Configurator Guide",
    text: "Configure, diagnose and update Navtelecom devices locally or through RCS.",
    href: `${WIKI}/ntc_configurator`,
  },
];

function KnowledgeVisual() {
  return (
    <div className="kbx-knowledge-visual" aria-hidden="true">
      <span className="kbx-visual-ring kbx-ring-one" />
      <span className="kbx-visual-ring kbx-ring-two" />
      <span className="kbx-visual-link kbx-link-a" />
      <span className="kbx-visual-link kbx-link-b" />
      <span className="kbx-visual-link kbx-link-c" />
      <div className="kbx-visual-core">
        <BookOpen size={40} strokeWidth={1.6} />
        <small>NTC WIKI</small>
        <strong>Technical Knowledge</strong>
      </div>
      <div className="kbx-visual-node kbx-node-device"><Cpu size={22} /><span>Devices</span></div>
      <div className="kbx-visual-node kbx-node-config"><Wrench size={22} /><span>Configure</span></div>
      <div className="kbx-visual-node kbx-node-code"><Code2 size={22} /><span>Develop</span></div>
      <div className="kbx-visual-node kbx-node-help"><CircleHelp size={22} /><span>Solve</span></div>
    </div>
  );
}

export default function KnowledgeBasePage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const elements = root.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("kbx-is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="kb-page pt-20" ref={rootRef} id="top">
      <main>
        <section className="kbx-kb-hero">
          <div className="kbx-kb-shell kbx-hero-layout">
            <div className="kbx-hero-copy" data-reveal>
              <p className="kbx-kb-eyebrow">KNOWLEDGE BASE</p>
              <h1>Find the answer.<br />Keep the project moving.</h1>
              <p className="kbx-hero-lead">Technical documentation, setup guides and engineering reference materials for Navtelecom devices and software.</p>
              <div className="kbx-hero-actions">
                <a className="kbx-kb-button kbx-primary" href={WIKI} target="_blank" rel="noreferrer">
                  Open NTC Wiki <ExternalLink size={18} />
                </a>
                <a className="kbx-kb-button kbx-secondary" href="#topics">
                  Browse Topics <ArrowRight size={18} />
                </a>
              </div>
              <div className="kbx-hero-meta">
                <span>English & Russian</span>
                <span>Product-specific guides</span>
                <span>Maintained by our technical team</span>
              </div>
            </div>
            <KnowledgeVisual />
          </div>
        </section>

        <section className="kbx-topics-section" id="topics">
          <div className="kbx-kb-shell">
            <div className="kbx-section-heading" data-reveal>
              <p className="kbx-kb-eyebrow">START WITH YOUR TASK</p>
              <h2>Browse documentation by topic</h2>
              <p>Go directly to the section that matches the work in front of you.</p>
            </div>
            <div className="kbx-topic-grid">
              {topics.map(({ icon: Icon, title, text, href }, index) => (
                <a className="kbx-topic-card" href={href} target="_blank" rel="noreferrer" key={title} data-reveal style={{ "--delay": `${index * 60}ms` } as React.CSSProperties}>
                  <span className="kbx-topic-icon"><Icon size={25} strokeWidth={1.7} /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span className="kbx-card-link">Open section <ArrowRight size={17} /></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="kbx-workflow-section">
          <div className="kbx-kb-shell kbx-workflow-layout">
            <div className="kbx-workflow-copy" data-reveal>
              <p className="kbx-kb-eyebrow">BUILT FOR REAL WORK</p>
              <h2>From installation to advanced integration</h2>
              <p>The Wiki follows the same path as a real project: identify the device, connect and configure it, then validate the result with diagnostic tools and reference data.</p>
              <a href={WIKI} target="_blank" rel="noreferrer">Explore the complete Wiki <ArrowRight size={17} /></a>
            </div>
            <div className="kbx-workflow-steps">
              <article data-reveal>
                <span>01</span>
                <div><strong>Choose the product</strong><p>Open the exact model page and confirm specifications, interfaces and wiring.</p></div>
              </article>
              <article data-reveal style={{ "--delay": "80ms" } as React.CSSProperties}>
                <span>02</span>
                <div><strong>Follow the procedure</strong><p>Use structured instructions for installation, configuration and integration.</p></div>
              </article>
              <article data-reveal style={{ "--delay": "160ms" } as React.CSSProperties}>
                <span>03</span>
                <div><strong>Validate the result</strong><p>Check telemetry, diagnostics and troubleshooting guidance before deployment.</p></div>
              </article>
            </div>
          </div>
        </section>

        <section className="kbx-resources-section">
          <div className="kbx-kb-shell">
            <div className="kbx-section-heading kbx-compact" data-reveal>
              <p className="kbx-kb-eyebrow">SOFTWARE GUIDES</p>
              <h2>Documentation for every engineering tool</h2>
            </div>
            <div className="kbx-resource-grid">
              {resources.map(({ icon: Icon, label, title, text, href }, index) => (
                <a className="kbx-resource-card" href={href} target="_blank" rel="noreferrer" key={title} data-reveal style={{ "--delay": `${index * 70}ms` } as React.CSSProperties}>
                  <Icon size={25} strokeWidth={1.7} />
                  <span>{label}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <ExternalLink size={17} className="kbx-resource-arrow" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="kbx-support-cta">
          <div className="kbx-kb-shell kbx-cta-card" data-reveal>
            <span className="kbx-cta-icon"><LifeBuoy size={30} /></span>
            <div>
              <p className="kbx-kb-eyebrow">NEED TECHNICAL ASSISTANCE?</p>
              <h2>Can’t find the answer?</h2>
              <p>Send your question to our technical support team and include the device model, firmware version and a short description of the issue.</p>
            </div>
            <a className="kbx-kb-button kbx-light" href="mailto:support@navtelecom.ru">Contact Support <ArrowRight size={18} /></a>
          </div>
        </section>
      </main>
    </div>
  );
}
