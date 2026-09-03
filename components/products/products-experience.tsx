"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Check, ChevronRight, Info, Phone, ShoppingBag, X } from "@/components/ui/maison-icons";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type Filter = "Tous" | "Viandes" | "Volaille" | "Charcuterie" | "Traiteur" | "Maison" | "Épicerie";
type Product = {
  id: string;
  title: string;
  group: Exclude<Filter, "Tous">;
  image: string;
  imagePosition?: string;
  index: string;
  introduction: string;
  note: string;
};

const filters: Filter[] = ["Tous", "Viandes", "Volaille", "Charcuterie", "Traiteur", "Maison", "Épicerie"];
const products: Product[] = [
  { id: "boeuf", title: "Bœuf", group: "Viandes", image: "/images/rayon 6.png", imagePosition: "object-center", index: "01", introduction: "Une sélection de pièces de bœuf proposée à la coupe.", note: "Pièces, origines et disponibilités à demander en boutique." },
  { id: "viandes", title: "Viandes", group: "Viandes", image: "/images/rayon 5.png", index: "02", introduction: "Différentes familles de viandes présentées au comptoir.", note: "La sélection et les disponibilités évoluent en boutique." },
  { id: "boucherie", title: "Boucherie", group: "Viandes", image: "/images/rayon 4.png", index: "03", introduction: "Un aperçu du rayon boucherie et de ses différentes pièces.", note: "Découpes et disponibilités à confirmer auprès de l’équipe." },
  { id: "charcuterie", title: "Charcuterie", group: "Charcuterie", image: "/images/rayon 7.png", imagePosition: "object-center", index: "04", introduction: "La sélection de charcuteries présentée au comptoir.", note: "La gamme détaillée est à découvrir directement en boutique." },
  { id: "charcuterie-seche", title: "Charcuterie sèche", group: "Charcuterie", image: "/images/rayon 10.png", index: "05", introduction: "Une autre facette de la sélection de charcuteries de la boutique.", note: "Produits et disponibilités à vérifier sur place." },
  { id: "traiteur", title: "Traiteur", group: "Traiteur", image: "/images/rayon 1.png", index: "06", introduction: "Des propositions traiteur à découvrir directement en boutique.", note: "La sélection évolue : renseignez-vous sur les propositions du jour." },
  { id: "plats-prepares", title: "Plats préparés", group: "Traiteur", image: "/images/rayon 2.png", index: "07", introduction: "Un aperçu du rayon des préparations proposées au comptoir.", note: "La composition et la disponibilité sont communiquées en boutique." },
  { id: "preparations", title: "Préparations", group: "Maison", image: "/images/rayon 3.png", index: "08", introduction: "Des préparations à découvrir selon la sélection du moment.", note: "Composition et allergènes disponibles auprès de l’équipe." },
  { id: "miel", title: "Miel", group: "Épicerie", image: "/images/rayon 8.png", index: "09", introduction: "Une sélection de miel présentée dans l’espace épicerie.", note: "Références et disponibilités à vérifier en boutique." },
  { id: "fromages", title: "Fromages", group: "Épicerie", image: "/images/rayon 9.png", index: "10", introduction: "Une sélection de fromages complète les rayons de la boutique.", note: "La sélection peut évoluer selon les disponibilités." },
  { id: "conserves-boissons", title: "Conserves & boissons", group: "Épicerie", image: "/images/rayon 11.png", index: "11", introduction: "Des produits d’épicerie et boissons sont présentés en boutique.", note: "Les références visibles sont données à titre illustratif." },
  { id: "accompagnements", title: "Accompagnements", group: "Épicerie", image: "/images/rayon 12.png", index: "12", introduction: "Une sélection d’épicerie accompagne l’offre principale de la maison.", note: "Les références et compositions sont à consulter en boutique." },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function ProductsExperience({ phone, phoneHref }: { phone: string; phoneHref: string }) {
  const [filter, setFilter] = useState<Filter>("Tous");
  const [selected, setSelected] = useState<Product | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();
  const visible = useMemo(() => filter === "Tous" ? products : products.filter((product) => product.group === filter), [filter]);

  useEffect(() => {
    if (!selected) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  return (
    <>
      <section className="relative flex min-h-[72svh] items-end overflow-hidden bg-surface-dark py-16 text-on-dark sm:py-24">
        <div className="absolute top-1/2 left-1/2 size-[65vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-on-dark/10" />
        <div className="absolute top-1/2 left-1/2 size-[45vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/15" />
        <Container className="relative">
          <motion.p initial={reduceMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-8 flex items-center gap-4 text-[.65rem] font-semibold uppercase tracking-[.26em] text-accent-light"><span className="h-px w-10 bg-current" /> La sélection</motion.p>
          <h1 className="max-w-6xl font-serif text-[clamp(4.5rem,11vw,10rem)] leading-[.74] tracking-[-.055em]">
            <span className="block overflow-hidden pb-[.12em]"><motion.span initial={reduceMotion ? false : { y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1, ease }} className="block">Nos</motion.span></span>
            <span className="block overflow-hidden pb-[.12em]"><motion.span initial={reduceMotion ? false : { y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.08, ease }} className="ml-[12vw] block italic text-accent-light">produits à Avize.</motion.span></span>
          </h1>
          <motion.div initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.7 }} className="mt-10 flex items-end justify-between gap-8 border-t border-on-dark/20 pt-6">
            <p className="max-w-lg text-sm leading-7 text-on-dark/65 sm:text-base">Découvrez les grandes catégories proposées par la Boucherie Tourteaux. La disponibilité des références varie en boutique.</p>
            <a href="#collection" aria-label="Voir la sélection" className="hidden size-12 shrink-0 items-center justify-center rounded-full border border-on-dark/30 transition hover:bg-surface hover:text-foreground sm:flex"><ArrowDown className="size-4" /></a>
          </motion.div>
        </Container>
      </section>

      <section id="collection" className="bg-background py-20 sm:py-28 lg:py-36">
        <Container>
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.7, ease }} className="flex flex-col gap-8 border-b border-border-dark/15 pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div><p className="text-[.65rem] font-semibold uppercase tracking-[.22em] text-foreground">Parcourir</p><h2 className="mt-4 font-serif text-5xl tracking-[-.035em] sm:text-7xl">La collection</h2></div>
            <div className="-mx-5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0" aria-label="Filtrer les produits">
              <div className="flex min-w-max gap-2">
                {filters.map((item) => <button key={item} type="button" aria-pressed={filter === item} onClick={() => setFilter(item)} className={cn("rounded-full border px-5 py-3 text-[.65rem] font-semibold uppercase tracking-[.15em] transition-all duration-300", filter === item ? "border-border-dark bg-surface-dark text-on-dark" : "border-border-dark/15 bg-transparent text-foreground/60 hover:border-border-dark hover:text-foreground")}>{item}</button>)}
              </div>
            </div>
          </motion.div>

          <motion.div layout className="mt-10 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {visible.map((product, index) => <ProductCard key={product.id} product={product} index={index} onOpen={() => setSelected(product)} reduceMotion={Boolean(reduceMotion)} />)}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>

      <section className="bg-surface-dark py-20 text-on-dark sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }}>
            <p className="text-[.65rem] font-semibold uppercase tracking-[.22em] text-accent-light">Bon à savoir</p>
            <h2 className="mt-6 max-w-3xl font-serif text-5xl leading-[.92] tracking-[-.035em] sm:text-7xl">La sélection évolue au comptoir.</h2>
          </motion.div>
          <div className="lg:justify-self-end"><p className="max-w-md leading-7 text-on-dark/60">Pour connaître les pièces, préparations et quantités disponibles, contactez directement la boucherie.</p><a href={phoneHref} className="group mt-8 inline-flex items-center gap-4 font-serif text-3xl text-accent-light"><Phone className="size-5 transition-transform group-hover:rotate-12" />{phone}</a></div>
        </Container>
      </section>

      <AnimatePresence>
        {selected && <ProductSheet product={selected} onClose={() => setSelected(null)} closeButton={closeButton} phoneHref={phoneHref} />}
      </AnimatePresence>
    </>
  );
}

