import { siteContent } from "@/lib/content";

export function SiteFooter() {
  const address = siteContent.contact.details.find((detail) => detail.label === "Adres")?.value;
  const hours = siteContent.contact.details.find((detail) => detail.label === "Godziny")?.value;

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 sm:px-8 lg:grid-cols-[1.2fr_0.9fr_0.9fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">{siteContent.brand.name}</p>
          <p className="mt-2 text-sm text-muted">{siteContent.brand.tagline}</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-muted">{siteContent.footer.description}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">Nawigacja</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted">
            {siteContent.footer.links.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">Przydatne informacje</p>
          <div className="mt-4 space-y-3 text-sm leading-6 text-muted">
            {address ? <p>{address}</p> : null}
            {hours ? <p>{hours}</p> : null}
            <div className="flex flex-wrap gap-4 pt-1">
              {siteContent.footer.utilityLinks.map((link) => (
                <a key={link.label} href={link.href} className="transition hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
