import React from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Анна К.",
    date: "2 недели назад",
    text: "Принесла iPhone с разбитым экраном — заменили за 40 минут! Экран как новый, цвет и яркость идеальные. Дали гарантию 6 месяцев. Рекомендую!",
    rating: 5,
    device: "iPhone 14 · замена экрана",
  },
  {
    name: "Дмитрий М.",
    date: "1 месяц назад",
    text: "Ноутбук сильно грелся и выключался под нагрузкой. Почистили, заменили термопасту, поставили дополнительную прокладку — теперь работает тихо и быстро. За час!",
    rating: 5,
    device: "ASUS VivoBook · чистка и термопаста",
  },
  {
    name: "Елена С.",
    date: "3 недели назад",
    text: "Залила телефон кофе, думала всё, конец. Мастера спасли устройство после ультразвуковой чистки. Цену назвали сразу после диагностики, не накрутили.",
    rating: 5,
    device: "Samsung Galaxy S23 · восстановление после воды",
  },
  {
    name: "Игорь В.",
    date: "1 неделю назад",
    text: "Сделали апгрейд: поставили SSD и добавили ОЗУ. Ноутбук 2017 года теперь просто летает! Перенесли все данные, ничего не потеряли. Спасибо!",
    rating: 5,
    device: "Lenovo IdeaPad · апгрейд SSD/ОЗУ",
  },
  {
    name: "Марина П.",
    date: "1 месяц назад",
    text: "Перестал заряжаться телефон, разъём расшатался. Заменили за 30 минут, сразу проверили быструю зарядку. Адекватная цена, приятный мастер.",
    rating: 5,
    device: "Xiaomi Redmi Note · замена разъёма",
  },
  {
    name: "Алексей Н.",
    date: "2 месяца назад",
    text: "Разбил матрицу на MacBook. Нашли запчасть быстро, поставили качественную. Ценой и сроком доволен, главное — ребята знают технику Apple.",
    rating: 5,
    device: "MacBook Air · замена матрицы",
  },
];

export function Reviews() {
  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="container-px">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">
            Отзывы
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            Более 5 000 довольных клиентов
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Средняя оценка — 4.9 из 5. Вот что пишут наши клиенты в Симферополе
          </p>
          <div className="mt-5 inline-flex items-center gap-2 bg-amber-50 text-amber-700 rounded-full px-4 py-2 text-sm font-semibold border border-amber-200">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            4.9 / 5 · по 500+ отзывам
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl p-6 border border-slate-200 shadow-soft hover:shadow-lg transition-all"
            >
              <Quote className="absolute top-5 right-5 h-8 w-8 text-orange-100" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white flex items-center justify-center font-bold text-lg shadow-glow">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <p className="text-xs text-slate-500">{review.date}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                {review.text}
              </p>
              <span className="inline-block text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                {review.device}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
