"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const CheckIcon = ({ active = true, dark = false }: { active?: boolean; dark?: boolean }) => (
  <div
    className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
      !active
        ? "bg-black/5 text-black/30"
        : dark
        ? "bg-white text-[#2F6FED]"
        : "bg-[#2F6FED]/10 text-[#2F6FED]"
    }`}
  >
    {active ? (
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
      </svg>
    ) : (
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
      </svg>
    )}
  </div>
);

const plans = [
  {
    id: "starter",
    name: "Starter Shield",
    tagline: "Essential AI protection for a single child device.",
    monthlyPrice: 149,
    annualPrice: 1390, // ~₹115/mo
    popular: false,
    badge: null,
    buttonText: "Start 14-Day Free Trial",
    buttonHref: "#contact",
    features: [
      { text: "1 Protected Device", included: true },
      { text: "AI Risk & Alert System", included: true },
      { text: "App Screen Time Limits", included: true },
      { text: "Basic Web Content Filter", included: true },
      { text: "Weekly Safety Email Report", included: true },
      { text: "Live GPS Geofencing", included: false },
      { text: "Gamified Chore & Task Rewards", included: false },
    ],
  },
  {
    id: "family",
    name: "Family Shield",
    tagline: "Complete 360° protection for the entire household.",
    monthlyPrice: 250,
    annualPrice: 2490, // ~₹207/mo
    popular: true,
    badge: "Most Popular",
    buttonText: "Protect Your Family",
    buttonHref: "#contact",
    features: [
      { text: "Up to 5 Family Devices", included: true },
      { text: "Real-Time AI Threat Alerts", included: true },
      { text: "Cyberbullying & Predator Detection", included: true },
      { text: "Screen Time & App Downtime Control", included: true },
      { text: "Live GPS Location & Safe Geofences", included: true },
      { text: "Gamified Task & Chore Rewards", included: true },
      { text: "Parent Dashboard Command Centre", included: true },
    ],
  },
  {
    id: "ultimate",
    name: "Ultimate Protection",
    tagline: "Maximum security with priority monitoring & VIP support.",
    monthlyPrice: 499,
    annualPrice: 4790, // ~₹399/mo
    popular: false,
    badge: "Maximum Security",
    buttonText: "Get Ultimate Defense",
    buttonHref: "#contact",
    features: [
      { text: "Unlimited Family Devices", included: true },
      { text: "Deep AI Cyber Threat Analysis", included: true },
      { text: "Instant Emergency SOS Panic Button", included: true },
      { text: "Multi-Zone Geofences & Arrival Alerts", included: true },
      { text: "Unlimited Location History Log", included: true },
      { text: "Gamified Responsibility Suite", included: true },
      { text: "24/7 Dedicated Priority VIP Support", included: true },
    ],
  },
];

export default function PricingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnnual, setIsAnnual] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="pricing" className="relative w-full py-24 md:py-28 bg-[#FAF9F5] overflow-hidden">
      <div className="container-wide">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p
            className={`eyebrow text-[#2F6FED] mb-4 justify-center transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#2F6FED]" />
            Flexible Plans
          </p>
          <h2
            className={`headline-bold text-3xl md:text-4xl lg:text-5xl text-[#14181F] leading-tight mb-6 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Invest In Their Digital Safety
          </h2>
          <p className="text-base text-[#14181F]/60 leading-relaxed max-w-lg mx-auto">
            Choose the protection level that fits your family. Cancel or change plans anytime with zero hidden fees.
          </p>

          {/* Billing Cycle Switch (Monthly vs Annual) */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-full bg-[#14181F]/06 border border-[#14181F]/10">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                !isAnnual
                  ? "bg-white text-[#14181F] shadow-sm"
                  : "text-[#14181F]/60 hover:text-[#14181F]"
              }`}
            >
              Monthly Billing
            </button>

            <button
              onClick={() => setIsAnnual(true)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                isAnnual
                  ? "bg-[#2F6FED] text-white shadow-md"
                  : "text-[#14181F]/60 hover:text-[#14181F]"
              }`}
            >
              <span>Annual Billing</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                isAnnual ? "bg-white/20 text-white" : "bg-[#2F6FED]/15 text-[#2F6FED]"
              }`}>
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, index) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const monthlyEquivalent = isAnnual ? Math.round(plan.annualPrice / 12) : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-500 ${
                  plan.popular
                    ? "bg-gradient-to-b from-[#2F6FED] to-[#0d2338] text-white shadow-2xl lg:-translate-y-3 border border-[#2F6FED]/40 ring-4 ring-[#2F6FED]/15"
                    : "card-light text-[#14181F] border border-[#14181F]/10 hover:shadow-xl"
                } ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="chip-pop px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-lg">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <div className="mb-6">
                    <h3 className={`headline-bold text-2xl mb-2 ${plan.popular ? "text-white" : "text-[#14181F]"}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-xs sm:text-sm leading-relaxed ${plan.popular ? "text-white/70" : "text-[#14181F]/60"}`}>
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Pricing Display */}
                  <div className="mb-8 pb-6 border-b border-current/10">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-extrabold tracking-tight font-poppins">
                        ₹{price.toLocaleString()}
                      </span>
                      <span className={`text-sm ${plan.popular ? "text-white/70" : "text-[#14181F]/60"}`}>
                        /{isAnnual ? "year" : "month"}
                      </span>
                    </div>

                    {isAnnual && (
                      <p className={`text-xs mt-2 font-medium ${plan.popular ? "text-white/80" : "text-[#2F6FED]"}`}>
                        Equivalent to ~₹{monthlyEquivalent}/mo when billed annually
                      </p>
                    )}
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3.5 mb-8">
                    <p className={`text-xs font-bold uppercase tracking-wider mb-4 ${plan.popular ? "text-white/80" : "text-[#14181F]/50"}`}>
                      What&apos;s Included:
                    </p>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3">
                        <CheckIcon active={feat.included} dark={plan.popular} />
                        <span className={`text-sm font-medium ${
                          !feat.included
                            ? "text-[#14181F]/40 line-through"
                            : plan.popular
                            ? "text-white/90"
                            : "text-[#14181F]/85"
                        }`}>
                          {feat.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call to Action Button */}
                <Link
                  href={plan.buttonHref}
                  className={`w-full py-3.5 px-6 rounded-full text-center text-sm font-semibold transition-all duration-300 block cursor-pointer ${
                    plan.popular
                      ? "bg-white text-[#2F6FED] hover:bg-[#FAF9F5] shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                      : "bg-[#2F6FED] text-white hover:bg-[#2055ca] shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Trust Badges Footer */}
        <div className="mt-16 pt-8 border-t border-[#14181F]/08 max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-semibold text-[#14181F]/70">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2F6FED]" />
            No Hidden Fees
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2F6FED]" />
            End-to-End Encryption
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2F6FED]" />
            Privacy-First
          </span>
        </div>
      </div>
    </section>
  );
}

