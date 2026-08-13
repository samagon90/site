import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Контакты — Сервис 21 | Связаться с нами",
  description:
    "Контакты сервисного центра «Сервис 21» в Симферополе. Адрес, телефон, часы работы. Проспект Победы, 42.",
};

export default function ContactsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Мы находимся в центре Симферополя — удобная локация с хорошей транспортной доступностью
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Наши контакты</h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Адрес</h3>
                    <p className="text-gray-600">
                      г. Симферополь, проспект Победы, 42 / улица Лермонтова, 1
                    </p>
                    <p className="text-gray-500 text-sm">
                      Остановка «Кинотеатр Звезда», подземный переход, бутик №21
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Телефон</h3>
                    <a
                      href="tel:+79781234567"
                      className="text-lg text-primary hover:underline font-medium"
                    >
                      +7 (978) 123-45-67
                    </a>
                    <p className="text-gray-500 text-sm">Звоните, ответим на любые вопросы</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">E-mail</h3>
                    <a
                      href="mailto:info@service21.ru"
                      className="text-primary hover:underline"
                    >
                      info@service21.ru
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Часы работы</h3>
                    <p className="text-gray-600">Понедельник – Суббота: 9:00 – 20:00</p>
                    <p className="text-gray-600">Воскресенье: 10:00 – 18:00</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Button size="lg" asChild>
                  <a href="tel:+79781234567" className="gap-2">
                    <Phone className="h-4 w-4" />
                    Позвонить
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://wa.me/79781234567" className="gap-2" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    Написать в WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Мы на карте</h2>
              <div className="bg-gray-100 rounded-xl overflow-hidden shadow-sm border h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2818.8!2d34.1!3d44.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDU3JzAwLjAiTiAzNMKwMDYnMDAuMCJF!5e0!3m2!1sru!2sru!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Карта — Сервис 21, Симферополь"
                />
              </div>
              <p className="text-sm text-gray-500 mt-3">
                Остановка «Кинотеатр Звезда» — подземный переход, бутик №21
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
