export const testimonialsSection = {
  heading: "In residents' words",
  description: "A few of the people who call Aurelio home.",
} as const;

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar: { src: string; alt: string };
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Marguerite Sato",
    role: "Resident since 2023",
    quote:
      "The light changes all day and somehow the apartment always feels like it was designed for that exact hour.",
    rating: 5,
    avatar: { src: "https://picsum.photos/seed/aurelio-avatar-1/200/200", alt: "Portrait of Marguerite Sato" },
  },
  {
    id: "t2",
    name: "Desmond Achebe",
    role: "Resident since 2022",
    quote:
      "I have lived in four cities and never in a building this quiet. The staff know your name by the second visit.",
    rating: 5,
    avatar: { src: "https://picsum.photos/seed/aurelio-avatar-2/200/200", alt: "Portrait of Desmond Achebe" },
  },
  {
    id: "t3",
    name: "Elena Voss",
    role: "Resident since 2024",
    quote:
      "Every finish holds up to close inspection. That is rare, and it is the reason we stayed after the first viewing.",
    rating: 5,
    avatar: { src: "https://picsum.photos/seed/aurelio-avatar-3/200/200", alt: "Portrait of Elena Voss" },
  },
];
