import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Clock3, MapPin, Phone, Scale, Sparkles, UsersRound } from "@/components/ui/maison-icons";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const commitments = [
  { number: "01", title: "Le conseil", text: "Un échange en boutique pour choisir la pièce et la quantité adaptées à votre besoin." },
  { number: "02", title: "La préparation", text: "Des produits préparés pour faciliter la cuisine du quotidien comme les repas à partager." },
  { number: "03", title: "La proximité", text: "Une adresse au cœur d’Avize, ouverte du mardi au dimanche midi." },
] as const;

const products = [
  { title: "Boucherie", label: "À la coupe", tone: "from-[#341318] to-[#791b27]" },
  { title: "Charcuterie", label: "La sélection", tone: "from-[#927344] to-[#3d261e]" },
  { title: "Traiteur", label: "À emporter", tone: "from-[#3a2420] to-[#8b4533]" },
] as const;

const reasons = [
  { icon: MapPin, title: "Au cœur d’Avize", text: "33 rue Pasteur, 51190 Avize" },
  { icon: Clock3, title: "Six jours sur sept", text: "Du mardi au dimanche midi" },
  { icon: Phone, title: "Commande par téléphone", text: "03 26 51 73 71" },
  { icon: UsersRound, title: "À votre écoute", text: "Renseignements directement en boutique" },
] as const;

