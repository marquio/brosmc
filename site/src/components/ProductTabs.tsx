"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, MessageCircle, Plus, X } from "lucide-react";
import { productCategories, whatsappHref, type Product } from "@/lib/site";

export function ProductTabs() {
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState<Product | null>(null);
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
          {c.items.map((p, k) => (
            <li
              key={p.img}
              className="stagger-in product-card group flex flex-col overflow-hidden rounded-3xl bg-surface shadow-[inset_0_0_0_1px_var(--border)]"
              style={{ "--i": k } as React.CSSProperties}
            >
              <button
                type="button"
                onClick={() => setSelected(p)}
                className="flex flex-1 cursor-pointer flex-col text-left"
                aria-haspopup="dialog"
              >
                <span className="relative block aspect-square overflow-hidden bg-white">
                  <Image
                    src={`/images/products/${p.img}.jpg`}
                    alt={p.name}
                    fill
                    sizes="(min-width: 1024px) 22vw, 45vw"
                    className="product-img object-contain p-4 mix-blend-multiply sm:p-6"
                  />
                  <span
                    aria-hidden
                    className="product-plus absolute right-3 top-3 inline-flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground"
                  >
                    <Plus className="size-4" />
                  </span>
                </span>
                <span className="flex flex-1 flex-col gap-2 border-t p-4 sm:p-5">
                  <span className="font-heading text-[0.95rem] font-semibold leading-snug sm:text-base">
                    {p.name}
                  </span>
                  <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Ver ficha técnica
                    <ArrowUpRight aria-hidden className="size-4" />
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      ))}

      <ProductDialog product={selected} onClose={() => setSelected(null)} />
    </div>
  );
}

function ProductDialog({ product, onClose }: { product: Product | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (product && !d.open) d.showModal();
    if (!product && d.open) d.close();
  }, [product]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      aria-labelledby="ficha-titulo"
      className="product-dialog m-auto max-h-[92dvh] w-[min(64rem,calc(100vw-1.5rem))] overflow-y-auto overscroll-contain rounded-[1.75rem] bg-surface p-0 text-foreground md:overflow-hidden"
    >
      {product && (
        <div className="md:grid md:h-[min(92dvh,48rem)] md:grid-cols-[0.9fr_1.1fr] md:grid-rows-[minmax(0,1fr)]">
          <div className="relative flex min-h-56 items-center justify-center bg-white p-8 md:h-full md:p-10">
            <Image
              src={`/images/products/${product.img}.jpg`}
              alt={product.name}
              width={product.w}
              height={product.h}
              sizes="(min-width: 768px) 40vw, 90vw"
              className="max-h-[40dvh] w-auto object-contain mix-blend-multiply md:max-h-[60dvh]"
            />
          </div>
          <div className="flex flex-col border-t md:min-h-0 md:border-l md:border-t-0">
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 bg-surface p-6 pb-3 sm:p-8 sm:pb-3 md:static">
              <h3 id="ficha-titulo" className="text-fluid-lg font-semibold leading-tight tracking-[-0.01em]">
                {product.name}
              </h3>
              <button
                type="button"
                onClick={onClose}
                aria-label="Cerrar ficha"
                className="inline-flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-muted transition-colors duration-150 hover:bg-border"
              >
                <X aria-hidden className="size-5" />
              </button>
            </div>
            <div className="flex-1 p-6 pt-3 sm:p-8 sm:pt-3 md:min-h-0 md:overflow-y-auto">
              <div className="space-y-3 leading-relaxed text-muted-foreground">
                {product.desc.map((d) => (
                  <p key={d.slice(0, 24)}>{d}</p>
                ))}
              </div>
              {product.specs?.map((g) => (
                <section key={g.title} className="mt-6">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-accent-strong">
                    {g.title}
                  </h4>
                  <ul className="mt-2 divide-y rounded-2xl bg-muted/60 px-4">
                    {g.items.map((it) => {
                      const [k, ...v] = it.split(": ");
                      return (
                        <li key={it} className="flex flex-col gap-0.5 py-2.5 text-sm sm:flex-row sm:gap-4">
                          {v.length ? (
                            <>
                              <span className="shrink-0 font-medium text-foreground sm:w-44">{k}</span>
                              <span className="text-muted-foreground">{v.join(": ")}</span>
                            </>
                          ) : (
                            <span className="text-foreground">{it}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </section>
              ))}
            </div>
            <div className="sticky bottom-0 border-t bg-surface p-4 sm:px-8 md:static">
              <a
                href={whatsappHref(`Hola ALC Energy, quisiera cotizar: ${product.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent w-full justify-center sm:w-auto"
              >
                <MessageCircle aria-hidden className="size-4" />
                Cotizar este producto
              </a>
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}
