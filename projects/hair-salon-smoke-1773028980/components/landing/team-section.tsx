import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/landing/shared";
import { siteContent } from "@/lib/content";

export function TeamSection() {
  const { team } = siteContent;

  return (
    <SectionShell id="zespol">
      <SectionHeading eyebrow={team.eyebrow} title={team.title} description={team.description} />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {team.members.map((stylist) => {
          const initials = stylist.name
            .split(" ")
            .map((part) => part[0])
            .join("")
            .slice(0, 2);

          return (
            <article
              key={stylist.name}
              className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-soft backdrop-blur"
            >
              <div className={`relative h-72 bg-gradient-to-br ${stylist.accent}`}>
                <div className="absolute inset-x-6 top-6 flex items-center justify-between">
                  <span className="rounded-full border border-white/20 bg-slate-950/35 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/80">
                    {stylist.role}
                  </span>
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-slate-950/40 text-lg font-semibold text-white">
                    {initials}
                  </span>
                </div>
              </div>
              <div className="space-y-4 p-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{stylist.name}</h3>
                  <p className="mt-2 text-sm font-medium text-accentSoft">{stylist.experience}</p>
                </div>
                <p className="text-sm leading-7 text-muted">{stylist.bio}</p>
                <div className="rounded-2xl border border-white/10 bg-background/60 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Specjalizacja</p>
                  <p className="mt-2 text-sm leading-6 text-white/80">{stylist.signature}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}
