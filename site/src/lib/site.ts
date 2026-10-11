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

export type SpecGroup = { title: string; items: string[] };
export type Product = {
  name: string;
  img: string;
  w: number;
  h: number;
  desc: string[];
  specs?: SpecGroup[];
};

// Especificaciones tomadas del sitio actual (alcenergy.com.pe).
const secoTrifasico = [
  "Potencia: de 1 kVA hasta 1000 kVA",
  "Tensión de entrada: 220 V, 380 V, 440 V, 480 V y a pedido",
  "Tensión de salida: 220 V, 380 V, 440 V, 480 V y a pedido",
  "Grupo de conexión: delta o estrella (Dyn5, Yyn6, Dd6, etc.)",
  "Clase de aislamiento: “H” (180 °C), “F” (155 °C)",
  "Grado de protección: IP 21 (a pedido)",
];
const secoMonofasico = [
  "Potencia: de 1 kVA a 40 kVA",
  "Tensión de entrada: 110 V, 220 V, 380 V y a pedido",
  "Tensión de salida: 110 V, 220 V, 380 V y a pedido",
  "Grupo de conexión: delta o estrella (Dyn5, Yyn6, Dd6, etc.)",
  "Clase de aislamiento: “H” (180 °C), “F” (155 °C)",
  "Grado de protección: IP 21 (a pedido)",
];
const primarioMT = "10000 V, 13200 V, 13800 V, 22900 V, 33000 V y especiales";

