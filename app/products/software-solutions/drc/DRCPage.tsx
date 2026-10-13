"use client";

import React from "react";
import Link from "next/link";
import {
  type LucideIcon,
  Activity,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Binary,
  Blocks,
  Braces,
  CheckCircle2,
  CircleCheckBig,
  Cloud,
  CloudCog,
  FileCog,
  FolderKanban,
  HardDrive,
  Info,
  List,
  ListChecks,
  ListPlus,
  MinusCircle,
  Network,
  PanelsTopLeft,
  Replace,
  Rocket,
  ScanLine,
  Search,
  Server,
  SlidersHorizontal,
  SquareTerminal,
  Stethoscope,
  Terminal,
  UploadCloud,
  UserCheck,
  Workflow,
  Wrench,
} from "lucide-react";
import "./drc-page.css";

const links = {
  login: "https://drc.navtelecom.ru/login",
  quickStart: "https://wiki.navtelecom.ru/en/home/drc/quick_start",
  api: "https://api-docs.navtelecom.ru/drc/en",
  canSpy: "/products/software-solutions/can-spy",
  complexEvents: "/products/software-solutions/complex-events",
};

const capabilities = [
  {
    icon: Network,
    title: "Centralized Device Management",
    text: "Manage individual devices and large device groups through a single web interface.",
  },
  {
    icon: ListChecks,
    title: "Bulk Operations",
    text: "Send commands, update firmware and deploy configuration files to hundreds of devices at once.",
  },
  {
    icon: Stethoscope,
    title: "Remote Diagnostics",
    text: "Diagnose and maintain devices remotely, including units no longer communicating with the monitoring platform.",
  },
  {
    icon: FolderKanban,
    title: "Device & Task Groups",
    text: "Organize devices into groups, assign tasks and monitor execution status from one workspace.",
  },
  {
    icon: FileCog,
    title: "Configuration & CAN Deployment",
    text: "Deploy configuration files, CAN decoding files and device settings across multiple units.",
  },
  {
    icon: Braces,
    title: "API Integration",
    text: "Integrate DRC with internal systems and automate remote device management.",
    href: links.api,
  },
];

const managedItems: [LucideIcon, string][] = [
  [SlidersHorizontal, "Device configurations"],
  [UploadCloud, "Firmware updates"],
  [Terminal, "Remote commands"],
  [Binary, "CAN decoding files"],
  [List, "Driver ID lists"],
  [Workflow, "Complex Events logic"],
  [HardDrive, "SD card files"],
  [Server, "Server connection settings"],
];

function DRCDashboardPreview() {
  return (
    <figure className="drc-ui-figure">
      <div className="drc-ui-window">
        <img
          className="drc-ui-screenshot"
          src="/software/drc/drc-dashboard-macbook-v2.png"
          alt="DRC device management interface displayed on a modern laptop with private identifiers obscured"
        />
      </div>
      <figcaption>Actual DRC interface. Private device and account identifiers have been obscured.</figcaption>
    </figure>
  );
}

const steps = [
  {
    icon: UserCheck,
    title: "Connect Devices to Your Account",
    text: "Register your DRC account and associate the required Navtelecom devices with it.",
  },
  {
    icon: ListPlus,
    title: "Create Individual or Group Tasks",
    text: "Select devices, define the required operation and add the task to the execution queue.",
  },
  {
    icon: CircleCheckBig,
    title: "Monitor Task Execution",
    text: "Devices connect to DRC, execute queued tasks and report their current status and results.",
  },
];

const useCases = [
  {
    icon: Rocket,
    title: "Large-Scale Device Rollouts",
    text: "Apply consistent configurations and firmware across large device deployments.",
  },
  {
    icon: Replace,
    title: "Monitoring Server Migration",
    text: "Remotely update connection settings when moving devices to another monitoring platform.",
  },
  {
    icon: Wrench,
    title: "Remote Troubleshooting",
    text: "Diagnose device behaviour and reduce unnecessary on-site visits.",
  },
  {
    icon: Blocks,
    title: "Integration & Automation",
    text: "Connect DRC to internal systems and automate recurring operations through the API.",
  },
];

