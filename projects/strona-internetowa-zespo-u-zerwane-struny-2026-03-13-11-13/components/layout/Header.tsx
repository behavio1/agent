import Link from "next/link";

const navLinks = [
  { href: "#hero", label: "Hero" },
  { href: "#about", label: "O zespole" },
  { href: "#gallery", label: "Galeria" },
  { href: "#media", label: "Media" },
  { href: "#gigs", label: "Koncerty" },
  { href: "#contact", label: "Kontakt" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-heading text-2xl font-bold tracking-widest text-primary uppercase">
            Zerwane Struny
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary text-foreground/80 font-heading text-lg tracking-wider"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {/* Mobile menu could be added here, but for now we keep it simple as per AC. */}
        <div className="md:hidden flex items-center">
          <button className="text-foreground focus:outline-none" aria-label="Otwórz menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
