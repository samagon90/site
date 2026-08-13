"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { requestSchema, type RequestFormData } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Send,
  CheckCircle2,
  Loader2,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Gift,
} from "lucide-react";
import { contacts } from "@/lib/contacts";

export function RequestForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RequestFormData>({
    resolver: zodResolver(requestSchema),
  });

  const onSubmit = async (data: RequestFormData) => {
    setServerError(null);
    try {
      const res = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Ошибка при отправке заявки");
      }

      setIsSubmitted(true);
      reset();
    } catch (error) {
      setServerError(
        error instanceof Error
          ? error.message
          : "Произошла ошибка. Попробуйте позже или позвоните нам."
      );
    }
  };

  return (
    <section
      id="request-form"
      className="py-20 md:py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-hero-glow opacity-100" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative container-px">
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left info */}
          <div className="lg:col-span-2 text-white">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">
              Записаться на ремонт
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-balance">
              Получите бесплатную диагностику сегодня
            </h2>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Оставьте заявку — мастер перезвонит в течение 15 минут, уточнит
              проблему и запишет вас на удобное время. При записи с сайта —
              <span className="text-accent font-bold"> скидка 10%</span> на
              работу.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                { icon: Clock, text: "Перезвоним за 15 минут" },
                { icon: ShieldCheck, text: "Диагностика бесплатно" },
                { icon: Gift, text: "Скидка 10% при онлайн-записи" },
                { icon: Phone, text: `Или звоните: ${contacts.phonePretty}` },
              ].map((it, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-200">
                  <span className="shrink-0 h-10 w-10 rounded-xl bg-accent/20 border border-accent/40 flex items-center justify-center">
                    <it.icon className="h-5 w-5 text-accent" />
                  </span>
                  <span className="pt-2">{it.text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-5 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
              <p className="text-sm text-slate-300 flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                Почта для заявок:{" "}
                <a
                  href={`mailto:${contacts.email}`}
                  className="text-white font-semibold hover:text-accent transition-colors break-all"
                >
                  {contacts.email}
                </a>
              </p>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-3">
            {isSubmitted ? (
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-10 w-10 text-emerald-500" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
                  Заявка отправлена!
                </h3>
                <p className="text-slate-600 mb-8 max-w-md mx-auto">
                  Спасибо! Мастер перезвонит вам в течение 15 минут, чтобы
                  уточнить детали. Если что-то срочное — звоните прямо сейчас.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild size="lg" className="rounded-xl shadow-glow h-12 px-6">
                    <a href={`tel:${contacts.phoneRaw}`}>
                      <Phone className="mr-2 h-4 w-4" />
                      Позвонить сейчас
                    </a>
                  </Button>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    size="lg"
                    className="rounded-xl h-12 px-6"
                  >
                    Отправить ещё заявку
                  </Button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-700 font-semibold">
                        Ваше имя *
                      </Label>
                      <Input
                        id="name"
                        placeholder="Как к вам обращаться?"
                        {...register("name")}
                        className={
                          errors.name
                            ? "border-red-500 focus-visible:ring-red-500"
                            : ""
                        }
                      />
                      {errors.name && (
                        <p className="text-xs text-red-500">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-slate-700 font-semibold">
                        Телефон *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        {...register("phone")}
                        className={
                          errors.phone
                            ? "border-red-500 focus-visible:ring-red-500"
                            : ""
                        }
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-500">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="deviceType"
                      className="text-slate-700 font-semibold"
                    >
                      Тип устройства *
                    </Label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { v: "phone", l: "Телефон" },
                        { v: "laptop", l: "Ноутбук" },
                        { v: "tablet", l: "Планшет" },
                      ].map((opt) => (
                        <label
                          key={opt.v}
                          className="relative cursor-pointer"
                        >
                          <input
                            type="radio"
                            value={opt.v}
                            {...register("deviceType")}
                            className="peer sr-only"
                          />
                          <div className="text-center py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 peer-checked:bg-accent peer-checked:text-white peer-checked:border-accent peer-checked:shadow-glow transition-all">
                            {opt.l}
                          </div>
                        </label>
                      ))}
                    </div>
                    {errors.deviceType && (
                      <p className="text-xs text-red-500">
                        {errors.deviceType.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="deviceModel"
                      className="text-slate-700 font-semibold"
                    >
                      Модель устройства
                    </Label>
                    <Input
                      id="deviceModel"
                      placeholder="Например: iPhone 15, Samsung S24, ASUS VivoBook"
                      {...register("deviceModel")}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="issue" className="text-slate-700 font-semibold">
                      Что случилось? *
                    </Label>
                    <Textarea
                      id="issue"
                      placeholder="Опишите неисправность: разбит экран, не заряжается, греется и т.п."
                      rows={4}
                      {...register("issue")}
                      className={
                        errors.issue
                          ? "border-red-500 focus-visible:ring-red-500"
                          : ""
                      }
                    />
                    {errors.issue && (
                      <p className="text-xs text-red-500">
                        {errors.issue.message}
                      </p>
                    )}
                  </div>

                  {serverError && (
                    <div className="bg-red-50 text-red-700 text-sm p-3 rounded-lg border border-red-200">
                      {serverError}
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full h-12 text-base rounded-xl shadow-glow"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Отправляем...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Получить бесплатную диагностику
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-slate-500 text-center leading-relaxed">
                    Нажимая кнопку, вы соглашаетесь на обработку персональных
                    данных. Мы не рассылаем спам и не передаём контакты третьим
                    лицам.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
