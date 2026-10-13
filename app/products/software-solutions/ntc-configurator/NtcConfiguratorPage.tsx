"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ArrowsClockwise,
  Broadcast,
  Check,
  CheckCircle,
  CloudArrowUp,
  DownloadSimple,
  FlowArrow,
  Gear,
  Scan,
  SlidersHorizontal,
} from "phosphor-react";
import "./ntc-configurator.css";

const DOWNLOADS_URL =
  "https://wiki.navtelecom.ru/en/home/ntc_configurator#downloads";
const RELEASE_NOTES_URL =
  "https://wiki.navtelecom.ru/en/home/ntc_configurator/history";
const CONFIGURATION_GUIDES_URL =
  "https://wiki.navtelecom.ru/en/home/devices/settings";

const features = [
  {
    title: "Advanced Configuration",
    description:
      "Access supported device parameters, interfaces, sensors, inputs, outputs and operating logic.",
    icon: SlidersHorizontal,
  },
  {
    title: "Diagnostics & Telemetry",
    description:
      "Monitor current device status, inspect telemetry and access detailed diagnostic information.",
    icon: Activity,
  },
  {
    title: "Firmware Updates",
    description:
      "Update device firmware and maintain access to supported device functionality.",
    icon: CloudArrowUp,
  },
  {
    title: "Local & Remote Access",
    description:
      "Connect via USB or Bluetooth, or configure devices remotely through RCS.",
    icon: Broadcast,
  },
];

const capabilities = [
  "Create new device configurations",
  "Open and edit saved configuration files",
  "Read the current configuration from a device",
  "Save and upload configurations",
  "Monitor, review and export live and stored telemetry",
  "Analyze device logs and validate connected sensors and interfaces",
  "Update device firmware",
  "Send commands and service requests",
];

const steps = [
  {
    title: "Connect to a Device",
    description:
      "Connect locally via USB or Bluetooth, or establish a remote connection through RCS.",
  },
  {
    title: "Create or Read a Configuration",
    description:
      "Start a new configuration, open a saved file or read the current settings from the device.",
  },
  {
    title: "Configure and Verify",
    description:
      "Apply the required settings and verify operation using telemetry and diagnostic tools.",
  },
];

const technicalTabs = [
  {
    id: "tools",
    label: "Engineering Tools",
    title: "Configuration, diagnostics and testing in one application",
    description:
      "Use the tools required to prepare devices, validate connected equipment and troubleshoot deployments.",
    items: [
      "CAN Spy",
      "Complex Events",
      "Communication diagnostics",
      "Configuration file management",
      "Sensor testing and validation",
      "Firmware update tools",
    ],
  },
  {
    id: "interfaces",
    label: "Supported Interfaces",
    title: "Work with the interfaces used in real telematics installations",
    description:
      "Configure device communications and connected equipment from a single workspace.",
    items: [
      "CAN bus",
      "RS-485",
      "RS-232",
      "Bluetooth",
      "Digital inputs and outputs",
      "Analog inputs",
    ],
  },
  {
    id: "use-cases",
    label: "Typical Use Cases",
    title: "Designed for installation, integration and technical support",
    description:
      "Use NTC Configurator throughout the device deployment lifecycle.",
    items: [
      "Installation configuration",
      "Sensor integration and testing",
      "CAN data verification",
      "Troubleshooting",
      "Firmware updates",
      "Remote maintenance",
    ],
  },
  {
    id: "diagnostics",
    label: "Telemetry & Diagnostics",
    title: "See what the device is doing in real time",
    description:
      "Inspect live device status, review stored telemetry, analyze logs and validate connected equipment before deployment or during troubleshooting.",
    items: [
      "Live telemetry monitoring",
      "Stored telemetry and black-box data",
      "Device and communication logs",
      "Sensor and interface validation",
      "Telemetry data export",
      "Service commands and requests",
    ],
  },
];

function WindowsIcon() {
  return (
    <svg className="ntc-system-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M2.5 4.6 10.8 3.45v8.03H2.5V4.6Zm9.45-1.31L21.5 2v9.48h-9.55V3.29ZM2.5 12.55h8.3v8.02L2.5 19.42v-6.87Zm9.45 0h9.55V22l-9.55-1.31v-8.14Z"
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg className="ntc-system-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.47-2.09-.5-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.5c1.2.06 2.04.66 2.75.7 1.06-.22 2.07-.85 3.21-.77 1.37.11 2.4.65 3.08 1.64-2.83 1.69-2.16 5.42.44 6.46-.52 1.36-1.2 2.7-3.48 4.75ZM12.03 7.25C11.88 5.23 13.53 3.56 15.4 3.4c.26 2.34-2.12 4.09-3.37 3.85Z"
      />
    </svg>
  );
}

