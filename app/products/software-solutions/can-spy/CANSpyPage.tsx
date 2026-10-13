"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  Binary,
  Braces,
  Check,
  ChevronRight,
  CircleDot,
  Cloud,
  Code2,
  Database,
  FileCode2,
  Filter,
  Fuel,
  Gauge,
  GitCompare,
  Layers3,
  Library,
  Monitor,
  Network,
  PackageSearch,
  Radio,
  Repeat,
  Route,
  ScanSearch,
  Search,
  Send,
  ShieldCheck,
  SlidersHorizontal,
  TimerReset,
  Truck,
  Upload,
  Waypoints,
  Workflow,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import "./can-spy-page.css";

type LibraryFile = {
  id: string;
  model: string;
  years: string;
  mode: "ACTIVE" | "PASSIVE";
  version: string;
  parameters: string[];
};

const libraryFiles: LibraryFile[] = [
  {
    id: "832",
    model: "TATA Starbus Prime",
    years: "2020–2024",
    mode: "ACTIVE",
    version: "0.1",
    parameters: ["Fuel level", "Total fuel consumption", "Engine speed", "Coolant temperature", "Vehicle mileage", "Gas pedal position", "Engine load", "Ignition", "Clutch state", "Brake pedal", "Cruise control", "PTO state", "Oil pressure", "Battery voltage", "Engine hours", "AdBlue level", "Instant fuel rate", "Vehicle speed", "Parking brake", "Diagnostic states"],
  },
  {
    id: "702",
    model: "Mercedes-Benz Actros",
    years: "2019+",
    mode: "ACTIVE",
    version: "0.3",
    parameters: ["Fuel level", "Mileage", "Engine speed", "Coolant temperature", "Engine load", "Vehicle speed", "Axle load", "AdBlue level", "Engine hours", "Brake state", "Clutch state", "Door states", "Cruise control", "PTO state", "Oil pressure", "Battery voltage", "Diagnostic states"],
  },
  {
    id: "396",
    model: "Volvo FH",
    years: "2021+",
    mode: "PASSIVE",
    version: "0.2",
    parameters: ["Fuel level", "Total fuel used", "Mileage", "Engine speed", "Coolant temperature", "Vehicle speed", "Engine hours", "Gas pedal position", "Brake pedal", "Cruise control", "Axle load", "AdBlue level", "Ignition", "Parking brake"],
  },
  {
    id: "662",
    model: "Yutong ZK Series",
    years: "2022+",
    mode: "PASSIVE",
    version: "0.3",
    parameters: ["Fuel level", "Mileage", "Engine speed", "Coolant temperature", "Vehicle speed", "Engine hours", "Door states", "Brake pedal", "Ignition", "Battery voltage"],
  },
];

const LINKS = {
  library: "https://drc.navtelecom.ru/public-can-decoding-files",
  docs: "https://wiki.navtelecom.ru/en/home/can_spy",
  configurator: "/products/software-solutions/ntc-configurator",
  logs: "https://wiki.navtelecom.ru/en/home/can_spy/examples/write_log",
  customFile: "https://wiki.navtelecom.ru/en/home/can_spy/examples/load_decode_files",
  importParameters: "https://wiki.navtelecom.ru/en/home/can_spy/examples/import_parameters",
  obd: "https://wiki.navtelecom.ru/en/home/can_spy/examples/obd2_pid_detection",
  links: "https://wiki.navtelecom.ru/en/home/can_spy/examples/parameter_links",
  decoding: "https://wiki.navtelecom.ru/en/home/can_spy/examples/can_decoding_guide",
  fileSelection: "https://wiki.navtelecom.ru/en/home/can_spy/examples/check_can_file",
};

const workflow: [string, string, string][] = [
  ["01", "Connect", "Use a Navtelecom device as the CAN interface."],
  ["02", "Capture", "Monitor live traffic or record structured CAN logs."],
  ["03", "Analyze", "Filter messages and isolate changing values."],
  ["04", "Decode", "Transform raw bytes into meaningful parameters."],
  ["05", "Validate", "Test results against live and recorded data."],
  ["06", "Deploy", "Compile and upload the file to the device."],
];

