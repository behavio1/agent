import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { AdoptionGallery } from "@/components/sections/AdoptionGallery";
import { Support } from "@/components/sections/Support";
import { Volunteer } from "@/components/sections/Volunteer";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <AdoptionGallery />
      <Support />
      <Volunteer />
      <Contact />
    </div>
  );
}
