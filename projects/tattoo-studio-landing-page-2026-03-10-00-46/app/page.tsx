import { HeroSection } from "@/components/sections/HeroSection";
import { AboutArtistsSection } from "@/components/sections/AboutArtistsSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutArtistsSection />

      {/* Portfolio Section Placeholder */}
      <section id="portfolio" className="flex items-center justify-center min-h-screen border-b border-border">
        <h2 className="text-3xl font-semibold">Portfolio Section</h2>
      </section>

      {/* Services Section Placeholder */}
      <section id="services" className="flex items-center justify-center min-h-screen border-b border-border">
        <h2 className="text-3xl font-semibold">Services Section</h2>
      </section>

      {/* FAQ Section Placeholder */}
      <section id="faq" className="flex items-center justify-center min-h-screen border-b border-border">
        <h2 className="text-3xl font-semibold">FAQ Section</h2>
      </section>

      {/* Contact Section Placeholder */}
      <section id="contact" className="flex items-center justify-center min-h-screen">
        <h2 className="text-3xl font-semibold">Contact Section</h2>
      </section>
    </div>
  );
}
