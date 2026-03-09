import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lumiere-studio.pl"),
  title: {
    default: "Lumière Studio | Salon fryzjerski premium w Warszawie",
    template: "%s | Lumière Studio"
  },
  description:
    "Luksusowy landing page salonu fryzjerskiego z ofertą usług, zespołem stylistek, cennikiem, opiniami klientek, galerią i sekcją rezerwacji.",
  keywords: [
    "salon fryzjerski Warszawa",
    "koloryzacja premium",
    "strzyżenie damskie",
    "balayage",
    "airtouch",
    "rezerwacja fryzjer"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Lumière Studio | Salon fryzjerski premium w Warszawie",
    description: "Poznaj butikowy salon fryzjerski Lumière Studio i zarezerwuj wizytę online lub telefonicznie.",
    type: "website",
    locale: "pl_PL",
    url: "/",
    siteName: "Lumière Studio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumière Studio | Salon fryzjerski premium w Warszawie",
    description: "Kompletna strona salonu fryzjerskiego z mocnym CTA, ofertą, cennikiem i rezerwacją wizyt."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body>
        <a href="#content" className="skip-link">
          Przejdź do treści
        </a>
        {children}
      </body>
    </html>
  );
}
