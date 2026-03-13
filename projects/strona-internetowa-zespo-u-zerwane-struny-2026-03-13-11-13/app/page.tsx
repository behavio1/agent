import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Gallery } from "@/components/sections/gallery";
import { Media } from "@/components/sections/media";
import { Gigs } from "@/components/sections/gigs";

export default function Home() {
  return (
    <div className="w-full">
      {/* Static Sections */}
      <Hero />
      <About />
      <Gallery />
      <Media />

      {/* Dynamic Sections */}
      <Gigs />

      <section id="contact" className="min-h-screen flex items-center justify-center border-b border-border/40 bg-secondary/20">
        <h2 className="text-4xl font-heading uppercase text-foreground">Kontakt</h2>
      </section>
    </div>
  );
}
