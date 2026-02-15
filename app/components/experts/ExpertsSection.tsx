"use client";

import { useState } from "react";

export default function ExpertsSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 1,
      category: "Energy and Utilities",
      description:
        "Lorem ipsum dolor sit amet cons ectetur dipiscing elit. Lorem ipsum dolor sit amet cons ectetur dipiscing elit.",
    },
    {
      id: 2,
      category: "Healthcare",
      description:
        "Lorem ipsum dolor sit amet cons ectetur dipiscing elit. Lorem ipsum dolor sit amet cons ectetur dipiscing elit.",
    },
    {
      id: 3,
      category: "Technology",
      description:
        "Lorem ipsum dolor sit amet cons ectetur dipiscing elit. Lorem ipsum dolor sit amet cons ectetur dipiscing elit.",
    },
  ];

  return (
    <section className="py-20 md:py-32" style={{ background: "#002227" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content - Title and Navigation */}
          <div className="space-y-8">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight"
              style={{ fontFamily: "var(--font-caudex)" }}
            >
              Experts Choice
            </h2>

            {/* Slide Navigation Dots */}
            <div className="flex gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === activeSlide
                      ? "w-12 bg-white"
                      : "w-8 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Content - Slide Information */}
          <div className="space-y-6">
            {/* Category Tag */}
            <div
              className="text-sm md:text-base text-white font-light"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {slides[activeSlide].category}
            </div>

            {/* Description */}
            <p
              className="text-lg md:text-xl text-white leading-relaxed"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {slides[activeSlide].description}
            </p>

            {/* Read More Link */}
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[#FF6B35] hover:text-[#FF8555] transition-colors group"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              <span className="text-base font-medium">Read more</span>
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
