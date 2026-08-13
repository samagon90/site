import React from "react";
import {
  Shield,
  Search,
  Zap,
  Award,
  Clock,
  ThumbsUp,
  Wallet,
  Headphones,
} from "lucide-react";
import { contacts } from "@/lib/contacts";

const advantages = [
  {
    icon: Search,
    title: "Бесплатная диагностика",
    description:
      "Проведём полную диагностику устройства и назовём точную цену до начала работ. Диагностика бесплатна, даже если откажетесь от ремонта.",
  },
  {
    icon: Clock,
    title: `Работаем ежедневно с 8:00 до 19:00`,
    description:
      "Удобный график без выходных. Можно привезти устройство перед работой или забрать после.",
  },
  {
    icon: Zap,
    title: "Срочный ремонт от 30 минут",
    description:
      "Большинство неисправностей (экран, батарея, разъём) устраняем в день обращения, часто прямо на глазах.",
  },
  {
    icon: Award,
    title: "Оригинальные запчасти",
    description:
      "Используем только оригинальные или сертифицированные комплектующие с собственного склада.",
  },
  {
    icon: Shield,
    title: "Гарантия до 12 месяцев",
    description:
      "Письменная гарантия на все работы и установленные детали — вы защищены даже после ремонта.",
  },
  {
    icon: Wallet,
    title: "Оплата после ремонта",
    description:
      "Никаких предоплат. Проверяете устройство — и только потом оплачиваете результат.",
  },
  {
    icon: ThumbsUp,
    title: "Опытные мастера",
    description:
      "Специалисты с опытом от 10 лет. Знаем нюансы всех популярных брендов и моделей.",
  },
  {
    icon: Headphones,
    title: "Поддержка после ремонта",
    description:
      "Консультируем и помогаем с настройкой бесплатно. Если возникнут вопросы — просто позвоните.",
  },
];

export function Advantages() {
  return (
    <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.3] bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.08),transparent_50%)]" />
      <div className="container-px relative">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">
            Почему мы
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            Не просто ремонт — сервис, которому доверяют
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Более 5000 клиентов в Симферополе уже вернули свои гаджеты к жизни
            вместе с нами
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {advantages.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-6 border border-slate-200/70 shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center mb-4 group-hover:from-accent group-hover:to-orange-600 transition-colors">
                <item.icon className="h-6 w-6 text-accent group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={`tel:${contacts.phoneRaw}`}
            className="inline-flex items-center gap-2 text-base font-semibold text-slate-900 hover:text-accent transition-colors"
          >
            Не нашли что искали? Звоните — {contacts.phonePretty}
          </a>
        </div>
      </div>
    </section>
  );
}
