import { SectionHeading } from "@/components/section-heading";
import { SurfaceCard, SectionShell } from "@/components/landing/shared";
import { siteContent } from "@/lib/content";

export function ServicesSection() {
  const { services } = siteContent;

  return (
    <SectionShell id="uslugi">
      <SectionHeading eyebrow={services.eyebrow} title={services.title} description={services.description} />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.items.map((service, index) => (
          <SurfaceCard key={service.name} className="flex h-full flex-col justify-between">
            <div>
              <div className="inline-flex rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-accentSoft">
                0{index + 1}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{service.name}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{service.description}</p>
            </div>
            <p className="mt-6 text-sm font-medium text-accentSoft">{service.details}</p>
          </SurfaceCard>
        ))}
      </div>
    </SectionShell>
  );
}
