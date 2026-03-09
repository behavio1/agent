import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/landing/shared";
import { siteContent } from "@/lib/content";

export function GallerySection() {
  const { gallery } = siteContent;

  return (
    <SectionShell id="galeria">
      <SectionHeading eyebrow={gallery.eyebrow} title={gallery.title} description={gallery.description} />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3 xl:grid-rows-[minmax(280px,_1fr)]">
        {gallery.items.map((item) => (
          <article
            key={item.title}
            className={`group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-soft ${item.height}`}
          >
            <div className={`relative flex h-full min-h-[280px] flex-col justify-end bg-gradient-to-br p-5 sm:p-6 ${item.accent}`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_48%)] opacity-90 transition duration-500 group-hover:scale-105" />
              <div className="relative mt-auto rounded-[1.5rem] border border-white/15 bg-slate-950/55 p-5 backdrop-blur">
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/80">
                  {item.tag}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/75">{item.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
