"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24">
      <h1 className="text-4xl font-bold text-center mb-6">Casibom Güncel Giriş</h1>
      <div className="relative z-[1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] mb-8">
        <Link href="#" passHref>
          <a>
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
              src="/logo.png"
              alt="Casibom Guncel Giris Adresi"
              width={350}
              height={350}
              priority
            />
          </a>
        </Link>
      </div>
      <div className="relative z-[1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] mb-8">
        <Link href="#" passHref>
          <a>
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
              src="/giris.png"
              alt="Casibom Giriş"
              width={350}
              height={200}
              priority
            />
          </a>
        </Link>
      </div>
      <div className="mt-8" style={{
        marginTop: 40
      }}>
      
        <Link href="#" passHref>
          <a className="inline-block px-8 py-4 bg-[#ff6e01] text-white font-semibold rounded-md transition-transform duration-300 transform hover:scale-105 hover:bg-[#4891ff]">
            Casibom Giriş İçin Tıkla
          </a>
        </Link>
      </div>
      <div className="text-center max-w-2xl mx-auto"  style={{
        marginTop: 40
      }}>
        <section className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Casibom Nedir?</h2>
          <p className="text-sm md:text-base">
            Casibom, geniş bahis seçenekleri sunan yenilikçi bir bahis platformudur. Kullanıcılarına spor bahislerinden canlı casino oyunlarına kadar birçok kategori sunarak, eğlenceli ve kazançlı bir deneyim sağlar. Güvenli ödeme yöntemleri ve kullanıcı dostu arayüzü ile öne çıkan Casibom, bahis tutkunları için ideal bir tercih.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Yüksek Oranlar ve Cazip Bonuslar</h2>
          <p className="text-sm md:text-base">
            Casibom, yüksek oranlar ve cazip bonuslarla bahis tutkunlarının gözdesi olmuştur. Futbol, basketbol, tenis gibi popüler spor dallarında geniş bahis seçenekleri sunan site, aynı zamanda canlı bahis imkanı da sunar. Spor bahisleri ve casino oyunlarında eşsiz bir deneyim yaşamak isteyenler için Casibom ideal bir platformdur.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Müşteri Hizmetleri ve Promosyonlar</h2>
          <p className="text-sm md:text-base">
            Casibom, müşterilerine güvenilir ve kaliteli hizmet sunmayı hedefleyen bir bahis sitesidir. Özellikle yeni üyelere sunduğu hoş geldin bonusları ve düzenli promosyonlar ile kullanıcılarını memnun eder. Müşteri hizmetleri, kullanıcıların her türlü sorusuna hızlı ve etkili çözümler sunar.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Mobil Uyumlu Platform</h2>
          <p className="text-sm md:text-base">
            Casibom, kullanıcılarına mobil uyumlu bir platform sunarak, bahis ve oyun keyfini her an her yerde yaşama imkanı verir. Mobil cihazlardan kolayca erişilebilen site, kullanıcı dostu tasarımı ve hızlı yükleme süreleri ile öne çıkar. Kesintisiz ve güvenli bir bahis deneyimi için Casibom&#39;i tercih edebilirsiniz.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Güvenlik ve Veri Koruma</h2>
          <p className="text-sm md:text-base">
            Casibom, kullanıcı güvenliğini ve veri korumasını ön planda tutan bir bahis sitesidir. Modern şifreleme teknolojileri ile kullanıcı bilgilerini korur ve güvenli bir oyun ortamı sağlar. Sorumlu oyun ilkelerine bağlı kalarak, kullanıcılarına adil ve şeffaf bir oyun deneyimi sunar.
          </p>
        </section>
      </div>
    </main>
  );
}
