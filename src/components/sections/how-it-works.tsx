import React from "react";
import {
  ClipboardList,
  Search,
  MessageSquare,
  Wrench,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Оставляете заявку",
    description:
      "Звоните или заполняете форму — мы перезваниваем в течение 15 минут.",
  },
  {
    icon: Search,
    title: "Бесплатная диагностика",
    description:
      "Мастер находит причину неисправности и называет точную цену и срок.",
  },
  {
    icon: MessageSquare,
    title: "Согласование",
    description:
      "Мы начинаем ремонт только после вашего согласия. Никаких сюрпризов.",
  },
  {
    icon: Wrench,
    title: "Ремонт",
    description:
      "Работают опытные мастера на профессиональном оборудовании. От 30 минут.",
  },
  {
    icon: CheckCircle2,
    title: "Гарантия и выдача",
    description:
      "Вы проверяете устройство, получаете гарантийный талон до 12 месяцев.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      <div className="container-px">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">
            Как мы работаем
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            От заявки до починки — 5 простых шагов
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Понятный и прозрачный процесс без скрытых платежей и неожиданностей
          </p>
        </div>

        <div className="relative">
          {/* Connector line on desktop */}
          <div className="hidden lg:block absolute top-8 left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-accent/20 via-accent to-accent/20" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className="relative bg-white rounded-2xl p-6 border border-slate-200/70 shadow-soft text-center"
              >
                <div className="relative mx-auto mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-orange-600 text-white flex items-center justify-center shadow-glow mx-auto">
                    <step.icon className="h-7 w-7" />
                  </div>
                  <span className="absolute -top-2 -right-2 md:right-0 bg-white border border-accent text-accent text-[11px] font-extrabold rounded-full h-7 w-7 flex items-center justify-center shadow-md">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
