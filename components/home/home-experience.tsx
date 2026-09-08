import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Beef,
  ChefHat,
  Phone,
  ShoppingBag,
  Truck,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { FloatingActions } from "@/components/layout/floating-actions";
import { ProductCarousel } from "@/components/sections/product-carousel";
import { Gallery } from "@/components/sections/gallery";

const products = [
  {
    title: "Bœuf",
    text: "Des pièces de bœuf à découvrir selon la sélection disponible en boutique.",
    image: "/images/produit-boeuf.webp",
  },
  {
    title: "Veau",
    text: "La catégorie veau est présentée selon les disponibilités en boutique.",
    image: "/images/produit-veau.webp",
  },
  {
    title: "Agneau",
    text: "La catégorie agneau est présentée selon les disponibilités en boutique.",
    image: "/images/produit-agneau.webp",
  },
  {
    title: "Porc",
    text: "Des pièces de porc à choisir directement auprès de la boucherie.",
    image: "/images/produit-porc.webp",
  },
  {
    title: "Volaille",
    text: "La catégorie volaille est présentée selon les disponibilités en boutique.",
    image: "/images/produit-volaille.webp",
  },
  {
    title: "Charcuterie",
    text: "Une catégorie de charcuterie à découvrir directement en boutique.",
    image: "/images/produit-charcuterie.webp",
  },
  {
    title: "Préparations",
    text: "Les préparations disponibles sont à vérifier auprès de la boutique.",
    image: "/images/produit-preparations-maison.webp",
  },
  {
    title: "Traiteur",
    text: "Un service traiteur dont les possibilités sont confirmées sur demande.",
    image: "/images/produit-traiteur.webp",
  },
];
const commitments = [
  {
    icon: Beef,
    title: "Boucherie",
    text: "L’activité principale de la boutique située à Avize.",
  },
  {
    icon: ChefHat,
    title: "Service traiteur",
    text: "Contactez la boutique pour connaître les possibilités proposées.",
  },
  {
    icon: Truck,
    title: "Livraison",
    text: "Un service proposé selon des modalités à confirmer avec la boutique.",
  },
  {
    icon: ShoppingBag,
    title: "Vente à emporter",
    text: "Un service proposé par la Boucherie Tourteaux à Avize.",
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
        className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-surface-black text-on-dark"
      >
        <Image
          src="/images/hero.png"
          alt="Boucherie Tourteaux à Avize, intérieur de la boutique et étal de viandes"
          fill
          priority
          sizes="100vw"
          className="hero-parallax object-cover object-[62%_center] sm:object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,13,13,.76)_0%,rgba(23,23,23,.54)_38%,rgba(13,13,13,.14)_64%,rgba(13,13,13,.02)_84%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20" />
        <div className="relative z-10 w-full px-5 pt-32 pb-20 sm:px-8 sm:pt-36 sm:pb-20 lg:px-12 xl:pt-36 xl:pr-12 xl:pb-16 xl:pl-[clamp(120px,9vw,180px)]">
          <div className="w-full xl:w-[min(720px,48vw)] xl:max-w-[720px]">
          <div
            data-hero-fade
            className="mb-7 flex items-center gap-4 text-[.61rem] font-bold uppercase tracking-[.27em] text-accent-light sm:text-[.68rem]"
          >
            <span className="h-px w-9 bg-accent-soft" /> Boucherie Tourteaux · Avize
          </div>
          <h1 className="max-w-[700px] font-serif text-[clamp(3.2rem,7vw,4.5rem)] leading-[.98] font-medium tracking-[-.025em] xl:text-[clamp(64px,4.2vw,82px)]">
            <span className="xl:block xl:overflow-hidden xl:pb-[.1em]">
              <span data-hero-line className="xl:block">
                Boucherie Tourteaux
              </span>
            </span>{" "}
            <span className="xl:block xl:overflow-hidden xl:pb-[.1em]">
              <span data-hero-line className="xl:block">
                à Avize,
              </span>
            </span>{" "}
            <span className="xl:block xl:overflow-hidden xl:pb-[.1em]">
              <span data-hero-line className="text-accent-light xl:block">
                Côte des Blancs.
              </span>
            </span>
          </h1>
          <p
            data-hero-fade
            className="mt-5 max-w-[540px] text-base leading-[1.6] text-on-dark/80 lg:text-[17px]"
          >
            Boucherie à Avize proposant service traiteur, livraison et vente à
            emporter, à proximité d’Épernay dans la Marne.
          </p>
          <div data-hero-fade className="mt-7 flex flex-wrap gap-3.5">
            <Link
              href="#produits"
              className="premium-button bg-surface-dark px-8 py-[1.1rem] text-[13px] font-bold tracking-[.15em]"
            >
              DÉCOUVRIR <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/contact"
              className="premium-button border border-accent/80 px-8 py-[1.1rem] text-[13px] font-bold tracking-[.15em] hover:bg-accent-soft hover:text-foreground"
            >
              NOUS CONTACTER
            </Link>
          </div>
          </div>
        </div>
        <a
          href="#produits"
          aria-label="Faire défiler vers les produits"
          className="absolute bottom-20 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[.58rem] uppercase tracking-[.28em] text-on-dark/65"
        >
          <span>Découvrir</span>
          <ArrowDown className="hero-scroll-arrow size-4 text-accent-light" />
        </a>
      </section>
      <section className="bg-surface py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div><Eyebrow>Une adresse locale</Eyebrow><h2 className="section-title mt-5">Votre boucherie à Avize, au cœur de la Côte des Blancs</h2></div>
          <div className="space-y-5 text-base leading-8 text-foreground/65"><p>La Boucherie Tourteaux vous accueille au 33 rue Pasteur, 51190 Avize, dans la Marne. Son adresse, au cœur de la Côte des Blancs, est accessible depuis Cramant, Le Mesnil-sur-Oger, Cuis, Grauves, Chouilly et Épernay.</p><p>Vous pouvez venir en boutique pour l’activité de boucherie et la vente à emporter, ou contacter l’équipe pour une demande liée au service traiteur. La livraison est proposée, mais sa zone et ses modalités doivent être confirmées directement selon votre adresse et votre besoin.</p><div className="flex flex-wrap gap-4 pt-3"><Link href="/boucherie-autour-avize" className="text-foreground underline underline-offset-4">Voir les communes autour d’Avize</Link><Link href="/contact" className="text-foreground underline underline-offset-4">Préparer votre itinéraire</Link></div></div>
        </Container>
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
              Les catégories présentées sur le site donnent un aperçu de la
              boutique ; les disponibilités sont à vérifier directement.
            </p>
          </div>
          <ProductCarousel products={products} />
        </Container>
      </section>
      <section className="relative overflow-hidden bg-[#3b302c] py-20 text-on-dark sm:py-24 lg:py-28">
        <div className="absolute -top-24 right-[-8rem] size-[42rem] rounded-full bg-accent-soft/24 blur-[140px]" />
        <div className="absolute -bottom-48 left-[-10rem] size-[34rem] rounded-full bg-detail/12 blur-[130px]" />
        <Container className="relative">
          <div
            data-reveal
            className="grid gap-8 border-b border-on-dark/12 pb-12 lg:grid-cols-[1.1fr_.55fr] lg:items-end"
          >
            <div>
              <Eyebrow light>Pourquoi nous choisir</Eyebrow>
              <h2 className="section-title mt-5 max-w-3xl text-on-dark">
                Le métier de boucher
                <br className="hidden sm:block" /> à chaque étape.
              </h2>
            </div>
            <div>
              <p className="text-sm leading-7 text-on-dark/76">
                De la sélection jusqu’à votre table, nous cultivons une même
                exigence : vous offrir le goût juste.
              </p>
              <Link
                href="/boucherie"
                className="mt-7 inline-flex items-center gap-3 border-b border-accent pb-2 text-[.65rem] font-bold tracking-[.16em] text-accent-light"
              >
                DÉCOUVRIR NOS ENGAGEMENTS <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
          <div data-stagger className="mt-4 grid grid-cols-2 lg:grid-cols-4">
            {commitments.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="group border-b border-on-dark/10 px-3 py-9 first:pl-0 sm:px-5 lg:border-r lg:border-b-0 lg:last:border-r-0"
              >
                <Icon className="size-8 stroke-[1.2] text-accent-light transition-transform duration-500 group-hover:-translate-y-1" />
                <h3 className="mt-7 font-serif text-xl leading-tight sm:text-2xl">
                  {title}
                </h3>
                <p className="mt-3 text-xs leading-5 text-on-dark/68">{text}</p>
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
              className="premium-button w-fit border border-border-dark/25 px-6 py-4 text-[.62rem] font-bold tracking-[.15em] text-foreground hover:bg-surface-dark hover:text-on-dark"
            >
              VOIR TOUTE LA GALERIE <ArrowRight className="size-4" />
            </Link>
          </div>
          <Gallery />
        </Container>
      </section>
      <section className="relative overflow-hidden bg-accent-soft px-4 py-16 sm:py-20">
        <Container
          data-reveal
          className="relative flex flex-col justify-between gap-8 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-[.62rem] font-bold uppercase tracking-[.2em] text-foreground">
              Une envie particulière ?
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-none text-foreground sm:text-5xl">
              Préparons votre prochaine table.
            </h2>
          </div>
          <a
            href={phoneHref}
            className="flex items-center gap-4 font-serif text-2xl text-foreground"
          >
            <span className="grid size-12 place-items-center rounded-full bg-surface-dark text-on-dark">
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
  light = false,
}: {
  children: React.ReactNode;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <p
      className={`flex items-center gap-3 text-[.64rem] font-bold uppercase tracking-[.23em] ${light ? "text-accent-light" : "text-accent"} ${center ? "justify-center" : ""}`}
    >
      <span className="h-px w-8 bg-current" />
      {children}
      <span className={center ? "h-px w-8 bg-current" : "hidden"} />
    </p>
  );
}
