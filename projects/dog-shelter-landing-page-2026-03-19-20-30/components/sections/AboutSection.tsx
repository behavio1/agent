import { Card, CardContent } from "@/components/ui/card";
import { Info, Users, ShieldCheck, Home } from "lucide-react";

export function AboutSection() {
  const stats = [
    {
      icon: <Users className="w-8 h-8 mb-4 text-primary" />,
      title: "500+",
      description: "Szczęśliwych adopcji w zeszłym roku",
    },
    {
      icon: <Home className="w-8 h-8 mb-4 text-primary" />,
      title: "Ciepły Dom",
      description: "Zapewniamy schronienie i opiekę nad zwierzętami",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 mb-4 text-primary" />,
      title: "Bezpieczeństwo",
      description: "Każdy pies jest zaszczepiony i sprawdzony",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Info className="w-4 h-4" />
            <span>O nas</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Kim Jesteśmy?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nasze schronisko to miejsce pełne miłości i nadziei. Od ponad dekady z pasją ratujemy psy 
            i znajdujemy im nowe, bezpieczne domy. Wierzymy, że każde zwierzę zasługuje na szansę na lepsze życie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <Card key={idx} className="border-border bg-card shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                {stat.icon}
                <h3 className="text-2xl font-bold mb-2">{stat.title}</h3>
                <p className="text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
