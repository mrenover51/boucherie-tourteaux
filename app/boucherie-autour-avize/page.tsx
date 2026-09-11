import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Navigation, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema, businessId, safeJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: { absolute: "Accès à la Boucherie Tourteaux depuis les environs" },
  description: "Distances routières approximatives et itinéraires pour rejoindre la Boucherie Tourteaux à Avize depuis les communes voisines.",
  alternates: { canonical: "/boucherie-autour-avize" },
  openGraph: { title: "Boucherie autour d’Avize", description: "Distances et informations utiles pour rejoindre la Boucherie Tourteaux depuis la Côte des Blancs et Épernay.", url: "/boucherie-autour-avize", locale: "fr_FR", type: "website" },
  twitter: { card: "summary_large_image", title: "Boucherie autour d’Avize", description: "Distances routières et accès à la Boucherie Tourteaux depuis les environs." },
};

type DistanceGroup = "0–5 km" | "5–10 km" | "10–20 km";
type City = { name: string; distanceKm: number; group: DistanceGroup; href?: string };

const cities: readonly City[] = [
  { name: "Cramant", distanceKm: 3, group: "0–5 km" },
  { name: "Le Mesnil-sur-Oger", distanceKm: 4, group: "0–5 km" },
  { name: "Grauves", distanceKm: 4, group: "0–5 km" },
  { name: "Flavigny", distanceKm: 4, group: "0–5 km" },
  { name: "Cuis", distanceKm: 5, group: "0–5 km" },
  { name: "Monthelon", distanceKm: 8, group: "5–10 km" },
  { name: "Mancy", distanceKm: 8, group: "5–10 km" },
  { name: "Oiry", distanceKm: 8, group: "5–10 km" },
  { name: "Pierry", distanceKm: 9, group: "5–10 km" },
  { name: "Plivot", distanceKm: 9, group: "5–10 km" },
  { name: "Morangis", distanceKm: 10, group: "5–10 km" },
  { name: "Chavot-Courcourt", distanceKm: 10, group: "5–10 km" },
  { name: "Chouilly", distanceKm: 10, group: "5–10 km" },
  { name: "Moussy", distanceKm: 10, group: "5–10 km" },
  { name: "Blancs-Coteaux (Vertus)", distanceKm: 10, group: "5–10 km" },
  { name: "Épernay", distanceKm: 11, group: "10–20 km", href: "/boucherie-epernay" },
  { name: "Vinay", distanceKm: 11, group: "10–20 km" },
  { name: "Magenta", distanceKm: 12, group: "10–20 km" },
  { name: "Avenay-Val-d’Or", distanceKm: 12, group: "10–20 km" },
  { name: "Bergères-lès-Vertus", distanceKm: 13, group: "10–20 km" },
  { name: "Brugny-Vaudancourt", distanceKm: 13, group: "10–20 km" },
  { name: "Aÿ-Champagne", distanceKm: 13, group: "10–20 km" },
  { name: "Mardeuil", distanceKm: 14, group: "10–20 km" },
  { name: "Dizy", distanceKm: 14, group: "10–20 km" },
  { name: "Tours-sur-Marne", distanceKm: 16, group: "10–20 km" },
] as const;

const groups: readonly DistanceGroup[] = ["0–5 km", "5–10 km", "10–20 km"];
const featuredNames = ["Épernay", "Cramant", "Blancs-Coteaux (Vertus)"] as const;
const crumbs = [{ name: "Accueil", href: "/" }, { name: "Autour d’Avize", href: "/boucherie-autour-avize" }] as const;
const destination = `${siteConfig.address.street}, ${siteConfig.address.postalCode} ${siteConfig.address.city}`;

