import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../../support/support-page.css";

export const metadata: Metadata = {
  title: "Unsubscribed | Navtelecom",
  description: "Your email address has been removed from the Navtelecom newsletter.",
};

export default function UnsubscribedPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="support-page">
        <section className="support-hero">
          <div className="support-shell" style={{ padding: "100px 0" }}>
            <p className="support-eyebrow">PREFERENCES UPDATED</p>
            <h1>You have been unsubscribed</h1>
            <p className="support-lead">
              Your email address has been removed from the Navtelecom newsletter mailing list. You will no longer receive newsletter emails from us.
            </p>
            <p className="support-lead">If you change your mind, you can subscribe again at any time using the newsletter form on our website.</p>
            <Link className="support-button support-button-primary" href="/">Return to Navtelecom</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
