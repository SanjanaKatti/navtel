"use client";

import { Database, LockKeyhole, ShieldCheck } from "lucide-react";
import LegalPage from "../cookie-policy/LegalPage";

const sections = [
  { title: "Scope", content: <><p>This Privacy Policy applies to:</p><ul><li>our website</li><li>support and communication channels</li><li>warranty and service requests</li><li>communication via email, messengers, or other channels</li><li>use of our devices and software tools</li></ul></> },
  { title: "Data We Collect", content: <>
    <h3>2.1 Automatically collected data</h3><p>When you use our website or services, we may collect:</p><ul><li>IP address</li><li>device and browser information</li><li>usage data (pages visited, actions taken)</li><li>logs and diagnostic data</li></ul><p>This data is used to improve performance, security, and user experience.</p>
    <h3>2.2 Data you provide</h3><p>We may collect:</p><ul><li>name</li><li>company name</li><li>job title</li><li>email address</li><li>phone number</li><li>communication content (messages, tickets, emails)</li></ul>
    <h3>2.3 Device, network and technical data</h3><p>When you use our products, mobile applications or request support, we may collect:</p><ul><li>device identifiers (IMEI, serial number)</li><li>SIM-related data (such as ICCID, IMSI, phone number, operator information)</li><li>configuration and firmware data</li><li>logs and diagnostics</li><li>application usage and crash data</li></ul><p>We may also collect network and environment data, including:</p><ul><li>Wi-Fi access point information</li><li>cellular network data (LBS / base station information)</li><li>signal strength and connectivity data</li></ul><p>In certain cases, such data may be used to improve diagnostics, positioning accuracy, and overall performance of our products and services.</p>
    <h3>2.4 Data stored on devices</h3><p>Our devices may collect and store technical and telematics data locally in device memory. This may include:</p><ul><li>positioning data</li><li>movement data</li><li>sensor and diagnostic data</li></ul><p>Such data is stored on the device and is not transmitted to NAVTELECOM servers by default. Data retention on the device depends on its memory capacity and may be overwritten automatically over time.</p><p>NAVTELECOM does not operate a fleet monitoring platform and does not access or store such data unless explicitly required for technical support or configuration purposes. Responsibility for data collected and transmitted by devices to third-party platforms lies with the respective service provider or system used by the customer.</p>
  </> },
  { title: "How We Use Data", content: <><p>We use personal data to:</p><ul><li>provide and support our products and services</li><li>process support requests</li><li>manage business relationships</li><li>communicate with clients and partners</li><li>improve our products and systems</li><li>ensure security and prevent misuse</li><li>comply with legal obligations</li></ul></> },
  { title: "B2B Relationships", content: <><p>Our services are primarily provided to businesses. If you act as a representative of a company, your data is processed for:</p><ul><li>contract execution</li><li>communication and support</li><li>service delivery and billing</li></ul></> },
  { title: "Support and Communication", content: <><p>You may contact support through available communication channels, including messengers (such as Telegram), email, and other channels. All messages are automatically routed to our support system, where they are processed by our team. Responses are sent back through the same communication channel.</p><p>We may process the following data:</p><ul><li>name and contact details</li><li>message content</li><li>technical data required to resolve issues</li></ul><h3>Remote Assistance</h3><p>In some cases, we may request:</p><ul><li>device logs</li><li>configuration data</li><li>system access (only with your consent)</li></ul><h3>Call Recordings</h3><p>Support calls may be recorded for:</p><ul><li>quality control</li><li>training</li><li>issue resolution</li></ul></> },
  { title: "Data Sharing", content: <><p>We may share personal data with:</p><ul><li>service providers (hosting, analytics, communication tools)</li><li>logistics partners (for shipping and delivery)</li><li>legal authorities (if required by law)</li></ul><p>We do not sell personal data.</p></> },
  { title: "International Data Transfers", content: <p>Personal data may be processed in different countries where our systems or service providers operate. We take reasonable measures to ensure appropriate protection of such data.</p> },
  { title: "Data Retention", content: <><p>We retain data only as long as necessary:</p><ul><li>support data: up to 12 months</li><li>technical logs: limited period</li><li>marketing data: until you unsubscribe</li></ul></> },
  { title: "Your Rights", content: <><p>You may:</p><ul><li>request access to your data</li><li>request correction or deletion</li><li>withdraw consent</li><li>object to processing</li><li>request restriction of processing</li></ul></> },
  { title: "Changes to This Policy", content: <p>We may update this Privacy Policy from time to time. Updated versions will be published on our website.</p> },
  { title: "Contact", content: <p>For privacy-related questions: <a href="mailto:info@navtelecom-iot.com">info@navtelecom-iot.com</a></p> },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      type="privacy"
      eyebrow="PRIVACY & DATA"
      title="Privacy Policy"
      intro='This Privacy Policy explains how NAVTELECOM ("we", "us", "our") collects, uses, and protects personal data.'
      note="This policy applies to all users of our products, services, website, and support channels."
      icons={[ShieldCheck, Database, LockKeyhole]}
      sections={sections}
    />
  );
}
