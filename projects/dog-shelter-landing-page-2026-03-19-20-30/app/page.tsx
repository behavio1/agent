import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { AdoptionProcess } from "@/components/sections/AdoptionProcess";
import { SupportSection } from "@/components/sections/SupportSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <HeroSection />
      <AboutSection />
      {/* <DogsShowcase /> will go here */}
      <AdoptionProcess />
      <SupportSection />
      {/* <ContactSection /> will go here */}
    </main>
  );
}
