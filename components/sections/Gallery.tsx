"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryImages, gallerySection } from "@/data/gallery";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Lightbox } from "@/components/ui/Lightbox";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/utils/cn";

const spanForOrientation: Record<(typeof galleryImages)[number]["orientation"], string> = {
  large: "sm:col-span-2 row-span-2 aspect-[16/10]",
  landscape: "sm:col-span-2 aspect-[16/10]",
  portrait: "aspect-[3/4]",
};

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

      <div ref={ref} className="grid grid-cols-1 gap-4 sm:grid-cols-4">
        {galleryImages.map((image, index) => (
          <button
            key={image.id}
            type="button"
            data-reveal
            onClick={() => setActiveIndex(index)}
            aria-label={`Open ${image.alt} in gallery view`}
            className={cn("group relative overflow-hidden rounded-[1.75rem]", spanForOrientation[image.orientation])}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 640px) 40vw, 90vw"
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
