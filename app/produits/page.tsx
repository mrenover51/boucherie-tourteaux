import type { Metadata } from "next";
import { ProductsExperience } from "@/components/products/products-experience";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema, businessId, safeJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: { absolute: "Viandes et produits de boucherie à Avize | Tourteaux" },
  description: "Parcourez les catégories présentées par la Boucherie Tourteaux à Avize et contactez la boutique pour vérifier les disponibilités du moment.",
  alternates: { canonical: "/produits" },
  openGraph: {
    title: "Nos Produits | Boucherie Tourteaux",
    description: "Les différentes sélections de la Boucherie Tourteaux à Avize.",
    url: "/produits",
    type: "website",
    locale: "fr_FR",
  },
  twitter: { card: "summary_large_image", title: "Produits | Boucherie Tourteaux à Avize", description: "Les catégories proposées par la Boucherie Tourteaux à Avize." },
};

export default function ProductsPage() {
  const schema = [{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Produits de la Boucherie Tourteaux", url: `${siteConfig.url}/produits`, about: { "@id": businessId } }, breadcrumbSchema([{ name: "Accueil", href: "/" }, { name: "Produits", href: "/produits" }])];
  return <><ProductsExperience phone={siteConfig.phone} phoneHref={siteConfig.phoneHref} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} /></>;
}
