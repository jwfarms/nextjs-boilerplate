import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import RegisterSW from "@/components/RegisterSW";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jwfarms7.com"),
  title: {
    default: "JW Farms | Lavender Farm & Wholesale Lavender",
    template: "%s | JW Farms",
  },
  description:
    "JW Farms is a small, family-owned lavender farm offering wholesale lavender, culinary lavender buds, plants, and traditional lavender guides for home and well-being.",
  keywords: [
    "lavender farm",
    "lavender",
    "wholesale lavender",
    "culinary lavender",
    "lavender buds",
    "lavender plants",
    "lavender uses",
    "lavender well-being",
  ],
  authors: [{ name: "JW Farms" }],
  alternates: {
    canonical: "https://www.jwfarms7.com",
  },
  openGraph: {
    title: "JW Farms | Lavender Farm & Wholesale Lavender",
    description:
      "A small family-owned lavender farm growing lavender with care. Wholesale lavender, culinary buds, plants, and traditional lavender guides.",
    url: "https://www.jwfarms7.com",
    siteName: "JW Farms",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "JW Farms",
    description:
      "JW Farms is a small, family-owned lavender farm offering seasonal lavender plants, fresh bundles, dried buds, and wholesale availability. Serving the local community and surrounding areas.",
    url: "https://www.jwfarms7.com",
    email: "jwfarms77@gmail.com",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "United States",
    },
    sameAs: ["https://jwfarms.blogspot.com/"],
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "JW Farms 7",
    alternateName: "JW Farms",
    url: "https://www.jwfarms7.com",
  };

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}
      >
        <RegisterSW />

        {/* JSON-LD: LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />

        {/* JSON-LD: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />

        {children}
      </body>
    </html>
  );
}
