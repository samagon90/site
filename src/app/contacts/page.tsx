import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  ArrowRight,
} from "lucide-react";
import { contacts } from "@/lib/contacts";

export const metadata: Metadata = {
  title: "Контакты — Сервис 21 | Адрес, телефон, часы работы в Симферополе",
  description: `Контакты сервисного центра «Сервис 21» в Симферополе. Телефон ${contacts.phonePretty}, почта ${contacts.email}. Часы работы ${contacts.hoursShort}. Проспект Победы, 42.`,
};

const contactCards = [
  {
    icon: Phone,
    title: "Телефон",
    main: contacts.phonePretty,
    href: `tel:${contacts.phoneRaw}`,
    cta: "Позвонить",
    sub: "Звоните — ответим на любые вопросы",
  },
  {
    icon: Mail,
    title: "E-mail",
    main: contacts.email,
    href: `mailto:${contacts.email}`,
    cta: "Написать",
    sub: "Для заявок и вопросов по ремонту",
  },
  {
    icon: Clock,
    title: "Часы работы",
    main: contacts.hoursShort,
    sub: "Без перерыва и выходных",
  },
  {
    icon: MapPin,
    title: "Адрес",
    main: contacts.addressShort,
    sub: contacts.addressHint,
  },
];

export default function ContactsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative container-px py-16 md:py-24 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">
            Контакты
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-balance">
            Приезжайте, звоните, пишите
          </h1>
          <p className="mt-5 text-lg text-slate-300 max-w-2xl mx-auto">
            Удобная локация в центре Симферополя. Ответим в течение 15 минут
            в рабочее время.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="rounded-xl shadow-glow h-12 px-7 bg-accent hover:bg-orange-600">
              <a href={`tel:${contacts.phoneRaw}`} className="gap-2">
                <Phone className="h-4 w-4" />
                {contacts.phonePretty}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl h-12 px-7 border-white/20 bg-white/5 hover:bg-white/10 text-white">
              <a href="#map" className="gap-2">
                <MapPin className="h-4 w-4" />
                Посмотреть на карте
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-px">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 -mt-24 relative z-10">
            {contactCards.map((c, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center mb-4">
                  <c.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-sm font-semibold text-slate-500 mb-1">
                  {c.title}
                </h3>
                {c.href ? (
                  <a
                    href={c.href}
                    className="block text-lg font-bold text-slate-900 hover:text-accent break-all transition-colors"
                  >
                    {c.main}
                  </a>
                ) : (
                  <p className="text-lg font-bold text-slate-900">{c.main}</p>
                )}
                <p className="mt-2 text-sm text-slate-500">{c.sub}</p>
                {c.href && c.cta && (
                  <a
                    href={c.href}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:gap-2 transition-all"
                  >
                    {c.cta} <ArrowRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map + CTA */}
      <section id="map" className="py-16 md:py-24 bg-slate-50">
        <div className="container-px">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Info + how to find */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Как нас найти
                </h2>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  Мы находимся в центре Симферополя, на пересечении проспекта
                  Победы и улицы Лермонтова, в подземном переходе у остановки
                  «Кинотеатр Звезда», бутик №21.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-soft space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Адрес</p>
                    <p className="text-sm text-slate-600">
                      {contacts.addressFull}
                    </p>
                    <p className="text-sm text-slate-500">
                      {contacts.addressHint}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Часы работы</p>
                    <p className="text-sm text-slate-600">{contacts.hoursShort}</p>
                    <p className="text-sm text-slate-500">
                      Без выходных и перерывов
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Телефон</p>
                    <a
                      href={`tel:${contacts.phoneRaw}`}
                      className="text-sm text-slate-900 font-bold hover:text-accent"
                    >
                      {contacts.phonePretty}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="rounded-xl shadow-glow bg-accent hover:bg-orange-600 h-12">
                  <a href={`tel:${contacts.phoneRaw}`} className="gap-2">
                    <Phone className="h-4 w-4" />
                    Позвонить
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-xl h-12">
                  <a
                    href={`https://wa.me/${contacts.phoneRaw.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-xl h-12">
                  <a href={`mailto:${contacts.email}`} className="gap-2">
                    <Send className="h-4 w-4" />
                    E-mail
                  </a>
                </Button>
              </div>
            </div>

            {/* Map */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl overflow-hidden shadow-soft border border-slate-200 h-[420px] md:h-[500px]">
                <iframe
                  title="Карта — Сервис 21, Симферополь"
                  src="https://yandex.ru/map-widget/v1/?ll=34.105000%2C44.948000&z=16&pt=34.105000%2C44.948000%2Cpm2rdm&text=Симферополь%2C%20остановка%20Кинотеатр%20Звезда"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-sm text-slate-500">
                Остановка «Кинотеатр Звезда» — подземный переход, бутик №21.
                Вход со стороны проспекта Победы.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
