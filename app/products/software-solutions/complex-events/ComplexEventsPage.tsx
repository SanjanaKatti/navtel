"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BatteryCharging,
  Bluetooth,
  Boxes,
  Braces,
  Bus,
  Cable,
  CheckCircle2,
  CircleDot,
  CloudOff,
  Code2,
  Cpu,
  Database,
  Gauge,
  GitBranch,
  HardDrive,
  Layers3,
  Network,
  PackageCheck,
  RadioTower,
  Refrigerator,
  Scale,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  TerminalSquare,
  TestTube2,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";
import "./complex-events-page.css";

const LINKS = {
  blocks: "https://wiki.navtelecom.ru/en/home/complex_events/blocks",
  code: "https://wiki.navtelecom.ru/en/home/complex_events/code",
  functions: "https://wiki.navtelecom.ru/en/home/complex_events/functions_library",
  examples: "https://wiki.navtelecom.ru/en/home/complex_events/programs",
  contact: "/contact",
};

const IMAGES = {
  blocks: "/software/complex-events/ce-blocks-interface-blurred-v7.png",
  code: "/software/complex-events/ce-code-interface-blurred-v7.png",
};

type ModeId = "blocks" | "code";

const inputNodes: { label: string; icon: LucideIcon }[] = [
  { label: "CAN", icon: Network },
  { label: "RS-232 / RS-485", icon: Cable },
  { label: "Bluetooth LE", icon: Bluetooth },
  { label: "Inputs & GNSS", icon: RadioTower },
];

const outputNodes: { label: string; icon: LucideIcon }[] = [
  { label: "Events", icon: Activity },
  { label: "Outputs", icon: Zap },
  { label: "Equipment", icon: Boxes },
  { label: "Local Data", icon: HardDrive },
];

const modes: Record<
  ModeId,
  {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    points: string[];
    link: string;
    linkLabel: string;
  }
> = {
  blocks: {
    eyebrow: "VISUAL DEVELOPMENT",
    title: "CE Blocks",
    subtitle: "Build sophisticated logic without writing a complete application.",
    description:
      "Combine CFC functional diagrams with Flowchart structures to create clear, maintainable device algorithms in a visual engineering environment.",
    points: [
      "Visual drag-and-drop editor",
      "CFC and Flowchart structures",
      "Built-in function library",
      "Compilation and resource validation",
      "Step-by-step debugging",
      "Live variable charts",
    ],
    link: LINKS.blocks,
    linkLabel: "Explore CE Blocks",
  },
  code: {
    eyebrow: "ADVANCED DEVELOPMENT",
    title: "CE Code",
    subtitle: "Program custom device applications in C.",
    description:
      "Use C when a project requires deeper control, complex data processing or specialized integrations. Applications run in a separate execution thread alongside the base firmware.",
    points: [
      "Development in C",
      "Separate execution thread",
      "Maximum algorithm flexibility",
      "High-performance data processing",
      "Access to supported device resources",
      "Dedicated build and deployment workflow",
    ],
    link: LINKS.code,
    linkLabel: "Explore CE Code",
  },
};

const capabilities: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Cpu,
    title: "On-Device Automation",
    text: "Run decisions locally on the tracker without waiting for a server response.",
  },
  {
    icon: Boxes,
    title: "Third-Party Integration",
    text: "Connect equipment and implement protocols not included in the standard firmware.",
  },
  {
    icon: Network,
    title: "CAN-Based Logic",
    text: "Read supported CAN data, process messages and trigger device actions.",
  },
  {
    icon: Cable,
    title: "Custom Protocols",
    text: "Exchange data through RS-232, RS-485, Modbus, CAN and Bluetooth LE.",
  },
  {
    icon: Database,
    title: "Edge Data Processing",
    text: "Filter, calculate, transform and store data before it reaches the server.",
  },
  {
    icon: Zap,
    title: "Real-Time Actions",
    text: "Generate events, control outputs and interact with connected systems immediately.",
  },
];

