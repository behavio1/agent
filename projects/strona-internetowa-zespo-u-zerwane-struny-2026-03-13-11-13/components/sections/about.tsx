import React from 'react';
import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="py-24 bg-background border-b border-border/40 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent z-0 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2 flex flex-col items-start gap-8">
            <div className="inline-block border-l-4 border-primary pl-6">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading uppercase text-foreground tracking-wide m-0 leading-tight">
                Kim <span className="text-primary block md:inline">Jesteśmy</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground font-sans leading-relaxed">
              <p>
                Zerwane Struny to więcej niż zespół – to manifest prawdziwego, nieskrępowanego heavy metalu. Zrodzeni w piwnicach i zapatrzeni w klasyków gatunku, łączymy potężne riffy z agresywnym brzmieniem, które nie bierze jeńców.
              </p>
              <p>
                Nasza muzyka to potężny ładunek energii, inspirowany mroczną estetyką i brutalną szczerością. Każdy koncert to rytuał, podczas którego pękają nie tylko struny gitary, ale i bariery między nami a publicznością.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 w-full mt-8 border-t border-border/50 pt-8">
              <div>
                <span className="block text-4xl font-heading text-primary mb-2">2015</span>
                <span className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">Rok założenia</span>
              </div>
              <div>
                <span className="block text-4xl font-heading text-primary mb-2">100+</span>
                <span className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">Zagarnych koncertów</span>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
              <div className="absolute -inset-4 border-2 border-primary/30 z-0 translate-x-4 translate-y-4" />
              <div className="absolute inset-0 z-10 bg-black/20" />
              <Image
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80"
                alt="Zerwane Struny na scenie"
                fill
                className="object-cover relative z-10"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
