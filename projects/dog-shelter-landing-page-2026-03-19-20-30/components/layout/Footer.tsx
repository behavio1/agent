import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted py-12 border-t border-border mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Schronisko dla Psów</h3>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              Dajemy drugą szansę bezdomnym zwierzętom. Pomóż nam znaleźć im nowy dom i kochające rodziny.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                <span>ul. Przykładowa 12<br />00-000 Warszawa</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <span>+48 123 456 789</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <span>kontakt@schronisko.pl</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Wesprzyj nas</h3>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              Przekaż 1.5% podatku lub wpłać darowiznę na konto schroniska:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong className="text-foreground">KRS:</strong> 0000000000</li>
              <li><strong className="text-foreground">NIP:</strong> 111-222-33-44</li>
              <li><strong className="text-foreground">Konto:</strong> 12 3456 7890 1234 5678 9012 3456</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Schronisko dla Psów. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}
