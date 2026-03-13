import React from 'react';
import Image from 'next/image';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center border-b border-border/40 overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0 bg-black">
        <Image
          src="https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&q=80"
          alt="Heavy metal concert atmosphere"
          fill
          className="object-cover opacity-40 mix-blend-luminosity"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading text-primary uppercase tracking-widest drop-shadow-[0_0_15px_rgba(220,38,38,0.5)] mb-6 animate-fade-in-up">
          Zerwane Struny
        </h1>
        <p className="text-xl md:text-3xl font-sans text-muted-foreground uppercase tracking-widest border-t border-b border-primary/50 py-4 max-w-2xl mx-auto">
          Czysta energia. Czysty heavy metal.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <a
            href="#gigs"
            className="px-8 py-4 bg-primary text-primary-foreground font-heading uppercase tracking-wider hover:bg-primary/90 transition-colors border border-primary hover:shadow-[0_0_15px_rgba(220,38,38,0.6)]"
          >
            Nadchodzące koncerty
          </a>
          <a
            href="#music"
            className="px-8 py-4 bg-transparent text-foreground font-heading uppercase tracking-wider border border-border hover:border-primary/50 hover:bg-white/5 transition-all"
          >
            Posłuchaj
          </a>
        </div>
      </div>
    </section>
  );
}
