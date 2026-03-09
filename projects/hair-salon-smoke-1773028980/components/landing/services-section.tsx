import { SectionHeading } from "@/components/section-heading";
import { SurfaceCard, SectionShell } from "@/components/landing/shared";
import { siteContent } from "@/lib/content";

export function ServicesSection() {
  const { services } = siteContent;

  return (
    <SectionShell id="uslugi">
      <SectionHeading eyebrow={services.eyebrow} title={services.title} description={services.description} />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.items.map((service) => (
          <SurfaceCard key={service.name}>
            <h3 className="text-xl font-semibold text-white">{service.name}</h3>
            <p className="mt-4 text-sm leading-7 text-muted">{service.description}</p>
            <p className="mt-4 text-sm font-medium text-accentSoft">{service.details}</p>
          </SurfaceCard>
        ))}
      </div>
    </SectionShell>
  );
}
