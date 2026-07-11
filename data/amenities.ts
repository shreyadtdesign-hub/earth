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
      src: "https://images.unsplash.com/photo-KgybDitNR18?auto=format&fit=crop&w=900&h=1100&q=80",
      alt: "Luxury infinity pool at sunset with lounge chairs",
    },
  },
  {
    id: "clubhouse",
    title: "Clubhouse",
    description: "A private club for residents, open until midnight.",
    image: {
      src: "https://images.unsplash.com/photo-Zp3SQbYFWzU?auto=format&fit=crop&w=900&h=1100&q=80",
      alt: "Modern hotel lobby with circular seating and bar area",
    },
  },
  {
    id: "gym",
    title: "Gym",
    description: "Full-floor fitness studio with curated equipment.",
    image: {
      src: "https://images.unsplash.com/photo-asVNiNtSSXE?auto=format&fit=crop&w=900&h=1100&q=80",
      alt: "Modern gym with treadmills and large windows",
    },
  },
  {
    id: "spa",
    title: "Spa",
    description: "A quiet wing for treatments, steam, and stillness.",
    image: {
      src: "https://images.unsplash.com/photo-bBmupPTAHyw?auto=format&fit=crop&w=900&h=1100&q=80",
      alt: "Spa salon therapy treatment room",
    },
  },
  {
    id: "landscaped-garden",
    title: "Landscaped Garden",
    description: "Terraced greenery designed by a Kyoto landscape studio.",
    image: {
      src: "https://images.unsplash.com/photo-3_-9b-ZaUxA?auto=format&fit=crop&w=900&h=1100&q=80",
      alt: "Aerial view of a modern rooftop garden",
    },
  },
  {
    id: "private-theatre",
    title: "Private Theatre",
    description: "A twelve-seat screening room with reference sound.",
    image: {
      src: "https://images.unsplash.com/photo-GFNVoyqsmzg?auto=format&fit=crop&w=900&h=1100&q=80",
      alt: "Dark private theatre room with rows of seats",
    },
  },
  {
    id: "kids-play-area",
    title: "Kids Play Area",
    description: "A supervised play wing built for imagination.",
    image: {
      src: "https://images.unsplash.com/photo-TziLA6-9kCA?auto=format&fit=crop&w=900&h=1100&q=80",
      alt: "Child playing in a colorful indoor playground",
    },
  },
  {
    id: "business-lounge",
    title: "Business Lounge",
    description: "Private meeting suites and a quiet co-working hall.",
    image: {
      src: "https://images.unsplash.com/photo-bDABXzkqexg?auto=format&fit=crop&w=900&h=1100&q=80",
      alt: "Modern conference room with frosted glass",
    },
  },
  {
    id: "sky-lounge",
    title: "Sky Lounge",
    description: "A rooftop lounge for residents, open to the stars.",
    image: {
      src: "https://images.unsplash.com/photo-FrLPeW1urbQ?auto=format&fit=crop&w=900&h=1100&q=80",
      alt: "Rooftop bar at night with neon lights",
    },
  },
  {
    id: "indoor-games",
    title: "Indoor Games",
    description: "Billiards, chess, and a private tasting room.",
    image: {
      src: "https://images.unsplash.com/photo-eNKEH99kpAA?auto=format&fit=crop&w=900&h=1100&q=80",
      alt: "Room with a pool table and couches",
    },
  },
];
