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
              <div key={item.service} className="grid gap-3 py-4 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-accentSoft">
                      {item.category}
                    </span>
                    <span className="text-xs uppercase tracking-[0.22em] text-muted">{item.duration}</span>
                  </div>
                  <p className="mt-3 text-sm text-white sm:text-base">{item.service}</p>
                </div>
                <span className="justify-self-start rounded-full bg-accent/15 px-3 py-1 font-medium text-accent sm:justify-self-end">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur">
          <h3 className="text-2xl font-semibold text-white">{pricing.highlightsTitle}</h3>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-muted">
            {pricing.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-accent" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
          <a
            href={pricing.cta.href}
            className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 font-medium text-slate-950 transition hover:opacity-90"
          >
            {pricing.cta.label}
          </a>
        </div>
      </div>
    </SectionShell>
  );
}
