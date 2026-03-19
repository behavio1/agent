import { Banknote, HandHeart, Users, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function SupportSection() {
  return (
    <section id="support" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Heart className="w-4 h-4" />
            <span>Wsparcie</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Jak Możesz Nam Pomóc?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Schronisko funkcjonuje dzięki darowiznom i wsparciu osób o wielkim sercu. 
            Nawet najmniejsza pomoc znaczy dla nas i naszych zwierząt bardzo wiele.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="flex flex-col h-full border-border bg-card shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="text-center pb-2">
              <Banknote className="w-12 h-12 mx-auto text-primary mb-4" />
              <CardTitle className="text-2xl font-bold">Darowizna Finansowa</CardTitle>
              <CardDescription className="text-base mt-2">
                Wesprzyj nas jednorazowym przelewem lub zleceniem stałym.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow pt-4">
              <div className="bg-muted p-4 rounded-lg text-center mt-auto">
                <p className="text-sm text-muted-foreground mb-1">Konto bankowe:</p>
                <p className="font-mono text-base font-semibold tracking-wider">
                  00 1234 5678 0000 0000 1111 2222
                </p>
                <p className="text-xs text-muted-foreground mt-2">Tytuł: Darowizna na schronisko</p>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col h-full border-border bg-card shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="text-center pb-2">
              <HandHeart className="w-12 h-12 mx-auto text-primary mb-4" />
              <CardTitle className="text-2xl font-bold">1,5% Podatku</CardTitle>
              <CardDescription className="text-base mt-2">
                Przekaż swój 1,5% podatku przy rocznym rozliczeniu PIT. To nic nie kosztuje!
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow pt-4">
              <div className="bg-muted p-4 rounded-lg text-center mt-auto">
                <p className="text-sm text-muted-foreground mb-1">Nasz nr KRS:</p>
                <p className="font-mono text-2xl font-bold tracking-widest text-primary">
                  0000123456
                </p>
                <p className="text-xs text-muted-foreground mt-2">Cel szczegółowy: Schronisko</p>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col h-full border-border bg-card shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="text-center pb-2">
              <Users className="w-12 h-12 mx-auto text-primary mb-4" />
              <CardTitle className="text-2xl font-bold">Zostań Wolontariuszem</CardTitle>
              <CardDescription className="text-base mt-2">
                Pomagaj bezpośrednio w schronisku, wyprowadzaj psy na spacery i spędzaj z nimi czas.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow pt-4 flex flex-col justify-end">
              <p className="text-center text-sm text-muted-foreground mt-auto">
                Skontaktuj się z nami poprzez formularz, aby dowiedzieć się więcej o programie wolontariatu.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
