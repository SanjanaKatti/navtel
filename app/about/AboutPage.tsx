"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { geoCentroid } from "d3-geo";
import {
  ChevronDown,
  Code2,
  Cpu,
  LifeBuoy,
  Users,
} from "lucide-react";
import "./about-page.css";
import worldAtlas from "./countries-110m.json";

const ACTIVE_COUNTRIES = new Set([
  "ARGENTINA", "ARMENIA", "AZERBAIJAN", "BANGLADESH", "BELARUS",
  "BOLIVIA", "BRAZIL", "BURKINA", "BURKINA FASO", "CAMEROON", "CHILE",
  "COLOMBIA", "DJIBOUTI", "ETHIOPIA", "GHANA", "GUINEA", "HONDURAS",
  "INDIA", "JORDAN", "KAZAKHSTAN", "KENYA", "KUWAIT", "KYRGYZSTAN",
  "MALI", "MEXICO", "MOROCCO", "MOZAMBIQUE", "NAMIBIA", "NEPAL",
  "OMAN", "PANAMA", "PARAGUAY", "PERU", "PHILIPPINES", "RUSSIA",
  "SAUDI ARABIA", "SENEGAL", "SERBIA", "SOUTH AFRICA", "TAJIKISTAN",
  "TUNISIA", "UGANDA", "UNITED ARAB EMIRATES", "UAE",
  "UNITED REPUBLIC OF TANZANIA", "TANZANIA", "UZBEKISTAN", "ZAMBIA",
  "ZIMBABWE",
]);

const buildCards = [
  {
    icon: Cpu,
    title: "Hardware Production",
    text: "Long-term hardware roadmap and controlled firmware evolution.",
  },
  {
    icon: Users,
    title: "Integration Assistance",
    text: "Engineering-level support for complex telematics projects.",
  },
  {
    icon: Code2,
    title: "Software Tools",
    text: "Configuration, diagnostics and fleet management platforms.",
  },
  {
    icon: LifeBuoy,
    title: "After-Sales Support",
    text: "Structured, responsive and technically competent assistance.",
  },
];

const reasonCards = [
  {
    number: "01",
    title: "Engineering-Level Support",
    text: "Direct access to product engineers. Fast, competent responses without intermediaries.",
  },
  {
    number: "02",
    title: "Integration-Ready Architecture",
    text: "CAN, RS-485, BLE and flexible I/O. Built for complex fleet and industrial projects.",
  },
  {
    number: "03",
    title: "Stable Hardware Platform",
    text: "No sudden redesigns or disruptive firmware changes. Scale with confidence.",
  },
  {
    number: "04",
    title: "Long-Term Reliability",
    text: "36-month warranty and 10+ year lifecycle proven in real deployments.",
  },
];

type AtlasGeo = {
  rsmKey: string;
  properties?: { name?: string; NAME?: string };
};

function countryName(geo: AtlasGeo) {
  return String(geo?.properties?.name || geo?.properties?.NAME || "").trim();
}

function isActiveCountry(geo: AtlasGeo) {
  return ACTIVE_COUNTRIES.has(countryName(geo).toUpperCase());
}

function AnimatedStat({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return undefined;

    let frameId = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setDisplayValue(value);
          observer.disconnect();
          return;
        }

        const startedAt = performance.now();
        const duration = 1450;
        const animate = (time: number) => {
          const progress = Math.min((time - startedAt) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplayValue(Math.round(value * eased));
          if (progress < 1) frameId = requestAnimationFrame(animate);
        };

        frameId = requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.45 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [value]);

  return (
    <div ref={elementRef} className="stat-item" aria-label={`${value}${suffix} ${label}`}>
      <strong aria-hidden="true">{displayValue}{suffix}</strong>
      <span>{label}</span>
    </div>
  );
}

