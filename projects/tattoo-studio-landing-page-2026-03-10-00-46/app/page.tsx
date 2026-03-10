import { HeroSection } from "@/components/sections/HeroSection";
import { AboutArtistsSection } from "@/components/sections/AboutArtistsSection";
import { PortfolioGallerySection } from "@/components/sections/PortfolioGallerySection";
import { ServicesPricingSection } from "@/components/sections/ServicesPricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactBookingSection } from "@/components/sections/ContactBookingSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutArtistsSection />
      <PortfolioGallerySection />
      <ServicesPricingSection />
      <FAQSection />
      <ContactBookingSection />
    </div>
  );
}
