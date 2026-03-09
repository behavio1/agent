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
    </SectionShell>
  );
}
