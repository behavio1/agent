"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Heart, PawPrint } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
              Znajdź przyjaciela <br className="hidden md:inline" />
              <span className="text-primary">na całe życie</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              W naszym schronisku dziesiątki wspaniałych psów czekają na nowy, kochający dom. Daj im szansę, a zyskasz najwierniejszego towarzysza.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
              <Link href="#dogs" className={buttonVariants({ size: "lg", className: "gap-2 text-base" })}>
                <PawPrint className="w-5 h-5" />
                Adoptuj Psa
              </Link>
              <Link href="#support" className={buttonVariants({ variant: "outline", size: "lg", className: "gap-2 text-base" })}>
                <Heart className="w-5 h-5 text-red-500" />
                Wspomóż Nas
              </Link>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden aspect-video lg:aspect-square bg-muted">
            {/* Fallback pattern if image is missing, we use a placeholder or pure CSS */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-muted/80 flex items-center justify-center">
              <PawPrint className="w-32 h-32 text-primary/40" />
            </div>
            {/* When actual images are added, an img tag would go here */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=2000&auto=format&fit=crop" 
              alt="Szczęśliwy pies" 
              className="absolute inset-0 w-full h-full object-cover z-10 opacity-90 hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
    </section>
  );
}