const analysisTools: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Activity,
    title: "Real-Time CAN Monitoring",
    text: "Inspect identifiers, message length, data bytes and transmission intervals as traffic moves through the bus.",
  },
  {
    icon: Gauge,
    title: "Automatic Bus Speed Detection",
    text: "Detect the CAN bus speed automatically or enter a specific value when it is known in advance.",
  },
  {
    icon: Filter,
    title: "Advanced Message Filtering",
    text: "Filter 11-bit, 29-bit and J1939 messages by ID, range, mask, RTR state or source address.",
  },
  {
    icon: Binary,
    title: "Byte-Level Analysis",
    text: "Inspect individual bits and bytes with history tables and eight synchronized real-time graphs.",
  },
  {
    icon: Search,
    title: "Physical Value Search",
    text: "Search using data type, byte order, bit mask, tolerance and the Y = X × A + B scaling formula.",
  },
  {
    icon: GitCompare,
    title: "Multi-Log Comparison",
    text: "Compare two or more logs and expose bytes that differ between operating conditions.",
  },
];

const advancedTools: { icon: LucideIcon; label: string; title: string; text: string }[] = [
  {
    icon: PackageSearch,
    label: "AUTOMATED",
    title: "OBD-II Discovery",
    text: "Identify available OBD-II parameters and prepare the required diagnostic requests automatically.",
  },
  {
    icon: GitCompare,
    label: "VISUAL",
    title: "Multi-Log Analysis",
    text: "Compare operating states to isolate slowly changing parameters such as fuel level.",
  },
  {
    icon: Layers3,
    label: "VERIFIED",
    title: "Decoded Parameter Verification",
    text: "Check whether a selected decoding file returns the expected values on live traffic or recorded logs.",
  },
  {
    icon: Cloud,
    label: "REMOTE",
    title: "CAN Requests over RCS",
    text: "Send requests through a remote connection when diagnostics or validation must happen off-site.",
  },
];

const useCases: [LucideIcon, string, string][] = [
  [Fuel, "Fuel Monitoring", "Fuel level, consumption and refueling-related parameters where available."],
  [Wrench, "Vehicle Diagnostics", "Engine data, temperatures, diagnostic values and operating states."],
  [Route, "Fleet & Driver Data", "Mileage, speed, engine hours, pedal states and safety-related signals."],
  [Truck, "Special Equipment", "Buses, trucks, construction machinery, agriculture and industrial systems."],
];

const resources: [LucideIcon, string, string, string][] = [
  [ScanSearch, "Find a Decoding File", "Match live traffic with a file from the CAN library.", LINKS.fileSelection],
  [Layers3, "Import Parameters", "Reuse parameters from existing decoding files.", LINKS.importParameters],
  [PackageSearch, "Detect OBD-II Parameters", "Discover supported diagnostic parameters automatically.", LINKS.obd],
  [Upload, "Load a Custom File", "Load and test a custom decoding file on a device.", LINKS.customFile],
  [Activity, "Record CAN Logs", "Capture CAN sessions for later analysis and support.", LINKS.logs],
  [Waypoints, "Create Parameter Links", "Reuse one decoded parameter across multiple CAN profiles.", LINKS.links],
];

