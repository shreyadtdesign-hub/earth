import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/utils/cn";

type ButtonVariant = "primary" | "secondary" | "secondary-on-dark";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  withIcon?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-charcoal text-warm-white hover:bg-ink",
  secondary: "border border-ink/15 bg-transparent text-ink hover:border-champagne",
  "secondary-on-dark": "border border-warm-white/25 bg-transparent text-warm-white hover:border-champagne",
};

const iconWrapperClasses: Record<ButtonVariant, string> = {
  primary: "bg-warm-white/15",
  secondary: "bg-ink/[0.06]",
  "secondary-on-dark": "bg-warm-white/10",
};

export function Button({ href, children, variant = "primary", className, withIcon = true }: ButtonProps) {
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        "group inline-flex items-center gap-3 rounded-full py-1 pl-6 pr-1.5 text-sm font-medium tracking-wide transition-transform duration-500 ease-[var(--ease-premium)] active:scale-[0.98]",
        variantClasses[variant],
        className,
      )}
    >
      <span className="py-2">{children}</span>
      {withIcon && (
        <span
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-500 ease-[var(--ease-premium)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
            iconWrapperClasses[variant],
          )}
        >
          <ArrowUpRight size={16} weight="light" />
        </span>
      )}
    </Link>
  );
}
