import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      
      <div className="flex flex-col gap-24 py-24">
        <section id="koty-do-adopcji" className="container mx-auto px-4 min-h-[50vh] flex items-center justify-center bg-zinc-100 rounded-2xl">
          <h2 className="text-3xl font-bold">Koty do adopcji</h2>
        </section>
        
        <section id="wesprzyj-nas" className="container mx-auto px-4 min-h-[50vh] flex items-center justify-center bg-zinc-100 rounded-2xl">
          <h2 className="text-3xl font-bold">Wesprzyj nas</h2>
        </section>
        
        <section id="wolontariat" className="container mx-auto px-4 min-h-[50vh] flex items-center justify-center bg-zinc-100 rounded-2xl">
          <h2 className="text-3xl font-bold">Wolontariat</h2>
        </section>
        
        <section id="kontakt" className="container mx-auto px-4 min-h-[50vh] flex items-center justify-center bg-zinc-100 rounded-2xl">
          <h2 className="text-3xl font-bold">Kontakt</h2>
        </section>
      </div>
    </div>
  );
}
