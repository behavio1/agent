import { SectionHeading } from "@/components/section-heading";
import { SectionShell, SurfaceCard } from "@/components/landing/shared";
import { siteContent } from "@/lib/content";

export function TestimonialsSection() {
  const { testimonials } = siteContent;

  return (
    <SectionShell id="opinie">
      <SectionHeading eyebrow={testimonials.eyebrow} title={testimonials.title} description={testimonials.description} align="center" />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {testimonials.items.map((testimonial) => (
          <SurfaceCard key={testimonial.author}>
            <blockquote>
              <p className="text-lg leading-8 text-white">“{testimonial.quote}”</p>
              <footer className="mt-6 text-sm font-medium text-accentSoft">{testimonial.author}</footer>
            </blockquote>
          </SurfaceCard>
        ))}
      </div>
    </SectionShell>
  );
}
