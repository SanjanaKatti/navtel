"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft, ArrowRight, ArrowUpRight, Bluetooth, BookOpen, Cable,
  ChevronDown, CircleDot, Code2, Cpu, Gauge, Network, Power,
  RadioTower, Router, Ruler, ScanLine, ShieldCheck, SquareTerminal, Wifi, Zap,
} from "lucide-react";
import "./sigma-page.css";

const sigmaImage = "/home/sigma-m3003-hero.png";

type SpecGroup = {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  rows: [string, string][];
};

const wiki = "https://wiki.navtelecom.ru/en/home/modules/m3003";
const protocol = "https://wiki.navtelecom.ru/en/home/developers/at_modem_protocol";
const tools = "https://wiki.navtelecom.ru/programs/debug/ntc_at_tools.zip";

const capabilities = [
  { icon: Wifi, title: "Wi-Fi station & access point", text: "Scan nearby networks, connect to an access point for data exchange, or provide a Wi-Fi access point for other devices." },
  { icon: Bluetooth, title: "Bluetooth 5.0 communication", text: "Discover nearby Bluetooth devices and build BLE client, server, advertising and sensor workflows through AT commands." },
  { icon: Network, title: "TCP & UDP data exchange", text: "Use DNS, ping, TCP and UDP operations to move application data over an available Wi-Fi connection." },
  { icon: Cable, title: "Two serial interfaces", text: "Connect the module to a compatible host through RS-232 or RS-485 and control it with the public AT-MODEM command set." },
  { icon: Gauge, title: "Universal input", text: "Read logical state or configure supported voltage, counter and frequency measurement modes from the host device." },
  { icon: Power, title: "Digital output control", text: "Switch the open-collector output from the host application for connected control scenarios." },
];

const compatibleTrackers: [string, string[]][] = [
  ["START", ["S-2013", "S-4013"]],
  ["SMART", ["S-2433", "S-2435", "S-2437", "S-4533", "S-4535", "S-4537"]],
  ["SIGNAL", ["S-2613", "S-2651", "S-2653", "S-4751", "S-4753"]],
];

const specs: SpecGroup[] = [
  { title: "Communication", icon: RadioTower, rows: [["Wi-Fi", "Scanning, station mode and access-point mode"], ["Wi-Fi data rate", "Up to 150 Mbps"], ["Bluetooth", "Bluetooth 5.0 + LE"], ["Bluetooth functions", "Device scanning, BLE client, server and advertising modes"], ["Bluetooth data rate", "Up to 2 Mbps"], ["Network functions", "DNS, ping, TCP and UDP"]] },
  { title: "Interfaces & I/O", icon: Cable, rows: [["RS-232", "Supported"], ["RS-485", "Supported"], ["Universal input", "1"], ["Input modes", "Digital, analog voltage, counter and frequency"], ["Digital output", "1, open collector"], ["USB", "USB Type-C"]] },
  { title: "Power", icon: Zap, rows: [["Backup battery", "130 mAh"], ["Power-input surge protection", "Up to 200 V"], ["Built-in clock", "Supported"], ["Supply-voltage reading", "Available through AT commands"]] },
  { title: "Environmental", icon: ShieldCheck, rows: [["Operating temperature without built-in battery", "−40 °C to +85 °C"], ["Operating temperature with built-in battery", "−20 °C to +60 °C"], ["Built-in battery charging temperature", "0 °C to +50 °C"], ["Maximum relative humidity at +35 °C", "95%"], ["Ingress protection", "IP54"], ["Service life", "10 years"], ["Warranty", "3 years"]] },
  { title: "Physical specification", icon: Ruler, rows: [["Dimensions including wires", "65.5 × 38.4 × 14.3 mm"], ["Weight excluding wires", "28 g"], ["Enclosure", "Compact wired communication module"]] },
];

