"use client";

import { useEffect, useRef, useState } from "react";

const Check = ({ dark }: { dark?: boolean }) => (
  <div
    className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
      dark ? "bg-white" : "bg-[#025794]"
    }`}
  >
    <svg
      className={`w-3 h-3 ${dark ? "text-[#001a2d]" : "text-white"}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M5 13l4 4L19 7"
      />
    </svg>
  </div>
);

export default function PricingSection() {
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
      id="pricing"
      className="relative w-full py-24 md:py-28 bg-white overflow-hidden"
    >
      <div className="container-wide">
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p
            className={`eyebrow text-[#025794] mb-4 justify-center transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#025794]" />
            Pricing
          </p>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl text-[#001A2D] leading-tight transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ fontFamily: "var(--font-caudex)" }}
          >
            Choose The Right Plan
            <br />
            For Your Family
          </h2>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto items-stretch">
          {/* Monthly Plan Card — light outlined treatment */}
          <div
            className={`card-soft p-8 flex flex-col transition-all duration-1000 ease-out hover:shadow-xl ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: isVisible ? "150ms" : "0ms" }}
          >
            <div className="mb-6">
              <p className="text-sm font-medium text-[#025794] mb-4">
                Monthly Plan
              </p>
              <div className="flex items-baseline">
                <span
                  className="text-5xl font-bold text-[#001A2D]"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  ₹250
                </span>
                <span className="text-base text-[#001A2D]/50 ml-2">
                  Per month
                </span>
              </div>
            </div>

            <p className="text-sm text-[#001A2D]/60 mb-6 pb-6 border-b border-[#001A2D]/10">
              Joy horrible moreover man feelings own shy. Request norland
              neither mistake for yet.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex items-center gap-3">
                <Check />
                <span className="text-[#001A2D] text-sm">Customer Support</span>
              </div>
              <div className="flex items-center gap-3">
                <Check />
                <span className="text-[#001A2D] text-sm">Free User Account</span>
              </div>
              <div className="flex items-center gap-3">
                <Check />
                <span className="text-[#001A2D] text-sm">Monthly Reports</span>
              </div>
              <div className="flex items-center gap-3">
                <Check />
                <span className="text-[#001A2D] text-sm">Multiple Devices</span>
              </div>
            </div>

            <button className="btn-pill btn-pill-secondary w-full">
              Join for free
            </button>
          </div>

          {/* Yearly Plan Card — highlighted dark treatment */}
          <div
            className={`relative p-8 flex flex-col transition-all duration-1000 ease-out hover:shadow-2xl ${
              isVisible
                ? "opacity-100 translate-y-0 md:-translate-y-3"
                : "opacity-0 translate-y-10"
            }`}
            style={{
              borderRadius: "1.75rem",
              background: "linear-gradient(180deg, #025794 0%, #001a2d 100%)",
              boxShadow: "0 24px 60px -20px rgba(0, 26, 45, 0.45)",
              transitionDelay: isVisible ? "300ms" : "0ms",
            }}
          >
            <span className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-[#025794] text-white text-xs font-semibold tracking-wide">
              Best Value
            </span>

            <div className="mb-6">
              <p className="text-sm font-medium text-white/80 mb-4">
                Yearly Plan
              </p>
              <div className="flex items-baseline">
                <span className="text-5xl font-bold text-white">₹2500</span>
                <span className="text-base text-white/60 ml-2">Per year</span>
              </div>
            </div>

            <p className="text-sm text-white/60 mb-6 pb-6 border-b border-white/15">
              On even feet time have an no at. Relation so in confined
              smallest children unpacked delicate. Why sir end believe.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex items-center gap-3">
                <Check dark />
                <span className="text-white text-sm">Customer Support</span>
              </div>
              <div className="flex items-center gap-3">
                <Check dark />
                <span className="text-white text-sm">Upto 10 Users</span>
              </div>
              <div className="flex items-center gap-3">
                <Check dark />
                <span className="text-white text-sm">Monthly Reports</span>
              </div>
              <div className="flex items-center gap-3">
                <Check dark />
                <span className="text-white text-sm">
                  Multiple Devices Supported
                </span>
              </div>
            </div>

            <button className="btn-pill btn-pill-primary w-full">
              Join for free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
