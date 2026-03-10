import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { donationInfo } from "@/lib/data";
import { CreditCard, PackageOpen, CheckCircle2 } from "lucide-react";

export function Support() {
  return (
    <section id="wesprzyj-nas" className="w-full py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
            Wesprzyj nas
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl max-w-2xl mx-auto">
            Nasze schronisko działa głównie dzięki pomocy dobrych ludzi. Zobacz, jak możesz pomóc naszym podopiecznym finansowo lub rzeczowo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="h-full">
            <CardHeader className="text-center">
              <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <CreditCard className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Wsparcie finansowe</CardTitle>
              <CardDescription className="text-base mt-2">
                Każda złotówka pomaga nam w leczeniu, wyżywieniu i utrzymaniu kotów.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-6 rounded-lg border text-center">
                <p className="text-sm text-muted-foreground mb-1">Numer konta bankowego:</p>
                <p className="font-mono text-lg md:text-xl font-medium tracking-tight break-all">
                  {donationInfo.bankAccount}
                </p>
                <div className="mt-4 pt-4 border-t border-border/50">
                  <p className="text-sm text-muted-foreground mb-1">Kod SWIFT / BIC:</p>
                  <p className="font-mono text-base font-medium">{donationInfo.swiftCode}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader className="text-center">
              <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <PackageOpen className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Dary rzeczowe</CardTitle>
              <CardDescription className="text-base mt-2">
                Chętnie przyjmujemy dary materialne. Poniżej lista najpotrzebniejszych rzeczy:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {donationInfo.neededItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
