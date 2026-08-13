import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Clock, Wrench, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20"></div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 text-sm">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span>Более 5000 успешных ремонтов</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ремонт телефонов и ноутбуков{" "}
            <span className="text-yellow-400">за 1 день</span>
          </h1>

          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Профессиональный ремонт с гарантией до 12 месяцев. Бесплатная диагностика.
            Оригинальные запчасти. Срочный ремонт от 30 минут.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 text-base" asChild>
              <Link href="/#request-form">Записаться на ремонт</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-base"
              asChild
            >
              <Link href="/prices">Узнать цены</Link>
            </Button>
          </div>

          {/* Feature badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { icon: Shield, text: "Гарантия до 12 мес." },
              { icon: Wrench, text: "Бесплатная диагностика" },
              { icon: Star, text: "Оригинальные запчасти" },
              { icon: Clock, text: "Срочный ремонт" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl p-4"
              >
                <item.icon className="h-6 w-6 text-yellow-400" />
                <span className="text-xs font-medium text-center">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
