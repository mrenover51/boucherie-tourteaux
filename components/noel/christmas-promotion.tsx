import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { christmasCover, christmasPromotionEnabled } from "@/lib/noel-2026";

export function ChristmasPromotion() {
  if (!christmasPromotionEnabled) return null;
  return <section className="border-y border-[#d7b76b]/30 bg-[#290e18] py-10 text-[#fff7e8] sm:py-16" aria-labelledby="christmas-promotion-title">
    <Container className="grid items-center gap-8 md:grid-cols-[1.25fr_.75fr] md:gap-14">
      <div data-reveal>
        <p className="text-sm font-bold tracking-[.22em] text-[#e3c783]">TABLES EN FÊTE</p>
        <h2 id="christmas-promotion-title" className="mt-5 font-serif text-4xl leading-tight sm:text-6xl">Découvrez notre menu de Noël 2026</h2>
        <p className="mt-6 max-w-xl text-base leading-8 text-[#f2e6d7]">Pour vos repas de fête, la Boucherie Tourteaux vous propose une sélection de mets gourmands, viandes, volailles et accompagnements pour partager un Noël savoureux.</p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href="/noel-2026" className="inline-flex min-h-12 items-center justify-center border border-[#e3c783] bg-[#e3c783] px-5 py-4 text-center text-sm font-bold text-[#290e18] transition-colors hover:bg-[#f3dfac]">DÉCOUVRIR LE MENU DE NOËL</Link>
          <a href="tel:+33326517371" className="inline-flex min-h-12 items-center justify-center border border-[#e3c783] px-5 py-4 text-sm font-bold hover:bg-white/10">NOUS APPELER</a>
        </div>
      </div>
      <Link href="/noel-2026" className="mx-auto block w-full max-w-[220px] border border-[#d7b76b]/40 p-2 md:max-w-[340px]" aria-label="Découvrir Tables en Fête, menu de Noël 2026">
        <Image src={christmasCover} alt="Affiche officielle Tables en Fête, Noël 2026 de la Boucherie Tourteaux à Avize" sizes="(max-width: 767px) 220px, 340px" className="h-auto w-full" />
      </Link>
    </Container>
  </section>;
}
