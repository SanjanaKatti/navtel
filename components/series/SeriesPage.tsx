"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  CircleGauge,
  Database,
  Server,
  ShieldCheck,
} from "lucide-react";
import type { FactIcon, SeriesConfig, SeriesModel } from "./types";
import "./series-page.css";

const factIcons: Record<FactIcon, React.ComponentType> = {
  server: Server,
  gauge: CircleGauge,
  database: Database,
  shield: ShieldCheck,
  badge: BadgeCheck,
};

const filters = [
  ["all", "All devices"],
  ["2g", "2G devices"],
  ["4g", "4G devices"],
] as const;

function HeroVisual({ series }: { series: SeriesConfig }) {
  return (
    <div className="sp-hero-visual" aria-label={series.heroAriaLabel}>
      <span className="sp-orbit sp-orbit-a" />
      <span className="sp-orbit sp-orbit-b" />
      <span className="sp-orbit sp-orbit-c" />
      <span className="sp-orbit-dot sp-dot-a" />
      <span className="sp-orbit-dot sp-dot-b" />
      <div className="sp-device-glow" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="sp-device-image" src={series.deviceImage} alt={`Navtelecom ${series.name} Series tracking device`} />
      <div className="sp-device-label">
        <strong>{series.name}</strong>
        <small>{series.deviceLabel}</small>
      </div>
      {series.heroFeatures.map((item, index) => (
        <div
          className={`sp-feature-node sp-node-${item.node}`}
          style={{ "--delay": `${index * -0.7}s` } as React.CSSProperties}
          key={item.title}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item.icon} alt="" />
          <span>
            <strong>{item.title}</strong>
            <small>{item.detail}</small>
          </span>
        </div>
      ))}
    </div>
  );
}

function ModelCard({ series, model }: { series: SeriesConfig; model: SeriesModel }) {
  return (
    <Link className="sp-model-card" href={`/products/tracking-devices/${series.slug}-series/${model.name.toLowerCase()}`}>
      <div className="sp-model-top">
        <span>{model.badge}</span>
        <ArrowUpRight />
      </div>
      <div className="sp-model-device">
        <span className="sp-model-ring" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={series.deviceImage} alt={`${model.name} GPS tracking device`} />
      </div>
      <div className="sp-model-name">
        <div>
          <small>{model.network}</small>
          <h3>{model.name}</h3>
        </div>
        <span>{series.name}</span>
      </div>
      <ul>
        <li><Check />{model.inputs}</li>
        <li><Check />{model.interface}</li>
        <li><Check />{model.battery}</li>
        <li><Check />{model.memory}</li>
      </ul>
      <strong className="sp-model-link">View model <ArrowRight /></strong>
    </Link>
  );
}

export default function SeriesPage({ series }: { series: SeriesConfig }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<"all" | "2g" | "4g">("all");
  const filteredModels = useMemo(
    () => (filter === "all" ? series.models : series.models.filter((model) => model.generation === filter)),
    [filter, series.models],
  );

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const items = root.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("sp-visible")),
      { threshold: 0.1 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const { choice, strengths, final } = series;

  return (
    <div className={`sp-page sp-${series.slug}`} ref={rootRef}>
      <main>
        <section className="sp-hero">
          <div className="sp-grid-pulses" aria-hidden="true"><i /><i /><i /></div>
          <div className="sp-shell sp-hero-layout">
            <div className="sp-hero-copy">
              <Link className="sp-back" href="/products/tracking-devices">← Tracking Devices</Link>
              <p className="sp-eyebrow">{series.eyebrow}</p>
              <h1>{series.name} <span>Series</span></h1>
              <h2>{series.headline}</h2>
              <p className="sp-lead">{series.lead}</p>
              <div className="sp-actions">
                <a className="sp-button sp-button-primary" href="#lineup">Explore the lineup <ArrowRight /></a>
                <Link className="sp-button sp-button-secondary" href="/products/all-devices">Compare all devices <ArrowUpRight /></Link>
              </div>
            </div>
            <HeroVisual series={series} />
          </div>
        </section>

        <section className="sp-facts" data-reveal>
          <div className="sp-shell sp-facts-grid">
            {series.facts.map((fact) => {
              const Icon = factIcons[fact.icon];
              return (
                <article key={fact.label}>
                  <Icon />
                  <strong>{fact.value}</strong>
                  <span>{fact.label}</span>
                </article>
              );
            })}
          </div>
        </section>

        <section className="sp-section sp-capabilities" data-reveal>
          <div className="sp-shell">
            <div className="sp-heading sp-heading-split">
              <div>
                <p className="sp-eyebrow">SERIES CAPABILITIES</p>
                <h2>{series.capabilities.title}</h2>
              </div>
              <p>{series.capabilities.text}</p>
            </div>
            <div className="sp-feature-grid">
              {series.features.map((feature, index) => (
                <article key={feature.title}>
                  <div className="sp-feature-top">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={feature.icon} alt="" />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sp-section sp-lineup" id="lineup" data-reveal>
          <div className="sp-shell">
            <div className="sp-heading sp-heading-action">
              <div>
                <p className="sp-eyebrow">EXPLORE THE LINEUP</p>
                <h2>{series.lineupTitle}</h2>
              </div>
              <div className="sp-filters" aria-label="Filter devices by network">
                {filters.map(([value, label]) => (
                  <button
                    className={filter === value ? "active" : ""}
                    type="button"
                    onClick={() => setFilter(value)}
                    aria-pressed={filter === value}
                    key={value}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <div className="sp-model-grid">
              {filteredModels.map((model) => (
                <ModelCard series={series} model={model} key={model.name} />
              ))}
            </div>
          </div>
        </section>

        <section className="sp-section sp-choice" data-reveal>
          <div className="sp-shell sp-choice-card">
            <div className="sp-choice-copy">
              <p className="sp-eyebrow sp-eyebrow-light">{choice.eyebrow}</p>
              <h2>{choice.title}</h2>
              <p>{choice.text}</p>
              <Link href={choice.linkHref}>{choice.linkLabel} <ArrowRight /></Link>
            </div>
            <div className="sp-choice-columns">
              {choice.columns.map((column) => (
                <article key={column.title}>
                  <span>{column.eyebrow}</span>
                  <h3>{column.title}</h3>
                  <p>{column.text}</p>
                  <ul>
                    {column.points.map((point) => (
                      <li key={point}><Check />{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sp-section sp-strengths" data-reveal>
          <div className="sp-shell">
            <div className="sp-heading">
              <p className="sp-eyebrow">{strengths.eyebrow}</p>
              <h2>{strengths.title}</h2>
            </div>
            <div className="sp-strength-grid">
              {strengths.items.map(({ icon, title, text }) => (
                <article key={title}>
                  <span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={icon} alt="" />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sp-final" data-reveal>
          <div className="sp-shell">
            <div className="sp-final-card">
              <div>
                <p className="sp-eyebrow sp-eyebrow-light">DEVICE SELECTION</p>
                <h2>{final.title}</h2>
                <p>{final.text}</p>
              </div>
              <div className="sp-actions">
                <Link className="sp-button sp-button-light" href={final.compareHref}>{final.compareLabel} <ArrowRight /></Link>
                <Link className="sp-button sp-button-ghost" href="/contact">Talk to Sales <ArrowUpRight /></Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
