"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { christmasMenus } from "@/lib/noel-2026";

export function MenuViewer() {
  const dialog = useRef<HTMLDialogElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [zoom, setZoom] = useState(1);
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [isOpen]);
  function resetView() {
    setZoom(1);
    viewport.current?.scrollTo(0, 0);
  }
  function open(index: number, button: HTMLButtonElement) {
    trigger.current = button;
    setPage(index);
    resetView();
    setIsOpen(true);
    dialog.current?.showModal();
  }
  function close() { dialog.current?.close(); }
  function navigate(index: number) { setPage(index); resetView(); }
  return <>
    <div className="grid gap-10 lg:grid-cols-2">
      {christmasMenus.map((menu, index) => <figure key={menu.alt} className="min-w-0">
        <Image src={menu.image} alt={menu.alt} sizes="(max-width: 1023px) 94vw, 46vw" className="h-auto w-full border border-[#b99551]/40" />
        <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <span className="text-base">Page {index + 1} / 2</span>
          <button onClick={event => open(index, event.currentTarget)} className="christmas-button">AGRANDIR LE MENU<span className="sr-only"> — page {index + 1}</span></button>
        </figcaption>
      </figure>)}
    </div>
    <dialog ref={dialog} aria-labelledby="menu-dialog-title" className="christmas-dialog" onClose={() => {
      setIsOpen(false);
      trigger.current?.focus();
    }} onKeyDown={event => {
      if (event.key === "ArrowRight") { event.preventDefault(); navigate((page + 1) % 2); }
      if (event.key === "ArrowLeft") { event.preventDefault(); navigate((page + 1) % 2); }
    }}>
      <div className="christmas-toolbar">
        <h2 id="menu-dialog-title" className="mr-auto text-base" aria-live="polite">Menu de Noël · {page + 1} / 2</h2>
        <button autoFocus onClick={close} className="christmas-button">Fermer ×</button>
        <div className="flex w-full flex-wrap items-center justify-center gap-2">
          <button onClick={() => navigate((page + 1) % 2)} className="christmas-button" aria-label="Page précédente">Précédente</button>
          <button onClick={() => setZoom(Math.max(1, zoom - .5))} disabled={zoom === 1} className="christmas-button" aria-label="Réduire le menu">−</button>
          <output aria-live="polite" className="min-w-12 text-center text-sm">{zoom * 100} %</output>
          <button onClick={() => setZoom(Math.min(4, zoom + .5))} disabled={zoom === 4} className="christmas-button" aria-label="Zoomer le menu">+</button>
          <button onClick={() => navigate((page + 1) % 2)} className="christmas-button" aria-label="Page suivante">Suivante</button>
          <button onClick={resetView} className="christmas-button">Ajuster</button>
        </div>
        <p className="w-full text-center text-sm text-[#ead9b4]">Utilisez + pour zoomer, puis faites défiler le menu avec le doigt ou les barres de défilement.</p>
      </div>
      <div ref={viewport} className="christmas-menu-viewport" tabIndex={0} role="region" aria-label="Menu agrandi, zone de défilement">
        <div style={{ width: `${zoom * 100}%`, minWidth: "100%" }}>
          <Image src={christmasMenus[page].image} alt={christmasMenus[page].alt} sizes="(max-width: 767px) 200vw, 1600px" className="christmas-enlarged-menu" />
        </div>
      </div>
    </dialog>
  </>;
}