const resources = [
  { icon: BookOpen, eyebrow: "PRODUCT DOCUMENTATION", title: "SIGMA Knowledge Base", text: "Description, firmware, downloads and maintained product information.", label: "Open Product Guide", href: wiki },
  { icon: Code2, eyebrow: "PUBLIC COMMAND SET", title: "AT-MODEM Protocol", text: "Complete command reference for Wi-Fi, Bluetooth, network and I/O control.", label: "Read Protocol", href: protocol },
  { icon: SquareTerminal, eyebrow: "DEBUGGING UTILITY", title: "NTC AT Tools", text: "Test and debug AT commands from a connected computer.", label: "Download Utility", href: tools },
];

function ProductStage() {
  return <div className="sigma-stage" aria-label="SIGMA M-3003 product render">
    <div className="sigma-wave-field" aria-hidden="true"><i /><i /><i /><i /></div>
    <img className="sigma-product" src={sigmaImage} alt="SIGMA M-3003 communication module" />
    <div className="orbit-card orbit-wifi"><Wifi /><span><b>Wi-Fi</b><small>Station & access point</small></span></div>
    <div className="orbit-card orbit-ble"><Bluetooth /><span><b>Bluetooth 5.0</b><small>Scan & communicate</small></span></div>
    <div className="orbit-card orbit-serial"><Cable /><span><b>RS-232 / RS-485</b><small>Host connection</small></span></div>
    <div className="orbit-card orbit-at"><Code2 /><span><b>Open AT protocol</b><small>Developer controlled</small></span></div>
    <div className="sigma-chip"><strong>SIGMA M-3003</strong><span>COMMUNICATION MODULE</span></div>
  </div>;
}

function Specs() {
  const [open, setOpen] = useState(0);
  return <div className="sigma-spec-list">{specs.map(({ title, icon: Icon, rows }, index) => <article className={open === index ? "open" : undefined} key={title}><button type="button" onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}><span><Icon />{title}</span><ChevronDown /></button><div className="sigma-spec-body"><div>{rows.map(([name, value]) => <div className="sigma-spec-row" key={name}><span>{name}</span><strong>{value}</strong></div>)}</div></div></article>)}</div>;
}

