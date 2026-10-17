"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useState,
  type ReactNode,
} from "react";
import { useForm, type UseFormRegisterReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  newsletterSchema,
  projectInquirySchema,
  type NewsletterFormValues,
  type ProjectInquiryFormValues,
} from "@/lib/validation/form-schemas";
import { submitToBrevo } from "@/lib/formspree/send-form";
import "./lead-modal.css";

type DialogKind = "project" | "newsletter";

type SiteDialogApi = {
  openProject: () => void;
  openNewsletter: () => void;
};

const SiteDialogContext = createContext<SiteDialogApi | null>(null);

export function useSiteDialogs() {
  const api = useContext(SiteDialogContext);
  if (!api) {
    throw new Error("useSiteDialogs must be used within SiteDialogs");
  }
  return api;
}

const DISCUSS_PROJECT = /discuss\s+(your|a)\s+project/i;

export function SiteDialogs({ children }: { children: ReactNode }) {
  const [kind, setKind] = useState<DialogKind | null>(null);
  const titleId = useId();

  const openProject = useCallback(() => setKind("project"), []);
  const openNewsletter = useCallback(() => setKind("newsletter"), []);
  const close = useCallback(() => setKind(null), []);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const control = target.closest("a, button");
      if (!control || control.closest(".lead-modal, .lead-backdrop")) return;
      const label = (control.textContent || "").replace(/\s+/g, " ").trim();
      if (!DISCUSS_PROJECT.test(label)) return;
      event.preventDefault();
      event.stopPropagation();
      setKind("project");
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  useEffect(() => {
    if (!kind) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setKind(null);
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [kind]);

  return (
    <SiteDialogContext.Provider value={{ openProject, openNewsletter }}>
      {children}
      {kind ? (
        <div
          className="lead-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <div
            className={`lead-modal lead-modal-${kind === "project" ? "sales" : "newsletter"}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
          >
            <Intro kind={kind} titleId={titleId} />
            <div className="lead-modal-form-wrap">
              <button
                type="button"
                className="lead-modal-close"
                aria-label="Close"
                onClick={close}
              >
                <CloseIcon />
              </button>
              {kind === "project" ? (
                <ProjectForm key="project" onDone={close} />
              ) : (
                <NewsletterForm key="newsletter" />
              )}
            </div>
          </div>
        </div>
      ) : null}
    </SiteDialogContext.Provider>
  );
}

function Intro({ kind, titleId }: { kind: DialogKind; titleId: string }) {
  const newsletter = kind === "newsletter";
  return (
    <div className="lead-modal-intro">
      <div className="lead-modal-mark" aria-hidden>
        <span className="lead-modal-orbit lead-modal-orbit-a" />
        <span className="lead-modal-orbit lead-modal-orbit-b" />
        <img src="/home/navtelecom-mark.png" alt="" />
      </div>
      <div className="lead-modal-copy">
        <p className="lead-modal-eyebrow">
          {newsletter ? "Navtelecom newsletter" : "Contact sales"}
        </p>
        <h2 id={titleId}>
          {newsletter
            ? "Stay connected with Navtelecom."
            : "Let’s discuss your project."}
        </h2>
        <p>
          {newsletter
            ? "Receive company news, product announcements, software updates and selected industry insights."
            : "Tell us about your company and requirements. Our team will connect you with the right specialist."}
        </p>
      </div>
      <div className="lead-modal-topics" aria-label="Newsletter topics">
        <span>Company news</span>
        <span>Products</span>
        <span>Updates</span>
      </div>
      <p className="lead-modal-note">
        Commercial requests are sent directly to the Navtelecom team.
      </p>
    </div>
  );
}

function ProjectForm({ onDone }: { onDone: () => void }) {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ProjectInquiryFormValues>({
    resolver: zodResolver(projectInquirySchema),
    defaultValues: {
      company: "",
      fullName: "",
      email: "",
      phone: "",
      country: "",
      region: "",
      message: "",
      privacyConsent: false,
      updatesConsent: false,
    },
  });

  async function onSubmit(values: ProjectInquiryFormValues) {
    const details = [
      values.message,
      values.region ? `Region / state: ${values.region}` : "",
      `Product updates: ${values.updatesConsent ? "yes" : "no"}`,
      "Privacy consent: yes",
    ]
      .filter(Boolean)
      .join("\n");
    try {
      await submitToBrevo({
        formType: "Project inquiry",
        fullName: values.fullName,
        userEmail: values.email,
        company: values.company,
        mobile: values.phone || "—",
        country: values.country,
        message: details,
        marketingOptIn: values.updatesConsent,
      });
      setSent(true);
    } catch (error) {
      setError("root", {
        message:
          error instanceof Error
            ? error.message
            : "Could not send. Try again or email us directly.",
      });
    }
  }

  if (sent) {
    return (
      <div className="lead-success">
        <h3>Request sent</h3>
        <p>Thank you. Our team will connect you with the right specialist.</p>
        <button type="button" className="lead-submit" onClick={onDone}>
          Close
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      {errors.root?.message ? (
        <p className="lead-form-alert" role="alert">
          {errors.root.message}
        </p>
      ) : null}
      <div className="lead-modal-grid">
        <Field
          id="project-company"
          label="Company name"
          required
          placeholder="Your company"
          autoComplete="organization"
          error={errors.company?.message}
          registration={register("company")}
        />
        <Field
          id="project-name"
          label="Full name"
          required
          placeholder="Your full name"
          autoComplete="name"
          error={errors.fullName?.message}
          registration={register("fullName")}
        />
        <Field
          id="project-email"
          label="Email address"
          required
          type="email"
          placeholder="name@company.com"
          autoComplete="email"
          error={errors.email?.message}
          registration={register("email")}
        />
        <Field
          id="project-phone"
          label="Phone number"
          type="tel"
          placeholder="Include country code"
          autoComplete="tel"
          error={errors.phone?.message}
          registration={register("phone")}
        />
        <Field
          id="project-country"
          label="Country"
          required
          placeholder="Enter country"
          autoComplete="country-name"
          error={errors.country?.message}
          registration={register("country")}
        />
        <Field
          id="project-region"
          label="Region / state"
          placeholder="Region or state"
          autoComplete="address-level1"
          error={errors.region?.message}
          registration={register("region")}
        />
        <Field
          id="project-message"
          label="How can we help?"
          required
          multiline
          placeholder="Briefly describe your project, vehicles, devices or integration requirements."
          error={errors.message?.message}
          registration={register("message")}
        />
      </div>
      <div className="lead-consents">
        <Consent
          registration={register("privacyConsent")}
          invalid={!!errors.privacyConsent}
          error={errors.privacyConsent?.message}
        >
          I agree to the processing of my personal data in accordance with the{" "}
          <PrivacyLink />.
        </Consent>
        <Consent registration={register("updatesConsent")}>
          I would also like to receive Navtelecom firmware, software and product
          updates.
        </Consent>
      </div>
      <button type="submit" className="lead-submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Send request"} <ArrowIcon />
      </button>
    </form>
  );
}

function NewsletterForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      company: "",
      fullName: "",
      email: "",
      mobile: "",
      country: "",
      privacyConsent: false,
    },
  });

  async function onSubmit(values: NewsletterFormValues) {
    try {
      await submitToBrevo({
        formType: "Newsletter",
        fullName: values.fullName,
        userEmail: values.email,
        company: values.company,
        mobile: values.mobile,
        country: values.country,
        message: "Privacy consent: yes",
      });
      setSent(true);
    } catch (error) {
      setError("root", {
        message:
          error instanceof Error
            ? error.message
            : "Could not send. Try again or email us directly.",
      });
    }
  }

  if (sent) {
    return (
      <div className="lead-success">
        <h3>You are subscribed</h3>
        <p>
          You will receive company news, product announcements and selected
          updates. You can unsubscribe at any time.
        </p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      {errors.root?.message ? (
        <p className="lead-form-alert" role="alert">
          {errors.root.message}
        </p>
      ) : null}
      <div className="lead-modal-grid">
        <Field
          id="news-company"
          label="Company name"
          required
          placeholder="Your company"
          autoComplete="organization"
          error={errors.company?.message}
          registration={register("company")}
        />
        <Field
          id="news-name"
          label="Full name"
          required
          placeholder="Your full name"
          autoComplete="name"
          error={errors.fullName?.message}
          registration={register("fullName")}
        />
        <Field
          id="news-email"
          label="Email address"
          required
          type="email"
          placeholder="name@company.com"
          autoComplete="email"
          error={errors.email?.message}
          registration={register("email")}
        />
        <Field
          id="news-phone"
          label="Phone number"
          required
          type="tel"
          placeholder="Include country code"
          autoComplete="tel"
          error={errors.mobile?.message}
          registration={register("mobile")}
        />
        <Field
          id="news-country"
          label="Country"
          required
          wide
          placeholder="Enter country"
          autoComplete="country-name"
          error={errors.country?.message}
          registration={register("country")}
        />
      </div>
      <div className="lead-consents">
        <Consent
          registration={register("privacyConsent")}
          invalid={!!errors.privacyConsent}
          error={errors.privacyConsent?.message}
        >
          I agree to the processing of my personal data in accordance with the{" "}
          <PrivacyLink />.
        </Consent>
      </div>
      <p className="lead-subscribe-note">
        Updates may be sent by email or messaging services. You can unsubscribe
        at any time.
      </p>
      <button type="submit" className="lead-submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Subscribe"} <ArrowIcon />
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  placeholder,
  autoComplete,
  type = "text",
  multiline,
  wide,
  error,
  registration,
}: {
  id: string;
  label: string;
  required?: boolean;
  placeholder: string;
  autoComplete?: string;
  type?: string;
  multiline?: boolean;
  wide?: boolean;
  error?: string;
  registration: UseFormRegisterReturn;
}) {
  const errorId = error ? `${id}-error` : undefined;
  return (
    <div className={`lead-field${wide || multiline ? " lead-field-wide" : ""}${error ? " is-invalid" : ""}`}>
      <label htmlFor={id}>
        {label} {required ? <b>*</b> : null}
      </label>
      {multiline ? (
        <textarea
          id={id}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={errorId}
          {...registration}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={!!error}
          aria-describedby={errorId}
          {...registration}
        />
      )}
      {error ? (
        <p className="lead-field-error" id={errorId} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function Consent({
  children,
  registration,
  invalid,
  error,
}: {
  children: ReactNode;
  registration: UseFormRegisterReturn;
  invalid?: boolean;
  error?: string;
}) {
  const errorId = useId();
  return (
    <div>
      <label className={`lead-consent${invalid ? " is-invalid" : ""}`}>
        <input
          type="checkbox"
          aria-invalid={invalid || undefined}
          aria-describedby={error ? errorId : undefined}
          {...registration}
        />
        <span className="lead-modal-check" aria-hidden />
        <span>{children}</span>
      </label>
      {error ? (
        <p className="lead-field-error" id={errorId} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function PrivacyLink() {
  return (
    <a
      href="/privacy"
      target="_blank"
      rel="noreferrer"
      onMouseDown={(event) => event.preventDefault()}
    >
      Privacy Policy
    </a>
  );
}

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
      <path
        d="M2 2l10 10M12 2L2 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
      <path
        d="M3 8h10M9 4l4 4-4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
