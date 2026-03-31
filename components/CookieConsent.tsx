"use client";

import Link from "next/link";
import { Cookie, X } from "phosphor-react";
import { useEffect, useState } from "react";
import {
  type CookieConsentValue,
  dispatchCookieConsentChange,
  getStoredConsent,
  setStoredConsent,
} from "@/lib/cookie-consent";

export function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [stored, setStored] = useState<CookieConsentValue | null>(null);

  useEffect(() => {
    setStored(getStoredConsent());
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const applyConsent = (value: CookieConsentValue) => {
    setStoredConsent(value);
    setStored(value);
    dispatchCookieConsentChange(value);
    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-[100] flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy text-white shadow-lg ring-2 ring-white/20 transition-transform hover:scale-105 hover:bg-brand-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
        aria-label="Cookie preferences"
        aria-expanded={open}
      >
        <Cookie className="h-6 w-6" weight="fill" aria-hidden />
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookie-dialog-title"
          className="fixed bottom-[5.25rem] right-5 z-[110] w-[min(calc(100vw-2.5rem),22rem)] rounded-[1.25rem] border border-gray-200/80 bg-white p-5 shadow-xl sm:p-6"
        >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-brand-navy"
              aria-label="Close"
            >
              <X className="h-5 w-5" weight="bold" />
            </button>

            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-light-3 text-brand-navy">
              <Cookie className="h-6 w-6" weight="fill" aria-hidden />
            </div>

            <h2
              id="cookie-dialog-title"
              className="text-h3 pr-8 font-black text-brand-navy"
            >
              Cookies on this site
            </h2>

            <p className="mt-3 text-body text-gray-600 leading-relaxed">
              We use cookies to run the site (essential) and, if you agree, to
              measure traffic and improve your experience with analytics. Read
              our full policy for details on categories and your choices.
            </p>

            <p className="mt-3 text-body-sm">
              <Link
                href="/cookie-policy"
                className="font-bold text-brand-primary underline underline-offset-2 hover:text-brand-deep"
                onClick={() => setOpen(false)}
              >
                Cookie Policy
              </Link>
            </p>

            {stored === "accepted" && (
              <p className="mt-3 text-sm font-medium text-green-700">
                You have already accepted optional analytics cookies. You can
                change your choice below.
              </p>
            )}

            <div className="mt-5 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => applyConsent("accepted")}
                className="w-full rounded-full bg-brand-navy px-5 py-2.5 text-sm font-black text-white transition-colors hover:bg-brand-primary"
              >
                Accept all cookies
              </button>
              <button
                type="button"
                onClick={() => applyConsent("declined")}
                className="w-full rounded-full border-2 border-gray-200 px-5 py-2.5 text-sm font-bold text-brand-navy transition-colors hover:border-brand-navy"
              >
                Essential only
              </button>
            </div>
        </div>
      )}
    </>
  );
}
