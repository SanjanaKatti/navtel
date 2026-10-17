import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UseCasesBrowser from "@/components/use-cases/UseCasesBrowser";
import "./use-cases.css";

export const metadata: Metadata = {
  title: "Fleet Telematics Use Cases | Navtelecom",
  description:
    "See how connected vehicle data helps teams reduce waste, improve operations and make better decisions across industries, markets and Navtelecom devices.",
};

export default function UseCasesPage() {
  return (
    <div className="use-cases-page min-h-screen">
      <Navbar />
      <main>
        <section className="use-cases-hero">
          <div className="use-cases-shell use-cases-hero-copy">
            <p className="use-cases-eyebrow">NAVTELECOM · USE CASES</p>
            <h1>
              Different industries.
              <span>Practical solutions.</span>
            </h1>
            <p className="use-cases-lead">
              See how connected vehicle data helps teams reduce waste, improve operations and make better decisions — across industries, markets and Navtelecom devices.
            </p>
            <div className="use-cases-hero-actions">
              <a className="use-cases-button use-cases-button-primary" href="#case-studies">
                Explore use cases <ArrowRight aria-hidden="true" />
              </a>
              <Link className="use-cases-button use-cases-button-text" href="/contact">
                Discuss your project <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
        <UseCasesBrowser />
      </main>
      <Footer />
    </div>
  );
}
