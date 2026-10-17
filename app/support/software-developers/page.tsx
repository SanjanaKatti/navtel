import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../support-page.css";

export const metadata: Metadata = {
  title: "GPS Tracker Integration Resources for Developers | Navtelecom",
  description:
    "Protocol specifications, reference tables and testing tools for connecting Navtelecom trackers to your telematics platform.",
};

const resources = [
  {
    title: "FLEX specification",
    text: "Core binary data exchange protocol and packet structure.",
    href: "https://wiki.navtelecom.ru/doc/protocol/en_protocol_ntcb_last.pdf",
  },
  {
    title: "Communication examples",
    text: "Practical message flows for device-to-server integrations.",
    href: "https://wiki.navtelecom.ru/en/home/developers/flex_examples",
  },
  {
    title: "Parameter reference",
    text: "Searchable identifiers, types and supported parameter values.",
    href: "https://docs.google.com/spreadsheets/d/1xtNN9Apo0qiC0c0EwPQ4HA8KjplA8aP72Jk1HTAPESA/edit?gid=1035809267#gid=1035809267",
  },
  {
    title: "Event codes",
    text: "Reference for events reported by devices to a telematics server.",
    href: "https://wiki.navtelecom.ru/en/home/developers/event_codes",
  },
  {
    title: "Custom parameters",
    text: "Guidance for working with project-specific data fields.",
    href: "https://wiki.navtelecom.ru/en/home/developers/user_params",
  },
  {
    title: "Configuration reference",
    text: "Configuration parameters and special DATA request identifiers.",
    href: "https://wiki.navtelecom.ru/en/home/developers/configuration",
  },
];

const interfaces = [
  {
    title: "Bluetooth & USB",
    text: "Exchange data with a device locally over Bluetooth or USB.",
    href: "https://wiki.navtelecom.ru/doc/protocol/en_protocol_ntcb_bluetooth_usb_last.pdf",
  },
  {
    title: "AT-MODEM",
    text: "Control and diagnose supported devices with AT commands.",
    href: "https://wiki.navtelecom.ru/en/home/developers/at_modem_protocol",
  },
  {
    title: "MODBUS RTU",
    text: "Connect industrial equipment and read supported registers.",
    href: "https://wiki.navtelecom.ru/en/home/developers/protocols/modbus",
  },
  {
    title: "CAN Bus",
    text: "Implementation notes for CAN and FMS BAM sessions.",
    href: "https://wiki.navtelecom.ru/en/home/developers/protocols/can/fms_bam_session",
  },
];

