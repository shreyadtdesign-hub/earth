export const locationContent = {
  eyebrow: "Location",
  heading: "One point, the whole city within reach",
  address: "1 Aurelio Point, San Francisco, CA 94105",
  mapImage: {
    src: "https://images.unsplash.com/photo-5wDq-27_zKI?auto=format&fit=crop&w=1600&q=80",
    alt: "City skyline illuminated at dusk with calm water reflection",
  },
  landmarks: [
    { label: "Financial District", distance: "6 min walk" },
    { label: "Ferry Building", distance: "9 min walk" },
    { label: "Private Aviation Terminal", distance: "22 min drive" },
    { label: "Waterfront Park", distance: "4 min walk" },
  ],
  cta: { label: "Get directions", href: "https://maps.google.com" },
} as const;
