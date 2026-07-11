"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "./useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

type RevealOptions = {
  y?: number;
  duration?: number;
  stagger?: number;
  start?: string;
};

/**
 * Applies a single, restrained fade-up reveal to the direct children of the
 * returned ref once they enter the viewport. Collapses to a no-op under
 * prefers-reduced-motion so content is simply visible immediately.
 */
export function useScrollReveal<T extends HTMLElement>(
  selector = "[data-reveal]",
  { y = 24, duration = 0.9, stagger = 0.08, start = "top 80%" }: RevealOptions = {},
) {
  const containerRef = useRef<T | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>(selector, containerRef.current);
      if (targets.length === 0) return;

      gsap.set(targets, { opacity: 0, y });

      ScrollTrigger.batch(targets, {
        start,
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration,
            stagger,
            ease: "power3.out",
          }),
      });
    }, containerRef);

    return () => ctx.revert();
  }, [reduceMotion, selector, y, duration, stagger, start]);

  return containerRef;
}
