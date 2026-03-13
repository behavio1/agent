import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Strona internetowa z Reksiem",
  description: "Zabawna i kolorowa strona dla dzieci z Reksiem!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${fredoka.variable} font-sans antialiased bg-yellow-50`}>
        {children}
      </body>
    </html>
  );
}
