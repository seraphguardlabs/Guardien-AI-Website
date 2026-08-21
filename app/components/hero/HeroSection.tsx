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
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        {/* Desktop / landscape */}
        <video
          ref={desktopRef}
          autoPlay
          loop
          muted
          playsInline
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
          src={useLite ? "/hero-16-9-lite.mp4" : "/hero-16-9.mp4"}
        />
        {/* Mobile / portrait */}
        <video
          ref={mobileRef}
          autoPlay
          loop
          muted
          playsInline
          className="md:hidden absolute inset-0 w-full h-full object-cover"
          src={useLite ? "/hero-9-16-lite.mp4" : "/hero-9-16.mp4"}
        />
        {/* Dark overlay — desktop heavy, mobile/tablet light */}
        <div
          className="lg:hidden absolute inset-0"
          style={{ backgroundColor: "rgba(0, 29, 50, 0.35)" }}
        />
        <div
          className="hidden lg:block absolute inset-0"
          style={{
            background:
              "linear-gradient(102deg, #001a2d 9.8%, rgba(159, 191, 214, 0.10) 58.96%)",
          }}
        />
      </div>

      {/* Header Navigation */}
      <Header />

      {/* Hero Content */}
      <HeroContent />
    </section>
  );
}
