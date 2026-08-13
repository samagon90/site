"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/services", label: "Услуги" },
  { href: "/prices", label: "Цены" },
  { href: "/contacts", label: "Контакты" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="bg-primary rounded-lg p-1.5">
              <Smartphone className="h-5 w-5 text-white" />
            </div>
            <span className="text-primary">Сервис 21</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Phone & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+79781234567" className="flex items-center gap-2 text-sm font-medium">
              <Phone className="h-4 w-4 text-primary" />
              +7 (978) 123-45-67
            </a>
            <Button asChild>
              <Link href="/#request-form">Записаться</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t pb-4">
            <nav className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+79781234567"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium"
              >
                <Phone className="h-4 w-4 text-primary" />
                +7 (978) 123-45-67
              </a>
              <div className="px-4 pt-2">
                <Button className="w-full" asChild>
                  <Link href="/#request-form" onClick={() => setIsOpen(false)}>
                    Записаться
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
