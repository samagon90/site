import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Smartphone,
  Laptop,
  ArrowRight,
  Monitor,
  Battery,
  Plug,
  Droplets,
  Hammer,
  Thermometer,
  Keyboard,
  HardDrive,
  Droplet,
  Phone,
  CheckCircle2,
} from "lucide-react";
import { contacts } from "@/lib/contacts";

export const metadata: Metadata = {
  title: "Услуги — Сервис 21 | Ремонт телефонов и ноутбуков в Симферополе",
  description:
    "Полный список услуг по ремонту телефонов и ноутбуков: замена экрана, батареи, чистка от влаги, апгрейд SSD/ОЗУ и многое другое. Бесплатная диагностика.",
};

const phoneServices = [
  {
    icon: Monitor,
    title: "Замена экрана (дисплея)",
    description:
      "Замена разбитого или неисправного дисплея на оригинальный или сертифицированный аналог. Сохраняем яркость, цвета и функции Face ID / Touch ID.",
    price: "от 1 500 ₽",
    time: "от 30 мин",
    badge: "Хит",
  },
  {
    icon: Battery,
    title: "Замена аккумулятора",
    description:
      "Новая батарея вернёт устройству время работы на уровне нового. В наличии аккумуляторы для iPhone, Samsung, Xiaomi, Huawei и др.",
    price: "от 1 000 ₽",
    time: "от 20 мин",
  },
  {
    icon: Plug,
    title: "Замена разъёма зарядки",
    description:
      "Восстанавливаем быструю зарядку и передачу данных. Используем качественные разъёмы, чиним оторванные дорожки на плате.",
    price: "от 1 200 ₽",
    time: "от 30 мин",
  },
  {
    icon: Droplets,
    title: "Чистка от влаги и жидкости",
    description:
      "Ультразвуковая чистка платы, восстановление окисленных контактов. Спасаем устройства после воды, чая, кофе и даже морской воды.",
    price: "от 1 500 ₽",
    time: "от 2 часов",
    badge: "Спасаем утопленников",
  },
  {
    icon: Hammer,
    title: "Ремонт после падения",
    description:
      "Комплексный ремонт: замена корпуса, рамки, стекла, компонентов на плате. Восстанавливаем телефоны после серьёзных ударов.",
    price: "от 2 000 ₽",
    time: "от 1 дня",
  },
];

