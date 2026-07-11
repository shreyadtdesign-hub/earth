"use client";

import Image from "next/image";
import { whyChooseUs } from "@/data/why-choose-us";
import { Section } from "@/components/ui/Section";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function WhyChooseUs() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <Section id="why-choose-us" className="bg-ivory">
      <div ref={ref} className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div data-reveal className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] lg:order-2 lg:aspect-[3/4]">
          <Image
            src={whyChooseUs.image.src}
            alt={whyChooseUs.image.alt}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>

        <div data-reveal className="lg:order-1">
          <h2 className="font-serif-display text-4xl leading-[1.1] md:text-5xl">{whyChooseUs.heading}</h2>
          <p className="mt-5 max-w-[55ch] text-base leading-relaxed text-ink/70">{whyChooseUs.description}</p>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-ink/10 pt-8">
            {whyChooseUs.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-serif-display text-3xl text-champagne">{stat.value}</dd>
                <p className="mt-1 text-xs text-ink/60">{stat.label}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
