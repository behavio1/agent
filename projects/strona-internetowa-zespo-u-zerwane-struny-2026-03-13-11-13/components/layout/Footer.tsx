import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/40 bg-background py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-heading text-xl font-bold tracking-widest text-primary uppercase">
            Zerwane Struny
          </span>
          <p className="text-sm text-muted-foreground mt-2 text-center md:text-left">
            &copy; {currentYear} Zerwane Struny. Wszelkie prawa zastrzeżone.
          </p>
        </div>
        
        <div className="flex items-center space-x-6 text-muted-foreground">
          <Link href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-facebook"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </Link>
          <Link href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-instagram"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </Link>
          <Link href="#" className="hover:text-primary transition-colors" aria-label="YouTube">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-youtube"
            >
              <path d="M2.5 7.17c0-1.07.87-1.92 1.94-1.92h15.12c1.07 0 1.94.85 1.94 1.92v9.66c0 1.07-.87 1.92-1.94 1.92H4.44c-1.07 0-1.94-.85-1.94-1.92z" />
              <path d="m9.75 15.02 5.75-3.27-5.75-3.27z" />
            </svg>
          </Link>
          <Link href="#" className="hover:text-primary transition-colors" aria-label="Spotify">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="lucide lucide-speaker"
            >
              <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/>
              <circle cx="12" cy="14" r="4"/>
              <line x1="12" x2="12.01" y1="6" y2="6"/>
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}
