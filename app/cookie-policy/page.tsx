import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LayoutContainer from "@/components/LayoutContainer";

export const metadata: Metadata = {
  title: "Cookie Policy | Navtelecom",
  description:
    "This Cookie Policy explains how NAVTELECOM uses cookies and similar technologies on our website.",
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />

      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-10 md:py-14 bg-gradient-to-b from-brand-light-3 to-white">
          <LayoutContainer>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-brand-navy">
                Cookie Policy
              </h1>
              <p className="mt-4 text-sm text-brand-navy/70">
                Last updated: March 19, 2026
              </p>
            </div>
          </LayoutContainer>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 bg-white">
          <LayoutContainer>
            <div className="max-w-3xl mx-auto space-y-10 text-body-lg leading-relaxed">
              <p>
                This Cookie Policy explains how NAVTELECOM uses cookies and
                similar technologies on our website.
              </p>

              <div className="space-y-8">
                <article>
                  <h2 className="text-xl font-bold text-brand-navy mb-3">
                    1. What are cookies?
                  </h2>
                  <p>
                    Cookies are small text files stored on your device when you
                    visit a website. They help websites function properly,
                    remember your preferences, and improve user experience.
                  </p>
                </article>

                <article>
                  <h2 className="text-xl font-bold text-brand-navy mb-3">
                    2. Types of cookies we use
                  </h2>

                  <h3 className="text-lg font-semibold text-brand-navy mt-6 mb-2">
                    Essential cookies
                  </h3>
                  <p>
                    These cookies are necessary for the website to function
                    properly. They enable core functionality such as security
                    and basic site features.
                  </p>

                  <h3 className="text-lg font-semibold text-brand-navy mt-6 mb-2">
                    Analytics cookies
                  </h3>
                  <p>
                    We use analytics tools (such as Google Analytics) to collect
                    information about how visitors use our website. This
                    includes:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                    <li>pages visited</li>
                    <li>time spent on pages</li>
                    <li>general usage behavior</li>
                  </ul>
                  <p className="mt-2">
                    This data is used to improve website performance and user
                    experience.
                  </p>

                  <h3 className="text-lg font-semibold text-brand-navy mt-6 mb-2">
                    Functional cookies
                  </h3>
                  <p>
                    These cookies allow the website to remember your preferences,
                    such as language or region.
                  </p>
                </article>

                <article>
                  <h2 className="text-xl font-bold text-brand-navy mb-3">
                    3. Third-party cookies
                  </h2>
                  <p>
                    Some cookies may be set by third-party services used on our
                    website, such as analytics providers. These services may
                    collect information about your interaction with our
                    website.
                  </p>
                </article>

                <article>
                  <h2 className="text-xl font-bold text-brand-navy mb-3">
                    4. How you can control cookies
                  </h2>
                  <p>
                    You can control or disable cookies through your browser
                    settings. Most browsers allow you to:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                    <li>block cookies</li>
                    <li>delete cookies</li>
                    <li>receive notifications before cookies are stored</li>
                  </ul>
                  <p className="mt-2">
                    Please note that disabling cookies may affect website
                    functionality.
                  </p>
                </article>

                <article>
                  <h2 className="text-xl font-bold text-brand-navy mb-3">
                    5. Changes
                  </h2>
                  <p>
                    We may update this Cookie Policy from time to time.
                  </p>
                </article>

                <article>
                  <h2 className="text-xl font-bold text-brand-navy mb-3">
                    6. Contact
                  </h2>
                  <p>
                    <a
                      href="mailto:info@navtelecom-iot.com"
                      className="text-brand-primary font-medium hover:underline"
                    >
                      info@navtelecom-iot.com
                    </a>
                  </p>
                </article>
              </div>
            </div>
          </LayoutContainer>
        </section>
      </main>

      <Footer />
    </div>
  );
}
