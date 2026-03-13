import React from 'react';
import Image from 'next/image';

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1540039155732-6780c1202e75?auto=format&fit=crop&q=80",
    alt: "Live concert view",
    className: "col-span-1 row-span-1 md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto"
  },
  {
    src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80",
    alt: "Guitarist performing",
    className: "col-span-1 row-span-1 aspect-square"
  },
  {
    src: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80",
    alt: "Drummer",
    className: "col-span-1 row-span-1 aspect-square"
  },
  {
    src: "https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&q=80",
    alt: "Crowd at concert",
    className: "col-span-1 row-span-1 md:col-span-2 aspect-[16/9]"
  },
  {
    src: "https://images.unsplash.com/photo-1493225457124-a1a2a5f5f924?auto=format&fit=crop&q=80",
    alt: "Band silhouetted",
    className: "col-span-1 row-span-1 aspect-square"
  },
  {
    src: "https://images.unsplash.com/photo-1470229722913-7c092bbc767f?auto=format&fit=crop&q=80",
    alt: "Vocalist",
    className: "col-span-1 row-span-1 aspect-square"
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-background border-b border-border/40 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading uppercase text-foreground inline-block relative">
            Galeria
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary" />
          </h2>
          <p className="mt-8 text-muted-foreground uppercase tracking-widest text-sm max-w-xl mx-auto">
            Wizualny chaos. Krew, pot i łzy scenicznego szaleństwa.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 auto-rows-[200px] md:auto-rows-[250px] lg:auto-rows-[300px]">
          {galleryImages.map((img, i) => (
            <div 
              key={i} 
              className={`relative overflow-hidden group bg-muted ${img.className}`}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/10 transition-colors duration-500 z-10" />
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out z-0"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
