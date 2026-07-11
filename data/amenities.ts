export type Amenity = {
  id: string;
  title: string;
  description: string;
  image: { src: string; alt: string };
};

export const amenitiesSection = {
  heading: "Amenities built for daily ritual",
  description: "Ten spaces, each considered down to the last fixture.",
} as const;

export const amenities: Amenity[] = [
  {
    id: "swimming-pool",
    title: "Swimming Pool",
    description: "A sixty-foot infinity edge suspended above the city.",
    image: {
      src: "https://picsum.photos/seed/aurelio-pool/900/1100",
      alt: "Infinity pool overlooking the skyline",
    },
  },
  {
    id: "clubhouse",
    title: "Clubhouse",
    description: "A private club for residents, open until midnight.",
    image: {
      src: "https://picsum.photos/seed/aurelio-clubhouse/900/1100",
      alt: "Warmly lit residents clubhouse lounge",
    },
  },
  {
    id: "gym",
    title: "Gym",
    description: "Full-floor fitness studio with curated equipment.",
    image: {
      src: "https://picsum.photos/seed/aurelio-gym/900/1100",
      alt: "Minimalist fitness studio with natural light",
    },
  },
  {
    id: "spa",
    title: "Spa",
    description: "A quiet wing for treatments, steam, and stillness.",
    image: {
      src: "https://picsum.photos/seed/aurelio-spa/900/1100",
      alt: "Serene spa treatment room",
    },
  },
  {
    id: "landscaped-garden",
    title: "Landscaped Garden",
    description: "Terraced greenery designed by a Kyoto landscape studio.",
    image: {
      src: "https://picsum.photos/seed/aurelio-garden/900/1100",
      alt: "Terraced rooftop garden with mature planting",
    },
  },
  {
    id: "private-theatre",
    title: "Private Theatre",
    description: "A twelve-seat screening room with reference sound.",
    image: {
      src: "https://picsum.photos/seed/aurelio-theatre/900/1100",
      alt: "Private cinema room with plush seating",
    },
  },
  {
    id: "kids-play-area",
    title: "Kids Play Area",
    description: "A supervised play wing built for imagination.",
    image: {
      src: "https://picsum.photos/seed/aurelio-kids/900/1100",
      alt: "Bright and playful children's activity room",
    },
  },
  {
    id: "business-lounge",
    title: "Business Lounge",
    description: "Private meeting suites and a quiet co-working hall.",
    image: {
      src: "https://picsum.photos/seed/aurelio-lounge/900/1100",
      alt: "Elegant business lounge with meeting suites",
    },
  },
  {
    id: "sky-lounge",
    title: "Sky Lounge",
    description: "A rooftop lounge for residents, open to the stars.",
    image: {
      src: "https://picsum.photos/seed/aurelio-sky-lounge/900/1100",
      alt: "Rooftop sky lounge at twilight",
    },
  },
  {
    id: "indoor-games",
    title: "Indoor Games",
    description: "Billiards, chess, and a private tasting room.",
    image: {
      src: "https://picsum.photos/seed/aurelio-games/900/1100",
      alt: "Billiards room with warm wood paneling",
    },
  },
];
