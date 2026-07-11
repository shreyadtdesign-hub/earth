export const siteConfig = {
  name: "Aurelio Residences",
  shortName: "Aurelio",
  tagline: "A private world above the city",
  description:
    "An address for those who have stopped searching and started arriving. Twelve residences, one view that never repeats.",
  phone: "+1 (415) 200-8842",
  whatsapp: "14152008842",
  email: "concierge@aurelioresidences.com",
  address: "1 Aurelio Point, San Francisco, CA 94105",
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Projects", href: "#featured-project" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const navCta: NavLink = {
  label: "Book a visit",
  href: "#contact",
};

export const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Pinterest", href: "https://pinterest.com" },
] as const;

export const footerLinks = {
  quick: [
    { label: "About", href: "#about" },
    { label: "Amenities", href: "#amenities" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms", href: "/terms" },
  ],
} as const;
