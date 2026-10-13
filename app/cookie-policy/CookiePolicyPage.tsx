"use client";

import { Cookie, Settings2, SlidersHorizontal } from "lucide-react";
import LegalPage from "./LegalPage";

const sections = [
  { title: "What are cookies?", content: <p>Cookies are small text files stored on your device when you visit a website. They help websites function properly, remember your preferences, and improve user experience.</p> },
  { title: "Types of cookies we use", content: <><h3>Essential cookies</h3><p>These cookies are necessary for the website to function properly. They enable core functionality such as security and basic site features.</p><h3>Analytics cookies</h3><p>We use analytics tools (such as Google Analytics) to collect information about how visitors use our website. This includes:</p><ul><li>pages visited</li><li>time spent on pages</li><li>general usage behavior</li></ul><p>This data is used to improve website performance and user experience.</p><h3>Functional cookies</h3><p>These cookies allow the website to remember your preferences, such as language or region.</p></> },
  { title: "Third-party cookies", content: <p>Some cookies may be set by third-party services used on our website, such as analytics providers. These services may collect information about your interaction with our website.</p> },
  { title: "How you can control cookies", content: <><p>You can control or disable cookies through your browser settings. Most browsers allow you to:</p><ul><li>block cookies</li><li>delete cookies</li><li>receive notifications before cookies are stored</li></ul><p>Please note that disabling cookies may affect website functionality.</p></> },
  { title: "Changes", content: <p>We may update this Cookie Policy from time to time.</p> },
  { title: "Contact", content: <p><a href="mailto:info@navtelecom-iot.com">info@navtelecom-iot.com</a></p> },
];

export default function CookiePolicyPage() {
  return <LegalPage type="cookies" eyebrow="YOUR BROWSER, YOUR CHOICE" title="Cookie Policy" intro="This Cookie Policy explains how NAVTELECOM uses cookies and similar technologies on our website." note="A clear overview of the cookies we use and the controls available in your browser." icons={[Cookie, Settings2, SlidersHorizontal]} sections={sections} />;
}
