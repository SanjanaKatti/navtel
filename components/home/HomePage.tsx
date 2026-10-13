"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowRight, ArrowUpRight, BookOpen, Check, ChevronDown, CircleGauge, Download,
  CarFront, Cloud, Cpu, Layers3, Satellite, Wrench, LogIn,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import "./home-page.css";

const startDevice = "/home/start-device.png";
const startS4011 = "/home/start-s-4011.png";
const startS4013 = "/home/start-s-4013.png";
const smartDevice = "/home/smart-device.png";
const signalDevice = "/home/signal-device.png";
const startDeviceCard = "/home/start-device-card.png";
const smartDeviceCard = "/home/smart-device-card.png";
const signalDeviceCard = "/home/signal-device-card.png";
const ntcConfiguratorLogo = "/home/ntc-configurator.svg";
const canSpyLogo = "/home/can-spy.svg";
const drcLogo = "/home/drc.svg";
const complexEventsLogo = "/home/complex-events.svg";
const ntcControlLogo = "/home/ntc-control.svg";
const ecoDrivingLogo = "/home/eco-driving.png";
const canSpyRealInterface = "/home/can-spy-real-interface.png";
const macbookProFrame = "/home/macbook-pro-frame-v1.png";
const navtelecomMark = "/home/navtelecom-mark.png";
const sigmaM3003 = "/home/sigma-m3003-hero.png";
const omnicommLogo = "/home/partners/omnicomm.png";
const uffizioLogo = "/home/partners/uffizio.svg";
const escortLogo = "/home/partners/escort.png";
const gurtamLogo = "/home/partners/gurtam.png";
const galileoskyLogo = "/home/partners/partner-blue-green.png";
const technotonLogo = "/home/partners/partner-light-blue.png";
const fortTelecomLogo = "/home/partners/partner-red.png";
const pilotTelematicsLogo = "/home/partners/pilot-telematics.png";
const mechatronicsLogo = "/home/partners/mechatronics-blue.png";
const schneiderElectricLogo = "/home/partners/schneider-electric.png";
const mercetechInnovationLogo = "/home/partners/mercedes-benz-innovation.png";
const siemensLogo = "/home/partners/siemens.png";

const deviceSeries = [
  { name: "START", label: "COST-EFFECTIVE · COMPACT", bestFor: "Essential vehicle tracking, fuel monitoring and connected sensors in a compact enclosure.", tags: ["GPS tracking", "BLE sensors", "Compact installation"], href: "/products/tracking-devices/start-series", image: startDeviceCard },
  { name: "SMART", label: "FLEXIBLE · CONFIGURABLE", bestFor: "Flexible fleet projects that need CAN, wired peripherals and configurable device logic.", tags: ["CAN options", "RS-485 & Modbus", "Custom logic"], href: "/products/tracking-devices/smart-series", image: smartDeviceCard },
  { name: "SIGNAL", label: "PROFESSIONAL · EXPANDED I/O", bestFor: "Professional integrations with expanded I/O, external antennas and driver communication.", tags: ["Expanded I/O", "External antennas", "Driver communication"], href: "/products/tracking-devices/signal-series", image: signalDeviceCard },
];

const software = [
  { name: "NTC Configurator", number: "01", logo: ntcConfiguratorLogo, text: "Configure devices, create templates and work with telemetry from Windows, macOS or Linux.", href: "/products/software-solutions/ntc-configurator" },
  { name: "CAN Spy", number: "02", logo: canSpyLogo, text: "Capture CAN traffic, decode vehicle parameters and prepare reusable decoding files.", href: "/products/software-solutions/can-spy" },
  { name: "DRC", number: "03", logo: drcLogo, text: "Manage device groups and distribute files, configurations and tasks remotely.", href: "/products/software-solutions/drc" },
  { name: "Complex Events", number: "04", logo: complexEventsLogo, text: "Build custom on-device logic for automation, integration and control with offline execution.", href: "/products/software-solutions/complex-events" },
  { name: "NTC Control", number: "05", logo: ntcControlLogo, text: "Connect to supported devices from Android and iOS for convenient field work.", href: "/products/software-solutions/ntc-control" },
  { name: "Eco Driving", number: "06", logo: ecoDrivingLogo, text: "Turn driving-event data into practical scoring, coaching and fleet-safety insights.", href: "/products/software-solutions/eco-driving" },
];

