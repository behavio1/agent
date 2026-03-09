import { SectionHeading } from "@/components/section-heading";
import { SectionShell, SurfaceCard } from "@/components/landing/shared";
import { siteContent } from "@/lib/content";

export function FaqSection() {
  const { faq } = siteContent;

  return (
    <SectionShell id="faq">
      <SectionHeading eyebrow={faq.eyebrow} title={faq.title} description={faq.description} />
      <div className="mt-10 space-y-4">
        {faq.items.map((item) => (
          <SurfaceCard key={item.question} className="rounded-[1.5rem] p-0">
            <details className="group rounded-[1.5rem] p-6" open>
              <summary className="cursor-pointer list-none text-lg font-semibold text-white">
                <span className="flex items-center justify-between gap-4">
                  <span>{item.question}</span>
                  <span aria-hidden="true" className="text-accent transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 pr-8 text-sm leading-7 text-muted">{item.answer}</p>
            </details>
          </SurfaceCard>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 px-6 py-5 text-sm text-muted">
        <p>Nie znalazłaś odpowiedzi? Przejdź do sekcji kontaktu i napisz, jakiej usługi szukasz.</p>
        <a href="#kontakt" className="rounded-full bg-accent px-5 py-2.5 font-medium text-slate-950 transition hover:opacity-90">
          Skontaktuj się z nami
        </a>
      </div>
    </SectionShell>
  );
}
