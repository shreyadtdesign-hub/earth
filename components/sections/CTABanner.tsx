"use client";

import { ctaBanner } from "@/data/cta-banner";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function CTABanner() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="bg-charcoal py-24 md:py-28">
      <Container>
        <div ref={ref} data-reveal className="flex flex-col items-center gap-8 text-center">
          <h2 className="font-serif-display max-w-2xl text-4xl leading-[1.1] text-warm-white md:text-5xl">
            {ctaBanner.heading}
          </h2>
          <p className="max-w-md text-base leading-relaxed text-warm-white/70">{ctaBanner.description}</p>
          <Button href={ctaBanner.cta.href} variant="secondary-on-dark">
            {ctaBanner.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
