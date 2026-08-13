import React from "react";
import { Shield, Search, Zap, Award, Clock, ThumbsUp } from "lucide-react";

const advantages = [
  {
    icon: Shield,
    title: "Гарантия до 12 месяцев",
    description: "Даём расширенную гарантию на все виды работ и установленные запчасти",
  },
  {
    icon: Search,
    title: "Бесплатная диагностика",
    description: "Проведём полную диагностику вашего устройства и назовём точную стоимость",
  },
  {
    icon: Zap,
    title: "Быстрый ремонт",
    description: "Большинство ремонтов выполняется в течение 1–3 часов, сложные — до 1 дня",
  },
  {
    icon: Award,
    title: "Оригинальные запчасти",
    description: "Используем только качественные и оригинальные комплектующие",
  },
  {
    icon: Clock,
    title: "Удобный график",
    description: "Работаем без выходных: Пн–Сб с 9:00 до 20:00, Вс с 10:00 до 18:00",
  },
  {
    icon: ThumbsUp,
    title: "Опытные мастера",
    description: "Наши специалисты имеют более 10 лет опыта в ремонте электроники",
  },
];

export function Advantages() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Мы гарантируем качество каждой выполненной работы и индивидуальный подход к каждому клиенту
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border"
            >
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
