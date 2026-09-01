import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  ChefHat,
  Phone,
  Scissors,
  ShieldCheck,
  Truck,
  UsersRound,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { FloatingActions } from "@/components/layout/floating-actions";
import { ProductCarousel } from "@/components/sections/product-carousel";
import { Gallery } from "@/components/sections/gallery";
import { Testimonials } from "@/components/sections/testimonials";

const products = [
  {
    title: "Bœuf",
    text: "Des races françaises choisies pour leur persillé et leur tendreté.",
    image: "/images/produit-boeuf.webp",
  },
  {
    title: "Veau",
    text: "Une chair fine, claire et fondante issue d’élevages sélectionnés.",
    image: "/images/produit-veau.webp",
  },
  {
    title: "Agneau",
    text: "Des pièces délicates préparées avec précision dans notre atelier.",
    image: "/images/produit-agneau.webp",
  },
  {
    title: "Porc",
    text: "Le goût généreux d’une viande française soigneusement travaillée.",
    image: "/images/produit-porc.webp",
  },
  {
    title: "Volaille",
    text: "Volailles fermières entières ou découpées selon vos envies.",
    image: "/images/produit-volaille.webp",
  },
  {
    title: "Fromages",
    text: "Une sélection affinée pour accompagner vos tables champenoises.",
    image: "/images/produit-charcuterie.webp",
  },
  {
    title: "Produits régionaux",
    text: "Les saveurs de notre terroir et les meilleures maisons locales.",
    image: "/images/produit-preparations-maison.webp",
  },
  {
    title: "Traiteur",
    text: "Des recettes maison pensées pour vos repas et vos réceptions.",
    image: "/images/produit-traiteur.webp",
  },
];
const commitments = [
  {
    icon: BadgeCheck,
    title: "Viande française",
    text: "Des origines choisies et une traçabilité sans compromis.",
  },
  {
    icon: Truck,
    title: "Circuit court",
    text: "Des partenaires proches et des relations de confiance.",
  },
  {
    icon: Scissors,
    title: "Découpe artisanale",
    text: "Chaque pièce est préparée à la main, à la demande.",
  },
  {
    icon: UsersRound,
    title: "Conseils personnalisés",
    text: "La cuisson, la quantité et le morceau juste pour vous.",
  },
  {
    icon: ShieldCheck,
    title: "Hygiène irréprochable",
    text: "Une exigence quotidienne dans toute la maison.",
  },
  {
    icon: ChefHat,
    title: "Traiteur sur mesure",
    text: "Des préparations gourmandes pour toutes les occasions.",
  },
];

