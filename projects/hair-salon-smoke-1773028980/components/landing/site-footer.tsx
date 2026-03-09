import { siteContent } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">{siteContent.brand.name}</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-muted">{siteContent.footer.description}</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-muted">
          {siteContent.footer.links.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
