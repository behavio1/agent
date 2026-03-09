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
          <SurfaceCard key={item.question} className="rounded-[1.5rem]">
            <h3 className="text-lg font-semibold text-white">{item.question}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{item.answer}</p>
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
