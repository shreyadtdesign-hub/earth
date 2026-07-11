"use client";

import { amenities, amenitiesSection } from "@/data/amenities";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageCard } from "@/components/ui/ImageCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function AmenitiesGrid() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <Section id="amenities" className="bg-ivory">
      <SectionHeading heading={amenitiesSection.heading} description={amenitiesSection.description} className="mb-14" />
      <div ref={ref} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {amenities.map((amenity) => (
          <ImageCard
            key={amenity.id}
            src={amenity.image.src}
            alt={amenity.image.alt}
            title={amenity.title}
            description={amenity.description}
          />
        ))}
      </div>
    </Section>
  );
}