const expertiseStats = [
  { value: "20", label: "Years in Industry" },
  { value: "3M+", label: "Devices Produced" },
  { value: "45", label: "Countries Deployed" },
];

const engineeringPillars = [
  { value: "HARDWARE", label: "In-house device engineering" },
  { value: "FIRMWARE", label: "Embedded logic and data processing" },
  { value: "SOFTWARE", label: "Configuration, deployment and diagnostics" },
  { value: "SUPPORT", label: "Integration guidance from our engineers" },
];

const technologyPartners = [
  { name: "Escort", logo: escortLogo, className: "partner-escort" },
  { name: "Gurtam", logo: gurtamLogo, className: "partner-gurtam" },
  { name: "Technoton", logo: technotonLogo, className: "partner-technoton" },
  { name: "Uffizio", logo: uffizioLogo, className: "partner-uffizio" },
  { name: "Galileosky", logo: galileoskyLogo, className: "partner-galileosky" },
  { name: "Pilot Telematics", logo: pilotTelematicsLogo, className: "partner-pilot" },
  { name: "Schneider Electric", logo: schneiderElectricLogo, className: "partner-schneider" },
  { name: "Omnicomm", logo: omnicommLogo, className: "partner-omnicomm" },
  { name: "Mechatronics", logo: mechatronicsLogo, className: "partner-mechatronics" },
  { name: "Mercetech Innovations", logo: mercetechInnovationLogo, className: "partner-mercetech" },
  { name: "Siemens", logo: siemensLogo, className: "partner-siemens" },
  { name: "Fort Telecom", logo: fortTelecomLogo, className: "partner-fort" },
];

const heroSlides = [
  {
    eyebrow: "NEW TRACKING MODELS",
    title: "Meet the S-401X and S-451X models",
    text: "New 4G / 2G START and SMART trackers with flexible peripherals and unlimited RS‑485 on equipped models.",
    cta: "Explore New Models",
    href: "/products/compare?devices=S-4011,S-4013,S-4511,S-4513",
    type: "new-models",
    nav: "New models",
    points: ["4G / 2G connectivity", "START & SMART", "Unlimited RS‑485"],
  },
  {
    eyebrow: "NEW COMMUNICATION MODULE",
    title: "Add Wi‑Fi connectivity with SIGMA",
    text: "Add a host-controlled Wi‑Fi data channel through the public AT‑MODEM protocol.",
    cta: "Explore SIGMA",
    href: "/products/communication-modules/sigma-m3003",
    type: "sigma",
    nav: "SIGMA",
    points: ["Wi‑Fi data channel", "Public AT‑MODEM protocol", "RS‑232 or RS‑485"],
  },
  {
    eyebrow: "CAN SPY · PROFESSIONAL CAN ENGINEERING",
    title: "Turn CAN traffic into fleet data",
    text: "Capture CAN traffic, decode parameters and prepare reusable vehicle data files.",
    cta: "Explore CAN Spy",
    href: "/products/software-solutions/can-spy",
    secondaryCta: "Supported Vehicles",
    secondaryHref: "https://drc.navtelecom.ru/public-can-decoding-files",
    type: "can",
    nav: "CAN Spy",
    points: ["Live CAN capture", "Parameter decoding", "Reusable decoding files"],
  },
];

