"use client";

import { useRef, useState } from "react";
import { Check } from "lucide-react";

const tabs = ["Reseña histórica", "Planificación estratégica"] as const;

const compromisos = [
  "Fabricar transformadores eléctricos 100 % confiables, que cumplan las especificaciones técnicas de las normas nacionales e internacionales.",
  "Usar siempre materiales de primera calidad con certificación ISO 9001, ISO 14001 y SGS.",
  "Brindar un mejor servicio y atención a nuestros clientes.",
  "Cumplir con los plazos de entrega establecidos.",
  "Cumplir con las normas oficiales vigentes aplicables.",
  "Precios competitivos sin disminuir la calidad del producto.",
];

export function CompanyTabs() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (i + 1) % tabs.length;
    setActive(next);
    refs.current[next]?.focus();
  };

  return (
    <div>
      <div role="tablist" aria-label="Información de la empresa" className="inline-flex rounded-full bg-primary-foreground/10 p-1">
        {tabs.map((t, i) => (
          <button
            key={t}
            ref={(el) => {
              refs.current[i] = el;
            }}
            role="tab"
            id={`empresa-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`empresa-panel-${i}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKeyDown(e, i)}
            className={`btn !px-4 !py-2 text-sm sm:!px-5 ${
              active === i ? "bg-accent text-accent-foreground" : "text-primary-foreground/75 hover:text-primary-foreground"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id="empresa-panel-0"
        aria-labelledby="empresa-tab-0"
        hidden={active !== 0}
        className="tab-fade mt-8 space-y-5 text-fluid-base leading-relaxed text-primary-foreground/80"
      >
        <p>
          <strong className="font-semibold text-primary-foreground">ALC Energy S.A.C.</strong> es una
          empresa peruana dedicada a la fabricación, mantenimiento, venta y reparación de todo tipo de
          transformadores eléctricos de distribución en aceite y tipo seco, tableros eléctricos,
          subestaciones, estabilizadores y UPS. Cumplimos estrictamente con normas nacionales (ITINTEC
          370.002) e internacionales (IEC PUB 76), y garantizamos la calidad de todos nuestros equipos.
        </p>
        <p>
          Nuestro compromiso es entregar productos confiables técnica y económicamente. El diseño
          compacto de nuestros equipos nos permite ofrecer los mejores precios en el mercado nacional
          e internacional.
        </p>
      </div>

      <div
        role="tabpanel"
        id="empresa-panel-1"
        aria-labelledby="empresa-tab-1"
        hidden={active !== 1}
        className="tab-fade mt-8 space-y-8 text-primary-foreground/80"
      >
        <div>
          <h3 className="text-lg font-semibold text-primary-foreground">
            Es compromiso de ALC Energy S.A.C.
          </h3>
          <ul className="mt-4 space-y-2.5">
            {compromisos.map((c) => (
              <li key={c} className="flex gap-3 leading-relaxed">
                <Check aria-hidden className="mt-1 size-4 shrink-0 text-accent" />
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-primary-foreground/[0.07] p-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Misión</h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed">
              Fabricar, diseñar, innovar y dar el mejor servicio en el sector energético del Perú,
              aplicando la mejor ingeniería en la fabricación de transformadores eléctricos y equipos
              electrónicos, satisfaciendo las expectativas de nuestros clientes y convirtiéndonos en
              su socio preferido para el desarrollo de sus principales proyectos eléctricos.
            </p>
          </div>
          <div className="rounded-2xl bg-primary-foreground/[0.07] p-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Visión</h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed">
              Consolidarnos en el mercado nacional e internacional como la empresa líder en la
              fabricación de transformadores eléctricos y equipos electrónicos, innovando
              constantemente el diseño de nuestros productos y contribuyendo al desarrollo del sector
              energético.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
