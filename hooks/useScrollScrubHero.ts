"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Fraction of total progress around the video1/video2 handoff over which they cross-blend. */
const CROSSFADE_WINDOW = 0.015;
/** Portion of the pinned scroll range over which the hero text finishes shrinking and shifting aside. */
const TEXT_TRANSITION_FRACTION = 0.35;

/**
 * Pins the hero for a long scroll range and ties video1/video2 playback
 * position directly to scroll progress, so the "video" only advances while
 * the user scrolls (scrubbing, not autoplay) - and rewinds cleanly if they
 * scroll back up. The hero text scales down and shifts aside over the first
 * slice of that same range.
 */
export function useScrollScrubHero(reducedMotion: boolean) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const videoARef = useRef<HTMLVideoElement | null>(null);
  const videoBRef = useRef<HTMLVideoElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (reducedMotion) return;
    const wrapper = wrapperRef.current;
    const videoA = videoARef.current;
    const videoB = videoBRef.current;
    const text = textRef.current;
    if (!wrapper || !videoA || !videoB || !text) return;

    const durations = { a: 0, b: 0 };
    const onLoadedA = () => {
      durations.a = videoA.duration || 0;
    };
    const onLoadedB = () => {
      durations.b = videoB.duration || 0;
    };
    videoA.addEventListener("loadedmetadata", onLoadedA);
    videoB.addEventListener("loadedmetadata", onLoadedB);
    if (videoA.readyState >= 1) onLoadedA();
    if (videoB.readyState >= 1) onLoadedB();

    gsap.set(videoA, { opacity: 1 });
    gsap.set(videoB, { opacity: 0 });

    // Some mobile browsers only allow programmatic seeking after an initial
    // play() gesture has resolved; both clips are muted so this is allowed
    // without a user gesture, and B is hidden (opacity 0) while it happens.
    const prime = (video: HTMLVideoElement) => {
      video
        .play()
        .then(() => video.pause())
        .catch(() => {});
    };
    prime(videoA);
    prime(videoB);

    const updateVideos = (progress: number) => {
      const total = durations.a + durations.b;
      if (total <= 0) return;

      const targetTime = progress * total;
      const boundary = durations.a / total;

      if (targetTime <= durations.a) {
        videoA.currentTime = targetTime;
      } else {
        videoB.currentTime = Math.min(targetTime - durations.a, durations.b);
      }

      const distanceFromBoundary = progress - boundary;
      let opacityA = 1;
      let opacityB = 0;
      if (Math.abs(distanceFromBoundary) <= CROSSFADE_WINDOW) {
        const blend = (distanceFromBoundary + CROSSFADE_WINDOW) / (CROSSFADE_WINDOW * 2);
        opacityA = 1 - blend;
        opacityB = blend;
      } else if (progress > boundary) {
        opacityA = 0;
        opacityB = 1;
      }
      gsap.set(videoA, { opacity: opacityA });
      gsap.set(videoB, { opacity: opacityB });
    };

    const updateText = (progress: number) => {
      const textProgress = Math.min(progress / TEXT_TRANSITION_FRACTION, 1);
      gsap.set(text, {
        scale: 1 - textProgress * 0.45,
        xPercent: -textProgress * 32,
        yPercent: -textProgress * 10,
        opacity: 1 - textProgress * 0.1,
      });
    };

    const trigger = ScrollTrigger.create({
      trigger: wrapper,
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      onUpdate: (self) => {
        updateVideos(self.progress);
        updateText(self.progress);
      },
    });

    return () => {
      trigger.kill();
      videoA.removeEventListener("loadedmetadata", onLoadedA);
      videoB.removeEventListener("loadedmetadata", onLoadedB);
    };
  }, [reducedMotion]);

  return { wrapperRef, videoARef, videoBRef, textRef };
}
