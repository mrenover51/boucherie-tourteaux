import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { siteConfig } from "@/lib/site-config";
import { businessId, openingHoursSpecification, postalAddress, safeJsonLd } from "@/lib/structured-data";
import "@/styles/globals.css";

const serif = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-cormorant", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url), title: { default: "Boucherie à Avize | Boucherie Tourteaux", template: `%s | ${siteConfig.name}` },
  description: siteConfig.description, applicationName: siteConfig.name,
  openGraph: { title: "Boucherie à Avize | Boucherie Tourteaux", description: siteConfig.description, url: "/", siteName: siteConfig.name, locale: "fr_FR", type: "website" },
  twitter: { card: "summary_large_image", title: "Boucherie à Avize | Boucherie Tourteaux", description: siteConfig.description },
};
export const viewport: Viewport = { themeColor: "#F4EFE7", colorScheme: "light dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const localBusiness = { "@context": "https://schema.org", "@type": "Store", "@id": businessId, name: siteConfig.name, description: siteConfig.description, telephone: "+33326517371", email: siteConfig.email, url: siteConfig.url, logo: `${siteConfig.url}/images/logo.png`, address: postalAddress, openingHoursSpecification };
  const website = { "@context": "https://schema.org", "@type": "WebSite", "@id": `${siteConfig.url}/#website`, name: siteConfig.name, url: siteConfig.url, inLanguage: "fr-FR", publisher: { "@id": businessId } };
  const jsonLd = safeJsonLd([localBusiness, website]);
  return <html lang="fr" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning><body><a href="#contenu" className="skip-link">Aller au contenu</a><SmoothScroll/><Header/><main id="contenu" className="min-h-[60vh]">{children}</main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }}/></body></html>;
}
