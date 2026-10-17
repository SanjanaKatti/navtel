import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../../support/support-page.css";

export const metadata: Metadata = {
  title: "Subscription Confirmed | Navtelecom",
  description: "Your email address has been confirmed for Navtelecom updates.",
};

export default function SubscriptionConfirmedPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="support-page">
        <section className="support-hero">
          <div className="support-shell" style={{ padding: "100px 0" }}>
            <p className="support-eyebrow">SUBSCRIPTION CONFIRMED</p>
            <h1>You’re on the list</h1>
            <p className="support-lead">
              Your email address has been confirmed. You can now receive company news, product announcements, software updates and selected industry insights from Navtelecom.
            </p>
            <p className="support-lead">You can unsubscribe at any time using the link included in every newsletter.</p>
            <Link className="support-button support-button-primary" href="/">Return to Navtelecom</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
