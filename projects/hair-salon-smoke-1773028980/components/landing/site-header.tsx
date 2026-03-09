import { siteContent } from "@/lib/content";
import { SectionShell } from "@/components/landing/shared";

export function SiteHeader() {
  return (
    <SectionShell className="py-6">
      <header className="flex flex-col gap-4 rounded-full border border-white/10 bg-white/5 px-5 py-4 shadow-soft backdrop-blur md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">{siteContent.brand.name}</p>
        </div>
        <nav aria-label="Primary" className="flex flex-wrap items-center gap-4 text-sm text-muted">
          {siteContent.navigation.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
          <a href="#kontakt" className="rounded-full bg-accent px-5 py-2.5 font-medium text-slate-950 transition hover:opacity-90">
            Umów konsultację
          </a>
        </nav>
      </header>
    </SectionShell>
  );
}
