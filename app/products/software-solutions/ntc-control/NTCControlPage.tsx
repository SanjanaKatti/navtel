"use client";

import React from "react";
import Link from "next/link";
import {
  type LucideIcon,
  Activity,
  ArrowUpRight,
  Blocks,
  Bluetooth,
  BookOpen,
  Cable,
  Check,
  Cloud,
  Cpu,
  DatabaseBackup,
  FolderDown,
  Radio,
  RefreshCw,
  ScanSearch,
  SlidersHorizontal,
  Smartphone,
  UploadCloud,
  Usb,
  Waypoints,
  Wrench,
} from "lucide-react";
import "./ntc-control-page.css";

const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=ru.navtelecom.ntc.control";
const APP_STORE_URL =
  "https://apps.apple.com/us/app/ntc-control/id6761608898";
const WIKI_URL = "https://wiki.navtelecom.ru/en/home/ntc_control";

const capabilities = [
  {
    icon: SlidersHorizontal,
    title: "Basic Device Configuration",
    text: "Configure the essential parameters required to prepare a Navtelecom device for vehicle monitoring.",
  },
  {
    icon: Activity,
    title: "Live Telemetry & Diagnostics",
    text: "View current telemetry and sensor values to confirm that the device is operating correctly.",
  },
  {
    icon: DatabaseBackup,
    title: "Black Box Data Recovery",
    text: "Download telemetry stored in device memory and upload it to the server from your smartphone.",
  },
  {
    icon: RefreshCw,
    title: "Firmware & Commands",
    text: "Update device firmware and send standard or custom commands directly from the application.",
  },
  {
    icon: Waypoints,
    title: "Flexible Connections",
    text: "Connect locally via Bluetooth or USB, or access supported devices remotely over the internet.",
  },
  {
    icon: FolderDown,
    title: "Device File Access",
    text: "Download supported files from the device SD card and perform essential service operations.",
  },
];

const audiences = [
  {
    icon: Wrench,
    title: "Installers",
    text: "Configure devices and verify installation results directly at the vehicle.",
  },
  {
    icon: ScanSearch,
    title: "Service Technicians",
    text: "Diagnose devices, retrieve stored telemetry and perform essential maintenance tasks.",
  },
  {
    icon: Blocks,
    title: "System Integrators",
    text: "Commission Navtelecom devices without carrying a laptop to every installation.",
  },
];

const resources = [
  {
    icon: BookOpen,
    title: "NTC Control Guide",
    text: "Explore application functions, connection methods and supported devices.",
    label: "Open NTC Control Guide",
    url: WIKI_URL,
  },
  {
    icon: Cable,
    title: "Connecting to a Device",
    text: "Follow the connection process for supported Navtelecom devices.",
    label: "View Connection Guide",
    url: `${WIKI_URL}/connection_ble`,
  },
  {
    icon: UploadCloud,
    title: "Uploading Telemetry",
    text: "Learn how to retrieve stored telemetry and upload it to the server.",
    label: "View Telemetry Guide",
    url: `${WIKI_URL}/tmi_to_srv`,
  },
];

function StoreButton({ href, type }: { href: string; type: "google" | "apple" }) {
  const isGoogle = type === "google";

  return (
    <a className="store-button" href={href} target="_blank" rel="noreferrer">
      {isGoogle ? <GooglePlayMark /> : <AppStoreMark />}
      <span>{isGoogle ? "Google Play" : "App Store"}</span>
    </a>
  );
}

function GooglePlayMark() {
  return (
    <svg className="store-mark" viewBox="0 0 28 28" aria-hidden="true">
      <path fill="#34A853" d="M3.5 2.7 15.8 14 3.5 25.3c-.5-.6-.8-1.4-.8-2.4V5.1c0-1 .3-1.8.8-2.4Z" />
      <path fill="#4285F4" d="m15.8 14 3.8-3.5L6.4 3c-.9-.5-1.8-.6-2.6-.1L15.8 14Z" />
      <path fill="#FBBC04" d="m15.8 14-12 11.1c.8.5 1.7.4 2.6-.1l13.2-7.5-3.8-3.5Z" />
      <path fill="#EA4335" d="m24.2 12.7-4.6-2.6-3.8 3.9 3.8 3.9 4.6-2.6c1.4-.8 1.4-1.8 0-2.6Z" />
    </svg>
  );
}

