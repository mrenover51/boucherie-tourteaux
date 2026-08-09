import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { siteConfig } from "@/lib/site-config";
import "@/styles/globals.css";
const serif = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-cormorant", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: `${siteConfig.name} — Avize`, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: { title: `${siteConfig.name} — Avize`, description: siteConfig.description, url: "/", siteName: siteConfig.name, locale: "fr_FR", type: "website" },
  twitter: { card: "summary_large_image", title: `${siteConfig.name} — Avize`, description: siteConfig.description },
};
export const viewport: Viewport = { themeColor: "#FAF8F5", colorScheme: "light" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = { "@context": "https://schema.org", "@type": "Butcher", name: siteConfig.name, telephone: siteConfig.phone, email: siteConfig.email, address: { "@type": "PostalAddress", streetAddress: siteConfig.address.street, postalCode: siteConfig.address.postalCode, addressLocality: siteConfig.address.city, addressRegion: siteConfig.address.region, addressCountry: siteConfig.address.country }, url: siteConfig.url };
  return <html lang="fr" className={`${serif.variable} ${sans.variable}`}><body><a href="#contenu" className="skip-link">Aller au contenu</a><SmoothScroll /><Header /><main id="contenu" className="min-h-[60vh]">{children}</main><Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} /></body></html>;
}
