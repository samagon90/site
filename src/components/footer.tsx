import React from "react";
import Link from "next/link";
import { Wrench, Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { contacts } from "@/lib/contacts";

export function Footer() {
  return (
    <footer className="relative bg-slate-950 text-slate-300 overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow opacity-60 pointer-events-none" />
      <div className="relative container-px py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="bg-gradient-to-br from-accent to-orange-600 rounded-xl p-2 shadow-glow">
                <Wrench className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                Сервис 21
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Профессиональный ремонт телефонов и ноутбуков в Симферополе.
              Гарантия до 12 месяцев. Бесплатная диагностика. Оригинальные
              запчасти. Срочный ремонт от 30 минут.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <a
                href={`tel:${contacts.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-accent/10 text-accent hover:bg-accent hover:text-white border border-accent/30 rounded-lg px-3 py-2 text-sm font-semibold transition-colors"
              >
                <Phone className="h-4 w-4" />
                Позвонить
              </a>
              <a
                href={`https://wa.me/${contacts.phoneRaw.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-white border border-emerald-500/30 rounded-lg px-3 py-2 text-sm font-semibold transition-colors"
              >
                <Send className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-widest">
              Навигация
            </h3>
            <nav className="flex flex-col gap-2.5">
              {[
                { href: "/", label: "Главная" },
                { href: "/services", label: "Услуги" },
                { href: "/prices", label: "Прайс-лист" },
                { href: "/contacts", label: "Контакты" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-widest">
              Услуги
            </h3>
            <nav className="flex flex-col gap-2.5">
              {[
                { href: "/services#phones", label: "Ремонт телефонов" },
                { href: "/services#laptops", label: "Ремонт ноутбуков" },
                { href: "/services#phones", label: "Замена экрана / батареи" },
                { href: "/services#laptops", label: "Чистка и термопаста" },
                { href: "/prices", label: "Все цены" },
              ].map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-widest">
              Контакты
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${contacts.phoneRaw}`}
                className="flex items-start gap-3 text-sm hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <span className="font-semibold text-white">
                  {contacts.phonePretty}
                </span>
              </a>
              <a
                href={`mailto:${contacts.email}`}
                className="flex items-start gap-3 text-sm hover:text-white transition-colors break-all"
              >
                <Mail className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <span>{contacts.email}</span>
              </a>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <span>
                  {contacts.addressFull}
                  <span className="block text-slate-500 mt-0.5 text-xs">
                    {contacts.addressHint}
                  </span>
                </span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Clock className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <span>{contacts.hoursShort}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Сервис 21. Все права защищены.</p>
          <p>
            Работаем в Симферополе с 2014 года · Ремонтируем Apple, Samsung,
            Xiaomi, Huawei, ASUS, HP, Lenovo, Dell и др.
          </p>
        </div>
      </div>
    </footer>
  );
}
