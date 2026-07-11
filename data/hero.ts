export type HeroVideoSource = {
  webm: string;
  mp4: string;
};

export const heroVideos: HeroVideoSource[] = [
  { webm: "/videos/video1.webm", mp4: "/videos/video1.mp4" },
  { webm: "/videos/video2.webm", mp4: "/videos/video2.mp4" },
];

export const heroPoster = {
  src: "https://images.unsplash.com/photo-3mdHgIGJdrM?auto=format&fit=crop&w=2000&q=80",
  alt: "Aerial view of a city skyline at dusk",
};

export const heroContent = {
  brand: "Aurelio Residences",
  heading: "Live above the ordinary",
  subheading:
    "Twelve penthouses. One unobstructed skyline. Crafted for a life measured in quiet moments.",
  primaryCta: { label: "Book a visit", href: "#contact" },
  secondaryCta: { label: "Explore residences", href: "#featured-project" },
} as const;
