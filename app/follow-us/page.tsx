import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../support/support-page.css";

export const metadata: Metadata = {
  title: "Follow Navtelecom — Website & Social Media",
  description: "Official Navtelecom links: website, LinkedIn and Instagram.",
  robots: { index: false, follow: true },
};

const channels = [
  { label: "Visit our website", detail: "navtelecom-iot.com", href: "/" },
  { label: "LinkedIn", detail: "News & company updates", href: "https://www.linkedin.com/company/navtelecom" },
  { label: "Instagram", detail: "Products, people & projects", href: "https://www.instagram.com/navtelecom" },
];

export default function FollowUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="support-page">
        <section className="support-hero">
          <div className="support-shell" style={{ maxWidth: 720, padding: "90px 0" }}>
            <p className="support-eyebrow">STAY CONNECTED</p>
            <h1>Follow Navtelecom</h1>
            <p className="support-lead">Company news, product updates and real-world applications.</p>
            <div className="support-path-grid" style={{ gridTemplateColumns: "1fr" }}>
              {channels.map((channel) => {
                const external = channel.href.startsWith("http");
                const inner = (
                  <>
                    <div>
                      <strong>{channel.label}</strong>
                      <small>{channel.detail}</small>
                    </div>
                  </>
                );
                return external ? (
                  <a key={channel.label} href={channel.href} target="_blank" rel="noreferrer">{inner}</a>
                ) : (
                  <Link key={channel.label} href={channel.href}>{inner}</Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