const downloadGroups: { name: string; downloads: { name: string; detail?: string; icon: string; href: string }[] }[] = [
  {
    name: "NTC Configurator",
    downloads: [
      { name: "Windows", detail: "x86 / x64", icon: "windows", href: "https://wiki.navtelecom.ru/programs/ntc_configurator/ntc_configurator_last.exe" },
      { name: "macOS", detail: "Apple Silicon", icon: "apple", href: "https://wiki.navtelecom.ru/programs/ntc_configurator/ntc_configurator_last_mac_arm64.dmg" },
      { name: "macOS", detail: "Intel", icon: "apple", href: "https://wiki.navtelecom.ru/programs/ntc_configurator/ntc_configurator_last_mac_x86x64.dmg" },
      { name: "Linux", detail: "x64", icon: "linux", href: "https://wiki.navtelecom.ru/programs/ntc_configurator/ntc_configurator_last_linux_x64.tar.gz" },
      { name: "Linux", detail: "arm64", icon: "linux", href: "https://wiki.navtelecom.ru/programs/ntc_configurator/ntc_configurator_last_linux_arm64.tar.gz" },
    ],
  },
  {
    name: "NTC Control",
    downloads: [
      { name: "Android", icon: "android", href: "https://play.google.com/store/apps/details?id=ru.navtelecom.ntc.control" },
      { name: "iOS", icon: "apple", href: "https://apps.apple.com/us/app/ntc-control/id6761608898" },
    ],
  },
];

const faqs = [
  { question: "Where can I download the configurator?", downloadGroups },
  { question: "How can I manage devices remotely?", answer: "Use DRC to manage device groups, distribute configurations and firmware, and run remote deployment tasks from one workspace.", actions: [{ label: "Explore DRC", href: "/products/software-solutions/drc", icon: ArrowUpRight }, { label: "Log in to DRC", href: "https://drc.navtelecom.ru/login", icon: LogIn }] },
  { question: "Where can I find configuration and integration documentation?", answer: "The Navtelecom Knowledge Base contains device manuals, configuration guides, commands, protocols and integration documentation.", actions: [{ label: "Open Knowledge Base", href: "https://wiki.navtelecom.ru/en/home", icon: BookOpen }] },
];

function WindowsIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M2.5 4.6 10.8 3.45v8.03H2.5V4.6Zm9.45-1.31L21.5 2v9.48h-9.55V3.29ZM2.5 12.55h8.3v8.02L2.5 19.42v-6.87Zm9.45 0h9.55V22l-9.55-1.31v-8.14Z" /></svg>;
}

function AppleIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.47-2.09-.5-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.5c1.2.06 2.04.66 2.75.7 1.06-.22 2.07-.85 3.21-.77 1.37.11 2.4.65 3.08 1.64-2.83 1.69-2.16 5.42.44 6.46-.52 1.36-1.2 2.7-3.48 4.75ZM12.03 7.25C11.88 5.23 13.53 3.56 15.4 3.4c.26 2.34-2.12 4.09-3.37 3.85Z" /></svg>;
}

function LinuxIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="12.4" rx="6.4" ry="8.3" fill="currentColor" /><ellipse cx="12" cy="14.1" rx="4.15" ry="5.05" fill="#fff" /><ellipse cx="9.85" cy="8.25" rx="1.45" ry="2.05" fill="#fff" /><ellipse cx="14.15" cy="8.25" rx="1.45" ry="2.05" fill="#fff" /><circle cx="10.25" cy="8.45" r=".55" fill="currentColor" /><circle cx="13.75" cy="8.45" r=".55" fill="currentColor" /><path d="m9.75 10.2 2.25-1.05 2.25 1.05L12 11.85 9.75 10.2Z" fill="#f5a623" /></svg>;
}

function AndroidIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="m7.3 6.2-1.2-2.1.8-.45 1.23 2.13A8.2 8.2 0 0 1 12 4.8c1.4 0 2.72.35 3.87.98l1.23-2.13.8.45-1.2 2.1A6.8 6.8 0 0 1 19 11H5a6.8 6.8 0 0 1 2.3-4.8ZM8.5 8.6a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6Zm7 0a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6ZM5 12h14v7.25c0 .97-.78 1.75-1.75 1.75h-.75v-3h-1v3h-7v-3h-1v3h-.75A1.75 1.75 0 0 1 5 19.25V12Z" /></svg>;
}

function PlatformIcon({ name }: { name: string }) {
  if (name === "windows") return <WindowsIcon />;
  if (name === "apple") return <AppleIcon />;
  if (name === "android") return <AndroidIcon />;
  return <LinuxIcon />;
}

