import { prisma } from "@/lib/prisma";
import { MangaPanel, ActionText } from "@/components/ui/manga";
import { MaintenanceStatusForm } from "./status-form";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function AdminMaintenancePage() {
  const requests = await prisma.maintenanceRequest.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      user: {
        select: { name: true, email: true, phone: true },
      },
    },
  });

  return (
    <div className="flex flex-col gap-8">
      <MangaPanel className="bg-red-500 p-4 inline-block self-start text-white border-4 border-black" noShadow>
        <ActionText as="h1" className="text-4xl uppercase tracking-wider">
          Maintenance Requests
        </ActionText>
      </MangaPanel>

      {requests.length === 0 ? (
        <MangaPanel className="bg-white p-8 text-center" noShadow>
          <p className="text-2xl font-bold font-manga tracking-widest uppercase">
            No broken stuff! Everything is amazing!
          </p>
        </MangaPanel>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {requests.map((req) => (
            <MangaPanel key={req.id} className="bg-white p-0 overflow-hidden flex flex-col group" noShadow>
              <div className="flex bg-gray-100 border-b-4 border-black p-4 justify-between items-center">
                <div>
                  <h2 className="font-manga text-3xl uppercase tracking-wide">{req.title}</h2>
                  <p className="font-bold text-gray-600 uppercase text-sm">
                    {req.user.name} • {req.user.email} {req.user.phone ? `• ${req.user.phone}` : ""}
                  </p>
                </div>
              </div>

              <div className="p-4 flex-grow flex flex-col gap-4">
                <p className="text-gray-800 font-bold whitespace-pre-wrap">{req.description}</p>
                
                {req.imageUrl && (
                  <div className="relative h-64 w-full border-4 border-black bg-gray-200 mt-2">
                    <Image 
                      src={req.imageUrl} 
                      alt={req.title} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                )}
                
                <div className="mt-auto pt-4 border-t-4 border-black border-dashed">
                  <MaintenanceStatusForm requestId={req.id} currentStatus={req.status} />
                </div>
              </div>
            </MangaPanel>
          ))}
        </div>
      )}
    </div>
  );
}
