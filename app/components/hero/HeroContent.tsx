import Link from "next/link";
import type { RefObject } from "react";

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

            <Link href="#features" className="btn-pill btn-pill-ghost">
              Watch Demo
            </Link>
          </div>
        </div>

        {/* Right — framed video, referenced-design "product shot" treatment */}
        <div className="relative w-full opacity-0 animate-fadeIn" style={{ animationDelay: "500ms" }}>
          <div className="relative w-full aspect-[4/5] sm:aspect-[16/12] lg:aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10">
            {/* Desktop / landscape source, cropped to fill the frame */}
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

          {/* Floating trust badge — reuses the real stat from the strip below, not new copy */}
          <div className="card-light absolute -bottom-6 -left-4 sm:left-6 px-5 py-4 flex items-center gap-3 shadow-xl">
            <span className="headline-bold text-2xl text-[#2F6FED]">50.4%</span>
            <span className="text-xs text-[#14181F]/60 leading-snug max-w-[8rem]">
              Daily non-school screen time reduction
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
