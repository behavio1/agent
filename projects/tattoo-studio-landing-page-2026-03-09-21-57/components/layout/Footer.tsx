import Link from "next/link";
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { studioInfo } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-muted py-12 md:py-16 border-t border-border mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          
          <div className="space-y-4 md:col-span-1">
            <h3 className="font-heading text-2xl font-bold">{studioInfo.name}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              {studioInfo.about}
            </p>
            <div className="flex space-x-4 pt-2">
              <a href={studioInfo.socials.instagram} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href={studioInfo.socials.facebook} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href={studioInfo.socials.twitter} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold tracking-wide uppercase text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#artists" className="hover:text-foreground transition-colors">Our Artists</Link></li>
              <li><Link href="#services" className="hover:text-foreground transition-colors">Services & Pricing</Link></li>
              <li><Link href="#info" className="hover:text-foreground transition-colors">Studio Info & FAQ</Link></li>
              <li><Link href="#contact" className="hover:text-foreground transition-colors">Book an Appointment</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold tracking-wide uppercase text-sm">Contact Us</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 text-foreground" />
                <span>{studioInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-foreground" />
                <span>{studioInfo.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-foreground" />
                <a href={`mailto:${studioInfo.email}`} className="hover:text-foreground transition-colors">
                  {studioInfo.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold tracking-wide uppercase text-sm">Hours</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {studioInfo.hours.map((hourSet, i) => (
                <li key={i} className="flex justify-between">
                  <span className="capitalize">{hourSet.days}</span>
                  <span>{hourSet.time}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {studioInfo.name}. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
