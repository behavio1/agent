import { MangaPanel, ActionText, SpeechBubble } from "@/components/ui/manga";
import { getTenantDashboardData } from "@/actions/tenant";
import { getTenantPayments } from "@/actions/finance";
import { PayRentForm } from "./pay-rent-form";

export default async function TenantRentPage() {
  const user = await getTenantDashboardData();
  const payments = await getTenantPayments();

  if (!user || !user.tenantProfile) {
    return <div>Unable to load tenant data.</div>;
  }

  const { tenantProfile } = user;
  const balance = tenantProfile.balance || 0;

  return (
    <div className="flex flex-col gap-8">
      <MangaPanel className="bg-white p-8 shadow-[8px_8px_0_0_#2563eb]" noShadow>
        <ActionText as="h1" className="text-5xl text-blue-600 mb-2">
          RENT & FINANCES
        </ActionText>
        <p className="text-xl font-bold">Manage your payments</p>
      </MangaPanel>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Payment Form Panel */}
        <MangaPanel className="bg-yellow-200 p-6 flex flex-col items-center justify-center border-4 border-black">
          <SpeechBubble direction="bottom" className="mb-6 w-full text-center bg-white">
            <p className="font-bold text-xl">Current Balance</p>
            <p className="text-5xl text-red-600 font-manga tracking-wider mt-2">
              ${balance.toLocaleString()}
            </p>
          </SpeechBubble>

          <div className="w-full bg-white p-6 border-4 border-black">
            <h2 className="font-manga text-2xl mb-4 tracking-wider uppercase border-b-4 border-black pb-2 text-center">
              Make a Payment
            </h2>
            <PayRentForm defaultAmount={balance > 0 ? balance : 0} />
          </div>
        </MangaPanel>

        {/* Payment History Panel */}
        <MangaPanel className="bg-white p-6 border-4 border-black flex flex-col">
          <h2 className="font-manga text-3xl mb-4 tracking-wider uppercase border-b-4 border-black pb-2">
            Payment History
          </h2>
          
          <div className="flex-grow space-y-4 overflow-y-auto max-h-[500px] pr-2">
            {payments.length > 0 ? (
              payments.map((payment) => (
                <div key={payment.id} className="bg-blue-50 border-2 border-black p-4 flex justify-between items-center shadow-[4px_4px_0_0_#000]">
                  <div>
                    <p className="font-bold text-lg">${payment.amount.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">
                      {new Date(payment.date).toLocaleDateString()}
                    </p>
                  </div>
                  <span className={`text-sm border-2 border-black px-3 py-1 uppercase whitespace-nowrap font-bold ${
                    payment.status === "COMPLETED" ? "bg-green-400" : 
                    payment.status === "PENDING" ? "bg-yellow-400" : "bg-red-400"
                  }`}>
                    {payment.status}
                  </span>
                </div>
              ))
            ) : (
              <div className="bg-gray-100 border-2 border-black p-8 font-bold text-center text-gray-500">
                No payment history found.
              </div>
            )}
          </div>
        </MangaPanel>
      </div>
    </div>
  );
}
