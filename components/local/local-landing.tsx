import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, MapPin, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema, businessId, safeJsonLd } from "@/lib/structured-data";

export type LocalLandingContent = {
  city: string;
  slug: string;
  eyebrow: string;
  h1: string;
  intro: string;
  routeNote: string;
  sections: readonly { title: string; paragraphs: readonly string[] }[];
  nearby: readonly string[];
};

export function LocalLanding({ content }: { content: LocalLandingContent }) {
  const path = `/${content.slug}`;
  const crumbs = [{ name: "Accueil", href: "/" }, { name: content.city, href: path }] as const;
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${siteConfig.address.street}, ${siteConfig.address.postalCode} ${siteConfig.address.city}`)}`;
  const schema = [
    breadcrumbSchema(crumbs),
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: content.h1,
      url: `${siteConfig.url}${path}`,
      about: { "@id": businessId },
      isPartOf: { "@id": `${siteConfig.url}/#website` },
    },
  ];

  return (
    <>
      <section className="relative isolate flex min-h-[68svh] items-end overflow-hidden bg-[#171011] text-white">
        <Image src="/images/boucherie-hero.webp" alt="Préparation en boucherie à la Boucherie Tourteaux" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
        <Container className="relative z-10 pb-16 pt-40">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-gold">{content.eyebrow}</p>
          <h1 className="mt-6 max-w-5xl font-serif text-[clamp(3.4rem,7vw,7rem)] leading-[.9] tracking-[-.04em]">{content.h1}</h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/75">{content.intro}</p>
        </Container>
      </section>
      <Breadcrumbs items={crumbs} />
      <section className="bg-background py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[1fr_.42fr] lg:gap-20">
          <div className="space-y-16">
            {content.sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-serif text-4xl leading-tight text-bordeaux sm:text-5xl">{section.title}</h2>
                <div className="mt-6 space-y-5 text-base leading-8 text-foreground/65">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </section>
            ))}
          </div>
          <aside className="h-fit border border-bordeaux/10 bg-white p-7 lg:sticky lg:top-32">
            <MapPin className="size-7 text-gold" />
            <h2 className="mt-6 font-serif text-3xl text-bordeaux">Venir à la boutique</h2>
            <address className="mt-5 not-italic leading-7 text-foreground/65">Boucherie Tourteaux<br />33 rue Pasteur<br />51190 Avize</address>
            <p className="mt-5 text-sm leading-6 text-foreground/55">{content.routeNote}</p>
            <a href={directions} target="_blank" rel="noreferrer" className="premium-button mt-7 w-full justify-center bg-bordeaux px-5 py-4 text-xs font-bold uppercase tracking-[.12em] text-white">Itinéraire <ArrowRight className="size-4" /></a>
            <a href={siteConfig.phoneHref} className="mt-3 flex items-center justify-center gap-2 py-3 font-serif text-xl text-bordeaux"><Phone className="size-4" />{siteConfig.phone}</a>
            <div className="mt-6 border-t border-bordeaux/10 pt-5 text-sm leading-7 text-foreground/60"><Clock3 className="mr-2 inline size-4 text-gold" />Ouvert du mardi au dimanche midi. Consultez les <Link href="/contact" className="text-bordeaux underline underline-offset-4">horaires détaillés</Link>.</div>
          </aside>
        </Container>
      </section>
      <section className="bg-white py-16">
        <Container>
          <h2 className="font-serif text-4xl text-bordeaux">Préparer votre visite</h2>
          <p className="mt-5 max-w-3xl leading-8 text-foreground/60">Consultez les <Link href="/produits" className="text-bordeaux underline underline-offset-4">catégories proposées en boutique</Link>, découvrez le <Link href="/traiteur" className="text-bordeaux underline underline-offset-4">service traiteur à Avize</Link> ou appelez avant votre déplacement pour vérifier une disponibilité. La livraison et la vente à emporter sont proposées ; leurs modalités et la commune concernée doivent être confirmées directement avec la boucherie.</p>
          <p className="mt-6 text-sm text-foreground/50">Repères géographiques proches d’Avize : {content.nearby.join(", ")}. Cette liste décrit la proximité, pas une zone de livraison.</p>
        </Container>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />
    </>
  );
}
