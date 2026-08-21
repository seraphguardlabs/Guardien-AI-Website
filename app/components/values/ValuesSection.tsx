"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const icons: Record<string, ReactNode> = {
  integrity: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"
    />
  ),
  ingenuity: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M9 18h6M10 21h4M12 3a6 6 0 00-3.6 10.8c.4.3.6.8.6 1.3v.4h6v-.4c0-.5.2-1 .6-1.3A6 6 0 0012 3z"
    />
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="3" strokeWidth={1.75} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17" cy="7.5" r="2.25" strokeWidth={1.75} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15.5 14.2c2.6.4 4.5 2.6 4.5 5.3" />
    </>
  ),
  candor: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M4 5.5A1.5 1.5 0 015.5 4h13A1.5 1.5 0 0120 5.5v9a1.5 1.5 0 01-1.5 1.5H9l-4.5 4v-4H5.5A1.5 1.5 0 014 14.5v-9z"
    />
  ),
};

function Icon({ name }: { name: string }) {
  return (
    <svg
      className="w-6 h-6 text-[#025794]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      {icons[name]}
    </svg>
  );
}

export default function ValuesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const values = [
    {
      icon: "integrity",
      title: "Integrity",
      description: (
        <>
          We lead with ethics and empathy. We know that the most productive
          and prosperous relationships are built on trust, collaboration, and
          a shared sense of purpose.
        </>
      ),
    },
    {
      icon: "ingenuity",
      title: "Ingenuity",
      description: (
        <>
          We&apos;re astute at untangling complexity, identifying
          opportunities, driving efficiency, and leading with clarity. Now
          and for the future.
        </>
      ),
    },
    {
      icon: "people",
      title: "People before process",
      description: (
        <>
          We invest in our people and our customers because we believe
          excellence is achieved through a diversity of perspectives. While
          processes matter, it&apos;s people who guide the way to success.
        </>
      ),
    },
    {
      icon: "candor",
      title: "Candor",
      description: (
        <>
          We invest the time required to truly understand the perspective of
          our customers, partners, and colleagues. Through open and direct
          lines of communication, we deliver on our commitments with
          honesty.
        </>
      ),
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

  return (
    <section ref={sectionRef} className="py-24 md:py-28 bg-[#E4EDF4]">
      <div className="container-wide">
        <div className="max-w-2xl mb-16 md:mb-20">
          <p
            className={`eyebrow text-[#025794] mb-4 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#025794]" />
            What Drives Us
          </p>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl text-[#001A2D] transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
            style={{ fontFamily: "var(--font-caudex)" }}
          >
            Our values
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className={`card-soft group cursor-default p-8 transition-all duration-1000 ease-out hover:shadow-lg ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-[#E4EDF4] flex items-center justify-center mb-5 group-hover:bg-[#025794]/10 transition-colors duration-300">
                <Icon name={value.icon} />
              </div>
              <h3
                className="text-xl md:text-2xl text-[#001A2D] font-semibold mb-3"
                style={{ fontFamily: "var(--font-caudex)" }}
              >
                {value.title}
              </h3>
              <p className="text-sm md:text-base text-[#001A2D]/65 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
