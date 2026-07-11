"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryImages, gallerySection } from "@/data/gallery";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Lightbox } from "@/components/ui/Lightbox";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Gallery() {
  const ref = useScrollReveal<HTMLDivElement>();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <Section id="gallery">
      <SectionHeading
        eyebrow={gallerySection.eyebrow}
        heading={gallerySection.heading}
        description={gallerySection.description}
        className="mb-14"
      />

      <div ref={ref} className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {galleryImages.map((image, index) => (
          <button
            key={image.id}
            type="button"
            data-reveal
            onClick={() => setActiveIndex(index)}
            aria-label={`Open ${image.alt} in gallery view`}
            className="group relative aspect-[4/5] overflow-hidden rounded-[1.75rem]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover transition-transform duration-700 ease-[var(--ease-premium)] group-hover:scale-[1.06]"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <Lightbox
          images={galleryImages}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </Section>
  );
}
