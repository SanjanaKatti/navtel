/**
 * GA4 measurement ID (same as Google's gtag.js snippet:
 * gtag('config', 'G-8PTL0CXNY6')).
 * Override with NEXT_PUBLIC_GA_MEASUREMENT_ID in .env for staging, etc.
 */
// lib/ga-measurement-id.ts
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// DEBUG: log once at module load to confirm the env var was inlined at build time
if (typeof window !== "undefined") {
  console.log(
    "[GA] ga-measurement-id module loaded. GA_MEASUREMENT_ID =",
    GA_MEASUREMENT_ID ?? "(undefined — env var was NOT set at build time)",
  );
}
