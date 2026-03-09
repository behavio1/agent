import { siteContent } from "@/lib/content";

export function HeroSection() {
  const { hero } = siteContent;

  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-8 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-28 lg:pt-12">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">{hero.eyebrow}</p>
        <h1 className="mt-5 text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">{hero.title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{hero.description}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href={hero.primaryCta.href} className="rounded-full bg-accent px-6 py-3 font-medium text-slate-950 shadow-glow transition hover:opacity-90">
            {hero.primaryCta.label}
          </a>
          <a href={hero.secondaryCta.href} className="rounded-full border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/5">
            {hero.secondaryCta.label}
          </a>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {hero.stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <p className="text-2xl font-semibold text-white">{stat.value}</p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-soft backdrop-blur">
        <div className="rounded-[1.5rem] bg-panel p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">{hero.availability.eyebrow}</p>
          <div className="mt-6 space-y-4">
            {hero.availability.slots.map((slot) => (
              <div key={slot.day} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-muted">{slot.day}</p>
                <p className="mt-2 text-lg font-semibold text-white">{slot.slot}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-accent/20 bg-accent/10 p-5">
            <p className="text-sm font-medium text-accentSoft">{hero.availability.calloutTitle}</p>
            <p className="mt-2 text-sm leading-6 text-muted">{hero.availability.calloutText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
