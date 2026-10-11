"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { MessageCircle } from "lucide-react";
import { productCategories, whatsappHref } from "@/lib/site";

export function ProductTabs() {
  const [active, setActive] = useState(0);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    const n = productCategories.length;
    let next = -1;
    if (e.key === "ArrowRight") next = (i + 1) % n;
    if (e.key === "ArrowLeft") next = (i - 1 + n) % n;
    if (next < 0) return;
    e.preventDefault();
    setActive(next);
    tabsRef.current[next]?.focus();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Categorías de productos"
        className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0"
      >
        {productCategories.map((c, i) => (
          <button
            key={c.name}
            ref={(el) => {
              tabsRef.current[i] = el;
            }}
            role="tab"
            id={`tab-${i}`}
            aria-selected={active === i}
            aria-controls={`panel-${i}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKeyDown(e, i)}
            className={`btn shrink-0 !py-2.5 ${
              active === i
                ? "bg-primary text-primary-foreground"
                : "bg-surface text-muted-foreground shadow-[inset_0_0_0_1px_var(--border)] hover:text-foreground"
            }`}
          >
            {c.name}
            <span
              className={`rounded-full px-2 py-0.5 text-xs tabular-nums ${
                active === i ? "bg-primary-foreground/15" : "bg-muted"
              }`}
            >
              {c.items.length}
            </span>
          </button>
        ))}
      </div>

      {productCategories.map((c, i) => (
        <ul
          key={c.name}
          role="tabpanel"
          id={`panel-${i}`}
          aria-labelledby={`tab-${i}`}
          hidden={active !== i}
          className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
        >
          {c.items.map((p) => (
            <li
              key={p.img}
              className="group flex flex-col overflow-hidden rounded-3xl bg-surface shadow-[inset_0_0_0_1px_var(--border)]"
            >
              <div className="relative aspect-square bg-white">
                <Image
                  src={`/images/products/${p.img}.jpg`}
                  alt={p.name}
                  fill
                  sizes="(min-width: 1024px) 22vw, 45vw"
                  className="object-contain p-4 mix-blend-multiply sm:p-6"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 border-t p-4 sm:p-5">
                <h3 className="text-[0.95rem] font-semibold leading-snug sm:text-base">{p.name}</h3>
                <a
                  href={whatsappHref(`Hola ALC Energy, quisiera cotizar: ${p.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline decoration-accent decoration-2 underline-offset-4 hover:decoration-accent-strong"
                >
                  <MessageCircle aria-hidden className="size-4" />
                  Cotizar
                  <span className="sr-only"> {p.name}</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
