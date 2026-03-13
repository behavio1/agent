export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center border-b border-border/40">
        <h1 className="text-6xl md:text-8xl font-heading text-primary uppercase tracking-widest text-center">
          Zerwane Struny
        </h1>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center border-b border-border/40 bg-secondary/20">
        <h2 className="text-4xl font-heading uppercase text-foreground">O zespole</h2>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="min-h-screen flex items-center justify-center border-b border-border/40">
        <h2 className="text-4xl font-heading uppercase text-foreground">Galeria</h2>
      </section>

      {/* Media Section */}
      <section id="media" className="min-h-screen flex items-center justify-center border-b border-border/40 bg-secondary/20">
        <h2 className="text-4xl font-heading uppercase text-foreground">Media</h2>
      </section>

      {/* Gigs Section */}
      <section id="gigs" className="min-h-screen flex items-center justify-center border-b border-border/40">
        <h2 className="text-4xl font-heading uppercase text-foreground">Koncerty</h2>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center border-b border-border/40 bg-secondary/20">
        <h2 className="text-4xl font-heading uppercase text-foreground">Kontakt</h2>
      </section>
    </div>
  );
}
