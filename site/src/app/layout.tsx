import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const text = DM_Sans({
  subsets: ["latin"],
  variable: "--font-text",
  display: "swap",
});

const description =
  "Fabricación, comercialización y reparación de transformadores de distribución en aceite y tipo seco, autotransformadores, subestaciones compactas y tableros eléctricos en Lima, Perú.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "ALC Energy S.A.C. | Fabricación de transformadores eléctricos en Perú",
  description,
  openGraph: {
    title: "ALC Energy S.A.C. | Transformadores eléctricos",
    description,
    locale: "es_PE",
    type: "website",
    images: ["/images/transformers.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  url: site.url,
  telephone: "+51 1 7151443",
  description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Puente Piedra",
    addressRegion: "Lima",
    addressCountry: "PE",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-PE" className={`${display.variable} ${text.variable} antialiased`}>
      <body className="min-h-dvh">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
