# Сервис 21 — Сайт мастерской по ремонту телефонов и ноутбуков

Профессиональный ремонт телефонов и ноутбуков в Симферополе. Сайт сервисного центра «Сервис 21».

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/samagon90/site)

## Технологии

- **Frontend:** Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes + PostgreSQL (pg driver)
- **Database:** Neon PostgreSQL
- **Валидация:** Zod + React Hook Form
- **Деплой:** Render.com (Web Service, Free Tier)

## Функциональность

- 🏠 Главная страница с hero-блоком, преимуществами, услугами, отзывами
- 🔧 Страница услуг: ремонт телефонов и ноутбуков
- 💰 Прайс-лист с ценами в рублях
- 📍 Контакты с картой и адресом в Симферополе
- 📝 Форма заявки с валидацией (Zod) и сохранением в PostgreSQL
- 🔐 Админ-панель `/admin` с защитой паролем
- 📱 Адаптивный, mobile-first дизайн

## Деплой на Render

### Быстрый деплой (Recommended)

1. Перейдите на [render.com](https://render.com)
2. Нажмите **"New +"** → **"Web Service"**
3. Подключите репозиторий `samagon90/site`
4. Render автоматически подхватит `render.yaml`
5. Укажите переменные окружения:
   - `DATABASE_URL` = ваша строка подключения Neon
   - `ADMIN_PASSWORD` = ваш пароль для админки
6. Нажмите **"Create Web Service"**

### Строка подключения Neon

```
postgresql://neondb_owner:npg_XXX@ep-xxx-pooler.c-5.us-east-2.aws.neon.tech/neondb?sslmode=require
```

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
DATABASE_URL=postgresql://neondb_owner:npg_XXX@ep-xxx-pooler.c-5.us-east-2.aws.neon.tech/neondb?sslmode=require
ADMIN_PASSWORD=your-admin-password
```

### 4. Запустите сервер разработки

```bash
npm run dev
```

Откройте http://localhost:3000 в браузере.

### 5. Сборка для продакшена

```bash
npm run build
npm start
```

## Структура проекта

```
├── prisma/
│   └── schema.prisma          # Схема БД (документация)
├── src/
│   ├── app/
│   │   ├── admin/page.tsx      # Админ-панель
│   │   ├── api/
│   │   │   ├── requests/route.ts       # API: заявки (GET, POST)
│   │   │   └── requests/[id]/route.ts  # API: заявка (PATCH, DELETE)
│   │   ├── contacts/page.tsx   # Контакты
│   │   ├── prices/page.tsx     # Цены
│   │   ├── services/page.tsx   # Услуги
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx            # Главная
│   ├── components/
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── sections/           # Секции главной
│   │   └── ui/                 # UI-компоненты
│   └── lib/
│       ├── prisma.ts           # PostgreSQL pool
│       ├── utils.ts
│       └── validations.ts      # Zod-схемы
├── render.yaml
├── .env.example
├── package.json
└── tailwind.config.ts
```

## API

### POST /api/requests
Создать заявку на ремонт (публичный).

### GET /api/requests
Получить все заявки (требует авторизации).

### PATCH /api/requests/:id
Обновить статус заявки (требует авторизации).

### DELETE /api/requests/:id
Удалить заявку (требует авторизации).

## Контакты

**Сервис 21**  
г. Симферополь, проспект Победы, 42 / улица Лермонтова, 1  
Остановка «Кинотеатр Звезда», подземный переход, бутик №21  
📞 +7 (978) 123-45-67  
📧 info@service21.ru

## Лицензия

MIT
