"use client";

import React from "react";

/**
 * Stale/incomplete deploys on Next.js surface to the browser as `ChunkLoadError`
 * (the HTML references chunk hashes the server no longer has, or the server
 * is returning 5xx for them). If we don't handle those, Next.js's internal
 * `<Link>` click swallows the error and navigation appears to do nothing.
 *
 * This boundary:
 *  1. Tracks the user's most recent internal link click so we know where they
 *     were trying to go.
 *  2. On a ChunkLoadError (via React rendering, window error, or unhandled
 *     rejection) performs a one-shot full-page navigation to the intended
 *     URL. That bypasses the broken client-side chunk and lets the server
 *     re-serve the page from scratch.
 *  3. Guards against infinite recovery loops when the destination itself is
 *     broken (e.g. the destination's own chunk is returning 5xx). A second
 *     chunk failure for the same URL within a short window renders a
 *     user-visible error instead of reloading again.
 *  4. Re-throws non-chunk errors so they aren't silently swallowed.
 */

const INTENT_TTL_MS = 10_000;
const RECOVERY_COOLDOWN_MS = 30_000;
const RECOVERY_STORAGE_KEY = "__chunkRecovery";

const intendedNavigation: { href: string | null; timestamp: number } = {
  href: null,
  timestamp: 0,
};

function isChunkLoadError(error: unknown): boolean {
  if (!error || typeof error !== "object") return false;
  const err = error as { name?: unknown; message?: unknown };
  if (err.name === "ChunkLoadError") return true;
  if (typeof err.message === "string") {
    return /loading chunk \S+ failed/i.test(err.message);
  }
  return false;
}

function readRecoveryRecord(): { url: string; timestamp: number } | null {
  try {
    const raw = sessionStorage.getItem(RECOVERY_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { url?: unknown; timestamp?: unknown };
    if (typeof parsed.url !== "string" || typeof parsed.timestamp !== "number") {
      return null;
    }
    return { url: parsed.url, timestamp: parsed.timestamp };
  } catch {
    return null;
  }
}

function writeRecoveryRecord(url: string): void {
  try {
    sessionStorage.setItem(
      RECOVERY_STORAGE_KEY,
      JSON.stringify({ url, timestamp: Date.now() }),
    );
  } catch {
    // ignore storage failures (private mode, quota, etc.)
  }
}

function clearRecoveryRecord(): void {
  try {
    sessionStorage.removeItem(RECOVERY_STORAGE_KEY);
  } catch {
    // ignore
  }
}

type RecoveryResult = "navigated" | "loop-detected";

function recoverFromChunkError(): RecoveryResult {
  if (typeof window === "undefined") return "loop-detected";

  const { href: intendedHref, timestamp } = intendedNavigation;
  const currentUrl = window.location.href;
  const target =
    intendedHref && Date.now() - timestamp < INTENT_TTL_MS
      ? new URL(intendedHref, currentUrl).href
      : currentUrl;

  const previous = readRecoveryRecord();
  if (
    previous &&
    previous.url === target &&
    Date.now() - previous.timestamp < RECOVERY_COOLDOWN_MS
  ) {
    return "loop-detected";
  }

  writeRecoveryRecord(target);
  intendedNavigation.href = null;
  intendedNavigation.timestamp = 0;
  window.location.assign(target);
  return "navigated";
}

interface ChunkLoadErrorBoundaryState {
  error: unknown;
  loopDetected: boolean;
}

class ChunkLoadErrorBoundary extends React.Component<
  { children: React.ReactNode },
  ChunkLoadErrorBoundaryState
> {
  state: ChunkLoadErrorBoundaryState = { error: null, loopDetected: false };

  static getDerivedStateFromError(
    error: unknown,
  ): ChunkLoadErrorBoundaryState {
    return { error, loopDetected: false };
  }

  componentDidCatch(error: unknown): void {
    if (isChunkLoadError(error)) {
      const result = recoverFromChunkError();
      if (result === "loop-detected") {
        this.setState({ loopDetected: true });
      }
    }
  }

  render(): React.ReactNode {
    if (this.state.error) {
      if (isChunkLoadError(this.state.error)) {
        if (this.state.loopDetected) {
          return <ChunkLoadFallback />;
        }
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

function ChunkLoadFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-md text-center space-y-4">
        <h1 className="text-xl font-bold text-brand-navy">
          This page is temporarily unavailable
        </h1>
        <p className="text-sm text-gray-500">
          We&rsquo;re updating the site. Please try again in a few moments.
        </p>
        <button
          type="button"
          onClick={() => {
            try {
              sessionStorage.removeItem(RECOVERY_STORAGE_KEY);
            } catch {
              // ignore
            }
            window.location.reload();
          }}
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-brand-navy text-white font-bold text-sm hover:bg-brand-primary transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
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
    const previous = readRecoveryRecord();
    if (
      previous &&
      Date.now() - previous.timestamp > RECOVERY_COOLDOWN_MS * 2
    ) {
      clearRecoveryRecord();
    }

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
      if (isChunkLoadError(event.error)) {
        recoverFromChunkError();
      }
    };

    const handleRejection = (event: PromiseRejectionEvent) => {
      if (isChunkLoadError(event.reason)) {
        recoverFromChunkError();
      }
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
