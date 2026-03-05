"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function MissionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="mission"
      className="relative w-full min-h-screen flex items-center justify-center py-20 overflow-hidden"
      style={{ backgroundColor: "#DBE3E5" }}
    >
      {/* Background SVG Pattern */}
      <div className="absolute inset-0 z-0 opacity-500">
        <Image
          src="/image 3280.webp"
          alt="Background pattern"
          fill
          sizes="100vw"
          className="object-cover"
          loading="lazy"
          quality={60}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Small Label */}
        <p
          className={`text-0.5xl md:text-xl lg:text-xl text-[#143039] mb-2 font-medium tracking-wide transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-20"
          }`}
        >
          Why We Exist
        </p>

        {/* Main Heading */}
        <h1
          className="text-4xl md:text-5xl lg:text-6xl text-[#143039] leading-tight"
          style={{ fontFamily: "var(--font-caudex)" }}
        >
          <span
            className={`block font-bold transition-all duration-1000 delay-200 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-32"
            }`}
          >
            Protecting and Empowering
          </span>
          <br />
          <span
            className={`block font-light transition-all duration-1000 delay-400 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-32"
            }`}
          >
            digital childhood through ethical,
          </span>
          <br />
          <span
            className={`block font-bold transition-all duration-1000 delay-600 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-32"
            }`}
          >
            Privacy-First AI
          </span>
        </h1>
      </div>
    </section>
  );
}
