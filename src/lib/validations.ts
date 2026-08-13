import { z } from "zod";

export const requestSchema = z.object({
  name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  phone: z
    .string()
    .min(10, "Введите корректный номер телефона")
    .regex(/^[\d\+\-\(\)\s]+$/, "Некорректный формат телефона"),
  deviceType: z.enum(["phone", "laptop", "tablet"], {
    errorMap: () => ({ message: "Выберите тип устройства" }),
  }),
  deviceModel: z.string().optional(),
  issue: z.string().min(10, "Опишите неисправность подробнее (минимум 10 символов)"),
});

export type RequestFormData = z.infer<typeof requestSchema>;
