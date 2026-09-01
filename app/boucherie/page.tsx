import type { Metadata } from "next";
import { BoucherieExperience } from "@/components/boucherie/boucherie-experience";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema, businessId, safeJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Le métier et la boutique à Avize",
  description: "Découvrez le métier de la Boucherie Tourteaux et son commerce situé au 33 rue Pasteur à Avize, dans la Marne.",
  alternates: { canonical: "/boucherie" },
  openGraph: {
    title: "La Boucherie Tourteaux à Avize",
    description: "Boucherie, charcuterie et traiteur au 33 rue Pasteur à Avize.",
    url: "/boucherie",
    type: "website",
    locale: "fr_FR",
  },
  twitter: { card: "summary_large_image", title: "La Boucherie Tourteaux à Avize", description: "Découvrez la boutique et le métier au 33 rue Pasteur à Avize." },
};

export default function BoucheriePage() {
  const schema = [{
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "La Boucherie Tourteaux",
    url: `${siteConfig.url}/boucherie`,
    about: { "@id": businessId },
  }, breadcrumbSchema([{ name: "Accueil", href: "/" }, { name: "La Boucherie", href: "/boucherie" }])];

  return (
    <>
      <BoucherieExperience phone={siteConfig.phone} phoneHref={siteConfig.phoneHref} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />
    </>
  );
}
