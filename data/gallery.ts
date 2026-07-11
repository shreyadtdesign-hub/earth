export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  orientation: "landscape" | "portrait" | "large";
};

export const gallerySection = {
  eyebrow: "Gallery",
  heading: "A residence, in detail",
  description: "A closer look at the interiors, materials, and light.",
} as const;

export const galleryImages: GalleryImage[] = [
  { id: "g1", src: "https://picsum.photos/seed/aurelio-g1/1600/1000", alt: "Living room at golden hour", orientation: "large" },
  { id: "g2", src: "https://picsum.photos/seed/aurelio-g2/900/1200", alt: "Primary suite with skyline view", orientation: "portrait" },
  { id: "g3", src: "https://picsum.photos/seed/aurelio-g3/1400/950", alt: "Kitchen with marble island", orientation: "landscape" },
  { id: "g4", src: "https://picsum.photos/seed/aurelio-g4/900/1300", alt: "Spa bathroom in natural stone", orientation: "portrait" },
  { id: "g5", src: "https://picsum.photos/seed/aurelio-g5/1400/950", alt: "Private terrace at dusk", orientation: "landscape" },
  { id: "g6", src: "https://picsum.photos/seed/aurelio-g6/1600/1000", alt: "Lobby with bronze detailing", orientation: "large" },
  { id: "g7", src: "https://picsum.photos/seed/aurelio-g7/900/1200", alt: "Reading nook by the window", orientation: "portrait" },
  { id: "g8", src: "https://picsum.photos/seed/aurelio-g8/1400/950", alt: "Dining room with pendant lighting", orientation: "landscape" },
];
