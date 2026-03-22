import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LayoutContainer from "@/components/LayoutContainer";

export const metadata: Metadata = {
  title: "Terms of Use | Navtelecom",
  description:
    "Terms of Use governing your use of NAVTELECOM products, services, website, and support channels.",
};

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />

      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-10 md:py-14 bg-gradient-to-b from-brand-light-3 to-white">
          <LayoutContainer>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-brand-navy">
                Terms of Use
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
                These Terms of Use (&quot;Terms&quot;) govern your use of
                NAVTELECOM products, services, website, and support channels. By
                using our products or services, you agree to these Terms.
              </p>

              <div className="space-y-8">
                <article>
                  <h2 className="text-xl font-bold text-brand-navy mb-3">
                    1. Use of Services
                  </h2>
                  <p>
                    NAVTELECOM provides telematics devices, software tools, and
                    related services for business use. You agree to use our
                    products and services only for lawful purposes and in
                    accordance with these Terms.
                  </p>
                </article>

                <article>
                  <h2 className="text-xl font-bold text-brand-navy mb-3">
                    2. B2B Use
                  </h2>
                  <p>
                    Our products and services are intended for business use. If
                    you use our products on behalf of a company, you confirm
                    that you are authorized to act on its behalf.
                  </p>
                </article>

                <article>
                  <h2 className="text-xl font-bold text-brand-navy mb-3">
                    3. Devices and Functionality
                  </h2>
                  <p>
                    NAVTELECOM devices provide telematics, connectivity, and
                    diagnostic functionality. You acknowledge that:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                    <li>
                      device performance may vary depending on environment,
                      network conditions, and configuration
                    </li>
                    <li>
                      accuracy of data (including diagnostics and positioning)
                      is not guaranteed
                    </li>
                    <li>
                      availability of services depends on third-party
                      infrastructure (e.g., cellular networks, GNSS systems)
                    </li>
                  </ul>
                </article>

                <article>
                  <h2 className="text-xl font-bold text-brand-navy mb-3">
                    4. No Monitoring Platform
                  </h2>
                  <p>
                    NAVTELECOM does not operate a fleet monitoring platform.
                    Devices may generate and store data locally or transmit it
                    to third-party platforms selected by the customer.
                    NAVTELECOM is not responsible for:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                    <li>data processing performed by third-party platforms</li>
                    <li>availability or functionality of such platforms</li>
                    <li>
                      data loss or inaccuracies occurring outside NAVTELECOM
                      systems
                    </li>
                  </ul>
                </article>

                <article>
                  <h2 className="text-xl font-bold text-brand-navy mb-3">
                    5. Integrations
                  </h2>
                  <p>
                    NAVTELECOM provides device protocols and technical support.
                    Integration with third-party systems is the responsibility
                    of the integrator or service provider. We are not
                    responsible for:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                    <li>incorrect integrations</li>
                    <li>delays in integration</li>
                    <li>issues caused by third-party software</li>
                  </ul>
                </article>

                <article>
                  <h2 className="text-xl font-bold text-brand-navy mb-3">
                    6. Connectivity and SIM Cards
                  </h2>
                  <p>
                    Device functionality may depend on SIM cards, mobile
                    networks, and connectivity providers. NAVTELECOM is not
                    responsible for:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                    <li>network coverage or availability</li>
                    <li>roaming restrictions</li>
                    <li>SIM card performance or billing</li>
                    <li>interruptions caused by telecom operators</li>
                  </ul>
                </article>

                <article>
                  <h2 className="text-xl font-bold text-brand-navy mb-3">
                    7. Support
                  </h2>
                  <p>
                    We provide technical support through available communication
                    channels. While we aim to respond in a timely manner, we do
                    not guarantee response times or resolution timelines.
                  </p>
                </article>

                <article>
                  <h2 className="text-xl font-bold text-brand-navy mb-3">
                    8. Limitation of Liability
                  </h2>
                  <p>
                    To the maximum extent permitted by law, NAVTELECOM shall not
                    be liable for:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                    <li>indirect, incidental, or consequential damages</li>
                    <li>loss of data, revenue, or business opportunities</li>
                    <li>damages caused by incorrect use of devices</li>
                    <li>failures related to third-party systems or networks</li>
                  </ul>
                  <p className="mt-2">
                    Total liability, if any, is limited to the amount paid for
                    the product or service.
                  </p>
                </article>

                <article>
                  <h2 className="text-xl font-bold text-brand-navy mb-3">
                    9. Warranty
                  </h2>
                  <p>
                    Warranty terms are defined separately in our{" "}
                    <a
                      href="/support/warranty"
                      className="text-brand-primary font-medium hover:underline"
                    >
                      Warranty Policy
                    </a>
                    .
                  </p>
                </article>

                <article>
                  <h2 className="text-xl font-bold text-brand-navy mb-3">
                    10. Changes
                  </h2>
                  <p>
                    We may update these Terms at any time. Continued use of our
                    products or services means you accept the updated Terms.
                  </p>
                </article>

                <article>
                  <h2 className="text-xl font-bold text-brand-navy mb-3">
                    11. Contact
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
