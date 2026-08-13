import { NextRequest, NextResponse } from "next/server";
import { getPool, initDb } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const authHeader = request.headers.get("authorization");
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!authHeader || authHeader !== `Bearer ${adminPassword}`) {
      return NextResponse.json({ error: "Не авторизован" }, { status: 401 });
    }

    const body = await request.json();
    const { status } = body;

    const validStatuses = ["new", "in_progress", "done", "rejected"];
    if (!validStatuses.includes(status)) {
      return NextResponse.json({ error: "Некорректный статус" }, { status: 400 });
    }

    await initDb();

    const result = await getPool().query(
      "UPDATE requests SET status = $1 WHERE id = $2 RETURNING *",
      [status, params.id]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ error: "Заявка не найдена" }, { status: 404 });
    }

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error("PATCH /api/requests/[id] error:", error);
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const authHeader = request.headers.get("authorization");
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!authHeader || authHeader !== `Bearer ${adminPassword}`) {
      return NextResponse.json({ error: "Не авторизован" }, { status: 401 });
    }

    await initDb();

    const result = await getPool().query(
      "DELETE FROM requests WHERE id = $1 RETURNING id",
      [params.id]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ error: "Заявка не найдена" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE /api/requests/[id] error:", error);
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
}
