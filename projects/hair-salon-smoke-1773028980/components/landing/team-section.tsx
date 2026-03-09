import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/landing/shared";
import { siteContent } from "@/lib/content";

export function TeamSection() {
  const { team } = siteContent;

  return (
    <SectionShell id="zespol">
      <SectionHeading eyebrow={team.eyebrow} title={team.title} description={team.description} />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {team.members.map((stylist) => (
          <article key={stylist.name} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-soft">
            <div className={`h-72 bg-gradient-to-br ${stylist.accent}`} />
            <div className="p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">{stylist.role}</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{stylist.name}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{stylist.bio}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
