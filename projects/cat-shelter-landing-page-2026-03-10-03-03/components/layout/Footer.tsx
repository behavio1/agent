import Link from "next/link";
import { Cat, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-zinc-300 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <Cat className="h-8 w-8 text-orange-500" />
              <span className="font-bold text-xl text-white">Kocie Cuda</span>
            </Link>
            <p className="text-zinc-400 max-w-sm">
              Zajmujemy się ratowaniem, leczeniem i szukaniem kochających domów dla bezdomnych kotów. 
              Dołącz do nas i pomóż nam zmieniać ich świat.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Szybkie linki</h3>
            <ul className="space-y-2">
              <li><Link href="#koty-do-adopcji" className="hover:text-orange-500 transition-colors">Koty do adopcji</Link></li>
              <li><Link href="#wesprzyj-nas" className="hover:text-orange-500 transition-colors">Wesprzyj nas</Link></li>
              <li><Link href="#wolontariat" className="hover:text-orange-500 transition-colors">Wolontariat</Link></li>
              <li><Link href="#kontakt" className="hover:text-orange-500 transition-colors">Kontakt</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Śledź nas</h3>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="hover:text-orange-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-orange-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-orange-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <p>© {currentYear} Schronisko Kocie Cuda. Wszelkie prawa zastrzeżone.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Polityka prywatności</a>
            <a href="#" className="hover:text-white transition-colors">Regulamin</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