function ExternalLink({
  href,
  className = "",
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className={className} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className={`section-heading${light ? " light" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="section-intro">{text}</p>}
    </div>
  );
}

function TechWindow() {
  const messages = [
    ["18FEE900", "8", "FF", "10", "00", "B9", "18", "14", "00", "A4", "14"],
    ["18FEF100", "8", "7C", "21", "04", "00", "FF", "FF", "FF", "FF", "539"],
    ["18FEFC00", "8", "FF", "FF", "15", "FF", "FF", "FF", "FF", "7D", "1613"],
    ["0CF00400", "8", "00", "00", "00", "00", "00", "00", "00", "00", "239"],
    ["18FEEE00", "8", "FF", "FF", "FF", "FF", "FF", "FF", "FF", "FF", "2395"],
  ];
  const parameters = [
    ["Fuel level in the tank, %", "●", "64.5", "645", "0x00000285", "0b0000001010000101"],
    ["Total fuel consumption, 0.05 l", "●", "157393.5", "3147870", "0x0030085E", "0b001100000000100001011110"],
    ["Engine speed, rpm", "●", "645", "645", "0x00000285", "0b0000001010000101"],
    ["Coolant temperature, °C", "●", "72", "72", "0x00000048", "0b0000000001001000"],
    ["Total vehicle mileage, km", "●", "284120", "284120", "0x000455D8", "0b01000101010111011000"],
    ["Engine load, %", "●", "20", "20", "0x00000014", "0b0000000000010100"],
  ];

  return (
    <div className="tech-window" aria-label="CAN Spy engineering interface illustration">
      <div className="window-bar">
        <span className="window-dots"><i /><i /><i /></span>
        <span>CAN SPY · ENGINEERING WORKSPACE</span>
        <span className="live-state"><i /> LIVE</span>
      </div>
      <div className="can-menu"><span>File</span><span>View</span><span>Tools</span><span>Help</span><b>CAN Spy v3.5</b></div>
      <div className="can-controlbar">
        <span><small>MODE</small> Log player</span><span><small>BUS</small> CAN1</span><span className="can-off"><small>STATE</small> PASSIVE</span><span><small>BAUD RATE</small> 250 kbit/s</span><span className="can-log"><i /> TATA_5523_CAN1.log</span>
      </div>
      <div className="can-tools"><span className="active"><Layers3 /> Parsing by decode file</span><span><FileCode2 /> Write to log</span><span><Braces /> Editor</span><span><Code2 /> Scripts</span><span><Activity /> Analyse log</span></div>
      <div className="can-workspace">
        <div className="can-messages">
          <div className="can-panel-title"><strong>Messages</strong><span><Filter /> Filter</span></div>
          <div className="message-head"><span>ID</span><span>SIZE</span>{["D0", "D1", "D2", "D3", "D4", "D5", "D6", "D7"].map((byte) => <span key={byte}>{byte}</span>)}<span>MS</span></div>
          {messages.map((row, rowIndex) => (
            <div className={`message-row${rowIndex === 2 ? " selected" : ""}`} key={row[0]}>
              {row.map((cell, index) => (
                <span className={(rowIndex + index) % 5 === 0 && index > 1 && index < 10 ? "changed" : undefined} key={`${cell}-${index}`}>{cell}</span>
              ))}
            </div>
          ))}
          <div className="can-counts"><span>11 bit: <strong>43</strong></span><span>29 bit: <strong>987</strong></span></div>
        </div>
        <div className="can-parameters">
          <div className="parameter-toolbar"><span><Database /> TATA STARBUS PRIME decoding file</span><span><Search /> Filter parameters</span></div>
          <div className="parameter-head"><span>NAME</span><span>CAN1</span><span>VALUE</span><span>DEC</span><span>HEX</span><span>BIN</span></div>
          {parameters.map((row, index) => (
            <div className={`parameter-row${index === 0 ? " selected" : ""}`} key={row[0]}>
              {row.map((cell, cellIndex) => (
                <span className={cellIndex === 1 ? "can-dot" : undefined} key={`${cell}-${cellIndex}`}>{cell}</span>
              ))}
            </div>
          ))}
          <div className="parameter-detail"><div><Fuel /><span><small>SELECTED PARAMETER</small><strong>Fuel level in the tank</strong></span></div><b>64.5%</b></div>
        </div>
      </div>
    </div>
  );
}

function LibraryPreview() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(libraryFiles[0].id);
  const [previewOpen, setPreviewOpen] = useState(false);
  const normalizedQuery = query.trim().toLowerCase();
  const results = libraryFiles.filter((file) =>
    `${file.model} ${file.years} ${file.id}`.toLowerCase().includes(normalizedQuery)
  );
  const selected = libraryFiles.find((file) => file.id === selectedId) || results[0];

  return (
    <div className="library-window" aria-label="Interactive CAN decoding library preview">
      <div className="library-toolbar">
        <div><Library aria-hidden="true" /><strong>CAN Decoding Library</strong></div>
        <span>800+ MODELS</span>
      </div>
      <label className="search-field">
        <Search aria-hidden="true" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search vehicle model or file ID"
          aria-label="Search vehicle model or file ID"
        />
      </label>
      <div className="library-table">
        <div className="lib-row lib-head"><span>MODEL</span><span>YEARS</span><span>FILE ID</span><span>VERSION</span><span>MODE</span></div>
        {results.map((file) => (
          <button
            type="button"
            className={`lib-row lib-result${selected?.id === file.id ? " selected" : ""}`}
            key={file.id}
            onClick={() => { setSelectedId(file.id); setPreviewOpen(true); }}
          >
            <span><strong>{file.model}</strong></span>
            <span>{file.years}</span>
            <span className="file-id">{file.id}</span>
            <span className="file-version">{file.version}</span>
            <span className={file.mode === "ACTIVE" ? "active-mark" : undefined}>{file.mode}</span>
          </button>
        ))}
        {!results.length && (
          <div className="library-empty"><PackageSearch aria-hidden="true" /><strong>No matching decoding files</strong><span>Try another vehicle model, year or file ID.</span></div>
        )}
      </div>
      {selected && (
        <div className={`parameter-preview${previewOpen ? " open" : ""}`}>
          <button type="button" className="preview-toggle" onClick={() => setPreviewOpen((value) => !value)} aria-expanded={previewOpen}>
            <span><strong>Parameter preview</strong><small>{selected.model} · {selected.parameters.length} expected parameters</small></span>
            <ChevronRight aria-hidden="true" />
          </button>
          {previewOpen && (
            <div className="preview-body">
              <div className="parameter-chips">
                {selected.parameters.map((parameter) => <span key={parameter}><i />{parameter}</span>)}
              </div>
              <p>Available parameters depend on the vehicle configuration and selected CAN connection mode.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function FeatureCard({ icon: Icon, title, text }: { icon: LucideIcon; title: string; text: string }) {
  return (
    <article className="feature-card">
      <div className="icon-box"><Icon aria-hidden="true" /></div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export default function CANSpyPage() {
  return (
    <div className="can-spy-page">
      <main>
        <section className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="shell hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">CAN Spy · Professional CAN Engineering</p>
              <h1>Turn Raw CAN Traffic Into Actionable Vehicle Data</h1>
              <p className="hero-text">CAN Spy is Navtelecom’s professional environment for capturing, analyzing and decoding vehicle CAN data, testing decoding files and recording CAN traffic for further engineering work.</p>
              <div className="hero-actions">
                <ExternalLink href={LINKS.library} className="button button-primary">Explore CAN Library <ArrowUpRight aria-hidden="true" /></ExternalLink>
                <ExternalLink href={LINKS.docs} className="button button-secondary">Open Documentation</ExternalLink>
              </div>
              <p className="included"><Check aria-hidden="true" /> Included with NTC Configurator</p>
            </div>
            <div className="tech-visual">
              <TechWindow />
              <p className="visual-disclaimer">Illustrative interface concept. Actual software appearance and available features may vary by version and configuration.</p>
            </div>
          </div>
        </section>

        <section className="stats-strip" aria-label="CAN Spy highlights">
          <div className="shell stats-grid">
            <div className="stat"><strong>800+</strong><span>Vehicle and equipment<br />models covered</span></div>
            <div className="stat"><strong>Passive + Active</strong><span>CAN communication<br />modes</span></div>
            <div className="stat"><strong>11-bit · 29-bit · J1939</strong><span>Supported message<br />formats</span></div>
            <div className="stat"><strong>Live + Recorded</strong><span>Real-time and log-based<br />analysis</span></div>
          </div>
        </section>

        <section className="workflow-section">
          <div className="shell">
            <SectionHeading eyebrow="Complete workflow" title="From Unknown Traffic to Deployed Data" text="Move through the entire CAN engineering process without switching between disconnected tools." />
            <div className="workflow-grid">
              {workflow.map(([number, title, text], index) => (
                <article className="workflow-step" key={title}>
                  <div className="step-top"><span>{number}</span>{index < workflow.length - 1 && <ChevronRight aria-hidden="true" />}</div>
                  <h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="modes-section">
          <div className="shell">
            <SectionHeading eyebrow="CAN communication" title="Listen Safely. Query When You Need More." text="Begin with a listen-only connection, then move to controlled interaction when the project requires request-only data." light />
            <div className="mode-grid">
              <article className="mode-card passive">
                <div className="mode-head"><div className="mode-icon"><Radio aria-hidden="true" /></div><span>PASSIVE MODE</span></div>
                <h3>Observe without transmitting</h3>
                <p>Monitor messages already circulating on the vehicle network without sending frames or acknowledging received traffic.</p>
                <ul>
                  <li><Check aria-hidden="true" />Safe first connection to an unknown CAN network</li>
                  <li><Check aria-hidden="true" />Captures parameters broadcast by the vehicle</li>
                  <li><Check aria-hidden="true" />Suitable for contactless CAN readers</li>
                  <li><Check aria-hidden="true" />No diagnostic requests or commands</li>
                </ul>
              </article>
              <article className="mode-card active">
                <div className="mode-head"><div className="mode-icon"><Zap aria-hidden="true" /></div><span>ACTIVE MODE</span></div>
                <h3>Request, receive and control</h3>
                <p>Interact with the network using controlled requests, responses, acknowledgements and command sequences.</p>
                <ul>
                  <li><Check aria-hidden="true" />Includes available broadcast parameters</li>
                  <li><Check aria-hidden="true" />Adds request-only parameters where supported</li>
                  <li><Check aria-hidden="true" />Supports OBD-II and diagnostic requests</li>
                  <li><Check aria-hidden="true" />Enables CAN Scripts and message transmission</li>
                </ul>
              </article>
            </div>
            <div className="mode-note"><CircleDot aria-hidden="true" /><p>The exact number of parameters depends on the vehicle, CAN network and selected decoding file. Active Mode can provide additional request-only parameters where supported.</p></div>
          </div>
        </section>

        <section className="library-section" id="can-library">
          <div className="shell library-layout">
            <div className="library-copy">
              <p className="eyebrow">CAN decoding library</p>
              <h2>Start with a Proven Decoding File</h2>
              <p>Search a continuously updated library covering more than 800 vehicle and equipment models. Review supported parameters, CAN mode and file version before deployment.</p>
              <ul className="check-list">
                <li><Check aria-hidden="true" />Search by vehicle, production year or file ID</li>
                <li><Check aria-hidden="true" />Preview supported parameters before deployment</li>
                <li><Check aria-hidden="true" />See CAN mode and decoding-file version</li>
              </ul>
              <ExternalLink href={LINKS.library} className="button button-blue">Explore CAN Library <ArrowUpRight aria-hidden="true" /></ExternalLink>
            </div>
            <LibraryPreview />
          </div>
        </section>

        <section className="tools-section">
          <div className="shell">
            <SectionHeading eyebrow="Professional analysis" title="Find the Signal Inside the Noise" text="Use real-time monitoring, message filtering, byte analysis and log comparison to move from raw frames to validated parameters." />
            <div className="feature-grid">
              {analysisTools.map((tool) => <FeatureCard key={tool.title} {...tool} />)}
            </div>
          </div>
        </section>

        <section className="advanced-section">
          <div className="shell">
            <SectionHeading eyebrow="Latest engineering capabilities" title="Technology That Keeps Moving Forward" text="Advanced automation and analysis features reduce manual work across complex CAN integration projects." light />
            <div className="advanced-grid">
              {advancedTools.map(({ icon: Icon, label, title, text }) => (
                <article className="advanced-card" key={title}>
                  <div className="advanced-top"><Icon aria-hidden="true" /><span>{label}</span></div>
                  <h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="files-section" id="parameter-decoding">
          <div className="shell files-layout">
            <div className="analysis-visual" aria-label="CAN parameter analysis workflow">
              <div className="analysis-head"><Activity aria-hidden="true" /><span>MESSAGE ANALYSIS</span><b><i /> LIVE DATA</b></div>
              <div className="selected-message">
                <div><small>SELECTED MESSAGE</small><strong>18F00400</strong><span>29-bit identifier</span></div>
                <div className="byte-strip">
                  {["00", "F0", "04", "32", "14", "FF", "FF", "00"].map((value, index) => (
                    <span className={index === 3 || index === 4 ? "active" : undefined} key={`${value}-${index}`}><small>D{index}</small><b>{value}</b></span>
                  ))}
                </div>
              </div>
              <div className="decode-controls">
                <div><small>MASK</small><code>00 00 00 FF FF 00 00 00</code></div>
                <div><small>BYTE ORDER</small><strong>Little-endian</strong></div>
                <div><small>SCALE</small><strong>× 0.125</strong></div>
              </div>
              <div className="decoded-result"><Gauge aria-hidden="true" /><span><small>DECODED VALUE</small><strong>Engine speed</strong></span><b>645 <small>rpm</small></b></div>
              <div className="analysis-flow"><span>1 · Find message</span><ChevronRight aria-hidden="true" /><span>2 · Select bytes</span><ChevronRight aria-hidden="true" /><span>3 · Validate value</span></div>
            </div>
            <div className="files-copy">
              <p className="eyebrow">Parameter decoding</p>
              <h2>Turn Raw CAN Bytes Into Verified Values</h2>
              <p>Analyze an unknown CAN message step by step and confirm how its bytes correspond to a real vehicle parameter.</p>
              <div className="mini-grid">
                <div><ScanSearch aria-hidden="true" /><strong>Locate the Message</strong><span>Find the identifier whose bytes change with the required value.</span></div>
                <div><Binary aria-hidden="true" /><strong>Inspect Bytes &amp; Bits</strong><span>Compare byte history and isolate the data carrying the parameter.</span></div>
                <div><SlidersHorizontal aria-hidden="true" /><strong>Apply Decoding Settings</strong><span>Set the mask, byte order, scale coefficient and zero offset.</span></div>
                <div><Gauge aria-hidden="true" /><strong>Validate the Result</strong><span>Compare the decoded value with live vehicle data or a recorded log.</span></div>
              </div>
              <ExternalLink href={LINKS.decoding} className="text-link">Learn How to Decode CAN Parameters <ArrowUpRight aria-hidden="true" /></ExternalLink>
            </div>
          </div>
        </section>

        <section className="scripts-section">
          <div className="shell scripts-layout">
            <div className="scripts-copy">
              <p className="eyebrow">CAN Scripts</p>
              <h2>Go Beyond Decoding</h2>
              <p>Build visual workflows that send messages, wait for responses and make decisions based on received CAN data.</p>
              <ul className="check-list light-list">
                <li><Check aria-hidden="true" />Send 11-bit, 29-bit and J1939 messages</li>
                <li><Check aria-hidden="true" />Wait for matching responses with masks and timeouts</li>
                <li><Check aria-hidden="true" />Apply conditions, delays and repeat loops</li>
                <li><Check aria-hidden="true" />Protect scripts and store them in device memory</li>
                <li><Check aria-hidden="true" />Launch by command or from Complex Events</li>
              </ul>
            </div>
            <div className="script-canvas" aria-label="CAN Script visual workflow">
              <div className="script-node send-node"><Send aria-hidden="true" /><div><small>STEP 01</small><strong>Send Message</strong><span>0x18DB33F1 · 02 01 0C</span></div></div>
              <div className="node-line" aria-hidden="true" />
              <div className="script-node wait-node"><TimerReset aria-hidden="true" /><div><small>STEP 02</small><strong>Wait for Response</strong><span>Timeout · 1200 ms</span></div></div>
              <div className="node-line" aria-hidden="true" />
              <div className="script-node condition-node"><Workflow aria-hidden="true" /><div><small>CONDITION</small><strong>Response Received?</strong><span>Match · FF FF 00 00</span></div></div>
              <div className="branch-row">
                <div className="branch-path yes-path"><span className="branch-label">YES</span><div className="script-node compact success-node"><Check aria-hidden="true" /><div><strong>Return Success</strong><span>Continue workflow</span></div></div></div>
                <div className="branch-path timeout-path"><span className="branch-label">NO / TIMEOUT</span><div className="script-node compact repeat-node"><Repeat aria-hidden="true" /><div><strong>Repeat Request</strong><span>Return to Step 01</span></div></div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="logging-section">
          <div className="shell logging-layout">
            <div>
              <p className="eyebrow">Offline engineering</p>
              <h2>Capture Once. Analyze Anywhere.</h2>
              <p className="large-copy">Record complete CAN sessions when access to the vehicle is limited, then reproduce and analyze them later without reconnecting to the vehicle.</p>
              <ExternalLink href={LINKS.logs} className="button button-blue">View CAN Logging Guide <ArrowUpRight aria-hidden="true" /></ExternalLink>
            </div>
            <div className="logging-features">
              <div><Monitor aria-hidden="true" /><span><strong>Guided Recording</strong>Background, discrete and analog templates.</span></div>
              <div><GitCompare aria-hidden="true" /><span><strong>Multi-Log Comparison</strong>Compare vehicle states and changing values.</span></div>
              <div><FileCode2 aria-hidden="true" /><span><strong>Open Formats</strong>Playback and conversion for .log, .trc and .csv.</span></div>
              <div><ShieldCheck aria-hidden="true" /><span><strong>Support-Ready Reports</strong>Generate structured archives with vehicle metadata.</span></div>
            </div>
          </div>
        </section>

        <section className="deployment-section" id="engineering-ecosystem">
          <div className="shell">
            <SectionHeading eyebrow="Engineering ecosystem" title="Decode. Automate. Deploy at Scale." text="Analyze CAN data in CAN Spy, use the verified parameters to build device-side automation in Complex Events, then distribute the resulting files through DRC." />
            <div className="deployment-flow">
              <div className="engineering-chain">
                <div className="flow-stage"><small>01 · DECODE</small><div className="flow-node"><Activity aria-hidden="true" /><div><strong>CAN Spy</strong><span>Analyze CAN data and prepare decoding files or CAN Scripts</span></div></div></div>
                <div className="data-bridge"><span>Verified CAN parameters</span><ChevronRight aria-hidden="true" /></div>
                <div className="flow-stage"><small>02 · AUTOMATE</small><div className="flow-node"><Workflow aria-hidden="true" /><div><strong>Complex Events</strong><span>Build actions and algorithms using those parameters</span></div></div></div>
              </div>
              <div className="flow-arrow"><ChevronRight aria-hidden="true" /></div>
              <div className="deployment-package"><PackageSearch aria-hidden="true" /><small>DEPLOYMENT PACKAGE</small><strong>Files prepared for devices</strong><span><FileCode2 aria-hidden="true" />CAN decoding file / CAN Script</span><span><Workflow aria-hidden="true" />Complex Events logic file</span></div>
              <div className="flow-arrow"><ChevronRight aria-hidden="true" /></div>
              <div className="flow-stage compact"><small>03 · DISTRIBUTE</small><div className="flow-node central"><Cloud aria-hidden="true" /><div><strong>DRC</strong><span>Remote file distribution</span></div></div></div>
              <div className="flow-arrow"><ChevronRight aria-hidden="true" /></div>
              <div className="flow-stage compact"><small>04 · APPLY</small><div className="flow-node devices"><Network aria-hidden="true" /><div><strong>Device Groups</strong><span>Consistent fleet deployment</span></div></div></div>
            </div>
          </div>
        </section>

        <section className="applications-section">
          <div className="shell">
            <SectionHeading eyebrow="Applications" title="Vehicle Data for Real Operational Tasks" text="Available parameters vary by vehicle and decoding file, but the workflow remains consistent across fleet and equipment types." />
            <div className="application-grid">
              {useCases.map(([Icon, title, text]) => <FeatureCard key={title} icon={Icon} title={title} text={text} />)}
            </div>
          </div>
        </section>

        <section className="resources-section">
          <div className="shell">
            <SectionHeading eyebrow="Knowledge base" title="Start with a Practical Workflow" text="Focused guides take engineers from the first CAN connection to a tested decoding file." />
            <div className="resource-grid">
              {resources.map(([Icon, title, text, url]) => (
                <ExternalLink href={url} className="resource-card" key={title}>
                  <div className="resource-icon"><Icon aria-hidden="true" /></div>
                  <div><h3>{title}</h3><p>{text}</p></div>
                  <ArrowUpRight className="resource-arrow" aria-hidden="true" />
                </ExternalLink>
              ))}
            </div>
            <div className="resource-main-link"><ExternalLink href={LINKS.docs} className="button button-outline">View All CAN Spy Documentation <ArrowUpRight aria-hidden="true" /></ExternalLink></div>
          </div>
        </section>

        <section className="final-cta">
          <div className="shell cta-panel">
            <div><p className="eyebrow">NAVTELECOM CAN TECHNOLOGY</p><h2>Build Better CAN Integrations</h2><p>Move from raw CAN traffic to verified vehicle parameters, tested decoding files and reliable device configurations.</p></div>
            <div className="cta-actions">
              <Link href={LINKS.configurator} className="button button-white">Get NTC Configurator <ArrowUpRight aria-hidden="true" /></Link>
              <ExternalLink href={LINKS.library} className="button button-secondary">Explore CAN Library</ExternalLink>
              <ExternalLink href={LINKS.docs} className="cta-docs">Open CAN Spy Documentation →</ExternalLink>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
