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
  metadataBase: new URL(siteConfig.url), title: { default: `${siteConfig.name} — Avize`, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description, applicationName: siteConfig.name, alternates: { canonical: "/" },
  openGraph: { title: `${siteConfig.name} — Avize`, description: siteConfig.description, url: "/", siteName: siteConfig.name, locale: "fr_FR", type: "website" },
  twitter: { card: "summary_large_image", title: `${siteConfig.name} — Avize`, description: siteConfig.description },
};
export const viewport: Viewport = { themeColor: "#FAF8F5", colorScheme: "light dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const localBusiness = { "@context": "https://schema.org", "@type": ["LocalBusiness", "ButcherShop"], name: siteConfig.name, description: siteConfig.description, telephone: siteConfig.phone, email: siteConfig.email, url: siteConfig.url, priceRange: "€€", address: { "@type": "PostalAddress", streetAddress: siteConfig.address.street, postalCode: siteConfig.address.postalCode, addressLocality: siteConfig.address.city, addressRegion: siteConfig.address.region, addressCountry: siteConfig.address.country }, openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "08:00", closes: "19:00" }, { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "08:00", closes: "13:00" }] };
  const faq = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "Où se trouve la Boucherie Tourteaux ?", acceptedAnswer: { "@type": "Answer", text: "La boucherie se situe au 33 rue Pasteur, 51190 Avize." } }, { "@type": "Question", name: "Peut-on commander par téléphone ?", acceptedAnswer: { "@type": "Answer", text: `Oui, les commandes peuvent être préparées en appelant le ${siteConfig.phone}.` } }] };
  const jsonLd = JSON.stringify([localBusiness, faq]).replace(/</g, "\\u003c");
  return <html lang="fr" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning><body><a href="#contenu" className="skip-link">Aller au contenu</a><SmoothScroll/><Header/><main id="contenu" className="min-h-[60vh]">{children}</main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }}/></body></html>;
}
