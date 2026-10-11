// Datos del negocio en un solo lugar. Edita aquí y se actualiza toda la página.
export const site = {
  name: "ALC Energy S.A.C.",
  shortName: "ALC Energy",
  ruc: "20601062420",
  url: "https://alcenergy.com.pe",
  phoneDisplay: "(01) 7151 443",
  phoneHref: "tel:+5117151443",
  // Número principal de WhatsApp (Departamento de Ventas), con código de país.
  whatsapp: "51992176259",
  email: "ventas@alcenergy.com.pe",
  hours: "Desde las 8:00 a.m. hasta las 7:00 p.m.",
  hoursShort: "8:00 a.m. – 7:00 p.m.",
  address: "Av. Los Pinos Mz. E Lote 17-A, Urb. Shangrila, primera etapa, Puente Piedra, Lima",
  addressShort: "Av. Los Pinos, Puente Piedra, Lima",
  mapsUrl: "https://maps.app.goo.gl/FNvK8L7hZrAThvoL6",
  mapQuery: "ALC ENERGY, Av. los Pinos 8, Puente Piedra 15116",
  facebook: "https://www.facebook.com/alcenergy/",
  // TODO: enlace de LinkedIn de la empresa.
  linkedin: "",
};

export const cellphones = ["992 176 259", "963 429 023", "999 908 262", "969 343 909", "948 354 045"];

// Operadores del botón de WhatsApp.
// OJO: la asignación número ↔ persona sigue el orden de las capturas; confirmar con el cliente.
export const whatsappTeam = [
  { role: "Departamento de Ventas", name: "ALC Energy", phone: "51992176259", photo: "/images/mark-dark.png", isLogo: true },
  { role: "Ejecutiva de Ventas", name: "Lisbet Leyva", phone: "51963429023", photo: "/images/team/lisbet-leyva.jpg" },
  { role: "Ejecutiva de Ventas", name: "Ruth Rodriguez", phone: "51999908262", photo: "/images/team/ruth-rodriguez.jpg" },
  { role: "Ejecutiva de Ventas", name: "Arcinia Huayana Ricra", phone: "51969343909", photo: "/images/team/arcinia-huayana.jpg" },
  { role: "Ejecutiva de Ventas", name: "Milagros Miranda", phone: "51948354045", photo: "/images/team/milagros-miranda.jpg" },
];

export function whatsappHref(
  message = "Hola ALC Energy, quisiera hacer una consulta.",
  phone = site.whatsapp,
) {
  if (!phone) return site.phoneHref;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Empresa", href: "#empresa" },
  { label: "Productos", href: "#productos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Visitas técnicas", href: "#visitas" },
  { label: "Contáctenos", href: "#contacto" },
];

export const clients = [
  { name: "Southern Copper Corporation", file: "southern-copper", w: 394, h: 73 },
  { name: "Compañía de Minas Buenaventura", file: "buenaventura", w: 397, h: 113 },
  { name: "Petroperú", file: "petroperu", w: 309, h: 137 },
  { name: "Luz del Sur", file: "luz-del-sur", w: 390, h: 69 },
  { name: "Enel", file: "enel", w: 309, h: 113 },
  { name: "Schneider Electric", file: "schneider", w: 384, h: 102 },
  { name: "Grupo Graña y Montero", file: "grana-montero", w: 436, h: 126 },
  { name: "Hidrandina", file: "hidrandina", w: 378, h: 61 },
  { name: "Electrocentro", file: "electrocentro", w: 397, h: 47 },
  { name: "Electro Sur Este", file: "electro-sur-este", w: 314, h: 120 },
  { name: "Central Hidroeléctrica de Langui S.A.", file: "langui", w: 401, h: 76 },
  { name: "Compañía Minera Casapalca", file: "casapalca", w: 291, h: 145 },
  { name: "C y M Constructores y Mineros", file: "cym", w: 489, h: 162 },
  { name: "Paraíso", file: "paraiso", w: 387, h: 77 },
  { name: "Tamoin", file: "tamoin", w: 276, h: 132 },
  { name: "Prinex S.A.C.", file: "prinex", w: 388, h: 51 },
  { name: "S&Matec", file: "smatec", w: 454, h: 131 },
  { name: "Soyuz Contratistas Generales E.I.R.L.", file: "soyuz", w: 487, h: 201 },
  { name: "Cingetec", file: "cingetec", w: 491, h: 162 },
  { name: "Electro G&S Ingenieros", file: "electro-gs", w: 365, h: 135 },
  { name: "Santo Domingo Contratistas Generales S.A.", file: "santo-domingo", w: 352, h: 103 },
  { name: "Sistel", file: "sistel", w: 370, h: 103 },
  { name: "Iriarco S.A.", file: "iriarco", w: 346, h: 51 },
];

export const productCategories = [
  {
    name: "Equipos eléctricos",
    items: [
      { name: "Transformadores de distribución en aceite", img: "trafo-aceite", w: 468, h: 432 },
      { name: "Transformadores secos de aislamiento", img: "trafo-seco-aislamiento", w: 456, h: 360 },
      { name: "Transformadores integrados de medida", img: "trafo-integrado-medida", w: 492, h: 384 },
      { name: "Transformadores secos encapsulados en resina", img: "trafo-seco-resina", w: 444, h: 384 },
      { name: "Transformadores tipo pedestal", img: "trafo-pedestal", w: 485, h: 340 },
      { name: "Autotransformadores", img: "autotransformador", w: 275, h: 490 },
      { name: "Subestaciones eléctricas", img: "subestacion", w: 460, h: 360 },
      { name: "Tableros eléctricos", img: "tablero", w: 430, h: 395 },
    ],
  },
  {
    name: "Equipos electrónicos",
    items: [
      { name: "Estabilizadores de tensión", img: "estabilizador", w: 305, h: 380 },
      { name: "Rectificadores AC/DC", img: "rectificador", w: 340, h: 310 },
      { name: "UPS (sistema de alimentación ininterrumpida)", img: "ups", w: 460, h: 330 },
    ],
  },
  {
    name: "Materiales eléctricos",
    items: [
      { name: "Aceite mineral dieléctrico Tulstar tipo II TS-3487", img: "aceite-tulstar", w: 270, h: 387 },
      { name: "Controlador de temperatura T154", img: "controlador-t154", w: 425, h: 338 },
      { name: "Sensor termométrico PT100", img: "sensor-pt100", w: 485, h: 340 },
      { name: "Supresores de pico", img: "supresor", w: 455, h: 185 },
    ],
  },
];

// Títulos provisionales según cada foto; confirmar con el cliente.
export const services = [
  { title: "Análisis de aceite dieléctrico", img: "/images/services/servicio-1.jpg" },
  { title: "Mantenimiento en subestaciones", img: "/images/services/servicio-2.jpg" },
  { title: "Transformadores de medida", img: "/images/services/servicio-3.jpg" },
  { title: "Pruebas y reparación de transformadores", img: "/images/services/servicio-4.jpg" },
  { title: "Mantenimiento de tableros eléctricos", img: "/images/services/servicio-5.jpg" },
];
