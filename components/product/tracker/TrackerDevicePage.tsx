"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Battery,
  Bluetooth,
  BookOpen,
  Cable,
  Check,
  ChevronDown,
  CircleGauge,
  Clock3,
  Cpu,
  FileText,
  Fuel,
  Gauge,
  Lightbulb,
  LocateFixed,
  MapPinned,
  Power,
  RadioTower,
  Ruler,
  Settings2,
  Shield,
  Smartphone,
  Thermometer,
  ToggleLeft,
  Usb,
  UserRoundCheck,
  Wifi,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import deviceConfigs from "./device-configs.json";
import "./tracker-device.css";
import "./skins/skin-start.css";
import "./skins/skin-start-4g.css";
import "./skins/skin-smart.css";
import "./skins/skin-smart-can.css";
import "./skins/skin-smart-sigma.css";
import "./skins/skin-signal.css";
import "./skins/skin-signal-can.css";
import "./skins/skin-signal-pro.css";

type SpecSection = {
  title: string;
  icon: string;
  rows: string[][];
};

type DeviceConfig = {
  model: string;
  series: string;
  seriesPath: string;
  generation: string;
  networkLabel: string;
  heroEyebrow: string;
  heroTitle: string;
  heroLead: string;
  applicationEyebrow: string;
  applicationTitle: string;
  applicationLead: string;
  featureTitle: string;
  featureLead: string;
  ecoDriving: boolean;
  canBus: string | null;
  facts: { icon: string; value: string; label: string }[];
  features: { icon: string; title: string; text: string }[];
  specs: SpecSection[];
  applications: { icon: string; title: string; text: string }[];
  related: { href: string; label: string; title: string; text: string; cta: string }[];
  showSigma: boolean;
  sigmaText: string | null;
  connectLead: string;
  connectAdvanced: boolean;
  skin: string;
  image: string;
};

const devices = deviceConfigs as Record<string, DeviceConfig>;

const iconMap: Record<string, LucideIcon> = {
  Activity,
  BadgeCheck,
  Battery,
  Bluetooth,
  Cable,
  Clock3,
  Cpu,
  Fuel,
  Gauge,
  LocateFixed,
  MapPinned,
  Power,
  RadioTower,
  Ruler,
  Settings2,
  Shield,
  Thermometer,
  ToggleLeft,
  Usb,
  UserRoundCheck,
  Wrench,
  Zap,
};

const brandIcons: Record<string, string> = {
  Activity: "/device-icons/Internal%20Memory.svg",
  Battery: "/device-icons/Backup%20Battery.svg",
  Bluetooth: "/device-icons/Bluetooth.svg",
  Cable: "/device-icons/Wired%20Interfaces.svg",
  Can: "/device-icons/CAN%20Bus.svg",
  Cpu: "/device-icons/custom-logic.svg",
  DriverId: "/device-icons/Driver%20ID.svg",
  DualSim: "/device-icons/Dual%20SIM%204G.svg",
  ExternalAntennas: "/device-icons/External%20Antennas.svg",
  FourG: "/device-icons/4G.svg",
  LocateFixed: "/device-icons/GNSS.svg",
  MicroSD: "/device-icons/microSD.svg",
  RadioTower: "/device-icons/External%20Antennas.svg",
  Rpm: "/device-icons/RPM.svg",
  Ruler: "/device-icons/Compact%20Device.svg",
  Shield: "/device-icons/Electrical%20Protection.svg",
  Thermometer: "/device-icons/Electrical%20Protection.svg",
  ToggleLeft: "/device-icons/Inputs%20%26%20Outputs.svg",
  Usb: "/device-icons/USB%20Type-C%201.svg",
  Wrench: "/device-icons/1-Wire.svg",
};

const canIcon = "/device-icons/CAN%20Bus.svg";

function FactIcon({ name }: { name: string }) {
  if (brandIcons[name]) return <img src={brandIcons[name]} alt="" />;
  const Icon = iconMap[name] || Check;
  return <Icon aria-hidden="true" />;
}

function FeatureCard({ item, index }: { item: DeviceConfig["features"][number]; index: number }) {
  const icon = brandIcons[item.icon];
  const Icon = iconMap[item.icon];
  return (
    <article>
      <div>
        <span>{String(index + 1).padStart(2, "0")}</span>
        {icon ? <img className="s-feature-brand-icon" src={icon} alt="" /> : Icon ? <Icon className="s-feature-line-icon" aria-hidden="true" /> : null}
      </div>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </article>
  );
}

