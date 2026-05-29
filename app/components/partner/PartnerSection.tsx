"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function PartnerSection() {
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
      className="py-20 md:py-32"
      style={{
        background: "#002227",
        backgroundImage:
          "url('/green-aurora-with-aurora-borealis-visible-background 1.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col items-center">
          {/* Main Heading */}
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl text-white text-center leading-tight mb-12 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ fontFamily: "var(--font-caudex)" }}
          >
            Child Digital Security White Paper
          </h2>

          {/* PDF Viewer */}
          <div
            className={`w-full transition-all duration-1000 delay-300 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-white p-2">
              <iframe 
                src="/files/Child Digital Security White Paper - Guardien AI x Seraphguard Labs.pdf#toolbar=0" 
                className="w-full h-[600px] md:h-[800px] lg:h-[1000px] rounded-2xl"
                title="Child Digital Security White Paper"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
