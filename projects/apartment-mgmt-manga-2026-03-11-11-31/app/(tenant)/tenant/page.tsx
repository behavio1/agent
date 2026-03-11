import Link from "next/link";
import { MangaPanel, ActionText, SpeechBubble } from "@/components/ui/manga";
import { getTenantDashboardData } from "@/actions/tenant";

export default async function TenantDashboard() {
  const user = await getTenantDashboardData();

  if (!user) {
    return <div>Unable to load tenant data.</div>;
  }

  const { tenantProfile, maintenance } = user;
  const property = tenantProfile?.property;

  return (
    <div className="flex flex-col gap-8">
      <MangaPanel className="bg-white p-8 shadow-[8px_8px_0_0_#2563eb]" noShadow>
        <ActionText as="h1" className="text-5xl text-blue-600 mb-2">
          WELCOME BACK, {user.name || user.email}!
        </ActionText>
        <p className="text-xl font-bold">Tenant Portal</p>
      </MangaPanel>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Lease Overview */}
        <MangaPanel className="bg-white p-6 border-4 border-black">
          <h2 className="font-manga text-3xl mb-4 tracking-wider uppercase border-b-4 border-black pb-2">
            Lease Overview
          </h2>
          {property ? (
            <div className="space-y-4 font-bold text-lg">
              <div className="bg-yellow-200 p-4 border-2 border-black">
                <span className="text-gray-600 uppercase text-sm block">Current Unit</span>
                <span className="text-2xl">{property.title}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-100 p-4 border-2 border-black">
                  <span className="text-gray-600 uppercase text-sm block">Lease Start</span>
                  <span>{tenantProfile.leaseStart ? new Date(tenantProfile.leaseStart).toLocaleDateString() : "TBD"}</span>
                </div>
                <div className="bg-blue-100 p-4 border-2 border-black">
                  <span className="text-gray-600 uppercase text-sm block">Lease End</span>
                  <span>{tenantProfile.leaseEnd ? new Date(tenantProfile.leaseEnd).toLocaleDateString() : "TBD"}</span>
                </div>
              </div>

              <div className="flex justify-between items-center bg-gray-100 p-4 border-2 border-black">
                <span className="text-gray-600 uppercase">Monthly Rent</span>
                <span className="text-2xl">${property.price.toLocaleString()}</span>
              </div>
            </div>
          ) : (
            <div className="bg-gray-200 p-8 text-center border-2 border-black font-bold text-xl">
              You are not currently assigned to any unit.
            </div>
          )}
        </MangaPanel>

        <div className="flex flex-col gap-8">
          {/* Rent Status */}
          <MangaPanel className="bg-yellow-200 p-6 flex flex-col items-center justify-center border-4 border-black">
            <SpeechBubble direction="top" className="mb-6 w-full text-center">
              <p className="font-bold text-xl">Current Balance</p>
              <p className="text-3xl text-red-600 font-manga tracking-wider mt-2">
                ${(tenantProfile?.balance || 0).toLocaleString()}
              </p>
            </SpeechBubble>
            <Link
              href="/tenant/rent"
              className="w-full text-center bg-black text-white font-manga text-2xl uppercase py-4 px-8 border-4 border-black hover:bg-gray-800 hover:-translate-y-1 transition-transform"
            >
              Pay Rent Now!
            </Link>
          </MangaPanel>

          {/* Maintenance Summary */}
          <MangaPanel className="bg-green-200 p-6 border-4 border-black flex flex-col h-full">
            <h2 className="font-manga text-3xl mb-4 tracking-wider uppercase border-b-4 border-black pb-2 flex justify-between items-center">
              <span>Maintenance</span>
              <span className="text-xl bg-black text-white px-3 py-1 rounded-full">
                {maintenance.length}
              </span>
            </h2>
            
            <div className="flex-grow space-y-4 mb-6">
              {maintenance.length > 0 ? (
                maintenance.map((req) => (
                  <div key={req.id} className="bg-white border-2 border-black p-4 font-bold flex justify-between items-center shadow-[4px_4px_0_0_#000]">
                    <p className="truncate mr-4">{req.title}</p>
                    <span className="text-sm bg-yellow-400 border-2 border-black px-2 py-1 uppercase whitespace-nowrap">
                      {req.status.replace("_", " ")}
                    </span>
                  </div>
                ))
              ) : (
                <div className="bg-white border-2 border-black p-4 font-bold text-center italic text-gray-500">
                  No open requests. Great!
                </div>
              )}
            </div>

            <Link
              href="/tenant/maintenance"
              className="w-full text-center bg-white text-black font-manga text-xl uppercase py-3 px-4 border-4 border-black hover:bg-gray-100 hover:-translate-y-1 transition-transform mt-auto"
            >
              View All / New Request
            </Link>
          </MangaPanel>
        </div>
      </div>
    </div>
  );
}