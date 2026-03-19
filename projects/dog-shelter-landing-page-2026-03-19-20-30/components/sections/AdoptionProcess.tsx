import { CheckCircle2, FileText, Handshake, HeartHandshake } from "lucide-react";

export function AdoptionProcess() {
  const steps = [
    {
      icon: <FileText className="w-10 h-10 text-primary" />,
      title: "Ankieta Adopcyjna",
      description: "Wypełnij formularz kontaktowy z informacjami o Twoim doświadczeniu i warunkach.",
    },
    {
      icon: <Handshake className="w-10 h-10 text-primary" />,
      title: "Rozmowa i Spotkanie",
      description: "Skontaktujemy się z Tobą na wstępną rozmowę i zaprosimy na spacer z psem.",
    },
    {
      icon: <CheckCircle2 className="w-10 h-10 text-primary" />,
      title: "Wizyta Przedadopcyjna",
      description: "Wolontariusz odwiedzi Cię, by upewnić się, że warunki są bezpieczne dla psa.",
    },
    {
      icon: <HeartHandshake className="w-10 h-10 text-primary" />,
      title: "Podpisanie Umowy",
      description: "Po pozytywnej decyzji podpisujemy umowę adopcyjną, a Ty zabierasz psa do domu.",
    },
  ];

  return (
    <section id="adoption" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <CheckCircle2 className="w-4 h-4" />
            <span>Adopcja</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Proces Adopcyjny</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Naszym priorytetem jest dobro psów, dlatego proces adopcyjny składa się z kilku kroków, 
            aby upewnić się, że to właśnie Ty i pies jesteście dla siebie stworzeni.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">
          <div className="hidden lg:block absolute top-12 left-24 right-24 h-0.5 bg-muted-foreground/20 -z-10" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center relative z-10">
              <div className="w-24 h-24 rounded-full bg-background border-4 border-muted-foreground/10 flex items-center justify-center mb-6 shadow-sm">
                {step.icon}
              </div>
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm mb-4">
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