function AppStoreMark() {
  return (
    <svg className="store-mark app-store-mark" viewBox="0 0 28 28" aria-hidden="true">
      <rect width="28" height="28" rx="6.5" fill="#0A84FF" />
      <path d="M10.1 20.8h-3M21 20.8h-7.2M9.1 17.2l6.1-10.5M18.9 17.2 13 7" fill="none" stroke="#fff" strokeWidth="2.3" strokeLinecap="round" />
      <path d="M7.2 17.2h13.6" fill="none" stroke="#fff" strokeWidth="2.3" strokeLinecap="round" />
    </svg>
  );
}

function PhoneVisual() {
  return (
    <div className="phone-scene" aria-label="NTC Control mobile application interface">
      <div className="orbit" aria-hidden="true">
        <span className="orbit-sweep" />
        <span className="orbit-pulse" />
      </div>
      <div className="phone">
        <div className="phone-screen">
          <img
            src="/software/ntc-control/ntc-control-app.png"
            alt="NTC Control application home screen"
          />
        </div>
      </div>
      <p className="phone-disclaimer">App interface shown for reference. Actual appearance and available features may vary by version, device and platform.</p>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, text }: { icon: LucideIcon; title: string; text: string }) {
  return (
    <article className="content-card">
      <div className="icon-box"><Icon aria-hidden="true" /></div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="section-head">
      <div>
        <p className="ntcc-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
    </div>
  );
}

