import { SectionHeading } from "@/components/section-heading";
import { SectionShell, SurfaceCard } from "@/components/landing/shared";
import { siteContent } from "@/lib/content";

export function TestimonialsSection() {
  const { testimonials } = siteContent;

  return (
    <SectionShell id="opinie">
      <SectionHeading
        eyebrow={testimonials.eyebrow}
        title={testimonials.title}
        description={testimonials.description}
        align="center"
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {testimonials.items.map((testimonial, index) => (
          <SurfaceCard
            key={testimonial.author}
            className={`flex h-full flex-col justify-between border-accent/10 bg-gradient-to-b from-white/10 to-white/5 ${
              index % 2 === 0 ? "xl:-translate-y-3" : ""
            }`}
          >
            <blockquote className="flex h-full flex-col">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-accentSoft">
                  {testimonial.service}
                </span>
                <span className="text-sm tracking-[0.3em] text-accent" aria-label={`${testimonial.rating} na 5 gwiazdek`}>
                  {"★".repeat(testimonial.rating)}
                </span>
              </div>
              <p className="mt-6 text-lg leading-8 text-white">“{testimonial.quote}”</p>
              <footer className="mt-6 border-t border-white/10 pt-4 text-sm font-medium text-accentSoft">
                {testimonial.author}
              </footer>
            </blockquote>
          </SurfaceCard>
        ))}
      </div>
    </SectionShell>
  );
}
