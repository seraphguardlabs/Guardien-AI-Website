"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";

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
    title: "AI-Powered Risk Detection",
    description:
      "Detects cyberbullying, paedophilic threats, and harmful content in real time. Instant alerts let you intervene before damage is done.",
  },
  {
    icon: "clock",
    image: "/app_screens/command center.png",
    title: "Screen Time & Usage Control",
    description:
      "Set healthy limits by app, schedule internet downtime, and track daily usage — all from a single parent dashboard.",
    stat: { value: "50.4%", label: "Daily non-school screen time reduction" },
  },
  {
    icon: "pin",
    image: "/app_screens/map screen.png",
    title: "Location & Safety Shield",
    description:
      "Track their location in real time, set safe-zone geofences, and receive instant alerts when they leave or arrive at school, home, or practice.",
  },
  {
    icon: "eye",
    image: "/app_screens/parent dashboard.png",
    title: "Parent Dashboard — Full Visibility",
    description:
      "See everything at a glance: app usage, location history, risk alerts, and device health — all in one real-time command centre.",
  },
  {
    icon: "trophy",
    image: "/app_screens/tasks screen.png",
    title: "Gamified Responsibility",
    description:
      "Kids earn screen time by completing chores and responsibilities. Build healthy habits through positive reinforcement.",
  },
];

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="features" className="relative w-full py-24 md:py-28 bg-[#FAF9F5]">
      <div className="container-wide">
        {/* Header */}
        <div
          className={`max-w-2xl mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <p className="eyebrow text-[#2F6FED] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2F6FED]" />
            What We Offer
          </p>
          <h2 className="headline-bold text-3xl md:text-4xl lg:text-5xl text-[#14181F] leading-tight mb-4">
            Every Threat, One Shield
          </h2>
          <p className="text-base text-[#14181F]/60 leading-relaxed">
            Comprehensive protection that adapts to your family&apos;s needs — from
            real-time risk detection to healthy screen habits.
          </p>
        </div>

        {/* Service card grid — one card per feature, all visible at once */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <div
              key={feat.title}
              className={`card-light flex flex-col overflow-hidden transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="p-7 pb-0">
                <div className="w-12 h-12 rounded-2xl bg-[#2F6FED]/10 border border-[#2F6FED]/20 flex items-center justify-center mb-5">
                  <Icon name={feat.icon} className="w-6 h-6 text-[#2F6FED]" />
                </div>
                <h3 className="headline-bold text-lg text-[#14181F] mb-2">{feat.title}</h3>
                <p className="text-sm text-[#14181F]/60 leading-relaxed mb-5">
                  {feat.description}
                </p>
                {feat.stat && (
                  <div className="flex items-baseline gap-2 mb-5">
                    <span className="headline-bold text-2xl text-[#2F6FED]">{feat.stat.value}</span>
                    <span className="text-xs text-[#14181F]/50">{feat.stat.label}</span>
                  </div>
                )}
              </div>
              <div className="relative h-56 mt-auto bg-[#EFEBE2]">
                <Image src={feat.image} alt={feat.title} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-contain object-bottom" loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
