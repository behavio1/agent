"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Send, CheckCircle2 } from "lucide-react";

export function Volunteer() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="wolontariat" className="w-full py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
            Zostań wolontariuszem
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl max-w-2xl mx-auto">
            Masz wolny czas i kochasz koty? Dołącz do naszego zespołu i pomóż w codziennej opiece nad naszymi podopiecznymi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6 lg:pr-8">
            <h3 className="text-2xl font-semibold tracking-tight">Jak możesz pomóc?</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>Wolontariat w schronisku to wspaniała okazja do niesienia pomocy, ale też świetny sposób na poznanie kocich charakterów.</p>
              <ul className="space-y-3 list-none p-0 m-0">
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-0.5"><Heart className="w-4 h-4 text-primary" /></div>
                  <div>
                    <strong className="text-foreground block">Socjalizacja kotów</strong>
                    Głaskanie, mówienie do nich, zabawa – to klucz do ich zaufania.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-0.5"><Heart className="w-4 h-4 text-primary" /></div>
                  <div>
                    <strong className="text-foreground block">Dbanie o porządek</strong>
                    Sprzątanie boksów, wymiana żwirku, czyszczenie posłań.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-0.5"><Heart className="w-4 h-4 text-primary" /></div>
                  <div>
                    <strong className="text-foreground block">Pomoc w transporcie</strong>
                    Zawożenie kotów do weterynarza lub do nowych domów.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-0.5"><Heart className="w-4 h-4 text-primary" /></div>
                  <div>
                    <strong className="text-foreground block">Promocja w internecie</strong>
                    Robienie zdjęć, pisanie opisów i udostępnianie ogłoszeń.
                  </div>
                </li>
              </ul>
              <p className="pt-4 border-t border-border mt-6 text-sm">
                * Minimalny wiek wolontariusza to 16 lat (za zgodą rodziców). Wymagamy regularności – minimum dwa razy w miesiącu.
              </p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Zgłoś się</CardTitle>
              <CardDescription>
                Wypełnij formularz, a skontaktujemy się z Tobą w celu umówienia spotkania zapoznawczego.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="py-8 text-center flex flex-col items-center justify-center space-y-4 animate-in fade-in zoom-in duration-300">
                  <CheckCircle2 className="w-16 h-16 text-primary" />
                  <h4 className="text-xl font-medium">Dziękujemy za zgłoszenie!</h4>
                  <p className="text-muted-foreground">
                    Odezwiemy się do Ciebie w ciągu kilku dni roboczych na podany adres email lub numer telefonu.
                  </p>
                  <Button variant="outline" className="mt-4" onClick={() => setIsSubmitted(false)}>
                    Wyślij kolejne zgłoszenie
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 animate-in fade-in duration-300">
                  <div className="space-y-2">
                    <Label htmlFor="name">Imię i nazwisko</Label>
                    <Input id="name" required placeholder="Jan Kowalski" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required placeholder="jan@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon (opcjonalnie)</Label>
                      <Input id="phone" type="tel" placeholder="+48 123 456 789" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Dlaczego chcesz zostać wolontariuszem?</Label>
                    <Textarea 
                      id="message" 
                      required 
                      placeholder="Napisz kilka słów o swoim doświadczeniu ze zwierzętami i dostępności czasowej..." 
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full mt-2">
                    Wyślij zgłoszenie
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
