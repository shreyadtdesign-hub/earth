export type HeroVideoSource = {
  webm: string;
  mp4: string;
};

export const heroVideos: HeroVideoSource[] = [
  { webm: "/videos/video1.webm", mp4: "/videos/video1.mp4" },
  { webm: "/videos/video2.webm", mp4: "/videos/video2.mp4" },
];

export const heroPoster = {
  src: "https://picsum.photos/seed/aurelio-hero-poster/2000/1200",
  alt: "Cinematic view of the Aurelio Residences penthouse at dusk",
};

export const heroContent = {
  brand: "Aurelio Residences",
  heading: "Live above the ordinary",
  subheading:
    "Twelve penthouses. One unobstructed skyline. Crafted for a life measured in quiet moments.",
  primaryCta: { label: "Book a visit", href: "#contact" },
  secondaryCta: { label: "Explore residences", href: "#featured-project" },
} as const;
