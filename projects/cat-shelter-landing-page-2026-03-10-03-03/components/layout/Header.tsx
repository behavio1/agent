"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Cat } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Koty do adopcji", href: "#koty-do-adopcji" },
    { name: "Wesprzyj nas", href: "#wesprzyj-nas" },
    { name: "Wolontariat", href: "#wolontariat" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-white py-5"}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Cat className="h-8 w-8 text-orange-500 group-hover:text-orange-600 transition-colors" />
          <span className="font-bold text-xl text-zinc-900">Kocie Cuda</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-zinc-600 hover:text-orange-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="#wesprzyj-nas" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-medium transition-colors"
          >
            Pomóż
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-zinc-600 hover:text-orange-500 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-zinc-100 py-4 flex flex-col px-4 gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-base font-medium text-zinc-700 hover:text-orange-500 p-2 rounded-md hover:bg-orange-50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="#wesprzyj-nas" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-md font-medium text-center transition-colors mt-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pomóż
          </Link>
        </div>
      )}
    </header>
  );
}
