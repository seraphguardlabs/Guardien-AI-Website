"use client";

import { useEffect, useRef, useState } from "react";

const pillars = [
  {
    number: "01",
    tag: "Threat Intelligence",
    title: "Behavioral Threat Modeling",
    highlight: "Contextual Interception",
    description:
      "Traditional keyword filters miss 85% of grooming and cyberbullying nuances. Our research outlines deep contextual neural networks trained to detect conversational manipulation, coercion, and predation in real-time.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      </svg>
    ),
  },
  {
    number: "02",
    tag: "Edge Computing",
    title: "Zero-Knowledge On-Device AI",
    highlight: "Privacy by Design",
    description:
      "Children deserve digital privacy. We demonstrate how lightweight quantized models execute directly on consumer phone chipsets, analyzing risks locally without transmitting personal photos, audio, or chats to cloud servers.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    number: "03",
    tag: "Pediatric Wellness",
    title: "Neurodevelopmental Screen Boundaries",
    highlight: "Behavioral Science",
    description:
      "Excessive non-school screen exposure directly correlates with increased anxiety and sleep fragmentation. Our framework replaces blunt app lockouts with science-backed cooldown cycles that cultivate intrinsic self-regulation.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "04",
    tag: "Family Dynamics",
    title: "Collaborative Safety Co-Governance",
    highlight: "Trust Over Spyware",
    description:
      "Covert parental spy apps foster resentment and secrecy. Our research benchmarks demonstrate that transparent risk alerts and collaborative digital boundaries produce 4x higher compliance and open parent-child communication.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

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
      { threshold: 0.15 },
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
      className="relative py-24 md:py-32 bg-[#F2EFE8] overflow-hidden"
    >
      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <p
            className={`eyebrow text-[#2F6FED] mb-4 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#2F6FED]" />
            Key Findings & Methodology
          </p>

          <h2
            className={`headline-bold text-3xl md:text-4xl lg:text-5xl text-[#14181F] leading-[1.1] mb-6 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
          >
            Core Pillars of Our Safety Framework
          </h2>

          <p
            className={`text-base md:text-lg text-[#14181F]/70 leading-relaxed font-light transition-all duration-1000 delay-100 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Our white paper outlines how next-generation AI solves the dual imperatives of
            child welfare: delivering impenetrable protection against predators and cyber threats
            while safeguarding dignity, autonomy, and civil privacy.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.number}
              className={`card-light group relative p-8 sm:p-10 transition-all duration-1000 ease-out hover:shadow-2xl hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${150 + index * 100}ms` }}
            >
              {/* Pillar Number watermark */}
              <span className="headline-bold absolute top-6 right-8 text-2xl text-[#14181F]/10 group-hover:text-[#2F6FED]/20 transition-colors">
                {pillar.number}
              </span>

              {/* Icon & Tag */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#2F6FED]/10 border border-[#2F6FED]/20 flex items-center justify-center text-[#2F6FED] group-hover:bg-[#2F6FED] group-hover:text-white transition-colors duration-300">
                  {pillar.icon}
                </div>
                <div>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#2F6FED]">
                    {pillar.tag}
                  </span>
                  <span className="text-xs text-[#14181F]/50 font-medium">
                    {pillar.highlight}
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="headline-bold text-xl sm:text-2xl text-[#14181F] mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm sm:text-base text-[#14181F]/70 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
