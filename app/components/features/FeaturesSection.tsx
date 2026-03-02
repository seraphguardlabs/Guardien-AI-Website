"use client";

import { useEffect, useRef, useState } from "react";

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const rightFeatures = [
    {
      image: "/father-son-looking-smartphone-home 1.svg",
      title: "AI-Powered Risk Detection",
      description: "Detects cyberbullying, paedophilic threats...",
    },
    {
      image: "/medium-shot-arab-women-with-smartphone 3.svg",
      title: "Screen Time & Usage Control",
      description: "Set healthy limits by app, schedule internet...",
    },
    {
      image: "/smiling-lady-using-tablet-smartphone-outdoor-cafe 1.svg",
      title: "Location & Safety Shield",
      description: "Track their location in real time, get alerts...",
    },
    {
      image: "/father-son-looking-smartphone-home 1.svg",
      title: "Exam Mode-Distraction-Free",
      description: "Locks everything except study apps during...",
    },
    {
      image: "/medium-shot-arab-women-with-smartphone 3.svg",
      title: "Gamified Responsibility",
      description: "Kids earn screen time by completing chores...",
    },
  ];

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
    if (scrollHeight <= clientHeight) return;
    
    // Calculate which item is currently in view
    const maxScroll = scrollHeight - clientHeight;
    const scrollRatio = scrollTop / maxScroll;
    const index = Math.min(
      rightFeatures.length - 1,
      Math.max(0, Math.round(scrollRatio * (rightFeatures.length - 1)))
    );
    setCurrentSlide(index);
  };

  const goToSlide = (index: number) => {
    if (!scrollContainerRef.current) return;
    const { scrollHeight, clientHeight } = scrollContainerRef.current;
    if (scrollHeight <= clientHeight) return;
    
    // Calculate target scroll position
    const maxScroll = scrollHeight - clientHeight;
    const targetScroll = (maxScroll / (rightFeatures.length - 1)) * index;
    
    scrollContainerRef.current.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

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
      className="relative w-full py-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #001A1B 0%, #003D45 50%, #005C67 100%)",
      }}
    >
      <style dangerouslySetInnerHTML={{
        __html: `
        .feature-scroll::-webkit-scrollbar {
          display: none;
        }
        .feature-scroll {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `
      }} />
      {/* Background Aurora SVG */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="/green-aurora-with-aurora-borealis-visible-background 1.svg"
          alt="Aurora background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Main Heading */}
        <h2
          className={`text-4xl md:text-5xl lg:text-6xl font-light text-white mb-12 transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
          style={{ fontFamily: "var(--font-caudex)" }}
        >
          Every Threat, One Shield
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          {/* Left Column - Main Feature */}
          <div className="space-y-6 flex flex-col justify-center">
            {/* Large Image */}
            <div
              className={`overflow-hidden rounded-4xl w-full h-[450px] relative transition-all duration-1000 delay-200 ease-out ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <img
                src="/medium-shot-women-spending-quality-time-outdoors 1.svg"
                alt="Women looking at smartphone"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Feature Title */}
            <h4
              className={`text-lg font-light text-[#93D4FF] mb-1 transition-all duration-1000 delay-400 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
              style={{ fontFamily: "var(--font-caudex)" }}
            >
              Intelligent Content & App Filtering
            </h4>

            {/* Feature Description */}
            <p
              className={`text-base text-white mb-3 leading-relaxed font-light transition-all duration-1000 delay-500 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Blocks harmful & inappropriate content instantly & alerts you when
              your child searches for drugs, violence or self-harm before damage
              is done.
            </p>
          </div>

          {/* Right Column - Feature Cards & Navigation */}
          <div className="flex gap-4 items-center">
            {/* Scrollable Features */}
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="h-[550px] overflow-y-auto space-y-8 pr-2 feature-scroll flex flex-col justify-start w-full"
            >
              {rightFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`flex gap-8 items-center group transition-all duration-1000 ease-out ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-20"
                  }`}
                  style={{ transitionDelay: `${200 + index * 200}ms` }}
                >
                  {/* Small Image */}
                  <div className="flex-shrink-0 overflow-hidden rounded-2xl w-40 h-40 transform group-hover:scale-105 group-hover:shadow-2xl transition-all duration-500">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <h4
                      className="text-lg font-light text-[#93D4FF] mb-1 group-hover:text-white transition-colors duration-300"
                      style={{ fontFamily: "var(--font-caudex)" }}
                    >
                      {feature.title}
                    </h4>
                    <p
                      className="text-base text-white mb-3 leading-relaxed font-light"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {feature.description}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-sm text-[#FFFFFF] hover:text-white hover:gap-3 transition-all duration-300 font-light"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      Learn more →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Vertical Navigation Dots */}
            <div className="flex flex-col gap-2 items-center self-start justify-center pt-4">
              {rightFeatures.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 rounded-full transition-all duration-300 hover:scale-125 ${
                    currentSlide === index
                      ? "h-8 bg-white"
                      : "h-2 bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
