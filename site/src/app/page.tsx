import Image from "next/image";
import {
  ArrowUpRight,
  Award,
  ClipboardCheck,
  Clock,
  Headset,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  ScrollText,
  CalendarCheck,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { TransformerArt } from "@/components/TransformerArt";
import { ProductTabs } from "@/components/ProductTabs";
import { CompanyTabs } from "@/components/CompanyTabs";
import { CountUp } from "@/components/CountUp";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { cellphones, clients, nav, services, site, whatsappHref } from "@/lib/site";

const features = [
  {
    icon: ClipboardCheck,
    title: "Control de calidad",
    text: "Productos con los más altos controles de calidad.",
  },
  {
    icon: Award,
    title: "Garantía",
    text: "Todos nuestros productos son garantizados.",
  },
  {
    icon: Headset,
    title: "Atención permanente",
    text: `Soporte y asesoría en todo momento. Tel.: ${site.phoneDisplay}.`,
  },
  {
    icon: Clock,
    title: "Horario",
    text: `${site.hours}.`,
  },
  {
    icon: ScrollText,
    title: "Normas nacionales e internacionales",
    text: "Fabricamos según IEC PUB 76 e ITINTEC 370.002.",
  },
  {
    icon: Leaf,
    title: "Compromiso ambiental",
    text: "Buscamos aportar a la solución de problemas ambientales en cada proyecto.",
  },
];

export default function Home() {
  const logoTrack = [...clients, ...clients];

  return (
    <>
      <a
        href="#contenido"
        className="sr-only z-50 rounded-full bg-accent px-4 py-2 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Saltar al contenido
      </a>
      <Header />

      <main id="contenido">
        {/* HERO */}
        <section id="inicio" className="px-3 pt-2 sm:px-6">
          <div className="relative mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-primary-strong text-primary-foreground">
              <Image
                src="/images/hero-subestacion.jpg"
                alt=""
                fill
                priority
                sizes="(min-width: 1280px) 1280px, 100vw"
                className="hero-drift object-cover object-[70%_40%]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-[linear-gradient(90deg,oklch(20%_0.04_255/0.92)_0%,oklch(20%_0.04_255/0.7)_45%,oklch(20%_0.04_255/0.1)_80%)] max-lg:bg-[linear-gradient(180deg,oklch(20%_0.04_255/0.55)_0%,oklch(20%_0.04_255/0.85)_60%)]"
              />

              <div className="relative grid gap-10 px-6 pb-40 pt-14 sm:px-10 sm:pt-20 md:pb-44 lg:grid-cols-[1.25fr_1fr] lg:px-14 lg:pb-52 lg:pt-28">
                <div className="hero-in">
                  <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/12 px-3.5 py-1.5 text-sm font-medium backdrop-blur-sm">
                    <span className="size-1.5 rounded-full bg-accent" aria-hidden />
                    Empresa peruana · Lima
                  </p>
                  <h1 className="max-w-[16ch] text-fluid-2xl font-semibold leading-[1.02] tracking-[-0.03em]">
                    Ingeniería en la fabricación de{" "}
                    <span className="text-accent">transformadores eléctricos</span>
                  </h1>
                  <p className="mt-6 max-w-[46ch] text-fluid-base text-primary-foreground/85">
                    Fabricamos, vendemos y reparamos transformadores de distribución en aceite y
                    tipo seco. Para minería, distribuidoras eléctricas y la industria.
                  </p>
                  <div className="mt-9 flex flex-wrap items-center gap-3">
                    <a
                      href={whatsappHref("Hola ALC Energy, quisiera cotizar un transformador.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-accent"
                    >
                      Cotizar ahora
                      <ArrowUpRight aria-hidden className="size-4" />
                    </a>
                    <a href="#productos" className="btn btn-ghost-light backdrop-blur-sm">
                      Ver productos
                    </a>
                  </div>
                </div>

                <Reveal delay={0.15} className="hidden items-end justify-end lg:flex">
                  <figure className="w-64 rounded-2xl bg-primary-foreground/15 p-2 backdrop-blur-md">
                    <div className="rounded-xl bg-[#eceef0] p-3">
                      <Image
                        src="/images/transformador-500kva.jpg"
                        alt="Transformadores de distribución ALC de 500 kVA"
                        width={996}
                        height={996}
                        sizes="256px"
                        className="aspect-[4/3.3] w-full object-contain mix-blend-multiply"
                      />
                    </div>
                    <figcaption className="flex items-center justify-between gap-2 px-2 pb-1 pt-3 text-sm">
                      Conoce nuestros equipos
                      <a
                        href="#productos"
                        aria-label="Ver productos"
                        className="inline-flex size-7 items-center justify-center rounded-full bg-primary-foreground/20 transition-colors hover:bg-primary-foreground/30"
                      >
                        <ArrowUpRight aria-hidden className="size-3.5" />
                      </a>
                    </figcaption>
                  </figure>
                </Reveal>
              </div>
            </div>

            {/* Tarjeta de datos encastrada en la esquina */}
            <div className="relative -mt-28 ml-auto w-[calc(100%-1.5rem)] rounded-tl-[1.75rem] bg-background pl-3 pt-3 sm:w-auto sm:max-w-[40rem] md:-mt-32">
              <dl className="grid grid-cols-3 gap-4 rounded-2xl bg-surface p-5 shadow-[0_1px_0_var(--border)] sm:gap-8 sm:p-7">
                {[
                  { v: <CountUp to={clients.length} />, l: "Empresas que confiaron en nosotros" },
                  { v: "IEC 76", l: "Norma internacional que cumplimos" },
                  { v: "8–19 h", l: "Horario de atención" },
                ].map((s) => (
                  <div key={s.l} className="flex flex-col">
                    <dt className="mt-1 text-xs leading-snug text-muted-foreground sm:text-sm">{s.l}</dt>
                    <dd className="order-first font-heading text-2xl font-semibold tabular-nums tracking-tight sm:text-4xl">
                      {s.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* CLIENTES */}
        <section aria-labelledby="clientes-titulo" className="py-section">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 md:items-end">
            <Reveal>
              <h2
                id="clientes-titulo"
                className="text-fluid-xl font-semibold leading-[1.1] tracking-[-0.02em]"
              >
                Nuestros principales clientes,{" "}
                <span className="font-normal text-muted-foreground">
                  de la minería a la distribución eléctrica.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-[44ch] text-fluid-base text-muted-foreground md:ml-auto">
                Ellos confiaron en nosotros. Tú también puedes hacerlo.
              </p>
            </Reveal>
          </div>

          <div className="group relative mt-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
            <ul className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused] motion-reduce:w-auto motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:px-4">
              {logoTrack.map((c, i) => (
                <li
                  key={`${c.file}-${i}`}
                  aria-hidden={i >= clients.length ? true : undefined}
                  className={`flex h-28 w-48 shrink-0 items-center justify-center rounded-full bg-surface px-7 shadow-[inset_0_0_0_1px_var(--border)] sm:h-32 sm:w-56 ${
                    i >= clients.length ? "motion-reduce:hidden" : ""
                  }`}
                >
                  <Image
                    src={`/images/clients/${c.file}.png`}
                    alt={i >= clients.length ? "" : c.name}
                    width={c.w}
                    height={c.h}
                    className="max-h-14 w-auto object-contain opacity-80 mix-blend-multiply grayscale transition-[filter,opacity] duration-200 hover:opacity-100 hover:grayscale-0"
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CALIDAD / VENTAJAS */}
        <section aria-labelledby="calidad-titulo" className="bg-muted py-section">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2
                id="calidad-titulo"
                className="text-fluid-xl font-semibold leading-[1.1] tracking-[-0.02em]"
              >
                Te ofrecemos calidad,{" "}
                <span className="font-normal text-muted-foreground">
                  con respaldo antes y después de la venta.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="mt-14 grid overflow-hidden rounded-3xl bg-surface sm:grid-cols-2 lg:grid-cols-3">
                {features.map(({ icon: Icon, title, text }, i) => (
                  <li
                    key={title}
                    className="border-b p-7 sm:p-9 sm:[&:nth-child(odd)]:border-r lg:[&:nth-child(odd)]:border-r-0 lg:[&:not(:nth-child(3n))]:border-r lg:[&:nth-last-child(-n+3)]:border-b-0"
                  >
                    <Reveal delay={0.06 * i}>
                    <span className="inline-flex size-9 items-center justify-center rounded-lg bg-accent/25 text-primary">
                      <Icon aria-hidden className="size-[1.1rem]" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                    <p className="mt-2 max-w-[38ch] text-[0.95rem] leading-relaxed text-muted-foreground">
                      {text}
                    </p>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* PRODUCTOS */}
        <section id="productos" aria-labelledby="productos-titulo" className="py-section">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-6 md:grid-cols-2 md:items-end">
              <Reveal>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-strong">
                  Productos
                </p>
                <h2
                  id="productos-titulo"
                  className="mt-3 text-fluid-xl font-semibold leading-[1.1] tracking-[-0.02em]"
                >
                  Equipos y materiales,{" "}
                  <span className="font-normal text-muted-foreground">
                    para cada etapa de tu red.
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="max-w-[44ch] text-fluid-base text-muted-foreground md:ml-auto">
                  Transformadores fabricados según IEC PUB 76 e ITINTEC 370.002, equipos
                  electrónicos y los materiales para su mantenimiento.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="mt-10">
              <ProductTabs />
            </Reveal>
          </div>
        </section>

        {/* EMPRESA */}
        <section id="empresa" aria-labelledby="empresa-titulo" className="px-3 sm:px-6">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-primary-strong px-6 py-section text-primary-foreground sm:px-10 lg:px-14">
            <TransformerArt className="pointer-events-none absolute -bottom-24 -left-24 h-[30rem] text-primary-foreground/[0.07]" />
            <div className="relative grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-start">
              <Reveal>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                  Empresa
                </p>
                <h2
                  id="empresa-titulo"
                  className="mt-3 text-fluid-xl font-semibold leading-[1.1] tracking-[-0.02em]"
                >
                  Socio de las principales empresas eléctricas{" "}
                  <span className="font-normal text-primary-foreground/60">e industrias del Perú.</span>
                </h2>
                <div className="mt-8">
                  <CompanyTabs />
                </div>
                <ul className="mt-8 flex flex-wrap gap-2 text-sm" aria-label="Normas que cumplimos">
                  <li className="rounded-full bg-primary-foreground/10 px-3.5 py-1.5">IEC PUB 76</li>
                  <li className="rounded-full bg-primary-foreground/10 px-3.5 py-1.5">ITINTEC 370.002</li>
                  <li className="rounded-full bg-primary-foreground/10 px-3.5 py-1.5">RUC {site.ruc}</li>
                </ul>
              </Reveal>
              <Reveal delay={0.1} className="lg:sticky lg:top-28">
                <div className="rounded-[1.5rem] bg-[#eceef0] p-6 sm:p-10">
                  <Image
                    src="/images/transformador-500kva.jpg"
                    alt="Dos transformadores de distribución ALC en aceite, de 10-22.9 kV y 500 kVA"
                    width={996}
                    height={996}
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="mx-auto w-full max-w-md mix-blend-multiply"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SERVICIOS + VISITAS TÉCNICAS */}
        <section id="servicios" aria-labelledby="servicios-titulo" className="py-section">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-strong">
                Servicios
              </p>
              <h2
                id="servicios-titulo"
                className="mt-3 text-fluid-xl font-semibold leading-[1.1] tracking-[-0.02em]"
              >
                Fabricación, mantenimiento y reparación,{" "}
                <span className="font-normal text-muted-foreground">en taller y en campo.</span>
              </h2>
            </Reveal>

            <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-6">
              {services.map((sv, i) => (
                <li
                  key={sv.img}
                  className={`${i < 2 ? "lg:col-span-3" : "lg:col-span-2"} ${i === 0 ? "col-span-2" : ""}`}
                >
                  <Reveal delay={0.05 * i} className="h-full">
                    <figure className="zoom-card group relative h-full overflow-hidden rounded-3xl bg-muted">
                      <Image
                        src={sv.img}
                        alt={sv.title}
                        width={489}
                        height={305}
                        sizes="(min-width: 1024px) 40vw, 50vw"
                        className={`zoom-img w-full object-cover ${i < 2 ? "aspect-[16/10]" : "aspect-[4/3.4]"}`}
                      />
                      <figcaption className="absolute inset-x-0 bottom-0 bg-[linear-gradient(transparent,oklch(18%_0.03_255/0.85))] p-4 pt-12 text-sm font-semibold text-white sm:p-5 sm:pt-14 sm:text-base">
                        {sv.title}
                      </figcaption>
                    </figure>
                  </Reveal>
                </li>
              ))}
            </ul>

            <Reveal delay={0.1}>
              <div
                id="visitas"
                className="mt-4 flex flex-col gap-6 rounded-3xl bg-accent p-7 text-accent-foreground sm:p-9 md:flex-row md:items-center md:justify-between"
              >
                <div className="flex gap-4">
                  <CalendarCheck aria-hidden className="mt-1 size-6 shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold">Visitas técnicas</h3>
                    <p className="mt-1 max-w-[52ch] text-accent-foreground/80">
                      Coordinamos una visita a tu planta o subestación para evaluar el equipo y
                      recomendarte la mejor solución.
                    </p>
                  </div>
                </div>
                <a
                  href={whatsappHref("Hola ALC Energy, quisiera coordinar una visita técnica.")}
                  className="btn btn-primary shrink-0 self-start md:self-auto"
                >
                  Agendar visita
                  <ArrowUpRight aria-hidden className="size-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" aria-labelledby="contacto-titulo" className="bg-muted py-section">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-strong">
                Contáctenos
              </p>
              <h2
                id="contacto-titulo"
                className="mt-3 text-fluid-xl font-semibold leading-[1.1] tracking-[-0.02em]"
              >
                ¿Necesitas un transformador{" "}
                <span className="font-normal text-muted-foreground">o una reparación?</span>
              </h2>
              <p className="mt-5 max-w-[44ch] text-fluid-base text-muted-foreground">
                Cuéntanos la potencia, la tensión y dónde se instalará. Te respondemos con una
                cotización.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                  <MessageCircle aria-hidden className="size-4" />
                  Escríbenos por WhatsApp
                </a>
                <a href={site.phoneHref} className="btn btn-primary">
                  <Phone aria-hidden className="size-4" />
                  {site.phoneDisplay}
                </a>
              </div>

              <dl className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="flex gap-3">
                  <Phone aria-hidden className="mt-0.5 size-5 shrink-0 text-accent-strong" />
                  <div>
                    <dt className="font-semibold">Celulares</dt>
                    <dd>
                      <ul className="mt-1 space-y-1">
                        {cellphones.map((c) => (
                          <li key={c}>
                            <a href={`tel:+51${c.replaceAll(" ", "")}`} className="tabular-nums text-muted-foreground hover:text-foreground">
                              {c}
                            </a>
                          </li>
                        ))}
                        <li>
                          <a href={site.phoneHref} className="tabular-nums text-muted-foreground hover:text-foreground">
                            Fijo {site.phoneDisplay}
                          </a>
                        </li>
                      </ul>
                    </dd>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-3">
                    <Mail aria-hidden className="mt-0.5 size-5 shrink-0 text-accent-strong" />
                    <div>
                      <dt className="font-semibold">Correo</dt>
                      <dd>
                        <a href={`mailto:${site.email}`} className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
                          {site.email}
                        </a>
                      </dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Clock aria-hidden className="mt-0.5 size-5 shrink-0 text-accent-strong" />
                    <div>
                      <dt className="font-semibold">Horario</dt>
                      <dd className="text-muted-foreground">{site.hoursShort}</dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <MapPin aria-hidden className="mt-0.5 size-5 shrink-0 text-accent-strong" />
                    <div>
                      <dt className="font-semibold">Dirección</dt>
                      <dd className="text-muted-foreground">{site.address}</dd>
                    </div>
                  </div>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-[1.75rem] bg-surface p-2 shadow-[inset_0_0_0_1px_var(--border)]">
                <iframe
                  title="Ubicación de ALC Energy en Google Maps"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block h-[22rem] w-full rounded-[1.4rem] grayscale-[35%] lg:h-[30rem]"
                />
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary absolute bottom-5 right-5"
                >
                  <Navigation aria-hidden className="size-4" />
                  Cómo llegar
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-primary-strong text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div>
              <Image
                src="/images/logo-white.png"
                alt="ALC Energy S.A.C."
                width={838}
                height={255}
                className="h-12 w-auto"
              />
              <p className="mt-5 max-w-[34ch] text-sm text-primary-foreground/65">
                Fabricación, comercialización y reparación de transformadores eléctricos.
              </p>
            </div>
            <nav aria-label="Pie de página">
              <ul className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm text-primary-foreground/80">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="hover:text-primary-foreground">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <a href={site.phoneHref} className="flex items-center gap-2 hover:text-primary-foreground">
                <Phone aria-hidden className="size-4" /> {site.phoneDisplay}
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-primary-foreground">
                <Mail aria-hidden className="size-4" /> {site.email}
              </a>
              <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-foreground">
                <ArrowUpRight aria-hidden className="size-4" /> Facebook
              </a>
              {site.linkedin && (
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-foreground">
                  <ArrowUpRight aria-hidden className="size-4" /> LinkedIn
                </a>
              )}
            </div>
          </div>
          <div className="mt-14 flex flex-col gap-2 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/55 sm:flex-row sm:justify-between">
            <p>© ALC Energy S.A.C. · RUC {site.ruc}. Todos los derechos reservados.</p>
            <p>
              Hecho por{" "}
              <a
                href="https://instagram.com/rain17.ff"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary-foreground/80 underline-offset-2 hover:text-primary-foreground hover:underline"
              >
                @RainCode
              </a>
            </p>
          </div>
        </div>
      </footer>

      <WhatsAppWidget />
    </>
  );
}
