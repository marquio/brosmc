"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { nav, whatsappHref } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-[background-color,box-shadow] duration-200 ${
        scrolled || open
          ? "bg-background/90 shadow-[0_1px_0_var(--border)] backdrop-blur-md"
          : "bg-background"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6">
        <a href="#inicio" className="shrink-0" aria-label="ALC Energy S.A.C., ir al inicio">
          <Image
            src="/images/logo-dark.png"
            alt="ALC Energy S.A.C."
            width={838}
            height={255}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[0.93rem] font-medium text-muted-foreground">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors duration-150 hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={whatsappHref()} className="btn btn-accent hidden !py-2.5 sm:inline-flex">
            <MessageCircle aria-hidden className="size-4" />
            Cotizar
          </a>
          <button
            type="button"
            className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full border bg-surface lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      <div
        id="menu-movil"
        hidden={!open}
        className="border-t bg-background px-4 pb-6 pt-2 sm:px-6 lg:hidden"
      >
        <ul className="flex flex-col">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b py-3.5 font-heading text-lg font-semibold"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a href={whatsappHref()} className="btn btn-accent mt-5 w-full justify-center">
          <MessageCircle aria-hidden className="size-4" />
          Cotizar por WhatsApp
        </a>
      </div>
    </header>
  );
}