export default function SigmaPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const items = root.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")), { threshold: .08 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return <div className="sigma-page" ref={rootRef}><main>
    <section className="sigma-hero"><div className="sigma-grid" /><div className="grid-spark spark-one" /><div className="grid-spark spark-two" /><div className="sigma-shell sigma-hero-layout"><div className="sigma-hero-copy"><Link className="sigma-back" href="/products"><ArrowLeft /> Products</Link><p className="sigma-eyebrow">COMMUNICATION MODULE · AT-MODEM</p><h1>SIGMA</h1><h2>M-3003</h2><h3>Add Wi-Fi and Bluetooth to your connected device</h3><p className="sigma-lead">A host-controlled communication module with Wi-Fi, Bluetooth, RS-232, RS-485, one universal input and one digital output.</p><div className="sigma-actions"><a className="sigma-button sigma-button-primary" href="#capabilities">Explore Capabilities <ArrowRight /></a><a className="sigma-button sigma-button-secondary" href={protocol} target="_blank" rel="noreferrer">AT-MODEM Protocol <ArrowUpRight /></a></div></div><ProductStage /></div></section>

    <section className="sigma-facts" data-reveal><div className="sigma-shell sigma-facts-grid">
      <article><Wifi /><div><strong>Wi-Fi</strong><span>Station & AP</span></div></article>
      <article><Bluetooth /><div><strong>Bluetooth 5.0</strong><span>Scan & connect</span></div></article>
      <article><Cable /><div><strong>2 interfaces</strong><span>RS-232 · RS-485</span></div></article>
      <article><Gauge /><div><strong>1 universal input</strong></div></article>
      <article><Power /><div><strong>1 output</strong><span>Open collector</span></div></article>
      <article><ShieldCheck /><div><strong>3 years</strong><span>Warranty</span></div></article>
    </div></section>

    <section className="sigma-section sigma-intro" data-reveal><div className="sigma-shell sigma-heading-split"><div><p className="sigma-eyebrow">A CONNECTIVITY LAYER FOR YOUR DEVICE</p><h2>One module. Multiple communication roles</h2></div><p>SIGMA extends a compatible navigation terminal, controller or custom host with Wi-Fi, Bluetooth, network communication and remote I/O. The host remains in control through documented AT commands.</p></div></section>

    <section className="sigma-host" data-reveal><div className="sigma-shell sigma-host-card"><div className="sigma-host-copy"><p className="sigma-eyebrow light">IMPORTANT OPERATING PRINCIPLE</p><h2>SIGMA works with a host</h2><p>The AT-MODEM firmware does not make SIGMA a standalone tracker. A host controls its communication and I/O functions over a serial interface.</p><p className="sigma-interface-note"><strong>Preferred interface:</strong> Use RS-232 for full-duplex communication. RS-485 is supported in half-duplex mode.</p><a href={protocol} target="_blank" rel="noreferrer">Explore the command set <ArrowUpRight /></a></div><div className="sigma-flow"><div><Cpu /><b>Host device</b><small>Application logic</small></div><ArrowRight /><div className="active"><Code2 /><b>AT commands</b><small>RS-232 / RS-485</small></div><ArrowRight /><div><Router /><b>SIGMA</b><small>Wi-Fi · BLE · I/O</small></div></div></div></section>

    <section className="sigma-section sigma-capabilities" id="capabilities" data-reveal><div className="sigma-shell"><div className="sigma-heading"><p className="sigma-eyebrow">MODULE CAPABILITIES</p><h2>Developer-controlled connectivity</h2><p>Use only the functions your project requires, with a command set that remains open to Navtelecom terminals and third-party host platforms.</p></div><div className="sigma-card-grid">{capabilities.map(({ icon: Icon, title, text }, index) => <article key={title}><div><span>{String(index + 1).padStart(2, "0")}</span><Icon /></div><h3>{title}</h3><p>{text}</p></article>)}</div><div className="sigma-availability-note"><CircleDot /><p><strong>Host-dependent functionality.</strong> The functions available in a finished solution depend on the hardware, firmware and software of the device controlling SIGMA. A capability documented in AT-MODEM may not yet be implemented by every Navtelecom tracker or third-party host.</p></div></div></section>

    <section className="sigma-positioning" data-reveal><div className="sigma-shell sigma-positioning-card"><div><p className="sigma-eyebrow light">WI-FI-ASSISTED POSITIONING</p><h2>More context when GNSS is disrupted</h2><p>A compatible Navtelecom tracker can combine cellular LBS information with MAC addresses from nearby Wi-Fi access points and send them to Yandex Locator for a more useful online position estimate in radio-suppressed environments.</p><a href="https://wiki.navtelecom.ru/en/home/devices/settings/track/locator_yandex" target="_blank" rel="noreferrer">How Yandex Locator works <ArrowUpRight /></a></div><div className="positioning-diagram"><span><RadioTower /><b>Cellular LBS</b></span><i>+</i><span><ScanLine /><b>Wi-Fi scan</b></span><ArrowRight /><span className="result"><CircleDot /><b>Position estimate</b></span></div></div></section>

    <section className="sigma-section sigma-use" data-reveal><div className="sigma-shell"><div className="sigma-heading sigma-heading-split"><div><p className="sigma-eyebrow">PRACTICAL INTEGRATION</p><h2>Built for open, controlled implementation</h2></div><p>Use SIGMA as a compact extension module instead of redesigning the communication layer of your host device.</p></div><div className="sigma-use-grid"><article><SquareTerminal /><h3>Public AT-MODEM protocol</h3><p>Develop host integration with documented commands and test requests through the NTC AT Tools utility.</p></article><article><Wifi /><h3>Wi-Fi data channel</h3><p>Connect to an access point and exchange application data through TCP or UDP without adding Wi-Fi hardware to the host.</p></article><article><Bluetooth /><h3>BLE integration</h3><p>Scan, connect and exchange characteristic data with supported Bluetooth devices under host control.</p></article></div></div></section>

    <section className="sigma-section sigma-specifications" id="specifications" data-reveal><div className="sigma-shell"><div className="sigma-heading sigma-heading-split"><div><p className="sigma-eyebrow">TECHNICAL SPECIFICATIONS</p><h2>Detailed module capabilities</h2></div><p>Review connectivity, interfaces, protection and physical specifications before designing the integration.</p></div><Specs /></div></section>

    <section className="sigma-compatibility" data-reveal><div className="sigma-shell"><div className="sigma-compatibility-card"><div><p className="sigma-eyebrow light">OPEN HOST INTEGRATION</p><h2>Integrate SIGMA with devices from any manufacturer</h2><p>SIGMA is not limited to Navtelecom trackers. A navigation terminal, controller or custom host from any manufacturer can control the module through RS-232 or RS-485 using the public AT-MODEM protocol.</p><small>Available functions depend on the host hardware and its firmware or software implementation.</small></div><a className="sigma-button sigma-button-light" href={protocol} target="_blank" rel="noreferrer">View AT-MODEM Protocol <ArrowUpRight /></a></div><aside className="sigma-navtelecom-compatibility" aria-label="Compatible Navtelecom trackers"><div className="sigma-navtelecom-compatibility-copy"><p className="sigma-eyebrow">NAVTELECOM REFERENCE</p><h3>Verified compatible Navtelecom trackers</h3><p>These Navtelecom models already provide the required interface and supported integration path. Confirm the required firmware version before deployment.</p></div><div className="sigma-compatible-models">{compatibleTrackers.map(([series, models]) => <div key={series}><strong>{series}</strong><span>{models.map((model) => <Link href={`/products/tracking-devices/${series.toLowerCase()}-series/${model.toLowerCase()}`} key={model}>{model}</Link>)}</span></div>)}</div></aside></div></section>

    <section className="sigma-update" data-reveal><div className="sigma-shell sigma-update-card"><div className="sigma-update-copy"><p className="sigma-eyebrow">FIRMWARE MANAGEMENT</p><h2>Update SIGMA through a Navtelecom tracker</h2><p>The tracker receives the firmware and transfers it to the connected SIGMA module. Choose remote deployment through DRC or perform the update locally from a computer through the tracker.</p></div><div className="sigma-update-flow"><div className="sigma-update-sources"><span><RadioTower /><b>DRC</b><small>Remote update command</small></span><span><SquareTerminal /><b>Computer</b><small>Local update</small></span></div><ArrowRight className="sigma-update-arrow" /><span className="sigma-update-node"><Cpu /><b>Navtelecom tracker</b><small>Receives and transfers firmware</small></span><ArrowRight className="sigma-update-arrow" /><span className="sigma-update-node active"><Router /><b>SIGMA M-3003</b><small>Firmware installation</small></span></div></div></section>

    <section className="sigma-section sigma-resources" data-reveal><div className="sigma-shell"><div className="sigma-heading"><p className="sigma-eyebrow">PRODUCT CENTER</p><h2>Everything needed for implementation</h2><p>Open maintained documentation, connection guidance, the protocol reference and debugging tools.</p></div><div className="sigma-resource-grid">{resources.map(({ icon: Icon, eyebrow, title, text, label, href }) => <a href={href} target="_blank" rel="noreferrer" key={title}><div><span><Icon /></span><ArrowUpRight /></div><small>{eyebrow}</small><h3>{title}</h3><p>{text}</p><strong>{label} <ArrowRight /></strong></a>)}</div></div></section>

    <section className="sigma-cta" data-reveal><div className="sigma-shell sigma-cta-card"><div><p className="sigma-eyebrow light">DESIGN YOUR INTEGRATION</p><h2>Add the communication layer your project needs</h2><p>Talk to Navtelecom about host compatibility, firmware support and project requirements.</p></div><Link className="sigma-button sigma-button-light" href="/contact">Contact Us <ArrowRight /></Link></div></section>
  </main></div>;
}
