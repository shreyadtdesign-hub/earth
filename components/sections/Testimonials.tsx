"use client";

import Image from "next/image";
import { Star } from "@phosphor-icons/react/dist/ssr";
import { testimonials, testimonialsSection } from "@/data/testimonials";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Testimonials() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <Section id="testimonials">
      <SectionHeading heading={testimonialsSection.heading} description={testimonialsSection.description} className="mb-14" />

      <div ref={ref} className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.id}
            data-reveal
            className="flex flex-col justify-between rounded-[1.75rem] border border-ink/8 bg-ivory p-8"
          >
            <div>
              <div className="mb-4 flex gap-1 text-champagne" aria-hidden="true">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} weight="fill" />
                ))}
              </div>
              <blockquote className="font-serif-display text-xl leading-snug text-ink">
                {testimonial.quote}
              </blockquote>
            </div>

            <figcaption className="mt-8 flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-full">
                <Image src={testimonial.avatar.src} alt={testimonial.avatar.alt} fill sizes="44px" className="object-cover" />
              </div>
              <div>
                <p className="text-sm font-medium text-ink">{testimonial.name}</p>
                <p className="text-xs text-ink/60">{testimonial.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
