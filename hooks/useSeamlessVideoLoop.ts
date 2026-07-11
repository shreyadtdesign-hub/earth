"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CROSSFADE_SECONDS = 0.6;
/** Start the handoff to the next clip this many seconds before the current one ends. */
const HANDOFF_LEAD_SECONDS = 0.6;

type ClipId = "a" | "b";

/**
 * Chains two <video> elements (video1 -> video2 -> video1 -> ...) into a single
 * endless walkthrough. Both clips stay mounted and preloaded the whole time, so
 * the "next" clip is always primed; a short opacity crossfade masks any
 * millisecond-level seams between them instead of relying on a hard cut.
 */
export function useSeamlessVideoLoop(reducedMotion: boolean) {
  const videoARef = useRef<HTMLVideoElement | null>(null);
  const videoBRef = useRef<HTMLVideoElement | null>(null);
  const activeRef = useRef<ClipId>("a");
  const handoffStartedRef = useRef(false);

  useEffect(() => {
    const videoA = videoARef.current;
    const videoB = videoBRef.current;
    if (!videoA || !videoB) return;

    const fadeDuration = reducedMotion ? 0 : CROSSFADE_SECONDS;

    gsap.set(videoA, { opacity: 1 });
    gsap.set(videoB, { opacity: 0 });
    videoB.currentTime = 0;

    const tryPlay = (video: HTMLVideoElement) => {
      video.play().catch(() => {
        /* Autoplay can be blocked pre-gesture; muted+inline should prevent this. */
      });
    };

    const crossfadeTo = (from: HTMLVideoElement, to: HTMLVideoElement, nextActive: ClipId) => {
      to.currentTime = 0;
      tryPlay(to);
      gsap.to(to, { opacity: 1, duration: fadeDuration, ease: "power1.inOut" });
      gsap.to(from, {
        opacity: 0,
        duration: fadeDuration,
        ease: "power1.inOut",
        onComplete: () => from.pause(),
      });
      activeRef.current = nextActive;
      handoffStartedRef.current = false;
    };

    const cleanups: Array<() => void> = [];

    const attachHandoff = (current: HTMLVideoElement, next: HTMLVideoElement, currentId: ClipId, nextId: ClipId) => {
      const onTimeUpdate = () => {
        if (activeRef.current !== currentId || handoffStartedRef.current) return;
        const remaining = current.duration - current.currentTime;
        if (Number.isFinite(remaining) && remaining <= HANDOFF_LEAD_SECONDS) {
          handoffStartedRef.current = true;
          crossfadeTo(current, next, nextId);
        }
      };
      const onEnded = () => {
        if (activeRef.current === currentId) crossfadeTo(current, next, nextId);
      };
      current.addEventListener("timeupdate", onTimeUpdate);
      current.addEventListener("ended", onEnded);
      cleanups.push(() => {
        current.removeEventListener("timeupdate", onTimeUpdate);
        current.removeEventListener("ended", onEnded);
      });
    };

    attachHandoff(videoA, videoB, "a", "b");
    attachHandoff(videoB, videoA, "b", "a");

    tryPlay(videoA);

    const handleVisibility = () => {
      const active = activeRef.current === "a" ? videoA : videoB;
      if (document.hidden) {
        active.pause();
      } else {
        tryPlay(active);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    cleanups.push(() => document.removeEventListener("visibilitychange", handleVisibility));

    return () => {
      cleanups.forEach((fn) => fn());
      gsap.killTweensOf([videoA, videoB]);
    };
  }, [reducedMotion]);

  return { videoARef, videoBRef };
}
