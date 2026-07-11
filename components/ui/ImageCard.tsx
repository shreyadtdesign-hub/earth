import Image from "next/image";
import { cn } from "@/utils/cn";

type ImageCardProps = {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  aspect?: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
};

export function ImageCard({
  src,
  alt,
  title,
  description,
  aspect = "aspect-[4/5]",
  sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw",
  className,
  priority = false,
}: ImageCardProps) {
  return (
    <figure data-reveal className={cn("group relative overflow-hidden rounded-[1.75rem]", aspect, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-700 ease-[var(--ease-premium)] group-hover:scale-[1.05]"
      />
      {(title || description) && (
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent p-6 pt-16">
          {title && <p className="font-serif-display text-xl text-white">{title}</p>}
          {description && <p className="mt-1 text-sm text-white/75">{description}</p>}
        </figcaption>
      )}
    </figure>
  );
}