export function HomeExperience({
  phone,
  phoneHref,
}: {
  phone: string;
  phoneHref: string;
}) {
  return (
    <>
      <FloatingActions phoneHref={phoneHref} />
      <section
        data-hero
        className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#16100f] text-white"
      >
        <Image
          src="/images/hero-boucherie-tourteaux.webp"
          alt="Pièce de bœuf sélectionnée par un artisan boucher"
          fill
          priority
          sizes="100vw"
          className="hero-parallax object-cover object-[64%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,7,7,.72)_0%,rgba(21,10,10,.52)_38%,rgba(14,8,8,.12)_64%,rgba(14,8,8,.02)_84%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20" />
        <div className="relative z-10 w-full px-5 pt-32 pb-20 sm:px-8 sm:pt-36 sm:pb-20 lg:px-12 xl:pt-36 xl:pr-12 xl:pb-16 xl:pl-[clamp(120px,9vw,180px)]">
          <div className="w-full xl:w-[min(720px,48vw)] xl:max-w-[720px]">
          <div
            data-hero-fade
            className="mb-7 flex items-center gap-4 text-[.61rem] font-bold uppercase tracking-[.27em] text-gold sm:text-[.68rem]"
          >
            <span className="h-px w-9 bg-gold" /> Maison familiale depuis
            plusieurs générations
          </div>
          <h1 className="max-w-[700px] font-serif text-[clamp(3.2rem,7vw,4.5rem)] leading-[.98] font-medium tracking-[-.025em] xl:text-[clamp(64px,4.2vw,82px)]">
            <span className="xl:block xl:overflow-hidden xl:pb-[.1em]">
              <span data-hero-line className="xl:block">
                La tradition du goût
              </span>
            </span>{" "}
            <span className="xl:block xl:overflow-hidden xl:pb-[.1em]">
              <span data-hero-line className="xl:block">
                depuis plusieurs
              </span>
            </span>{" "}
            <span className="xl:block xl:overflow-hidden xl:pb-[.1em]">
              <span data-hero-line className="text-gold xl:block">
                générations.
              </span>
            </span>
          </h1>
          <p
            data-hero-fade
            className="mt-5 max-w-[540px] text-base leading-[1.6] text-white/80 lg:text-[17px]"
          >
            Boucherie artisanale à Avize proposant viandes françaises,
            charcuterie maison et service traiteur.
          </p>
          <div data-hero-fade className="mt-7 flex flex-wrap gap-3.5">
            <Link
              href="#produits"
              className="premium-button bg-bordeaux px-8 py-[1.1rem] text-[13px] font-bold tracking-[.15em]"
            >
              DÉCOUVRIR <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/contact"
              className="premium-button border border-gold/80 px-8 py-[1.1rem] text-[13px] font-bold tracking-[.15em] hover:bg-gold hover:text-[#25100f]"
            >
              NOUS CONTACTER
            </Link>
          </div>
          </div>
        </div>
        <a
          href="#produits"
          aria-label="Faire défiler vers les produits"
          className="absolute bottom-20 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[.58rem] uppercase tracking-[.28em] text-white/65"
        >
          <span>Découvrir</span>
          <ArrowDown className="hero-scroll-arrow size-4 text-gold" />
        </a>
      </section>
      <section
        id="produits"
        className="overflow-hidden bg-background py-20 sm:py-24 lg:py-28"
      >
        <Container>
          <div
            data-reveal
            className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end"
          >
            <div>
              <Eyebrow>Nos produits d’exception</Eyebrow>
              <h2 className="section-title mt-5 max-w-4xl">
                Une sélection rigoureuse
                <br className="hidden sm:block" /> pour une qualité
                incomparable.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-foreground/60 lg:pb-2">
              Des produits choisis avec exigence, découpés et préparés chaque
              jour dans notre maison.
            </p>
          </div>
          <ProductCarousel products={products} />
        </Container>
      </section>
      <section className="relative overflow-hidden bg-[#101211] py-20 text-white sm:py-24 lg:py-28">
        <div className="absolute top-0 right-0 size-[38rem] rounded-full bg-bordeaux/20 blur-[140px]" />
        <Container className="relative">
          <div
            data-reveal
            className="grid gap-8 border-b border-white/12 pb-12 lg:grid-cols-[1.1fr_.55fr] lg:items-end"
          >
            <div>
              <Eyebrow>Pourquoi nous choisir</Eyebrow>
              <h2 className="section-title mt-5 max-w-3xl text-white">
                L’excellence artisanale
                <br className="hidden sm:block" /> à chaque étape.
              </h2>
            </div>
            <div>
              <p className="text-sm leading-7 text-white/58">
                De la sélection jusqu’à votre table, nous cultivons une même
                exigence : vous offrir le goût juste.
              </p>
              <Link
                href="/boucherie"
                className="mt-7 inline-flex items-center gap-3 border-b border-gold pb-2 text-[.65rem] font-bold tracking-[.16em] text-gold"
              >
                DÉCOUVRIR NOS ENGAGEMENTS <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
          <div data-stagger className="mt-4 grid grid-cols-2 lg:grid-cols-6">
            {commitments.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="group border-b border-white/10 px-3 py-9 first:pl-0 sm:px-5 lg:border-r lg:border-b-0 lg:last:border-r-0"
              >
                <Icon className="size-8 stroke-[1.2] text-gold transition-transform duration-500 group-hover:-translate-y-1" />
                <h3 className="mt-7 font-serif text-xl leading-tight sm:text-2xl">
                  {title}
                </h3>
                <p className="mt-3 text-xs leading-5 text-white/48">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-background py-20 sm:py-28 lg:py-32">
        <Container>
          <div
            data-reveal
            className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end"
          >
            <div>
              <Eyebrow>Notre univers</Eyebrow>
              <h2 className="section-title mt-5">
                Découvrez notre savoir-faire
                <br className="hidden sm:block" /> en images.
              </h2>
            </div>
            <Link
              href="/galerie"
              className="premium-button w-fit border border-bordeaux/25 px-6 py-4 text-[.62rem] font-bold tracking-[.15em] text-bordeaux hover:bg-bordeaux hover:text-white"
            >
              VOIR TOUTE LA GALERIE <ArrowRight className="size-4" />
            </Link>
          </div>
          <Gallery />
        </Container>
      </section>
      <section className="bg-white py-20 sm:py-28 lg:py-32">
        <Container>
          <div data-reveal className="text-center">
            <Eyebrow center>Ils nous font confiance</Eyebrow>
            <h2 className="section-title mx-auto mt-5 max-w-4xl">
              L’avis de nos clients
              <br className="hidden sm:block" /> compte pour nous.
            </h2>
          </div>
          <Testimonials />
        </Container>
      </section>
      <section className="relative overflow-hidden bg-gold px-4 py-16 sm:py-20">
        <Container
          data-reveal
          className="relative flex flex-col justify-between gap-8 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-[.62rem] font-bold uppercase tracking-[.2em] text-bordeaux">
              Une envie particulière ?
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-none text-bordeaux sm:text-5xl">
              Préparons votre prochaine table.
            </h2>
          </div>
          <a
            href={phoneHref}
            className="flex items-center gap-4 font-serif text-2xl text-bordeaux"
          >
            <span className="grid size-12 place-items-center rounded-full bg-bordeaux text-white">
              <Phone className="size-5" />
            </span>
            {phone}
          </a>
        </Container>
      </section>
    </>
  );
}
function Eyebrow({
  children,
  center = false,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <p
      className={`flex items-center gap-3 text-[.64rem] font-bold uppercase tracking-[.23em] text-gold ${center ? "justify-center" : ""}`}
    >
      <span className="h-px w-8 bg-current" />
      {children}
      <span className={center ? "h-px w-8 bg-current" : "hidden"} />
    </p>
  );
}