const laptopServices = [
  {
    icon: Thermometer,
    title: "Чистка и замена термопасты",
    description:
      "Профессиональная чистка системы охлаждения, замена термопасты и термопрокладок. Устраняем перегрев, шум и троттлинг.",
    price: "от 1 500 ₽",
    time: "от 1 часа",
    badge: "Часто заказывают",
  },
  {
    icon: Monitor,
    title: "Замена матрицы экрана",
    description:
      "Подбираем и меняем матрицу для любых моделей — от бюджетных до MacBook и игровых ноутбуков. В наличии IPS и OLED варианты.",
    price: "от 3 000 ₽",
    time: "от 2 часов",
  },
  {
    icon: Keyboard,
    title: "Ремонт и замена клавиатуры",
    description:
      "Замена отдельных клавиш или всей клавиатуры после залития, износа или поломки. В том числе на MacBook (Top Case).",
    price: "от 1 500 ₽",
    time: "от 30 мин",
  },
  {
    icon: HardDrive,
    title: "Апгрейд SSD / ОЗУ",
    description:
      "Устанавливаем быстрые NVMe SSD и добавляем оперативную память — ноутбук начинает работать в 5–10 раз быстрее. Переносим данные.",
    price: "от 2 000 ₽",
    time: "от 30 мин",
    badge: "+500% скорости",
  },
  {
    icon: Droplet,
    title: "Восстановление после залития",
    description:
      "Полная разборка, ультразвуковая чистка, восстановление цепей питания и замена повреждённых компонентов — спасаем залитые ноутбуки.",
    price: "от 3 000 ₽",
    time: "от 1 дня",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="container-px relative py-16 md:py-24 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">
            Все услуги
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-balance">
            Чиним то, чем вы пользуетесь каждый день
          </h1>
          <p className="mt-5 text-lg text-slate-300 max-w-2xl mx-auto">
            Ремонтируем телефоны и ноутбуки любых брендов: от бюджетных до
            флагманов и MacBook. Бесплатная диагностика, гарантия до 12
            месяцев.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="rounded-xl shadow-glow h-12 px-7 bg-accent hover:bg-orange-600">
              <Link href="/#request-form" className="gap-2">
                Записаться
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl h-12 px-7 border-white/20 bg-white/5 hover:bg-white/10 text-white">
              <Link href="/prices" className="gap-2">
                Посмотреть прайс
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-10 bg-white border-b border-slate-200">
        <div className="container-px">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">
            Работаем с брендами
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-slate-500 font-bold text-lg">
            {[
              "Apple iPhone",
              "Samsung",
              "Xiaomi",
              "Huawei",
              "Honor",
              "ASUS",
              "Lenovo",
              "HP",
              "Dell",
              "Acer",
              "MacBook",
            ].map((b) => (
              <span key={b} className="hover:text-accent transition-colors">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Phone services */}
      <section id="phones" className="py-16 md:py-24 bg-white">
        <div className="container-px">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-3 rounded-xl">
                  <Smartphone className="h-7 w-7 text-accent" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent">
                  Мобильные устройства
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
                Ремонт телефонов и смартфонов
              </h2>
              <p className="mt-4 text-slate-600">
                Работаем со всеми популярными марками — от iPhone и Samsung до
                Xiaomi, Huawei, Honor, Realme и Tecno.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "iPhone",
                "Samsung",
                "Xiaomi",
                "Huawei",
                "Honor",
                "Realme",
                "Tecno",
                "Pixel",
              ].map((b) => (
                <span
                  key={b}
                  className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {phoneServices.map((service, i) => (
              <ServiceCard key={i} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Laptop services */}
      <section id="laptops" className="py-16 md:py-24 bg-slate-50">
        <div className="container-px">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-3 rounded-xl">
                  <Laptop className="h-7 w-7 text-accent" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent">
                  Компьютеры
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
                Ремонт ноутбуков и ультрабуков
              </h2>
              <p className="mt-4 text-slate-600">
                Чиним ноутбуки любых брендов — от офисных моделей до игровых и
                MacBook Pro/Air. Диагностика бесплатно.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "ASUS",
                "Lenovo",
                "HP",
                "Dell",
                "Acer",
                "MSI",
                "MacBook",
                "Microsoft Surface",
              ].map((b) => (
                <span
                  key={b}
                  className="text-xs font-semibold bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-full"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {laptopServices.map((service, i) => (
              <ServiceCard key={i} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="container-px relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-balance">
              Не нашли нужную услугу?
            </h2>
            <p className="mt-4 text-slate-300 text-lg">
              Мы берёмся даже за сложные случаи — восстановление данных,
              ремонт платы, перепайка BGA-чипов, пайка коннекторов. Позвоните
              или напишите — подскажем, поможем.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-left max-w-xl mx-auto">
              {[
                "Восстановление данных с дисков и флешек",
                "Перепайка BGA (чипы, видеочипы)",
                "Ремонт платы после коротких замыканий",
                "Удаление вирусов и настройка ПО",
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-2 text-sm text-slate-200"
                >
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="rounded-xl shadow-glow h-12 px-7 bg-accent hover:bg-orange-600">
                <Link href="/#request-form" className="gap-2">
                  Оставить заявку
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl h-12 px-7 border-white/20 bg-white/5 hover:bg-white/10 text-white">
                <a href={`tel:${contacts.phoneRaw}`} className="gap-2">
                  <Phone className="h-4 w-4" />
                  {contacts.phonePretty}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  price,
  time,
  badge,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  price: string;
  time: string;
  badge?: string;
}) {
  return (
    <div className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 group-hover:from-accent group-hover:to-orange-600 w-12 h-12 rounded-xl flex items-center justify-center transition-colors">
          <Icon className="h-6 w-6 text-accent group-hover:text-white transition-colors" />
        </div>
        {badge && (
          <span className="inline-flex items-center rounded-full bg-accent/10 text-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider">
            {badge}
          </span>
        )}
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-1">
        {description}
      </p>
      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
        <span className="text-xl font-extrabold text-slate-900">{price}</span>
        <span className="text-xs text-slate-500 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          {time}
        </span>
      </div>
    </div>
  );
}
