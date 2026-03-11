import { MangaPanel, ActionText } from "@/components/ui/manga";
import { getAdminFinanceData } from "@/actions/finance";

export default async function AdminFinancePage() {
  const data = await getAdminFinanceData();
  const { payments, outstandingBalances, totalRevenue, totalOutstanding } = data;

  return (
    <div className="flex flex-col gap-8">
      <MangaPanel className="bg-black p-8 shadow-[8px_8px_0_0_#ef4444]" noShadow>
        <ActionText as="h1" className="text-5xl text-red-500 mb-2">
          FINANCIAL TRACKING
        </ActionText>
        <p className="text-xl font-bold text-white">Manage rents and balances</p>
      </MangaPanel>

      {/* Finance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <MangaPanel className="bg-green-100 p-6 border-4 border-black text-center flex flex-col justify-center shadow-[8px_8px_0_0_#000]">
          <h2 className="font-manga text-2xl uppercase tracking-wider mb-2">Total Revenue</h2>
          <p className="text-5xl font-manga text-green-700 tracking-wider">
            ${totalRevenue.toLocaleString()}
          </p>
        </MangaPanel>
        <MangaPanel className="bg-red-100 p-6 border-4 border-black text-center flex flex-col justify-center shadow-[8px_8px_0_0_#000]">
          <h2 className="font-manga text-2xl uppercase tracking-wider mb-2">Total Outstanding</h2>
          <p className="text-5xl font-manga text-red-700 tracking-wider">
            ${totalOutstanding.toLocaleString()}
          </p>
        </MangaPanel>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Outstanding Balances */}
        <MangaPanel className="bg-white p-6 border-4 border-black">
          <h2 className="font-manga text-3xl mb-4 tracking-wider uppercase border-b-4 border-black pb-2 text-red-600">
            Outstanding Balances
          </h2>
          <div className="space-y-4">
            {outstandingBalances.length > 0 ? (
              outstandingBalances.map((profile) => (
                <div key={profile.id} className="bg-yellow-100 border-2 border-black p-4 shadow-[4px_4px_0_0_#000]">
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-bold text-lg">{profile.user.name || profile.user.email}</p>
                    <p className="text-2xl font-manga text-red-600 tracking-wider">
                      ${profile.balance.toLocaleString()}
                    </p>
                  </div>
                  <p className="text-sm text-gray-700 uppercase font-bold">
                    Unit: {profile.property?.title || "N/A"}
                  </p>
                </div>
              ))
            ) : (
              <div className="bg-gray-100 border-2 border-black p-8 font-bold text-center text-gray-500">
                All tenants are paid up. Awesome!
              </div>
            )}
          </div>
        </MangaPanel>

        {/* Recent Payments */}
        <MangaPanel className="bg-white p-6 border-4 border-black flex flex-col">
          <h2 className="font-manga text-3xl mb-4 tracking-wider uppercase border-b-4 border-black pb-2 text-green-600">
            Recent Payments
          </h2>
          <div className="flex-grow space-y-4 overflow-y-auto max-h-[500px] pr-2">
            {payments.length > 0 ? (
              payments.map((payment) => (
                <div key={payment.id} className="bg-gray-50 border-2 border-black p-4 flex justify-between items-center shadow-[4px_4px_0_0_#000]">
                  <div>
                    <p className="font-bold text-lg">{payment.user.name || payment.user.email}</p>
                    <p className="text-sm text-gray-600">
                      {new Date(payment.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-manga tracking-wider text-green-600">
                      ${payment.amount.toLocaleString()}
                    </p>
                    <span className={`text-xs border-2 border-black px-2 py-0.5 uppercase whitespace-nowrap font-bold inline-block mt-1 ${
                      payment.status === "COMPLETED" ? "bg-green-400" : 
                      payment.status === "PENDING" ? "bg-yellow-400" : "bg-red-400"
                    }`}>
                      {payment.status}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-gray-100 border-2 border-black p-8 font-bold text-center text-gray-500">
                No payments logged yet.
              </div>
            )}
          </div>
        </MangaPanel>
      </div>
    </div>
  );
}
