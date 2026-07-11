"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import { X, CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";
import type { GalleryImage } from "@/data/gallery";

type LightboxProps = {
  images: GalleryImage[];
  activeIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function Lightbox({ images, activeIndex, onClose, onNavigate }: LightboxProps) {
  const goTo = useCallback(
    (delta: number) => {
      const next = (activeIndex + delta + images.length) % images.length;
      onNavigate(next);
    },
    [activeIndex, images.length, onNavigate],
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") goTo(1);
      if (event.key === "ArrowLeft") goTo(-1);
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [goTo, onClose]);

  const image = images[activeIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/90 backdrop-blur-xl"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close gallery"
        onClick={onClose}
        className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-warm-white/10 text-warm-white transition-colors hover:bg-warm-white/20"
      >
        <X size={20} weight="light" />
      </button>

      <button
        type="button"
        aria-label="Previous image"
        onClick={(event) => {
          event.stopPropagation();
          goTo(-1);
        }}
        className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full bg-warm-white/10 text-warm-white transition-colors hover:bg-warm-white/20 md:left-8"
      >
        <CaretLeft size={20} weight="light" />
      </button>

      <div
        className="relative h-[70vh] w-[90vw] max-w-5xl"
        onClick={(event) => event.stopPropagation()}
      >
        <Image src={image.src} alt={image.alt} fill sizes="90vw" className="object-contain" />
      </div>

      <button
        type="button"
        aria-label="Next image"
        onClick={(event) => {
          event.stopPropagation();
          goTo(1);
        }}
        className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full bg-warm-white/10 text-warm-white transition-colors hover:bg-warm-white/20 md:right-8"
      >
        <CaretRight size={20} weight="light" />
      </button>
    </div>
  );
}
