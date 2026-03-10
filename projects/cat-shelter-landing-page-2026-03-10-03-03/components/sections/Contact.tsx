"use client";

import { useState } from "react";
import { contactInfo } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skontaktuj się z nami!</h2>
          <p className="mt-4 text-muted-foreground md:text-xl max-w-[700px] mx-auto">
            Masz pytania dotyczące adopcji? Chcesz się upewnić, że spełniasz warunki? Napisz do nas, a my z przyjemnością Ci pomożemy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="flex flex-col gap-6">
            <Card className="h-full border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl">Dane kontaktowe</CardTitle>
                <CardDescription>
                  Odwiedź nasze schronisko osobiście lub skontaktuj się z nami telefonicznie bądź mailowo.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Adres</h3>
                    <p className="text-muted-foreground">{contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Godziny otwarcia</h3>
                    <p className="text-muted-foreground">{contactInfo.workingHours.split(', ').map((line, i) => (
                      <span key={i} className="block">{line}</span>
                    ))}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Telefon</h3>
                    <p className="text-muted-foreground">
                      <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} className="hover:underline hover:text-primary transition-colors">
                        {contactInfo.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-muted-foreground">
                      <a href={`mailto:${contactInfo.email}`} className="hover:underline hover:text-primary transition-colors">
                        {contactInfo.email}
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl">Wyślij wiadomość</CardTitle>
              <CardDescription>
                Skorzystaj z formularza, a odpowiemy najszybciej, jak to możliwe.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center p-6 text-center h-[300px] bg-green-50/50 rounded-lg border border-green-100">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <Send className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Wiadomość wysłana!</h3>
                  <p className="text-green-700">Dziękujemy za kontakt. Postaramy się odpowiedzieć na Twoją wiadomość jak najszybciej.</p>
                  <Button 
                    variant="outline" 
                    className="mt-6 border-green-200 text-green-700 hover:bg-green-100"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Wyślij kolejną wiadomość
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Imię i nazwisko</Label>
                    <Input id="contact-name" placeholder="Jan Kowalski" required aria-required="true" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Adres email</Label>
                    <Input id="contact-email" type="email" placeholder="jan.kowalski@example.com" required aria-required="true" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contact-message">Wiadomość</Label>
                    <Textarea 
                      id="contact-message" 
                      placeholder="Wpisz treść swojej wiadomości..." 
                      className="min-h-[150px] resize-y"
                      required 
                      aria-required="true"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Wyślij wiadomość
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
