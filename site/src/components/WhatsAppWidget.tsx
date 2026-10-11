"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { whatsappHref, whatsappTeam } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="fixed bottom-4 left-4 z-40 sm:bottom-6 sm:left-6">
      <div
        id="whatsapp-panel"
        role="dialog"
        aria-label="Contactar por WhatsApp"
        aria-hidden={!open}
        inert={!open}
        className={`wa-panel absolute bottom-[calc(100%+0.75rem)] left-0 w-[min(22rem,calc(100vw-2rem))] overflow-hidden rounded-2xl bg-surface shadow-[0_24px_60px_-12px_oklch(20%_0.03_255/0.35)] ${
          open ? "is-open" : ""
        }`}
      >
        <div className="relative bg-[#1fa855] px-5 pb-5 pt-4 pr-12 text-white">
          <p className="text-[0.95rem] leading-snug">
            ¡Buen día! Haz clic en uno de nuestros operadores para que resuelva tus dudas.
          </p>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Cerrar"
            className="absolute right-2.5 top-2.5 inline-flex size-9 cursor-pointer items-center justify-center rounded-full transition-colors duration-150 hover:bg-white/15"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>
        <ul className="max-h-[min(26rem,60dvh)] divide-y overflow-y-auto px-2 py-1">
          {whatsappTeam.map((p) => (
            <li key={p.phone}>
              <a
                href={whatsappHref("Hola, quisiera hacer una consulta.", p.phone)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl px-3 py-3 transition-colors duration-150 hover:bg-muted"
              >
                <span className="relative shrink-0">
                  <span className="block size-12 overflow-hidden rounded-full bg-muted ring-1 ring-border">
                    <Image
                      src={p.photo}
                      alt=""
                      width={96}
                      height={96}
                      className={p.isLogo ? "size-full object-contain p-1.5" : "size-full object-cover"}
                    />
                  </span>
                  <span className="absolute -bottom-0.5 -right-0.5 inline-flex size-5 items-center justify-center rounded-full bg-[#25d366] text-white ring-2 ring-surface">
                    <WhatsAppIcon className="size-3" />
                  </span>
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-muted-foreground">{p.role}</span>
                  <span className="block truncate font-medium">{p.name}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="whatsapp-panel"
        className="btn bg-[#1fa855] !py-3.5 text-white shadow-lg shadow-[#1fa855]/30 hover:bg-[#1a944a]"
      >
        <WhatsAppIcon className="size-6" />
        <span>
          Realiza tu consulta<span className="hidden sm:inline"> por WhatsApp</span>
        </span>
      </button>
    </div>
  );
}
