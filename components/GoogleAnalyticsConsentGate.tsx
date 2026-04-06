"use client";

import Script from "next/script";
import { Suspense, useEffect, useState } from "react";
import { GoogleAnalyticsPageView } from "@/components/GoogleAnalyticsPageView";
import { GA_MEASUREMENT_ID } from "@/lib/ga-measurement-id";
import { getStoredConsent } from "@/lib/cookie-consent";

/**
 * Loads gtag only after the user accepts analytics cookies (see CookieConsent).
 *
 * Consent is applied after mount (useEffect) so the first client render matches
 * the server (no scripts). Reading localStorage during the first render would
 * diverge from SSR and can cause hydration failures on production.
 */
export function GoogleAnalyticsConsentGate() {
  const [allowAnalytics, setAllowAnalytics] = useState(false);

  useEffect(() => {
    const sync = () => {
      setAllowAnalytics(getStoredConsent() === "accepted");
    };
    sync();
    window.addEventListener("navtel:cookie-consent", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("navtel:cookie-consent", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  if (!GA_MEASUREMENT_ID) return null;
  if (!allowAnalytics) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      {/* Mirrors Google’s inline snippet after gtag/js loads */}
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
