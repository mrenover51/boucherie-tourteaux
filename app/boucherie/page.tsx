import type { Metadata } from "next";
import { BoucherieExperience } from "@/components/boucherie/boucherie-experience";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "La Boucherie",
  description: "Découvrez la Boucherie Tourteaux, son métier et son adresse au cœur d’Avize, dans la Marne.",
  alternates: { canonical: "/boucherie" },
  openGraph: {
    title: "La Boucherie Tourteaux à Avize",
    description: "Boucherie, charcuterie et traiteur au 33 rue Pasteur à Avize.",
    url: "/boucherie",
    type: "website",
    locale: "fr_FR",
  },
};

export default function BoucheriePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "La Boucherie Tourteaux",
    url: `${siteConfig.url}/boucherie`,
    about: { "@type": "Butcher", name: siteConfig.name, address: `${siteConfig.address.street}, ${siteConfig.address.postalCode} ${siteConfig.address.city}` },
  };

  return (
    <>
      <BoucherieExperience phone={siteConfig.phone} phoneHref={siteConfig.phoneHref} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </>
  );
}
