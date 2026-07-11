export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
};

export const gallerySection = {
  eyebrow: "Gallery",
  heading: "A residence, in detail",
  description: "A closer look at the interiors, materials, and light.",
} as const;

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "https://picsum.photos/seed/aurelio-g1/1200/1500",
    alt: "Living room at golden hour",
  },
  {
    id: "g2",
    src: "https://picsum.photos/seed/aurelio-g2/1200/1500",
    alt: "Primary suite with skyline view",
  },
  {
    id: "g3",
    src: "https://picsum.photos/seed/aurelio-g3/1200/1500",
    alt: "Kitchen with marble island",
  },
  {
    id: "g4",
    src: "https://picsum.photos/seed/aurelio-g4/1200/1500",
    alt: "Spa bathroom in natural stone",
  },
  {
    id: "g5",
    src: "https://picsum.photos/seed/aurelio-g5/1200/1500",
    alt: "Private terrace at dusk",
  },
  {
    id: "g6",
    src: "https://picsum.photos/seed/aurelio-g6/1200/1500",
    alt: "Lobby with bronze detailing",
  },
  {
    id: "g7",
    src: "https://picsum.photos/seed/aurelio-g7/1200/1500",
    alt: "Reading nook by the window",
  },
  {
    id: "g8",
    src: "https://picsum.photos/seed/aurelio-g8/1200/1500",
    alt: "Dining room with pendant lighting",
  },
];
