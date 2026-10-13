"use client";

import React, { useEffect, useRef } from "react";
import {
  type LucideIcon,
  ArrowRight,
  BatteryCharging,
  Box,
  Check,
  ChevronDown,
  CircleAlert,
  ClipboardCheck,
  FileCheck2,
  Headphones,
  LifeBuoy,
  Mail,
  PackageCheck,
  PackageOpen,
  Send,
  ShieldCheck,
  ShieldOff,
  Smartphone,
  Wrench,
} from "lucide-react";
import "./warranty-page.css";

const terms = [
  "The warranty period begins on the date of sale",
  "The device must be installed, operated, stored and transported in accordance with the Operational Manual and recommended guidelines",
  "Minor cosmetic wear resulting from normal use does not affect warranty coverage",
  "Compatibility with third-party hardware or software is guaranteed only when explicitly specified in the Operational Manual",
  "NAVTELECOM is not responsible for damage caused by improper installation, misuse, incorrect storage or transportation",
];

const exclusions = [
  "Documentation and packaging materials",
  "Accessories supplied with the device, including power cables, antennas and fuses, unless originally defective",
  "Damage caused by improper installation or misuse",
  "Damage caused by external factors or environmental conditions",
  "Any unauthorized modification of the device",
];

const voidConditions = [
  "The device was used in violation of installation, operation, storage or transportation guidelines",
  "The device was opened or modified without authorization",
  "Warranty seals were removed or damaged",
  "The device was used with incompatible or malfunctioning equipment or software",
  "The hardware, firmware or internal configuration was modified without authorization from NAVTELECOM",
];

const modifications = [
  "Hardware modification of the device or circuit board",
  "Soldering, chip replacement or alteration of electronic components",
  "Installation of unofficial or modified firmware",
  "Modification of internal system parameters",
  "Reverse engineering or any other interference with device hardware or software",
];

const diagnostics = [
  "Device model and IMEI",
  "NTC Configurator version",
  "Device firmware version",
  "Device configuration file",
];

const shipping = [
  "The customer is responsible for shipping defective equipment to the service location",
  "If the warranty claim is approved, NAVTELECOM covers shipping of the replacement or serviced device",
  "If the defect is caused by improper use, the device may be returned at the customer's expense",
  "NAVTELECOM is not responsible for loss during return transportation",
  "Returned devices must be properly packaged to prevent damage",
  "Please send only the device, without accessories",
];

function CoverageVisual() {
  return (
    <div className="wr-coverage-visual" aria-label="Warranty coverage overview">
      <span className="wr-orbit wr-orbit-one" />
      <span className="wr-orbit wr-orbit-two" />
      <span className="wr-orbit-dot wr-dot-one" />
      <span className="wr-orbit-dot wr-dot-two" />
      <div className="wr-shield-core">
        <ShieldCheck size={68} strokeWidth={1.35} />
        <span>DEVICE COVERAGE</span>
        <strong>3 years</strong>
      </div>
      <div className="wr-visual-chip wr-chip-battery"><BatteryCharging size={21} /><span><b>1 year</b> Battery</span></div>
      <div className="wr-visual-chip wr-chip-life"><PackageCheck size={21} /><span><b>10 years</b> Service life</span></div>
    </div>
  );
}

function BulletList({ items, warning = false }: { items: string[]; warning?: boolean }) {
  return (
    <ul className={warning ? "wr-detail-list wr-warning" : "wr-detail-list"}>
      {items.map((item) => (
        <li key={item}><span>{warning ? <CircleAlert size={17} /> : <Check size={17} />}</span>{item}</li>
      ))}
    </ul>
  );
}

function DetailPanel({ icon: Icon, eyebrow, title, children, open = false, tone = "blue" }: { icon: LucideIcon; eyebrow: string; title: string; children: React.ReactNode; open?: boolean; tone?: string }) {
  return (
    <details className={`wr-detail-panel wr-tone-${tone}`} open={open} data-reveal>
      <summary>
        <span className="wr-panel-icon"><Icon size={24} /></span>
        <span><small>{eyebrow}</small><strong>{title}</strong></span>
        <ChevronDown className="wr-panel-chevron" size={22} />
      </summary>
      <div className="wr-panel-body">{children}</div>
    </details>
  );
}

