import { SectionHeading } from "@/components/section-heading";
import { SectionShell, SurfaceCard } from "@/components/landing/shared";
import { siteContent } from "@/lib/content";

export function AboutSection() {
  const { about } = siteContent;

  return (
    <SectionShell id="o-salonie">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <SurfaceCard className="p-8">
          <SectionHeading eyebrow={about.eyebrow} title={about.title} description={about.description} />
        </SurfaceCard>
        <div className="grid gap-4 sm:grid-cols-2">
          {about.features.map((feature) => (
            <article key={feature.title} className="rounded-[1.5rem] border border-white/10 bg-panel p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
