import { siteContent } from "@/lib/content";
import { SectionShell } from "@/components/landing/shared";

export function SiteHeader() {
  return (
    <SectionShell className="sticky top-0 z-30 py-4">
      <header className="flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-background/75 px-5 py-4 shadow-soft backdrop-blur-xl md:flex-row md:items-center md:justify-between">
        <a href="#top" className="min-w-0 transition hover:opacity-90">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">{siteContent.brand.name}</p>
          <p className="mt-1 text-sm text-muted">{siteContent.brand.tagline}</p>
        </a>
        <nav aria-label="Primary" className="flex flex-wrap items-center gap-3 text-sm text-muted md:justify-end">
          {siteContent.navigation.map((item) => (
            <a key={item.label} href={item.href} className="rounded-full px-3 py-2 transition hover:bg-white/5 hover:text-white">
              {item.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="rounded-full bg-accent px-5 py-2.5 font-medium text-slate-950 shadow-glow transition hover:-translate-y-0.5 hover:opacity-90"
          >
            Umów konsultację
          </a>
        </nav>
      </header>
    </SectionShell>
  );
}
