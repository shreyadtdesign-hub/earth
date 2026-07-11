"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { navCta, navLinks, siteConfig } from "@/constants/site";
import { Container } from "@/components/ui/Container";
import { cn } from "@/utils/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("hero-sentinel");
    if (!sentinel) {
      setScrolled(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting), { threshold: 0 });
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-colors duration-700 ease-[var(--ease-premium)]",
          scrolled ? "bg-warm-white/80 shadow-[0_1px_0_rgba(23,20,15,0.06)] backdrop-blur-xl" : "bg-transparent",
        )}
      >
        <Container className="flex h-20 items-center justify-between">
          <Link href="#" className={cn("font-serif-display text-xl tracking-wide", !scrolled && "text-warm-white")}>
            {siteConfig.shortName}
          </Link>

          <nav className={cn("hidden items-center gap-9 lg:flex", !scrolled && "text-warm-white")}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide opacity-80 transition-opacity duration-300 hover:opacity-100"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href={navCta.href}
              className={cn(
                "inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition-colors duration-500",
                scrolled ? "bg-charcoal text-warm-white hover:bg-ink" : "bg-warm-white/15 text-warm-white backdrop-blur-md hover:bg-warm-white/25",
              )}
            >
              {navCta.label}
            </Link>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className={cn("flex h-10 w-10 items-center justify-center rounded-full lg:hidden", !scrolled && "text-warm-white")}
          >
            {menuOpen ? <X size={22} weight="light" /> : <List size={22} weight="light" />}
          </button>
        </Container>
      </div>

      <div
        className={cn(
          "fixed inset-0 top-0 flex flex-col bg-ink/95 backdrop-blur-2xl transition-opacity duration-500 ease-[var(--ease-premium)] lg:hidden",
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <Container className="flex h-20 items-center justify-end">
          <button type="button" aria-label="Close menu" onClick={() => setMenuOpen(false)} className="flex h-10 w-10 items-center justify-center rounded-full text-warm-white">
            <X size={22} weight="light" />
          </button>
        </Container>
        <nav className="flex flex-1 flex-col items-start justify-center gap-6 px-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: menuOpen ? `${index * 60}ms` : "0ms" }}
              className={cn(
                "font-serif-display text-4xl text-warm-white transition-all duration-500 ease-[var(--ease-premium)]",
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={navCta.href}
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex rounded-full bg-champagne px-6 py-3 text-sm font-medium tracking-wide text-ink"
          >
            {navCta.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}
