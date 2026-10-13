"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BellRing,
  Cable,
  CarFront,
  Check,
  ChevronDown,
  CircleGauge,
  CornerDownRight,
  Gauge,
  Lightbulb,
  MoveDown,
  MoveLeft,
  MoveRight,
  MoveUp,
  RadioTower,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  Smartphone,
  UserRoundCheck,
  Waves,
  Zap,
} from "lucide-react";
import "./eco-driving-page.css";

const capabilities = [
  { icon: MoveUp, number: "01", title: "Harsh Acceleration", text: "Detect excessive forward acceleration using configurable thresholds." },
  { icon: MoveDown, number: "02", title: "Harsh Braking", text: "Identify sudden deceleration that may indicate aggressive or unsafe driving." },
  { icon: CornerDownRight, number: "03", title: "Harsh Cornering", text: "Detect excessive lateral acceleration during sharp turns and lane changes." },
  { icon: Waves, number: "04", title: "Road Bumps", text: "Measure vertical acceleration to identify rough-road events and severe movement." },
  { icon: Gauge, number: "05", title: "Speed & Engine RPM", text: "Monitor configured speed and engine-speed limits and record violations." },
  { icon: ShieldCheck, number: "06", title: "Safety Conditions", text: "Monitor seat-belt and low-beam headlight status using available vehicle data sources." },
];

const steps = [
  { icon: Cable, number: "01", title: "Install", text: "Securely install a compatible Navtelecom tracker in the vehicle." },
  { icon: SlidersHorizontal, number: "02", title: "Calibrate", text: "Align accelerometer measurements with the vehicle axes." },
  { icon: Settings2, number: "03", title: "Configure", text: "Define thresholds for driving events and safety conditions." },
  { icon: RadioTower, number: "04", title: "Monitor", text: "Transmit detected events to a compatible monitoring platform." },
];

function HeroVisual() {
  return (
    <div className="eco-hero-visual" aria-label="Eco Driving analyses vehicle motion and safety signals">
      <div className="eco-orbit eco-orbit-a" />
      <div className="eco-orbit eco-orbit-b" />
      <div className="eco-road-line eco-road-one" />
      <div className="eco-road-line eco-road-two" />
      <div className="eco-vehicle">
        <div className="eco-vehicle-glow" />
        <img src="/software/eco-driving/matte-pink-defender-v2.png" alt="Fleet vehicle used for Eco Driving analysis" />
        <span><i /> ON-DEVICE ANALYSIS</span>
      </div>
      <div className="eco-axis eco-axis-forward"><MoveRight aria-hidden="true" /><span>Acceleration</span></div>
      <div className="eco-axis eco-axis-brake"><MoveLeft aria-hidden="true" /><span>Braking</span></div>
      <div className="eco-axis eco-axis-left"><MoveUp aria-hidden="true" /><span>Cornering</span></div>
      <div className="eco-axis eco-axis-right"><MoveDown aria-hidden="true" /><span>Lateral force</span></div>
      <div className="eco-status eco-status-belt"><UserRoundCheck aria-hidden="true" /><span>Seat belt</span><b>MONITORED</b></div>
      <div className="eco-status eco-status-light"><Lightbulb aria-hidden="true" /><span>Headlights</span><b>MONITORED</b></div>
    </div>
  );
}

function FlowDiagram() {
  return (
    <div className="eco-flow" aria-label="Eco Driving data flow">
      <div className="eco-flow-sources">
        <article><span><Activity aria-hidden="true" /></span><div><strong>Motion data</strong><small>Continuous three-axis acceleration analysis</small></div></article>
        <article><span><Cable aria-hidden="true" /></span><div><strong>Vehicle data sources</strong><small>Inputs, CAN and connected vehicle signals</small></div></article>
        <article><span><Gauge aria-hidden="true" /></span><div><strong>Operating context</strong><small>Speed, engine RPM and configured limits</small></div></article>
      </div>
      <div className="eco-flow-arrow"><ArrowRight aria-hidden="true" /></div>
      <div className="eco-flow-core">
        <span><Zap aria-hidden="true" /></span>
        <small>NAVTELECOM TRACKER</small>
        <strong>On-device<br />event processing</strong>
        <ul aria-label="Event processing stages">
          <li>Detect</li><li>Classify</li><li>Record event</li>
        </ul>
        <div className="eco-flow-local"><i /> Local processing</div>
      </div>
      <div className="eco-flow-arrow"><ArrowRight aria-hidden="true" /></div>
      <div className="eco-flow-outputs">
        <article><BellRing aria-hidden="true" /><span>Driver warning</span></article>
        <article><RadioTower aria-hidden="true" /><span>Monitoring platform</span></article>
      </div>
    </div>
  );
}