export default function SoftwareDevelopersPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />
      <div className="support-page">
        <main>
          <section className="support-hero">
            <div className="support-grid-pattern" aria-hidden="true" />
            <div className="support-shell support-hero-grid">
              <div className="support-hero-copy">
                <p className="support-eyebrow">NAVTELECOM SOFTWARE DEVELOPERS</p>
                <h1>From device data to your platform</h1>
                <p className="support-lead">
                  Protocol specifications, reference tables and testing tools for connecting Navtelecom trackers to your telematics platform.
                </p>
                <div className="support-hero-actions">
                  <a className="support-button support-button-primary" href="https://wiki.navtelecom.ru/en/home/developers" target="_blank" rel="noreferrer">
                    Open Developer Wiki <ArrowUpRight aria-hidden="true" />
                  </a>
                  <a className="support-text-link" href="https://wiki.navtelecom.ru/doc/protocol/en_protocol_ntcb_last.pdf" target="_blank" rel="noreferrer">
                    Download FLEX specification <ArrowRight aria-hidden="true" />
                  </a>
                </div>
              </div>
              <div className="support-flow" aria-hidden="true">
                <article className="support-contact-card" style={{ position: "relative", minHeight: 280 }}>
                  <p className="support-resource-eyebrow">TELEMETRY PACKET · FLEX 3.0</p>
                  <h3>Inspect a FLEX telemetry packet</h3>
                  <p>protocol FLEX_3.0 · msg_type A · telemetry · msg_count 2</p>
                  <p>Message 1 · 18542 · event 4513 · 2024-09-19 11:53:59</p>
                  <p>Message 2 · 18543 · event 4545 · 2024-09-19 11:54:00</p>
                  <a className="support-resource-link" href="https://wiki.navtelecom.ru/en/home/developers/flex_examples" target="_blank" rel="noreferrer">
                    View example <ArrowRight aria-hidden="true" />
                  </a>
                </article>
              </div>
            </div>
          </section>

          <section className="support-resources-section">
            <div className="support-shell">
              <div className="support-heading">
                <p className="support-eyebrow">CORE PROTOCOL</p>
                <h2>Start with FLEX</h2>
                <p>
                  FLEX extends the NTCB binary protocol and carries location, device state, sensor data, events and configuration information between a tracker and your server.
                </p>
              </div>
              <div className="support-resource-grid">
                {resources.map((item) => (
                  <a key={item.title} href={item.href} target="_blank" rel="noreferrer">
                    <div className="support-resource-top"><ArrowUpRight aria-hidden="true" /></div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <span className="support-resource-link">Open reference <ArrowRight aria-hidden="true" /></span>
                  </a>
                ))}
              </div>
              <p style={{ marginTop: 18 }}>
                <a className="support-text-link" href="https://wiki.navtelecom.ru/en/home/developers/spec_data_ids" target="_blank" rel="noreferrer">
                  Need a special DATA request identifier? Open the dedicated reference <ArrowRight aria-hidden="true" />
                </a>
              </p>
            </div>
          </section>

          <section className="support-contact-section">
            <div className="support-shell">
              <div className="support-heading">
                <p className="support-eyebrow">DEVELOPMENT TOOLS</p>
                <h2>Test before deployment</h2>
                <p>Validate the data flow from both sides of the connection before testing on production hardware.</p>
              </div>
              <div className="support-contact-grid">
                <article className="support-contact-card">
                  <p className="support-card-number">DEVICE SIDE</p>
                  <h3>FLEX Device Emulator</h3>
                  <p className="support-card-description">Simulate a Navtelecom tracker and verify how your server receives, parses and acknowledges FLEX data.</p>
                  <a className="support-button support-button-outline" href="https://wiki.navtelecom.ru/en/home/developers/flex_device_emulator" target="_blank" rel="noreferrer">
                    Open emulator guide <ArrowUpRight aria-hidden="true" />
                  </a>
                </article>
                <article className="support-contact-card">
                  <p className="support-card-number">SERVER SIDE</p>
                  <h3>FLEX Server Emulator</h3>
                  <p className="support-card-description">Connect a device to a test endpoint, inspect incoming packets and troubleshoot integration behaviour.</p>
                  <a className="support-button support-button-outline" href="https://wiki.navtelecom.ru/en/home/developers/flex_server_emulator" target="_blank" rel="noreferrer">
                    Open emulator guide <ArrowUpRight aria-hidden="true" />
                  </a>
                </article>
              </div>
            </div>
          </section>

          <section className="support-path-section">
            <div className="support-shell">
              <div className="support-heading">
                <p className="support-eyebrow">OTHER INTERFACES</p>
                <h2>Choose the right connection</h2>
                <p>Use the interface that matches your platform, service workflow or connected equipment.</p>
              </div>
              <div className="support-path-grid">
                {interfaces.map((item) => (
                  <a key={item.title} href={item.href} target="_blank" rel="noreferrer">
                    <div>
                      <strong>{item.title}</strong>
                      <small>{item.text}</small>
                    </div>
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                ))}
              </div>
              <p style={{ marginTop: 22 }}>
                <a className="support-text-link" href="https://wiki.navtelecom.ru/programs/debug/ntc_at_tools.zip">
                  NTC AT Tools — download the official utility package <ArrowRight aria-hidden="true" />
                </a>
              </p>
            </div>
          </section>

          <section className="support-final-section">
            <div className="support-shell">
              <div className="support-final-banner">
                <div className="support-final-content">
                  <div className="support-final-copy">
                    <p className="support-eyebrow support-eyebrow-light">INTEGRATION SUPPORT</p>
                    <h2>Need help with an implementation?</h2>
                    <p>Send the device model, target platform, protocol and a clear description of the required data flow.</p>
                  </div>
                  <div className="support-final-actions">
                    <a className="support-button support-button-light" href="mailto:support@navtelecom.ru">
                      <Mail aria-hidden="true" /> Email Technical Support
                    </a>
                    <Link className="support-button support-button-dark-outline" href="/support">
                      Back to Support
                    </Link>
                  </div>
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
