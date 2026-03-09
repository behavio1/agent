import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumière Studio | Landing page for hair salon",
  description:
    "Responsywna strona landing page dla salonu fryzjerskiego z sekcjami usług, zespołu, cennika, opinii, galerii, rezerwacji, FAQ i mocnym CTA.",
  openGraph: {
    title: "Lumière Studio | Landing page for hair salon",
    description:
      "Poznaj luksusowy salon fryzjerski Lumière Studio i zarezerwuj wizytę online.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