const useCases: { icon: LucideIcon; title: string; text: string; tag: string }[] = [
  {
    icon: Bus,
    title: "Passenger Counting",
    text: "Integrate passenger-flow equipment using custom serial protocols.",
    tag: "RS-232 / RS-485",
  },
  {
    icon: Refrigerator,
    title: "Cold-Chain Equipment",
    text: "Read refrigeration controllers and process operational parameters locally.",
    tag: "Custom protocol",
  },
  {
    icon: Scale,
    title: "Weight & Axle Load",
    text: "Connect weighing systems and transform their data for telematics platforms.",
    tag: "Integration",
  },
  {
    icon: BatteryCharging,
    title: "Battery Management",
    text: "Communicate with SmartBMS controllers and automate power-related actions.",
    tag: "Automation",
  },
  {
    icon: Bluetooth,
    title: "Driver Identification",
    text: "Build identification workflows with BLE, RFID and Touch Memory devices.",
    tag: "BLE / RFID",
  },
  {
    icon: Gauge,
    title: "Vehicle Automation",
    text: "Use supported CAN values and local conditions to trigger controlled outputs.",
    tag: "CAN",
  },
];

const workflowSteps: { number: string; icon: LucideIcon; title: string; text: string }[] = [
  {
    number: "01",
    icon: Workflow,
    title: "Build",
    text: "Create the algorithm using CE Blocks or CE Code.",
  },
  {
    number: "02",
    icon: PackageCheck,
    title: "Validate",
    text: "Compile the project and check settings, errors and device resources.",
  },
  {
    number: "03",
    icon: TestTube2,
    title: "Debug",
    text: "Test execution and monitor variables before field deployment.",
  },
  {
    number: "04",
    icon: RadioTower,
    title: "Deploy",
    text: "Upload locally with NTC Configurator or distribute remotely through DRC.",
  },
];

