import Link from "next/link";
import { HalftoneBg } from "@/components/ui/manga";
import { logoutAction } from "@/actions/auth";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen relative bg-red-100 font-sans">
      <HalftoneBg className="fixed inset-0 bg-red-200 opacity-50 pointer-events-none" />
      
      <header className="relative z-10 border-b-4 border-black p-4 bg-black text-white shadow-[0_4px_0_0_#ef4444]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/admin" className="text-3xl md:text-4xl font-manga tracking-wider uppercase text-red-500 hover:-translate-y-1 transition-transform drop-shadow-[2px_2px_0_#fff]">
            Landlord Admin
          </Link>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 font-bold w-full md:w-auto">
            <nav className="flex flex-wrap justify-center gap-2 md:gap-4 text-sm md:text-base">
              <Link href="/admin" className="bg-red-500 text-white px-3 py-1 border-2 border-transparent hover:border-white transition-all shadow-[2px_2px_0_0_#fff]">Overview</Link>
              <Link href="/admin/properties" className="bg-red-500 text-white px-3 py-1 border-2 border-transparent hover:border-white transition-all shadow-[2px_2px_0_0_#fff]">Properties</Link>
              <Link href="/admin/tenants" className="bg-red-500 text-white px-3 py-1 border-2 border-transparent hover:border-white transition-all shadow-[2px_2px_0_0_#fff]">Tenants</Link>
              <Link href="/admin/finance" className="bg-red-500 text-white px-3 py-1 border-2 border-transparent hover:border-white transition-all shadow-[2px_2px_0_0_#fff]">Finance</Link>
              <Link href="/admin/maintenance" className="bg-red-500 text-white px-3 py-1 border-2 border-transparent hover:border-white transition-all shadow-[2px_2px_0_0_#fff]">Fix-Its</Link>
            </nav>
            <form action={logoutAction} className="mt-2 md:mt-0">
              <button className="bg-white text-black px-4 py-2 border-2 border-white font-manga tracking-wider uppercase hover:bg-gray-200 hover:-translate-y-1 transition-transform shadow-[2px_2px_0_0_#ef4444]">
                Exit
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