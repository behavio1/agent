import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Landing page for hair salon",
  description: "A polished hair salon landing page with services, gallery, hours, contact details, and a prominent booking CTA.",
  openGraph: {
    title: "Landing page for hair salon",
    description: "Explore salon services, portfolio highlights, opening hours, and book an appointment.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
