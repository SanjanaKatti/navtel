import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getBusinessContactBySlug,
  getBusinessContactSlugs,
} from "@/lib/business-contacts";

type Props = { params: Promise<{ slug: string }> };

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

  return (
    <div className="min-h-dvh min-h-screen bg-brand-light-3 font-sans antialiased text-brand-navy overflow-x-hidden">
      <main className="flex flex-col items-center min-h-dvh pb-[max(3rem,env(safe-area-inset-bottom,0px))]">
        <div
          className="w-full max-w-3xl px-4 pt-[max(2rem,env(safe-area-inset-top,0px))] pb-6 sm:px-6 sm:pt-10 sm:pb-8 md:px-8 md:pt-12 md:pb-10 lg:px-10 lg:pt-14"
        >
          <div className="relative w-full p-6 sm:p-8 md:p-10 lg:p-12 bg-white rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] shadow-2xl shadow-brand-navy/10 border border-white">
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-8 md:gap-10 items-center sm:items-start">
              <div className="relative h-64 w-48 sm:h-80 sm:w-56 md:h-96 md:w-64 flex-shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden bg-brand-light-3 ring-2 ring-brand-light-1">
                <Image
                  src={contact.imageSrc}
                  alt={contact.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
                  priority
                />
              </div>

              <div className="flex-1 text-center sm:text-left min-w-0">
                <h1 className="text-h2 mb-1">{contact.name}</h1>
                <p className="text-brand-primary font-bold text-lg mb-1">
                  {contact.title}
                </p>
                <p className="text-body text-gray-600 mb-6">{contact.company}</p>

                <ul className="space-y-3 text-body text-left max-w-md mx-auto sm:mx-0">
                  <li>
                    <span className="text-label block mb-0.5">Phone</span>
                    <a
                      href={`tel:${contact.phoneE164}`}
                      className="text-brand-navy font-semibold hover:text-brand-primary transition-colors"
                    >
                      {contact.phoneDisplay}
                    </a>
                  </li>
                  <li>
                    <span className="text-label block mb-0.5">Email</span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-brand-navy font-semibold hover:text-brand-primary transition-colors break-all"
                    >
                      {contact.email}
                    </a>
                  </li>
                  <li>
                    <span className="text-label block mb-0.5">Website</span>
                    <a
                      href={contact.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-navy font-semibold hover:text-brand-primary transition-colors break-all"
                    >
                      {contact.websiteUrl.replace(/^https?:\/\//, "")}
                    </a>
                  </li>
                  {contact.linkedInUrl ? (
                    <li>
                      <span className="text-label block mb-0.5">LinkedIn</span>
                      <a
                        href={contact.linkedInUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-navy font-semibold hover:text-brand-primary transition-colors break-all"
                      >
                        Profile
                      </a>
                    </li>
                  ) : null}
                </ul>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-100">
              <a
                href={vcardHref}
                download
                className="flex w-full sm:w-auto sm:inline-flex items-center justify-center gap-3 rounded-full bg-brand-navy px-8 py-4 text-base font-black uppercase text-white shadow-xl shadow-brand-navy/20 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-primary active:scale-95"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0"
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
        </div>
      </main>
    </div>
  );
}
