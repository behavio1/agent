import Link from "next/link";
import { MangaPanel } from "@/components/ui/manga/manga-panel";
import { ActionText } from "@/components/ui/manga/action-text";
import { SpeechBubble } from "@/components/ui/manga/speech-bubble";
import { prisma } from "@/lib/prisma";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function Home() {
  const properties = await prisma.property.findMany({
    where: { status: "AVAILABLE" },
    orderBy: { price: "asc" }
  });

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
        {properties.length === 0 ? (
          <MangaPanel className="bg-white p-8 text-center">
            <SpeechBubble direction="bottom" className="mx-auto mb-4 bg-yellow-300 w-max">
              <p className="font-bold text-2xl">Aww shucks!</p>
            </SpeechBubble>
            <p className="font-bold text-xl">No available units right now. Check back later!</p>
          </MangaPanel>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <MangaPanel key={property.id} className="bg-white p-6 flex flex-col h-full">
                {property.imageUrl ? (
                  <div className="w-full h-48 border-4 border-black mb-4 relative overflow-hidden bg-gray-200">
                    <Image src={property.imageUrl} alt={property.title} fill className="object-cover" />
                  </div>
                ) : (
                  <div className="bg-gray-200 h-48 w-full border-4 border-black mb-4 flex items-center justify-center font-manga text-3xl text-gray-500">
                    [NO IMAGE]
                  </div>
                )}
                
                <h3 className="font-manga text-3xl uppercase tracking-wider mb-2">{property.title}</h3>
                {property.description && (
                  <p className="mb-4 flex-grow line-clamp-3">{property.description}</p>
                )}
                <p className="font-bold mb-4 text-xl">
                  {property.size} sqft - ${property.price}/mo
                </p>
                
                <SpeechBubble direction="bottom" className="mb-4 bg-yellow-300 w-max">
                  <p className="font-bold text-center">Ready to Move!</p>
                </SpeechBubble>

                <div className="mt-auto">
                  <Link href="/apply" className="inline-block bg-green-400 text-black font-manga text-2xl px-4 py-2 border-4 border-black uppercase tracking-wider hover:bg-green-300 hover:-translate-y-1 transition-transform shadow-[4px_4px_0_0_#000] w-full text-center">
                    Apply For This
                  </Link>
                </div>
              </MangaPanel>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
