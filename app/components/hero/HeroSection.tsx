"use client";

import { useState, useEffect } from "react";
import Header from "./Header";
import HeroContent from "./HeroContent";

function useIsSlowConnection() {
  const [slow, setSlow] = useState(false);

  useEffect(() => {
    const conn = (navigator as Navigator & { connection?: { effectiveType?: string; saveData?: boolean } }).connection;
    if (!conn) return;

    const check = () => {
      setSlow(
        conn.saveData === true ||
          conn.effectiveType === "slow-2g" ||
          conn.effectiveType === "2g"
      );
    };

    check();
    conn.addEventListener("change", check);
    return () => conn.removeEventListener("change", check);
  }, []);

  return slow;
}

export default function HeroSection() {
  const isSlow = useIsSlowConnection();

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        {/* Desktop / landscape */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
          src={isSlow ? "/hero-16-9-lite.mp4" : "/hero-16-9.mp4"}
        />
        {/* Mobile / portrait */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="md:hidden absolute inset-0 w-full h-full object-cover"
          src={isSlow ? "/hero-9-16-lite.mp4" : "/hero-9-16.mp4"}
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
