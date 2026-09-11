import Image from "next/image";
import { ArrowDown, ArrowUpRight, BadgeCheck, Beef, HandHeart, MapPin, Phone, ScanLine, ShieldCheck, UsersRound } from "@/components/ui/maison-icons";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const timeline = [
  { date: "Adresse", title: "33 rue Pasteur", text: "La Boucherie Tourteaux accueille ses clients à Avize, dans la Marne." },
  { date: "Aujourd’hui", title: "Une adresse au cœur d’Avize", text: "La boutique accueille ses clients du mardi au dimanche midi, au 33 rue Pasteur." },
  { date: "Demain", title: "La suite de l’histoire", text: "Les dates, portraits et étapes de la maison seront complétés après validation par l’équipe." },
] as const;

const craft = [
  { icon: ScanLine, title: "Observer", text: "Examiner la pièce et comprendre la demande." },
  { icon: Beef, title: "Préparer", text: "Adapter la découpe à la cuisson envisagée." },
  { icon: HandHeart, title: "Conseiller", text: "Partager des repères simples pour la préparation." },
] as const;

const stats = [
  { value: 3, suffix: "", label: "univers en boutique" },
  { value: 6, suffix: " j", label: "d’ouverture par semaine" },
  { value: 33, suffix: "", label: "rue Pasteur à Avize" },
] as const;

