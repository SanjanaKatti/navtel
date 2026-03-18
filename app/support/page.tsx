import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LayoutContainer from "@/components/LayoutContainer";

const supportCards = [
  {
    title: "Knowledge Base",
    description:
      "Browse setup guides, commands, integration docs, and troubleshooting articles.",
    href: "/support/knowledge-base",
    cta: "Open Knowledge Base",
  },
  {
    title: "Telegram Support Bot",
    description:
      "Get quick guided help, diagnostic prompts, and direct support workflows on Telegram.",
    href: "#",
    cta: "Open Telegram Bot",
  },
  {
    title: "Warranty",
    description:
      "Check coverage details, service terms, and claim support for your device models.",
    href: "/support/warranty",
    cta: "View Warranty",
  },
  {
    title: "FAQ",
    description:
      "Find quick answers to common questions about devices, configuration, integration and installation.",
    href: "/support/faq",
    cta: "Open FAQ",
  },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans antialiased text-brand-navy">
      <Navbar />

      <main className="pt-20">
        <section className="py-16 md:py-20 bg-brand-light-3 border-b border-gray-200">
          <LayoutContainer>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-base md:text-lg font-bold uppercase tracking-[0.2em] text-[#28398c] mb-4">
                SUPPORT
              </p>
              <h1 className="text-h1 mb-5">How Can We Help You?</h1>
              <p className="text-body-lg">
                Access product resources, chat assistance, and warranty support
                from one place.
              </p>
            </div>
          </LayoutContainer>
        </section>

        <section className="py-16 md:py-20 bg-[#F8FAFC]">
          <LayoutContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8">
              {supportCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-white rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 p-8 flex flex-col"
                >
                  <h2 className="text-h3 mb-3 text-[#28398c]">{card.title}</h2>
                  <p className="text-body mb-8 flex-1">{card.description}</p>
                  <Link
                    href={card.href}
                    className="inline-flex items-center justify-center bg-brand-navy text-white rounded-full px-8 py-3 font-bold text-sm"
                  >
                    {card.cta}
                  </Link>
                </div>
              ))}
            </div>
          </LayoutContainer>
        </section>
      </main>

      <Footer />
    </div>
  );
}