function setPartnerMarqueeSpeed(event: React.MouseEvent<HTMLDivElement>, playbackRate: number) {
  const animation = event.currentTarget.querySelector(".home-partner-track")?.getAnimations()[0];
  if (animation) animation.updatePlaybackRate(playbackRate);
}

function HeroVisual({ type }: { type: string }) {
  if (type === "can") return <div className="home-hero-showcase home-can-showcase" aria-label="CAN Spy software for vehicle CAN data engineering">
    <div className="home-can-laptop"><div className="home-can-shell"><div className="home-can-lid"><div className="home-can-screen"><img src={canSpyRealInterface} alt="Real CAN Spy software interface" /></div><span className="home-can-notch"><i /></span></div><img className="home-can-body" src={macbookProFrame} alt="" aria-hidden="true" /></div></div>
    <div className="home-interface-note"><img src={canSpyLogo} alt="" /><span><strong>Real CAN Spy interface</strong><small>Appearance may vary by version and configuration</small></span></div>
  </div>;
  if (type === "software") return <div className="home-hero-showcase home-software-showcase" aria-label="Navtelecom software ecosystem">
    <div className="home-showcase-rings" aria-hidden="true"><i /><i /><i /></div>
    {[ntcConfiguratorLogo,canSpyLogo,drcLogo,complexEventsLogo,ntcControlLogo].map((logo,index) => <a href={software[index].href} className={`home-software-node node-${index + 1}`} key={software[index].name}><img src={logo} alt={software[index].name} /><span>{software[index].name}</span></a>)}
    <div className="home-software-hub"><img src={navtelecomMark} alt="Navtelecom" /></div>
  </div>;
  if (type === "sigma") return <div className="home-hero-showcase home-sigma-showcase" aria-label="SIGMA M-3003 communication module">
    <div className="home-showcase-rings" aria-hidden="true"><i /><i /><i /></div>
    <div className="home-sigma-waves" aria-hidden="true"><i /><i /><i /><i /></div>
    <img className="home-sigma-product" src={sigmaM3003} alt="Navtelecom SIGMA M-3003 communication module" />
    <div className="home-sigma-badge"><small>COMMUNICATION MODULE</small><strong>SIGMA M-3003</strong></div>
  </div>;
  if (type === "new-models") return <div className="home-hero-showcase home-new-models-showcase" aria-label="New Navtelecom S-4011, S-4013, S-4511 and S-4513 tracking models">
    <a className="home-promo-model promo-start-a" href="/products/tracking-devices/start-series/s-4011"><img src={startS4011} alt="Navtelecom S-4011" /><span><small>START SERIES</small><strong>S-4011</strong></span></a>
    <a className="home-promo-model promo-start-b" href="/products/tracking-devices/start-series/s-4013"><img src={startS4013} alt="Navtelecom S-4013" /><span><small>START SERIES</small><strong>S-4013</strong></span></a>
    <div className="home-promo-model promo-smart"><img src={smartDevice} alt="Navtelecom S-4511 and S-4513" /><span><small>SMART SERIES</small><strong className="home-model-links"><a href="/products/tracking-devices/smart-series/s-4511">S-4511</a><i>/</i><a href="/products/tracking-devices/smart-series/s-4513">S-4513</a></strong></span></div>
  </div>;
  return <div className="home-hero-showcase home-device-showcase" aria-label="Navtelecom START, SMART and SIGNAL tracking device series">
    <div className="home-showcase-rings" aria-hidden="true"><i /><i /><i /></div>
    <a className="home-showcase-device showcase-start" href="/products/tracking-devices/start-series"><img src={startDevice} alt="Navtelecom START Series tracking device" /><span><strong>START</strong><small>Compact tracking</small></span></a>
    <a className="home-showcase-device showcase-smart" href="/products/tracking-devices/smart-series"><img src={smartDevice} alt="Navtelecom SMART Series tracking device" /><span><strong>SMART</strong><small>Flexible integration</small></span></a>
    <a className="home-showcase-device showcase-signal" href="/products/tracking-devices/signal-series"><img src={signalDevice} alt="Navtelecom SIGNAL Series tracking device" /><span><strong>SIGNAL</strong><small>Professional I/O</small></span></a>
    <div className="home-showcase-platform"><img src={navtelecomMark} alt="Navtelecom" /><span><small>CONNECTED ECOSYSTEM</small><strong>Devices · software · integrations</strong></span></div>
  </div>;
}

