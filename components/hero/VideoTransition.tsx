"use client";

import { forwardRef } from "react";
import type { HeroVideoSource } from "@/data/hero";

type VideoTransitionProps = {
  source: HeroVideoSource;
  className?: string;
};

/**
 * A single absolutely-positioned clip in the two-clip crossfade chain.
 * Opacity is driven imperatively by useSeamlessVideoLoop (GSAP), not React
 * state, so the handoff never triggers a re-render.
 */
export const VideoTransition = forwardRef<HTMLVideoElement, VideoTransitionProps>(function VideoTransition(
  { source, className },
  ref,
) {
  return (
    <video
      ref={ref}
      className={className}
      muted
      playsInline
      autoPlay
      preload="auto"
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, height: "100%", width: "100%", objectFit: "cover" }}
    >
      <source src={source.webm} type="video/webm" />
      <source src={source.mp4} type="video/mp4" />
    </video>
  );
});