function SpecAccordion({ specs }: { specs: SpecSection[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="s-spec-list">
      {specs.map(({ title, icon, rows }, index) => {
        const Icon = iconMap[icon] || Cable;
        const expanded = open === index;
        return (
          <article className={expanded ? "open" : undefined} key={title}>
            <button type="button" aria-expanded={expanded} onClick={() => setOpen(expanded ? -1 : index)}>
              <span>
                {title === "Memory" ? <i className="s-spec-brand-icon" aria-hidden="true" /> : <Icon />}
                {title}
              </span>
              <ChevronDown />
            </button>
            <div className="s-spec-body">
              <div>
                {rows.map(([name, value]) => (
                  <div className="s-spec-row" key={name}>
                    <span>{name}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default function TrackerDevicePage({ model }: { model: string }) {
  const config = devices[model];
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const items = root.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.1 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [model]);

  if (!config) return null;

  const wikiUrl = `https://wiki.navtelecom.ru/en/home/devices/${config.model.toLowerCase().replace("-", "")}`;
  const resources: [LucideIcon, string, string, string, string, string][] = [
    [BookOpen, "MODEL DOCUMENTATION", `${config.model} Knowledge Base`, "Open the model page with specifications, wiring, manuals, firmware and configuration resources", "Open Model Guide", wikiUrl],
    [Settings2, "WINDOWS · MACOS · LINUX", "NTC Configurator", "Configure, update and diagnose Navtelecom devices from a desktop computer", "Explore Configurator", "/products/software-solutions/ntc-configurator"],
    [Smartphone, "ANDROID · IOS", "NTC Control", "Connect to supported devices and perform configuration work from a mobile device", "Explore Mobile App", "/products/software-solutions/ntc-control"],
    [FileText, "PRODUCT SELECTION", "All Tracking Devices", "Compare models, interfaces, networks and supported capabilities", "Compare Devices", "/products/all-devices"],
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      <div className={`tracker-device ${config.skin}`}>
        <div className={`s-page series-${config.series.toLowerCase()} generation-${config.generation}`} ref={rootRef}>
          <main>
            <section className="s-hero">
              <div className="s-hero-grid" />
              <div className="s-grid-pulse pulse-a" />
              <div className="s-grid-pulse pulse-b" />
              <div className="s-shell s-hero-layout">
                <div className="s-hero-copy">
                  <Link className="s-back" href={config.seriesPath}>
                    <ArrowLeft /> {config.series} Series
                  </Link>
                  <p className="s-eyebrow">{config.series} SERIES · {config.heroEyebrow}</p>
                  <h1>{config.model}</h1>
                  <h2>{config.heroTitle}</h2>
                  <p className="s-lead">{config.heroLead}</p>
                  <div className="s-actions">
                    <a className="s-button s-button-primary" href="#specifications">View Specifications <ArrowRight /></a>
                    <Link className="s-button s-button-secondary" href="/products/all-devices">Compare Devices <ArrowUpRight /></Link>
                  </div>
                </div>
                <div className="s-device-stage" aria-label={`${config.model} product render`}>
                  <div className="s-ring ring-one" />
                  <div className="s-ring ring-two" />
                  <div className="s-orbit-dot dot-one" />
                  <div className="s-orbit-dot dot-two" />
                  <div className="s-device-shadow" />
                  <img className="s-device-image" src={config.image} alt={`${config.model} GPS tracker`} />
                  <div className="s-model-chip">
                    <strong>{config.model}</strong>
                    <span>{config.networkLabel} GPS TRACKER</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="s-facts" id="key-facts" data-reveal>
              <div className="s-shell s-facts-grid">
                {config.facts.map(({ icon, value, label }) => (
                  <article key={label}>
                    <FactIcon name={icon} />
                    <div>
                      <strong>{value}</strong>
                      <span>{label}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="s-section s-applications" data-reveal>
              <div className="s-shell">
                <div className="s-heading s-heading-split">
                  <div>
                    <p className="s-eyebrow">{config.applicationEyebrow}</p>
                    <h2>{config.applicationTitle}</h2>
                  </div>
                  <p>{config.applicationLead}</p>
                </div>
                <div className="s-application-grid">
                  {config.applications.map(({ icon, title, text }) => {
                    const Icon = iconMap[icon] || Check;
                    return (
                      <article key={title}>
                        <span><Icon /></span>
                        <div>
                          <h3>{title}</h3>
                          <p>{text}</p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </section>

            <section className="s-section s-features" data-reveal>
              <div className="s-shell">
                <div className="s-heading">
                  <p className="s-eyebrow">MODEL CAPABILITIES</p>
                  <h2>{config.featureTitle}</h2>
                  <p>{config.featureLead}</p>
                </div>
                <div className="s-feature-grid">
                  {config.features.map((item, index) => <FeatureCard item={item} index={index} key={item.title} />)}
                </div>
              </div>
            </section>

            {config.canBus ? (
              <section className="s-can-promo" data-reveal>
                <div className="s-shell s-can-banner">
                  <div className="s-can-copy">
                    <p className="s-eyebrow s-eyebrow-light">CAN INTEGRATION</p>
                    <h2>Turn vehicle CAN traffic into usable fleet data</h2>
                    <p>Use CAN Spy to detect the bus speed, inspect messages and prepare a decoding configuration. Before deployment, check whether a public decoding file is already available for the vehicle.</p>
                    <div className="s-can-actions">
                      <Link className="s-button s-button-light" href="/products/software-solutions/can-spy">Explore CAN Spy <ArrowUpRight /></Link>
                      <a className="s-button s-button-ghost" href="https://drc.navtelecom.ru/public-can-decoding-files" target="_blank" rel="noreferrer">Supported Vehicles <ArrowUpRight /></a>
                    </div>
                  </div>
                  <div className="s-can-flow">
                    <span><small>VEHICLE BUS</small><b>{config.canBus === "dual" ? "CAN 1 + CAN 2" : "CAN bus"}</b></span>
                    <ArrowRight />
                    <span className="is-primary"><img src={canIcon} alt="" /><b>CAN Spy</b><small>Scan · inspect · decode</small></span>
                    <ArrowRight />
                    <span><small>DECODED DATA</small><b>Fuel · RPM · Mileage · and more</b></span>
                  </div>
                </div>
              </section>
            ) : config.ecoDriving ? (
              <section className="s-eco-driving" data-reveal>
                <div className="s-shell s-eco-banner">
                  <div className="s-eco-copy">
                    <p className="s-eyebrow s-eyebrow-light">DRIVER BEHAVIOUR &amp; SAFETY</p>
                    <h2>Promote safer driving with Eco Driving</h2>
                    <p>Use available input lines to monitor seat-belt and headlight status, then combine these signals with acceleration, braking and cornering events for driver assessment.</p>
                    <Link href="/products/software-solutions/eco-driving">Explore Eco Driving <ArrowUpRight /></Link>
                  </div>
                  <div className="s-eco-signals">
                    <span><UserRoundCheck /><b>Seat belt</b><small>Driver safety status</small></span>
                    <span><Lightbulb /><b>Headlights</b><small>Low-beam monitoring</small></span>
                    <span><Gauge /><b>Driving events</b><small>Braking · acceleration · cornering</small></span>
                  </div>
                </div>
              </section>
            ) : null}

            <section className="s-servers" data-reveal>
              <div className="s-shell s-servers-card">
                <div className="s-server-number">3</div>
                <div>
                  <p className="s-eyebrow s-eyebrow-light">DATA REDUNDANCY</p>
                  <h2>Three servers at once</h2>
                  <p>Send the same telemetry data to three monitoring servers simultaneously for redundant delivery, parallel platforms and partner integrations</p>
                </div>
                <div className="s-server-diagram">
                  <span>01</span>
                  <span>02</span>
                  <span>03</span>
                  <RadioTower />
                </div>
              </div>
            </section>

            <section className="s-section s-connect" data-reveal>
              <div className="s-shell s-connect-card">
                <div className="s-connect-copy">
                  <p className="s-eyebrow s-eyebrow-light">CONNECTED VEHICLE DATA</p>
                  <h2>One tracker. Multiple data sources</h2>
                  <p>{config.connectLead}</p>
                </div>
                <div className="s-diagram">
                  <div className="s-source-list">
                    <span><ToggleLeft />Vehicle signals</span>
                    <span><Fuel />Fuel data</span>
                    {config.connectAdvanced ? <span><Cpu />CAN data</span> : null}
                    {config.connectAdvanced ? <span><Cable />{config.canBus === "dual" ? "RS-485" : "RS-232 / RS-485"}</span> : null}
                    <span><Bluetooth />BLE sensors</span>
                  </div>
                  <ArrowRight className="s-diagram-arrow" />
                  <div className="s-diagram-device">
                    <strong>{config.model}</strong>
                    <small>LOCAL PROCESSING</small>
                  </div>
                  <ArrowRight className="s-diagram-arrow" />
                  <div className="s-platform">
                    <RadioTower />
                    <strong>Telematics platform</strong>
                    <small>Monitoring · analytics · fleet management</small>
                  </div>
                </div>
              </div>
            </section>

            {config.showSigma && config.sigmaText ? (
              <section className="s-sigma-promo" data-reveal>
                <div className="s-shell s-sigma-banner">
                  <div className="s-sigma-copy">
                    <p className="s-eyebrow s-eyebrow-light">ADDITIONAL WI-FI DATA CHANNEL</p>
                    <h2>Extend connectivity with SIGMA M-3003</h2>
                    <p>{config.sigmaText}</p>
                    <Link href="/products/communication-modules/sigma-m3003">Explore SIGMA M-3003 <ArrowUpRight /></Link>
                  </div>
                  <div className="s-sigma-flow">
                    <span><RadioTower /><b>{config.model}</b><small>TRACKER · HOST</small></span>
                    <ArrowRight />
                    <span className="is-primary"><Wifi /><b>SIGMA</b><small>WI-FI DATA CHANNEL</small></span>
                    <ArrowRight />
                    <span><RadioTower /><b>Configured servers</b><small>TELEMETRY · SERVICE DATA</small></span>
                  </div>
                </div>
              </section>
            ) : null}

            <section className="s-section s-specifications" id="specifications" data-reveal>
              <div className="s-shell">
                <div className="s-heading s-heading-split">
                  <div>
                    <p className="s-eyebrow">TECHNICAL SPECIFICATIONS</p>
                    <h2>Detailed device capabilities</h2>
                  </div>
                  <p>Review the interfaces, connectivity, power requirements and environmental specifications relevant to your installation.</p>
                </div>
                <SpecAccordion specs={config.specs} />
              </div>
            </section>

            <section className="s-selection" data-reveal>
              <div className="s-shell">
                <div className="s-selection-banner">
                  <div>
                    <span><CircleGauge /></span>
                    <div>
                      <p className="s-eyebrow s-eyebrow-light">DEVICE SELECTION</p>
                      <h2>Is {config.model} right for your project?</h2>
                      <small>Compare connectivity, interfaces and supported capabilities across the Navtelecom range.</small>
                    </div>
                  </div>
                  <div className="s-actions">
                    <Link className="s-button s-button-light" href="/products/all-devices">Compare Devices <ArrowRight /></Link>
                    <Link className="s-button s-button-ghost" href="/contact">Talk to Sales <ArrowUpRight /></Link>
                  </div>
                </div>
              </div>
            </section>

            <section className="s-section s-resources" data-reveal>
              <div className="s-shell">
                <div className="s-heading">
                  <p className="s-eyebrow">PRODUCT CENTER</p>
                  <h2>Everything needed for implementation</h2>
                  <p>Open maintained product documentation, configuration tools and device-selection resources.</p>
                </div>
                <div className="s-resource-grid">
                  {resources.map(([Icon, eyebrow, title, text, label, href]) => (
                    <a href={href} key={title} target="_blank" rel="noreferrer">
                      <div className="s-resource-top"><span><Icon /></span><ArrowUpRight /></div>
                      <small>{eyebrow}</small>
                      <h3>{title}</h3>
                      <p>{text}</p>
                      <strong>{label} <ArrowRight /></strong>
                    </a>
                  ))}
                </div>
              </div>
            </section>

            <section className="s-related s-section" data-reveal>
              <div className="s-shell">
                <div className="s-heading s-heading-split">
                  <div>
                    <p className="s-eyebrow">EXPLORE THE RANGE</p>
                    <h2>Choose the right level of integration</h2>
                  </div>
                  <Link className="s-button s-button-secondary" href="/products/all-devices">Explore All Devices <ArrowUpRight /></Link>
                </div>
                <div className="s-related-grid">
                  {config.related.map((item) => (
                    <Link href={item.href} key={item.label}>
                      <span>{item.label}</span>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                      <strong>{item.cta} <ArrowRight /></strong>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
