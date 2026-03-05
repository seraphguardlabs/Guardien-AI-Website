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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Main Heading */}
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl text-white leading-tight transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              }`}
              style={{ fontFamily: "var(--font-caudex)" }}
            >
              Every Threat, One Shield
            </h2>

            {/* Subheading */}
            <p
              className={`text-xl md:text-2xl text-white font-light transition-all duration-1000 delay-200 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              }`}
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              A trusted partner for parents -
              <br />
              protecting children while
            </p>

            {/* Body Text */}
            <div
              className={`text-sm md:text-base text-white/80 leading-relaxed space-y-4 transition-all duration-1000 delay-400 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              }`}
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              <p>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, Borem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam eu turpis molestie, dictum
                est a, mattis tellus. Sed dignissim, metus nec fringilla
                accumsan, risus sem sollicitudin lacus, ut interdum tellus elit
                sed risus. Maecenas eget condimentum velit, sit amet feugiat
                lectus. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra.
              </p>
            </div>

            {/* Read More Link */}
            <Link
              href="/partner-details"
              className={`inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 hover:gap-3 transition-all duration-300 group ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              }`}
              style={{
                fontFamily: "var(--font-poppins)",
                transitionDelay: isVisible ? "600ms" : "0ms",
              }}
            >
              <span className="text-base">Read more</span>
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
            </Link>
          </div>

          {/* Right Side - Image */}
          <div
            className={`relative w-full h-[500px] md:h-[600px] lg:h-[700px] transition-all duration-1000 delay-300 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 translate-x-20 scale-95"
            }`}
          >
            <Image
              src="/Group 1000002418.png"
              alt="Team collaboration"
              fill
              className="object-contain hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
