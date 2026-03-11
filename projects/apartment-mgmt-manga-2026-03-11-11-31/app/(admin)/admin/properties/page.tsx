import { prisma } from "@/lib/prisma";
import { MangaPanel, ActionText } from "@/components/ui/manga";
import Link from "next/link";
import Image from "next/image";
import { DeletePropertyButton } from "./delete-button";

export const dynamic = "force-dynamic";

export default async function AdminPropertiesPage() {
  const properties = await prisma.property.findMany({
    orderBy: { id: "desc" },
  });

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <MangaPanel className="bg-yellow-300 p-4 inline-block" noShadow>
          <ActionText as="h1" className="text-4xl text-black uppercase">
            Property Management
          </ActionText>
        </MangaPanel>
        
        <Link href="/admin/properties/new" className="bg-black text-white px-6 py-3 font-manga text-2xl uppercase tracking-widest hover:bg-gray-800 transition-colors border-4 border-black shadow-[4px_4px_0_0_#ef4444]">
          + Add Property
        </Link>
      </div>

      {properties.length === 0 ? (
        <MangaPanel className="bg-white p-8 text-center" noShadow>
          <p className="text-2xl font-bold">No properties found. Time to build your empire!</p>
        </MangaPanel>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop) => (
            <MangaPanel key={prop.id} className="bg-white flex flex-col p-0 overflow-hidden group">
              <div className="relative h-48 w-full border-b-4 border-black bg-gray-200">
                {prop.imageUrl ? (
                  <Image 
                    src={prop.imageUrl} 
                    alt={prop.title} 
                    fill 
                    className="object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500 font-bold uppercase">
                    No Image
                  </div>
                )}
                <div className="absolute top-2 right-2 bg-yellow-400 border-2 border-black px-2 py-1 font-bold text-sm uppercase shadow-[2px_2px_0_0_#000]">
                  {prop.status}
                </div>
              </div>
              
              <div className="p-4 flex-grow flex flex-col">
                <h2 className="font-manga text-2xl uppercase mb-2 line-clamp-1" title={prop.title}>{prop.title}</h2>
                <div className="flex justify-between items-center mb-4 text-lg font-black">
                  <span className="text-red-600">${prop.price}/mo</span>
                  <span>{prop.size} sqft</span>
                </div>
                <p className="text-gray-700 mb-4 line-clamp-2 flex-grow">
                  {prop.description || "No description provided."}
                </p>
                
                <div className="flex gap-2 mt-auto pt-4 border-t-2 border-dashed border-gray-300">
                  <Link 
                    href={`/admin/properties/${prop.id}/edit`}
                    className="flex-1 bg-blue-500 text-white font-bold uppercase py-2 text-center border-2 border-black hover:bg-blue-600 transition-colors shadow-[2px_2px_0_0_#000]"
                  >
                    Edit
                  </Link>
                  <DeletePropertyButton id={prop.id} />
                </div>
              </div>
            </MangaPanel>
          ))}
        </div>
      )}
    </div>
  );
}
