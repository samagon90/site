import React from "react";
import Link from "next/link";
import { Smartphone, Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white">
              <div className="bg-primary rounded-lg p-1.5">
                <Smartphone className="h-5 w-5 text-white" />
              </div>
              Сервис 21
            </Link>
            <p className="text-sm text-gray-400">
              Профессиональный ремонт телефонов и ноутбуков в Симферополе. Гарантия качества.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-4">Навигация</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm hover:text-white transition-colors">Главная</Link>
              <Link href="/services" className="text-sm hover:text-white transition-colors">Услуги</Link>
              <Link href="/prices" className="text-sm hover:text-white transition-colors">Цены</Link>
              <Link href="/contacts" className="text-sm hover:text-white transition-colors">Контакты</Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Услуги</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/services#phones" className="text-sm hover:text-white transition-colors">Ремонт телефонов</Link>
              <Link href="/services#laptops" className="text-sm hover:text-white transition-colors">Ремонт ноутбуков</Link>
              <Link href="/prices" className="text-sm hover:text-white transition-colors">Прайс-лист</Link>
            </nav>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-semibold text-white mb-4">Контакты</h3>
            <div className="flex flex-col gap-3">
              <a href="tel:+79781234567" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-primary" />
                +7 (978) 123-45-67
              </a>
              <a href="mailto:info@service21.ru" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-primary" />
                info@service21.ru
              </a>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>г. Симферополь, пр. Победы, 42 / ул. Лермонтова, 1, подземный переход, бутик №21</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-primary" />
                Пн–Сб: 9:00–20:00, Вс: 10:00–18:00
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Сервис 21. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
