"use client";

import Link from "next/link";
import { Facebook, Instagram, Music2, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand & Address */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-2xl font-bold tracking-tighter uppercase">
              INK<span className="text-muted-foreground">STUDIO</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Premium tattoo studio specializing in custom designs, blackwork, and realism. 
              Creating lasting art in a clean, professional environment.
            </p>
            <address className="not-italic text-sm text-muted-foreground mt-2">
              123 Inkwell Ave, Art District<br />
              Cityville, ST 12345
            </address>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">Explore</h3>
            <nav className="flex flex-col gap-3">
              <Link href="#artists" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Our Artists
              </Link>
              <Link href="#portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Portfolio
              </Link>
              <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Services & Pricing
              </Link>
              <Link href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                FAQ & Aftercare
              </Link>
            </nav>
          </div>

          {/* Legal & Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">Legal</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Newsletter / Flash Drops */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">Flash Drops</h3>
            <p className="text-sm text-muted-foreground">
              Sign up for our newsletter to get notified about flash events and guest artist spots.
            </p>
            <form className="flex mt-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-l-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
              <button
                type="submit"
                className="inline-flex h-10 items-center justify-center rounded-r-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                <Mail size={16} />
                <span className="sr-only">Subscribe</span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-12 pt-8 border-t border-border gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} InkStudio. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="TikTok">
              <Music2 size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
