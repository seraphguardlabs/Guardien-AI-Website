"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function DifferentSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      image:
        "/cheerful-mother-daughter-are-resting-home-listening-music-headphones-concept-happy-family-friendly-relations 1.webp",
      title: "Privacy-First Protection",
      subtitle: "On-device AI. End-to-end encryption.",
      description:
        "Zero data collection. Your child's information never leaves their phone and never gets sold",
    },
    {
      image:
        "/happy-female-friends-sitting-sofa-using-digital-tablet-mobile-phone 1.webp",
      title: "Modernize For Your Family",
      subtitle: "Adapting to every lifestyle.",
      description:
        "Flexible controls that work with your family's unique needs and values while maintaining safety",
    },
    {
      image: "/two-young-sisters-use-smartphone 1.webp",
      title: "Building Better Humans",
      subtitle: "Nurturing digital citizens.",
      description:
        "Teaching healthy online habits and critical thinking skills for the digital age",
    },
    {
      image: "/cheerful-excited-young-men-discussing-smartphone-apps 1.webp",
      title: "Redefining Big Tech's Grip",
      subtitle: "Taking back control.",
      description:
        "Breaking free from data harvesting and giving families power over their digital lives",
    },
    {
      image: "/mother-daughter-using-mobile-living-room 1.webp",
      title: "Reassuring Big Hearts",
      subtitle: "Peace of mind for parents.",
      description:
        "Real-time insights and alerts that let you protect without hovering",
    },
    {
      image:
        "/two-beautiful-young-woman-friends-using-digital-tablet-home (1) 3.webp",
      title: "Responsibility Rewarded",
      subtitle: "Encouraging independence.",
      description:
        "Gradual freedom as children demonstrate responsible digital behavior",
    },
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section
      ref={sectionRef}
      className="w-full py-18 overflow-hidden"
      style={{ backgroundColor: "#DBE3E5" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Heading */}
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[#001517] mb-16 transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
          style={{ fontFamily: "var(--font-caudex)" }}
        >
          Built Differently, Because Your Family
          <br />
          Deserves Different.
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div
            className={`overflow-hidden rounded-2xl bg-[#DBE3E5] h-[320px] md:h-[350px] relative transition-all duration-1000 delay-200 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            <Image
              key={currentSlide}
              src={features[currentSlide].image}
              alt={features[currentSlide].title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain transition-all duration-700 ease-in-out animate-fadeIn"
              loading="lazy"
            />
          </div>

          {/* Right Column - Feature Card */}
          <div
            className={`relative bg-[#DBE3E5] rounded-3xl p-8 md:p-12 transition-all duration-1000 delay-400 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            {/* Feature Content */}
            <h3
              key={`title-${currentSlide}`}
              className="text-2xl md:text-3xl font-semibold text-[#001517] mb-3 transition-all duration-500 animate-fadeIn"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {features[currentSlide].title}
            </h3>

            <p
              key={`subtitle-${currentSlide}`}
              className="text-lg font-medium text-[#001517] mb-4 transition-all duration-500 delay-100 animate-fadeIn"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {features[currentSlide].subtitle}
            </p>

            <p
              key={`description-${currentSlide}`}
              className="text-base text-[#001517]/70 leading-relaxed mb-8 transition-all duration-500 delay-200 animate-fadeIn"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {features[currentSlide].description}
            </p>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between">
              {/* Dots */}
              <div className="flex gap-2">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                      currentSlide === index
                        ? "w-8 bg-[#005C67]"
                        : "w-2 bg-[#001517]/30 hover:bg-[#001517]/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Next Arrow */}
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border-2 border-[#001517] text-black flex items-center justify-center hover:bg-[#001517] hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-300"
                aria-label="Next slide"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transform group-hover:translate-x-0.5 transition-transform"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
