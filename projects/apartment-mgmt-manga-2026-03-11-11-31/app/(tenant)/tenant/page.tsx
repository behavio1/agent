import { MangaPanel, ActionText, SpeechBubble } from "@/components/ui/manga";
import { getSession } from "@/lib/auth";

export default async function TenantDashboard() {
  const session = await getSession();

  return (
    <div className="flex flex-col gap-8">
      <MangaPanel className="bg-white p-8 shadow-[8px_8px_0_0_#2563eb]" noShadow>
        <ActionText as="h1" className="text-5xl text-blue-600 mb-2">
          WELCOME BACK!
        </ActionText>
        <p className="text-xl font-bold">Tenant {session?.email}</p>
      </MangaPanel>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <MangaPanel className="bg-yellow-200 p-6 flex flex-col items-center justify-center">
          <SpeechBubble direction="top" className="mb-4">
            <p className="font-bold text-lg">Next Rent Due: $1,200</p>
            <p className="text-gray-600">Due in 5 days!</p>
          </SpeechBubble>
          <button className="bg-black text-white font-manga text-2xl uppercase py-4 px-8 border-4 border-black hover:bg-gray-800 hover:-translate-y-1 transition-transform">
            Pay Rent Now!
          </button>
        </MangaPanel>

        <MangaPanel className="bg-green-200 p-6">
          <h2 className="font-manga text-3xl mb-4 tracking-wider uppercase">Maintenance</h2>
          <div className="bg-white border-2 border-black p-4 mb-4 font-bold">
            <p>Sink is leaking</p>
            <p className="text-sm text-yellow-600 uppercase">Status: In Progress</p>
          </div>
          <button className="w-full bg-white text-black font-manga text-xl uppercase py-2 px-4 border-4 border-black hover:bg-gray-100">
            Submit New Request
          </button>
        </MangaPanel>
      </div>
    </div>
  );
}