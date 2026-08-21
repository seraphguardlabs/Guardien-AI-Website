"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
  type TransitionEvent,
} from "react";
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

function FeatureContent({ feat }: { feat: (typeof features)[number] }) {
  return (
    <>
      <div className="w-12 h-12 rounded-2xl bg-[#025794]/10 flex items-center justify-center mb-5">
        <Icon name={feat.icon} className="w-6 h-6 text-[#025794]" />
      </div>
      <h3
        className="text-2xl md:text-3xl font-bold text-[#001A2D] mb-3"
        style={{ fontFamily: "var(--font-caudex)" }}
      >
        {feat.title}
      </h3>
      <p className="text-base text-[#001A2D]/65 leading-relaxed max-w-md">
        {feat.description}
      </p>
      {feat.stat && (
        <div className="mt-5 flex items-baseline gap-2">
          <span className="text-3xl font-bold text-[#025794]" style={{ fontFamily: "var(--font-caudex)" }}>
            {feat.stat.value}
          </span>
          <span className="text-sm text-[#001A2D]/50">{feat.stat.label}</span>
        </div>
      )}
    </>
  );
}

// Duration of each half of the flip (rotate-out, then rotate-in). Kept short
// with a snappy deceleration curve so the transition reads as "instant", not laggy.
const FLIP_MS = 220;
const FLIP_EASING = "cubic-bezier(0.22, 1, 0.36, 1)";

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [active, setActive] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [animate, setAnimate] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval>>(null);
  const busy = useRef(false);
  const dirRef = useRef<"next" | "prev">("next");
  const pendingRef = useRef<number | null>(null);

  const startFlip = useCallback(
    (index: number, dir: "next" | "prev") => {
      if (busy.current || index === active) return;
      busy.current = true;
      dirRef.current = dir;
      pendingRef.current = index;
      setAnimate(true);
      // Rotate the current content away first.
      setRotation(dir === "next" ? -90 : 90);
    },
    [active],
  );

  // Driven by the real CSS transition (not a guessed setTimeout), so the two
  // halves of the flip always stay perfectly in sync with what's on screen.
  const handleFlipTransitionEnd = useCallback((e: TransitionEvent<HTMLDivElement>) => {
    if (e.propertyName !== "transform") return;

    if (pendingRef.current !== null) {
      // First half finished (content is edge-on / invisible): swap the
      // content and jump instantly to the opposite edge, no transition.
      const idx = pendingRef.current;
      pendingRef.current = null;
      setActive(idx);
      setAnimate(false);
      setRotation(dirRef.current === "next" ? 90 : -90);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimate(true);
          setRotation(0);
        });
      });
    } else {
      // Second half finished: flip is complete.
      busy.current = false;
    }
  }, []);

  const next = useCallback(() => {
    startFlip((active + 1) % features.length, "next");
  }, [active, startFlip]);

  const prevFn = useCallback(() => {
    startFlip((active - 1 + features.length) % features.length, "prev");
  }, [active, startFlip]);

  const goTo = useCallback(
    (index: number) => {
      if (index === active) return;
      const goingNext = index > active || (active === features.length - 1 && index === 0);
      startFlip(index, goingNext ? "next" : "prev");
    },
    [active, startFlip],
  );

  const flipStyle: CSSProperties = {
    transform: `rotateY(${rotation}deg)`,
    opacity: rotation === 0 ? 1 : 0,
    transition: animate
      ? `transform ${FLIP_MS}ms ${FLIP_EASING}, opacity ${FLIP_MS}ms ease-out`
      : "none",
  };

  const textFlipStyle: CSSProperties = isMobile
    ? { opacity: 1, transition: "none" }
    : flipStyle;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(next, 5000);
    return () => clearInterval(timerRef.current!);
  }, [next]);

  const pauseAuto = () => clearInterval(timerRef.current!);
  const resumeAuto = () => {
    clearInterval(timerRef.current!);
    timerRef.current = setInterval(next, 5000);
  };

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

  const feat = features[active];

  const dots = (
    <div className="flex gap-2">
      {features.map((f, i) => (
        <button
          key={i}
          onClick={() => goTo(i)}
          className={`h-2 rounded-full transition-all duration-300 ${
            i === active ? "w-8 bg-[#025794]" : "w-2 bg-[#001A2D]/15 hover:bg-[#001A2D]/30"
          }`}
          aria-label={`Go to ${f.title}`}
        />
      ))}
    </div>
  );

  const arrows = (
    <div className="flex gap-3">
      <button
        onClick={prevFn}
        className="w-10 h-10 md:w-11 md:h-11 rounded-full border-2 border-[#025794]/25 text-[#025794] flex items-center justify-center hover:bg-[#025794] hover:text-white hover:border-[#025794] hover:scale-110 transition-all duration-300"
        aria-label="Previous feature"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        onClick={next}
        className="w-10 h-10 md:w-11 md:h-11 rounded-full border-2 border-[#025794]/25 text-[#025794] flex items-center justify-center hover:bg-[#025794] hover:text-white hover:border-[#025794] hover:scale-110 hover:shadow-lg transition-all duration-300"
        aria-label="Next feature"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );

  return (
    <section ref={sectionRef} id="features" className="relative w-full py-24 md:py-28 bg-white overflow-hidden">
      <div className="container-wide">
        {/* Header */}
        <div
          className={`max-w-2xl mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <p className="eyebrow text-[#025794] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#025794]" />
            What We Offer
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#001A2D] leading-tight mb-4"
            style={{ fontFamily: "var(--font-caudex)" }}
          >
            Every Threat, One Shield
          </h2>
          <p className="text-base text-[#001A2D]/60 leading-relaxed">
            Comprehensive protection that adapts to your family&apos;s needs — from
            real-time risk detection to healthy screen habits.
          </p>
        </div>

        {/* 3D Carousel */}
        <div
          className={`transition-all duration-1000 delay-200 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ perspective: "1200px" }}
        >
          {/* Mobile: screenshot → nav → copy | Desktop: screenshot + copy side by side */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-14 items-start">
            {/* Screenshot column */}
            <div className="flex flex-col w-full">
              <div
                className="relative h-[360px] md:h-[480px] w-full"
                style={{ transformStyle: "preserve-3d" }}
                onMouseEnter={pauseAuto}
                onMouseLeave={resumeAuto}
              >
                <div
                  className="absolute inset-0"
                  style={flipStyle}
                  onTransitionEnd={handleFlipTransitionEnd}
                >
                  <Image src={feat.image} alt={feat.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain" loading="lazy" />
                </div>
              </div>

              {/* Nav — mobile only, right below screenshot */}
              <div className="flex items-center justify-between mt-6 lg:hidden">
                {dots}
                {arrows}
              </div>
            </div>

            {/* Copy column — fixed min-height */}
            <div
              className="flex flex-col justify-start min-h-[280px] md:min-h-[360px] w-full"
              style={{ transformStyle: "preserve-3d" }}
              onMouseEnter={pauseAuto}
              onMouseLeave={resumeAuto}
            >
              <div style={textFlipStyle}>
                <FeatureContent feat={feat} />
              </div>
            </div>
          </div>

          {/* Nav — desktop only, below both columns */}
            <div className="hidden lg:flex items-center justify-between mt-10 transition-all duration-700 delay-500 ease-out">
              {dots}
              {arrows}
            </div>
        </div>
      </div>
    </section>
  );
}
