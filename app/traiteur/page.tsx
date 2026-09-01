import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChefHat, Phone, Sparkles, UsersRound, UtensilsCrossed } from "lucide-react";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "Traiteur à Avize | Boucherie Tourteaux" },
  description: "Découvrez le service traiteur de la Boucherie Tourteaux à Avize pour vos repas, mariages, réceptions et événements sur mesure.",
  alternates: { canonical: "/traiteur" },
  openGraph: {
    title: "Traiteur à Avize | Boucherie Tourteaux",
    description: "Service traiteur artisanal à Avize pour vos repas, réceptions et événements.",
    url: "/traiteur",
    locale: "fr_FR",
    type: "website",
  },
};

const occasions = ["Repas de famille", "Anniversaires", "Mariages", "Baptêmes", "Communions", "Événements professionnels", "Réceptions", "Repas de groupe"];
const services = [
  { icon: UtensilsCrossed, title: "Plats préparés", text: "Des propositions artisanales à découvrir auprès de la boucherie selon la période et vos besoins." },
  { icon: ChefHat, title: "Buffets", text: "Une base conviviale à envisager pour réunir vos invités, après échange sur votre projet." },
  { icon: Sparkles, title: "Réceptions", text: "La maison étudie vos demandes pour accompagner vos moments de partage à Avize et alentour." },
  { icon: UsersRound, title: "Repas de groupe", text: "Des solutions peuvent être recherchées pour les repas réunissant famille, amis ou collaborateurs." },
  { icon: ArrowRight, title: "Prestations personnalisées", text: "Chaque demande commence par un échange afin de confirmer les possibilités et construire une réponse adaptée." },
];

export default function TraiteurPage() {
  return <div>
    <section data-hero className="relative isolate flex min-h-[82svh] items-end overflow-hidden bg-[#171011] text-white">
      <Image src="/images/produit-traiteur.webp" alt="Préparation traiteur artisanale de la Boucherie Tourteaux" fill priority sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />
      <Container className="relative z-10 pt-40 pb-16 sm:pb-20 lg:pb-24">
        <p data-hero-fade className="flex items-center gap-4 text-[.64rem] font-bold uppercase tracking-[.24em] text-gold"><span className="h-px w-9 bg-current" /> Traiteur · Avize</p>
        <h1 className="mt-7 max-w-5xl font-serif text-[clamp(3.5rem,7vw,7.4rem)] leading-[.88] font-medium tracking-[-.04em]">Un service traiteur artisanal pour vos moments de partage.</h1>
        <p className="mt-7 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">Buffets, plats préparés, réceptions et prestations sur mesure à Avize et dans les environs.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="premium-button bg-bordeaux px-8 py-4 text-xs font-bold uppercase tracking-[.14em]">Nous contacter <ArrowRight className="size-4" /></Link>
          <a href={siteConfig.phoneHref} className="premium-button border border-gold/75 px-8 py-4 text-xs font-bold uppercase tracking-[.14em] hover:bg-gold hover:text-bordeaux-dark">Appeler <Phone className="size-4" /></a>
        </div>
      </Container>
    </section>

    <section className="bg-background py-20 sm:py-28 lg:py-36">
      <Container className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
        <div data-reveal><Eyebrow>Pour vos événements</Eyebrow><p className="mt-7 max-w-sm text-sm leading-7 text-foreground/55">Une approche artisanale et un échange direct avec la maison pour préciser votre demande.</p></div>
        <div data-reveal><h2 className="font-serif text-[clamp(3.2rem,5.5vw,6rem)] leading-[.92] tracking-[-.035em] text-bordeaux-dark">Des moments à imaginer ensemble.</h2><p className="mt-8 max-w-2xl text-base leading-8 text-foreground/62">La Boucherie Tourteaux propose un service traiteur artisanal pour accompagner différents moments de vie. Les possibilités sont à confirmer directement avec l’équipe selon la date, le nombre de convives et la nature de votre projet.</p><div className="mt-10 flex flex-wrap gap-2.5">{occasions.map(item=><span key={item} className="rounded-full border border-bordeaux/12 bg-white px-4 py-2.5 text-xs text-bordeaux shadow-sm">{item}</span>)}</div></div>
      </Container>
    </section>

    <section className="bg-white py-20 sm:py-28 lg:py-36">
      <Container><div data-reveal><Eyebrow>Nos prestations</Eyebrow><h2 className="mt-6 max-w-3xl font-serif text-[clamp(3.2rem,5.5vw,5.8rem)] leading-[.92] tracking-[-.035em] text-bordeaux-dark">Une réponse pensée autour de votre réception.</h2></div><div data-stagger className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-5">{services.map(({icon:Icon,title,text})=><article key={title} className="group min-h-72 rounded-xl border border-bordeaux/9 bg-background p-7 shadow-[0_15px_40px_rgba(50,8,13,.045)] transition duration-500 hover:-translate-y-1 hover:border-gold/50"><Icon className="size-7 stroke-[1.3] text-gold" /><h3 className="mt-16 font-serif text-3xl leading-none text-bordeaux-dark">{title}</h3><p className="mt-5 text-sm leading-6 text-foreground/55">{text}</p></article>)}</div></Container>
    </section>

    <section className="relative overflow-hidden bg-bordeaux py-20 text-white sm:py-28"><div className="absolute -right-32 -bottom-64 size-[38rem] rounded-full border border-white/10"/><Container data-reveal className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-end"><div><Eyebrow light>Votre projet</Eyebrow><h2 className="mt-6 font-serif text-[clamp(3.4rem,6vw,6.4rem)] leading-[.88] tracking-[-.04em]">Parlons de votre événement.</h2></div><div className="flex flex-wrap gap-3"><Link href="/contact" className="premium-button bg-gold px-8 py-4 text-xs font-bold uppercase tracking-[.13em] text-bordeaux-dark">Demander des renseignements</Link><a href={siteConfig.phoneHref} className="premium-button border border-white/35 px-8 py-4 text-xs font-bold uppercase tracking-[.13em] hover:bg-white hover:text-bordeaux">Appeler la boucherie</a></div></Container></section>
  </div>;
}

function Eyebrow({children,light=false}:{children:React.ReactNode;light?:boolean}) { return <p className={`flex items-center gap-3 text-[.64rem] font-bold uppercase tracking-[.22em] ${light?"text-gold":"text-bordeaux"}`}><span className="h-px w-8 bg-current" />{children}</p>; }
