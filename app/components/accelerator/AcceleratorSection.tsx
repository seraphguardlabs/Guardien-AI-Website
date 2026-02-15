"use client";

import { useEffect, useRef, useState } from "react";

export default function AcceleratorSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      value: "50.4%",
      label: "Daily Non-School\nScreen Time",
      targetNumber: 50.4,
      suffix: "%",
      decimals: 1,
    },
    {
      value: "12.7",
      label: "Average Age Children\nExplicit Content Dropped",
      targetNumber: 12.7,
      suffix: "",
      decimals: 1,
    },
    {
      value: "3+",
      label: "Hours of Social Media\nDoubles Mental Health",
      targetNumber: 3,
      suffix: "+",
      decimals: 0,
    },
    {
      value: "300+",
      label: "Millions of Children\nAbused Online",
      targetNumber: 300,
      suffix: "+",
      decimals: 0,
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
      { threshold: 0.3 },
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

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const frameRate = 60; // 60 fps
    const totalFrames = (duration / 1000) * frameRate;

    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;

      const newCounts = stats.map((stat) => {
        const easeOutProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
        return stat.targetNumber * easeOutProgress;
      });

      setCounts(newCounts);

      if (frame >= totalFrames) {
        clearInterval(counter);
        setCounts(stats.map((stat) => stat.targetNumber));
      }
    }, 1000 / frameRate);

    return () => clearInterval(counter);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 md:py-20"
      style={{
        background: "linear-gradient(348deg, #001A1B 48.99%, #005C65 140.03%)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Stat Value */}
              <div
                className="text-5xl md:text-6xl font-bold text-[#93D4FF] mb-4"
                style={{ fontFamily: "var(--font-caudex)" }}
              >
                {counts[index].toFixed(stat.decimals)}
                {stat.suffix}
              </div>

              {/* Stat Label */}
              <p
                className="text-sm md:text-base text-white leading-relaxed whitespace-pre-line"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
