"use client";

import Image from "next/image";
import Link from "next/link";
import { useSeamlessVideoLoop } from "@/hooks/useSeamlessVideoLoop";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { heroContent, heroPoster, heroVideos } from "@/data/hero";
import { Button } from "@/components/ui/Button";
import { VideoTransition } from "./VideoTransition";

export function VideoHero() {
  const reducedMotion = useReducedMotion();
  const { videoARef, videoBRef } = useSeamlessVideoLoop(reducedMotion);

  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-charcoal">
      {/* Sentinel the Navbar observes to know when the hero has scrolled past. */}
      <div id="hero-sentinel" className="pointer-events-none absolute inset-x-0 top-0 h-20" aria-hidden="true" />

      <div className="absolute inset-0">
        {reducedMotion ? (
          <Image
            src={heroPoster.src}
            alt={heroPoster.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        ) : (
          <>
            <VideoTransition ref={videoARef} source={heroVideos[0]} />
            <VideoTransition ref={videoBRef} source={heroVideos[1]} />
          </>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/60" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <p className="font-serif-display text-lg tracking-[0.08em] text-warm-white/85">{heroContent.brand}</p>

        <h1 className="mt-6 max-w-3xl text-balance font-serif-display text-5xl leading-[1.08] text-warm-white md:text-7xl">
          {heroContent.heading}
        </h1>

        <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-warm-white/80 md:text-lg">
          {heroContent.subheading}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href={heroContent.primaryCta.href}>{heroContent.primaryCta.label}</Button>
          <Link
            href={heroContent.secondaryCta.href}
            className="text-sm font-medium tracking-wide text-warm-white/85 underline-offset-4 transition-colors hover:text-warm-white hover:underline"
          >
            {heroContent.secondaryCta.label}
          </Link>
        </div>
      </div>

      <Link
        href="#about"
        aria-label="Scroll to the next section"
        className="group absolute bottom-10 left-1/2 z-10 flex h-12 w-7 -translate-x-1/2 items-start justify-center rounded-full border border-warm-white/40 p-1.5"
      >
        <span className="h-2 w-1 animate-scroll-dot rounded-full bg-warm-white/90" />
      </Link>
    </section>
  );
}