export default function WarrantyPage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const targets = root.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("wr-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="warranty-page pt-20" ref={rootRef} id="top">
      <main>
        <section className="wr-hero">
          <div className="wr-shell wr-hero-grid">
            <div className="wr-hero-copy" data-reveal>
              <p className="wr-eyebrow">RELIABLE COVERAGE FOR NAVTELECOM DEVICES</p>
              <h1>Warranty made clear</h1>
              <p className="wr-hero-lead">Understand what is covered, prepare the right diagnostic information and move through the service process with fewer delays</p>
              <div className="wr-hero-actions">
                <a className="wr-button wr-primary" href="#service">Start a service request <ArrowRight size={18} /></a>
                <a className="wr-button wr-secondary" href="#coverage">Review coverage</a>
              </div>
            </div>
            <CoverageVisual />
          </div>
        </section>

        <section className="wr-coverage-strip" id="coverage">
          <div className="wr-shell wr-metrics-grid">
            <article data-reveal><ShieldCheck /><strong>3 years</strong><span>Limited device warranty</span></article>
            <article data-reveal style={{ "--delay": "70ms" } as React.CSSProperties}><BatteryCharging /><strong>1 year</strong><span>Built-in battery coverage</span></article>
            <article data-reveal style={{ "--delay": "140ms" } as React.CSSProperties}><PackageCheck /><strong>10 years</strong><span>Expected equipment service life</span></article>
          </div>
        </section>

        <section className="wr-terms-section">
          <div className="wr-shell wr-section-layout">
            <div className="wr-section-intro" data-reveal>
              <p className="wr-eyebrow">COVERAGE DETAILS</p>
              <h2>Know the conditions before service is needed</h2>
              <p>The warranty protects GPS tracking equipment against eligible manufacturing defects when the product is used according to its documentation</p>
            </div>
            <div className="wr-details-stack">
              <DetailPanel icon={FileCheck2} eyebrow="WARRANTY TERMS" title="What the warranty requires" open>
                <BulletList items={terms} />
              </DetailPanel>
              <DetailPanel icon={ShieldOff} eyebrow="EXCLUSIONS" title="What is not covered" tone="amber">
                <p>This warranty does not cover:</p>
                <BulletList items={exclusions} warning />
              </DetailPanel>
              <DetailPanel icon={Wrench} eyebrow="VOID CONDITIONS" title="Actions that terminate coverage" tone="red">
                <p>Warranty coverage becomes void if:</p>
                <BulletList items={voidConditions} warning />
                <div className="wr-nested-note">
                  <strong>Unauthorized modification includes:</strong>
                  <BulletList items={modifications} warning />
                </div>
                <p className="wr-legal-note">Such actions are performed entirely at the user's own risk and immediately terminate warranty coverage<br />NAVTELECOM reserves the right to refuse warranty service if signs of hardware or firmware modification are detected</p>
              </DetailPanel>
            </div>
          </div>
        </section>

        <section className="wr-service-section" id="service">
          <div className="wr-shell">
            <div className="wr-section-heading" data-reveal>
              <p className="wr-eyebrow">SERVICE PROCESS</p>
              <h2>Start with remote diagnostics</h2>
              <p>Many issues can be resolved without returning the device<br />Contact Technical Support before arranging shipment</p>
            </div>

            <div className="wr-process-grid">
              <article data-reveal>
                <span className="wr-step">01</span><Headphones size={29} />
                <h3>Contact support</h3>
                <p>Describe the issue and send the required device information</p>
              </article>
              <article data-reveal style={{ "--delay": "80ms" } as React.CSSProperties}>
                <span className="wr-step">02</span><ClipboardCheck size={29} />
                <h3>Complete diagnostics</h3>
                <p>Our technical team checks whether the issue can be resolved remotely</p>
              </article>
              <article data-reveal style={{ "--delay": "160ms" } as React.CSSProperties}>
                <span className="wr-step">03</span><PackageOpen size={29} />
                <h3>Arrange service</h3>
                <p>If a manufacturing defect is confirmed, NAVTELECOM determines the appropriate warranty remedy</p>
              </article>
            </div>

            <div className="wr-service-card" data-reveal>
              <div className="wr-service-copy">
                <span className="wr-service-icon"><Smartphone size={30} /></span>
                <div>
                  <p className="wr-eyebrow">PREPARE FOR DIAGNOSTICS</p>
                  <h3>Include these details in your request</h3>
                  <p>Complete information helps Technical Support investigate the issue faster</p>
                </div>
              </div>
              <BulletList items={diagnostics} />
              <a className="wr-button wr-primary" href="mailto:support@navtelecom.ru">Email Technical Support <Mail size={18} /></a>
            </div>
          </div>
        </section>

        <section className="wr-shipping-section">
          <div className="wr-shell wr-shipping-layout">
            <div className="wr-shipping-title" data-reveal>
              <span><Box size={30} /></span>
              <p className="wr-eyebrow">RETURN SHIPPING</p>
              <h2>Package the device carefully</h2>
              <p>Send only the device unless Technical Support requests otherwise</p>
            </div>
            <div className="wr-shipping-list" data-reveal>
              {shipping.map((item, index) => (
                <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="wr-support-cta">
          <div className="wr-shell wr-cta-card" data-reveal>
            <span className="wr-cta-icon"><LifeBuoy size={32} /></span>
            <div>
              <p className="wr-eyebrow">NAVTELECOM TECHNICAL SUPPORT</p>
              <h2>Need help with a device?</h2>
              <p>Contact our technical team before returning equipment<br />We will guide you through diagnostics and the next service step</p>
            </div>
            <a className="wr-button wr-light" href="mailto:support@navtelecom.ru">support@navtelecom.ru <Send size={18} /></a>
          </div>
        </section>
      </main>
    </div>
  );
}
