import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Landing smoke landing-smoke-1773023522",
  description: "Validate market demand with a high-conversion smoke test landing page.",
  openGraph: {
    title: "Landing smoke landing-smoke-1773023522",
    description: "Validate market demand with a high-conversion smoke test landing page.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
