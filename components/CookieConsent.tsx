"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cookie, X } from "phosphor-react";
import { useEffect, useState, useSyncExternalStore } from "react";
import "./cookie-consent.css";
import {
  type CookieConsentValue,
  dispatchCookieConsentChange,
  getStoredConsent,
  setStoredConsent,
  subscribeToCookieConsent,
} from "@/lib/cookie-consent";

const getServerConsentSnapshot = (): CookieConsentValue => "declined";

export function CookieConsent() {
  const pathname = usePathname();
  /** Business card pages (/contact/Denis_Shulkov, etc.) — no cookie chrome */
  const hideOnBusinessContactPages = pathname.startsWith("/contact/");

  const [open, setOpen] = useState(false);
  const [dismissedAutoPrompt, setDismissedAutoPrompt] = useState(false);
  const [mounted, setMounted] = useState(false);
  const stored = useSyncExternalStore(
    subscribeToCookieConsent,
    getStoredConsent,
    getServerConsentSnapshot,
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  // localStorage is unavailable during SSR. Keep the first client render
  // identical to the server HTML, then open the prompt after mount.
  const isNewVisitor = mounted && stored === null;
  const dialogOpen =
    !hideOnBusinessContactPages &&
    (open || (isNewVisitor && !dismissedAutoPrompt));

  useEffect(() => {
    if (!dialogOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setDismissedAutoPrompt(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [dialogOpen]);

  const applyConsent = (value: CookieConsentValue) => {
    setStoredConsent(value);
    dispatchCookieConsentChange(value);
    setOpen(false);
    setDismissedAutoPrompt(true);
  };

  const closeDialog = () => {
    setOpen(false);
    setDismissedAutoPrompt(true);
  };

  if (hideOnBusinessContactPages) {
    return null;
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="ck-fab"
        aria-label="Cookie preferences"
        aria-expanded={dialogOpen}
      >
        <Cookie className="h-6 w-6" weight="fill" aria-hidden />
      </button>

      {dialogOpen && (
        <div
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookie-dialog-title"
          className="ck-dialog"
        >
            <button
              type="button"
              onClick={closeDialog}
              className="ck-close"
              aria-label="Close"
            >
              <X className="h-5 w-5" weight="bold" />
            </button>

            <div className="ck-badge">
              <Cookie className="h-6 w-6" weight="fill" aria-hidden />
            </div>

            <p className="ck-eyebrow">PRIVACY</p>
            <h2 id="cookie-dialog-title" className="ck-title">
              Cookies on this site
            </h2>

            <p className="ck-text">
              We use cookies to run the site (essential) and, if you agree, to
              measure traffic and improve your experience with analytics. Read
              our full policy for details on categories and your choices.
            </p>

            <p className="ck-link-row">
              <Link
                href="/cookie-policy"
                className="ck-link"
                onClick={closeDialog}
              >
                Cookie Policy
              </Link>
            </p>

            {stored === "accepted" && (
              <p className="ck-note">
                You have already accepted optional analytics cookies. You can
                change your choice below.
              </p>
            )}

            <div className="ck-actions">
              <button
                type="button"
                onClick={() => applyConsent("accepted")}
                className="ck-btn ck-btn-primary"
              >
                Accept all cookies
              </button>
              <button
                type="button"
                onClick={() => applyConsent("declined")}
                className="ck-btn ck-btn-secondary"
              >
                Essential only
              </button>
            </div>
        </div>
      )}
    </>
  );
}
