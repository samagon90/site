import React from "react";
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
  Thermometer,
  HardDrive,
  type LucideIcon,
} from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  device: "Телефон" | "Ноутбук";
  price: string;
  time: string;
  description: string;
  badge?: string;
};

const services: Service[] = [
  {
    icon: Monitor,
    title: "Замена экрана",
    device: "Телефон",
    price: "от 1 500 ₽",
    time: "от 30 мин",
    description: "Оригинальный дисплей с сохранением True Tone и яркости",
    badge: "Хит",
  },
  {
    icon: Battery,
    title: "Замена аккумулятора",
    device: "Телефон",
    price: "от 1 000 ₽",
    time: "от 20 мин",
    description: "Новая батарея — вернём ёмкость на 100%",
  },
  {
    icon: Droplets,
    title: "Чистка от влаги",
    device: "Телефон",
    price: "от 1 500 ₽",
    time: "от 2 часов",
    description: "Ультразвуковая чистка платы, спасаем утопленников",
    badge: "Спасаем после воды",
  },
  {
    icon: Thermometer,
    title: "Чистка и термопаста",
    device: "Ноутбук",
    price: "от 1 500 ₽",
    time: "от 1 часа",
    description: "Устраняем перегрев и шум вентилятора",
  },
  {
    icon: Monitor,
    title: "Замена матрицы",
    device: "Ноутбук",
    price: "от 3 000 ₽",
    time: "от 2 часов",
    description: "Подбираем матрицу под любую модель и бюджет",
  },
  {
    icon: HardDrive,
    title: "Апгрейд SSD/ОЗУ",
    device: "Ноутбук",
    price: "от 2 000 ₽",
    time: "от 30 мин",
    description: "Ускорим ноутбук в 5–10 раз с переносом данных",
    badge: "+500% скорости",
  },
  {
    icon: Plug,
    title: "Замена разъёма зарядки",
    device: "Телефон",
    price: "от 1 200 ₽",
    time: "от 30 мин",
    description: "Восстанавливаем быструю зарядку и передачу данных",
  },
  {
    icon: Laptop,
    title: "Восстановление Windows / macOS",
    device: "Ноутбук",
    price: "от 1 000 ₽",
    time: "от 2 часов",
    description: "Переустановка системы, драйверы и программы",
  },
];

export function PopularServices() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-px">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">
              Услуги
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
              Что мы чиним чаще всего
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Самые востребованные услуги. Не нашли свою проблему? Позвоните —
              почти наверняка мы и это чиним.
            </p>
          </div>
          <Button variant="outline" size="lg" asChild className="rounded-xl self-start md:self-auto">
            <Link href="/services" className="gap-2">
              Все услуги
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl p-6 border border-slate-200 shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {service.badge && (
                <span className="absolute top-4 right-4 inline-flex items-center rounded-full bg-accent/10 text-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider">
                  {service.badge}
                </span>
              )}
              <div className="flex items-start justify-between mb-4">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 group-hover:from-accent group-hover:to-orange-600 w-12 h-12 rounded-xl flex items-center justify-center transition-colors">
                  <service.icon className="h-6 w-6 text-accent group-hover:text-white transition-colors" />
                </div>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    service.device === "Телефон"
                      ? "bg-blue-50 text-blue-700"
                      : "bg-purple-50 text-purple-700"
                  }`}
                >
                  {service.device === "Телефон" ? (
                    <Smartphone className="inline h-3 w-3 mr-1 -mt-0.5" />
                  ) : (
                    <Laptop className="inline h-3 w-3 mr-1 -mt-0.5" />
                  )}
                  {service.device}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                {service.title}
              </h3>
              <p className="text-sm text-slate-600 mb-5 flex-1">
                {service.description}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-xl font-extrabold text-slate-900">
                  {service.price}
                </span>
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {service.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-slate-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-glow opacity-40" />
          <div className="relative grid md:grid-cols-[1fr_auto] items-center gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Не знаете, что сломалось?
              </h3>
              <p className="mt-2 text-slate-300 max-w-xl">
                Привозите — мы бесплатно проведём диагностику, назовём причину
                и точную стоимость. А дальше решаете вы.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="rounded-xl bg-accent hover:bg-orange-600 h-12 px-7 text-base shadow-glow"
            >
              <Link href="/#request-form" className="gap-2">
                Записаться на диагностику
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