function LinuxIcon() {
  return (
    <svg className="ntc-system-icon" viewBox="0 0 24 24" aria-hidden="true">
      <ellipse cx="12" cy="12.4" rx="6.4" ry="8.3" fill="currentColor" />
      <ellipse cx="12" cy="14.1" rx="4.15" ry="5.05" fill="#fff" />
      <ellipse cx="9.85" cy="8.25" rx="1.45" ry="2.05" fill="#fff" />
      <ellipse cx="14.15" cy="8.25" rx="1.45" ry="2.05" fill="#fff" />
      <circle cx="10.25" cy="8.45" r=".55" fill="currentColor" />
      <circle cx="13.75" cy="8.45" r=".55" fill="currentColor" />
      <path
        d="m9.75 10.2 2.25-1.05 2.25 1.05L12 11.85 9.75 10.2Z"
        fill="#f5a623"
      />
      <path
        d="M7.2 19.1c-1.75.2-2.8.8-3.35 1.75 1.58.42 3.2.42 4.82-.08l-1.47-1.67Zm9.6 0c1.75.2 2.8.8 3.35 1.75-1.58.42-3.2.42-4.82-.08l1.47-1.67Z"
        fill="#f5a623"
      />
    </svg>
  );
}

const platforms = [
  { name: "Windows", icon: WindowsIcon, className: "windows" },
  { name: "macOS", icon: AppleIcon, className: "macos" },
  { name: "Linux", icon: LinuxIcon, className: "linux" },
];

