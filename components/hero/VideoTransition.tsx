"use client";

import { forwardRef } from "react";
import type { HeroVideoSource } from "@/data/hero";

type VideoTransitionProps = {
  source: HeroVideoSource;
  className?: string;
};

/**
 * A single absolutely-positioned clip in the video1/video2 scrub chain.
 * Playback position and opacity are driven imperatively by
 * useScrollScrubHero (GSAP, tied to scroll progress), not React state, so
 * scrubbing never triggers a re-render. No autoplay/loop: the clip only
 * advances when the hero's pinned scroll range is scrubbed.
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
      preload="auto"
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, height: "100%", width: "100%", objectFit: "cover" }}
    >
      <source src={source.webm} type="video/webm" />
      <source src={source.mp4} type="video/mp4" />
    </video>
  );
});
