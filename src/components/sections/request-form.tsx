"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { requestSchema, type RequestFormData } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle, Loader2 } from "lucide-react";

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
        error instanceof Error ? error.message : "Произошла ошибка. Попробуйте позже."
      );
    }
  };

  if (isSubmitted) {
    return (
      <section id="request-form" className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-emerald-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Заявка отправлена!</h3>
            <p className="text-gray-600 mb-6">
              Мы свяжемся с вами в ближайшее время для уточнения деталей.
            </p>
            <Button onClick={() => setIsSubmitted(false)} variant="outline">
              Отправить ещё одну заявку
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="request-form" className="py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Оставьте заявку на ремонт
          </h2>
          <p className="text-lg text-gray-600">
            Заполните форму, и мы свяжемся с вами в течение 15 минут
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Имя *</Label>
              <Input
                id="name"
                placeholder="Ваше имя"
                {...register("name")}
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && (
                <p className="text-xs text-red-500">{errors.name.message}</p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone">Телефон *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+7 (___) ___-__-__"
                {...register("phone")}
                className={errors.phone ? "border-red-500" : ""}
              />
              {errors.phone && (
                <p className="text-xs text-red-500">{errors.phone.message}</p>
              )}
            </div>

            {/* Device Type */}
            <div className="space-y-2">
              <Label htmlFor="deviceType">Тип устройства *</Label>
              <select
                id="deviceType"
                {...register("deviceType")}
                className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                  errors.deviceType ? "border-red-500" : "border-input"
                }`}
              >
                <option value="">Выберите тип устройства</option>
                <option value="phone">Телефон</option>
                <option value="laptop">Ноутбук</option>
                <option value="tablet">Планшет</option>
              </select>
              {errors.deviceType && (
                <p className="text-xs text-red-500">{errors.deviceType.message}</p>
              )}
            </div>

            {/* Device Model */}
            <div className="space-y-2">
              <Label htmlFor="deviceModel">Модель устройства</Label>
              <Input
                id="deviceModel"
                placeholder="Например: iPhone 15, Samsung Galaxy S24, ASUS VivoBook"
                {...register("deviceModel")}
              />
            </div>

            {/* Issue */}
            <div className="space-y-2">
              <Label htmlFor="issue">Описание неисправности *</Label>
              <Textarea
                id="issue"
                placeholder="Опишите проблему подробнее..."
                rows={4}
                {...register("issue")}
                className={errors.issue ? "border-red-500" : ""}
              />
              {errors.issue && (
                <p className="text-xs text-red-500">{errors.issue.message}</p>
              )}
            </div>

            {serverError && (
              <div className="bg-red-50 text-red-700 text-sm p-3 rounded-lg">
                {serverError}
              </div>
            )}

            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Отправка...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Отправить заявку
                </>
              )}
            </Button>

            <p className="text-xs text-gray-500 text-center">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
