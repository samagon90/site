import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Сервис 21 — Ремонт телефонов и ноутбуков в Симферополе",
  description:
    "Профессиональный ремонт телефонов и ноутбуков в Симферополе. Гарантия до 12 месяцев. Бесплатная диагностика. Оригинальные запчасти. Срочный ремонт от 30 минут.",
  keywords: [
    "ремонт телефонов Симферополь",
    "ремонт ноутбуков Симферополь",
    "замена экрана",
    "замена батареи",
    "Сервис 21",
    "сервисный центр Симферополь",
  ],
  openGraph: {
    title: "Сервис 21 — Ремонт телефонов и ноутбуков",
    description:
      "Профессиональный ремонт с гарантией до 12 месяцев. Бесплатная диагностика. Срочный ремонт от 30 минут.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
