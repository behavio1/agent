import { HeroReksio } from "@/components/HeroReksio";
import { MiniGame } from "@/components/MiniGame";
import { GlobalScore } from "@/components/GlobalScore";
import { InteractiveObject } from "@/components/InteractiveObject";
import { Star, Cloud, Sun } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-sky-300 overflow-x-hidden flex flex-col items-center justify-start p-4 md:p-8 pb-32 relative">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 text-yellow-300 opacity-80 animate-pulse hidden md:block">
        <Star size={64} fill="currentColor" />
      </div>
      <div className="absolute top-20 right-20 text-yellow-300 opacity-80 animate-pulse delay-150 hidden md:block">
        <Star size={48} fill="currentColor" />
      </div>
      
      <div className="absolute top-10 right-10 md:top-16 md:right-32">
        <InteractiveObject ariaLabel="Słoneczko" animationType="spin">
          <Sun size={80} className="text-yellow-400 fill-yellow-400 drop-shadow-lg" />
        </InteractiveObject>
      </div>

      <div className="absolute top-24 left-10 md:top-20 md:left-32 opacity-70">
        <InteractiveObject ariaLabel="Chmurka" animationType="wiggle">
          <Cloud size={100} className="text-white fill-white drop-shadow-md" />
        </InteractiveObject>
      </div>

      <div className="absolute top-32 right-1/4 opacity-60 hidden md:block">
        <InteractiveObject ariaLabel="Mała chmurka" animationType="bounce">
          <Cloud size={60} className="text-white fill-white drop-shadow-md" />
        </InteractiveObject>
      </div>

      <div className="z-10 mt-12 mb-8 text-center max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg mb-4 tracking-wider">
          Witaj u Reksia!
        </h1>
        <p className="text-2xl text-yellow-100 drop-shadow-md font-medium px-4">
          Kliknij w Reksia i pobaw się z nim!
        </p>
      </div>

      <div className="relative z-10 w-full flex justify-center mb-12">
        <HeroReksio />
      </div>

      <div className="w-full z-10 mb-12">
        <MiniGame />
      </div>

      <div className="w-full z-10 mb-20">
        <GlobalScore />
      </div>

      {/* Ground */}
      <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 bg-green-400 border-t-8 border-green-500 z-0 pointer-events-none"></div>
    </main>
  );
}