function routeFrom(origin?: string) {
  const params = new URLSearchParams({ api: "1", destination });
  if (origin) params.set("origin", `${origin}, Marne`);
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

function findCity(name: (typeof featuredNames)[number]) {
  return cities.find((city) => city.name === name)!;
}

export default function AreaPage() {
  const schema = [breadcrumbSchema(crumbs), { "@context": "https://schema.org", "@type": "WebPage", name: "Boucherie autour d’Avize", url: `${siteConfig.url}/boucherie-autour-avize`, about: { "@id": businessId } }];

  return (
    <>
      <section className="bg-surface-dark px-5 pt-40 pb-20 text-on-dark sm:pt-48 sm:pb-28">
        <Container>
          <p className="text-xs font-bold uppercase tracking-[.22em] text-accent-light">Côte des Blancs · Marne</p>
          <h1 className="mt-6 max-w-5xl font-serif text-[clamp(3.6rem,8vw,7.6rem)] leading-[.88] tracking-[-.045em]">Boucherie autour d’Avize</h1>
          <p className="mt-8 max-w-3xl text-base leading-8 text-on-dark/75">La Boucherie Tourteaux vous accueille au 33 rue Pasteur à Avize. Retrouvez les distances routières approximatives depuis les villages voisins et préparez simplement votre trajet jusqu’à la boutique.</p>
        </Container>
      </section>

      <Breadcrumbs items={crumbs} />

      <section className="bg-background py-20 sm:py-28">
        <Container className="grid gap-16 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-24">
          <div data-reveal>
            <p className="text-xs font-bold uppercase tracking-[.22em] text-accent">Depuis Avize</p>
            <h2 className="mt-6 font-serif text-5xl leading-[.95] text-foreground sm:text-6xl">Au cœur de la Côte des Blancs</h2>
            <p className="mt-7 leading-8 text-foreground/65">Installée au cœur de la Côte des Blancs, la Boucherie Tourteaux accueille ses clients à Avize, à quelques minutes de Cramant, Le Mesnil-sur-Oger, Chouilly et des villages environnants. Épernay se trouve également à proximité.</p>
            <p className="mt-5 leading-8 text-foreground/65">Vous venez d’une commune voisine ? Retrouvez ci-dessous les distances approximatives jusqu’à la boutique et accédez directement à votre itinéraire.</p>
            <p className="mt-7 border-l border-accent pl-5 text-sm leading-7 text-foreground/65">Livraison possible selon la commune, la disponibilité et les conditions de la boutique. Contactez-nous pour confirmation.</p>
          </div>
          <DistanceDiagram />
        </Container>
      </section>

      <section className="bg-surface py-20 sm:py-28">
        <Container>
          <div data-reveal className="grid gap-8 lg:grid-cols-[1fr_.55fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.22em] text-accent">Distances depuis la boutique</p>
              <h2 className="mt-6 max-w-4xl font-serif text-5xl leading-[.92] text-foreground sm:text-7xl">Les communes proches de la boutique</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-foreground/60">Les distances sont arrondies et peuvent varier légèrement selon votre point de départ et l’itinéraire retenu.</p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3 lg:gap-5">
            {groups.map((group) => (
              <section key={group} aria-labelledby={`distance-${group}`} className="border-t border-border-dark/20 pt-6">
                <h3 id={`distance-${group}`} className="font-serif text-3xl text-foreground">{group}</h3>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {cities.filter((city) => city.group === group).map((city) => <CityCard key={city.name} city={city} />)}
                </ul>
              </section>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-background py-20 sm:py-28">
        <Container>
          <p className="text-xs font-bold uppercase tracking-[.22em] text-accent">Points de départ</p>
          <h2 className="mt-6 max-w-4xl font-serif text-5xl leading-[.92] text-foreground sm:text-7xl">Autour d’Avize et d’Épernay</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {featuredNames.map((name) => <JourneyCard key={name} city={findCity(name)} />)}
          </div>
        </Container>
      </section>

      <section className="bg-accent-soft py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.22em] text-foreground">Préparer votre venue</p>
            <h2 className="mt-5 font-serif text-5xl leading-[.92] text-foreground sm:text-6xl">Boucherie Tourteaux</h2>
            <address className="mt-5 not-italic leading-7 text-foreground/70">33 rue Pasteur<br />51190 Avize</address>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={routeFrom()} target="_blank" rel="noreferrer" className="w-full sm:w-auto">Obtenir l’itinéraire <Navigation className="size-4" /></Button>
            <Button href={siteConfig.phoneHref} variant="outline" className="w-full border-border-dark sm:w-auto">Appeler <Phone className="size-4" /></Button>
          </div>
        </Container>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />
    </>
  );
}

function CityCard({ city }: { city: City }) {
  const content = <><span className="font-semibold text-foreground">{city.name}</span><span className="shrink-0 text-xs font-semibold tracking-[.08em] text-accent">≈ {city.distanceKm} km</span></>;
  return (
    <li>
      {city.href ? (
        <Link href={city.href} className="flex min-h-14 items-center justify-between gap-3 border border-border-dark/10 bg-background px-4 py-3 transition-colors hover:border-accent focus-visible:outline-accent">{content}</Link>
      ) : (
        <div className="flex min-h-14 items-center justify-between gap-3 border border-border-dark/10 bg-background px-4 py-3">{content}</div>
      )}
    </li>
  );
}

function JourneyCard({ city }: { city: City }) {
  const origin = city.name === "Blancs-Coteaux (Vertus)" ? "Vertus, Blancs-Coteaux" : city.name;
  return (
    <article className="flex min-h-64 flex-col border border-border-dark/10 bg-surface p-7">
      <p className="text-[.62rem] font-bold uppercase tracking-[.2em] text-accent">Depuis {city.name}</p>
      <h3 className="mt-5 font-serif text-3xl leading-tight text-foreground">La boutique se trouve à environ {city.distanceKm} km.</h3>
      <div className="mt-auto flex flex-col items-start gap-4 pt-8">
        {city.href && <Link href={city.href} className="text-sm text-foreground underline decoration-accent underline-offset-4">Découvrir la page locale</Link>}
        <a href={routeFrom(origin)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.12em] text-foreground">Voir le trajet <ArrowRight className="size-4 text-accent" /></a>
      </div>
    </article>
  );
}

function DistanceDiagram() {
  return (
    <figure data-image-reveal className="mx-auto w-full max-w-[640px]">
      <div style={{ height: "min(640px, max(440px, 80vw))" }} aria-label="Représentation schématique des distances autour d’Avize" className="relative overflow-hidden rounded-[2rem] border border-border-dark/15 bg-surface px-3 text-center shadow-[0_30px_90px_rgba(23,23,23,.08)] sm:rounded-full">
        <div style={{ width: "78%", height: "78%" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-accent/30" />
        <div style={{ width: "54%", height: "54%" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border-dark/15" />
        <div style={{ width: "30%", height: "30%" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/20" />
        <span style={{ top: "7%", left: "50%" }} className="absolute -translate-x-1/2 text-xs font-semibold text-foreground">Cramant <small className="block text-[.62rem] text-accent">≈ 3 km</small></span>
        <span style={{ top: "28%", right: "5%" }} className="absolute text-xs font-semibold text-foreground">Épernay <small className="block text-[.62rem] text-accent">≈ 11 km</small></span>
        <span style={{ right: "5%", bottom: "18%" }} className="absolute text-xs font-semibold text-foreground">Chouilly <small className="block text-[.62rem] text-accent">≈ 10 km</small></span>
        <span style={{ bottom: "7%", left: "5%" }} className="absolute max-w-28 text-xs leading-tight font-semibold text-foreground">Le Mesnil-sur-Oger <small className="mt-1 block text-[.62rem] text-accent">≈ 4 km</small></span>
        <div style={{ width: "46%" }} className="absolute top-1/2 left-1/2 z-10 max-w-52 -translate-x-1/2 -translate-y-1/2 bg-surface-dark px-4 py-6 text-on-dark shadow-xl sm:rounded-full sm:px-8 sm:py-8">
          <MapPin className="mx-auto size-6 text-accent-light" />
          <strong className="mt-2 block font-serif text-2xl">Avize</strong>
          <span className="text-xs text-on-dark/70">33 rue Pasteur</span>
        </div>
      </div>
      <figcaption className="mt-5 text-center text-xs leading-5 text-foreground/50">Schéma indicatif · distances routières approximatives depuis la boutique</figcaption>
    </figure>
  );
}
