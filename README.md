# Сервис 21 — Сайт мастерской по ремонту телефонов и ноутбуков

Профессиональный ремонт телефонов и ноутбуков в Симферополе. Сайт сервисного центра «Сервис 21».

## Технологии

- **Frontend:** Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** Neon PostgreSQL + Prisma ORM
- **Валидация:** Zod + React Hook Form
- **Деплой:** Render.com (Web Service)

## Функциональность

- 🏠 Главная страница с hero-блоком, преимуществами, услугами, отзывами
- 🔧 Страница услуг: ремонт телефонов и ноутбуков
- 💰 Прайс-лист с ценами
- 📍 Контакты с картой
- 📝 Форма заявки с валидацией (Zod)
- 🔐 Админ-панель `/admin` с защитой паролем
- 📱 Адаптивный, mobile-first дизайн

## Локальный запуск

### 1. Клонируйте репозиторий

```bash
git clone https://github.com/samagon90/site.git
cd site
```

### 2. Установите зависимости

```bash
npm install
```

### 3. Настройте переменные окружения

Создайте файл `.env` в корне проекта:

```env
DATABASE_URL="postgresql://user:password@host:5432/dbname?sslmode=require"
ADMIN_PASSWORD="your-admin-password"
```

### 4. Примигрируйте базу данных

```bash
npx prisma migrate deploy
```

### 5. Запустите сервер разработки

```bash
npm run dev
```

Откройте http://localhost:3000 в браузере.

## Сборка и запуск продакшн-версии

```bash
npm run build
npm start
```

## Структура проекта

```
├── prisma/
│   └── schema.prisma          # Схема базы данных
├── src/
│   ├── app/
│   │   ├── admin/page.tsx      # Админ-панель
│   │   ├── api/
│   │   │   ├── requests/route.ts       # API: создание и получение заявок
│   │   │   └── requests/[id]/route.ts  # API: обновление и удаление заявок
│   │   ├── contacts/page.tsx   # Контакты
│   │   ├── prices/page.tsx     # Прайс-лист
│   │   ├── services/page.tsx   # Услуги
│   │   ├── globals.css         # Глобальные стили
│   │   ├── layout.tsx          # Корневой layout
│   │   └── page.tsx            # Главная страница
│   ├── components/
│   │   ├── header.tsx          # Шапка сайта
│   │   ├── footer.tsx          # Подвал сайта
│   │   ├── sections/           # Секции главной страницы
│   │   └── ui/                 # UI-компоненты (shadcn-style)
│   └── lib/
│       ├── prisma.ts           # Prisma клиент
│       ├── utils.ts            # Утилиты
│       └── validations.ts      # Zod-схемы
├── render.yaml                 # Конфигурация для Render
├── package.json
└── tailwind.config.ts
```

## Контакты

**Сервис 21**  
г. Симферополь, проспект Победы, 42 / улица Лермонтова, 1  
Остановка «Кинотеатр Звезда», подземный переход, бутик №21  
📞 +7 (978) 123-45-67  
📧 info@service21.ru
