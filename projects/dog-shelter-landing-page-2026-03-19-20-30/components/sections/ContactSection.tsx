import { ContactForm } from "@/components/ui/ContactForm";

export function ContactSection({ defaultDogId }: { defaultDogId?: string }) {
  return (
    <section id="contact" className="w-full py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
            Skontaktuj się z nami
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            Masz pytania dotyczące adopcji, wolontariatu lub wsparcia? 
            Napisz do nas – chętnie na wszystko odpowiemy.
          </p>
        </div>
        <ContactForm defaultDogId={defaultDogId} />
      </div>
    </section>
  );
}
