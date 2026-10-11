// Datos del negocio en un solo lugar. Edita aquí y se actualiza toda la página.
export const site = {
  name: "ALC Energy S.A.C.",
  shortName: "ALC Energy",
  ruc: "20601062420",
  url: "https://alcenergy.com.pe",
  phoneDisplay: "(01) 7151 443",
  phoneHref: "tel:+5117151443",
  // TODO: número de WhatsApp con código de país, solo dígitos (ej. "51987654321").
  // Mientras esté vacío, los botones de WhatsApp llaman al teléfono fijo.
  whatsapp: "",
  hours: "Desde las 8:00 a.m. hasta las 7:00 p.m.",
  hoursShort: "8:00 a.m. – 7:00 p.m.",
  address: "Puente Piedra, Lima, Perú",
  mapQuery: "ALC Energy S.A.C. Puente Piedra Lima",
  facebook: "https://www.facebook.com/alcenergy/",
  // TODO: enlace de LinkedIn de la empresa.
  linkedin: "",
};

export function whatsappHref(message = "Hola ALC Energy, quisiera hacer una consulta.") {
  if (!site.whatsapp) return site.phoneHref;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
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
