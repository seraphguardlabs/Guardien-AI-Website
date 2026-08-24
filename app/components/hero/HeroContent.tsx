"use client";

import Link from "next/link";
import { useState, useEffect, type RefObject } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroStats = [
  { value: "50.4%", label: "Daily Non-School Screen Time" },
  { value: "12.7", label: "Average Age Children Explicit Content Dropped" },
  { value: "3+", label: "Hours of Social Media Doubles Mental Health" },
  { value: "300+", label: "Millions of Children Abused Online" },
];

const statBadgeVariants = {
  initial: {
    x: -60,
    y: 35,
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 380,
      damping: 24,
    },
  },
  exit: {
    x: -90,
    y: 0,
    opacity: 0,
    scale: 0.92,
    transition: {
      duration: 0.28,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export default function HeroContent({
  desktopVideoRef,
  desktopVideoSrc,
  mobileVideoRef,
  mobileVideoSrc,
}: {
  desktopVideoRef: RefObject<HTMLVideoElement | null>;
  desktopVideoSrc: string;
  mobileVideoRef: RefObject<HTMLVideoElement | null>;
  mobileVideoSrc: string;
}) {
  const [statIndex, setStatIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStatIndex((prev) => (prev + 1) % heroStats.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const currentStat = heroStats[statIndex];

  return (
    <div className="relative z-10 w-full pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left — copy */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h1
            className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold uppercase text-white leading-[1.05] tracking-tight mb-6 opacity-0 animate-fadeIn"
            style={{ fontFamily: "var(--font-poppins)", animationDelay: "300ms" }}
          >
            Making The Digital
            <br />
            World Safer For
            <br />
            Children
          </h1>

          <p
            className="text-base md:text-lg text-white/70 mb-8 max-w-xl font-light opacity-0 animate-fadeIn"
            style={{ animationDelay: "450ms" }}
          >
            A trusted partner for parents - protecting{" "}
            <br className="hidden md:block" />
            children while respecting privacy.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:items-start lg:justify-start opacity-0 animate-fadeIn"
            style={{ animationDelay: "600ms" }}
          >
            <Link href="#contact" className="chip-pop px-7 py-3.5 text-[0.9375rem]">
              Request Early Access
            </Link>

            <div className="hidden sm:block">
              <Link href="#features" className="btn-pill btn-pill-ghost">
                Watch Demo
              </Link>
            </div>
          </div>
        </div>

        {/* Right — framed video (placed below copy on mobile, constrained to fit screen height) */}
        <div className="relative w-full max-w-md lg:max-w-none mx-auto opacity-0 animate-fadeIn" style={{ animationDelay: "500ms" }}>
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/12] lg:aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
            {/* Desktop / landscape source */}
            <video
              ref={desktopVideoRef}
              autoPlay
              loop
              muted
              playsInline
              className="hidden md:block absolute inset-0 w-full h-full object-cover"
              src={desktopVideoSrc}
            />
            {/* Mobile / portrait source */}
            <video
              ref={mobileVideoRef}
              autoPlay
              loop
              muted
              playsInline
              className="md:hidden absolute inset-0 w-full h-full object-cover"
              src={mobileVideoSrc}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(180deg, rgba(6,15,26,0) 55%, rgba(6,15,26,0.55) 100%)" }}
            />
          </div>

          {/* Floating trust badge with animated text only */}
          <div className="card-light absolute -bottom-5 left-1/2 -translate-x-1/2 sm:left-6 sm:translate-x-0 h-[72px] sm:h-[76px] w-[265px] sm:w-[310px] px-4 sm:px-5 py-3 flex items-center shadow-xl border border-[#14181F]/10 bg-white/95 backdrop-blur-md rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={statIndex}
                variants={statBadgeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex items-center gap-3.5 w-full"
              >
                <span className="headline-bold text-2xl sm:text-3xl text-[#2F6FED] flex-shrink-0">
                  {currentStat.value}
                </span>
                <span className="text-xs text-[#14181F]/70 font-medium leading-snug">
                  {currentStat.label}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

