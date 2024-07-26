import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Casibom - Güncel - Canlı Bahis, Spor Bahisleri ve Casino - Casibom Giriş",
  description: "Casibom, yüksek oranlar ve cazip bonuslarla bahis tutkunlarının gözdesi olmuştur. Futbol, basketbol, tenis gibi popüler spor dallarında geniş bahis seçenekleri sunan site, aynı zamanda canlı bahis imkanı da sunar. Casibom, spor bahisleri ve casino oyunlarında eşsiz bir deneyim sunar.",
  keywords: "Casibom, canlı bahis, spor bahisleri, casino, yüksek oranlar, bonus, futbol bahisleri, basketbol bahisleri, tenis bahisleri",
  authors: [{ name: "Casibom", url: "https://casibom.vercel.app" }],
  viewport: "width=device-width, initial-scale=1.0",
  charset: "UTF-8",
  robots: "index, follow",
  canonical: "https://casibom.vercel.app",
  og: {
    title: "Casibom - Güncel - Canlı Bahis, Spor Bahisleri ve Casino - Casibom Giriş",
    description: "Casibom, yüksek oranlar ve cazip bonuslarla bahis tutkunlarının gözdesi olmuştur. Futbol, basketbol, tenis gibi popüler spor dallarında geniş bahis seçenekleri sunan site, aynı zamanda canlı bahis imkanı da sunar.",
    url: "https://casibom.vercel.app",
    type: "website",
    image: "https://casibom.vercel.app/logo.png",
    site_name: "Casibom",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    site: "@casibomguncels",
    creator: "@casibomguncels",
    title: "Casibom - Güncel - Canlı Bahis, Spor Bahisleri ve Casino - Casibom Giriş",
    description: "Casibom, yüksek oranlar ve cazip bonuslarla bahis tutkunlarının gözdesi olmuştur. Futbol, basketbol, tenis gibi popüler spor dallarında geniş bahis seçenekleri sunan site, aynı zamanda canlı bahis imkanı da sunar.",
    images: "https://casibom.vercel.app/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
