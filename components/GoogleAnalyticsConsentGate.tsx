"use client";

import Script from "next/script";
import { Suspense, useEffect, useState } from "react";
import { GoogleAnalyticsPageView } from "@/components/GoogleAnalyticsPageView";
import {
  type CookieConsentValue,
  getStoredConsent,
} from "@/lib/cookie-consent";

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-8PTL0CXNY6";

/**
 * Loads gtag only after the user accepts analytics cookies (see CookieConsent).
 */
export function GoogleAnalyticsConsentGate() {
  const [allowAnalytics, setAllowAnalytics] = useState(false);

  useEffect(() => {
    const sync = () => setAllowAnalytics(getStoredConsent() === "accepted");

    sync();

    const onChange = (e: Event) => {
      const ce = e as CustomEvent<{ status: CookieConsentValue }>;
      setAllowAnalytics(ce.detail?.status === "accepted");
    };

    window.addEventListener("navtel:cookie-consent", onChange);
    window.addEventListener("storage", sync);

    return () => {
      window.removeEventListener("navtel:cookie-consent", onChange);
      window.removeEventListener("storage", sync);
    };
  }, []);

  if (!allowAnalytics) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
      <Suspense fallback={null}>
        <GoogleAnalyticsPageView />
      </Suspense>
    </>
  );
}
