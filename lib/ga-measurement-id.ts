/**
 * GA4 measurement ID (same as Google’s gtag.js snippet:
 * gtag('config', 'G-8PTL0CXNY6')).
 * Override with NEXT_PUBLIC_GA_MEASUREMENT_ID in .env for staging, etc.
 */
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-8PTL0CXNY6";
