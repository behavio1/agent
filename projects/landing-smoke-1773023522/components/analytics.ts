export type AnalyticsEvent = "cta_click" | "email_submit";

export function trackEvent(event: AnalyticsEvent, payload: Record<string, string> = {}) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("landing-analytics", { detail: { event, payload } }));
  }

  console.info("analytics", { event, payload });
}
