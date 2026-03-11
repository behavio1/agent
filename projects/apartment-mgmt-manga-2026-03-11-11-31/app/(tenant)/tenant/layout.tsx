import Link from "next/link";
import { HalftoneBg } from "@/components/ui/manga";
import { logoutAction } from "@/actions/auth";

export default function TenantLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen relative bg-blue-100 font-sans">
      <HalftoneBg className="bg-blue-200 opacity-50" />
      
      <header className="relative z-10 border-b-4 border-black p-4 bg-white shadow-[0_4px_0_0_#000]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/tenant" className="text-3xl font-manga tracking-wider uppercase text-blue-600">
            Tenant Portal
          </Link>
          <div className="flex items-center gap-6 font-bold">
            <nav className="flex gap-4">
              <Link href="/tenant" className="hover:underline">Dashboard</Link>
              <Link href="/tenant/rent" className="hover:underline">Rent</Link>
              <Link href="/tenant/maintenance" className="hover:underline">Maintenance</Link>
            </nav>
            <form action={logoutAction}>
              <button className="bg-red-500 text-white px-4 py-2 border-2 border-black font-manga tracking-wider uppercase hover:bg-red-400">
                Log Out
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto p-4 md:p-8">
        {children}
      </main>
    </div>
  );
}