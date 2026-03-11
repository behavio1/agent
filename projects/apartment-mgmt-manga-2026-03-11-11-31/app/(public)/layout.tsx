import Link from "next/link";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b-4 border-black p-4 bg-yellow-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-3xl font-manga tracking-wider uppercase">
            Manga Estates
          </Link>
          <nav className="flex gap-4 font-sans font-bold text-lg">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/login" className="hover:underline">Login</Link>
          </nav>
        </div>
      </header>
      <main className="max-w-7xl mx-auto p-4 md:p-8">
        {children}
      </main>
    </div>
  );
}