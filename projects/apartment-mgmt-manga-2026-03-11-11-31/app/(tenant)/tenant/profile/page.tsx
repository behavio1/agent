import { MangaPanel, ActionText, SpeechBubble } from "@/components/ui/manga";
import { getTenantDashboardData, updateTenantProfile } from "@/actions/tenant";

export default async function TenantProfilePage() {
  const user = await getTenantDashboardData();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-8">
      <MangaPanel className="bg-purple-200 p-8 border-4 border-black">
        <ActionText as="h1" className="text-4xl text-purple-800 mb-6">
          MY PROFILE
        </ActionText>
        <p className="font-bold text-lg mb-8">
          Keep your contact information updated so we can reach you easily!
        </p>

        <form action={updateTenantProfile} className="space-y-6">
          <div className="bg-white p-6 border-4 border-black relative">
            <SpeechBubble direction="left" className="absolute -left-8 -top-8 rotate-[-10deg]">
              <span className="font-manga text-xl text-red-600">REQUIRED!</span>
            </SpeechBubble>
            
            <label htmlFor="name" className="block font-manga text-2xl mb-2 tracking-wider">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={user.name || ""}
              required
              className="w-full border-4 border-black p-3 text-lg font-bold focus:outline-none focus:ring-4 focus:ring-purple-400 bg-gray-50"
              placeholder="E.g. Izuku Midoriya"
            />
          </div>

          <div className="bg-white p-6 border-4 border-black">
            <label htmlFor="phone" className="block font-manga text-2xl mb-2 tracking-wider">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              defaultValue={user.phone || ""}
              className="w-full border-4 border-black p-3 text-lg font-bold focus:outline-none focus:ring-4 focus:ring-purple-400 bg-gray-50"
              placeholder="(555) 123-4567"
            />
          </div>

          <div className="bg-white p-6 border-4 border-black">
            <label htmlFor="email" className="block font-manga text-2xl mb-2 tracking-wider">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={user.email}
              disabled
              className="w-full border-4 border-black p-3 text-lg font-bold bg-gray-200 text-gray-500 cursor-not-allowed"
            />
            <p className="mt-2 text-sm text-gray-600 font-bold italic">
              Email cannot be changed online. Please contact admin.
            </p>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              className="bg-black text-white font-manga text-3xl tracking-widest uppercase py-4 px-12 border-4 border-black hover:bg-purple-600 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#000] transition-all"
            >
              SAVE CHANGES!
            </button>
          </div>
        </form>
      </MangaPanel>
    </div>
  );
}