import Link from "next/link";
import { MangaPanel, ActionText, SpeechBubble } from "@/components/ui/manga";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 font-sans">
      <section className="text-center py-16 px-4">
        <ActionText as="h1" className="text-6xl md:text-8xl text-yellow-500 mb-6 drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
          POW! BAM! RENT!
        </ActionText>
        <p className="text-2xl font-bold max-w-2xl mx-auto border-4 border-black p-4 bg-white shadow-[8px_8px_0_0_#000]">
          Experience apartment living with maximum action. No boring landlords here!
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/login" className="bg-blue-500 text-white font-manga text-3xl px-8 py-4 border-4 border-black uppercase tracking-wider hover:bg-blue-400 hover:-translate-y-1 transition-transform shadow-[4px_4px_0_0_#000]">
            Login
          </Link>
          <Link href="/apply" className="bg-red-500 text-white font-manga text-3xl px-8 py-4 border-4 border-black uppercase tracking-wider hover:bg-red-400 hover:-translate-y-1 transition-transform shadow-[4px_4px_0_0_#000]">
            Apply Now!
          </Link>
        </div>
      </section>

      <section>
        <h2 className="font-manga text-5xl mb-8 uppercase tracking-wider">Available Units</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MangaPanel className="bg-white p-6">
            <div className="bg-gray-200 h-48 w-full border-4 border-black mb-4 flex items-center justify-center font-manga text-3xl text-gray-500">
              [Image Here]
            </div>
            <h3 className="font-manga text-3xl uppercase tracking-wider mb-2">Unit 404</h3>
            <p className="font-bold mb-4">2 Bed / 1 Bath - $1,500/mo</p>
            <SpeechBubble direction="bottom" className="mb-4 bg-yellow-300">
              <p className="font-bold text-center">Spacious Living!</p>
            </SpeechBubble>
          </MangaPanel>
        </div>
      </section>
    </div>
  );
}