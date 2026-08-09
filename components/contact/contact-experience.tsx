"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Clock3, MapPin, MapPinned, Phone, Send } from "@/components/ui/maison-icons";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

type FAQ = readonly { question: string; answer: string }[];
type Hours = readonly { days: string; hours: string }[];
const ease = [0.22, 1, 0.36, 1] as const;
const mapQuery = encodeURIComponent("Boucherie Tourteaux, 33 rue Pasteur, 51190 Avize");

export function ContactExperience({ faq, email, phone, phoneHref, hours }: { faq: FAQ; email: string; phone: string; phoneHref: string; hours: Hours }) {
  const [mapLoaded, setMapLoaded] = useState(false);
  const reduceMotion = useReducedMotion();

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Demande depuis le site — ${String(form.get("name") ?? "")}`);
    const body = encodeURIComponent(`Nom : ${String(form.get("name") ?? "")}\nTéléphone : ${String(form.get("phone") ?? "")}\n\n${String(form.get("message") ?? "")}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <section className="flex min-h-[62svh] items-end border-b border-bordeaux/10 bg-background py-16 sm:py-24">
        <Container>
          <motion.p initial={reduceMotion ? false : { opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="mb-8 flex items-center gap-3 text-[.65rem] font-semibold uppercase tracking-[.24em] text-bordeaux"><span className="h-px w-8 bg-current" /> Venir à la boutique</motion.p>
          <div className="grid gap-10 lg:grid-cols-[1.3fr_.7fr] lg:items-end"><h1 className="overflow-hidden pb-[.12em] font-serif text-[clamp(4.5rem,11vw,10rem)] leading-[.75] tracking-[-.055em]"><motion.span initial={reduceMotion ? false : { y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1, ease }} className="block">Contact.</motion.span></h1><p className="max-w-md border-l border-gold pl-6 text-sm leading-7 text-foreground/55">Une question, une commande ou une information sur les disponibilités ? Contactez directement la maison.</p></div>
        </Container>
      </section>

      <section className="bg-background py-20 sm:py-28 lg:py-36">
        <Container className="grid gap-4 lg:grid-cols-3">
          <InfoCard icon={MapPin} label="Adresse"><address className="not-italic">33 rue Pasteur<br />51190 Avize</address><a href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.15em] text-bordeaux">Itinéraire <ArrowUpRight className="size-4" /></a></InfoCard>
          <InfoCard icon={Phone} label="Téléphone"><a href={phoneHref} className="font-serif text-3xl text-bordeaux">{phone}</a><p className="mt-4 text-sm text-foreground/50">Commandes et renseignements</p></InfoCard>
          <InfoCard icon={Clock3} label="Horaires"><dl className="space-y-3">{hours.map((item) => <div key={item.days} className="flex justify-between gap-4 text-sm"><dt className="text-foreground/50">{item.days}</dt><dd className="text-right">{item.hours}</dd></div>)}</dl></InfoCard>
        </Container>
      </section>

      <section className="grid bg-[#211a19] lg:grid-cols-2">
        <div className="relative min-h-[500px] bg-[#d7cab8]">
          {mapLoaded ? <iframe title="Carte Google Maps de la Boucherie Tourteaux" src={`https://www.google.com/maps?q=${mapQuery}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0 h-full w-full border-0" /> : <div className="absolute inset-0 flex flex-col items-center justify-center bg-[radial-gradient(circle_at_center,#e6dccd,#c8b69e)] p-8 text-center"><MapPinned className="size-12 stroke-1 text-bordeaux" /><p className="mt-6 font-serif text-4xl text-bordeaux">33 rue Pasteur, Avize</p><p className="mt-3 max-w-sm text-sm text-foreground/55">La carte externe est chargée uniquement à votre demande pour accélérer la page.</p><button type="button" onClick={() => setMapLoaded(true)} className="mt-8 rounded-full bg-bordeaux px-6 py-4 text-xs font-semibold uppercase tracking-[.15em] text-white transition hover:bg-bordeaux-dark">Afficher Google Maps</button></div>}
        </div>
        <div className="px-5 py-20 text-white sm:px-12 lg:px-16 lg:py-24">
          <p className="text-[.65rem] font-semibold uppercase tracking-[.22em] text-gold">Nous écrire</p><h2 className="mt-6 font-serif text-5xl">Votre demande</h2><p className="mt-5 max-w-lg text-sm leading-7 text-white/55">Le formulaire prépare un message dans votre application de messagerie. Aucun renseignement n’est stocké sur le site.</p>
          <form onSubmit={submit} className="mt-10 space-y-7">
            <Field id="name" label="Nom" autoComplete="name" required />
            <Field id="phone" label="Téléphone" type="tel" autoComplete="tel" />
            <label className="block"><span className="text-[.65rem] uppercase tracking-[.18em] text-white/55">Message</span><textarea id="message" name="message" required rows={5} className="mt-2 w-full resize-y border-0 border-b border-white/25 bg-transparent py-3 text-white outline-none transition focus:border-gold" /></label>
            <button type="submit" className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-gold px-6 text-xs font-semibold uppercase tracking-[.15em] text-bordeaux transition hover:bg-white">Préparer le message <Send className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></button>
          </form>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28 lg:py-36">
        <Container className="grid gap-14 lg:grid-cols-[.65fr_1.35fr] lg:gap-24">
          <div><p className="text-[.65rem] font-semibold uppercase tracking-[.22em] text-bordeaux">Questions fréquentes</p><h2 className="mt-6 font-serif text-5xl leading-[.95] sm:text-7xl">Avant votre visite.</h2></div>
          <div className="border-t border-bordeaux/15">{faq.map((item) => <details key={item.question} className="group border-b border-bordeaux/15"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7 font-serif text-2xl marker:hidden"><span>{item.question}</span><span className="relative size-5 shrink-0 before:absolute before:top-1/2 before:h-px before:w-full before:bg-bordeaux after:absolute after:left-1/2 after:h-full after:w-px after:bg-bordeaux after:transition-transform group-open:after:rotate-90" /></summary><p className="max-w-2xl pb-7 text-sm leading-7 text-foreground/55">{item.answer}</p></details>)}</div>
        </Container>
      </section>

      <section className="bg-gold py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end"><div><p className="text-[.65rem] font-semibold uppercase tracking-[.22em] text-bordeaux">La boutique vous attend</p><h2 className="mt-6 max-w-3xl font-serif text-5xl leading-[.9] tracking-[-.04em] text-bordeaux sm:text-7xl">Retrouvez-nous au cœur d’Avize.</h2></div><div className="flex flex-wrap gap-3 lg:justify-end"><Button href={phoneHref}>Appeler <Phone className="size-4" /></Button><Button href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`} target="_blank" variant="outline" className="border-bordeaux">Itinéraire <MapPin className="size-4" /></Button></div></Container>
      </section>
    </>
  );
}

function InfoCard({ icon: Icon, label, children }: { icon: typeof MapPin; label: string; children: React.ReactNode }) {
  return <motion.article initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .65, ease }} className="group min-h-72 border border-bordeaux/10 bg-white p-8 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-[0_20px_70px_rgba(91,15,24,.08)]"><Icon className="size-6 stroke-[1.3] text-gold transition-transform group-hover:-translate-y-1" /><h2 className="mt-12 font-serif text-3xl">{label}</h2><div className="mt-6 leading-7 text-foreground/65">{children}</div></motion.article>;
}

function Field({ id, label, type = "text", autoComplete, required = false }: { id: string; label: string; type?: string; autoComplete?: string; required?: boolean }) {
  return <label className="block" htmlFor={id}><span className="text-[.65rem] uppercase tracking-[.18em] text-white/55">{label}</span><input id={id} name={id} type={type} autoComplete={autoComplete} required={required} className="mt-2 w-full border-0 border-b border-white/25 bg-transparent py-3 text-white outline-none transition focus:border-gold" /></label>;
}



