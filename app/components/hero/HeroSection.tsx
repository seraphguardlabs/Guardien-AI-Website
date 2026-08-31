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
    <section className="relative w-full min-h-screen bg-[#060f1a] overflow-hidden flex flex-col">
      {/* Full-bleed video background: 16:9 for laptop, 9:16 for mobile */}
      <video
        ref={desktopRef}
        autoPlay
        loop
        muted
        playsInline
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
        src={useLite ? "/hero-16-9-lite.mp4" : "/hero-16-9.mp4"}
      />
      <video
        ref={mobileRef}
        autoPlay
        loop
        muted
        playsInline
        className="md:hidden absolute inset-0 w-full h-full object-cover"
        src={useLite ? "/hero-9-16-lite.mp4" : "/hero-9-16.mp4"}
      />
      {/* Dark overlay for text legibility */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: "linear-gradient(180deg, rgba(6,15,26,0.55) 0%, rgba(6,15,26,0.35) 45%, rgba(6,15,26,0.75) 100%)" }}
      />

      {/* Top-only dark-to-transparent fade for the header area */}
      <div
        className="absolute top-0 left-0 right-0 h-40 z-[2] pointer-events-none"
        style={{ background: "linear-gradient(180deg, rgba(6,15,26,0.85) 0%, rgba(6,15,26,0) 100%)" }}
      />

      {/* Ambient glow */}
      <div className="blob top-1/3 -right-32 w-[28rem] h-[28rem] opacity-20 z-[2]" style={{ backgroundColor: "#38BDF8" }} />

      <Header />

      <HeroContent />
    </section>
  );
}
