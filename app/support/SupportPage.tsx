import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeHelp,
  BookOpenText,
  Bot,
  Check,
  CheckCircle2,
  CircleHelp,
  Clock3,
  Download,
  FileCog,
  LifeBuoy,
  Mail,
  MessageCircle,
  Send,
  ShieldCheck,
  TicketCheck,
  Wrench,
} from "lucide-react";
import "./support-page.css";

const SUPPORT_EMAIL = "support@navtelecom.ru";
const TELEGRAM_URL = "https://t.me/NavtelecomSupport_bot";

const resources = [
  {
    icon: BookOpenText,
    eyebrow: "DOCUMENTATION",
    title: "Knowledge Base",
    text: "Setup guides, commands, diagnostics, device documentation and integration examples.",
    label: "Open Knowledge Base",
    href: "https://wiki.navtelecom.ru/en/home",
    external: true,
  },
  {
    icon: CircleHelp,
    eyebrow: "QUICK ANSWERS",
    title: "Frequently Asked Questions",
    text: "Common questions about configuration, installation, connectivity and integration.",
    label: "Read FAQ",
    href: "/support/faq",
  },
  {
    icon: Download,
    eyebrow: "SOFTWARE",
    title: "Downloads & Release Notes",
    text: "Get current Navtelecom software packages and review the latest documented changes.",
    label: "View Downloads",
    href: "https://wiki.navtelecom.ru/en/home/ntc_configurator",
    external: true,
  },
  {
    icon: ShieldCheck,
    eyebrow: "SERVICE",
    title: "Warranty Information",
    text: "Review warranty coverage, service conditions and what to prepare before a claim.",
    label: "View Warranty",
    href: "/support/warranty",
  },
];

const ticketDetails = [
  "Device model and IMEI",
  "Device firmware version",
  "NTC Configurator version",
  "Configuration file, when relevant",
  "Clear description of the issue",
  "Logs, screenshots or error messages",
];


function ResourceLink({ href, external, children }: { href: string; external?: boolean; children: React.ReactNode }) {
  if (external) {
    return <a href={href} target="_blank" rel="noreferrer">{children}</a>;
  }
  return <Link href={href}>{children}</Link>;
}

function SupportFlowGraphic() {
  return (
    <div className="support-flow" aria-label="A support request becomes a tracked support ticket">
      <div className="support-flow-channel support-flow-email">
        <span><Mail aria-hidden="true" /></span>
        <strong>Email</strong>
      </div>
      <div className="support-flow-channel support-flow-telegram">
        <span><Send aria-hidden="true" /></span>
        <strong>Telegram</strong>
      </div>
      <div className="support-flow-line support-flow-line-one"><i /></div>
      <div className="support-flow-line support-flow-line-two"><i /></div>
      <div className="support-flow-ticket">
        <span className="support-flow-orbit support-flow-orbit-one" aria-hidden="true" />
        <span className="support-flow-orbit support-flow-orbit-two" aria-hidden="true" />
        <span className="support-flow-orbit support-flow-orbit-three" aria-hidden="true" />
        <span className="support-ticket-icon"><TicketCheck aria-hidden="true" /></span>
        <strong>Support Ticket</strong>
        <small>One support system</small>
        <span className="support-ticket-output" aria-hidden="true"><i /></span>
      </div>
      <div className="support-flow-status">
        <CheckCircle2 aria-hidden="true" /> Request registered
      </div>
    </div>
  );
}

