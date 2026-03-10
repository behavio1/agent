import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { AdoptionGallery } from "@/components/sections/AdoptionGallery";
import { Support } from "@/components/sections/Support";
import { Volunteer } from "@/components/sections/Volunteer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <AdoptionGallery />
      <Support />
      <Volunteer />
      
      <div className="flex flex-col gap-24 py-24 bg-muted/50">
        <section id="kontakt" className="container mx-auto px-4 min-h-[50vh] flex items-center justify-center bg-zinc-100 rounded-2xl">
          <h2 className="text-3xl font-bold">Kontakt</h2>
        </section>
      </div>
    </div>
  );
}