function Hero() {
  const [active, setActive] = useState(0);
  const slide = heroSlides[active];
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = window.setTimeout(
      () => setActive((value) => (value + 1) % heroSlides.length),
      9500,
    );
    return () => window.clearTimeout(timer);
  }, [active]);
  return <section className={`home-hero hero-slide-${slide.type}`} aria-roledescription="carousel"><div className="home-hero-grid" /><div className="home-shell home-hero-inner"><div className="home-hero-copy" key={slide.type}><p className="home-eyebrow">{slide.eyebrow}</p><h1>{slide.title}</h1><p className="home-hero-lead">{slide.text}</p><div className="home-actions"><a className="home-button home-button-primary" href={slide.href}>{slide.cta} <ArrowRight /></a><a className="home-button home-button-text" href={slide.secondaryHref || "/contact"}>{slide.secondaryCta || "Discuss a Project"} <ArrowUpRight /></a></div><div className="home-hero-capabilities">{slide.points.map((point) => <span key={point}><Check />{point}</span>)}</div></div><HeroVisual type={slide.type} /><div className="home-hero-tabs">{heroSlides.map((item,index) => <button type="button" key={item.type} className={index === active ? "active" : undefined} onClick={() => setActive(index)} aria-label={`Show ${item.eyebrow} slide`}><span>0{index + 1}</span><strong>{item.nav}</strong><i key={index === active ? `progress-${active}` : `idle-${index}`} /></button>)}</div></div></section>;
}

function SectionHeading({ eyebrow, title, text, action }: { eyebrow: string; title: string; text?: string; action?: React.ReactNode }) {
  return <div className="home-section-heading"><div><p className="home-eyebrow">{eyebrow}</p><h2>{title}</h2>{text && <p className="home-section-lead">{text}</p>}</div>{action}</div>;
}

function Faq() {
  const [open, setOpen] = useState(0);
  return <section className="home-faq home-section" data-reveal><div className="home-shell home-faq-layout"><div className="home-faq-intro"><p className="home-eyebrow">QUICK ANSWERS</p><h2>Start with the essentials</h2><p>Find downloads, remote-management tools and technical documentation for your Navtelecom project.</p><a href="/support/faq">View All Questions <ArrowRight /></a></div><div className="home-faq-list">{faqs.map((item, index) => <article className={open === index ? "open" : undefined} key={item.question}><button type="button" onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}><span>{item.question}</span><ChevronDown /></button><div><div className="home-faq-answer">{item.answer && <p>{item.answer}</p>}{item.downloadGroups && <div className="home-download-groups">{item.downloadGroups.map((group) => <section key={group.name}><h3>{group.name}</h3><div className="home-download-grid">{group.downloads.map((download) => <a href={download.href} key={`${download.name}-${download.detail || "app"}`} target="_blank" rel="noreferrer"><span className={`home-platform-icon is-${download.icon}`}><PlatformIcon name={download.icon} /></span><span className="home-download-name"><strong>{download.name}</strong>{download.detail && <small>{download.detail}</small>}</span><Download /></a>)}</div></section>)}</div>}{item.actions && <div className="home-faq-actions">{item.actions.map((action) => { const Icon = action.icon; return <a href={action.href} key={action.label} target={action.href.startsWith("http") ? "_blank" : undefined} rel={action.href.startsWith("http") ? "noreferrer" : undefined}>{action.label}<Icon /></a>; })}</div>}</div></div></article>)}</div></div></section>;
}

