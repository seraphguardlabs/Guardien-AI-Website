"use client";

import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import HeroContent from "./HeroContent";

export default function HeroSection() {
  const [useLite, setUseLite] = useState(true);
  const desktopRef = useRef<HTMLVideoElement>(null);
  const mobileRef = useRef<HTMLVideoElement>(null);

  // Preload the full-size video in the background, then swap in
  useEffect(() => {
    const desktopSrc = "/hero-16-9.mp4";
    const mobileSrc = "/hero-9-16.mp4";

    let cancelled = false;

    const preloadVideo = (src: string): Promise<void> =>
      new Promise((resolve) => {
        const v = document.createElement("video");
        v.preload = "auto";
        v.src = src;
        v.oncanplaythrough = () => resolve();
        v.onerror = () => resolve();
      });

    Promise.all([preloadVideo(desktopSrc), preloadVideo(mobileSrc)]).then(() => {
      if (!cancelled) setUseLite(false);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="relative w-full bg-[#060f1a] overflow-hidden">
      {/* Ambient glow — replaces the full-bleed video overlay with a split layout. */}
      <div className="blob -top-40 -left-24 w-[32rem] h-[32rem] opacity-30" style={{ backgroundColor: "#2F6FED" }} />
      <div className="blob top-1/3 -right-32 w-[28rem] h-[28rem] opacity-20" style={{ backgroundColor: "#38BDF8" }} />

      <Header />

      <HeroContent
        desktopVideoRef={desktopRef}
        desktopVideoSrc={useLite ? "/hero-16-9-lite.mp4" : "/hero-16-9.mp4"}
        mobileVideoRef={mobileRef}
        mobileVideoSrc={useLite ? "/hero-9-16-lite.mp4" : "/hero-9-16.mp4"}
      />
    </section>
  );
}
