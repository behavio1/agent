import { MangaPanel, ActionText } from "@/components/ui/manga";
import { getSession } from "@/lib/auth";

export default async function AdminDashboard() {
  const session = await getSession();

  return (
    <div className="flex flex-col gap-8">
      <MangaPanel className="bg-white p-8 border-red-500 border-8 shadow-[8px_8px_0_0_#ef4444] shadow-red-500" noShadow>
        <ActionText as="h1" className="text-5xl text-black mb-2 uppercase">
          Command Center
        </ActionText>
        <p className="text-xl font-bold text-red-600">Logged in as {session?.email}</p>
      </MangaPanel>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <MangaPanel className="bg-yellow-300 p-6 flex flex-col items-center">
          <h2 className="font-manga text-3xl mb-4 tracking-wider uppercase">Units</h2>
          <p className="text-6xl font-black mb-2">12</p>
          <p className="font-bold">Total Properties</p>
          <button className="mt-4 bg-black text-white font-manga uppercase px-4 py-2 hover:bg-gray-800">
            Manage
          </button>
        </MangaPanel>

        <MangaPanel className="bg-green-300 p-6 flex flex-col items-center">
          <h2 className="font-manga text-3xl mb-4 tracking-wider uppercase">Pending Apps</h2>
          <p className="text-6xl font-black mb-2">3</p>
          <p className="font-bold">Needs Review</p>
          <button className="mt-4 bg-black text-white font-manga uppercase px-4 py-2 hover:bg-gray-800">
            Review
          </button>
        </MangaPanel>

        <MangaPanel className="bg-red-300 p-6 flex flex-col items-center">
          <h2 className="font-manga text-3xl mb-4 tracking-wider uppercase">Maintenance</h2>
          <p className="text-6xl font-black mb-2">5</p>
          <p className="font-bold">Open Tickets</p>
          <button className="mt-4 bg-black text-white font-manga uppercase px-4 py-2 hover:bg-gray-800">
            Fix it!
          </button>
        </MangaPanel>
      </div>
    </div>
  );
}