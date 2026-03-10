import { shelterStats } from "@/lib/data";
import { Heart, Home, Users } from "lucide-react";
import Image from "next/image";

export function About() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-slate-50" id="o-nas">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          
          <div className="relative aspect-square w-full max-w-[500px] mx-auto lg:mx-0 order-last lg:order-first">
            <div aria-hidden="true" className="absolute inset-0 bg-slate-200 rounded-[2rem] -rotate-3 z-0"></div>
            <Image
              src="https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&q=80&w=800"
              alt="Grupa kotów w schronisku"
              fill
              className="object-cover rounded-[2rem] shadow-xl z-10 relative"
            />
            <div aria-hidden="true" className="absolute -bottom-6 -right-6 w-48 h-48 bg-orange-200/50 rounded-full z-0 blur-3xl"></div>
            <div aria-hidden="true" className="absolute -top-6 -left-6 w-32 h-32 bg-orange-300/30 rounded-full z-0 blur-2xl"></div>
          </div>
          
          <div className="space-y-8 z-20 relative">
            <div className="space-y-4">
              <div className="inline-block rounded-full bg-orange-100 px-4 py-1.5 text-sm font-semibold text-orange-600">
                O naszym schronisku
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-slate-900 leading-tight">
                Nasza misja to ratowanie i dawanie drugiej szansy.
              </h2>
              <div className="space-y-4 text-slate-600 md:text-lg leading-relaxed">
                <p>
                  Schronisko dla Kotów powstało z miłości do zwierząt i niezgody na ich cierpienie. 
                  Od ponad dekady staramy się poprawić los bezdomnych, chorych i porzuconych kotów. 
                  Naszym głównym celem jest znalezienie każdemu podopiecznemu bezpiecznego, pełnego miłości domu.
                </p>
                <p>
                  Dzięki nieocenionemu zaangażowaniu naszych wolontariuszy, hojnemu wsparciu darczyńców 
                  oraz współpracy z lokalnymi lecznicami weterynaryjnymi, każdego dnia zmieniamy kocie życia na lepsze.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-200">
              <div className="flex flex-col items-center sm:items-start space-y-2 group">
                <div className="p-3 bg-rose-100 rounded-2xl text-rose-600 transition-transform group-hover:scale-110">
                  <Heart className="h-6 w-6" />
                </div>
                <div className="space-y-1 text-center sm:text-left">
                  <h3 className="text-3xl font-bold text-slate-900">{shelterStats.rescuedCount}+</h3>
                  <p className="text-sm text-slate-500 font-medium">Uratowanych kotów</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center sm:items-start space-y-2 group">
                <div className="p-3 bg-emerald-100 rounded-2xl text-emerald-600 transition-transform group-hover:scale-110">
                  <Home className="h-6 w-6" />
                </div>
                <div className="space-y-1 text-center sm:text-left">
                  <h3 className="text-3xl font-bold text-slate-900">{shelterStats.adoptedCount}+</h3>
                  <p className="text-sm text-slate-500 font-medium">Znalezionych domów</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center sm:items-start space-y-2 group">
                <div className="p-3 bg-blue-100 rounded-2xl text-blue-600 transition-transform group-hover:scale-110">
                  <Users className="h-6 w-6" />
                </div>
                <div className="space-y-1 text-center sm:text-left">
                  <h3 className="text-3xl font-bold text-slate-900">{shelterStats.volunteersCount}</h3>
                  <p className="text-sm text-slate-500 font-medium">Aktywnych wolontariuszy</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