function HeroDiagram() {
  return (
    <div className="ce-hero-diagram" aria-label="Inputs flow through Complex Events logic to device actions">
      <div className="ce-diagram-column ce-input-column">
        <span className="ce-diagram-label">DATA SOURCES</span>
        {inputNodes.map(({ label, icon: Icon }, index) => (
          <div className="ce-signal-node" key={label} style={{ "--delay": `${index * 0.16}s` } as React.CSSProperties}>
            <Icon aria-hidden="true" />
            <span>{label}</span>
          </div>
        ))}
      </div>

      <div className="ce-flow-line ce-flow-line-left" aria-hidden="true"><i /></div>

      <div className="ce-core-node">
        <span className="ce-core-orbit ce-core-orbit-one" />
        <span className="ce-core-orbit ce-core-orbit-two" />
        <span className="ce-core-orbit ce-core-orbit-three" />
        <span className="ce-core-icon"><GitBranch aria-hidden="true" /></span>
        <strong>COMPLEX<br />EVENTS</strong>
        <small>ON-DEVICE LOGIC</small>
      </div>

      <div className="ce-flow-line ce-flow-line-right" aria-hidden="true"><i /></div>

      <div className="ce-diagram-column ce-output-column">
        <span className="ce-diagram-label">ACTIONS</span>
        {outputNodes.map(({ label, icon: Icon }, index) => (
          <div className="ce-signal-node" key={label} style={{ "--delay": `${0.3 + index * 0.16}s` } as React.CSSProperties}>
            <Icon aria-hidden="true" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DevelopmentVisual({ mode }: { mode: ModeId }) {
  const isCode = mode === "code";
  const interfaceImage = isCode ? IMAGES.code : IMAGES.blocks;
  const interfaceName = isCode ? "CE Code" : "CE Blocks";

  return (
    <figure className="ce-macbook-visual" id="ce-blocks-interface" aria-label={`Actual ${interfaceName} interface shown on a MacBook Pro`}>
      <div className="ce-macbook-stage">
        <div className="ce-macbook-screen">
          <img src={interfaceImage} alt={`${interfaceName} product interface`} />
          <span className="ce-macbook-notch" aria-hidden="true" />
        </div>
      </div>
      <figcaption>Actual product interface. Appearance may vary depending on the software version and configuration.</figcaption>
    </figure>
  );
}

export default function ComplexEventsPage() {
  const [activeMode, setActiveMode] = useState<ModeId>("blocks");
  const mode = modes[activeMode];

  return (
    <div className="ce-page">
      <main>
        <section className="ce-hero">
          <div className="ce-hero-glow" aria-hidden="true" />
          <div className="ce-shell ce-hero-grid">
            <div className="ce-hero-copy">
              <Link className="ce-back" href="/products/software-solutions"><ArrowLeft aria-hidden="true" /> Software Solutions</Link>
              <p className="ce-eyebrow">ON-DEVICE PROGRAMMABLE LOGIC</p>
              <h1>Turn a tracker into a <span>programmable edge device.</span></h1>
              <p className="ce-hero-lead">
                Build custom automation, integrate third-party equipment and process data directly on supported Navtelecom devices — without replacing the base firmware.
              </p>
              <div className="ce-hero-actions">
                <a className="ce-button ce-button-primary" href={LINKS.blocks} target="_blank" rel="noreferrer">Explore CE Blocks <ArrowUpRight aria-hidden="true" /></a>
                <a className="ce-button ce-button-secondary" href={LINKS.code} target="_blank" rel="noreferrer">Explore CE Code <ArrowUpRight aria-hidden="true" /></a>
              </div>
            </div>
            <HeroDiagram />
          </div>
        </section>

        <section className="ce-edge-band">
          <div className="ce-shell ce-edge-layout">
            <div className="ce-edge-heading">
              <span className="ce-icon-square"><CloudOff aria-hidden="true" /></span>
              <div>
                <p className="ce-eyebrow ce-eyebrow-light">AUTONOMOUS EXECUTION</p>
                <h2>Automation that keeps working offline.</h2>
              </div>
            </div>
            <p className="ce-edge-copy">
              Complex Events programs execute directly on the device. Once deployed, the logic does not require internet access or a continuous server connection to monitor conditions, process data or trigger local actions.
            </p>
            <div className="ce-edge-points">
              <span><Cpu aria-hidden="true" /> Runs on the device</span>
              <span><CloudOff aria-hidden="true" /> No internet required</span>
              <span><ShieldCheck aria-hidden="true" /> Extends the base firmware</span>
            </div>
          </div>
        </section>

        <section className="ce-section ce-architecture-section">
          <div className="ce-shell">
            <div className="ce-section-heading ce-section-heading-center">
              <p className="ce-eyebrow">HOW IT WORKS</p>
              <h2>From any supported signal to a local action</h2>
              <p>Collect data, apply custom logic and make the device act immediately — all at the edge.</p>
            </div>
            <div className="ce-architecture-grid">
              <article>
                <span className="ce-architecture-number">01</span>
                <span className="ce-icon-box"><RadioTower aria-hidden="true" /></span>
                <h3>Read</h3>
                <p>Receive data from CAN, serial interfaces, BLE, inputs, GNSS and internal device parameters.</p>
                <ul><li>Vehicle data</li><li>External sensors</li><li>Device states</li></ul>
              </article>
              <ArrowRight className="ce-architecture-arrow" aria-hidden="true" />
              <article className="ce-architecture-featured">
                <span className="ce-architecture-number">02</span>
                <span className="ce-icon-box"><GitBranch aria-hidden="true" /></span>
                <h3>Decide</h3>
                <p>Evaluate conditions, timers, calculations, protocol data and project-specific algorithms.</p>
                <ul><li>Filter and transform</li><li>Compare and calculate</li><li>Apply custom rules</li></ul>
              </article>
              <ArrowRight className="ce-architecture-arrow" aria-hidden="true" />
              <article>
                <span className="ce-architecture-number">03</span>
                <span className="ce-icon-box"><Zap aria-hidden="true" /></span>
                <h3>Act</h3>
                <p>Generate events, control outputs, exchange data or operate connected equipment locally.</p>
                <ul><li>Trigger events</li><li>Control equipment</li><li>Store or transmit data</li></ul>
              </article>
            </div>
          </div>
        </section>

        <section className="ce-section ce-build-section" id="development">
          <div className="ce-shell">
            <div className="ce-section-heading">
              <p className="ce-eyebrow">TWO WAYS TO BUILD</p>
              <h2>Choose the development approach that fits your project</h2>
            </div>
            <div className="ce-mode-tabs" role="tablist" aria-label="Complex Events development approach">
              <button type="button" role="tab" aria-selected={activeMode === "blocks"} onClick={() => setActiveMode("blocks")}><Workflow aria-hidden="true" /> CE Blocks <span>Visual</span></button>
              <button type="button" role="tab" aria-selected={activeMode === "code"} onClick={() => setActiveMode("code")}><Code2 aria-hidden="true" /> CE Code <span>Advanced</span></button>
            </div>
            <div className="ce-mode-panel" role="tabpanel">
              <div className="ce-mode-content">
                <p className="ce-eyebrow">{mode.eyebrow}</p>
                <h3>{mode.title}</h3>
                <strong>{mode.subtitle}</strong>
                <p>{mode.description}</p>
                <div className="ce-mode-points">
                  {mode.points.map((point) => <span key={point}><CheckCircle2 aria-hidden="true" /> {point}</span>)}
                </div>
                <a className="ce-text-link" href={mode.link} target="_blank" rel="noreferrer">{mode.linkLabel} <ArrowUpRight aria-hidden="true" /></a>
              </div>
              <DevelopmentVisual mode={activeMode} />
            </div>
          </div>
        </section>

        <section className="ce-section ce-capabilities-section">
          <div className="ce-shell">
            <div className="ce-section-heading ce-section-heading-split">
              <div><p className="ce-eyebrow">CORE CAPABILITIES</p><h2>Build beyond standard tracker functionality</h2></div>
              <p>Use supported device resources as building blocks for automation, integration and edge processing.</p>
            </div>
            <div className="ce-capability-grid">
              {capabilities.map(({ icon: Icon, title, text }) => (
                <article key={title}><span className="ce-icon-box"><Icon aria-hidden="true" /></span><h3>{title}</h3><p>{text}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="ce-section ce-use-cases-section">
          <div className="ce-shell">
            <div className="ce-section-heading ce-section-heading-center">
              <p className="ce-eyebrow">REAL-WORLD APPLICATIONS</p>
              <h2>Go beyond standard firmware capabilities</h2>
              <p>Integrate specialized equipment and create project-specific logic without waiting for dedicated firmware development.</p>
            </div>
            <div className="ce-use-case-grid">
              {useCases.map(({ icon: Icon, title, text, tag }) => (
                <article key={title}><div><span className="ce-icon-box"><Icon aria-hidden="true" /></span><span className="ce-tag">{tag}</span></div><h3>{title}</h3><p>{text}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="ce-section ce-workflow-section">
          <div className="ce-shell">
            <div className="ce-section-heading">
              <p className="ce-eyebrow">ENGINEERING WORKFLOW</p>
              <h2>From idea to deployed device logic</h2>
            </div>
            <div className="ce-workflow-line">
              {workflowSteps.map(({ number, icon: Icon, title, text }, index) => (
                <React.Fragment key={title}>
                  <article><span className="ce-workflow-number">{number}</span><span className="ce-icon-box"><Icon aria-hidden="true" /></span><h3>{title}</h3><p>{text}</p></article>
                  {index < workflowSteps.length - 1 && <div className="ce-workflow-connector" aria-hidden="true"><i /></div>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        <section className="ce-section ce-ecosystem-section">
          <div className="ce-shell ce-ecosystem-layout">
            <div className="ce-ecosystem-copy">
              <p className="ce-eyebrow">NAVTELECOM ENGINEERING ECOSYSTEM</p>
              <h2>Create once. Deploy wherever the project needs it.</h2>
              <p>Build custom logic with CE Blocks or CE Code, test it with engineering tools and deliver approved programs to individual devices or remote device groups.</p>
              <div className="ce-ecosystem-links">
                <Link href="/products/software-solutions/ntc-configurator">NTC Configurator <ArrowUpRight aria-hidden="true" /></Link>
                <Link href="/products/software-solutions/drc">DRC <ArrowUpRight aria-hidden="true" /></Link>
              </div>
            </div>
            <div className="ce-ecosystem-diagram" aria-label="CE Blocks and CE Code programs are deployed through NTC Configurator or DRC to devices">
              <div className="ce-ecosystem-sources"><span><Workflow aria-hidden="true" /> CE Blocks</span><span><Braces aria-hidden="true" /> CE Code</span></div>
              <div className="ce-ecosystem-merge"><i /><i /><span><Sparkles aria-hidden="true" /> Custom Program</span></div>
              <ArrowRight aria-hidden="true" />
              <div className="ce-ecosystem-deploy"><span><Settings2 aria-hidden="true" /> NTC Configurator</span><span><RadioTower aria-hidden="true" /> DRC</span></div>
              <ArrowRight aria-hidden="true" />
              <div className="ce-ecosystem-device"><Cpu aria-hidden="true" /><strong>Device Groups</strong><small>Local or remote deployment</small></div>
            </div>
          </div>
        </section>

        <section className="ce-section ce-resources-section">
          <div className="ce-shell">
            <div className="ce-section-heading"><p className="ce-eyebrow">TECHNICAL RESOURCES</p><h2>Go deeper when you are ready to build</h2></div>
            <div className="ce-resource-grid">
              <a href={LINKS.blocks} target="_blank" rel="noreferrer"><Workflow aria-hidden="true" /><span><strong>CE Blocks Documentation</strong><small>Editor, build and debugging guides</small></span><ArrowUpRight aria-hidden="true" /></a>
              <a href={LINKS.code} target="_blank" rel="noreferrer"><TerminalSquare aria-hidden="true" /><span><strong>CE Code Documentation</strong><small>C development and quick start</small></span><ArrowUpRight aria-hidden="true" /></a>
              <a href={LINKS.functions} target="_blank" rel="noreferrer"><Layers3 aria-hidden="true" /><span><strong>Function Library</strong><small>Interfaces, operations and tools</small></span><ArrowUpRight aria-hidden="true" /></a>
              <a href={LINKS.examples} target="_blank" rel="noreferrer"><SlidersHorizontal aria-hidden="true" /><span><strong>Program Examples</strong><small>Applied integration scenarios</small></span><ArrowUpRight aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section className="ce-final-cta">
          <div className="ce-shell">
            <div className="ce-final-banner">
              <div className="ce-final-glow" aria-hidden="true" />
              <div className="ce-final-content">
                <span className="ce-icon-square"><CircleDot aria-hidden="true" /></span>
                <div className="ce-final-copy">
                  <p className="ce-eyebrow ce-eyebrow-light">BUILD SOMETHING SPECIFIC</p>
                  <h2>Have a project standard tracker logic cannot solve?</h2>
                  <p>Tell us what equipment, protocol or automation your project requires. We will help you evaluate how it can be implemented with Complex Events.</p>
                </div>
                <Link className="ce-button ce-button-light" href={LINKS.contact}>Discuss Your Project <ArrowUpRight aria-hidden="true" /></Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
