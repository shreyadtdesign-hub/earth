import { cn } from "@/utils/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, heading, description, align = "left", className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-champagne">{eyebrow}</p>}
      <h2 className="font-serif-display text-4xl leading-[1.1] md:text-5xl">{heading}</h2>
      {description && <p className="mt-5 max-w-[55ch] text-base leading-relaxed text-ink/70">{description}</p>}
    </div>
  );
}
