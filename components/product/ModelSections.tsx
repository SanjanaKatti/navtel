"use client";

import Link from "next/link";
import { ArrowRight } from "phosphor-react";
import { modelSections, type FeatureIcon } from "./modelSectionData";

/** Feature icons come from public/Navtelecom/icons new (mirrored in /series-icons). */
const capabilityIconFiles: Record<FeatureIcon, string> = {
  inputs: "inputs-and-outputs",
  rs: "wired-interfaces",
  ble: "bluetooth",
  onewire: "1-wire",
  compact: "compact-device",
  usb: "usb-type-c-1",
  engine: "rpm",
  can: "can-bus",
  gnss: "gnss",
  battery: "backup-battery",
  memory: "internal-memory",
  microsd: "microsd",
  cell: "4g",
  sim: "dual-sim-4g",
  shield: "electrical-protection",
  antenna: "external-antennas",
  driver: "driver-id",
};

export function CapabilityIcon({ name }: { name: FeatureIcon }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={`/series-icons/${capabilityIconFiles[name]}.svg`} alt="" />
  );
}

const ModelSections = ({ model }: { model: string }) => {
  const section = modelSections[model];
  if (!section) return null;

  return (
    <>
      <section
        className="sp-section sp-capabilities dp-capabilities"
        id="features"
        data-reveal
      >
        <div className="sp-shell">
          <div className="sp-heading sp-heading-split">
            <div>
              <p className="sp-eyebrow">KEY HARDWARE</p>
              <h2>
                Capabilities built into{" "}
                <span style={{ whiteSpace: "nowrap" }}>{model}</span>
              </h2>
            </div>
            <p>
              Interfaces, sensors and on-board logic that define what this
              tracker can connect to and control.
            </p>
          </div>
          <div className="sp-feature-grid">
            {section.capabilities.map((capability, index) => (
              <article key={capability.title}>
                <div className="sp-feature-top">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <CapabilityIcon name={capability.icon} />
                </div>
                <h3>{capability.title}</h3>
                {capability.sub ? (
                  <p className="dp-sub">{capability.sub}</p>
                ) : null}
                <p>{capability.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-choice dp-transmission" data-reveal>
        <div className="sp-shell sp-choice-card dp-transmission-card">
          <div className="sp-choice-copy">
            <p className="sp-eyebrow sp-eyebrow-light">DATA DELIVERY</p>
            <h2>Three-server transmission</h2>
          </div>
        </div>
      </section>

      <section className="sp-section sp-strengths dp-software" data-reveal>
        <div className="sp-shell">
          <div className="sp-heading">
            <p className="sp-eyebrow">SOFTWARE &amp; INTEGRATION</p>
            <h2>Configure, monitor and extend your device</h2>
          </div>
          <div className="dp-soft-list">
            {section.software.map((item) => (
              <Link key={item.href} href={item.href} className="dp-soft-row">
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <span className="dp-soft-cta">
                  {item.cta}
                  <ArrowRight size={16} weight="bold" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ModelSections;
