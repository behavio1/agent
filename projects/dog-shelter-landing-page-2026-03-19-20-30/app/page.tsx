import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { DogsShowcase } from "@/components/sections/DogsShowcase";
import { AdoptionProcess } from "@/components/sections/AdoptionProcess";
import { SupportSection } from "@/components/sections/SupportSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedSearchParams = await searchParams;
  const dogId = typeof resolvedSearchParams.dog === "string" ? resolvedSearchParams.dog : undefined;

  return (
    <main className="flex min-h-screen flex-col w-full">
      <HeroSection />
      <AboutSection />
      <DogsShowcase />
      <AdoptionProcess />
      <SupportSection />
      <ContactSection defaultDogId={dogId} />
    </main>
  );
}
