import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Smartphone, Laptop, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Замена экрана",
    device: "Телефон",
    price: "от 1 500 ₽",
    time: "от 30 мин",
    description: "Замена разбитого экрана на оригинальный дисплей",
  },
  {
    icon: Smartphone,
    title: "Замена аккумулятора",
    device: "Телефон",
    price: "от 1 000 ₽",
    time: "от 20 мин",
    description: "Установка нового аккумулятора с гарантией",
  },
  {
    icon: Laptop,
    title: "Чистка и термопаста",
    device: "Ноутбук",
    price: "от 1 500 ₽",
    time: "от 1 часа",
    description: "Профессиональная чистка системы охлаждения",
  },
  {
    icon: Laptop,
    title: "Замена матрицы",
    device: "Ноутбук",
    price: "от 3 000 ₽",
    time: "от 2 часов",
    description: "Замена повреждённого экрана ноутбука",
  },
  {
    icon: Smartphone,
    title: "Чистка от влаги",
    device: "Телефон",
    price: "от 1 500 ₽",
    time: "от 2 часов",
    description: "Ультразвуковая чистка после попадания жидкости",
  },
  {
    icon: Laptop,
    title: "Апгрейд SSD/ОЗУ",
    device: "Ноутбук",
    price: "от 2 000 ₽",
    time: "от 30 мин",
    description: "Увеличение производительности вашего ноутбука",
  },
];

export function PopularServices() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Популярные услуги
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Самые востребованные услуги нашего сервисного центра
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 border shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  {service.device}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{service.description}</p>
              <div className="flex items-center justify-between pt-4 border-t">
                <span className="text-lg font-bold text-primary">{service.price}</span>
                <span className="text-xs text-gray-500">{service.time}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/services" className="gap-2">
              Все услуги
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
