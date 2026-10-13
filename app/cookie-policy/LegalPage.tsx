"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  type LucideIcon,
  ArrowUp,
  CalendarDays,
  ChevronDown,
  Mail,
  Menu,
  X,
} from "lucide-react";
import "./cookie-policy.css";

const legalPages = [
  { label: "Privacy Policy", href: "/privacy", type: "privacy" },
  { label: "Cookie Policy", href: "/cookie-policy", type: "cookies" },
  { label: "Terms of Use", href: "/terms-of-use", type: "terms" },
];

function DocumentVisual({ icons }: { icons: LucideIcon[] }) {
  const [First, Second, Third] = icons;
  return (
    <div className="lp-document-visual" aria-hidden="true">
      <span className="lp-orbit lp-orbit-a" />
      <span className="lp-orbit lp-orbit-b" />
      <span className="lp-orbit lp-orbit-c" />
      <span className="lp-orbit-dot lp-dot-a" />
      <span className="lp-orbit-dot lp-dot-b" />
      <div className="lp-doc-sheet lp-sheet-back" />
      <div className="lp-doc-sheet lp-sheet-front">
        <span className="lp-doc-mark"><First size={46} strokeWidth={1.45} /></span>
        <i /><i /><i /><i className="short" />
        <div className="lp-doc-seal"><Third size={22} /></div>
      </div>
      <div className="lp-floating-chip lp-chip-one"><Second size={22} /></div>
      <div className="lp-floating-chip lp-chip-two"><Third size={22} /></div>
    </div>
  );
}

export default function LegalPage({ type, eyebrow, title, intro, note, icons, sections }: {
  type: string;
  eyebrow: string;
  title: string;
  intro: string;
  note: string;
  icons: LucideIcon[];
  sections: { title: string; content: React.ReactNode }[];
}) {
  const [active, setActive] = useState("section-1");
  const ids = useMemo(() => sections.map((_, index) => `section-${index + 1}`), [sections]);

  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("lp-visible");
      });
    }, { threshold: 0.08 });

    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-20% 0px -65%", threshold: [0.05, 0.35, 0.7] });

    root.querySelectorAll("[data-reveal]").forEach((element) => revealObserver.observe(element));
    ids.forEach((id) => {
      const element = root.querySelector(`#${id}`);
      if (element) sectionObserver.observe(element);
    });
    return () => { revealObserver.disconnect(); sectionObserver.disconnect(); };
  }, [ids]);

  return (
    <div className={`legal-page lp-theme-${type} pt-20`} ref={rootRef} id="top">
      <main>
        <section className="lp-hero">
          <div className="lp-shell lp-hero-grid">
            <div className="lp-hero-copy" data-reveal>
              <p className="lp-eyebrow">{eyebrow}</p>
              <h1>{title}</h1>
              <p className="lp-hero-lead">{intro}</p>
              <p className="lp-hero-note">{note}</p>
              <div className="lp-updated"><CalendarDays size={18} /><span>Last updated</span><strong>March 19, 2026</strong></div>
            </div>
            <DocumentVisual icons={icons} />
          </div>
        </section>

        <nav className="lp-legal-switcher" aria-label="Legal documents">
          <div className="lp-shell lp-switcher-inner">
            <span>LEGAL DOCUMENTS</span>
            <div>
              {legalPages.map((page) => <Link className={page.type === type ? "lp-active" : ""} href={page.href} key={page.type}>{page.label}</Link>)}
            </div>
          </div>
        </nav>

        <section className="lp-document-section">
          <div className="lp-shell lp-document-layout">
            <aside className="lp-toc" data-reveal>
              <p>ON THIS PAGE</p>
              <ol>
                {sections.map((section, index) => (
                  <li key={section.title} className={active === ids[index] ? "lp-active" : ""}>
                    <a href={`#${ids[index]}`}><span>{String(index + 1).padStart(2, "0")}</span>{section.title}</a>
                  </li>
                ))}
              </ol>
              <div className="lp-toc-help"><Mail size={18} /><span>Questions about this document?</span><a href="mailto:info@navtelecom-iot.com">Contact us</a></div>
            </aside>

            <article className="lp-legal-document">
              {sections.map((section, index) => (
                <section className="lp-legal-section" id={ids[index]} key={section.title} data-reveal>
                  <span className="lp-section-number">{String(index + 1).padStart(2, "0")}</span>
                  <div className="lp-section-content"><h2>{section.title}</h2>{section.content}</div>
                </section>
              ))}
            </article>
          </div>
        </section>

        <section className="lp-document-end">
          <div className="lp-shell lp-end-card" data-reveal>
            <div><p className="lp-eyebrow">NAVTELECOM LEGAL</p><h2>Need clarification?</h2><p>Send your question to our team and reference the document and section number.</p></div>
            <a href="mailto:info@navtelecom-iot.com">info@navtelecom-iot.com <Mail size={18} /></a>
          </div>
        </section>
      </main>

      <a className="lp-back-to-top" href="#top" aria-label="Back to top"><ArrowUp size={19} /></a>
    </div>
  );
}
