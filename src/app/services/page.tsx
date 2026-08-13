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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Услуги — Сервис 21 | Ремонт телефонов и ноутбуков",
  description:
    "Полный список услуг по ремонту телефонов и ноутбуков: замена экрана, батареи, чистка от влаги, апгрейд SSD/ОЗУ и многое другое.",
};

const phoneServices = [
  {
    icon: Monitor,
    title: "Замена экрана",
    description:
      "Замена разбитого или неисправного дисплея на оригинальный. Все модели iPhone, Samsung, Xiaomi, Huawei и другие.",
    price: "от 1 500 ₽",
    time: "от 30 мин",
  },
  {
    icon: Battery,
    title: "Замена аккумулятора",
    description:
      "Замена изношенного аккумулятора на новый с гарантией. Восстановит время работы устройства до заводского уровня.",
    price: "от 1 000 ₽",
    time: "от 20 мин",
  },
  {
    icon: Plug,
    title: "Замена разъёма зарядки",
    description:
      "Ремонт или замена повреждённого разъёма зарядки. Устройство снова будет заряжаться как новое.",
    price: "от 1 200 ₽",
    time: "от 30 мин",
  },
  {
    icon: Droplets,
    title: "Чистка от влаги",
    description:
      "Ультразвуковая чистка платы и компонентов после попадания воды или другой жидкости. Спасаем даже тяжёлые случаи.",
    price: "от 1 500 ₽",
    time: "от 2 часов",
  },
  {
    icon: Hammer,
    title: "Ремонт после падения",
    description:
      "Комплексный ремонт устройств после механического повреждения: замена корпуса, экрана, компонентов платы.",
    price: "от 2 000 ₽",
    time: "от 1 дня",
  },
];

const laptopServices = [
  {
    icon: Thermometer,
    title: "Чистка и замена термопасты",
    description:
      "Профессиональная чистка системы охлаждения, замена термопасты. Устранит перегрев и повысит производительность.",
    price: "от 1 500 ₽",
    time: "от 1 часа",
  },
  {
    icon: Monitor,
    title: "Замена матрицы",
    description:
      "Замена повреждённого экрана ноутбука на оригинал или качественный аналог. Все размеры и типы матриц.",
    price: "от 3 000 ₽",
    time: "от 2 часов",
  },
  {
    icon: Keyboard,
    title: "Ремонт клавиатуры",
    description:
      "Замена отдельных клавиш или всей клавиатуры. Работаем со всеми моделями ноутбуков.",
    price: "от 1 500 ₽",
    time: "от 30 мин",
  },
  {
    icon: HardDrive,
    title: "Апгрейд SSD/ОЗУ",
    description:
      "Установка SSD-диска и увеличение оперативной памяти. Ваш ноутбук станет значительно быстрее.",
    price: "от 2 000 ₽",
    time: "от 30 мин",
  },
  {
    icon: Droplet,
    title: "Восстановление после залития",
    description:
      "Полная разборка, ультразвуковая чистка, замена повреждённых компонентов. Восстанавливаем ноутбуки после залития.",
    price: "от 3 000 ₽",
    time: "от 1 дня",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Полный спектр услуг по ремонту телефонов и ноутбуков с гарантией качества
          </p>
        </div>
      </section>

      {/* Phone Services */}
      <section id="phones" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-blue-100 p-3 rounded-xl">
              <Smartphone className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Ремонт телефонов</h2>
              <p className="text-gray-600">Все модели: iPhone, Samsung, Xiaomi, Huawei и другие</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {phoneServices.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{service.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">{service.price}</span>
                      <span className="text-xs text-gray-500">{service.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Laptop Services */}
      <section id="laptops" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-blue-100 p-3 rounded-xl">
              <Laptop className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Ремонт ноутбуков</h2>
              <p className="text-gray-600">Все модели: ASUS, HP, Lenovo, Dell, Acer, Apple MacBook и другие</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {laptopServices.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{service.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">{service.price}</span>
                      <span className="text-xs text-gray-500">{service.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Не нашли нужную услугу?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Свяжитесь с нами — мы поможем с ремонтом любой сложности
          </p>
          <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50" asChild>
            <Link href="/#request-form" className="gap-2">
              Оставить заявку
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
