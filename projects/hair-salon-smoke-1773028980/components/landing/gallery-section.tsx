import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/landing/shared";
import { siteContent } from "@/lib/content";

export function GallerySection() {
  const { gallery } = siteContent;

  return (
    <SectionShell id="galeria">
      <SectionHeading eyebrow={gallery.eyebrow} title={gallery.title} description={gallery.description} />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {gallery.items.map((item) => (
          <article key={item.title} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-soft">
            <div className={`h-72 bg-gradient-to-br ${item.accent}`} />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
