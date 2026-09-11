"use client";

import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function CraftVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;

        if (
          entry.intersectionRatio >= 0.45 &&
          !reducedMotion &&
          video.muted
        ) {
          void video.play().catch(() => setIsPlaying(false));
        } else if (!entry.isIntersecting || entry.intersectionRatio < 0.15) {
          video.pause();
        }
      },
      { threshold: [0, 0.15, 0.45] },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play().catch(() => setIsPlaying(false));
    } else {
      video.pause();
    }
  };

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <div
      data-image-reveal
      className="relative mx-auto aspect-[9/16] w-[min(86vw,360px)] overflow-hidden rounded-[1.25rem] bg-surface-black shadow-[0_24px_70px_rgba(0,0,0,.2)] sm:w-[360px] lg:mx-0 lg:w-[min(31vw,410px)] xl:translate-x-[clamp(0px,2.5vw,40px)]"
    >
      <video
        ref={videoRef}
        className="size-full object-contain"
        width={720}
        height={1280}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Présentation vidéo de la Boucherie Tourteaux et de son savoir-faire en boutique"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onVolumeChange={(event) => setIsMuted(event.currentTarget.muted)}
      >
        <source src="/videos/video-boucherie.mp4" type="video/mp4" />
        Votre navigateur ne prend pas en charge la lecture de cette vidéo.
      </video>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
      <div className="absolute right-3 bottom-3 flex gap-2 sm:right-4 sm:bottom-4">
        <button
          type="button"
          onClick={togglePlayback}
          aria-label={isPlaying ? "Mettre la vidéo en pause" : "Lire la vidéo"}
          className="grid size-11 place-items-center rounded-full border border-white/25 bg-black/45 text-white shadow-sm backdrop-blur-md transition-colors hover:bg-black/65"
        >
          {isPlaying ? (
            <Pause className="size-[1.05rem]" />
          ) : (
            <Play className="ml-0.5 size-[1.05rem]" />
          )}
        </button>
        <button
          type="button"
          onClick={toggleSound}
          aria-label={isMuted ? "Activer le son" : "Couper le son"}
          aria-pressed={!isMuted}
          className="grid size-11 place-items-center rounded-full border border-white/25 bg-black/45 text-white shadow-sm backdrop-blur-md transition-colors hover:bg-black/65"
        >
          {isMuted ? (
            <VolumeX className="size-[1.05rem]" />
          ) : (
            <Volume2 className="size-[1.05rem]" />
          )}
        </button>
      </div>
    </div>
  );
}
