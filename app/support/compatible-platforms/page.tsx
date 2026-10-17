import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../support-page.css";

export const metadata: Metadata = {
  title: "Compatible Software Platforms | Navtelecom",
  description:
    "Explore software platforms with confirmed Navtelecom support and find the right connection for your fleet.",
};

const platforms = [
  {
    name: "Wialon",
    text: "Fleet management software for vehicle tracking, fuel monitoring and day-to-day fleet operations.",
    href: "https://wialon.com/",
    logo: "/platforms/wialon-BTDRYXJW.png",
  },
  {
    name: "flespi",
    text: "A telematics backend for collecting device data, normalizing messages and connecting applications through APIs.",
    href: "https://flespi.com/",
    logo: "/platforms/flespi-Bs5KZn4t.svg",
  },
  {
    name: "GPS Trace",
    text: "GPS tracking applications for keeping track of vehicles and assets, for individuals and businesses.",
    href: "https://gps-trace.com/",
    logo: "/platforms/gpstrace-BayphGf5.png",
  },
  {
    name: "Uffizio",
    text: "Telematics software for vehicle and asset tracking, fleet management and specialized industry operations.",
    href: "https://uffizio.com/",
    logo: "/platforms/uffizio-DNmh-QBB.svg",
  },
  {
    name: "Omnicomm Online",
    text: "Fleet management and fuel monitoring software for tracking vehicles and understanding fuel use.",
    href: "https://omnicomm-world.com/",
    logo: "/platforms/omnicomm-official-DlgT3Hp7.svg",
  },
  {
    name: "Pilot",
    text: "An IoT and telematics platform for monitoring vehicles, managing fleets and analyzing operational data.",
    href: "https://pilot-telematics.com/",
    logo: "/platforms/pilot-FdRkR8_b.png",
  },
  {
    name: "GPSWOX",
    text: "GPS tracking software with real-time monitoring and white-label solutions for tracking service providers.",
    href: "https://www.gpswox.com/",
    logo: "/platforms/gpswox-0zxB7fuL.png",
  },
  {
    name: "Navixy",
    text: "A telematics platform for GPS tracking, fleet management and building connected business solutions.",
    href: "https://www.navixy.com/",
    logo: "/platforms/navixy-B2ZVlh1P.png",
  },
];

export default function CompatiblePlatformsPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />
      <div className="support-page">
        <main>
          <section className="support-hero">
            <div className="support-grid-pattern" aria-hidden="true" />
            <div className="support-shell" style={{ position: "relative", zIndex: 1, padding: "80px 0" }}>
              <p className="support-eyebrow">NAVTELECOM COMPATIBLE PLATFORMS</p>
              <h1>Your devices. Your platform.</h1>
              <p className="support-lead">
                Explore software platforms with confirmed Navtelecom support and find the right connection for your fleet.
              </p>
              <div className="support-hero-actions">
                <a className="support-button support-button-primary" href="#platforms">
                  Explore platforms <ArrowRight aria-hidden="true" />
                </a>
                <Link className="support-text-link" href="/support/software-developers">
                  Building your own platform? <ArrowRight aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>

          <section className="support-resources-section" id="platforms">
            <div className="support-shell">
              <div className="support-heading">
                <p className="support-eyebrow">CONNECTED ECOSYSTEM</p>
                <h2>Find your connection</h2>
                <p>Start with an existing platform or explore integration resources for your own software.</p>
              </div>
              <div className="support-resource-grid">
                {platforms.map((platform) => (
                  <a key={platform.name} href={platform.href} target="_blank" rel="noreferrer">
                    <div className="support-resource-top">
                      <img src={platform.logo} alt="" style={{ height: 36, width: "auto", maxWidth: 140, objectFit: "contain" }} />
                      <ArrowUpRight aria-hidden="true" />
                    </div>
                    <h3>{platform.name}</h3>
                    <p>{platform.text}</p>
                    <span className="support-resource-link">Visit website <ArrowRight aria-hidden="true" /></span>
                  </a>
                ))}
              </div>
              <p className="support-lead">
                Supported models and available features vary by platform. <Link href="/contact">Contact us</Link> for help with your integration.
              </p>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