function ExternalLink({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export default function DRCPage() {
  return (
    <div className="drc-page pt-20">
      <main>
        <section className="drc-hero">
          <div className="drc-shell drc-hero-grid">
            <div>
              <Link className="drc-back" href="/products/software-solutions">
                <ArrowLeft aria-hidden="true" /> Software Solutions
              </Link>
              <p className="drc-eyebrow">Remote Device Management Platform</p>
              <h1>DRC</h1>
              <p className="drc-lead">
                Configure, diagnose and maintain Navtelecom devices
                remotely—from individual units to large-scale
                deployments—through a single web interface.
              </p>
              <div className="drc-actions">
                <ExternalLink href={links.login} className="drc-primary-action">
                  Log In to DRC <ArrowUpRight aria-hidden="true" />
                </ExternalLink>
                <ExternalLink
                  href={links.quickStart}
                  className="drc-secondary-action"
                >
                  Quick Start <ArrowRight aria-hidden="true" />
                </ExternalLink>
              </div>
              <div className="drc-cloud-note">
                <Cloud aria-hidden="true" /> Cloud-based · No software
                installation required
              </div>
            </div>

            <div className="drc-hero-art"><DRCDashboardPreview /></div>
          </div>
        </section>

        <section className="drc-section drc-capabilities">
          <div className="drc-shell">
            <div className="drc-section-head">
              <p className="drc-eyebrow">Core Capabilities</p>
              <h2>Remote operations built for every stage of deployment</h2>
            </div>
            <div className="drc-feature-grid">
              {capabilities.map(({ icon: Icon, title, text, href }) => (
                <article className="drc-feature" key={title}>
                  <span className="drc-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  {href && (
                    <ExternalLink href={href} className="drc-feature-link">
                      View API Documentation
                      <ArrowUpRight aria-hidden="true" />
                    </ExternalLink>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="drc-section drc-manage">
          <div className="drc-shell drc-manage-layout">
            <div>
              <p className="drc-eyebrow">What You Can Manage</p>
              <h2>One platform for remote device maintenance</h2>
              <p>
                Deploy essential files, settings and service operations without
                handling devices one by one.
              </p>
            </div>
            <div className="drc-manage-grid">
              {managedItems.map(([Icon, label]) => (
                <div className="drc-manage-item" key={label}>
                  <span>
                    <Icon aria-hidden="true" />
                  </span>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="drc-section drc-process">
          <div className="drc-shell">
            <div className="drc-section-head">
              <p className="drc-eyebrow">How DRC Works</p>
              <h2>From account setup to completed remote tasks</h2>
            </div>
            <div className="drc-steps">
              {steps.map(({ icon: Icon, title, text }, index) => (
                <article className="drc-step" key={title}>
                  <span className="drc-step-number">
                    STEP {String(index + 1).padStart(2, "0")}
                    <Icon aria-hidden="true" />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <ExternalLink href={links.quickStart} className="drc-quick-link">
              View the Quick Start Guide
              <ArrowUpRight aria-hidden="true" />
            </ExternalLink>
          </div>
        </section>

        <section className="drc-section drc-distinction">
          <div className="drc-shell">
            <div className="drc-distinction-box">
              <div className="drc-distinction-title">
                <span className="drc-icon">
                  <Info aria-hidden="true" />
                </span>
                <div>
                  <p className="drc-eyebrow">Clear Product Role</p>
                  <h2>Device Management, Not a Vehicle Tracking Platform</h2>
                  <p>
                    DRC is designed for remote device configuration,
                    diagnostics and maintenance. It does not provide vehicle
                    maps or store location history.
                  </p>
                </div>
              </div>
              <div className="drc-compare">
                <div className="drc-compare-group">
                  <div className="drc-compare-label">
                    <CheckCircle2 aria-hidden="true" /> What DRC Does
                  </div>
                  <ul>
                    <li>Remote device management</li>
                    <li>Diagnostics and maintenance</li>
                    <li>Bulk operations</li>
                    <li>Task execution history</li>
                  </ul>
                </div>
                <div className="drc-compare-group">
                  <div className="drc-compare-label">
                    <MinusCircle aria-hidden="true" /> What DRC Doesn’t Do
                  </div>
                  <ul>
                    <li>Vehicle maps</li>
                    <li>Live location tracking</li>
                    <li>Route history</li>
                    <li>Fleet monitoring dashboards</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="drc-section drc-usecases">
          <div className="drc-shell">
            <div className="drc-section-head">
              <p className="drc-eyebrow">Practical Use Cases</p>
              <h2>Built for real telematics operations</h2>
            </div>
            <div className="drc-usecase-grid">
              {useCases.map(({ icon: Icon, title, text }) => (
                <article className="drc-usecase" key={title}>
                  <span className="drc-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="drc-section drc-ecosystem">
          <div className="drc-shell">
            <div className="drc-section-head">
              <p className="drc-eyebrow">Engineering Ecosystem</p>
              <h2>Create once. Deploy across multiple devices.</h2>
              <p className="drc-lead">
                Prepare CAN decoding files and custom device logic with
                dedicated tools, then distribute both through DRC to device
                groups.
              </p>
            </div>
            <div className="drc-flow">
              <div className="drc-source-stack">
                <Link className="drc-flow-card drc-source-card" href={links.canSpy}>
                  <span className="drc-icon">
                    <ScanLine aria-hidden="true" />
                  </span>
                  <div>
                    <h3>CAN Spy</h3>
                    <p>Create and validate custom CAN decoding files.</p>
                    <span className="drc-card-link">
                      Explore CAN Spy <ArrowUpRight aria-hidden="true" />
                    </span>
                  </div>
                </Link>
                <Link className="drc-flow-card drc-source-card" href={links.complexEvents}>
                  <span className="drc-icon">
                    <Workflow aria-hidden="true" />
                  </span>
                  <div>
                    <h3>Complex Events</h3>
                    <p>Create custom device operating logic.</p>
                    <span className="drc-card-link">
                      Explore Complex Events
                      <ArrowUpRight aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </div>
              <span className="drc-flow-arrow">
                <ArrowRight aria-hidden="true" />
              </span>
              <div className="drc-flow-card drc-flow-center">
                <span className="drc-icon">
                  <CloudCog aria-hidden="true" />
                </span>
                <div>
                  <h3>DRC</h3>
                  <p>
                    Receive CAN files and Complex Events logic, then create
                    remote deployment tasks.
                  </p>
                  <span className="drc-card-link">Central deployment</span>
                </div>
              </div>
              <span className="drc-flow-arrow">
                <ArrowRight aria-hidden="true" />
              </span>
              <div className="drc-flow-card">
                <span className="drc-icon">
                  <Network aria-hidden="true" />
                </span>
                <div>
                  <h3>Device Groups</h3>
                  <p>
                    Receive assigned files and logic, execute tasks and report
                    deployment status.
                  </p>
                  <span className="drc-card-link">Managed devices</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="drc-section drc-api">
          <div className="drc-shell">
            <div className="drc-api-box">
              <div>
                <p className="drc-eyebrow">DRC API</p>
                <h2>Automate device management</h2>
                <p>
                  Integrate DRC with internal systems to automate device
                  provisioning, task creation and remote management operations.
                </p>
                <ExternalLink href={links.api} className="drc-api-link">
                  View API Documentation
                  <ArrowUpRight aria-hidden="true" />
                </ExternalLink>
              </div>
              <div
                className="drc-api-flow"
                aria-label="Your systems connect through the DRC API to device groups"
              >
                <div className="drc-api-node">
                  <PanelsTopLeft aria-hidden="true" /> Your Systems
                </div>
                <span className="drc-api-arrow">
                  <ArrowRight aria-hidden="true" />
                </span>
                <div className="drc-api-node">
                  <Braces aria-hidden="true" /> DRC API
                </div>
                <span className="drc-api-arrow">
                  <ArrowRight aria-hidden="true" />
                </span>
                <div className="drc-api-node">
                  <Network aria-hidden="true" /> Device Groups
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="drc-final">
          <div className="drc-shell">
            <div className="drc-final-box">
              <div>
                <h2>Ready to Manage Devices at Scale?</h2>
                <p>
                  Access DRC to configure, diagnose and maintain your
                  Navtelecom device deployment remotely.
                </p>
              </div>
              <div className="drc-final-actions">
                <ExternalLink href={links.login} className="drc-primary-action">
                  Log In to DRC <ArrowUpRight aria-hidden="true" />
                </ExternalLink>
                <ExternalLink
                  href={links.quickStart}
                  className="drc-secondary-action"
                >
                  Quick Start <ArrowRight aria-hidden="true" />
                </ExternalLink>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
