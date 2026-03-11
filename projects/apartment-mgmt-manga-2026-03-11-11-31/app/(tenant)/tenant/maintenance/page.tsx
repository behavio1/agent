import { MangaPanel, ActionText, SpeechBubble } from "@/components/ui/manga";
import { MaintenanceForm } from "./maintenance-form";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import Image from "next/image";
import { MaintenanceStatus } from "@prisma/client";

export const dynamic = "force-dynamic";

export default async function TenantMaintenancePage() {
  const user = await getSession();
  if (!user) return null;

  const requests = await prisma.maintenanceRequest.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="flex flex-col gap-8">
      <MangaPanel className="bg-yellow-300 p-4 inline-block self-start" noShadow>
        <ActionText as="h1" className="text-4xl text-black uppercase">
          Fix My Stuff!
        </ActionText>
      </MangaPanel>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className="flex flex-col gap-6">
          <SpeechBubble direction="bottom" className="bg-white border-4 border-black font-bold text-xl mb-4">
            Is something broken? Let us know and we&apos;ll send our best heroes to fix it! BAM! 💥
          </SpeechBubble>
          
          <MangaPanel className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#ef4444]" noShadow>
            <ActionText as="h2" className="text-3xl text-black uppercase mb-6 border-b-4 border-black pb-4">
              Submit Request
            </ActionText>
            <MaintenanceForm />
          </MangaPanel>
        </div>

        {/* History Section */}
        <div className="flex flex-col gap-6">
          <ActionText as="h2" className="text-3xl text-black uppercase bg-white p-4 border-4 border-black shadow-[4px_4px_0_0_#000] inline-block self-start">
            Request History
          </ActionText>

          {requests.length === 0 ? (
            <MangaPanel className="bg-gray-100 p-8 text-center" noShadow>
              <p className="text-xl font-bold font-manga uppercase tracking-widest text-gray-500">
                No active requests. Everything is perfect! ✨
              </p>
            </MangaPanel>
          ) : (
            <div className="flex flex-col gap-4">
              {requests.map((req) => (
                <MangaPanel key={req.id} className="bg-white p-6 relative overflow-hidden group border-4 border-black shadow-[4px_4px_0_0_#000]" noShadow>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-manga text-2xl uppercase break-words pr-24">{req.title}</h3>
                    <div className={`absolute top-0 right-0 border-b-4 border-l-4 border-black px-3 py-1 font-bold text-sm uppercase shadow-[-2px_2px_0_0_#000] ${
                      req.status === MaintenanceStatus.OPEN ? "bg-red-400" :
                      req.status === MaintenanceStatus.IN_PROGRESS ? "bg-yellow-400" :
                      "bg-green-400"
                    }`}>
                      {req.status.replace("_", " ")}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 font-bold mb-4 whitespace-pre-wrap">{req.description}</p>
                  
                  {req.imageUrl && (
                    <div className="relative h-40 w-full border-4 border-black bg-gray-200 mt-4">
                      <Image 
                        src={req.imageUrl} 
                        alt={req.title} 
                        fill 
                        className="object-cover"
                      />
                    </div>
                  )}
                  
                  <div className="mt-4 pt-4 border-t-2 border-dashed border-gray-300 text-sm font-bold text-gray-500">
                    Submitted: {new Date(req.createdAt).toLocaleDateString()}
                  </div>
                </MangaPanel>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
