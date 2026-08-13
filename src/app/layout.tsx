import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { contacts } from "@/lib/contacts";

export const metadata: Metadata = {
  title: {
    default: "Сервис 21 — Ремонт телефонов и ноутбуков в Симферополе",
    template: "%s | Сервис 21",
  },
  description:
    "Профессиональный ремонт телефонов и ноутбуков в Симферополе. Гарантия до 12 месяцев. Бесплатная диагностика. Оригинальные запчасти. Срочный ремонт от 30 минут.",
  keywords: [
    "ремонт телефонов Симферополь",
    "ремонт ноутбуков Симферополь",
    "замена экрана",
    "замена батареи",
    "Сервис 21",
    "сервисный центр Симферополь",
    "чистка ноутбука Симферополь",
    "ремонт iPhone Симферополь",
    "ремонт MacBook Симферополь",
  ],
  openGraph: {
    title: "Сервис 21 — Ремонт телефонов и ноутбуков в Симферополе",
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
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <a
          href={`tel:${contacts.phoneRaw}`}
          className="fixed bottom-5 right-5 z-40 inline-flex md:hidden items-center justify-center h-14 w-14 rounded-full bg-accent text-white shadow-glow hover:scale-105 transition-transform"
          aria-label="Позвонить"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.298-.074.447a12.01 12.01 0 0 0 6.377 6.377c.149.09.346.06.447-.074l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <Footer />
      </body>
    </html>
  );
}