export default function SupportPage() {
  return (
    <div className="support-page pt-20">
      <main>
        <section className="support-hero">
          <div className="support-grid-pattern" aria-hidden="true" />
          <div className="support-shell support-hero-grid">
            <div className="support-hero-copy">
              <p className="support-eyebrow">NAVTELECOM SUPPORT</p>
              <h1>Technical support for every stage of your project.</h1>
              <p className="support-lead">
                Find technical documentation or create a support ticket for device configuration, installation, diagnostics and integration questions.
              </p>
              <div className="support-hero-actions">
                <a className="support-button support-button-primary" href={`mailto:${SUPPORT_EMAIL}`}>
                  <Mail aria-hidden="true" /> Send Email
                </a>
                <a className="support-text-link" href="#resources">Explore Support Resources <ArrowRight aria-hidden="true" /></a>
              </div>
            </div>
            <SupportFlowGraphic />
          </div>
        </section>

        <section className="support-contact-section">
          <div className="support-shell">
            <div className="support-heading support-heading-center">
              <p className="support-eyebrow">CONTACT TECHNICAL SUPPORT</p>
              <h2>Choose the channel that works for you</h2>
              <p>Both channels create a ticket in the same technical support system.</p>
            </div>

            <div className="support-contact-grid">
              <article className="support-contact-card support-contact-primary">
                <div className="support-card-topline">
                  <span className="support-icon-box"><Mail aria-hidden="true" /></span>
                  <span className="support-recommended"><Check aria-hidden="true" /> Recommended</span>
                </div>
                <p className="support-card-number">01</p>
                <h3>Email Support</h3>
                <p className="support-card-description">
                  The primary support channel for technical questions, configuration files, logs and detailed issue descriptions.
                </p>
                <a className="support-email-address" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
                <a className="support-button support-button-light" href={`mailto:${SUPPORT_EMAIL}`}>
                  Send Email <ArrowUpRight aria-hidden="true" />
                </a>
              </article>

              <article className="support-contact-card support-contact-secondary">
                <div className="support-card-topline">
                  <span className="support-icon-box"><Send aria-hidden="true" /></span>
                  <span className="support-channel-label">Telegram</span>
                </div>
                <p className="support-card-number">02</p>
                <h3>Telegram Support Bot</h3>
                <p className="support-card-description">
                  Send your request through Telegram. The bot registers it as a ticket in the same support system used for email requests.
                </p>
                <div className="support-bot-note"><Bot aria-hidden="true" /><span>The bot creates the ticket; it is not a separate live-chat service.</span></div>
                <a className="support-button support-button-outline" href={TELEGRAM_URL} target="_blank" rel="noreferrer">
                  Open Telegram Bot <ArrowUpRight aria-hidden="true" />
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="support-resources-section" id="resources">
          <div className="support-shell">
            <div className="support-heading support-heading-split">
              <div>
                <p className="support-eyebrow">SELF-SERVICE RESOURCES</p>
                <h2>Technical information when you need it</h2>
              </div>
              <p>Documentation remains in the Navtelecom Knowledge Base, where it can be maintained and expanded without duplicating technical content on the main website.</p>
            </div>

            <div className="support-resource-grid">
              {resources.map(({ icon: Icon, eyebrow, title, text, label, href, external }) => (
                <ResourceLink key={title} href={href} external={external}>
                  <div className="support-resource-top">
                    <span className="support-icon-box"><Icon aria-hidden="true" /></span>
                    <ArrowUpRight aria-hidden="true" />
                  </div>
                  <p className="support-resource-eyebrow">{eyebrow}</p>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span className="support-resource-link">{label} <ArrowRight aria-hidden="true" /></span>
                </ResourceLink>
              ))}
            </div>
          </div>
        </section>

        <section className="support-ticket-section">
          <div className="support-shell support-ticket-layout">
            <div className="support-ticket-copy">
              <p className="support-eyebrow support-eyebrow-light">BEFORE YOU CREATE A TICKET</p>
              <h2>Include the details that help us diagnose the issue</h2>
              <p>Providing technical context with the initial request reduces follow-up questions and helps the support team investigate more efficiently.</p>
              <div className="support-ticket-note"><Clock3 aria-hidden="true" /><span>You can attach configuration files and logs directly to your email.</span></div>
            </div>
            <div className="support-ticket-checklist">
              {ticketDetails.map((detail, index) => (
                <div key={detail}><span>{String(index + 1).padStart(2, "0")}</span><CheckCircle2 aria-hidden="true" /><strong>{detail}</strong></div>
              ))}
            </div>
          </div>
        </section>

        <section className="support-path-section">
          <div className="support-shell">
            <div className="support-heading support-heading-center">
              <p className="support-eyebrow">FIND THE RIGHT PATH</p>
              <h2>Not sure where to start?</h2>
              <p>Use documentation for known tasks and create a ticket when the issue requires investigation.</p>
            </div>
            <div className="support-path-grid">
              <a href="https://wiki.navtelecom.ru/en/home" target="_blank" rel="noreferrer">
                <span><FileCog aria-hidden="true" /></span>
                <div><strong>I need step-by-step instructions</strong><small>Open the Navtelecom Wiki.</small></div>
                <ArrowUpRight aria-hidden="true" />
              </a>
              <Link href="/support/faq">
                <span><BadgeHelp aria-hidden="true" /></span>
                <div><strong>I have common questions</strong><small>Open frequently asked questions on the website.</small></div>
                <ArrowUpRight aria-hidden="true" />
              </Link>
              <a href={`mailto:${SUPPORT_EMAIL}`}>
                <span><Wrench aria-hidden="true" /></span>
                <div><strong>I need technical assistance</strong><small>Create a support ticket by email.</small></div>
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="support-final-section">
          <div className="support-shell">
            <div className="support-final-banner">
              <div className="support-final-glow" aria-hidden="true" />
              <div className="support-final-content">
                <span className="support-final-icon"><LifeBuoy aria-hidden="true" /></span>
                <div className="support-final-copy">
                  <p className="support-eyebrow support-eyebrow-light">TECHNICAL SUPPORT</p>
                  <h2>Still need help?</h2>
                  <p>Send us the technical details and our support team will review your request through the ticket system.</p>
                </div>
                <div className="support-final-actions">
                  <a className="support-button support-button-light" href={`mailto:${SUPPORT_EMAIL}`}><Mail aria-hidden="true" /> Send Email</a>
                  <a className="support-button support-button-dark-outline" href={TELEGRAM_URL} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /> Telegram Bot</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
