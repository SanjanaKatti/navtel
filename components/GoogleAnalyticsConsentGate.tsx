"use client";

import Script from "next/script";
import { Suspense, useSyncExternalStore } from "react";
import { GoogleAnalyticsPageView } from "@/components/GoogleAnalyticsPageView";
import { getStoredConsent } from "@/lib/cookie-consent";

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-8PTL0CXNY6";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("navtel:cookie-consent", onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener("navtel:cookie-consent", onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

function getSnapshot(): boolean {
  return getStoredConsent() === "accepted";
}

function getServerSnapshot(): boolean {
  return false;
}

/**
 * Loads gtag only after the user accepts analytics cookies (see CookieConsent).
 * Uses useSyncExternalStore so already-accepted consent is picked up on the
 * first client render without waiting for useEffect.
 */
export function GoogleAnalyticsConsentGate() {
  const allowAnalytics = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

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
