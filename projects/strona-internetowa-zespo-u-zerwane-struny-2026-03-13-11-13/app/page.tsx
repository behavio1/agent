import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Gallery } from "@/components/sections/gallery";
import { Media } from "@/components/sections/media";
import { Gigs } from "@/components/sections/gigs";
import { Contact } from "@/components/sections/contact";

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
      <Contact />
    </div>
  );
}
