import { SectionHeading } from "@/components/section-heading";
import { SectionShell, SurfaceCard } from "@/components/landing/shared";
import { siteContent } from "@/lib/content";

export function ContactSection() {
  const { contact } = siteContent;

  return (
    <SectionShell id="kontakt">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <SurfaceCard className="p-8">
          <SectionHeading eyebrow={contact.eyebrow} title={contact.title} description={contact.description} />
          <dl className="mt-8 space-y-5 text-sm text-muted">
            {contact.details.map((detail) => {
              const href =
                detail.label === "Telefon"
                  ? `tel:${detail.value.replace(/\s+/g, "")}`
                  : detail.label === "Email"
                    ? `mailto:${detail.value}`
                    : null;

              return (
                <div key={detail.label}>
                  <dt className="font-semibold uppercase tracking-[0.25em] text-accent">{detail.label}</dt>
                  <dd className="mt-2 text-base text-white">
                    {href ? (
                      <a href={href} className="transition hover:text-accentSoft">
                        {detail.value}
                      </a>
                    ) : (
                      detail.value
                    )}
                  </dd>
                </div>
              );
            })}
          </dl>
          <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-muted">
            <p className="font-semibold uppercase tracking-[0.25em] text-accent">Szybka rezerwacja</p>
            <p className="mt-3">
              Wolisz kontakt od razu? Zadzwoń lub napisz email — wracamy z propozycją terminu, potwierdzeniem usługi i orientacyjnym czasem wizyty.
            </p>
          </div>
        </SurfaceCard>

        <div className="rounded-[2rem] border border-white/10 bg-panel p-8 shadow-soft">
          <h3 className="text-2xl font-semibold text-white">{contact.formTitle}</h3>
          <p className="mt-3 text-sm leading-7 text-muted">{contact.formDescription}</p>
          <form action="#kontakt" method="post" noValidate className="mt-8 grid gap-4">
            {contact.formFields.map((field) => {
              const inputId = `contact-${field.name}`;

              return (
                <label key={field.label} htmlFor={inputId} className="grid gap-2 text-sm text-muted">
                  {field.label}
                  {field.type === "textarea" ? (
                    <textarea
                      id={inputId}
                      name={field.name}
                      rows={field.rows}
                      placeholder={field.placeholder}
                      autoComplete={field.autoComplete}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-muted/70"
                    />
                  ) : (
                    <input
                      id={inputId}
                      name={field.name}
                      type={field.type ?? "text"}
                      placeholder={field.placeholder}
                      autoComplete={field.autoComplete}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-muted/70"
                    />
                  )}
                </label>
              );
            })}
            <p className="rounded-2xl border border-accent/20 bg-accent/10 px-4 py-3 text-sm leading-6 text-muted">
              Formularz jest gotowy do późniejszego podpięcia pod backend lub system rezerwacji. Już teraz jasno komunikuje cel: zebranie zapytania o termin i usługę.
            </p>
            <button type="submit" className="mt-2 inline-flex justify-center rounded-full bg-accent px-6 py-3 font-medium text-slate-950 transition hover:opacity-90">
              {contact.submitLabel}
            </button>
          </form>
        </div>
      </div>
    </SectionShell>
  );
}
