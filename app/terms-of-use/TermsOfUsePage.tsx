"use client";

import Link from "next/link";
import { FileCheck2, Handshake, Scale } from "lucide-react";
import LegalPage from "../cookie-policy/LegalPage";

const sections = [
  { title: "Use of Services", content: <p>NAVTELECOM provides telematics devices, software tools, and related services for business use. You agree to use our products and services only for lawful purposes and in accordance with these Terms.</p> },
  { title: "B2B Use", content: <p>Our products and services are intended for business use. If you use our products on behalf of a company, you confirm that you are authorized to act on its behalf.</p> },
  { title: "Devices and Functionality", content: <><p>NAVTELECOM devices provide telematics, connectivity, and diagnostic functionality. You acknowledge that:</p><ul><li>device performance may vary depending on environment, network conditions, and configuration</li><li>accuracy of data (including diagnostics and positioning) is not guaranteed</li><li>availability of services depends on third-party infrastructure (e.g., cellular networks, GNSS systems)</li></ul></> },
  { title: "No Monitoring Platform", content: <><p>NAVTELECOM does not operate a fleet monitoring platform. Devices may generate and store data locally or transmit it to third-party platforms selected by the customer. NAVTELECOM is not responsible for:</p><ul><li>data processing performed by third-party platforms</li><li>availability or functionality of such platforms</li><li>data loss or inaccuracies occurring outside NAVTELECOM systems</li></ul></> },
  { title: "Integrations", content: <><p>NAVTELECOM provides device protocols and technical support. Integration with third-party systems is the responsibility of the integrator or service provider. We are not responsible for:</p><ul><li>incorrect integrations</li><li>delays in integration</li><li>issues caused by third-party software</li></ul></> },
  { title: "Connectivity and SIM Cards", content: <><p>Device functionality may depend on SIM cards, mobile networks, and connectivity providers. NAVTELECOM is not responsible for:</p><ul><li>network coverage or availability</li><li>roaming restrictions</li><li>SIM card performance or billing</li><li>interruptions caused by telecom operators</li></ul></> },
  { title: "Support", content: <p>We provide technical support through available communication channels. While we aim to respond in a timely manner, we do not guarantee response times or resolution timelines.</p> },
  { title: "Limitation of Liability", content: <><p>To the maximum extent permitted by law, NAVTELECOM shall not be liable for:</p><ul><li>indirect, incidental, or consequential damages</li><li>loss of data, revenue, or business opportunities</li><li>damages caused by incorrect use of devices</li><li>failures related to third-party systems or networks</li></ul><p>Total liability, if any, is limited to the amount paid for the product or service.</p></> },
  { title: "Warranty", content: <p>Warranty terms are defined separately in our <Link href="/support/warranty">Warranty Policy</Link>.</p> },
  { title: "Changes", content: <p>We may update these Terms at any time. Continued use of our products or services means you accept the updated Terms.</p> },
  { title: "Contact", content: <p><a href="mailto:info@navtelecom-iot.com">info@navtelecom-iot.com</a></p> },
];

export default function TermsOfUsePage() {
  return (
    <LegalPage
      type="terms"
      eyebrow="TERMS FOR BUSINESS USE"
      title="Terms of Use"
      intro='These Terms of Use ("Terms") govern your use of NAVTELECOM products, services, website, and support channels.'
      note="By using our products or services, you agree to these Terms."
      icons={[FileCheck2, Handshake, Scale]}
      sections={sections}
    />
  );
}
