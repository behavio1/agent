'use client';

import { useActionState } from 'react';
import { submitContact, ActionState } from '@/app/actions/contact';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send } from 'lucide-react';

const initialState: ActionState = {
  success: false,
  message: '',
};

export function Contact() {
  const [state, formAction, isPending] = useActionState(submitContact, initialState);

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden border-t border-border/50">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background z-0 pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Kontakt
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Chcesz nas zabookować na koncert? Masz pytania? Wypełnij formularz poniżej, a odezwiemy się tak szybko, jak to możliwe.
          </p>
        </div>
        
        <div className="bg-card/50 backdrop-blur-sm border border-border p-8 md:p-12 rounded-lg shadow-xl shadow-black/50">
          <form action={formAction} className="space-y-8">
            {state.message && (
              <div
                className={`p-4 rounded-md border flex items-center gap-3 ${
                  state.success
                    ? 'bg-green-950/20 border-green-500/50 text-green-400'
                    : 'bg-destructive/10 border-destructive/50 text-destructive'
                }`}
              >
                <div className="flex-1 font-medium">{state.message}</div>
              </div>
            )}

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3">
                <Label htmlFor="name" className="text-sm font-semibold tracking-wider text-foreground/80 uppercase">
                  Imię / Pseudonim
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Twój pseudonim"
                  className="bg-background/50 border-border/50 h-12 focus-visible:ring-primary"
                />
                {state.errors?.name && (
                  <p className="text-xs text-destructive font-medium">{state.errors.name[0]}</p>
                )}
              </div>

              <div className="space-y-3">
                <Label htmlFor="email" className="text-sm font-semibold tracking-wider text-foreground/80 uppercase">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="twoj@email.com"
                  className="bg-background/50 border-border/50 h-12 focus-visible:ring-primary"
                />
                {state.errors?.email && (
                  <p className="text-xs text-destructive font-medium">{state.errors.email[0]}</p>
                )}
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="message" className="text-sm font-semibold tracking-wider text-foreground/80 uppercase">
                Wiadomość
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Napisz do nas..."
                className="bg-background/50 border-border/50 resize-y focus-visible:ring-primary"
              />
              {state.errors?.message && (
                <p className="text-xs text-destructive font-medium">{state.errors.message[0]}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isPending}
              className="w-full h-14 text-lg font-bold tracking-widest uppercase transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              size="lg"
            >
              {isPending ? (
                <span className="flex items-center gap-2">
                  <span className="animate-spin">🤘</span> Wysyłanie...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Wyślij Wiadomość <Send className="w-5 h-5" />
                </span>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
