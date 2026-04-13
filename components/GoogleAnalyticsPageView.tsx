"use client";

import { GA_MEASUREMENT_ID } from "@/lib/ga-measurement-id";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | Date,
      config?: Record<string, string | boolean>,
    ) => void;
  }
}

/**
 * Sends GA4 page_view on client-side navigations (App Router).
 * Initial load is handled by gtag config in root layout.
 */
export function GoogleAnalyticsPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const skipFirst = useRef(true);

  useEffect(() => {
    if (skipFirst.current) {
      skipFirst.current = false;
      console.log("[GA] GoogleAnalyticsPageView mounted. Skipping initial page view (handled by gtag config script).");
      return;
    }

    const search = searchParams?.toString();
    const path = search ? `${pathname}?${search}` : pathname;

    if (typeof window === "undefined") {
      console.warn("[GA] Page view skipped: window is undefined (SSR context).");
      return;
    }
    if (!window.gtag) {
      console.warn("[GA] Page view skipped: window.gtag is not defined. The gtag script may not have loaded yet.");
      return;
    }
    if (!GA_MEASUREMENT_ID) {
      console.warn("[GA] Page view skipped: GA_MEASUREMENT_ID is undefined.");
      return;
    }

    console.log("[GA] Sending page_view for path:", path);
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: path ?? '',
    });
  }, [pathname, searchParams]);

  return null;
}
