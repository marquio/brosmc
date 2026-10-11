import Image from "next/image";
import {
  ArrowUpRight,
  Award,
  ClipboardCheck,
  Clock,
  Factory,
  Headset,
  Leaf,
  MapPin,
  MessageCircle,
  Phone,
  ScrollText,
  Wrench,
  Truck,
  CalendarCheck,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { TransformerArt } from "@/components/TransformerArt";
import { clients, nav, site, whatsappHref } from "@/lib/site";

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

const products = [
  { n: "01", title: "Transformadores eléctricos", text: "De distribución, en aceite y tipo seco." },
  { n: "02", title: "Autotransformadores", text: "Para ajustar niveles de tensión en tu red." },
  { n: "03", title: "Subestaciones eléctricas", text: "Incluye subestaciones compactas." },
  { n: "04", title: "Tableros eléctricos", text: "Para distribución y control eléctrico." },
];

const services = [
  {
    icon: Factory,
    title: "Fabricación",
    text: "Transformadores de distribución en aceite y tipo seco, autotransformadores y subestaciones compactas.",
  },
  {
    icon: Truck,
    title: "Comercialización",
    text: "Transformadores, estabilizadores, UPS y tableros eléctricos con garantía.",
  },
  {
    icon: Wrench,
    title: "Reparación y mantenimiento",
    text: "Reparamos todo tipo de transformadores de distribución en aceite y tipo seco.",
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
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />
              <div
                aria-hidden
                className="absolute -right-40 -top-40 size-[34rem] rounded-full opacity-40 blur-3xl"
                style={{ background: "radial-gradient(closest-side, oklch(60% 0.09 250), transparent)" }}
              />
              <TransformerArt className="pointer-events-none absolute -right-16 bottom-6 hidden h-[80%] text-primary-foreground/[0.13] md:block lg:right-[3%]" />

              <div className="relative grid gap-10 px-6 pb-40 pt-14 sm:px-10 sm:pt-20 md:pb-44 lg:grid-cols-[1.25fr_1fr] lg:px-14 lg:pb-48 lg:pt-24">
                <Reveal>
                  <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3.5 py-1.5 text-sm font-medium">
                    <span className="size-1.5 rounded-full bg-accent" aria-hidden />
                    Empresa peruana · Lima
                  </p>
                  <h1 className="max-w-[16ch] text-fluid-2xl font-semibold leading-[1.02] tracking-[-0.03em]">
                    Ingeniería en la fabricación de{" "}
                    <span className="text-accent">transformadores eléctricos</span>
                  </h1>
                  <p className="mt-6 max-w-[46ch] text-fluid-base text-primary-foreground/75">
                    Fabricamos, vendemos y reparamos transformadores de distribución en aceite y
                    tipo seco. Para minería, distribuidoras eléctricas y la industria.
                  </p>
                  <div className="mt-9 flex flex-wrap items-center gap-3">
                    <a href={whatsappHref("Hola ALC Energy, quisiera cotizar un transformador.")} className="btn btn-accent">
                      Cotizar ahora
                      <ArrowUpRight aria-hidden className="size-4" />
                    </a>
                    <a href="#productos" className="btn btn-ghost-light">
                      Ver productos
                    </a>
                  </div>
                </Reveal>

                <Reveal delay={0.15} className="hidden items-start justify-end lg:flex">
                  <figure className="w-60 rounded-2xl bg-primary-foreground/10 p-2 backdrop-blur-sm">
                    <Image
                      src="/images/transformers.jpg"
                      alt="Transformadores de distribución con placa ALC"
                      width={470}
                      height={416}
                      priority
                      className="aspect-[4/3.4] w-full rounded-xl object-cover"
                    />
                    <figcaption className="flex items-center justify-between gap-2 px-2 pb-1 pt-3 text-sm">
                      Transformadores ALC
                      <a
                        href="#productos"
                        aria-label="Ver productos"
                        className="inline-flex size-7 items-center justify-center rounded-full bg-primary-foreground/15 transition-colors hover:bg-primary-foreground/25"
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
                  { v: String(clients.length), l: "Empresas que confiaron en nosotros" },
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
                {features.map(({ icon: Icon, title, text }) => (
                  <li
                    key={title}
                    className="border-b p-7 sm:p-9 sm:[&:nth-child(odd)]:border-r lg:[&:nth-child(odd)]:border-r-0 lg:[&:not(:nth-child(3n))]:border-r lg:[&:nth-last-child(-n+3)]:border-b-0"
                  >
                    <span className="inline-flex size-9 items-center justify-center rounded-lg bg-accent/25 text-primary">
                      <Icon aria-hidden className="size-[1.1rem]" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                    <p className="mt-2 max-w-[38ch] text-[0.95rem] leading-relaxed text-muted-foreground">
                      {text}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* PRODUCTOS */}
        <section id="productos" aria-labelledby="productos-titulo" className="py-section">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div className="flex flex-col">
              <Reveal>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-strong">
                  Productos
                </p>
                <h2
                  id="productos-titulo"
                  className="mt-3 text-fluid-xl font-semibold leading-[1.1] tracking-[-0.02em]"
                >
                  Equipos eléctricos,{" "}
                  <span className="font-normal text-muted-foreground">
                    para cada etapa de tu red.
                  </span>
                </h2>
                <a href={whatsappHref("Hola ALC Energy, quisiera información de sus productos.")} className="btn btn-primary mt-7">
                  Solicitar ficha técnica
                  <ArrowUpRight aria-hidden className="size-4" />
                </a>
              </Reveal>

              <Reveal delay={0.1} className="mt-auto pt-12">
                <ul className="grid gap-x-8 sm:grid-cols-2">
                  {products.map((p) => (
                    <li key={p.n} className="border-t py-6">
                      <span className="font-heading text-sm tabular-nums text-muted-foreground">
                        {p.n}
                      </span>
                      <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                      <p className="mt-1 text-[0.95rem] text-muted-foreground">{p.text}</p>
                      <a
                        href="#contacto"
                        className="mt-3 inline-block text-sm font-semibold underline decoration-accent decoration-2 underline-offset-4 hover:decoration-accent-strong"
                      >
                        Consultar
                        <span className="sr-only"> sobre {p.title.toLowerCase()}</span>
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="border-t pt-5 text-sm text-muted-foreground">
                  También comercializamos estabilizadores y UPS.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.15} className="relative">
              <div className="relative h-full min-h-[22rem] overflow-hidden rounded-[1.75rem] bg-primary">
                <Image
                  src="/images/transformers.jpg"
                  alt="Transformadores de distribución ALC Energy con aisladores de alta tensión"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-surface/90 p-5 backdrop-blur-md">
                  <p className="font-heading font-semibold">Transformadores en aceite y tipo seco</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Según normas IEC PUB 76 e ITINTEC 370.002.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* EMPRESA */}
        <section
          id="empresa"
          aria-labelledby="empresa-titulo"
          className="px-3 sm:px-6"
        >
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-primary-strong px-6 py-section text-primary-foreground sm:px-10 lg:px-14">
            <TransformerArt className="pointer-events-none absolute -bottom-24 -right-24 h-[30rem] text-primary-foreground/10" />
            <div className="relative grid gap-12 lg:grid-cols-[1fr_1.2fr]">
              <Reveal>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                  Empresa
                </p>
                <h2
                  id="empresa-titulo"
                  className="mt-3 text-fluid-xl font-semibold leading-[1.1] tracking-[-0.02em]"
                >
                  Acerca de nosotros
                </h2>
                <ul className="mt-8 flex flex-wrap gap-2 text-sm" aria-label="Normas que cumplimos">
                  <li className="rounded-full bg-primary-foreground/10 px-3.5 py-1.5">IEC PUB 76</li>
                  <li className="rounded-full bg-primary-foreground/10 px-3.5 py-1.5">ITINTEC 370.002</li>
                  <li className="rounded-full bg-primary-foreground/10 px-3.5 py-1.5">RUC {site.ruc}</li>
                </ul>
              </Reveal>
              <Reveal delay={0.1} className="space-y-5 text-fluid-base leading-relaxed text-primary-foreground/80">
                <p>
                  <strong className="font-semibold text-primary-foreground">ALC Energy S.A.C.</strong>{" "}
                  es una empresa peruana dedicada a la fabricación, comercialización y reparación de
                  todo tipo de transformadores de distribución en aceite y tipo seco,
                  estabilizadores, UPS, tableros eléctricos y subestaciones compactas.
                </p>
                <p>
                  Cumplimos estrictamente con normas nacionales e internacionales (IEC PUB 76;
                  ITINTEC 370.002). Nuestro compromiso es entregar productos confiables, técnica y
                  económicamente, y aportar a la solución de problemas ambientales.
                </p>
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
                Del taller a tu subestación,{" "}
                <span className="font-normal text-muted-foreground">un solo proveedor.</span>
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {services.map(({ icon: Icon, title, text }, i) => (
                <Reveal key={title} delay={0.05 * i}>
                  <article className="h-full rounded-3xl bg-surface p-7 shadow-[inset_0_0_0_1px_var(--border)] sm:p-8">
                    <Icon aria-hidden className="size-6 text-accent-strong" />
                    <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
                  </article>
                </Reveal>
              ))}
            </div>

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
                <a href={whatsappHref()} className="btn btn-accent">
                  <MessageCircle aria-hidden className="size-4" />
                  Escríbenos por WhatsApp
                </a>
                <a href={site.phoneHref} className="btn btn-primary">
                  <Phone aria-hidden className="size-4" />
                  {site.phoneDisplay}
                </a>
              </div>

              <dl className="mt-10 grid gap-5 sm:grid-cols-2">
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
                    <dt className="font-semibold">Ubicación</dt>
                    <dd className="text-muted-foreground">{site.address}</dd>
                  </div>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-[1.75rem] bg-surface p-2 shadow-[inset_0_0_0_1px_var(--border)]">
                <iframe
                  title="Ubicación de ALC Energy en Google Maps"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block h-[22rem] w-full rounded-[1.4rem] grayscale-[35%] lg:h-[26rem]"
                />
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
              Hecho con Claude Web Builder de{" "}
              <a href="https://tododeia.com" className="underline underline-offset-2 hover:text-primary-foreground">
                Tododeia
              </a>
            </p>
          </div>
        </div>
      </footer>

      <a
        href={whatsappHref()}
        aria-label="Realiza tu consulta por WhatsApp"
        className="btn btn-accent fixed bottom-5 right-5 z-30 !p-4 shadow-lg shadow-primary-strong/20"
      >
        <MessageCircle aria-hidden className="size-6" />
      </a>
    </>
  );
}
