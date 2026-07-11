"use client";

import Image from "next/image";
import { aboutContent } from "@/data/about";
import { Section } from "@/components/ui/Section";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function About() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <Section id="about">
      <div ref={ref} className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div data-reveal>
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-champagne">{aboutContent.eyebrow}</p>
          <h2 className="font-serif-display text-4xl leading-[1.1] md:text-5xl">{aboutContent.heading}</h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-ink/70">
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div data-reveal className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] lg:aspect-[3/4]">
          <Image
            src={aboutContent.image.src}
            alt={aboutContent.image.alt}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </Section>
  );
}
