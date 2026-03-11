import type { Metadata } from "next";
import { Bangers, Comic_Neue } from "next/font/google";
import "./globals.css";

const bangers = Bangers({
  weight: "400",
  variable: "--font-bangers",
  subsets: ["latin"],
});

const comicNeue = Comic_Neue({
  weight: ["300", "400", "700"],
  variable: "--font-comic-neue",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manga Apartment Management",
  description: "Manage your properties with manga style",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bangers.variable} ${comicNeue.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
