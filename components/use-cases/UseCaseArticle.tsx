import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { relatedUseCases, type UseCase, type UseCaseSection } from "@/lib/use-cases";

function SectionBody({ section }: { section: UseCaseSection }) {
  const questions = section.paragraphs.filter((paragraph) => paragraph.trim().endsWith("?"));
  const prose = section.paragraphs.filter(
    (paragraph) => paragraph !== "SOLUTION DEVICE" && !paragraph.trim().endsWith("?"),
  );
  const points = section.points.filter((point) => point.text.trim() || point.title.trim());

  return (
    <section className={`case-section${section.tone === "soft" ? " soft" : ""}`}>
      <div className="use-cases-shell">
        {section.eyebrow ? <p className="use-cases-eyebrow">{section.eyebrow}</p> : null}
        {section.title ? <h2>{section.title}</h2> : null}
        {prose.length ? (
          <div className="case-copy">
            {prose.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ) : null}
        {questions.length ? (
          <ul className="case-questions">
            {questions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ul>
        ) : null}
        {points.length ? (
          <div className="case-points">
            {points.map((point) => (
              <article key={point.title}>
                <h3>{point.title}</h3>
                {point.text ? <p>{point.text}</p> : null}
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default function UseCaseArticle({ item }: { item: UseCase }) {
  const page = item.page;
  const related = relatedUseCases(item);
  const solutionIndex = page.sections.findIndex((section) =>
    /solution|changed|decision/i.test(`${section.eyebrow} ${section.title}`),
  );

  return (
    <article>
      <section className="case-hero">
        <div className="use-cases-shell case-hero-layout">
          <div>
            <Link className="case-back" href="/use-cases">
              ← All use cases
            </Link>
            <p className="use-cases-eyebrow">{page.eyebrow || `${item.country} · ${item.industry}`}</p>
            <h1>{page.h1 || item.title}</h1>
            {page.lead ? <p className="case-lead">{page.lead}</p> : null}
            {page.note ? <p className="case-note">{page.note}</p> : null}
            <div className="case-actions">
              <a className="use-cases-button use-cases-button-primary" href="#solution">
                Explore the solution <ArrowRight aria-hidden="true" />
              </a>
              {page.trackerHref ? (
                <Link className="use-cases-button use-cases-button-text" href={page.trackerHref}>
                  View the tracker <ArrowUpRight aria-hidden="true" />
                </Link>
              ) : null}
            </div>
          </div>
          <div className="case-hero-visual">
            {page.heroImage || item.image ? (
              <img
                className="case-hero-photo"
                src={page.heroImage || item.image}
                alt={page.heroAlt || item.title}
              />
            ) : null}
            {page.deviceName ? (
              <div className="case-device">
                {page.deviceImage ? <img src={page.deviceImage} alt="" /> : null}
                <div>
                  <p>Solution device</p>
                  <strong>{page.deviceName}</strong>
                  {page.features.length ? (
                    <div className="case-features">
                      {page.features.map((feature) => (
                        <span key={feature}>{feature}</span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {page.profile.length ? (
        <div className="use-cases-shell">
          <dl className="case-profile" aria-label="Project profile">
            {page.profile.map((field) => (
              <div key={field.label}>
                <dt>{field.label}</dt>
                <dd>
                  {field.value}
                  {field.detail ? <small>{field.detail.replace(/\n+/g, "\n")}</small> : null}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      ) : null}

      {page.sections.map((section, index) => (
        <div id={index === solutionIndex ? "solution" : undefined} key={`${section.title}-${index}`}>
          {index === solutionIndex && item.software?.name ? (
            <div className="use-cases-shell" style={{ paddingTop: 28 }}>
              <Link className="case-software" href={item.software.path}>
                Built with {item.software.name}
              </Link>
            </div>
          ) : null}
          <SectionBody section={section} />
        </div>
      ))}

      <section className="case-cta">
        <div className="use-cases-shell">
          <div className="case-cta-card">
            <div>
              <p className="use-cases-eyebrow">YOUR PROJECT</p>
              <h2>Tell us about the work you need to measure</h2>
              <p>
                Share the vehicles, routes, sensors and decisions you want this data to support.
              </p>
            </div>
            <Link className="use-cases-button use-cases-button-light" href="/contact">
              Talk to Sales <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {related.length ? (
        <section className="case-related">
          <div className="use-cases-shell">
            <h2>More in this application</h2>
            <div className="use-cases-grid">
              {related.map((entry) => (
                <Link className="use-case-card" href={entry.path} key={entry.id}>
                  {entry.image ? <img src={entry.image} alt="" /> : null}
                  <div className="use-case-card-body">
                    <p className="use-case-card-kicker">
                      {entry.country} · {entry.device}
                    </p>
                    <h3>{entry.title}</h3>
                    <p>{entry.description}</p>
                    <strong>Explore use case</strong>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </article>
  );
}
