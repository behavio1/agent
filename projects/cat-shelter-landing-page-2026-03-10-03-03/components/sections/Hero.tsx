import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden bg-white" id="start">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl xl:text-6xl/none text-slate-900">
                Znajdź przyjaciela na całe życie. Adoptuj kota.
              </h1>
              <p className="max-w-[600px] text-slate-600 md:text-xl leading-relaxed">
                W naszym schronisku dziesiątki kotów czekają na ciepły, kochający dom. 
                Pomóż nam odmienić ich los – każda adopcja i każde wsparcie ma ogromne znaczenie.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Button asChild size="lg" className="gap-2 font-medium bg-orange-500 hover:bg-orange-600 text-white border-0">
                <Link href="#koty-do-adopcji">
                  Adoptuj <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 font-medium border-orange-200 text-orange-600 hover:bg-orange-50 hover:text-orange-700">
                <Link href="#wesprzyj-nas">
                  Wesprzyj nas <Heart className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="mx-auto flex w-full items-center justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative h-[400px] w-full max-w-[500px] sm:h-[450px] lg:h-[550px]">
              <div aria-hidden="true" className="absolute inset-0 bg-orange-100 rounded-2xl rotate-3 scale-105 z-0 transition-transform duration-300 hover:rotate-6"></div>
              <Image
                src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&q=80&w=800"
                alt="Szczęśliwy rudy kot patrzący w górę"
                fill
                className="rounded-2xl object-cover shadow-xl z-10 relative border-4 border-white"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
