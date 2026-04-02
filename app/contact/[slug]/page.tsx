import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getBusinessContactBySlug,
  getBusinessContactSlugs,
} from "@/lib/business-contacts";

type Props = { params: Promise<{ slug: string }> };

function IconPhone({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconMail({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function IconLink({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export async function generateStaticParams() {
  return getBusinessContactSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const contact = getBusinessContactBySlug(slug);
  if (!contact) {
    return { title: "Contact" };
  }
  return {
    title: `${contact.name} — ${contact.title}`,
    description: `Contact ${contact.name}, ${contact.title} at ${contact.company}.`,
  };
}

export default async function BusinessContactPage({ params }: Props) {
  const { slug } = await params;
  const contact = getBusinessContactBySlug(slug);
  if (!contact) notFound();

  const vcardHref = `/api/contact/${encodeURIComponent(slug)}/vcf`;
  const accent = contact.cardTheme.accent;
  const websiteLabel = contact.websiteUrl.replace(/^https?:\/\//, "");

  return (
    <div className="min-h-dvh min-h-screen bg-brand-light-3 font-sans antialiased text-brand-navy overflow-x-hidden">
      <main className="flex flex-col items-center justify-center min-h-dvh pb-[max(2rem,env(safe-area-inset-bottom,0px))] px-4 pt-[max(1.5rem,env(safe-area-inset-top,0px))]">
        <article className="w-full max-w-[22rem] rounded-[1.75rem] bg-white shadow-2xl shadow-brand-navy/12 overflow-hidden border border-white/80">
          {/* Header band */}
          <div
            className="relative h-40 sm:h-44 overflow-hidden"
            style={{ background: contact.cardTheme.headerBackground }}
            aria-hidden
          />

          {/* Avatar overlaps header + body */}
          <div className="flex flex-col items-center -mt-[5rem] sm:-mt-[5.5rem] relative z-10 px-6">
            <div className="relative h-40 w-40 sm:h-44 sm:w-44 shrink-0 rounded-full border-[5px] border-white shadow-lg overflow-hidden bg-brand-light-2 ring-1 ring-black/5">
              <Image
                src={contact.imageSrc}
                alt={contact.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 160px, 176px"
                priority
              />
            </div>
          </div>

          <div className="px-6 pt-4 pb-7 text-center">
            <h1 className="text-xl sm:text-[1.35rem] font-black text-brand-navy tracking-tight">
              {contact.name}
            </h1>
            <p className="mt-1 text-sm font-semibold text-neutral-dark-gray leading-snug">
              {contact.title}
            </p>
            <p className="mt-0.5 text-sm text-gray-500">{contact.company}</p>

            <ul className="mt-6 space-y-3.5 text-left">
              <li>
                <a
                  href={`tel:${contact.phoneE164}`}
                  className="flex items-center gap-3 min-w-0 group rounded-xl -mx-1 px-1 py-0.5 transition-colors hover:bg-brand-light-3/80"
                >
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white shadow-sm"
                    style={{ backgroundColor: accent }}
                  >
                    <IconPhone className="h-[18px] w-[18px]" />
                  </span>
                  <span className="text-sm font-semibold text-gray-800 truncate group-hover:text-brand-primary transition-colors">
                    {contact.phoneDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 min-w-0 group rounded-xl -mx-1 px-1 py-0.5 transition-colors hover:bg-brand-light-3/80"
                >
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white shadow-sm"
                    style={{ backgroundColor: accent }}
                  >
                    <IconMail className="h-[18px] w-[18px]" />
                  </span>
                  <span className="text-sm font-semibold text-gray-800 break-all group-hover:text-brand-primary transition-colors">
                    {contact.email}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={contact.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 min-w-0 group rounded-xl -mx-1 px-1 py-0.5 transition-colors hover:bg-brand-light-3/80"
                >
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white shadow-sm"
                    style={{ backgroundColor: accent }}
                  >
                    <IconLink className="h-[18px] w-[18px]" />
                  </span>
                  <span className="text-sm font-semibold text-gray-800 break-all group-hover:text-brand-primary transition-colors">
                    {websiteLabel}
                  </span>
                </a>
              </li>
              {contact.linkedInUrl ? (
                <li>
                  <a
                    href={contact.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 min-w-0 group rounded-xl -mx-1 px-1 py-0.5 transition-colors hover:bg-brand-light-3/80"
                  >
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white shadow-sm"
                      style={{ backgroundColor: accent }}
                    >
                      <IconLinkedIn className="h-[17px] w-[17px]" />
                    </span>
                    <span className="text-sm font-semibold text-gray-800 truncate group-hover:text-brand-primary transition-colors">
                      LinkedIn profile
                    </span>
                  </a>
                </li>
              ) : null}
            </ul>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <a
                href={vcardHref}
                download
                className="flex w-full items-center justify-center gap-2.5 rounded-full px-5 py-3.5 text-sm font-black uppercase tracking-wide text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95 active:scale-[0.98]"
                style={{ backgroundColor: accent }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0"
                  aria-hidden
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <line x1="19" y1="8" x2="19" y2="14" />
                  <line x1="22" y1="11" x2="16" y2="11" />
                </svg>
                Add to contacts
              </a>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
