"use client";

import React from "react";

/**
 * Stale/incomplete deploys on Next.js (the served HTML references chunk hashes
 * that aren't on disk on the server) surface to the browser as `ChunkLoadError`.
 * If we don't handle them, Next.js's internal `<Link>` click swallows the
 * error and navigation appears to do nothing — which is what users see when
 * the deployed all-devices bundle points at chunks the server no longer has.
 *
 * This boundary:
 *  1. Tracks the user's most recent internal link click so we know where they
 *     were trying to go.
 *  2. When a ChunkLoadError surfaces (either via React rendering, a window
 *     error, or an unhandled promise rejection), performs a full-page
 *     navigation to that intended URL. That bypasses the broken client-side
 *     chunk and loads the page via a fresh server request.
 *  3. Falls back to a full reload if we don't have a recent intended URL.
 *  4. Re-throws non-chunk errors so they aren't silently swallowed.
 */

const intendedNavigation: { href: string | null; timestamp: number } = {
  href: null,
  timestamp: 0,
};

const INTENT_TTL_MS = 10_000;

function isChunkLoadError(error: unknown): boolean {
  if (!error || typeof error !== "object") return false;
  const err = error as { name?: unknown; message?: unknown };
  if (err.name === "ChunkLoadError") return true;
  if (typeof err.message === "string") {
    return /loading chunk \S+ failed/i.test(err.message);
  }
  return false;
}

function recoverFromChunkError(): void {
  if (typeof window === "undefined") return;
  const { href, timestamp } = intendedNavigation;
  if (href && Date.now() - timestamp < INTENT_TTL_MS) {
    intendedNavigation.href = null;
    window.location.assign(href);
    return;
  }
  window.location.reload();
}

interface ChunkLoadErrorBoundaryState {
  error: unknown;
}

class ChunkLoadErrorBoundary extends React.Component<
  { children: React.ReactNode },
  ChunkLoadErrorBoundaryState
> {
  state: ChunkLoadErrorBoundaryState = { error: null };

  static getDerivedStateFromError(
    error: unknown,
  ): ChunkLoadErrorBoundaryState {
    return { error };
  }

  componentDidCatch(error: unknown): void {
    if (isChunkLoadError(error)) {
      recoverFromChunkError();
    }
  }

  render(): React.ReactNode {
    if (this.state.error) {
      if (isChunkLoadError(this.state.error)) {
        return (
          <div className="min-h-screen flex items-center justify-center text-sm text-gray-500">
            Loading the latest version…
          </div>
        );
      }
      throw this.state.error;
    }
    return this.props.children;
  }
}

function isInternalHref(href: string): boolean {
  if (!href) return false;
  if (href.startsWith("#")) return false;
  if (href.startsWith("mailto:") || href.startsWith("tel:")) return false;
  if (/^[a-z][a-z0-9+.-]*:/i.test(href) && !href.startsWith("/")) {
    try {
      const url = new URL(href, window.location.href);
      return url.origin === window.location.origin;
    } catch {
      return false;
    }
  }
  return true;
}

export function WithChunkLoadProtection({
  children,
}: {
  children: React.ReactNode;
}) {
  React.useEffect(() => {
    const captureInternalLinkClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor) return;
      if (anchor.target && anchor.target !== "" && anchor.target !== "_self") {
        return;
      }
      const href = anchor.getAttribute("href");
      if (!href || !isInternalHref(href)) return;
      intendedNavigation.href = anchor.href || href;
      intendedNavigation.timestamp = Date.now();
    };

    const handleError = (event: ErrorEvent) => {
      if (isChunkLoadError(event.error)) recoverFromChunkError();
    };

    const handleRejection = (event: PromiseRejectionEvent) => {
      if (isChunkLoadError(event.reason)) recoverFromChunkError();
    };

    document.addEventListener("click", captureInternalLinkClick, true);
    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleRejection);

    return () => {
      document.removeEventListener("click", captureInternalLinkClick, true);
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleRejection);
    };
  }, []);

  return <ChunkLoadErrorBoundary>{children}</ChunkLoadErrorBoundary>;
}
