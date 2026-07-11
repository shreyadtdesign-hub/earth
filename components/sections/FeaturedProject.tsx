"use client";

import Image from "next/image";
import { featuredProject } from "@/data/featured-project";
import { Container } from "@/components/ui/Container";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function FeaturedProject() {
  const ref = useScrollReveal<HTMLDivElement>("[data-reveal]", { y: 32 });

  return (
    <section id="featured-project" className="py-24 md:py-32">
      <div ref={ref}>
        <Container className="mb-10 max-w-2xl" as="div">
          <div data-reveal>
            <h2 className="font-serif-display text-4xl leading-[1.1] md:text-5xl">{featuredProject.title}</h2>
            <p className="mt-5 text-base leading-relaxed text-ink/70">{featuredProject.description}</p>
          </div>
        </Container>

        <div data-reveal className="relative mx-6 aspect-[16/9] overflow-hidden rounded-[1.75rem] md:mx-10 md:aspect-[21/9]">
          <Image
            src={featuredProject.image.src}
            alt={featuredProject.image.alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <Container className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4" as="div">
          {featuredProject.stats.map((stat) => (
            <div key={stat.label} data-reveal>
              <p className="font-serif-display text-4xl text-champagne">{stat.value}</p>
              <p className="mt-2 text-sm text-ink/60">{stat.label}</p>
            </div>
          ))}
        </Container>
      </div>
    </section>
  );
}
