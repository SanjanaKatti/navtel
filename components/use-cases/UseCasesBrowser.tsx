"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  useCaseCategories,
  useCases,
  type UseCase,
} from "@/lib/use-cases";

const PAGE_SIZE = 12;

function matches(item: UseCase, query: string) {
  if (!query) return true;
  const haystack = [
    item.title,
    item.description,
    item.country,
    item.device,
    item.industry,
    ...item.keywords,
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(query);
}

export default function UseCasesBrowser() {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const normalized = query.trim().toLowerCase();

  const filtered = useMemo(
    () =>
      useCases.filter(
        (item) =>
          (category === "all" || item.categoryId === category) &&
          matches(item, normalized),
      ),
    [category, normalized],
  );

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const visible = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );
  const categoryLabel = useCaseCategories.find((item) => item.id === category)?.label;

  return (
    <section className="use-cases-browser" id="case-studies">
      <div className="use-cases-shell">
        <div className="use-cases-toolbar">
          <div>
            <p className="use-cases-eyebrow">FIND YOUR APPLICATION</p>
            <h2>Explore by application</h2>
          </div>
          <label className="use-cases-search">
            <span className="sr-only">Search use cases</span>
            <input
              value={query}
              placeholder="Search topic, country or device"
              onChange={(event) => {
                setQuery(event.target.value);
                setPage(1);
              }}
            />
            {query ? (
              <button type="button" aria-label="Clear search" onClick={() => setQuery("")}>
                ×
              </button>
            ) : null}
          </label>
        </div>
        <div className="use-cases-filters" role="group" aria-label="Filter by application category">
          <button
            type="button"
            aria-pressed={category === "all"}
            onClick={() => {
              setCategory("all");
              setPage(1);
            }}
          >
            All use cases <span>{useCases.length}</span>
          </button>
          {useCaseCategories.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={category === item.id}
              onClick={() => {
                setCategory(item.id);
                setPage(1);
              }}
            >
              {item.label}
              <span>{useCases.filter((entry) => entry.categoryId === item.id).length}</span>
            </button>
          ))}
        </div>
        <p className="use-cases-count" role="status">
          {`${filtered.length} use case${filtered.length === 1 ? "" : "s"}${
            category !== "all" && categoryLabel ? ` in ${categoryLabel}` : ""
          }`}
        </p>
        {visible.length ? (
          <div className="use-cases-grid">
            {visible.map((item) => (
              <Link className="use-case-card" href={item.path} key={item.id}>
                {item.image ? (
                  <img src={item.image} alt="" />
                ) : (
                  <img src="/home/smart-device-card.png" alt="" />
                )}
                <div className="use-case-card-body">
                  <p className="use-case-card-kicker">
                    {item.industry}
                    {item.software?.name ? ` · Built with ${item.software.name}` : ""}
                  </p>
                  <p className="use-case-card-kicker">
                    {item.country} · {item.device}
                  </p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <strong>Explore use case <ArrowRight aria-hidden="true" size={14} /></strong>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="use-cases-empty">
            <h3>No matching use cases</h3>
            <p>Try another topic, country or device, or choose a different category.</p>
            <button
              type="button"
              onClick={() => {
                setCategory("all");
                setQuery("");
                setPage(1);
              }}
            >
              Reset filters
            </button>
          </div>
        )}
        {pageCount > 1 ? (
          <nav className="use-cases-pagination" aria-label="Use case pages">
            {Array.from({ length: pageCount }, (_, index) => (
              <button
                key={index}
                type="button"
                aria-current={currentPage === index + 1 ? "page" : undefined}
                onClick={() => {
                  setPage(index + 1);
                  document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {index + 1}
              </button>
            ))}
          </nav>
        ) : null}
      </div>
    </section>
  );
}
