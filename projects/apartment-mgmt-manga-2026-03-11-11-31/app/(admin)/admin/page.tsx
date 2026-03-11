import { MangaPanel, ActionText } from "@/components/ui/manga";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const session = await getSession();

  const [propertiesCount, pendingAppsCount, openMaintenanceCount] = await Promise.all([
    prisma.property.count(),
    prisma.application.count({ where: { status: "PENDING" } }),
    prisma.maintenanceRequest.count({ where: { status: "OPEN" } }),
  ]);

  return (
    <div className="flex flex-col gap-8">
      <MangaPanel className="bg-white p-8 border-red-500 border-8 shadow-[8px_8px_0_0_#ef4444] shadow-red-500" noShadow>
        <ActionText as="h1" className="text-5xl text-black mb-2 uppercase">
          Command Center
        </ActionText>
        <p className="text-xl font-bold text-red-600">Logged in as {session?.email}</p>
      </MangaPanel>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <MangaPanel className="bg-yellow-300 p-6 flex flex-col items-center text-center">
          <h2 className="font-manga text-3xl mb-4 tracking-wider uppercase">Units</h2>
          <p className="text-6xl font-black mb-2">{propertiesCount}</p>
          <p className="font-bold mb-4">Total Properties</p>
          <Link href="/admin/properties" className="mt-auto bg-black text-white font-manga uppercase px-4 py-2 hover:bg-gray-800 border-2 border-black w-full shadow-[2px_2px_0_0_#000]">
            Manage
          </Link>
        </MangaPanel>

        <MangaPanel className="bg-green-300 p-6 flex flex-col items-center text-center">
          <h2 className="font-manga text-3xl mb-4 tracking-wider uppercase">Pending Apps</h2>
          <p className="text-6xl font-black mb-2">{pendingAppsCount}</p>
          <p className="font-bold mb-4">Needs Review</p>
          <Link href="/admin/tenants" className="mt-auto bg-black text-white font-manga uppercase px-4 py-2 hover:bg-gray-800 border-2 border-black w-full shadow-[2px_2px_0_0_#000]">
            Review
          </Link>
        </MangaPanel>

        <MangaPanel className="bg-red-300 p-6 flex flex-col items-center text-center">
          <h2 className="font-manga text-3xl mb-4 tracking-wider uppercase">Maintenance</h2>
          <p className="text-6xl font-black mb-2">{openMaintenanceCount}</p>
          <p className="font-bold mb-4">Open Tickets</p>
          <Link href="/admin/maintenance" className="mt-auto bg-black text-white font-manga uppercase px-4 py-2 hover:bg-gray-800 border-2 border-black w-full shadow-[2px_2px_0_0_#000]">
            Fix it!
          </Link>
        </MangaPanel>
      </div>
    </div>
  );
}