export const productCategories: { name: string; items: Product[] }[] = [
  {
    name: "Equipos eléctricos",
    items: [
      {
        name: "Transformadores de distribución en aceite",
        img: "trafo-aceite", w: 468, h: 432,
        desc: [
          "Los transformadores de distribución marca ALC están fabricados con materiales de primera calidad, diseñados y probados bajo las normas IEC 60076 e ITINTEC 370.002, para operar de 0 a 5000 m.s.n.m. con una elevación de temperatura de 65 °C, sobre una media de 30 °C y una máxima de 40 °C. Refrigeración ONAN y aceite dieléctrico libre de PCB.",
        ],
        specs: [
          {
            title: "Trifásico en aceite",
            items: [
              "Potencia: de 5 a 3000 kVA",
              `Tensión del primario: ${primarioMT}; conexión delta o estrella`,
              "Tensión del secundario: 230 V, 400 V, 460 V y especiales; conexión delta o estrella",
            ],
          },
          { title: "Monofásico en aceite", items: ["Consulta potencias y tensiones disponibles"] },
        ],
      },
      {
        name: "Transformadores secos de aislamiento",
        img: "trafo-seco-aislamiento", w: 456, h: 360,
        desc: [
          "Los transformadores secos ALC Energy S.A.C. soportan los efectos de las corrientes armónicas sin exceder los límites de temperatura del sistema de aislamiento. También protegen a los equipos electrónicos contra los ruidos eléctricos (corrientes parásitas) y dan aislamiento galvánico al sistema. Se fabrican bajo las normas IEC, ITINTEC y ANSI.",
        ],
        specs: [
          { title: "Trifásico seco de aislamiento", items: secoTrifasico },
          { title: "Monofásico seco de aislamiento", items: secoMonofasico },
        ],
      },
      {
        name: "Transformadores integrados de medida",
        img: "trafo-integrado-medida", w: 492, h: 384,
        desc: [
          "Los transformadores integrados de medida (trafomix) marca ALC Energy S.A.C. se usan en sistemas monofásicos y trifásicos para reducir la tensión y la corriente de la red de media tensión a valores que puedan medir medidores, relés o circuitos de control.",
          "Fabricados con materiales de primera calidad, diseñados y probados bajo la norma IEC 60044-1 y 2, para operar de 0 a 5000 m.s.n.m. con una elevación de temperatura de 65 °C, sobre una media de 30 °C y una máxima de 40 °C. Refrigeración ONAN y aceite dieléctrico libre de PCB.",
        ],
        specs: [
          {
            title: "Trifásico · transformador de tensión",
            items: [
              "Potencia: hasta 50 VA",
              `Tensión del primario: ${primarioMT}`,
              "Tensión del secundario: 220 V, 200 V, 110 V y especiales",
              "Grupo de conexión: Yyn0 (estrella); V-V (delta abierta)",
              "Clase: 0.2 %",
            ],
          },
          {
            title: "Trifásico · transformador de corriente",
            items: [
              "Potencia: hasta 30 VA",
              "Corriente del primario: hasta 1200 A",
              "Corriente del secundario: 5 A, 1 A",
              "Grupo de conexión: III-yn0 (estrella); II-V (delta abierta)",
              "Clase: 0.2 %, 0.2S",
            ],
          },
          {
            title: "Monofásico · transformador de tensión",
            items: [
              "Potencia: hasta 50 VA",
              `Tensión del primario: ${primarioMT}`,
              "Tensión del secundario: 220 V, 200 V, 110 V y especiales",
              "Grupo de conexión: Ii0",
              "Clase: 0.2 %",
            ],
          },
          {
            title: "Monofásico · transformador de corriente",
            items: [
              "Potencia: hasta 30 VA",
              "Corriente del primario: hasta 1200 A",
              "Corriente del secundario: 5 A, 1 A",
              "Grupo de conexión: II-Ii0",
              "Clase: 0.2 %, 0.2S",
            ],
          },
        ],
      },
      {
        name: "Transformadores secos encapsulados en resina",
        img: "trafo-seco-resina", w: 444, h: 384,
        desc: [
          "Los transformadores secos encapsulados en resina epóxica se usan en interiores y dan mayor confiabilidad a la instalación. Se fabrican con materiales de clase de aislamiento H (180 °C) o F (155 °C), que soportan temperaturas altas y evitan un posible incendio ante una falla o una sobrecorriente transitoria.",
          "Todos vienen con tres sensores de temperatura PT100 y su centralita, que los protegen ante una sobreelevación de temperatura. Su mantenimiento es sencillo y de bajo costo, por eso son los preferidos en instalaciones interiores con cargas críticas.",
        ],
        specs: [
          {
            title: "Características",
            items: [
              "Resina epóxica, uso interior",
              "Clase de aislamiento: H (180 °C) o F (155 °C)",
              "3 sensores PT100 con centralita de temperatura",
              "Vida útil: 15 a 20 años a plena carga",
            ],
          },
        ],
      },
      {
        name: "Transformadores tipo pedestal",
        img: "trafo-pedestal", w: 485, h: 340,
        desc: [
          "Los transformadores tipo pedestal marca ALC Energy S.A.C. operan a la intemperie, montados sobre una base de concreto o similar. Se instalan donde circulan personas o donde no hay espacio para una subestación convencional, en sistemas de distribución subterránea: zonas residenciales, desarrollos turísticos, centros comerciales y hoteles.",
          "Se fabrican desde 10 kVA hasta 1000 kVA, en tensiones de hasta 36 kV, y se diseñan, fabrican y prueban según las normas NTP-ITINTEC, IEC y ANSI.",
        ],
        specs: [
          {
            title: "Pedestal trifásico",
            items: [
              "Potencia: de 5 hasta 3000 kVA",
              `Tensión del primario: ${primarioMT}; conexión delta o estrella`,
              "Tensión del secundario: 230 V, 400 V, 460 V y especiales; conexión delta o estrella",
            ],
          },
          {
            title: "Pedestal monofásico",
            items: [
              "Potencia: de 5 hasta 75 kVA",
              "Tensión del primario: 7620 V, 10000 V, 13200 V, 13800 V, 22900 V, 33000 V y especiales",
              "Tensión del secundario: 220 V, 230 V, 460 V y especiales; conexión Ii0",
            ],
          },
        ],
      },
      {
        name: "Autotransformadores",
        img: "autotransformador", w: 275, h: 490,
        desc: [
          "Los autotransformadores secos ALC Energy S.A.C. reducen o elevan la tensión de entrada a la tensión de salida que necesitas. Como el bobinado primario y el secundario están unidos eléctricamente, se usan para cargas que no necesitan aislamiento galvánico: motores, luminarias, aires acondicionados. Son más compactos y económicos, ideales para esos usos.",
          "Fabricados bajo las normas IEC, ITINTEC y ANSI.",
        ],
        specs: [
          { title: "Autotransformador trifásico seco", items: secoTrifasico },
          { title: "Autotransformador monofásico seco", items: secoMonofasico },
        ],
      },
      {
        name: "Subestaciones eléctricas",
        img: "subestacion", w: 460, h: 360,
        // TODO: el sitio actual muestra aquí las especificaciones del pedestal monofásico; pedir los datos correctos.
        desc: [
          "Subestaciones eléctricas compactas fabricadas por ALC Energy S.A.C. Escríbenos para conocer potencias, tensiones y configuraciones disponibles.",
        ],
      },
      {
        name: "Tableros eléctricos",
        img: "tablero", w: 430, h: 395,
        desc: [
          "Un tablero eléctrico es una caja o gabinete con los dispositivos de conexión, maniobra, comando, medición, protección, alarma y señalización, con sus cubiertas y soportes, para cumplir una función específica dentro de un sistema eléctrico. Se diseña y fabrica según las normas nacionales e internacionales.",
        ],
      },
    ],
  },
  {
    name: "Equipos electrónicos",
    items: [
      {
        name: "Estabilizadores de tensión",
        img: "estabilizador", w: 305, h: 380,
        desc: [
          "Los estabilizadores de tensión protegen equipos de alta precisión y dan seguridad al usuario contra perturbaciones eléctricas, entregando un voltaje estable. Son necesarios en equipos de cómputo, médicos, industriales y cargas críticas.",
        ],
        specs: [
          {
            title: "Características",
            items: [
              "100 % estado sólido, monofásico o trifásico, con microprocesador",
              "Para equipos de cómputo, industriales, electrónicos y de precisión hasta 100 kVA",
              "Voltajes de entrada y salida estándar u otras tensiones",
              "Pantalla LCD alfanumérica",
              "Filtro supresor de picos (6.5 kA, onda 8/20 µs)",
              "Rango de entrada: −20 %, +15 % del voltaje nominal",
              "Potencias: 8 a 20 kVA",
            ],
          },
        ],
      },
      {
        name: "Rectificadores AC/DC",
        img: "rectificador", w: 340, h: 310,
        // TODO: el sitio actual no tiene descripción para este producto.
        desc: ["Rectificadores AC/DC ALC Energy. Escríbenos para conocer tensiones y corrientes disponibles."],
      },
      {
        name: "UPS (sistema de alimentación ininterrumpida)",
        img: "ups", w: 460, h: 330,
        desc: [
          "Fuente de energía con batería que mantiene encendidos tus equipos cuando hay un corte de luz o un problema eléctrico. Da unos minutos extra para guardar los archivos importantes y apagar los equipos de forma correcta.",
        ],
      },
    ],
  },
  {
    name: "Materiales eléctricos",
    items: [
      {
        name: "Aceite mineral dieléctrico Tulstar tipo II TS-3487",
        img: "aceite-tulstar", w: 270, h: 387,
        desc: [
          "Alianza comercial: ALC Energy S.A.C. y Tulstar firmaron un acuerdo que nos autoriza como distribuidores exclusivos en el Perú de su aceite mineral dieléctrico para transformadores.",
          "El aceite Tulstar tipo II TS-3487 se refina a partir de crudo nafténico y se hidrotrata severamente. El resultado es un aceite mineral altamente refinado, estable a altas temperaturas y con excelente capacidad de aislamiento eléctrico, ideal para transformadores.",
        ],
        specs: [
          {
            title: "Características principales",
            items: [
              "Cumple la norma ASTM D3487-09",
              "Libre de PCB, certificado",
              "Cumple los últimos estándares de azufre corrosivo",
            ],
          },
        ],
      },
      {
        name: "Controlador de temperatura T154",
        img: "controlador-t154", w: 425, h: 338,
        desc: [
          "Dispositivo electrónico con microcontrolador para el control de temperatura de transformadores secos encapsulados en resina de media tensión.",
          "Tiene doble pantalla y un microcontrolador de mayor rendimiento y gestión de datos. Ofrece alta protección contra perturbaciones electromagnéticas y es simple de usar, por eso es el estándar para esta aplicación.",
        ],
        specs: [
          {
            title: "Características",
            items: [
              "4 entradas Pt100: tres para las fases y una opcional para el núcleo o la temperatura ambiente",
              "4 salidas con relé de contacto seco: prealarma y disparo (ALARMA y DISPARO), anomalía de operación (FALLA) y ventilación (VENTILADOR)",
              "Doble pantalla",
              "Certificable para los mercados de EE. UU. y Canadá, a pedido",
            ],
          },
        ],
      },
      {
        name: "Sensor termométrico PT100",
        img: "sensor-pt100", w: 485, h: 340,
        desc: ["Sensor Pt100 con cable alargador de 3 hilos apantallados. Largo estándar: 2.5 m (otros largos a pedido)."],
        specs: [
          { title: "Datos técnicos", items: ["Rango de trabajo: de −40 °C a +200 °C", "Grado de protección: IP67"] },
          {
            title: "Elemento sensible",
            items: ["Tipo: RTD Pt100 Ω a 0 °C", "Coeficiente α = 0.385 Ω/°C", "Calibración: IEC 60751", "Precisión: clase A"],
          },
          {
            title: "Cable",
            items: [
              "Conductores flexibles de cobre estañado 3 × 0.35 mm²",
              "Aislamiento primario: caucho de silicona",
              "Escudo con banda de aluminio",
              "Aislamiento secundario: caucho de silicona azul",
              "Código de color: 2 conductores rojos, 1 conductor blanco",
            ],
          },
          { title: "Pruebas y opciones", items: ["Prueba de rigidez dieléctrica: 5 kVca por 60 s", "PTSE con 2 cables", "PTSE con 4 cables"] },
        ],
      },
      {
        name: "Supresores de pico",
        img: "supresor", w: 455, h: 185,
        desc: [
          "Los protectores contra sobretensiones derivan las sobretensiones sin afectar la masa eléctrica y limitan el sobrevoltaje a valores compatibles con el equipo conectado a la red.",
        ],
      },
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
