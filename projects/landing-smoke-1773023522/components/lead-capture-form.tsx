"use client";

import { FormEvent, useMemo, useState } from "react";
import { trackEvent } from "@/components/analytics";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function LeadCaptureForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState(false);

  const isValid = useMemo(() => EMAIL_RE.test(email.trim()), [email]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTouched(true);

    if (!isValid) {
      return;
    }

    trackEvent("email_submit", { email });
    setSubmitted(true);
    setEmail("");
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-6 text-left shadow-lg shadow-emerald-950/20">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">Thanks for your interest</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">You're on the early access list.</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          We&apos;ll share launch updates and invite you to test the product before it goes live.
        </p>
      </div>
    );
  }

  return (
    <form className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 shadow-2xl shadow-slate-950/50" onSubmit={handleSubmit} noValidate>
      <label className="block text-sm font-medium text-slate-200" htmlFor="email">
        Get early access
      </label>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row">
        <input
          id="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          value={email}
          onBlur={() => setTouched(true)}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          aria-describedby="email-help"
          aria-invalid={touched && !isValid}
          className="min-h-12 flex-1 rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-base text-white placeholder:text-slate-400"
        />
        <button
          type="submit"
          onClick={() => trackEvent("cta_click", { placement: "hero_form" })}
          className="min-h-12 rounded-xl bg-accent px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-sky-300"
        >
          Notify me
        </button>
      </div>
      <p id="email-help" className="mt-3 text-sm text-slate-400">
        Join the waitlist to validate demand and shape the roadmap.
      </p>
      {touched && !isValid ? (
        <p className="mt-2 text-sm text-rose-300">Please enter a valid email address.</p>
      ) : null}
    </form>
  );
}
