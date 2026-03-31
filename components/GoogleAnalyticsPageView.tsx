"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-8PTL0CXNY6";

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
      return;
    }

    const search = searchParams?.toString();
    const path = search ? `${pathname}?${search}` : pathname;

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", GA_ID, {
        page_path: path,
      });
    }
  }, [pathname, searchParams]);

  return null;
}
