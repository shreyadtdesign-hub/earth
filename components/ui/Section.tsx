import { cn } from "@/utils/cn";
import { Container } from "./Container";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  bleed?: boolean;
};

export function Section({ id, children, className, containerClassName, bleed = false }: SectionProps) {
  return (
    <section id={id} className={cn("py-24 md:py-32", className)}>
      {bleed ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  );
}