export function HomeExperience({ phone, phoneHref }: { phone: string; phoneHref: string }) {
  return (
    <div>
      <section data-hero className="relative isolate flex min-h-[calc(100svh-5rem)] items-end overflow-hidden bg-[#201719] text-white lg:min-h-[calc(100svh-6rem)]">
        <Image
          data-hero-image
          src="/images/hero-boucherie-tourteaux.webp"
          alt="Intérieur chaleureux d’une boucherie artisanale"
          fill
          priority
          sizes="100vw"
          className="hero-image object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/55 to-transparent" />

        <Container className="relative z-10 pb-12 pt-32 sm:pb-16 lg:pb-20">
          <div data-hero-fade aria-hidden="true" className="absolute top-32 right-12 hidden items-center gap-3 text-[.58rem] uppercase tracking-[.24em] text-white/50 lg:flex">
            <span>Maison indépendante</span><span className="size-1 rotate-45 bg-gold" /><span>Avize · 51190</span>
          </div>
          <div data-hero-fade className="mb-6 flex items-center gap-4 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-white/75">
            <span className="h-px w-10 bg-gold" /> Boucherie · Charcuterie · Traiteur
          </div>
          <h1 className="max-w-5xl font-serif text-[clamp(4.4rem,10.5vw,10rem)] leading-[0.72] font-medium tracking-[-0.055em]">
            <span className="block overflow-hidden pb-[0.12em]"><span data-hero-line className="block">Le goût</span></span>
            <span className="block overflow-hidden pb-[0.12em]"><span data-hero-line className="ml-[9vw] block italic text-[#e5d2ae]">du métier.</span></span>
          </h1>
          <div className="mt-8 flex flex-col gap-7 border-t border-white/25 pt-6 sm:flex-row sm:items-end sm:justify-between">
            <p data-hero-fade className="max-w-xs text-sm leading-6 text-white/75 sm:max-w-md sm:text-base">La Boucherie Tourteaux vous accueille au 33 rue Pasteur, à Avize.</p>
            <div data-hero-fade className="flex flex-wrap gap-3">
              <Button href="/produits" className="group bg-white !text-bordeaux hover:bg-gold">Nos produits <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Button>
              <Button href="/contact" className="border border-white/45 bg-transparent text-white hover:border-white hover:bg-white hover:text-bordeaux">Contact</Button>
            </div>
          </div>
        </Container>
        <a href="#presentation" aria-label="Découvrir la suite" className="absolute right-5 bottom-12 z-20 hidden size-12 items-center justify-center rounded-full border border-white/30 transition hover:bg-white hover:text-bordeaux sm:flex lg:right-12">
          <ArrowDown className="size-4 transition-transform duration-500 group-hover:translate-y-1" />
        </a>
      </section>

      <section id="presentation" className="overflow-hidden bg-background py-24 sm:py-32 lg:py-44">
        <Container className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div data-reveal>
            <Eyebrow>La maison</Eyebrow>
            <p className="mt-8 max-w-xs text-sm leading-7 text-foreground/55">Une boucherie, charcuterie et activité traiteur installée au centre d’Avize, dans la Côte des Blancs.</p>
          </div>
          <div data-reveal>
            <h2 className="font-serif text-[clamp(3.2rem,6vw,6.4rem)] leading-[0.9] tracking-[-0.04em]">Une adresse de proximité, <em className="font-normal text-bordeaux">un métier de précision.</em></h2>
            <div className="mt-12 flex flex-col gap-8 border-t border-bordeaux/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md leading-7 text-foreground/60">Retrouvez en boutique les différentes sélections proposées par la Boucherie Tourteaux.</p>
              <Button href="/boucherie" variant="text">Découvrir la maison <ArrowUpRight className="size-4" /></Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-24 sm:py-32 lg:py-40">
        <Container>
          <div data-reveal className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div><Eyebrow>Nos engagements</Eyebrow><h2 className="mt-6 max-w-2xl font-serif text-5xl leading-[0.92] tracking-[-0.03em] sm:text-7xl">L’essentiel, dans chaque geste.</h2></div>
            <Scale className="size-12 stroke-1 text-gold" />
          </div>
          <div data-stagger className="mt-16 grid border-t border-bordeaux/15 md:grid-cols-3">
            {commitments.map((item) => <article key={item.number} className="group border-b border-bordeaux/15 py-9 transition-colors md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">
              <div className="flex items-start justify-between"><span className="font-serif text-2xl text-gold">{item.number}</span><ArrowUpRight className="size-5 -translate-x-2 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" /></div>
              <h3 className="mt-20 font-serif text-4xl">{item.title}</h3><p className="mt-5 max-w-sm text-sm leading-7 text-foreground/55">{item.text}</p>
            </article>)}
          </div>
        </Container>
      </section>

      <section className="bg-bordeaux py-24 text-white sm:py-32 lg:py-40">
        <Container>
          <div data-reveal className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end"><div><Eyebrow light>La sélection</Eyebrow><h2 className="mt-6 font-serif text-5xl tracking-[-0.03em] sm:text-7xl">Produits vedettes</h2></div><Button href="/produits" className="border border-white/30 bg-transparent hover:bg-white hover:text-bordeaux">Voir tous les produits</Button></div>
          <div data-stagger className="mt-14 grid gap-4 md:grid-cols-3">
            {products.map((product, index) => <Link href="/produits" key={product.title} className={cn("group relative flex aspect-[4/5] overflow-hidden rounded-[2px] bg-gradient-to-br p-7", product.tone)}>
              <div className="absolute -right-16 -bottom-16 size-64 rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-125" />
              <div className="absolute top-1/3 -left-10 size-40 rounded-full bg-white/[0.04] blur-2xl transition-transform duration-700 group-hover:translate-x-10" />
              <span className="text-xs uppercase tracking-[0.2em] text-white/55">0{index + 1} · {product.label}</span>
              <div className="mt-auto flex w-full items-end justify-between"><h3 className="font-serif text-5xl">{product.title}</h3><span className="flex size-11 items-center justify-center rounded-full border border-white/30 transition-all group-hover:rotate-45 group-hover:bg-white group-hover:text-bordeaux"><ArrowUpRight className="size-4" /></span></div>
            </Link>)}
          </div>
        </Container>
      </section>

      <section className="bg-background py-24 sm:py-32 lg:py-40">
        <Container className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <div data-reveal className="lg:sticky lg:top-36 lg:self-start"><Eyebrow>Pourquoi Tourteaux</Eyebrow><h2 className="mt-7 font-serif text-5xl leading-[0.94] tracking-[-0.03em] sm:text-7xl">Simplement proche de vous.</h2><Sparkles className="mt-12 size-10 stroke-1 text-gold" /></div>
          <div data-stagger className="grid gap-px overflow-hidden rounded-sm border border-bordeaux/10 bg-bordeaux/10 sm:grid-cols-2">
            {reasons.map(({ icon: Icon, title, text }) => <article key={title} className="group min-h-64 bg-white p-8 transition-colors duration-300 hover:bg-[#f5efe8]"><Icon className="size-6 stroke-[1.4] text-bordeaux transition-transform duration-300 group-hover:-translate-y-1" /><h3 className="mt-20 font-serif text-3xl">{title}</h3><p className="mt-3 text-sm text-foreground/55">{text}</p></article>)}
          </div>
        </Container>
      </section>

      <section className="overflow-hidden bg-[#231d1c] py-24 text-white sm:py-32 lg:py-40">
        <Container>
          <Eyebrow light>Nos valeurs</Eyebrow>
          <div data-stagger className="mt-12 space-y-2">
            {["Écouter.", "Préparer.", "Partager."].map((value, index) => <div key={value} className="group flex items-center justify-between border-b border-white/15 py-4"><span className="font-serif text-[clamp(3.6rem,9vw,8rem)] leading-none tracking-[-0.04em] text-white/90 transition-all duration-500 group-hover:translate-x-4 group-hover:text-gold">{value}</span><span className="text-xs text-white/35">0{index + 1}</span></div>)}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-gold py-24 sm:py-32">
        <div className="absolute -right-24 -bottom-56 size-[34rem] rounded-full border border-bordeaux/15" />
        <Container data-reveal className="relative grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
          <div><p className="text-xs font-semibold uppercase tracking-[.22em] text-bordeaux">Une question, une commande ?</p><h2 className="mt-6 max-w-3xl font-serif text-5xl leading-[.9] tracking-[-.04em] text-bordeaux sm:text-7xl">Parlons de ce que vous préparez.</h2></div>
          <div className="lg:justify-self-end"><a href={phoneHref} className="group flex items-center gap-5 font-serif text-3xl text-bordeaux sm:text-4xl"><span className="flex size-14 items-center justify-center rounded-full bg-bordeaux text-white transition-transform group-hover:rotate-12"><Phone className="size-5" /></span>{phone}</a><p className="mt-5 text-sm text-bordeaux/65">Du mardi au dimanche midi</p></div>
        </Container>
      </section>
    </div>
  );
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={cn("flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.24em]", light ? "text-gold" : "text-bordeaux")}><span className="h-px w-8 bg-current" />{children}</p>;
}


