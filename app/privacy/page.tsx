import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LayoutContainer from "@/components/LayoutContainer";

export const metadata: Metadata = {
  title: "Privacy Policy | Navtelecom",
  description:
    "This Privacy Policy explains how NAVTELECOM collects, uses, and protects personal data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />

      <main className="pt-20">
        {/* Hero — first 2 lines centered */}
        <section className="relative py-10 md:py-14 bg-gradient-to-b from-brand-light-3 to-white">
          <LayoutContainer>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-brand-navy">
                Privacy Policy
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
                This Privacy Policy explains how NAVTELECOM (&quot;we&quot;,
                &quot;us&quot;, &quot;our&quot;) collects, uses, and protects
                personal data.
              </p>
              <p>
                This policy applies to all users of our products, services,
                website, and support channels.
              </p>

              <div className="space-y-8">
                <article>
                  <h2 className="text-xl font-bold text-brand-navy mb-3">
                    1. Scope
                  </h2>
                  <p>This Privacy Policy applies to:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                    <li>our website</li>
                    <li>support and communication channels</li>
                    <li>warranty and service requests</li>
                    <li>
                      communication via email, messengers, or other channels
                    </li>
                    <li>use of our devices and software tools</li>
                  </ul>
                </article>

                <article>
                  <h2 className="text-xl font-bold text-brand-navy mb-3">
                    2. Data We Collect
                  </h2>

                  <h3 className="text-lg font-semibold text-brand-navy mt-6 mb-2">
                    2.1 Automatically collected data
                  </h3>
                  <p>
                    When you use our website or services, we may collect:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                    <li>IP address</li>
                    <li>device and browser information</li>
                    <li>usage data (pages visited, actions taken)</li>
                    <li>logs and diagnostic data</li>
                  </ul>
                  <p className="mt-2">
                    This data is used to improve performance, security, and user
                    experience.
                  </p>

                  <h3 className="text-lg font-semibold text-brand-navy mt-6 mb-2">
                    2.2 Data you provide
                  </h3>
                  <p>We may collect:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                    <li>name</li>
                    <li>company name</li>
                    <li>job title</li>
                    <li>email address</li>
                    <li>phone number</li>
                    <li>communication content (messages, tickets, emails)</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-brand-navy mt-6 mb-2">
                    2.3 Device, network and technical data
                  </h3>
                  <p>
                    When you use our products, mobile applications or request
                    support, we may collect:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                    <li>device identifiers (IMEI, serial number)</li>
                    <li>
                      SIM-related data (such as ICCID, IMSI, phone number,
                      operator information)
                    </li>
                    <li>configuration and firmware data</li>
                    <li>logs and diagnostics</li>
                    <li>application usage and crash data</li>
                  </ul>
                  <p className="mt-2">
                    We may also collect network and environment data, including:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                    <li>Wi-Fi access point information</li>
                    <li>
                      cellular network data (LBS / base station information)
                    </li>
                    <li>signal strength and connectivity data</li>
                  </ul>
                  <p className="mt-2">
                    In certain cases, such data may be used to improve
                    diagnostics, positioning accuracy, and overall performance of
                    our products and services.
                  </p>

                  <h3 className="text-lg font-semibold text-brand-navy mt-6 mb-2">
                    2.4 Data stored on devices
                  </h3>
                  <p>
                    Our devices may collect and store technical and telematics
                    data locally in device memory. This may include:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                    <li>positioning data</li>
                    <li>movement data</li>
                    <li>sensor and diagnostic data</li>
                  </ul>
                  <p className="mt-2">
                    Such data is stored on the device and is not transmitted to
                    NAVTELECOM servers by default. Data retention on the device
                    depends on its memory capacity and may be overwritten
                    automatically over time.
                  </p>
                  <p className="mt-2">
                    NAVTELECOM does not operate a fleet monitoring platform and
                    does not access or store such data unless explicitly required
                    for technical support or configuration purposes.
                    Responsibility for data collected and transmitted by
                    devices to third-party platforms lies with the respective
                    service provider or system used by the customer.
                  </p>
                </article>

                <article>
                  <h2 className="text-xl font-bold text-brand-navy mb-3">
                    3. How We Use Data
                  </h2>
                  <p>We use personal data to:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                    <li>provide and support our products and services</li>
                    <li>process support requests</li>
                    <li>manage business relationships</li>
                    <li>communicate with clients and partners</li>
                    <li>improve our products and systems</li>
                    <li>ensure security and prevent misuse</li>
                    <li>comply with legal obligations</li>
                  </ul>
                </article>

                <article>
                  <h2 className="text-xl font-bold text-brand-navy mb-3">
                    4. B2B Relationships
                  </h2>
                  <p>
                    Our services are primarily provided to businesses. If you act
                    as a representative of a company, your data is processed for:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                    <li>contract execution</li>
                    <li>communication and support</li>
                    <li>service delivery and billing</li>
                  </ul>
                </article>

                <article>
                  <h2 className="text-xl font-bold text-brand-navy mb-3">
                    5. Support and Communication
                  </h2>
                  <p>
                    You may contact support through available communication
                    channels, including messengers (such as Telegram), email,
                    and other channels. All messages are automatically routed to
                    our support system, where they are processed by our team.
                    Responses are sent back through the same communication
                    channel.
                  </p>
                  <p className="mt-2">
                    We may process the following data:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                    <li>name and contact details</li>
                    <li>message content</li>
                    <li>technical data required to resolve issues</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-brand-navy mt-6 mb-2">
                    Remote Assistance
                  </h3>
                  <p>
                    In some cases, we may request:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                    <li>device logs</li>
                    <li>configuration data</li>
                    <li>system access (only with your consent)</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-brand-navy mt-6 mb-2">
                    Call Recordings
                  </h3>
                  <p>
                    Support calls may be recorded for:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                    <li>quality control</li>
                    <li>training</li>
                    <li>issue resolution</li>
                  </ul>
                </article>

                <article>
                  <h2 className="text-xl font-bold text-brand-navy mb-3">
                    6. Data Sharing
                  </h2>
                  <p>We may share personal data with:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                    <li>
                      service providers (hosting, analytics, communication tools)
                    </li>
                    <li>logistics partners (for shipping and delivery)</li>
                    <li>legal authorities (if required by law)</li>
                  </ul>
                  <p className="mt-2">We do not sell personal data.</p>
                </article>

                <article>
                  <h2 className="text-xl font-bold text-brand-navy mb-3">
                    7. International Data Transfers
                  </h2>
                  <p>
                    Personal data may be processed in different countries where
                    our systems or service providers operate. We take reasonable
                    measures to ensure appropriate protection of such data.
                  </p>
                </article>

                <article>
                  <h2 className="text-xl font-bold text-brand-navy mb-3">
                    8. Data Retention
                  </h2>
                  <p>We retain data only as long as necessary:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                    <li>support data: up to 12 months</li>
                    <li>technical logs: limited period</li>
                    <li>marketing data: until you unsubscribe</li>
                  </ul>
                </article>

                <article>
                  <h2 className="text-xl font-bold text-brand-navy mb-3">
                    9. Your Rights
                  </h2>
                  <p>You may:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                    <li>request access to your data</li>
                    <li>request correction or deletion</li>
                    <li>withdraw consent</li>
                    <li>object to processing</li>
                    <li>request restriction of processing</li>
                  </ul>
                </article>

                <article>
                  <h2 className="text-xl font-bold text-brand-navy mb-3">
                    10. Changes to This Policy
                  </h2>
                  <p>
                    We may update this Privacy Policy from time to time. Updated
                    versions will be published on our website.
                  </p>
                </article>

                <article>
                  <h2 className="text-xl font-bold text-brand-navy mb-3">
                    11. Contact
                  </h2>
                  <p>
                    For privacy-related questions:{" "}
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
