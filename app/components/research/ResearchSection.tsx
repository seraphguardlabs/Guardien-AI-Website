"use client";

import { useEffect, useRef, useState } from "react";

export default function ResearchSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
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
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      id="research"
      className="relative py-20 md:py-32 bg-[#E4EDF4] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Section Title */}
        <h2
          className={`text-4xl md:text-5xl lg:text-6xl text-[#001a2d] mb-16 md:mb-20 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ fontFamily: "var(--font-caudex)" }}
        >
          Latest Research
        </h2>

        {/* Research Item */}
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: isVisible ? "150ms" : "0ms" }}
        >
          <div className="space-y-4">
            <h3
              className="text-2xl md:text-3xl text-[#001a2d] leading-snug"
              style={{ fontFamily: "var(--font-caudex)" }}
            >
              Child Digital Security White Paper
            </h3>
            <p
              className="text-base md:text-lg text-[#001a2d]/65 leading-relaxed max-w-2xl"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Guardien AI x Seraphguard Labs comprehensive white paper on protecting
              children in the digital age.
            </p>
            <a
              href="/files/Child Digital Security White Paper - Guardien AI x Seraphguard Labs.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#025794] hover:text-[#013f6d] hover:gap-3 transition-all duration-300 group"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              <span className="text-base font-medium">Read White Paper</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
