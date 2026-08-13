import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Smartphone, Laptop, ArrowRight, Info, Phone } from "lucide-react";
import { contacts } from "@/lib/contacts";

export const metadata: Metadata = {
  title: "Цены на ремонт — Сервис 21 | Прайс-лист 2026, Симферополь",
  description:
    "Актуальные цены на ремонт телефонов и ноутбуков в Симферополе. Диагностика бесплатно. Прозрачные цены без скрытых доплат.",
};

const phonePrices = [
  { service: "Замена экрана (оригинал)", priceFrom: "1 500", priceTo: "12 000", tag: "Хит" },
  { service: "Замена экрана (качественный аналог)", priceFrom: "1 000", priceTo: "5 000" },
  { service: "Замена аккумулятора", priceFrom: "1 000", priceTo: "3 500", tag: "Часто" },
  { service: "Замена разъёма зарядки", priceFrom: "1 200", priceTo: "3 000" },
  { service: "Замена динамика / микрофона", priceFrom: "800", priceTo: "2 500" },
  { service: "Чистка после воды / жидкости", priceFrom: "1 500", priceTo: "4 000" },
  { service: "Восстановление после падения", priceFrom: "2 000", priceTo: "8 000" },
  { service: "Замена задней крышки / стекла", priceFrom: "1 500", priceTo: "5 000" },
  { service: "Прошивка / восстановление ПО", priceFrom: "1 000", priceTo: "2 000" },
  { service: "Замена кнопки включения / громкости", priceFrom: "800", priceTo: "2 000" },
  { service: "Замена основной / фронтальной камеры", priceFrom: "1 500", priceTo: "5 000" },
];

const laptopPrices = [
  { service: "Чистка от пыли + замена термопасты", priceFrom: "1 500", priceTo: "3 000", tag: "Часто" },
  { service: "Замена матрицы экрана", priceFrom: "3 000", priceTo: "15 000" },
  { service: "Замена клавиатуры", priceFrom: "1 500", priceTo: "6 000" },
  { service: "Установка SSD-диска (без диска)", priceFrom: "1 000", priceTo: "1 500" },
  { service: "Установка / замена ОЗУ", priceFrom: "500", priceTo: "1 000" },
  { service: "Восстановление после залития", priceFrom: "3 000", priceTo: "10 000" },
  { service: "Замена шлейфа / разъёмов", priceFrom: "2 000", priceTo: "5 000" },
  { service: "Замена вентилятора охлаждения", priceFrom: "1 500", priceTo: "4 000" },
  { service: "Замена петель крышки", priceFrom: "2 500", priceTo: "6 000" },
  { service: "Ремонт материнской платы", priceFrom: "3 000", priceTo: "12 000" },
  { service: "Установка Windows / macOS / драйверов", priceFrom: "1 000", priceTo: "2 000" },
];

function PriceTable({
  title,
  icon: Icon,
  prices,
  id,
  badge,
}: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  prices: { service: string; priceFrom: string; priceTo: string; tag?: string }[];
  id: string;
  badge: string;
}) {
  return (
    <section id={id} className="py-14 md:py-16">
      <div className="container-px">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-3 rounded-xl">
            <Icon className="h-7 w-7 text-accent" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              {badge}
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              {title}
            </h2>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-soft overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-6 py-4 text-sm font-bold text-slate-900">
                    Услуга
                  </th>
                  <th className="text-right px-6 py-4 text-sm font-bold text-slate-900 whitespace-nowrap">
                    Цена от
                  </th>
                  <th className="text-right px-6 py-4 text-sm font-bold text-slate-900 whitespace-nowrap">
                    Цена до
                  </th>
                </tr>
              </thead>
              <tbody>
                {prices.map((item, i) => (
                  <tr
                    key={i}
                    className={`border-b last:border-0 border-slate-100 hover:bg-orange-50/40 transition-colors`}
                  >
                    <td className="px-6 py-4 text-sm text-slate-800">
                      <div className="flex items-center gap-3">
                        {item.tag && (
                          <span className="hidden sm:inline-flex text-[10px] font-bold uppercase tracking-wider bg-accent/10 text-accent px-2 py-0.5 rounded-full">
                            {item.tag}
                          </span>
                        )}
                        <span>{item.service}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-base font-extrabold text-slate-900 text-right whitespace-nowrap">
                      {item.priceFrom} ₽
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500 text-right whitespace-nowrap">
                      до {item.priceTo} ₽
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PricesPage() {
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
        <div className="container-px relative py-16 md:py-20 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">
            Прайс-лист
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-balance">
            Прозрачные цены без сюрпризов
          </h1>
          <p className="mt-5 text-lg text-slate-300 max-w-2xl mx-auto">
            Диагностика — бесплатно. Точную стоимость мастер называет после
            диагностики и начинает работу только после вашего согласия.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="rounded-xl h-12 px-7 shadow-glow bg-accent hover:bg-orange-600">
              <Link href="/#request-form" className="gap-2">
                Записаться на диагностику
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
      </section>

      {/* Notice */}
      <section className="py-8 bg-slate-50">
        <div className="container-px">
          <div className="flex items-start gap-3 max-w-4xl mx-auto bg-white rounded-2xl p-5 border border-orange-100 shadow-soft">
            <Info className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong className="text-slate-900">Обратите внимание:</strong>{" "}
              цены указаны ориентировочно и зависят от модели устройства,
              сложности разборки и стоимости запчастей. Мастер назовёт точную
              цену после бесплатной диагностики — и только с вашего согласия
              мы начинаем ремонт.
            </p>
          </div>
        </div>
      </section>

      <PriceTable
        title="Ремонт телефонов"
        icon={Smartphone}
        prices={phonePrices}
        id="phones"
        badge="Телефоны · iPhone · Samsung · Xiaomi · Huawei"
      />

      <div className="bg-slate-50">
        <PriceTable
          title="Ремонт ноутбуков"
          icon={Laptop}
          prices={laptopPrices}
          id="laptops"
          badge="Ноутбуки · ASUS · HP · Lenovo · Dell · MacBook · Acer"
        />
      </div>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="container-px relative text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-balance">
            Узнайте точную стоимость ремонта
          </h2>
          <p className="mt-4 text-slate-300 max-w-xl mx-auto text-lg">
            Привозите устройство — бесплатная диагностика займёт 15–30 минут.
            Или оставьте заявку: мы сами перезвоним.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="rounded-xl h-12 px-7 bg-white text-slate-900 hover:bg-slate-100 shadow-glow">
              <Link href="/#request-form" className="gap-2">
                Записаться на диагностику
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl h-12 px-7 border-white/20 bg-white/5 hover:bg-white/10 text-white">
              <Link href="/contacts" className="gap-2">
                Все контакты
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
