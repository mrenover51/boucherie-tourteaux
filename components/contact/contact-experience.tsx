"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
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
      <section className="flex min-h-[62svh] items-end border-b border-border-dark/10 bg-background py-16 sm:py-24">
        <Container>
          <motion.p initial={reduceMotion ? false : { opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="mb-8 flex items-center gap-3 text-[.65rem] font-semibold uppercase tracking-[.24em] text-foreground"><span className="h-px w-8 bg-current" /> Venir à la boutique</motion.p>
          <div className="grid gap-10 lg:grid-cols-[1.3fr_.7fr] lg:items-end"><h1 className="overflow-hidden pb-[.12em] font-serif text-[clamp(3.7rem,9vw,8rem)] leading-[.82] tracking-[-.055em]"><motion.span initial={reduceMotion ? false : { y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1, ease }} className="block">Contact et horaires à Avize.</motion.span></h1><p className="max-w-md border-l border-accent pl-6 text-sm leading-7 text-foreground/55">Une question ou une information sur les disponibilités ? Contactez directement la maison.</p></div>
        </Container>
      </section>

      <section className="bg-background py-20 sm:py-28 lg:py-36">
        <Container className="grid gap-4 lg:grid-cols-3">
          <InfoCard icon={MapPin} label="Adresse"><address className="not-italic">33 rue Pasteur<br />51190 Avize</address><a href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.15em] text-foreground">Itinéraire <ArrowUpRight className="size-4" /></a></InfoCard>
          <InfoCard icon={Phone} label="Téléphone"><a href={phoneHref} className="font-serif text-3xl text-foreground">{phone}</a><p className="mt-4 text-sm text-foreground/50">Disponibilités et renseignements</p></InfoCard>
          <InfoCard icon={Clock3} label="Horaires"><dl className="space-y-3">{hours.map((item) => <div key={item.days} className="flex justify-between gap-4 text-sm"><dt className="text-foreground/50">{item.days}</dt><dd className="text-right">{item.hours}</dd></div>)}</dl></InfoCard>
        </Container>
      </section>

      <section className="grid bg-surface-dark lg:grid-cols-2">
        <div className="relative min-h-[500px] bg-surface-warm">
          {mapLoaded ? <iframe title="Carte Google Maps de la Boucherie Tourteaux" src={`https://www.google.com/maps?q=${mapQuery}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0 h-full w-full border-0" /> : <div className="absolute inset-0 flex flex-col items-center justify-end overflow-hidden p-8 text-center text-on-dark"><Image src="/images/facade.png" alt="Façade de la Boucherie Tourteaux à Avize" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-center" /><div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/5" /><div className="relative"><MapPinned className="mx-auto size-9 stroke-1" /><p className="mt-4 font-serif text-3xl">33 rue Pasteur, Avize</p><button type="button" onClick={() => setMapLoaded(true)} className="mt-5 rounded-full bg-surface px-6 py-3 text-xs font-semibold uppercase tracking-[.15em] text-foreground transition hover:bg-accent-soft">Afficher Google Maps</button></div></div>}
        </div>
        <div className="px-5 py-20 text-on-dark sm:px-12 lg:px-16 lg:py-24">
          <p className="text-[.65rem] font-semibold uppercase tracking-[.22em] text-accent-light">Nous écrire</p><h2 className="mt-6 font-serif text-5xl">Votre demande</h2><p className="mt-5 max-w-lg text-sm leading-7 text-on-dark/55">Le formulaire prépare un message dans votre application de messagerie. Aucun renseignement n’est stocké sur le site.</p>
          <form onSubmit={submit} className="mt-10 space-y-7">
            <Field id="name" label="Nom" autoComplete="name" required />
            <Field id="phone" label="Téléphone" type="tel" autoComplete="tel" />
            <label className="block"><span className="text-[.65rem] uppercase tracking-[.18em] text-on-dark/55">Message</span><textarea id="message" name="message" required rows={5} className="mt-2 w-full resize-y border-0 border-b border-on-dark/25 bg-transparent py-3 text-on-dark outline-none transition focus:border-accent-soft" /></label>
            <button type="submit" className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-accent-soft px-6 text-xs font-semibold uppercase tracking-[.15em] text-foreground transition hover:bg-surface">Préparer le message <Send className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></button>
          </form>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-28 lg:py-36">
        <Container className="grid gap-14 lg:grid-cols-[.65fr_1.35fr] lg:gap-24">
          <div><p className="text-[.65rem] font-semibold uppercase tracking-[.22em] text-foreground">Questions fréquentes</p><h2 className="mt-6 font-serif text-5xl leading-[.95] sm:text-7xl">Avant votre visite.</h2></div>
          <div className="border-t border-border-dark/15">{faq.map((item) => <details key={item.question} className="group border-b border-border-dark/15"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7 font-serif text-2xl marker:hidden"><span>{item.question}</span><span className="relative size-5 shrink-0 before:absolute before:top-1/2 before:h-px before:w-full before:bg-surface-dark after:absolute after:left-1/2 after:h-full after:w-px after:bg-surface-dark after:transition-transform group-open:after:rotate-90" /></summary><p className="max-w-2xl pb-7 text-sm leading-7 text-foreground/55">{item.answer}</p></details>)}</div>
        </Container>
      </section>

      <section className="bg-accent-soft py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end"><div><p className="text-[.65rem] font-semibold uppercase tracking-[.22em] text-foreground">La boutique vous attend</p><h2 className="mt-6 max-w-3xl font-serif text-5xl leading-[.9] tracking-[-.04em] text-foreground sm:text-7xl">Retrouvez-nous au cœur d’Avize.</h2></div><div className="flex flex-wrap gap-3 lg:justify-end"><Button href={phoneHref}>Appeler <Phone className="size-4" /></Button><Button href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`} target="_blank" variant="outline" className="border-border-dark">Itinéraire <MapPin className="size-4" /></Button></div></Container>
      </section>
    </>
  );
}

function InfoCard({ icon: Icon, label, children }: { icon: typeof MapPin; label: string; children: React.ReactNode }) {
  return <motion.article initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .65, ease }} className="group min-h-72 border border-border-dark/10 bg-surface p-8 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-[0_20px_70px_rgba(23,23,23,.08)]"><Icon className="size-6 stroke-[1.3] text-accent transition-transform group-hover:-translate-y-1" /><h2 className="mt-12 font-serif text-3xl">{label}</h2><div className="mt-6 leading-7 text-foreground/65">{children}</div></motion.article>;
}

function Field({ id, label, type = "text", autoComplete, required = false }: { id: string; label: string; type?: string; autoComplete?: string; required?: boolean }) {
  return <label className="block" htmlFor={id}><span className="text-[.65rem] uppercase tracking-[.18em] text-on-dark/55">{label}</span><input id={id} name={id} type={type} autoComplete={autoComplete} required={required} className="mt-2 w-full border-0 border-b border-on-dark/25 bg-transparent py-3 text-on-dark outline-none transition focus:border-accent-soft" /></label>;
}
