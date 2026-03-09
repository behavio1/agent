import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/landing/shared";
import { siteContent } from "@/lib/content";

export function PricingSection() {
  const { pricing } = siteContent;

  return (
    <SectionShell id="cennik">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[2rem] border border-white/10 bg-panel p-8 shadow-soft">
          <SectionHeading eyebrow={pricing.eyebrow} title={pricing.title} description={pricing.description} />
          <div className="mt-8 divide-y divide-white/10">
            {pricing.items.map((item) => (
              <div key={item.service} className="flex items-center justify-between gap-6 py-4 text-sm sm:text-base">
                <span className="text-muted">{item.service}</span>
                <span className="rounded-full bg-accent/15 px-3 py-1 font-medium text-accent">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur">
          <h3 className="text-2xl font-semibold text-white">{pricing.highlightsTitle}</h3>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-muted">
            {pricing.highlights.map((highlight) => (
              <li key={highlight}>• {highlight}</li>
            ))}
          </ul>
          <a href={pricing.cta.href} className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 font-medium text-slate-950 transition hover:opacity-90">
            {pricing.cta.label}
          </a>
        </div>
      </div>
    </SectionShell>
  );
}
