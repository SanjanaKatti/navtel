"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Cable,
  Cpu,
  Database,
  RadioTower,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { startSeries, smartSeries, signalSeries } from "@/components/series/seriesData";
import type { SeriesConfig, SeriesSlug } from "@/components/series/types";
import { CapabilityIcon } from "./ModelSections";
import ModelSections from "./ModelSections";
import { modelSections } from "./modelSectionData";
import "../series/series-page.css";
import "./device-page.css";

const seriesBySlug: Record<SeriesSlug, SeriesConfig> = {
  start: startSeries,
  smart: smartSeries,
  signal: signalSeries,
};

const nodeSlots = ["compact", "ble", "gnss", "network"] as const;

type DevicePageProps = {
  model: string;
  series: SeriesSlug;
  /** Short product summary shown in the hero */
  lead: string;
  /** Technical specifications, product center, etc. */
  children?: React.ReactNode;
};

export default function DevicePage({ model, series, lead, children }: DevicePageProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const config = seriesBySlug[series];
  const info = config.models.find((item) => item.name === model);
  const capabilities = modelSections[model]?.capabilities.slice(0, nodeSlots.length) ?? [];
  const seriesHref = `/products/tracking-devices/${series}-series`;

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const items = root.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("sp-visible")),
      { threshold: 0.08 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const facts = info
    ? [
        { Icon: RadioTower, value: info.network, label: "Network" },
        { Icon: Cpu, value: info.inputs, label: "Inputs & outputs" },
        { Icon: Cable, value: info.interface, label: "Interfaces" },
        { Icon: Database, value: info.memory, label: info.battery },
      ]
    : [];

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />
      <div className={`sp-page sp-${series} dp-page`} ref={rootRef}>
        <main>
          <section className="sp-hero">
            <div className="sp-grid-pulses" aria-hidden="true"><i /><i /><i /></div>
            <div className="sp-shell sp-hero-layout">
              <div className="sp-hero-copy">
                <Link className="sp-back" href={seriesHref}>← {config.name} Series</Link>
                <p className="sp-eyebrow">
                  {config.name} SERIES{info ? ` · ${info.network.toUpperCase()}` : ""}
                </p>
                <h1>{model} <span>{config.name} Series</span></h1>
                <p className="sp-lead">{lead}</p>
                <div className="sp-actions">
                  <a className="sp-button sp-button-primary" href="#features">Explore features <ArrowRight /></a>
                  <Link className="sp-button sp-button-secondary" href={`/products/compare?devices=${model}`}>
                    Compare this device <ArrowUpRight />
                  </Link>
                </div>
              </div>

              <div className="sp-hero-visual" aria-label={`${model} ${config.name} Series tracker`}>
                <span className="sp-orbit sp-orbit-a" />
                <span className="sp-orbit sp-orbit-b" />
                <span className="sp-orbit sp-orbit-c" />
                <span className="sp-orbit-dot sp-dot-a" />
                <span className="sp-orbit-dot sp-dot-b" />
                <div className="sp-device-glow" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="sp-device-image" src={config.deviceImage} alt={`Navtelecom ${model} GPS tracking device`} />
                <div className="sp-device-label">
                  <strong>{model}</strong>
                  <small>{config.deviceLabel}</small>
                </div>
                {capabilities.map((capability, index) => (
                  <div
                    className={`sp-feature-node dp-node sp-node-${nodeSlots[index]}`}
                    style={{ "--delay": `${index * -0.7}s` } as React.CSSProperties}
                    key={capability.title}
                  >
                    <CapabilityIcon name={capability.icon} />
                    <span>
                      <strong>{capability.title}</strong>
                      {capability.sub ? <small>{capability.sub}</small> : null}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {facts.length > 0 && (
            <section className="sp-facts dp-facts" data-reveal>
              <div className="sp-shell sp-facts-grid">
                {facts.map(({ Icon, value, label }) => (
                  <article key={label}>
                    <Icon />
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </article>
                ))}
              </div>
            </section>
          )}

          <ModelSections model={model} />

          {children}

          <section className="sp-final" data-reveal>
            <div className="sp-shell">
              <div className="sp-final-card">
                <div>
                  <p className="sp-eyebrow sp-eyebrow-light">NEED HELP?</p>
                  <h2>
                    Questions about{" "}
                    <span style={{ whiteSpace: "nowrap" }}>{model}?</span>
                  </h2>
                  <p>Find answers on installation, configuration and support in our FAQ, or talk to our team.</p>
                </div>
                <div className="sp-actions">
                  <Link className="sp-button sp-button-light" href="/support/faq">Visit the FAQ <ArrowRight /></Link>
                  <Link className="sp-button sp-button-ghost" href="/contact">Talk to Sales <ArrowUpRight /></Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
