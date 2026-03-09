import { AboutSection } from "@/components/landing/about-section";
import { ContactSection } from "@/components/landing/contact-section";
import { FaqSection } from "@/components/landing/faq-section";
import { GallerySection } from "@/components/landing/gallery-section";
import { HeroSection } from "@/components/landing/hero-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { ServicesSection } from "@/components/landing/services-section";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { TeamSection } from "@/components/landing/team-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="content" className="pb-6" tabIndex={-1}>
        <div id="top" />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TeamSection />
        <PricingSection />
        <TestimonialsSection />
        <GallerySection />
        <ContactSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </>
  );
}
