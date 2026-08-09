import type { Metadata } from "next";
import { ProductsExperience } from "@/components/products/products-experience";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Nos Produits",
  description: "Découvrez les catégories proposées par la Boucherie Tourteaux à Avize : bœuf, veau, porc, agneau, volaille, charcuterie, traiteur et préparations maison.",
  alternates: { canonical: "/produits" },
  openGraph: {
    title: "Nos Produits | Boucherie Tourteaux",
    description: "Les différentes sélections de la Boucherie Tourteaux à Avize.",
    url: "/produits",
    type: "website",
    locale: "fr_FR",
  },
};

export default function ProductsPage() {
  return <ProductsExperience phone={siteConfig.phone} phoneHref={siteConfig.phoneHref} />;
}