export default function HomePage() {
  useEffect(() => { const elements = document.querySelectorAll("[data-reveal]"); const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.1 }); elements.forEach((element) => observer.observe(element)); return () => observer.disconnect(); }, []);
  return <><Navbar /><div className="home-page"><main><Hero />
    <section className="home-intro home-section" data-reveal><div className="home-shell"><div className="home-intro-title"><div><p className="home-eyebrow">NAVTELECOM ECOSYSTEM</p><h2>Everything your telematics project needs</h2></div><p className="home-intro-lead">One engineering ecosystem connects the device in the vehicle, the tools used to access its data and the software that supports deployment throughout its lifecycle.</p></div><div className="home-intro-grid"><a href="/products/tracking-devices"><div className="home-intro-card-head"><span><Satellite /></span><small>01 · HARDWARE</small></div><h3>Tracking devices</h3><p>Explore START, SMART and SIGNAL hardware for compact tracking, flexible integrations and professional expanded I/O.</p><strong>Explore Devices <ArrowRight /></strong></a><a href="/products/software-solutions/can-spy"><div className="home-intro-card-head"><span><Wrench /></span><small>02 · ENGINEERING</small></div><h3>CAN Engineering</h3><p>Capture vehicle traffic, decode parameters and prepare reusable data configurations with professional engineering tools.</p><strong>Explore CAN Tools <ArrowRight /></strong></a><a href="/products/software-solutions"><div className="home-intro-card-head"><span><Layers3 /></span><small>03 · SOFTWARE</small></div><h3>Software</h3><p>Configure devices, automate behavior, deploy updates remotely and support every stage of the device lifecycle.</p><strong>Explore Software <ArrowRight /></strong></a></div></div></section>
    <section className="home-expertise" data-reveal><div className="home-shell home-expertise-layout"><div className="home-expertise-copy"><p className="home-eyebrow">NAVTELECOM EXPERTISE</p><h2>Proven through real deployments</h2><p>In-house hardware, firmware and software engineering backed by two decades of telematics experience.</p></div><div className="home-expertise-evidence"><div className="home-expertise-stats">{expertiseStats.map((item) => <article key={item.label}><strong>{item.value}</strong><span>{item.label}</span></article>)}</div><div className="home-expertise-quality"><span><Check />36-month warranty</span><span><Check />10+ year product lifecycle</span></div></div></div></section>
    <section className="home-series home-section" data-reveal><div className="home-shell"><SectionHeading eyebrow="DISCOVER OUR LINEUP" title="Three series. One clear choice for every project" text="Choose the level of connectivity, control and integration your project requires." action={<a className="home-button home-button-outline" href="/products/all-devices">Explore All Devices <ArrowUpRight /></a>} /><div className="home-series-grid">{deviceSeries.map((item) => <a className="home-series-card" href={item.href} key={item.name}><div className="home-series-top"><div><p>{item.label}</p><h3>{item.name} <span>Series</span></h3></div><ArrowUpRight /></div><div className={`home-series-product series-product-${item.name.toLowerCase()}`}><img src={item.image} alt={`Navtelecom ${item.name} Series device`} /></div><p className="home-best-for">{item.bestFor}</p><ul>{item.tags.map((tag) => <li key={tag}><Check />{tag}</li>)}</ul><strong>Explore {item.name} Series <ArrowRight /></strong></a>)}</div><div className="home-selector"><div><span><CircleGauge /></span><div><p>DEVICE SELECTION</p><h3>Not sure which model fits your requirements?</h3><small>Compare devices by network, interfaces, inputs, outputs and supported capabilities.</small></div></div><a className="home-button home-button-light" href="/products/all-devices">Compare Devices <ArrowRight /></a></div></div></section>
    <section className="home-software home-section" data-reveal><div className="home-shell"><SectionHeading eyebrow="SOFTWARE ECOSYSTEM" title="Tools for the complete device lifecycle" text="Configure, integrate, automate, deploy and support Navtelecom devices with software built by the same engineering team." action={<a className="home-button home-button-outline" href="/products/software-solutions">Explore All Software Solutions <ArrowUpRight /></a>} /><div className="home-software-grid">{software.map((item) => <a href={item.href} key={item.name}><div className="home-software-card-top"><span>{item.number}</span><span className={`home-software-logo logo-${item.number}`}><img src={item.logo} alt="" aria-hidden="true" /></span></div><h3>{item.name}</h3><p>{item.text}</p><strong>Explore {item.name} <ArrowUpRight /></strong></a>)}</div></div></section>
    <section className="home-proof" data-reveal><div className="home-proof-grid" /><div className="home-shell home-proof-layout"><div><p className="home-eyebrow home-eyebrow-light">BUILT IN-HOUSE</p><h2>Designed to work as one system</h2><p>Hardware, firmware and engineering software are developed by one team, reducing integration risk and keeping every layer aligned.</p></div><div className="home-stats">{engineeringPillars.map((item) => <article key={item.label}><strong>{item.value}</strong><span>{item.label}</span></article>)}</div></div></section>
    <section className="home-pathway home-section" data-reveal><div className="home-shell"><div className="home-partner-heading"><div><p className="home-eyebrow">HOW THE SYSTEM WORKS</p><h2>One connected path from vehicle to platform</h2></div><p>See how raw signals become structured telemetry that fleet platforms can use for monitoring, automation and operations.</p></div><div className="home-pathway-grid">{[
      { Icon: CarFront, stage: "INPUT", title: "Vehicle & sensors", text: "GNSS, CAN, BLE and wired peripherals provide the source data" },
      { logo: navtelecomMark, stage: "COLLECTION", title: "Navtelecom device", text: "Captures, normalizes and combines incoming data" },
      { Icon: Cpu, stage: "PROCESSING", title: "On-device logic", text: "Applies rules, events and automation inside the device" },
      { Icon: Cloud, stage: "DELIVERY", title: "Fleet platform", text: "Receives structured telemetry for monitoring and operations" },
    ].map((step, index) => {
      const logo = "logo" in step ? step.logo : undefined;
      const Icon = "Icon" in step ? step.Icon : undefined;
      return <React.Fragment key={step.title}><article><span>{String(index + 1).padStart(2,"0")} · {step.stage}</span><div className={`home-pathway-icon${logo ? " is-brand" : ""}`}>{logo ? <img src={logo} alt="" aria-hidden="true" /> : Icon ? <Icon /> : null}</div><h3>{step.title}</h3><p>{step.text}</p></article>{index < 3 && <span className="home-pathway-connector" aria-hidden="true"><ArrowRight /></span>}</React.Fragment>;
    })}</div></div></section>
    <section className="home-technology-partners home-section" data-reveal><div className="home-shell"><div className="home-technology-heading"><div><p className="home-eyebrow">TECHNOLOGY PARTNERS</p><h2>Compatible by design</h2></div><p>Navtelecom devices integrate with trusted telematics platforms, connected sensors and automation equipment for vehicle, fleet and industrial projects.</p></div></div><div className="home-partner-marquee" aria-label="Navtelecom technology partners" onMouseEnter={(event) => setPartnerMarqueeSpeed(event,.48)} onMouseLeave={(event) => setPartnerMarqueeSpeed(event,1)}><div className="home-partner-track">{[0,1].map((copy) => <div className="home-partner-set" aria-hidden={copy === 1 ? "true" : undefined} key={copy}>{technologyPartners.map((partner) => <div className={`home-partner-logo ${partner.className}`} key={`${copy}-${partner.name}`}>{partner.name === "Omnicomm" ? <span className="home-omnicomm-wordmark" aria-label={copy === 0 ? "Omnicomm" : undefined}><strong>OMNICOMM</strong><small>FUEL DATA YOU CAN TRUST</small></span> : <img src={partner.logo} alt={copy === 0 ? partner.name : ""} />}</div>)}</div>)}</div></div></section>
    <section className="home-commercial" data-reveal><div className="home-shell"><div className="home-commercial-banner"><div><p className="home-eyebrow home-eyebrow-light">LET'S BUILD THE RIGHT SOLUTION</p><h2>Planning a telematics project?</h2><p>Tell us about the vehicles, data, sensors and integrations involved. Our team will help you choose the right starting point.</p></div><a className="home-button home-button-light" href="/contact">Talk to Sales <ArrowRight /></a></div></div></section>
    <Faq />
  </main></div></>;
}
