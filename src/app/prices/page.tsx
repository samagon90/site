import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Smartphone, Laptop, ArrowRight, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Цены на ремонт — Сервис 21 | Прайс-лист 2025",
  description:
    "Актуальные цены на ремонт телефонов и ноутбуков в Симферополе. Прозрачные цены без скрытых доплат.",
};

const phonePrices = [
  { service: "Замена экрана (оригинал)", priceFrom: "1 500", priceTo: "12 000" },
  { service: "Замена экрана (аналог)", priceFrom: "1 000", priceTo: "5 000" },
  { service: "Замена аккумулятора", priceFrom: "1 000", priceTo: "3 500" },
  { service: "Замена разъёма зарядки", priceFrom: "1 200", priceTo: "3 000" },
  { service: "Замена динамика/микрофона", priceFrom: "800", priceTo: "2 500" },
  { service: "Чистка от влаги", priceFrom: "1 500", priceTo: "4 000" },
  { service: "Ремонт после падения", priceFrom: "2 000", priceTo: "8 000" },
  { service: "Замена задней крышки", priceFrom: "1 500", priceTo: "5 000" },
  { service: "Прошивка / восстановление ПО", priceFrom: "1 000", priceTo: "2 000" },
  { service: "Замена кнопки включения", priceFrom: "800", priceTo: "2 000" },
  { service: "Замена камеры", priceFrom: "1 500", priceTo: "5 000" },
];

const laptopPrices = [
  { service: "Чистка + замена термопасты", priceFrom: "1 500", priceTo: "3 000" },
  { service: "Замена матрицы (экрана)", priceFrom: "3 000", priceTo: "15 000" },
  { service: "Замена клавиатуры", priceFrom: "1 500", priceTo: "6 000" },
  { service: "Установка SSD (без диска)", priceFrom: "1 000", priceTo: "1 500" },
  { service: "Установка / замена ОЗУ", priceFrom: "500", priceTo: "1 000" },
  { service: "Восстановление после залития", priceFrom: "3 000", priceTo: "10 000" },
  { service: "Замена шлейфа", priceFrom: "2 000", priceTo: "5 000" },
  { service: "Замена вентилятора", priceFrom: "1 500", priceTo: "4 000" },
  { service: "Замена петель крышки", priceFrom: "2 500", priceTo: "6 000" },
  { service: "Ремонт материнской платы", priceFrom: "3 000", priceTo: "12 000" },
  { service: "Установка Windows / macOS", priceFrom: "1 000", priceTo: "2 000" },
];

function PriceTable({
  title,
  icon: Icon,
  prices,
  id,
}: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  prices: { service: string; priceFrom: string; priceTo: string }[];
  id: string;
}) {
  return (
    <section id={id} className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-blue-100 p-3 rounded-xl">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
        </div>

        <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">
                    Услуга
                  </th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-gray-900 whitespace-nowrap">
                    Цена от
                  </th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-gray-900 whitespace-nowrap">
                    Цена до
                  </th>
                </tr>
              </thead>
              <tbody>
                {prices.map((item, i) => (
                  <tr
                    key={i}
                    className={`border-b last:border-0 hover:bg-blue-50/50 transition-colors ${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                    }`}
                  >
                    <td className="px-6 py-4 text-sm text-gray-900">{item.service}</td>
                    <td className="px-6 py-4 text-sm font-medium text-primary text-right whitespace-nowrap">
                      {item.priceFrom} ₽
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 text-right whitespace-nowrap">
                      {item.priceTo} ₽
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
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Прайс-лист</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Прозрачные цены на все виды работ. Точная стоимость определяется после бесплатной диагностики.
          </p>
        </div>
      </section>

      {/* Notice */}
      <section className="py-6 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex items-start gap-3 max-w-3xl mx-auto bg-white rounded-lg p-4 border border-blue-100">
            <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700">
              <strong>Обратите внимание:</strong> цены указаны ориентировочно и зависят от модели
              устройства и сложности работ. Точную стоимость мастер назовёт после бесплатной
              диагностики. Мы всегда согласовываем цену перед началом ремонта.
            </p>
          </div>
        </div>
      </section>

      <PriceTable
        title="Ремонт телефонов"
        icon={Smartphone}
        prices={phonePrices}
        id="phones"
      />

      <PriceTable
        title="Ремонт ноутбуков"
        icon={Laptop}
        prices={laptopPrices}
        id="laptops"
      />

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Узнайте точную стоимость</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Запишитесь на бесплатную диагностику — мастер назовёт точную цену и сроки ремонта
          </p>
          <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50" asChild>
            <Link href="/#request-form" className="gap-2">
              Записаться на диагностику
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
