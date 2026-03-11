import Link from "next/link";
import { HalftoneBg } from "@/components/ui/manga";
import { logoutAction } from "@/actions/auth";

export default function TenantLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen relative bg-blue-100 font-sans">
      <HalftoneBg className="fixed inset-0 bg-blue-200 opacity-50 pointer-events-none" />
      
      <header className="relative z-10 border-b-4 border-black p-4 bg-white shadow-[0_4px_0_0_#000]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/tenant" className="text-3xl md:text-4xl font-manga tracking-wider uppercase text-blue-600 hover:-translate-y-1 transition-transform drop-shadow-[2px_2px_0_#fff]">
            Tenant Portal
          </Link>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 font-bold w-full md:w-auto">
            <nav className="flex flex-wrap justify-center gap-2 md:gap-4 text-sm md:text-base">
              <Link href="/tenant" className="bg-blue-500 text-white px-3 py-1 border-2 border-black hover:bg-blue-400 transition-colors shadow-[2px_2px_0_0_#000]">Dashboard</Link>
              <Link href="/tenant/profile" className="bg-blue-500 text-white px-3 py-1 border-2 border-black hover:bg-blue-400 transition-colors shadow-[2px_2px_0_0_#000]">Profile</Link>
              <Link href="/tenant/rent" className="bg-blue-500 text-white px-3 py-1 border-2 border-black hover:bg-blue-400 transition-colors shadow-[2px_2px_0_0_#000]">Rent</Link>
              <Link href="/tenant/maintenance" className="bg-blue-500 text-white px-3 py-1 border-2 border-black hover:bg-blue-400 transition-colors shadow-[2px_2px_0_0_#000]">Fix-Its</Link>
            </nav>
            <form action={logoutAction} className="mt-2 md:mt-0">
              <button className="bg-red-500 text-white px-4 py-2 border-2 border-black font-manga tracking-wider uppercase hover:bg-red-400 hover:-translate-y-1 transition-transform shadow-[2px_2px_0_0_#000]">
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