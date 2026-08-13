import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Clock,
  Wrench,
  Star,
  Phone,
  CheckCircle2,
  ArrowRight,
  Zap,
} from "lucide-react";
import { contacts } from "@/lib/contacts";

const stats = [
  { value: "5 000+", label: "успешных ремонтов" },
  { value: "10+ лет", label: "опыта мастеров" },
  { value: "12 мес.", label: "гарантия" },
  { value: "30 мин", label: "срочный ремонт" },
];

const highlights = [
  "Бесплатная диагностика — даже при отказе от ремонта",
  "Согласовываем цену до начала работ",
  "Оригинальные и сертифицированные запчасти",
  "Оплата только после проверки устройства",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Decorative glow */}
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-20 w-[400px] h-[400px] bg-accent/20 rounded-full blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative container-px py-16 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left */}
          <div className="lg:col-span-7 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 mb-6 text-sm border border-white/10">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-200">
                Открыты сегодня · работаем с 8:00 до 19:00
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-balance">
              Ремонт телефонов и ноутбуков{" "}
              <span className="gradient-text">за 1 день</span> в Симферополе
            </h1>

            <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
              Починим разбитый экран, заменим аккумулятор, восстановим после
              воды, вернём к жизни тормозной ноутбук. Гарантия до 12 месяцев.
              Диагностика — бесплатно.
            </p>

            <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3 max-w-xl">
              {highlights.map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-slate-200">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-orange-600 text-white rounded-xl shadow-glow h-12 px-7 text-base"
              >
                <Link href="/#request-form" className="gap-2">
                  <Wrench className="h-4 w-4" />
                  Записаться на диагностику
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-xl h-12 px-7 text-base border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur"
              >
                <a href={`tel:${contacts.phoneRaw}`} className="gap-2">
                  <Phone className="h-4 w-4" />
                  {contacts.phonePretty}
                </a>
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-4 flex-wrap">
              <div className="flex -space-x-2">
                {["А", "Д", "Е", "И"].map((l, i) => (
                  <div
                    key={i}
                    className="h-9 w-9 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 ring-2 ring-slate-950 flex items-center justify-center text-xs font-semibold"
                  >
                    {l}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                  <span className="ml-1 text-sm font-semibold">4.9 / 5</span>
                </div>
                <p className="text-xs text-slate-400">
                  по отзывам более 500 клиентов
                </p>
              </div>
            </div>
          </div>

          {/* Right: visual card */}
          <div className="lg:col-span-5 relative animate-fade-up">
            <div className="relative mx-auto max-w-md">
              {/* Floating device card */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl animate-float">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-accent font-bold">
                      Онлайн-заявка
                    </p>
                    <h3 className="text-xl font-bold text-white mt-1">
                      Получи скидку 10%
                    </h3>
                  </div>
                  <div className="h-12 w-12 rounded-2xl bg-accent/20 border border-accent/40 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <p className="text-sm text-slate-300 mb-5">
                  Оставьте заявку прямо сейчас — мастер перезвонит в течение 15
                  минут и назовёт предварительную стоимость.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Wrench, title: "Диагностика 0 ₽" },
                    { icon: Clock, title: "Ремонт от 30 мин" },
                    { icon: Shield, title: "Гарантия до года" },
                    { icon: CheckCircle2, title: "Оригинал запчасти" },
                  ].map((it, i) => (
                    <div
                      key={i}
                      className="bg-white/5 rounded-xl p-3 border border-white/10 flex items-center gap-2.5"
                    >
                      <it.icon className="h-5 w-5 text-accent shrink-0" />
                      <span className="text-xs font-semibold text-slate-200">
                        {it.title}
                      </span>
                    </div>
                  ))}
                </div>
                <Button
                  asChild
                  className="w-full mt-5 h-11 rounded-xl bg-white text-slate-900 hover:bg-slate-100"
                >
                  <Link href="/#request-form">
                    Оставить заявку
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Floating badge */}
              <div className="absolute -left-6 -top-6 bg-white text-slate-900 rounded-2xl p-3 shadow-xl rotate-[-6deg] hidden sm:block">
                <p className="text-[10px] uppercase font-bold text-slate-500">
                  Сегодня
                </p>
                <p className="text-sm font-extrabold">от 30 минут 🔥</p>
              </div>
              <div className="absolute -right-4 -bottom-4 bg-accent text-white rounded-2xl p-3 shadow-glow rotate-[5deg] hidden sm:block">
                <p className="text-[10px] uppercase font-bold">Диагностика</p>
                <p className="text-sm font-extrabold">БЕСПЛАТНО</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 md:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center"
            >
              <div className="text-2xl md:text-3xl font-extrabold gradient-text">
                {s.value}
              </div>
              <div className="mt-1 text-xs md:text-sm text-slate-400">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
