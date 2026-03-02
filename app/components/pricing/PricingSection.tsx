"use client";

import { useEffect, useRef, useState } from "react";

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
      className="relative w-full min-h-screen flex items-center justify-center py-20 overflow-hidden"
      style={{ backgroundColor: "#DBE3E5" }}
    >
      {/* Background SVG Pattern */}
      <div
        className="absolute z-0 opacity-500"
        style={{ top: "-20%", left: 0, right: 0, bottom: 0 }}
      >
        <img
          src="/image 3280.svg"
          alt="Background pattern"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Main Heading */}
        <h2
          className={`text-4xl md:text-5xl lg:text-6xl text-[#143039] text-center mb-16 leading-tight transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ fontFamily: "var(--font-caudex)" }}
        >
          Choose The Right Plan
          <br />
          For Your Family
        </h2>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Monthly Plan Card */}
          <div
            className={`p-8 flex flex-col transition-all duration-1000 ease-out hover:scale-105 hover:shadow-2xl ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{
              borderRadius: "16px",
              background: "linear-gradient(180deg, #005A65 0%, #001417 100%)",
              boxShadow: "0 8px 80px 0 rgba(167, 167, 167, 0.24)",
              transitionDelay: isVisible ? "200ms" : "0ms",
            }}
          >
            <div className="mb-6">
              <p
                className="text-lg text-white mb-4"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Monthly Plan
              </p>
              <div className="flex items-baseline">
                <span
                  className="text-5xl font-bold text-white"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  ₹250
                </span>
                <span
                  className="text-lg text-white/80 ml-2"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Per month
                </span>
              </div>
            </div>

            <p
              className="text-sm text-white/70 mb-6 pb-6 border-b border-white/20"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Joy horrible moreover man feelings own shy. Request norland
              neither mistake for yet.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-[#002227]"
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
                <span
                  className="text-white text-sm"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Customer Support
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-[#002227]"
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
                <span
                  className="text-white text-sm"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Free User Account
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-[#002227]"
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
                <span
                  className="text-white text-sm"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Monthly Reports
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-[#002227]"
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
                <span
                  className="text-white text-sm"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Multiple Devices
                </span>
              </div>
            </div>

            {/* Button */}
            <button
              className="w-full py-4 rounded-full border-2 border-white text-white hover:bg-white hover:text-[#002227] transition-colors"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Join for free
            </button>
          </div>

          {/* Yearly Plan Card */}
          <div
            className={`p-8 flex flex-col transition-all duration-1000 ease-out hover:scale-105 hover:shadow-2xl ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{
              borderRadius: "16px",
              background: "linear-gradient(180deg, #005A65 0%, #001417 100%)",
              boxShadow: "0 8px 80px 0 rgba(167, 167, 167, 0.24)",
              transitionDelay: isVisible ? "400ms" : "0ms",
            }}
          >
            <div className="mb-6">
              <p
                className="text-lg text-white mb-4"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Yearly Plan
              </p>
              <div className="flex items-baseline">
                <span
                  className="text-5xl font-bold text-white"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  ₹2500
                </span>
                <span
                  className="text-lg text-white/80 ml-2"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Per month
                </span>
              </div>
            </div>

            <p
              className="text-sm text-white/70 mb-6 pb-6 border-b border-white/20"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              On even feet time have an no at. Relation so in confined smallest
              children unpacked delicate. Why sir end believe.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-[#002227]"
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
                <span
                  className="text-white text-sm"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Customer Support
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-[#002227]"
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
                <span
                  className="text-white text-sm"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Upto 10 Users
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-[#002227]"
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
                <span
                  className="text-white text-sm"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Monthly Reports
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-[#002227]"
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
                <span
                  className="text-white text-sm"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Multiple Devices Supported
                </span>
              </div>
            </div>

            {/* Button */}
            <button
              className="w-full py-4 rounded-full border-2 border-white text-white hover:bg-white hover:text-[#002227] transition-colors"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Join for free
            </button>
          </div>

          {/* Image Card */}
          <div
            className={`rounded-3xl overflow-hidden bg-white h-full min-h-[500px] transition-all duration-1000 ease-out hover:scale-105 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
          >
            <img
              src="/mother-little-daughter-using-tablet-couch 1.svg"
              alt="Mother and daughter using tablet"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
