import React from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Анна К.",
    date: "2 недели назад",
    text: "Принесла iPhone с разбитым экраном — заменили за 40 минут! Экран как новый, работает отлично. Очень довольна сервисом, рекомендую!",
    rating: 5,
    device: "iPhone 14",
  },
  {
    name: "Дмитрий М.",
    date: "1 месяц назад",
    text: "Ноутбук сильно грелся и выключался. Ребята почистили, заменили термопасту — теперь работает как часы. Цена адекватная, сделали за час.",
    rating: 5,
    device: "ASUS VivoBook",
  },
  {
    name: "Елена С.",
    date: "3 недели назад",
    text: "Залила телефон кофе, думала всё, конец. Мастера спасли устройство полностью. Очень профессиональный подход, спасибо огромное!",
    rating: 5,
    device: "Samsung Galaxy S23",
  },
  {
    name: "Игорь В.",
    date: "1 неделю назад",
    text: "Делали апгрейд ноутбука — поставили SSD и добавили оперативную память. Ноутбук летает! Быстро, качественно, с гарантией.",
    rating: 5,
    device: "Lenovo IdeaPad",
  },
];

export function Reviews() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Отзывы наших клиентов
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Более 5000 довольных клиентов доверяют нам свои устройства
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 border shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary font-semibold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{review.name}</h4>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-3">{review.text}</p>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                {review.device}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
