import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RegisterSW from "@/components/RegisterSW";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JW Farms | Lavender Farm & Wholesale Lavender",
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
  openGraph: {
    title: "JW Farms | Lavender Farm & Wholesale Lavender",
    description:
      "A small family-owned lavender farm growing lavender with care. Wholesale lavender, culinary buds, plants, and traditional lavender guides.",
    url: "https://jwfarms7.com",
    siteName: "JW Farms",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "JW Farms",
      "description":
        "JW Farms is a small, family-owned lavender farm offering seasonal lavender plants, fresh bundles, dried buds, and wholesale availability. Serving the local community and surrounding areas.",
      "url": "https://jwfarms7.com",
      "email": "jwfarms77@gmail.com",
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "United States"
      },
      "sameAs": [
        "https://jwfarms.blogspot.com/"
      ]
    }),
  }}
/>

      <body
        <RegisterSW />

        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
