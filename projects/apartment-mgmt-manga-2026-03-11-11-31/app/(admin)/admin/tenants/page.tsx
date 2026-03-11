import { prisma } from "@/lib/prisma";
import { MangaPanel, ActionText } from "@/components/ui/manga";
import { AppStatus } from "@prisma/client";
import { ApproveRejectButtons, AssignPropertyForm, UnassignPropertyButton } from "./client-components";

export const dynamic = "force-dynamic";

export default async function AdminTenantsPage() {
  const [applications, tenants, availableProperties] = await Promise.all([
    prisma.application.findMany({
      where: { status: AppStatus.PENDING },
      orderBy: { createdAt: "desc" },
    }),
    prisma.tenantProfile.findMany({
      include: {
        user: true,
        property: true,
      },
      orderBy: { user: { name: "asc" } },
    }),
    prisma.property.findMany({
      where: { status: "AVAILABLE" },
      orderBy: { title: "asc" },
    }),
  ]);

  return (
    <div className="flex flex-col gap-12">
      {/* Applications Section */}
      <section>
        <div className="flex items-center mb-6">
          <MangaPanel className="bg-yellow-300 p-4 inline-block" noShadow>
            <ActionText as="h2" className="text-3xl text-black uppercase">
              Pending Applications
            </ActionText>
          </MangaPanel>
        </div>

        {applications.length === 0 ? (
          <MangaPanel className="bg-white p-6 text-center" noShadow>
            <p className="text-xl font-bold">No pending applications.</p>
          </MangaPanel>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {applications.map((app) => (
              <MangaPanel key={app.id} className="bg-white p-6 flex flex-col group relative">
                <div className="absolute top-2 right-2 bg-blue-400 border-2 border-black px-2 py-1 font-bold text-sm uppercase shadow-[2px_2px_0_0_#000]">
                  NEW
                </div>
                <h3 className="font-manga text-2xl uppercase mb-2">{app.name}</h3>
                <div className="text-gray-700 font-bold mb-1">Email: {app.email}</div>
                {app.phone && <div className="text-gray-700 font-bold mb-4">Phone: {app.phone}</div>}
                {app.message && (
                  <div className="bg-gray-100 p-3 border-2 border-black mb-4 relative">
                    <p className="italic">&quot;{app.message}&quot;</p>
                  </div>
                )}
                <div className="mt-auto pt-4 flex gap-4">
                  <ApproveRejectButtons applicationId={app.id} />
                </div>
              </MangaPanel>
            ))}
          </div>
        )}
      </section>

      {/* Tenants Section */}
      <section>
        <div className="flex items-center mb-6">
          <MangaPanel className="bg-purple-300 p-4 inline-block" noShadow>
            <ActionText as="h2" className="text-3xl text-black uppercase">
              Active Tenants
            </ActionText>
          </MangaPanel>
        </div>

        {tenants.length === 0 ? (
          <MangaPanel className="bg-white p-6 text-center" noShadow>
            <p className="text-xl font-bold">No active tenants.</p>
          </MangaPanel>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tenants.map((tenant) => (
              <MangaPanel key={tenant.id} className="bg-white p-0 flex flex-col md:flex-row overflow-hidden group">
                <div className="bg-black text-white p-6 flex-1 flex flex-col justify-center border-b-4 md:border-b-0 md:border-r-4 border-black">
                  <h3 className="font-manga text-3xl uppercase text-yellow-300 mb-2">{tenant.user.name || "Unknown Tenant"}</h3>
                  <div className="font-bold mb-1">{tenant.user.email}</div>
                  <div className="font-bold text-gray-300 mb-4">{tenant.user.phone || "No phone"}</div>
                  <div className="mt-auto">
                    <span className="uppercase font-black text-sm text-gray-400 tracking-wider block mb-1">Account Balance</span>
                    <span className={`text-2xl font-black ${tenant.balance > 0 ? "text-red-400" : "text-green-400"}`}>
                      ${tenant.balance.toFixed(2)}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col bg-gray-50">
                  <h4 className="font-manga text-xl uppercase mb-4 border-b-2 border-black pb-2">Property Assignment</h4>
                  
                  {tenant.property ? (
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <div className="font-bold text-lg mb-2">{tenant.property.title}</div>
                        <div className="text-sm font-bold text-gray-600 mb-4">
                          Lease: {tenant.leaseStart?.toLocaleDateString()} - {tenant.leaseEnd?.toLocaleDateString()}
                        </div>
                      </div>
                      <UnassignPropertyButton propertyId={tenant.property.id} />
                    </div>
                  ) : (
                    <div className="flex-grow flex flex-col justify-between">
                      <div className="text-red-500 font-bold mb-4 uppercase animate-pulse">
                        !! No Property Assigned !!
                      </div>
                      <AssignPropertyForm 
                        tenantProfileId={tenant.id} 
                        availableProperties={availableProperties.map(p => ({ id: p.id, title: p.title }))} 
                      />
                    </div>
                  )}
                </div>
              </MangaPanel>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
