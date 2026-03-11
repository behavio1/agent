import Link from "next/link";
import { HalftoneBg } from "@/components/ui/manga/halftone-bg";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-transparent relative z-0">
      <HalftoneBg className="fixed inset-0 -z-10 opacity-40 pointer-events-none" />
      <header className="border-b-4 border-black p-4 bg-yellow-300 relative z-10 shadow-[0_4px_0_0_#000]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-3xl md:text-4xl font-manga tracking-wider uppercase hover:-translate-y-1 transition-transform drop-shadow-[2px_2px_0_#fff]">
            Manga Estates
          </Link>
          <nav className="flex gap-4 font-sans font-bold text-lg">
            <Link href="/" className="hover:underline hover:text-blue-600 transition-colors bg-white px-3 py-1 border-2 border-black shadow-[2px_2px_0_0_#000]">Home</Link>
            <Link href="/login" className="hover:underline hover:text-blue-600 transition-colors bg-white px-3 py-1 border-2 border-black shadow-[2px_2px_0_0_#000]">Login</Link>
          </nav>
        </div>
      </header>
      <main className="max-w-7xl mx-auto p-4 md:p-8 relative z-10">
        {children}
      </main>
    </div>
  );
}