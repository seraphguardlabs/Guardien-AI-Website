"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const icons: Record<string, ReactNode> = {
  shield: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" strokeWidth={1.75} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 7.5V12l3 2" />
    </>
  ),
  pin: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 21s-6.5-5.7-6.5-11A6.5 6.5 0 0112 3.5a6.5 6.5 0 016.5 6.5c0 5.3-6.5 11-6.5 11z" />
      <circle cx="12" cy="10.5" r="2.25" strokeWidth={1.75} />
    </>
  ),
  eye: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7S2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="3" strokeWidth={1.75} />
    </>
  ),
  trophy: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8 4h8v4a4 4 0 01-8 0V4zM8 4H4.5a2 2 0 000 6.5H8M16 4h3.5a2 2 0 010 6.5H16M12 12v3m0 0h3m-3 0H9m3 4v-1" />
  ),
};

function Icon({ name, className }: { name: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      {icons[name]}
    </svg>
  );
}

const features = [
  {
    icon: "shield",
    image: "/app_screens/safety alert.png",
    tag: "Real-time Protection",
    title: "AI-Powered Risk Detection",
    description:
      "Detects cyberbullying, paedophilic threats, and harmful content in real time. Instant alerts let you intervene before damage is done.",
  },
  {
    icon: "clock",
    image: "/app_screens/command center.png",
    tag: "Healthy Habits",
    title: "Screen Time & Usage Control",
    description:
      "Set healthy limits by app, schedule internet downtime and track daily usage in one parent dashboard.",
  },
  {
    icon: "pin",
    image: "/app_screens/map screen.png",
    tag: "Live Geo Tracking",
    title: "Location & Safety Shield",
    description:
      "Track their location in real time, set safe-zone geofences, and receive instant alerts when they leave or arrive at school, home, or practice.",
  },
  {
    icon: "eye",
    image: "/app_screens/parent dashboard.png",
    tag: "Total Control",
    title: "Parent Dashboard with Full Visibility",
    description:
      "See everything at a glance. App usage, location history, risk alerts and device health in one real time command centre.",
  },
  {
    icon: "trophy",
    image: "/app_screens/tasks screen.png",
    tag: "Positive Motivation",
    title: "Gamified Responsibility",
    description:
      "Kids earn screen time by completing chores and responsibilities. Build healthy habits through positive reinforcement.",
  },
];

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 120 : -120,
    opacity: 0,
  }),
};

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [[page, direction], setPage] = useState([0, 0]);

  const sectionRef = useRef<HTMLDivElement>(null);

  const featureIndex = Math.abs(page % features.length);
  const currentFeature = features[featureIndex];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setIsVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const paginate = (newDirection: number) => {
    setPage(([currentPage]) => [currentPage + newDirection, newDirection]);
  };

  const goToSlide = (targetIndex: number) => {
    const newDirection = targetIndex > featureIndex ? 1 : -1;
    setPage([targetIndex, newDirection]);
  };

  return (
    <section ref={sectionRef} id="features" className="relative w-full py-24 md:py-28 bg-[#FAF9F5] overflow-hidden">
      <div className="container-wide">
        {/* Header & Controls Row */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <div className="max-w-2xl">
            <p className="eyebrow text-[#2F6FED] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2F6FED]" />
              What We Offer
            </p>
            <h2 className="headline-bold text-3xl md:text-4xl lg:text-5xl text-[#14181F] leading-tight mb-4">
              Every Threat, One Shield
            </h2>
            <p className="text-base text-[#14181F]/60 leading-relaxed">
              Comprehensive protection that adapts to your family&apos;s needs, from
              real-time risk detection to healthy screen habits.
            </p>
          </div>

          {/* Index Indicator */}
          <div className="self-start md:self-end text-left md:text-right">
            <span className="block text-xs font-bold uppercase tracking-widest text-[#2F6FED]">
              Feature 0{featureIndex + 1}
            </span>
            <span className="text-xs font-semibold text-[#14181F]/40 font-mono">
              of 0{features.length}
            </span>
          </div>
        </div>

        {/* Main Single-Slide Carousel Area */}
        <div
          className={`relative transition-all duration-1000 ease-out min-h-[480px] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.25 },
              }}
              className="w-full"
            >
              <div className="card-light rounded-3xl border border-[#14181F]/10 bg-white shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
                {/* Left Side: App Screen Image Visual */}
                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 bg-[#EFEBE2] flex items-center justify-center relative overflow-hidden rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl">
                  {/* Subtle Background Glow */}
                  <div className="absolute w-64 h-64 bg-[#2F6FED]/10 rounded-full blur-3xl pointer-events-none" />

                  <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] max-w-[320px] sm:max-w-[340px] drop-shadow-2xl transition-transform duration-500 hover:scale-105">
                    <Image
                      src={currentFeature.image}
                      alt={currentFeature.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-contain object-center"
                      priority
                    />
                  </div>
                </div>

                {/* Right Side: Feature Details & Content */}
                <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                  <div>
                    {/* Top Tag & Category */}
                    <div className="flex items-center gap-3 mb-6">
                      <span className="px-3.5 py-1.5 rounded-full bg-[#2F6FED]/10 text-[#2F6FED] text-xs font-bold tracking-wide uppercase">
                        {currentFeature.tag}
                      </span>
                    </div>

                    {/* Icon + Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#2F6FED]/10 border border-[#2F6FED]/20 flex items-center justify-center flex-shrink-0 text-[#2F6FED]">
                        <Icon name={currentFeature.icon} className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="headline-bold text-2xl sm:text-3xl lg:text-4xl text-[#14181F] leading-tight">
                          {currentFeature.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-base sm:text-lg text-[#14181F]/70 leading-relaxed mb-6 max-w-xl">
                      {currentFeature.description}
                    </p>
                  </div>

                  {/* Quick Feature Selection Tabs / Indicator Dots */}
                  <div className="pt-6 border-t border-[#14181F]/08 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-hide">
                      {features.map((feat, idx) => (
                        <button
                          key={feat.title}
                          onClick={() => goToSlide(idx)}
                          aria-label={`Go to feature ${idx + 1}`}
                          className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                            featureIndex === idx
                              ? "bg-[#2F6FED] text-white shadow-sm"
                              : "bg-[#14181F]/05 text-[#14181F]/60 hover:bg-[#14181F]/10 hover:text-[#14181F]"
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-current" />
                          <span>0{idx + 1}</span>
                        </button>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => paginate(-1)}
                        className="w-8 h-8 rounded-full border border-[#14181F]/20 flex items-center justify-center text-[#14181F]/60 hover:text-[#2F6FED] hover:border-[#2F6FED] transition-colors cursor-pointer"
                        aria-label="Previous feature"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="15 18 9 12 15 6" />
                        </svg>
                      </button>
                      <button
                        onClick={() => paginate(1)}
                        className="w-8 h-8 rounded-full border border-[#14181F]/20 flex items-center justify-center text-[#14181F]/60 hover:text-[#2F6FED] hover:border-[#2F6FED] transition-colors cursor-pointer"
                        aria-label="Next feature"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}


