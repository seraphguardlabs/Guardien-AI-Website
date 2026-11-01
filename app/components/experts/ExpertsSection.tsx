"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const disciplines = [
  {
    id: "psychology",
    tag: "Behavioral Sciences",
    title: "Child Psychology & Neurodevelopment",
    lead: "Designing AI interventions that protect without alienating.",
    description:
      "Our research studies how algorithmic recommendation engines exploit adolescent dopamine feedback loops. We craft protective boundaries that cultivate intrinsic digital self-discipline, preserving mutual trust between parents and children.",
    highlights: [
      "Circadian sleep rhythm protection triggers",
      "Non-punitive screen time transition prompts",
      "Context-aware screen wellness metrics",
    ],
  },
  {
    id: "cryptography",
    tag: "Edge Computing",
    title: "Zero-Knowledge Cryptography & Local AI",
    lead: "Privacy-preserving on-device neural processing.",
    description:
      "Cloud-based child monitoring introduces unacceptable surveillance risks. We pioneer edge intelligence architectures that evaluate safety locally on the child's device, ensuring zero personal conversations, images, or GPS coordinates are transmitted to remote servers.",
    highlights: [
      "On-device neural inference with zero cloud telemetry",
      "End-to-end cryptographic isolation of child data",
      "Full compliance with COPPA, GDPR-K, & UNCRC standards",
    ],
  },
  {
    id: "adversarial",
    tag: "Threat Intelligence",
    title: "Adversarial Threat Interception",
    lead: "Pre-empting emergent online predation & cyber harm.",
    description:
      "Online predators constantly evolve obfuscated syntax and manipulative tactics to bypass legacy filters. Our models continuously benchmark conversational threats, grooming progressions, and coercion signals to intervene before harm occurs.",
    highlights: [
      "Contextual grooming & coercion syntax recognition",
      "Subtle cyberbullying & exclusion vector detection",
      "Zero false-positive algorithmic precision rating",
    ],
  },
];

export default function ExpertsSection() {
  const [activeTab, setActiveTab] = useState(0);
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

  const active = disciplines[activeTab];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#060f1a] text-white overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="blob top-1/4 -left-20 w-80 h-80 opacity-20" style={{ backgroundColor: "#2F6FED" }} />
      <div className="blob bottom-10 -right-20 w-80 h-80 opacity-20" style={{ backgroundColor: "#38BDF8" }} />

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <p
            className={`eyebrow text-[#38BDF8] mb-4 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
            Multidisciplinary Scientific Framework
          </p>

          <h2
            className={`headline-bold text-3xl md:text-4xl lg:text-5xl text-white leading-[1.1] mb-6 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
          >
            Engineered with Child Safety Experts
          </h2>

          <p
            className={`text-base md:text-lg text-white/75 font-light leading-relaxed transition-all duration-1000 delay-100 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Real digital safety cannot be solved through brute-force surveillance. We unite
            pediatric psychologists, machine learning researchers, and privacy cryptographers
            to build ethical, trustworthy safeguards.
          </p>
        </div>

        {/* Interactive Discipline Showcase */}
        <div
          className={`relative rounded-[2.5rem] bg-gradient-to-b from-[#0c1c2e]/90 to-[#071322]/95 border border-white/12 shadow-[0_24px_80px_rgba(0,0,0,0.6)] backdrop-blur-xl p-8 sm:p-12 lg:p-16 mb-20 transition-all duration-1000 delay-200 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Tab Selection Navigation */}
          <div className="flex flex-wrap gap-3 pb-8 mb-8 border-b border-white/10">
            {disciplines.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeTab === idx
                    ? "bg-[#2F6FED] text-white shadow-lg shadow-[#2F6FED]/30 scale-105"
                    : "bg-white/05 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Active Tab Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[260px]">
            <div className="lg:col-span-7">
              <span className="inline-block px-3 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/25 text-[#38BDF8] text-xs font-semibold uppercase tracking-wider mb-4">
                {active.tag}
              </span>
              <h3 className="headline-bold text-2xl sm:text-3xl text-white mb-3">
                {active.title}
              </h3>
              <p className="text-white/90 text-base font-medium mb-4">
                {active.lead}
              </p>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6 font-light">
                {active.description}
              </p>
            </div>

            <div className="lg:col-span-5 bg-white/05 border border-white/10 rounded-2xl p-6 sm:p-8">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#38BDF8] mb-4">
                Core Methodology Highlights
              </h4>
              <ul className="space-y-3.5">
                {active.highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-white/80">
                    <span className="w-5 h-5 rounded-full bg-[#2F6FED]/20 border border-[#38BDF8]/30 flex items-center justify-center flex-shrink-0 mt-0.5 text-[#38BDF8]">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Research Collaboration Banner */}
        <div
          className={`relative rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-[#0d2238] via-[#0b1c2f] to-[#143254] border border-white/15 p-8 sm:p-12 lg:p-14 transition-all duration-1000 delay-300 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Ambient inner glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#38BDF8]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/25 text-[#38BDF8] text-xs font-semibold tracking-wider uppercase mb-4">
                Academic & Institutional Partnerships
              </div>
              <h3 className="headline-bold text-2xl sm:text-3xl text-white mb-3">
                Collaborate With Our Child Safety Labs
              </h3>
              <p className="text-white/75 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
                Are you a researcher, university, or child welfare organization? We provide
                access to anonymized benchmark studies, ethical AI evaluations, and collaborative
                research initiatives.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 lg:items-end justify-center">
              <Link
                href="/join-mission"
                className="chip-pop px-7 py-3.5 text-center text-sm font-semibold shadow-lg shadow-[#2F6FED]/30 w-full sm:w-auto lg:w-full"
              >
                Join Our Mission
              </Link>
              <Link
                href="/#contact"
                className="btn-pill btn-pill-ghost px-7 py-3.5 text-center text-sm w-full sm:w-auto lg:w-full"
              >
                Contact Research Lab
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
