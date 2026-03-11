import Link from "next/link";
import { HalftoneBg } from "@/components/ui/manga";
import { logoutAction } from "@/actions/auth";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen relative bg-red-100 font-sans">
      <HalftoneBg className="bg-red-200 opacity-50" />
      
      <header className="relative z-10 border-b-4 border-black p-4 bg-black text-white shadow-[0_4px_0_0_#ef4444]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/admin" className="text-3xl font-manga tracking-wider uppercase text-red-500">
            Landlord Admin
          </Link>
          <div className="flex items-center gap-6 font-bold">
            <nav className="flex gap-4">
              <Link href="/admin" className="hover:text-red-400">Overview</Link>
              <Link href="/admin/properties" className="hover:text-red-400">Properties</Link>
              <Link href="/admin/tenants" className="hover:text-red-400">Tenants</Link>
              <Link href="/admin/finance" className="hover:text-red-400">Finance</Link>
              <Link href="/admin/maintenance" className="hover:text-red-400">Maintenance</Link>
            </nav>
            <form action={logoutAction}>
              <button className="bg-white text-black px-4 py-2 border-2 border-white font-manga tracking-wider uppercase hover:bg-gray-200">
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