"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Check = () => (
  <span className="w-5 h-5 rounded-full bg-[#2F6FED] flex items-center justify-center flex-shrink-0">
    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  </span>
);

export default function AcceleratorSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { value: "50.4%", label: "Daily Non-School Screen Time", targetNumber: 50.4, suffix: "%", decimals: 1 },
    { value: "12.7", label: "Average Age Children Explicit Content Dropped", targetNumber: 12.7, suffix: "", decimals: 1 },
    { value: "3+", label: "Hours of Social Media Doubles Mental Health", targetNumber: 3, suffix: "+", decimals: 0 },
    { value: "300+", label: "Millions of Children Abused Online", targetNumber: 300, suffix: "+", decimals: 0 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const frameRate = 60;
    const totalFrames = (duration / 1000) * frameRate;

    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;

      const newCounts = stats.map((stat) => {
        const easeOutProgress = 1 - Math.pow(1 - progress, 3);
        return stat.targetNumber * easeOutProgress;
      });

      setCounts(newCounts);

      if (frame >= totalFrames) {
        clearInterval(counter);
        setCounts(stats.map((stat) => stat.targetNumber));
      }
    }, 1000 / frameRate);

    return () => clearInterval(counter);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="w-full py-24 md:py-28 bg-[#F2EFE8] overflow-hidden">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — heading, pills, stat grid */}
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
            }`}
          >
            <p className="eyebrow text-[#2F6FED] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2F6FED]" />
              Why It Matters
            </p>
            <h2 className="headline-bold text-3xl md:text-4xl lg:text-5xl text-[#14181F] leading-tight mb-6">
              Getting a Safer Digital Childhood
            </h2>

            <div className="flex flex-wrap gap-3 mb-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-[#14181F] border border-[#14181F]/10">
                <Check />
                Privacy-First AI
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-[#14181F] border border-[#14181F]/10">
                <Check />
                AI-Powered Risk Detection
              </span>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 ease-out ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="headline-bold text-3xl md:text-4xl text-[#2F6FED] mb-1">
                    {counts[index].toFixed(stat.decimals)}
                    {stat.suffix}
                  </div>
                  <p className="text-sm text-[#14181F]/60 leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — circular photo with ribbon badge, referenced-design motif */}
          <div
            className={`relative mx-auto w-full max-w-sm aspect-square transition-all duration-1000 delay-200 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
            }`}
          >
            <div className="absolute inset-0 rounded-full overflow-hidden border-8 border-white shadow-xl">
              <Image
                src="/family-phone.webp"
                alt="Family using technology together"
                fill
                sizes="(max-width: 1024px) 60vw, 24rem"
                className="object-cover grayscale"
                loading="lazy"
              />
            </div>
            <div className="chip-pop absolute top-2 right-2 sm:top-4 sm:right-0 px-4 py-2 text-xs rotate-12 shadow-lg">
              Privacy-First AI
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
