import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../../support/support-page.css";

export const metadata: Metadata = {
  title: "Confirm Your Newsletter Subscription | Navtelecom",
  description: "Confirm your email address to start receiving Navtelecom updates.",
};

export default function SubscriptionConfirmPage() {
  return (
    <StatusPage
      eyebrow="ONE MORE STEP"
      title="Please confirm your subscription"
      text="We have sent a confirmation link to your email address. Open the message and confirm your address to start receiving Navtelecom updates."
      note="If the email has not arrived within 15 minutes, check your spam folder and make sure the address was entered correctly."
    />
  );
}

function StatusPage({
  eyebrow,
  title,
  text,
  note,
}: {
  eyebrow: string;
  title: string;
  text: string;
  note?: string;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="support-page">
        <section className="support-hero">
          <div className="support-shell" style={{ padding: "100px 0" }}>
            <p className="support-eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p className="support-lead">{text}</p>
            {note ? <p className="support-lead">{note}</p> : null}
            <Link className="support-button support-button-primary" href="/">
              Return to Navtelecom
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
