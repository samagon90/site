"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Lock,
  LogOut,
  RefreshCw,
  Trash2,
  Loader2,
} from "lucide-react";

interface Request {
  id: string;
  name: string;
  phone: string;
  deviceType: string;
  deviceModel: string | null;
  issue: string;
  status: string;
  createdAt: string;
}

const statusLabels: Record<string, string> = {
  new: "Новая",
  in_progress: "В работе",
  done: "Выполнена",
  rejected: "Отклонена",
};

const statusVariants: Record<string, "default" | "success" | "warning" | "destructive"> = {
  new: "default",
  in_progress: "warning",
  done: "success",
  rejected: "destructive",
};

export default function AdminPage() {
  const [isAuthed, setIsAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [requests, setRequests] = useState<Request[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("all");

  const getAuthHeader = useCallback(() => {
    return `Bearer ${password}`;
  }, [password]);

  const fetchRequests = useCallback(async () => {
    if (!isAuthed) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/requests?status=${filter}`, {
        headers: { Authorization: getAuthHeader() },
      });
      if (res.ok) {
        const data = await res.json();
        setRequests(data);
      } else if (res.status === 401) {
        setIsAuthed(false);
        setAuthError("Сессия истекла, войдите снова");
      }
    } catch {
      console.error("Failed to fetch requests");
    } finally {
      setLoading(false);
    }
  }, [isAuthed, filter, getAuthHeader]);

  useEffect(() => {
    fetchRequests();
  }, [fetchRequests]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    try {
      const res = await fetch("/api/requests?status=all", {
        headers: { Authorization: `Bearer ${password}` },
      });
      if (res.ok) {
        setIsAuthed(true);
      } else {
        setAuthError("Неверный пароль");
      }
    } catch {
      setAuthError("Ошибка подключения");
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/requests/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: getAuthHeader(),
        },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        fetchRequests();
      }
    } catch {
      console.error("Failed to update status");
    }
  };

  const deleteRequest = async (id: string) => {
    if (!confirm("Удалить заявку?")) return;
    try {
      const res = await fetch(`/api/requests/${id}`, {
        method: "DELETE",
        headers: { Authorization: getAuthHeader() },
      });
      if (res.ok) {
        fetchRequests();
      }
    } catch {
      console.error("Failed to delete request");
    }
  };

  // Login form
  if (!isAuthed) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
        <div className="bg-white rounded-xl p-8 shadow-sm border w-full max-w-sm">
          <div className="text-center mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Lock className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">Админ-панель</h1>
            <p className="text-sm text-gray-500">Введите пароль для входа</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Пароль</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Введите пароль"
                autoFocus
              />
            </div>
            {authError && (
              <p className="text-sm text-red-500">{authError}</p>
            )}
            <Button type="submit" className="w-full">
              Войти
            </Button>
          </form>
        </div>
      </div>
    );
  }

  // Admin dashboard
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Заявки на ремонт</h1>
            <p className="text-sm text-gray-500">Всего заявок: {requests.length}</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={fetchRequests}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Обновить
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setIsAuthed(false)}>
              <LogOut className="h-4 w-4 mr-2" />
              Выйти
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            { value: "all", label: "Все" },
            { value: "new", label: "Новые" },
            { value: "in_progress", label: "В работе" },
            { value: "done", label: "Выполненные" },
            { value: "rejected", label: "Отклонённые" },
          ].map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === f.value
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700 border hover:bg-gray-50"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Table */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : requests.length === 0 ? (
          <div className="bg-white rounded-xl border p-12 text-center">
            <p className="text-gray-500">Заявок пока нет</p>
          </div>
        ) : (
          <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600 uppercase">
                      Дата
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600 uppercase">
                      Имя
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600 uppercase">
                      Телефон
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600 uppercase">
                      Устройство
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600 uppercase">
                      Неисправность
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600 uppercase">
                      Статус
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600 uppercase">
                      Действия
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map((req) => (
                    <tr key={req.id} className="border-b hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap">
                        {new Date(req.createdAt).toLocaleDateString("ru-RU", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "2-digit",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        {req.name}
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <a href={`tel:${req.phone}`} className="text-primary hover:underline">
                          {req.phone}
                        </a>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        <div>{req.deviceType}</div>
                        {req.deviceModel && (
                          <div className="text-xs text-gray-500">{req.deviceModel}</div>
                        )}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700 max-w-xs">
                        <div className="truncate" title={req.issue}>
                          {req.issue}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <Badge variant={statusVariants[req.status]}>
                          {statusLabels[req.status]}
                        </Badge>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <select
                            value={req.status}
                            onChange={(e) => updateStatus(req.id, e.target.value)}
                            className="text-xs border rounded px-2 py-1 bg-white"
                          >
                            <option value="new">Новая</option>
                            <option value="in_progress">В работе</option>
                            <option value="done">Выполнена</option>
                            <option value="rejected">Отклонена</option>
                          </select>
                          <button
                            onClick={() => deleteRequest(req.id)}
                            className="text-red-400 hover:text-red-600 transition-colors"
                            title="Удалить"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
