import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Navigation, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema, businessId, safeJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: { absolute: "Accès à la Boucherie Tourteaux depuis les environs" },
  description: "Situez la boutique d’Avize depuis Cramant, Le Mesnil-sur-Oger, Épernay et les communes voisines. Adresse, horaires et itinéraire.",
  alternates: { canonical: "/boucherie-autour-avize" },
  openGraph: { title: "Boucherie à Avize et autour d’Épernay", description: "Les informations utiles pour rejoindre la Boucherie Tourteaux depuis les communes proches d’Avize.", url: "/boucherie-autour-avize", locale: "fr_FR", type: "website" },
  twitter: { card: "summary_large_image", title: "Boucherie autour d’Avize", description: "Accès à la Boucherie Tourteaux depuis la Côte des Blancs et Épernay." },
};

const close = ["Cramant", "Cuis", "Grauves", "Le Mesnil-sur-Oger", "Chouilly", "Oiry", "Pierry", "Mancy", "Monthelon", "Moussy", "Flavigny"];
const wider = ["Épernay", "Plivot", "Chavot-Courcourt", "Morangis", "Aÿ-Champagne", "Magenta", "Dizy", "Mardeuil", "Avenay-Val-d’Or", "Bergères-lès-Vertus", "Tours-sur-Marne", "Vinay", "Brugny-Vaudancourt"];
const crumbs = [{ name: "Accueil", href: "/" }, { name: "Autour d’Avize", href: "/boucherie-autour-avize" }] as const;

export default function AreaPage() {
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("33 rue Pasteur, 51190 Avize")}`;
  const schema = [breadcrumbSchema(crumbs), { "@context": "https://schema.org", "@type": "WebPage", name: "Accès à la Boucherie Tourteaux depuis les environs", url: `${siteConfig.url}/boucherie-autour-avize`, about: { "@id": businessId } }];
  return <>
    <section className="bg-bordeaux px-5 pb-20 pt-40 text-white sm:pb-28 sm:pt-48">
      <Container><p className="text-xs font-bold uppercase tracking-[.22em] text-gold">Côte des Blancs · Marne</p><h1 className="mt-6 max-w-5xl font-serif text-[clamp(3.6rem,8vw,7.6rem)] leading-[.88] tracking-[-.045em]">Rejoindre notre boutique à Avize depuis les environs</h1><p className="mt-8 max-w-3xl text-base leading-8 text-white/70">La Boucherie Tourteaux possède une seule boutique, située au 33 rue Pasteur à Avize. Cette page aide les habitants des communes proches à la situer et à calculer leur itinéraire ; elle ne présente aucune implantation dans une autre commune.</p></Container>
    </section>
    <Breadcrumbs items={crumbs} />
    <section className="bg-background py-20 sm:py-28"><Container className="grid gap-16 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
      <div><h2 className="font-serif text-5xl leading-[.95] text-bordeaux sm:text-6xl">Au cœur de la Côte des Blancs</h2><p className="mt-7 leading-8 text-foreground/65">Avize se situe dans la Marne, au sud d’Épernay. Les villages les plus proches forment un premier bassin de visite ; Épernay et les communes plus éloignées du rayon d’environ 20 km constituent un second ensemble. Cette représentation est volontairement légère et indicative : l’itinéraire routier dépend de votre adresse exacte.</p><p className="mt-5 leading-8 text-foreground/65">La présence d’une commune dans cette zone ne garantit pas une livraison. La livraison est bien proposée par la Boucherie Tourteaux, mais sa disponibilité, son périmètre et ses conditions doivent être confirmés directement avec la boutique.</p></div>
      <div aria-label="Représentation schématique des communes autour d’Avize" className="relative grid min-h-[420px] place-items-center overflow-hidden rounded-full border border-bordeaux/15 bg-white p-10 text-center shadow-[0_30px_90px_rgba(91,15,24,.08)]"><div className="absolute size-[72%] rounded-full border border-dashed border-gold/35"/><div className="absolute size-[42%] rounded-full border border-bordeaux/15"/><div className="relative z-10 rounded-full bg-bordeaux px-8 py-7 text-white shadow-xl"><MapPin className="mx-auto size-6 text-gold"/><strong className="mt-2 block font-serif text-2xl">Avize</strong><span className="text-xs text-white/65">33 rue Pasteur</span></div><span className="absolute top-[15%] text-xs text-bordeaux">Épernay</span><span className="absolute right-[10%] text-xs text-bordeaux">Chouilly · Oiry</span><span className="absolute bottom-[14%] text-xs text-bordeaux">Le Mesnil-sur-Oger</span><span className="absolute left-[9%] text-xs text-bordeaux">Cramant · Cuis</span></div>
    </Container></section>
    <section className="bg-white py-20 sm:py-28"><Container><div className="grid gap-12 lg:grid-cols-2"><div><h2 className="font-serif text-4xl text-bordeaux">Communes les plus proches</h2><p className="mt-5 leading-7 text-foreground/60">Ces communes sont directement liées au secteur d’Avize et de la Côte des Blancs.</p><ul className="mt-7 flex flex-wrap gap-2">{close.map(city => <li key={city} className="rounded-full border border-bordeaux/12 bg-background px-4 py-2 text-sm">{city}</li>)}</ul></div><div><h2 className="font-serif text-4xl text-bordeaux">Rayon élargi pertinent</h2><p className="mt-5 leading-7 text-foreground/60">Ces communes correspondent au bassin élargi autour d’Avize ; le temps de trajet doit être calculé au départ de chacune.</p><ul className="mt-7 flex flex-wrap gap-2">{wider.map(city => <li key={city} className="rounded-full border border-bordeaux/12 bg-background px-4 py-2 text-sm">{city}</li>)}</ul></div></div>
      <div className="mt-16 grid gap-4 md:grid-cols-3"><Link href="/boucherie-epernay" className="border border-bordeaux/10 p-7 transition hover:border-gold"><strong className="font-serif text-3xl text-bordeaux">Depuis Épernay</strong><span className="mt-3 block text-sm leading-6 text-foreground/55">Une page dédiée au trajet depuis le principal bassin urbain voisin.</span></Link><article className="border border-bordeaux/10 p-7"><strong className="font-serif text-3xl text-bordeaux">Depuis Cramant</strong><span className="mt-3 block text-sm leading-6 text-foreground/55">Cramant est proche d’Avize. Utilisez le bouton d’itinéraire avec votre point de départ exact.</span></article><article className="border border-bordeaux/10 p-7"><strong className="font-serif text-3xl text-bordeaux">Depuis Blancs-Coteaux</strong><span className="mt-3 block text-sm leading-6 text-foreground/55">Le trajet varie selon la commune déléguée ; le guidage calcule le parcours réel.</span></article></div>
    </Container></section>
    <section className="bg-gold py-16"><Container className="flex flex-col justify-between gap-8 md:flex-row md:items-center"><div><h2 className="font-serif text-4xl text-bordeaux">Rejoindre la Boucherie Tourteaux</h2><p className="mt-3 text-bordeaux/70">33 rue Pasteur · 51190 Avize · France</p></div><div className="flex flex-wrap gap-3"><a href={directions} target="_blank" rel="noreferrer" className="premium-button bg-bordeaux px-6 py-4 text-xs font-bold uppercase tracking-[.12em] text-white"><Navigation className="size-4"/>Itinéraire</a><a href={siteConfig.phoneHref} className="premium-button border border-bordeaux px-6 py-4 text-xs font-bold uppercase tracking-[.12em] text-bordeaux"><Phone className="size-4"/>Appeler</a></div></Container></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />
  </>;
}
