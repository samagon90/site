import React from "react";
import { ClipboardList, Search, MessageSquare, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Заявка",
    description: "Оставьте заявку на сайте или позвоните нам по телефону",
  },
  {
    icon: Search,
    number: "02",
    title: "Диагностика",
    description: "Мастер проведёт бесплатную диагностику вашего устройства",
  },
  {
    icon: MessageSquare,
    number: "03",
    title: "Согласование",
    description: "Согласуем стоимость и сроки ремонта с вами заранее",
  },
  {
    icon: Wrench,
    number: "04",
    title: "Ремонт",
    description: "Выполняем ремонт быстро и качественно с гарантией",
  },
  {
    icon: CheckCircle,
    number: "05",
    title: "Выдача",
    description: "Получите исправное устройство с гарантийным талоном",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Как мы работаем
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Простой и понятный процесс от заявки до получения устройства
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-blue-200" />
              )}

              <div className="relative z-10 bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-md border-2 border-blue-100 mb-4">
                <step.icon className="h-8 w-8 text-primary" />
              </div>
              <span className="text-xs font-bold text-primary mb-1">Шаг {step.number}</span>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">{step.title}</h3>
              <p className="text-xs text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