export default function NtcConfiguratorPage() {
  const [activeTab, setActiveTab] = useState(technicalTabs[0].id);
  const activeTechnicalTab =
    technicalTabs.find((tab) => tab.id === activeTab) ?? technicalTabs[0];

  return (
    <div className="ntc-page">
      <main>
        <section className="ntc-hero">
          <div className="ntc-shell ntc-hero-grid">
            <div>
              <Link className="ntc-back" href="/products/software-solutions">
                <ArrowLeft aria-hidden="true" size={16} /> Software Solutions
              </Link>
              <p className="ntc-eyebrow">Professional Configuration Software</p>
              <h1>
                NTC
                <br />
                Configurator
              </h1>
              <p className="ntc-lead">
                Configure, diagnose and update Navtelecom devices. Connect
                locally via USB or Bluetooth, or work remotely through RCS.
              </p>

              <div
                className="ntc-platforms"
                aria-label="Download NTC Configurator"
              >
                {platforms.map(({ name, icon: PlatformIcon, className }) => (
                  <a
                    key={name}
                    className={`ntc-platform-button ntc-platform-${className}`}
                    href={DOWNLOADS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="ntc-platform-symbol">
                      <PlatformIcon />
                    </span>
                    <span className="ntc-platform-copy">
                      <small>Download for</small>
                      <strong>{name}</strong>
                    </span>
                    <DownloadSimple
                      className="ntc-download-icon"
                      aria-hidden="true"
                      size={15}
                    />
                  </a>
                ))}
              </div>

              <a
                className="ntc-text-link"
                href={RELEASE_NOTES_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Release Notes <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            </div>

            <div
              className="ntc-hero-art"
              role="img"
              aria-label="Abstract NTC Configurator application illustration"
            >
              <span className="ntc-floating-icon ntc-floating-icon-1">
                <Check aria-hidden="true" size={31} />
              </span>
              <span className="ntc-floating-icon ntc-floating-icon-2">
                <ArrowsClockwise aria-hidden="true" size={31} />
              </span>
              <span className="ntc-floating-icon ntc-floating-icon-3">
                <Activity aria-hidden="true" size={31} />
              </span>
              <span className="ntc-floating-icon ntc-floating-icon-4">
                <Gear aria-hidden="true" size={31} />
              </span>
              <span className="ntc-app-tile">
                <Image
                  src="/Navtelecom/CFG.svg"
                  alt=""
                  width={180}
                  height={180}
                  className="ntc-app-logo"
                  priority
                />
              </span>
            </div>
          </div>
        </section>

        <section className="ntc-section ntc-features-section">
          <div className="ntc-shell">
            <div className="ntc-section-heading">
              <p className="ntc-eyebrow">Core Capabilities</p>
              <h2>
                Everything engineers need to configure and maintain devices
              </h2>
            </div>
            <div className="ntc-feature-grid">
              {features.map(({ title, description, icon: FeatureIcon }) => (
                <article className="ntc-feature-card" key={title}>
                  <span className="ntc-icon-box">
                    <FeatureIcon aria-hidden="true" size={22} />
                  </span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ntc-section ntc-capabilities-section">
          <div className="ntc-shell ntc-capabilities-layout">
            <div>
              <p className="ntc-eyebrow">What You Can Do</p>
              <h2>One workspace for the complete configuration process</h2>
              <p>
                Create, apply and verify device settings without switching
                between disconnected tools.
              </p>
            </div>
            <div className="ntc-check-grid">
              {capabilities.map((capability) => (
                <div className="ntc-check-item" key={capability}>
                  <CheckCircle aria-hidden="true" size={18} weight="fill" />
                  {capability}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ntc-section ntc-process-section">
          <div className="ntc-shell">
            <div className="ntc-section-heading">
              <p className="ntc-eyebrow">How It Works</p>
              <h2>A clear process from connection to verification</h2>
            </div>
            <div className="ntc-step-grid">
              {steps.map((step, index) => (
                <article className="ntc-step-card" key={step.title}>
                  <span>STEP {String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ntc-section ntc-technical-section">
          <div className="ntc-shell">
            <div className="ntc-section-heading">
              <p className="ntc-eyebrow">Technical Capabilities</p>
              <h2>Tools and interfaces for professional deployments</h2>
            </div>

            <div className="ntc-tabs-layout">
              <div
                className="ntc-tabs"
                role="tablist"
                aria-label="Technical capabilities"
              >
                {technicalTabs.map((tab) => (
                  <button
                    key={tab.id}
                    id={`tab-${tab.id}`}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    aria-controls={`panel-${tab.id}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                    <ArrowRight aria-hidden="true" size={17} />
                  </button>
                ))}
              </div>

              <div
                className="ntc-tab-panel"
                id={`panel-${activeTechnicalTab.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${activeTechnicalTab.id}`}
              >
                <p className="ntc-eyebrow">{activeTechnicalTab.label}</p>
                <h3>{activeTechnicalTab.title}</h3>
                <p>{activeTechnicalTab.description}</p>
                {activeTechnicalTab.items.length > 0 && (
                  <ul>
                    {activeTechnicalTab.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="ntc-section ntc-tools-section">
          <div className="ntc-shell">
            <div className="ntc-section-heading">
              <p className="ntc-eyebrow">Advanced Engineering Tools</p>
              <h2>Go further with the Navtelecom software ecosystem</h2>
              <p className="ntc-lead">
                Analyze CAN bus data and create custom device operating logic
                using dedicated engineering tools.
              </p>
            </div>

            <div className="ntc-tool-grid">
              <Link href="/products/software-solutions/can-spy">
                <span className="ntc-icon-box">
                  <Scan aria-hidden="true" size={22} />
                </span>
                <span>
                  <h3>CAN Spy</h3>
                  <p>Analyze CAN bus traffic and validate vehicle data.</p>
                </span>
                <ArrowUpRight aria-hidden="true" size={20} />
              </Link>
              <Link href="/products/software-solutions/complex-events">
                <span className="ntc-icon-box">
                  <FlowArrow aria-hidden="true" size={22} />
                </span>
                <span>
                  <h3>Complex Events</h3>
                  <p>Create custom algorithms and advanced device logic.</p>
                </span>
                <ArrowUpRight aria-hidden="true" size={20} />
              </Link>
            </div>
          </div>
        </section>

        <section className="ntc-guides-section">
          <div className="ntc-shell">
            <div className="ntc-guides-box">
              <div>
                <h2>Need Help Configuring a Device?</h2>
                <p>
                  Explore practical guides for data transmission, CAN bus,
                  RS-232/RS-485, Bluetooth sensors, device outputs and other
                  integration scenarios.
                </p>
              </div>
              <a
                className="ntc-light-button"
                href={CONFIGURATION_GUIDES_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Configuration Guides
                <ArrowUpRight aria-hidden="true" size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
