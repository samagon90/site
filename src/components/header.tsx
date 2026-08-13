"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contacts } from "@/lib/contacts";

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/services", label: "Услуги" },
  { href: "/prices", label: "Цены" },
  { href: "/contacts", label: "Контакты" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70">
      {/* Top strip */}
      <div className="hidden md:block bg-slate-900 text-slate-300 text-xs">
        <div className="container-px flex h-9 items-center justify-between">
          <div className="flex items-center gap-5">
            <span>📍 {contacts.addressShort}</span>
            <span>🕐 {contacts.hoursShort}</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`mailto:${contacts.email}`}
              className="hover:text-white transition-colors"
            >
              ✉ {contacts.email}
            </a>
            <a
              href={`tel:${contacts.phoneRaw}`}
              className="font-semibold text-white hover:text-accent transition-colors"
            >
              {contacts.phonePretty}
            </a>
          </div>
        </div>
      </div>

      <div className="container-px">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative bg-gradient-to-br from-accent to-orange-600 rounded-xl p-2 shadow-glow group-hover:scale-105 transition-transform">
              <Wrench className="h-5 w-5 text-white" />
            </div>
            <div className="leading-tight">
              <span className="block text-lg font-extrabold tracking-tight text-slate-900">
                Сервис&nbsp;21
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-slate-500">
                Ремонт телефонов · ноутбуков
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${contacts.phoneRaw}`}
              className="flex flex-col items-end leading-tight"
            >
              <span className="text-[11px] text-slate-500">Бесплатная диагностика</span>
              <span className="text-base font-bold text-slate-900 hover:text-accent transition-colors">
                {contacts.phonePretty}
              </span>
            </a>
            <Button asChild size="sm" className="rounded-lg shadow-glow">
              <Link href="/#request-form">
                <Phone className="mr-1.5 h-4 w-4" />
                Записаться
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2 rounded-lg hover:bg-slate-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-200 pb-5 pt-3 animate-fade-up">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 rounded-lg text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 space-y-3 px-1">
              <a
                href={`tel:${contacts.phoneRaw}`}
                className="flex items-center gap-2 text-base font-bold text-slate-900"
              >
                <Phone className="h-4 w-4 text-accent" />
                {contacts.phonePretty}
              </a>
              <p className="text-xs text-slate-500">{contacts.hoursShort} · {contacts.addressShort}</p>
              <Button className="w-full rounded-lg shadow-glow" asChild>
                <Link
                  href="/#request-form"
                  onClick={() => setIsOpen(false)}
                >
                  Записаться на ремонт
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