export default function EcoDrivingPage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const items = root.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    }, { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="eco-page pt-20" ref={rootRef}>
      <main>
        <section className="eco-hero">
          <div className="eco-hero-grid" aria-hidden="true" />
          <div className="eco-shell eco-hero-layout">
            <div className="eco-hero-copy">
              <Link className="eco-back-link" href="/products/software-solutions"><ArrowRight aria-hidden="true" /> Software Solutions</Link>
              <p className="eco-eyebrow">ON-DEVICE DRIVING INTELLIGENCE</p>
              <h1>Turn driving behavior into safer fleet operations.</h1>
              <p className="eco-lead">Detect acceleration, braking, cornering and other critical events with calibrated on-device motion analysis. Send structured driving data to your fleet platform for scoring, reporting and driver coaching.</p>
              <div className="eco-actions">
                <a className="eco-button eco-button-primary" href="#capabilities">Explore Capabilities <ArrowDown aria-hidden="true" /></a>
                <a className="eco-button eco-button-secondary" href="#compatible-devices">Compare Devices <ArrowUpRight aria-hidden="true" /></a>
              </div>
              <div className="eco-hero-note"><Check aria-hidden="true" /><span>Calibrated motion analysis for reliable event detection.</span></div>
            </div>
            <HeroVisual />
          </div>
        </section>

        <section className="eco-intro eco-section" data-reveal>
          <div className="eco-shell">
            <div className="eco-section-heading eco-section-heading-wide">
              <div><p className="eco-eyebrow">ONE TRACKER. MULTIPLE DATA SOURCES.</p><h2>More than harsh-driving detection.</h2></div>
              <p>Eco Driving combines motion analysis, vehicle signals and configurable thresholds to identify unsafe or inefficient driving as it happens.</p>
            </div>
            <FlowDiagram />
          </div>
        </section>

        <section className="eco-capabilities eco-section" id="capabilities" data-reveal>
          <div className="eco-shell">
            <div className="eco-section-heading">
              <p className="eco-eyebrow">DRIVING EVENTS</p>
              <h2>See what happens behind the wheel.</h2>
              <p>Turn vehicle motion and safety signals into clear, actionable events for fleet operations.</p>
            </div>
            <div className="eco-capability-grid">
              {capabilities.map(({ icon: Icon, number, title, text }) => (
                <article className="eco-capability-card" key={title}>
                  <div><span className="eco-icon-box"><Icon aria-hidden="true" /></span><small>{number}</small></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="eco-no-can eco-section" data-reveal>
          <div className="eco-shell eco-no-can-layout">
            <div className="eco-no-can-copy">
              <p className="eco-eyebrow">MOTION INTELLIGENCE</p>
              <h2>Capture every critical maneuver with confidence.</h2>
              <p>Navtelecom trackers continuously analyze longitudinal, lateral and vertical acceleration. Calibrated axes, configurable thresholds and precise event timing help distinguish real driving events across different vehicle types.</p>
              <div className="eco-check-list">
                <span><Check aria-hidden="true" /> Calibrated three-axis motion analysis</span>
                <span><Check aria-hidden="true" /> Vehicle-specific thresholds and timing</span>
                <span><Check aria-hidden="true" /> On-device event capture and reporting</span>
              </div>
            </div>
            <div className="eco-signal-visual">
              <div className="eco-signal-track"><span>01</span><div><strong>Longitudinal force</strong><small>Acceleration and braking</small></div><MoveUp aria-hidden="true" /></div>
              <div className="eco-signal-track"><span>02</span><div><strong>Lateral force</strong><small>Cornering and lane changes</small></div><MoveRight aria-hidden="true" /></div>
              <div className="eco-signal-track"><span>03</span><div><strong>Vertical force</strong><small>Road bumps and severe movement</small></div><Waves aria-hidden="true" /></div>
              <div className="eco-signal-device"><Activity aria-hidden="true" /><span>MOTION ENGINE</span><small>Calibrated event analysis</small></div>
            </div>
          </div>
        </section>

        <section className="eco-feedback eco-section" data-reveal>
          <div className="eco-shell eco-feedback-card">
            <div className="eco-feedback-copy">
              <p className="eco-eyebrow eco-eyebrow-light">DRIVER FEEDBACK</p>
              <h2>Correct unsafe behavior while it happens.</h2>
              <p>Supported devices can activate a connected buzzer or light indicator when configured driving or safety conditions are detected.</p>
            </div>
            <div className="eco-feedback-events">
              <span><CircleGauge aria-hidden="true" /> Speed limit exceeded</span>
              <span><Activity aria-hidden="true" /> Engine RPM exceeded</span>
              <span><UserRoundCheck aria-hidden="true" /> Seat belt not fastened</span>
              <span><Lightbulb aria-hidden="true" /> Low-beam headlights off</span>
            </div>
          </div>
        </section>

        <section className="eco-how eco-section" data-reveal>
          <div className="eco-shell">
            <div className="eco-section-heading eco-section-heading-center">
              <p className="eco-eyebrow">FROM INSTALLATION TO INSIGHT</p>
              <h2>How Eco Driving works.</h2>
            </div>
            <div className="eco-steps">
              {steps.map(({ icon: Icon, number, title, text }, index) => (
                <React.Fragment key={title}>
                  <article><div><span>{number}</span><Icon aria-hidden="true" /></div><h3>{title}</h3><p>{text}</p></article>
                  {index < steps.length - 1 && <ArrowRight className="eco-step-arrow" aria-hidden="true" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        <section className="eco-config eco-section" data-reveal>
          <div className="eco-shell eco-config-layout">
            <div className="eco-config-visual">
              <div className="eco-threshold eco-threshold-car"><span>PASSENGER CAR</span><div><i style={{ width: "54%" }} /><b>Balanced</b></div></div>
              <div className="eco-threshold eco-threshold-bus"><span>PASSENGER TRANSPORT</span><div><i style={{ width: "38%" }} /><b>Comfort</b></div></div>
              <div className="eco-threshold eco-threshold-heavy"><span>HEAVY VEHICLE</span><div><i style={{ width: "69%" }} /><b>Project-specific</b></div></div>
              <div className="eco-config-badge"><SlidersHorizontal aria-hidden="true" /><strong>FLEET-SPECIFIC<br />THRESHOLDS</strong></div>
            </div>
            <div className="eco-config-copy">
              <p className="eco-eyebrow">CONFIGURED FOR YOUR FLEET</p>
              <h2>No generic limits for every vehicle.</h2>
              <p>A passenger car, bus, delivery van and construction vehicle should not use identical thresholds. Settings can be adapted to the vehicle type, operating conditions and safety requirements.</p>
              <ul>
                <li><Check aria-hidden="true" /><span><strong>Guided calibration</strong> of the accelerometer axes</span></li>
                <li><Check aria-hidden="true" /><span><strong>Vehicle-specific thresholds</strong> for each event type</span></li>
                <li><Check aria-hidden="true" /><span><strong>Configurable timing</strong> and event recovery conditions</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="eco-platform eco-section" data-reveal>
          <div className="eco-shell eco-platform-card">
            <div className="eco-platform-icon"><Smartphone aria-hidden="true" /><RadioTower aria-hidden="true" /></div>
            <div className="eco-platform-copy">
              <p className="eco-eyebrow">PLATFORM INTEGRATION</p>
              <h2>A reliable foundation for driver scoring.</h2>
              <p>Navtelecom devices can transmit separate acceleration, braking and cornering parameters together with detected events. A compatible fleet platform can use this structured data to compare drivers, build scoring models and track changes over time.</p>
            </div>
            <a className="eco-resource-link" href="https://wiki.navtelecom.ru/en/home/devices/settings/ecodrive/wialon" target="_blank" rel="noreferrer">
              <span><small>CONFIGURATION GUIDE</small><strong>Eco Driving with Wialon</strong></span><ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="eco-availability eco-section" id="compatible-devices" data-reveal>
          <div className="eco-shell">
            <div className="eco-availability-card">
              <div className="eco-availability-icon"><CarFront aria-hidden="true" /></div>
              <div>
                <p className="eco-eyebrow">DEVICE AVAILABILITY</p>
                <h2>Available across most of the Navtelecom device range.</h2>
                <p>Eco Driving is supported by most Navtelecom tracking devices. Feature availability, supported data sources and driver notification capabilities may vary by model. Review the technical specifications of the selected device to confirm compatibility.</p>
              </div>
              <Link className="eco-button eco-button-secondary" href="/products/all-devices">Compare Device Features <ArrowUpRight aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section className="eco-final eco-section" data-reveal>
          <div className="eco-shell">
            <div className="eco-final-banner">
              <div className="eco-final-copy"><p className="eco-eyebrow eco-eyebrow-light">ECO DRIVING FOR YOUR FLEET</p><h2>Build the right configuration for your vehicles.</h2><p>Tell us about your vehicles, required safety checks and monitoring platform.</p></div>
              <Link className="eco-button eco-button-light" href="/contact">Talk to Sales <ArrowRight aria-hidden="true" /></Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
