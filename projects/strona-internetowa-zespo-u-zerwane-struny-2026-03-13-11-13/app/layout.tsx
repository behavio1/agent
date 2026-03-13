import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
});

const oswald = Oswald({
  variable: "--font-heading",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Zerwane Struny | Heavy Metal",
  description: "Oficjalna strona zespołu heavy metalowego Zerwane Struny. Koncerty, muzyka, kontakt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${oswald.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col overflow-x-hidden`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
