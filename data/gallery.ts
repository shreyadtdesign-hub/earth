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
    src: "https://images.unsplash.com/photo-HrpTNbzm70k?auto=format&fit=crop&w=1200&q=80",
    alt: "Dining room with a table and chairs",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-PUMw1z67VmQ?auto=format&fit=crop&w=1200&q=80",
    alt: "Marble ensuite bathroom with bathtub and vanity",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-o-uPDNNSsDA?auto=format&fit=crop&w=1200&q=80",
    alt: "Kitchen with a marble island and white cabinets",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-vYqFeeM2XPk?auto=format&fit=crop&w=1200&q=80",
    alt: "Elegant bathroom with marble walls and natural elements",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-TTvjeEHpwT8?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern home with a rooftop terrace",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-aMFoc0cZENA?auto=format&fit=crop&w=1200&q=80",
    alt: "Lobby with plush seating and gold-accented walls",
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-9mDxdrqxtOE?auto=format&fit=crop&w=1200&q=80",
    alt: "Bookshelves and a sofa in a cozy reading nook",
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-Fg6-6zK46aU?auto=format&fit=crop&w=1200&q=80",
    alt: "Infinity pool overlooking the ocean",
  },
];
