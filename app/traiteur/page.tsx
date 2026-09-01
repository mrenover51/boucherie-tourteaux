import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, ShoppingBag, Truck, UtensilsCrossed } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema, businessId, safeJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: { absolute: "Service traiteur à Avize, près d’Épernay | Tourteaux" },
  description: "Service traiteur de la Boucherie Tourteaux à Avize, au cœur de la Côte des Blancs et près d’Épernay. Renseignez-vous sur les possibilités.",
  alternates: { canonical: "/traiteur" },
  openGraph: { title: "Traiteur à Avize | Boucherie Tourteaux", description: "Service traiteur à Avize : échangez avec la Boucherie Tourteaux pour connaître les possibilités, le retrait et la livraison.", url: "/traiteur", locale: "fr_FR", type: "website" },
  twitter: { card: "summary_large_image", title: "Traiteur à Avize | Boucherie Tourteaux", description: "Service traiteur à Avize, sur la Côte des Blancs et près d’Épernay." },
};

const services = [
  { icon: UtensilsCrossed, title: "Service traiteur", text: "Présentez votre besoin à la boucherie pour connaître les propositions réellement disponibles." },
  { icon: ShoppingBag, title: "Vente à emporter", text: "Convenez des modalités de retrait directement avec l’équipe au 33 rue Pasteur à Avize." },
  { icon: Truck, title: "Livraison", text: "Le service est proposé ; la commune, la date et les conditions doivent être confirmées avant toute commande." },
] as const;

export default function TraiteurPage() {
  const crumbs = [{ name: "Accueil", href: "/" }, { name: "Traiteur", href: "/traiteur" }] as const;
  const schema = [breadcrumbSchema(crumbs), { "@context": "https://schema.org", "@type": "Service", name: "Service traiteur", provider: { "@id": businessId }, url: `${siteConfig.url}/traiteur` }];
  return <div>
    <section className="relative isolate flex min-h-[78svh] items-end overflow-hidden bg-[#171011] text-white"><Image src="/images/produit-traiteur.webp" alt="Présentation du service traiteur de la Boucherie Tourteaux" fill priority sizes="100vw" className="object-cover object-center" /><div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/15" /><Container className="relative z-10 pb-20 pt-40"><p className="text-xs font-bold uppercase tracking-[.24em] text-gold">Traiteur · Avize</p><h1 className="mt-7 max-w-5xl font-serif text-[clamp(3.5rem,7vw,7.4rem)] leading-[.88] tracking-[-.04em]">Service traiteur à Avize, sur la Côte des Blancs</h1><p className="mt-7 max-w-2xl text-base leading-8 text-white/72">Contactez la boutique pour connaître les possibilités selon la date, le nombre de personnes et votre besoin.</p><div className="mt-8 flex flex-wrap gap-3"><Link href="/contact" className="premium-button bg-bordeaux px-8 py-4 text-xs font-bold uppercase tracking-[.14em]">Nous contacter <ArrowRight className="size-4" /></Link><a href={siteConfig.phoneHref} className="premium-button border border-gold/75 px-8 py-4 text-xs font-bold uppercase tracking-[.14em] hover:bg-gold hover:text-bordeaux-dark">Appeler <Phone className="size-4" /></a></div></Container></section>
    <Breadcrumbs items={crumbs} />
    <section className="bg-background py-20 sm:py-28"><Container className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24"><div><p className="text-xs font-bold uppercase tracking-[.22em] text-bordeaux">Votre demande</p><p className="mt-7 max-w-sm text-sm leading-7 text-foreground/55">Un échange direct permet d’obtenir une réponse fiable, sans supposer une formule ou un menu non confirmé.</p></div><div><h2 className="font-serif text-[clamp(3.2rem,5.5vw,6rem)] leading-[.92] tracking-[-.035em] text-bordeaux-dark">Des possibilités à préciser ensemble.</h2><p className="mt-8 max-w-2xl text-base leading-8 text-foreground/62">La Boucherie Tourteaux propose un service traiteur. Indiquez la date, le nombre de personnes et la nature de votre besoin. L’équipe vous confirmera les propositions disponibles, les délais ainsi que les modalités de retrait ou de livraison.</p><p className="mt-6 max-w-2xl text-base leading-8 text-foreground/62">La boutique est située à Avize, à proximité de Cramant, du Mesnil-sur-Oger et d’Épernay. La livraison n’est pas automatique dans toutes les communes : son périmètre doit être vérifié au moment de la demande.</p></div></Container></section>
    <section className="bg-white py-20 sm:py-28"><Container><p className="text-xs font-bold uppercase tracking-[.22em] text-bordeaux">Services confirmés</p><h2 className="mt-6 max-w-3xl font-serif text-5xl leading-[.95] text-bordeaux-dark">Des modalités claires avant de vous déplacer.</h2><div className="mt-14 grid gap-4 md:grid-cols-3">{services.map(({icon:Icon,title,text})=><article key={title} className="min-h-72 rounded-xl border border-bordeaux/10 bg-background p-7"><Icon className="size-7 text-gold"/><h3 className="mt-16 font-serif text-3xl text-bordeaux-dark">{title}</h3><p className="mt-5 text-sm leading-6 text-foreground/55">{text}</p></article>)}</div></Container></section>
    <section className="bg-bordeaux py-20 text-white"><Container className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[.22em] text-gold">Avize et environs</p><h2 className="mt-6 font-serif text-5xl leading-[.9]">Parlons de votre besoin.</h2></div><div className="flex flex-wrap gap-3"><Link href="/contact" className="premium-button bg-gold px-8 py-4 text-xs font-bold uppercase tracking-[.13em] text-bordeaux-dark">Contact et horaires</Link><Link href="/boucherie-autour-avize" className="premium-button border border-white/35 px-8 py-4 text-xs font-bold uppercase tracking-[.13em]">Voir la zone autour d’Avize</Link></div></Container></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />
  </div>;
}