export default function NTCControlPage() {
  return (
    <div className="ntc-control-page pt-20">
      <main>
        <section className="ntcc-hero">
          <div className="ntcc-shell ntcc-hero-inner">
            <div className="ntcc-hero-copy">
              <p className="ntcc-eyebrow">Mobile device configuration</p>
              <h1>NTC Control</h1>
              <p>
                Configure, diagnose and service supported Navtelecom devices locally
                or remotely from your smartphone, without carrying a laptop.
              </p>
              <div className="store-row" aria-label="Download options">
                <StoreButton href={GOOGLE_PLAY_URL} type="google" />
                <StoreButton href={APP_STORE_URL} type="apple" />
              </div>
              <div className="availability">Available for Android and iOS.</div>
            </div>
            <PhoneVisual />
          </div>
        </section>

        <div className="fact-strip">
          <div className="ntcc-shell facts">
            <div className="fact"><Smartphone aria-hidden="true" />iOS &amp; Android</div>
            <div className="fact"><Radio aria-hidden="true" />Local &amp; Remote</div>
            <div className="fact"><Bluetooth aria-hidden="true" />Bluetooth · Internet · USB</div>
            <div className="fact"><Cpu aria-hidden="true" />Navtelecom Devices</div>
          </div>
        </div>

        <section>
          <div className="ntcc-shell">
            <SectionHeading
              eyebrow="Core capabilities"
              title="Everything Needed for Field Service"
              text="Configure a device, verify the installation and complete essential service operations directly from your smartphone."
            />
            <div className="cards">
              {capabilities.map((item) => <FeatureCard key={item.title} {...item} />)}
            </div>
          </div>
        </section>

        <section className="section-soft">
          <div className="ntcc-shell">
            <SectionHeading
              eyebrow="Field workflow"
              title="Complete Installation Without a Laptop"
            />
            <div className="workflow">
              <article className="step">
                <div className="step-number">01</div>
                <h3>Connect</h3>
                <p>Connect to the device locally or remotely using an available connection method.</p>
              </article>
              <article className="step">
                <div className="step-number">02</div>
                <h3>Configure</h3>
                <p>Apply the required settings, update firmware or send commands.</p>
              </article>
              <article className="step">
                <div className="step-number">03</div>
                <h3>Verify</h3>
                <p>Check telemetry and device status before completing the installation.</p>
              </article>
            </div>
          </div>
        </section>

        <section>
          <div className="ntcc-shell">
            <SectionHeading
              eyebrow="Connection methods"
              title="Connect the Way the Installation Requires"
              text="Choose the connection method available for the device, mobile platform and service scenario."
            />
            <div className="connection-grid">
              <article className="connection-card">
                <div className="connection-top"><strong>LOCAL</strong><Bluetooth aria-hidden="true" /></div>
                <h3>Bluetooth</h3>
                <p>Connect directly to compatible Bluetooth-enabled Navtelecom devices.</p>
              </article>
              <article className="connection-card">
                <div className="connection-top"><strong>REMOTE</strong><Cloud aria-hidden="true" /></div>
                <h3>Internet</h3>
                <p>Access supported devices remotely through the Navtelecom remote connection service.</p>
              </article>
              <article className="connection-card light">
                <div className="connection-top"><strong>WIRED</strong><Usb aria-hidden="true" /></div>
                <h3>USB</h3>
                <p>Connect supported Android smartphones using USB Host mode and an OTG cable.</p>
              </article>
            </div>
            <div className="connection-note">
              <span>Connection availability depends on the device model and mobile operating system.</span>
              <a className="ntcc-text-link" href={WIKI_URL} target="_blank" rel="noreferrer">
                Check Connection Compatibility <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="section-soft">
          <div className="ntcc-shell">
            <SectionHeading
              eyebrow="Built for field service"
              title="One Application for Every Installation Stage"
            />
            <div className="cards">
              {audiences.map((item) => <FeatureCard key={item.title} {...item} />)}
            </div>
          </div>
        </section>

        <section>
          <div className="ntcc-shell">
            <SectionHeading
              eyebrow="Choose your tool"
              title="Mobile in the Field. Desktop for Advanced Work."
            />
            <div className="choice">
              <article className="choice-card featured">
                <div className="choice-title"><h3>NTC Control</h3><span>Mobile</span></div>
                <ul className="choice-list">
                  {[
                    "Android and iOS",
                    "Field configuration and diagnostics",
                    "Fast installation verification",
                    "Local and remote access",
                  ].map((label) => <li key={label}><Check aria-hidden="true" />{label}</li>)}
                </ul>
              </article>
              <article className="choice-card">
                <div className="choice-title"><h3>NTC Configurator</h3><span>Desktop</span></div>
                <ul className="choice-list">
                  {[
                    "Windows, macOS and Linux",
                    "Complete device configuration",
                    "Advanced engineering workflows",
                    "Detailed parameter management",
                  ].map((label) => <li key={label}><Check aria-hidden="true" />{label}</li>)}
                </ul>
                <Link className="choice-link" href="/products/software-solutions/ntc-configurator">
                  Explore NTC Configurator →
                </Link>
              </article>
            </div>
          </div>
        </section>

        <section className="section-soft">
          <div className="ntcc-shell">
            <SectionHeading
              eyebrow="Documentation"
              title="Get Started with NTC Control"
              text="Use focused guides for setup, connection and telemetry recovery."
            />
            <div className="cards">
              {resources.map(({ icon: Icon, title, text, label, url }) => (
                <article className="content-card resource-card" key={title}>
                  <div className="icon-box"><Icon aria-hidden="true" /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <a className="ntcc-text-link" href={url} target="_blank" rel="noreferrer">
                    {label} <ArrowUpRight aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ntcc-final-cta">
          <div className="ntcc-shell cta-panel">
            <div>
              <h2>Configure Devices Directly from Your Phone</h2>
              <p>Connect, configure and verify Navtelecom devices directly from your smartphone.</p>
            </div>
            <div className="cta-actions">
              <div className="store-row">
                <StoreButton href={GOOGLE_PLAY_URL} type="google" />
                <StoreButton href={APP_STORE_URL} type="apple" />
              </div>
              <a className="cta-help" href={WIKI_URL} target="_blank" rel="noreferrer">
                Need help? Open the NTC Control Guide →
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
