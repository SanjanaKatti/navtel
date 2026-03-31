export const COOKIE_CONSENT_KEY = "navtel_cookie_consent" as const;

export type CookieConsentValue = "accepted" | "declined";

export function getStoredConsent(): CookieConsentValue | null {
  if (typeof window === "undefined") return null;
  const v = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (v === "accepted" || v === "declined") return v;
  return null;
}

export function setStoredConsent(value: CookieConsentValue) {
  localStorage.setItem(COOKIE_CONSENT_KEY, value);
}

export function dispatchCookieConsentChange(value: CookieConsentValue) {
  window.dispatchEvent(
    new CustomEvent("navtel:cookie-consent", { detail: { status: value } }),
  );
}