function ProductCard({ product, index, onOpen, reduceMotion }: { product: Product; index: number; onOpen: () => void; reduceMotion: boolean }) {
  return (
    <motion.article layout initial={reduceMotion ? false : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.55, delay: index * 0.045, ease }} className="group">
      <button type="button" onClick={onOpen} className="block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent" aria-label={`Découvrir la catégorie ${product.title}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-surface-warm">
          <Image src={product.image} alt={`Présentation éditoriale de la catégorie ${product.title}`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className={cn("object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]", product.imagePosition)} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/5 opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
          <span className="absolute top-5 left-5 text-[.65rem] font-semibold tracking-[.2em] text-on-dark/65">{product.index}</span>
          <span className="absolute top-5 right-5 flex size-11 translate-y-2 items-center justify-center rounded-full bg-surface text-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"><ArrowUpRight className="size-4" /></span>
          <div className="absolute right-5 bottom-5 left-5 text-on-dark"><p className="text-[.6rem] uppercase tracking-[.2em] text-accent-light">{product.group}</p><h3 className="mt-2 font-serif text-4xl leading-none">{product.title}</h3></div>
        </div>
        <div className="flex items-center justify-between border-b border-border-dark/15 py-5 text-xs uppercase tracking-[.14em] text-foreground/55 transition-colors group-hover:border-border-dark group-hover:text-foreground"><span>Découvrir</span><ChevronRight className="size-4 transition-transform group-hover:translate-x-1" /></div>
      </button>
    </motion.article>
  );
}

function ProductSheet({ product, onClose, closeButton, phoneHref }: { product: Product; onClose: () => void; closeButton: React.RefObject<HTMLButtonElement | null>; phoneHref: string }) {
  return (
    <motion.div className="fixed inset-0 z-[80] flex justify-end" role="dialog" aria-modal="true" aria-labelledby="product-sheet-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <button type="button" className="absolute inset-0 cursor-default bg-black/70" aria-label="Fermer la fiche" onClick={onClose} />
      <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.6, ease }} className="relative z-10 flex h-full w-full max-w-2xl flex-col overflow-y-auto bg-background">
        <div className="relative min-h-[42vh] sm:min-h-[52vh]">
          <Image src={product.image} alt={`Catégorie ${product.title}`} fill sizes="(max-width: 672px) 100vw, 672px" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
          <button ref={closeButton} type="button" onClick={onClose} className="absolute top-5 right-5 flex size-12 items-center justify-center rounded-full bg-surface text-foreground transition hover:rotate-90 hover:bg-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-dark" aria-label="Fermer"><X className="size-5" /></button>
          <div className="absolute right-8 bottom-8 left-8 text-on-dark"><p className="text-[.65rem] uppercase tracking-[.2em] text-accent-light">{product.group} · {product.index}</p><h2 id="product-sheet-title" className="mt-3 font-serif text-6xl sm:text-7xl">{product.title}</h2></div>
        </div>
        <div className="flex flex-1 flex-col p-7 sm:p-10">
          <p className="max-w-lg font-serif text-3xl leading-tight">{product.introduction}</p>
          <div className="mt-10 grid gap-4 border-y border-border-dark/15 py-7 text-sm text-foreground/60">
            <p className="flex items-center gap-3"><Check className="size-4 text-accent" /> Conseils disponibles en boutique</p>
            <p className="flex items-center gap-3"><Info className="size-4 text-accent" /> {product.note}</p>
          </div>
          <div className="mt-auto flex flex-wrap gap-3 pt-10">
            <Button href={phoneHref} className="group"><Phone className="size-4 transition-transform group-hover:rotate-12" />Appeler</Button>
            <Button href="/contact" variant="outline"><ShoppingBag className="size-4" />Venir en boutique</Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
