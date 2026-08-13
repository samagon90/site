import { NextRequest, NextResponse } from "next/server";
import { getPool, initDb } from "@/lib/prisma";
import { requestSchema } from "@/lib/validations";
import { ZodError } from "zod";

const deviceTypeLabels: Record<string, string> = {
  phone: "Телефон",
  laptop: "Ноутбук",
  tablet: "Планшет",
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = requestSchema.parse(body);

    await initDb();

    const result = await getPool().query(
      `INSERT INTO requests (name, phone, "deviceType", "deviceModel", issue)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [
        validated.name,
        validated.phone,
        deviceTypeLabels[validated.deviceType] || validated.deviceType,
        validated.deviceModel || null,
        validated.issue,
      ]
    );

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error: unknown) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: "Ошибка валидации", details: error.errors },
        { status: 400 }
      );
    }
    console.error("POST /api/requests error:", error);
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!authHeader || authHeader !== `Bearer ${adminPassword}`) {
      return NextResponse.json({ error: "Не авторизован" }, { status: 401 });
    }

    await initDb();

    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");

    let query = "SELECT * FROM requests";
    const params: string[] = [];

    if (status && status !== "all") {
      query += " WHERE status = $1";
      params.push(status);
    }

    query += ' ORDER BY "createdAt" DESC';

    const result = await getPool().query(query, params);
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error("GET /api/requests error:", error);
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
}