function MapVisual() {
  const [geoItems, setGeoItems] = useState<AtlasGeo[]>([]);
  const [activeMarker, setActiveMarker] = useState(0);
  const [mapSize, setMapSize] = useState({ width: 1000, height: 500, scale: 200 });

  useEffect(() => {
    const resize = () => {
      const width = window.innerWidth;
      if (width < 480) setMapSize({ width: 720, height: 380, scale: 88 });
      else if (width < 640) setMapSize({ width: 780, height: 400, scale: 105 });
      else if (width < 768) setMapSize({ width: 820, height: 420, scale: 125 });
      else if (width < 1024) setMapSize({ width: 900, height: 460, scale: 165 });
      else setMapSize({ width: 1000, height: 500, scale: 200 });
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const markers = useMemo(
    () => geoItems.filter(isActiveCountry).map((geo) => ({
      name: countryName(geo),
      coordinates: geoCentroid(geo as unknown as Parameters<typeof geoCentroid>[0]),
    })).filter(({ coordinates }) => Number.isFinite(coordinates[0]) && Number.isFinite(coordinates[1])),
    [geoItems],
  );

  useEffect(() => {
    if (!markers.length) return undefined;
    const timer = window.setInterval(
      () => setActiveMarker((current) => (current + 1) % markers.length),
      3000,
    );
    return () => window.clearInterval(timer);
  }, [markers.length]);

  return (
    <div className="ap-world-map" aria-label="Navtelecom worldwide deployment map">
      <ComposableMap
        width={mapSize.width}
        height={mapSize.height}
        projectionConfig={{ scale: mapSize.scale, center: [8, 7] }}
        role="img"
      >
        <Geographies geography={worldAtlas}>
          {({ geographies }: { geographies: AtlasGeo[] }) => {
            if (!geoItems.length) queueMicrotask(() => setGeoItems(geographies));
            return geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={isActiveCountry(geo) ? "#D8DEE9" : "#E5E7EB"}
                stroke="#CBD5E1"
                strokeWidth={0.55}
                tabIndex={-1}
                style={{
                  default: { outline: "none" },
                  hover: { fill: isActiveCountry(geo) ? "#CBD4E1" : "#E5E7EB", outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ));
          }}
        </Geographies>

        {markers.map((marker, index) => (
          <Marker key={marker.name} coordinates={marker.coordinates}>
            <g className={index === activeMarker ? "ap-map-marker ap-is-active" : "ap-map-marker"}>
              <circle className="ap-map-marker-pulse" cy="-2" r="8" />
              <circle className="ap-map-marker-dot" cy="-2" r="3.6" />
              <title>{marker.name}</title>
            </g>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}

export default function AboutPage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const items = root.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ap-is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page pt-20" ref={rootRef} id="top">
      <main>
        <section className="ap-about-hero" id="about">
          <div className="ap-hero-motion" aria-hidden="true">
            <span className="ap-hero-orbit ap-orbit-a"><i /></span>
            <span className="ap-hero-orbit ap-orbit-b"><i /></span>
            <span className="ap-hero-orbit ap-orbit-c"><i /></span>
            <span className="ap-hero-glow" />
          </div>
          <div className="ap-page-shell ap-hero-grid">
            <div className="ap-hero-title-block" data-reveal>
              <p className="ap-eyebrow">WHO WE ARE</p>
              <h1>About Us</h1>
            </div>
            <p className="ap-hero-copy" data-reveal>
              We design and manufacture professional telematics hardware for system integrators and fleet operators worldwide. Our devices are built for long-term deployment, deep vehicle data access, and stable performance in demanding environments.
            </p>
            <p className="ap-mission-copy" data-reveal>
              To provide integration-ready telematics devices that reduce project risk, simplify deployment, and ensure predictable operation over years - not months. We focus on engineering quality, stable architecture, and real technical support for complex fleet projects.
            </p>
            <div className="ap-mission-title-block" data-reveal>
              <p className="ap-eyebrow">OUR GOAL</p>
              <h2>Our Mission</h2>
            </div>
          </div>
        </section>

        <section className="ap-company-stats" aria-label="Navtelecom company facts">
          <div className="ap-page-shell ap-stats-grid">
            <AnimatedStat value={20} label="Years in Industry" />
            <AnimatedStat value={3} suffix="M+" label="Devices Produced" />
            <AnimatedStat value={45} label="Countries Deployed" />
            <AnimatedStat value={3} suffix="K+" label="Partners Worldwide" />
          </div>
        </section>

        <section className="ap-map-section">
          <div className="ap-page-shell ap-map-heading" data-reveal>
            <p className="ap-eyebrow">WORLDWIDE DEPLOYMENT</p>
            <h2>Global Reach. Proven Deployment.</h2>
            <p>Long-term deployments across diverse climates and markets. Partnerships with system integrators worldwide.</p>
          </div>
          <div className="ap-page-shell ap-map-frame" data-reveal>
            <MapVisual />
          </div>
        </section>

        <section className="ap-build-section" id="build">
          <div className="ap-page-shell">
            <div data-reveal>
              <p className="ap-eyebrow">OUR EXPERTISE</p>
              <h2>What We Build</h2>
            </div>
            <p className="ap-build-intro" data-reveal>
              A complete telematics foundation, from dependable devices and engineering support to the software used throughout deployment and operation.
            </p>
            <div className="ap-build-grid">
              {buildCards.map(({ icon: Icon, title, text }, index) => (
                <article className="ap-build-card" key={title} data-reveal style={{ "--delay": `${index * 80}ms` } as React.CSSProperties}>
                  <Icon size={30} strokeWidth={1.7} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ap-reasons-section">
          <div className="ap-page-shell ap-reasons-layout">
            <div className="ap-reasons-intro" data-reveal>
              <p className="ap-eyebrow">BUILT FOR PROFESSIONALS</p>
              <h2>Why Choose Navtelecom?</h2>
              <p>Because serious telematics projects need more than a specification sheet. They need predictable hardware, direct engineering expertise, and a partner that remains available throughout integration and deployment.</p>
            </div>
            <div className="ap-reasons-grid">
              {reasonCards.map(({ number, title, text }, index) => (
                <article className="ap-reason-card" key={number} data-reveal style={{ "--delay": `${index * 70}ms` } as React.CSSProperties}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
