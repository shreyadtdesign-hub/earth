"use client";

import Image from "next/image";
import { MapPin } from "@phosphor-icons/react/dist/ssr";
import { locationContent } from "@/data/location";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Location() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <Section id="location" className="bg-ivory">
      <div ref={ref} className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div data-reveal className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem]">
          <Image
            src={locationContent.mapImage.src}
            alt={locationContent.mapImage.alt}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>

        <div data-reveal>
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-champagne">
            {locationContent.eyebrow}
          </p>
          <h2 className="font-serif-display text-4xl leading-[1.1] md:text-5xl">{locationContent.heading}</h2>

          <div className="mt-6 flex items-start gap-3 text-ink/70">
            <MapPin size={20} weight="light" className="mt-0.5 shrink-0 text-champagne" />
            <p>{locationContent.address}</p>
          </div>

          <ul className="mt-8 space-y-4 border-t border-ink/10 pt-6">
            {locationContent.landmarks.map((landmark) => (
              <li key={landmark.label} className="flex items-center justify-between text-sm">
                <span className="text-ink/80">{landmark.label}</span>
                <span className="text-ink/50">{landmark.distance}</span>
              </li>
            ))}
          </ul>

          <Button href={locationContent.cta.href} className="mt-10">
            {locationContent.cta.label}
          </Button>
        </div>
      </div>
    </Section>
  );
}