export function BoucherieExperience({ phone, phoneHref }: { phone: string; phoneHref: string }) {
  return (
    <div>
      <section data-hero className="relative isolate flex min-h-[calc(100svh-5rem)] items-end overflow-hidden bg-surface-black text-on-dark lg:min-h-[calc(100svh-6rem)]">
        <Image data-hero-image src="/images/facade.png" alt="Façade de la Boucherie Tourteaux à Avize" fill priority sizes="100vw" className="hero-image object-cover object-center" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-transparent" />
        <Container className="relative z-10 pb-12 pt-32 sm:pb-16 lg:pb-20">
          <p data-hero-meta className="mb-7 flex items-center gap-4 text-[.65rem] font-semibold uppercase tracking-[.27em] text-accent-light"><span className="h-px w-10 bg-current" /> Depuis Avize</p>
          <h1 className="max-w-5xl font-serif text-[clamp(4.2rem,10vw,9.5rem)] leading-[.76] tracking-[-.055em]">
            <span className="block overflow-hidden pb-[.12em]"><span data-hero-word className="block">La Boucherie</span></span>
            <span className="block overflow-hidden pb-[.12em]"><span data-hero-word className="ml-[12vw] block italic text-accent-light">Tourteaux.</span></span>
          </h1>
          <div data-hero-meta className="mt-8 flex max-w-5xl items-end justify-between gap-8 border-t border-on-dark/25 pt-6">
            <p className="max-w-lg text-sm leading-6 text-on-dark/70 sm:text-base">Boucherie, charcuterie et traiteur au cœur de la Côte des Blancs.</p>
            <a href="#histoire" aria-label="Découvrir notre histoire" className="hidden size-12 shrink-0 items-center justify-center rounded-full border border-on-dark/30 transition hover:bg-surface hover:text-foreground sm:flex"><ArrowDown className="size-4" /></a>
          </div>
        </Container>
      </section>

      <section id="histoire" className="bg-background py-24 sm:py-32 lg:py-44">
        <Container className="grid gap-16 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
          <div data-reveal><Eyebrow>Notre histoire</Eyebrow><p className="mt-8 max-w-xs text-sm leading-7 text-foreground/55">L’histoire détaillée de la boutique sera complétée uniquement avec les informations validées par l’équipe.</p></div>
          <div>
            <h2 data-reveal className="font-serif text-[clamp(3.2rem,6.3vw,6.6rem)] leading-[.88] tracking-[-.045em]">Une maison inscrite dans <em className="font-normal text-foreground">la vie d’Avize.</em></h2>
            <div data-timeline className="relative mt-20 pl-10 sm:pl-16">
              <div data-timeline-line className="absolute top-2 bottom-4 left-[5px] w-px bg-accent-soft sm:left-[13px]" />
              {timeline.map((item) => <article data-reveal key={item.date} className="relative border-b border-border-dark/15 py-8 first:pt-0">
                <span className="absolute top-1 -left-[2.62rem] size-3 rounded-full border-2 border-accent bg-background sm:-left-[3.72rem] sm:size-4" />
                <p className="text-[.65rem] font-semibold uppercase tracking-[.22em] text-accent">{item.date}</p>
                <h3 className="mt-4 font-serif text-3xl sm:text-4xl">{item.title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-foreground/55">{item.text}</p>
              </article>)}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface-dark py-24 text-on-dark sm:py-32 lg:py-40">
        <Container>
          <div data-reveal className="grid gap-10 lg:grid-cols-2 lg:items-end">
            <div><Eyebrow light>Notre équipe</Eyebrow><h2 className="mt-7 font-serif text-5xl leading-[.92] tracking-[-.035em] sm:text-7xl">Des bouchers passionnés au service de leurs clients.</h2></div>
            <div className="lg:justify-self-end lg:max-w-md"><UsersRound className="size-9 stroke-1 text-accent-light" /><p className="mt-6 leading-7 text-on-dark/65">Une équipe présente en boutique pour préparer, échanger et accompagner chaque demande.</p></div>
          </div>
          <div data-reveal className="photo-glow relative mx-auto mt-16 w-[92%] max-w-[1120px] overflow-hidden border border-on-dark/15 sm:w-[88%] lg:w-[78%]">
            <Image src="/images/photo-equipe.png" alt="L'équipe de la Boucherie Tourteaux à Avize" width={1448} height={1086} sizes="(max-width: 1024px) 100vw, 1400px" loading="lazy" className="h-auto w-full" />
          </div>
        </Container>
      </section>

      <section className="bg-surface py-24 sm:py-32 lg:py-44">
        <Container className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-24">
          <div data-image-reveal className="grid grid-cols-2 gap-3 sm:gap-4">
            <figure className="photo-glow relative col-span-2 overflow-hidden">
              <Image src="/images/prepa-pate1.png" alt="Préparation artisanale à la Boucherie Tourteaux à Avize" width={1448} height={1086} sizes="(max-width: 1024px) 100vw, 50vw" loading="lazy" className="h-auto w-full" />
            </figure>
            <figure className="photo-glow relative overflow-hidden">
              <Image src="/images/prepa-pate2.png" alt="Geste de préparation artisanale à la Boucherie Tourteaux" width={1086} height={1448} sizes="(max-width: 640px) 50vw, 25vw" loading="lazy" className="h-auto w-full" />
            </figure>
            <figure className="photo-glow relative overflow-hidden">
              <Image src="/images/four-terrine.png" alt="Préparations artisanales en cuisson à la Boucherie Tourteaux" width={1086} height={1448} sizes="(max-width: 640px) 50vw, 25vw" loading="lazy" className="h-auto w-full" />
            </figure>
          </div>
          <div data-reveal className="lg:py-12"><Eyebrow>Notre savoir-faire</Eyebrow><h2 className="mt-7 font-serif text-5xl leading-[.92] tracking-[-.035em] sm:text-7xl">La précision du geste.</h2><p className="mt-8 max-w-lg leading-8 text-foreground/60">Découpe, préparation et conseil forment le quotidien du métier. Chaque demande commence par un échange en boutique.</p>
            <div className="mt-12 grid gap-8 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">{craft.map(({ icon: Icon, title, text }) => <article key={title} className="group border-t border-border-dark/15 pt-6"><Icon className="size-6 stroke-[1.3] text-accent transition-transform group-hover:-translate-y-1" /><h3 className="mt-8 font-serif text-2xl">{title}</h3><p className="mt-3 text-xs leading-6 text-foreground/50">{text}</p></article>)}</div>
          </div>
        </Container>
      </section>

      <section className="bg-surface-dark py-24 text-on-dark sm:py-32 lg:py-40">
        <Container>
          <div data-reveal className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div><Eyebrow light>Notre atelier</Eyebrow><h2 className="mt-7 font-serif text-5xl leading-[.92] sm:text-7xl">Le lieu de la préparation.</h2></div>
            <div className="lg:pt-14"><p className="max-w-xl text-lg leading-8 text-on-dark/65">La présentation précise des équipements, méthodes de travail et spécialités de l’atelier sera publiée après validation par la maison.</p><p className="mt-8 border-l border-accent pl-6 font-serif text-2xl italic text-on-dark/85">Pas de récit inventé : seulement les gestes et les informations de l’équipe.</p></div>
          </div>
          <div className="mt-20 grid gap-px bg-surface/15 md:grid-cols-3">{stats.map((stat) => <article data-reveal key={stat.label} className="bg-surface-dark py-10 text-center md:px-6"><p className="font-serif text-7xl text-accent-light"><span data-count={stat.value}>{stat.value}</span>{stat.suffix}</p><p className="mt-3 text-[.65rem] uppercase tracking-[.2em] text-on-dark/50">{stat.label}</p></article>)}</div>
        </Container>
      </section>

      <section className="bg-background py-24 sm:py-32 lg:py-44">
        <Container className="grid gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-24">
          <div data-reveal><Eyebrow>Notre engagement qualité</Eyebrow><h2 className="mt-7 font-serif text-5xl leading-[.92] tracking-[-.035em] sm:text-7xl">La confiance passe par des informations précises.</h2><p className="mt-8 max-w-xl leading-8 text-foreground/60">Origines, races, labels et noms des partenaires seront détaillés ici lorsqu’ils auront été confirmés par la Boucherie Tourteaux.</p>
            <div className="mt-12 grid gap-4 sm:grid-cols-2"><QualityCard icon={ShieldCheck} title="Traçabilité" text="Informations disponibles et vérifiables en boutique." /><QualityCard icon={BadgeCheck} title="Transparence" text="Aucune origine ni certification ne sera publiée sans validation." /></div>
          </div>
          <div data-image-reveal className="photo-glow relative aspect-[4/5] overflow-hidden"><Image src="/images/logo mur.png" alt="Enseigne intérieure Boucherie Tourteaux à Avize" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover object-center transition-transform duration-1000 hover:scale-[1.025]" /></div>
        </Container>
      </section>

      <section className="bg-surface py-24 sm:py-32 lg:py-40">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div data-reveal><p className="font-serif text-2xl italic text-accent">01</p><h2 className="mt-6 font-serif text-5xl sm:text-6xl">Choisir en boutique</h2><p className="mt-7 max-w-lg leading-8 text-foreground/60">Les catégories présentées sur le site donnent un aperçu de l’offre. Les pièces, origines et disponibilités précises sont communiquées directement en boutique.</p></div>
            <div data-reveal className="lg:border-l lg:border-border-dark/15 lg:pl-24"><p className="font-serif text-2xl italic text-accent">02</p><h2 className="mt-6 font-serif text-5xl sm:text-6xl">Préparer votre demande</h2><p className="mt-7 max-w-lg leading-8 text-foreground/60">Pour une quantité, une découpe ou un besoin traiteur, contactez l’équipe avant votre venue afin de vérifier ce qui peut être proposé.</p></div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-surface-dark py-24 text-on-dark sm:py-36">
        <div className="absolute top-1/2 left-1/2 size-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-on-dark/10" />
        <Container data-reveal className="relative text-center"><Eyebrow light center>Notre philosophie</Eyebrow><blockquote className="mx-auto mt-10 max-w-5xl font-serif text-[clamp(3.2rem,7vw,7rem)] leading-[.9] tracking-[-.04em]">Écouter avant de conseiller. Préparer avec précision.</blockquote><p className="mx-auto mt-9 max-w-xl text-sm leading-7 text-on-dark/60">Une formulation éditoriale à confirmer par la Boucherie Tourteaux avant mise en production.</p></Container>
      </section>

      <section className="bg-accent-soft py-24 sm:py-32">
        <Container data-reveal className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
          <div><p className="text-[.65rem] font-semibold uppercase tracking-[.22em] text-foreground">Une question ?</p><h2 className="mt-6 max-w-3xl font-serif text-5xl leading-[.9] tracking-[-.04em] text-foreground sm:text-7xl">Passez nous voir à Avize.</h2></div>
          <div className="flex flex-wrap gap-3 lg:justify-end"><Button href="/contact" className="group bg-surface-dark">Nous trouver <MapPin className="size-4 transition-transform group-hover:-translate-y-1" /></Button><Button href={phoneHref} variant="outline" className="group border-border-dark text-foreground">Appeler <Phone className="size-4 transition-transform group-hover:rotate-12" /></Button><p className="basis-full text-right font-serif text-2xl text-foreground">{phone}</p></div>
        </Container>
      </section>
    </div>
  );
}

function Eyebrow({ children, light = false, center = false }: { children: React.ReactNode; light?: boolean; center?: boolean }) {
  return <p className={`flex items-center gap-3 text-[.65rem] font-semibold uppercase tracking-[.24em] ${center ? "justify-center" : ""} ${light ? "text-accent-light" : "text-foreground"}`}><span className="h-px w-8 bg-current" />{children}</p>;
}

function QualityCard({ icon: Icon, title, text }: { icon: typeof ShieldCheck; title: string; text: string }) {
  return <article className="group border border-border-dark/10 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_18px_60px_rgba(23,23,23,.08)]"><Icon className="size-6 stroke-[1.3] text-foreground transition-transform group-hover:scale-110" /><h3 className="mt-12 font-serif text-3xl">{title}</h3><p className="mt-3 text-xs leading-6 text-foreground/50">{text}</p><ArrowUpRight className="mt-7 size-4 text-accent" /></article>;
}
