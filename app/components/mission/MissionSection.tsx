"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function MissionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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
  }, []);

  return (
    <section
      ref={sectionRef}
      id="mission"
      className="relative w-full py-24 md:py-28 bg-[#F2EFE8] overflow-hidden"
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left - layered image composition */}
          <div
            className={`relative h-[380px] sm:h-[460px] md:h-[520px] transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
            }`}
          >
            {/* Dominant image */}
            <div className="absolute top-0 left-0 w-[72%] h-[78%] rounded-[2rem] overflow-hidden">
              <Image
                src="/family-phone.webp"
                alt="Family using technology together"
                fill
                sizes="(max-width: 1024px) 70vw, 35vw"
                className="object-cover grayscale"
                loading="lazy"
              />
            </div>

            {/* Supporting image */}
            <div className="absolute bottom-0 right-0 w-[48%] h-[46%] rounded-2xl overflow-hidden border-4 border-[#F2EFE8] shadow-xl">
              <Image
                src="/girls on phone.webp"
                alt="Child safely using a device"
                fill
                sizes="(max-width: 1024px) 40vw, 20vw"
                className="object-cover grayscale"
                loading="lazy"
              />
            </div>

            {/* Floating stat card */}
            <div className="absolute bottom-6 left-0 w-[58%] card-light p-5 z-10">
              <div className="headline-bold text-3xl text-[#2F6FED] mb-1">
                300+
              </div>
              <p className="text-xs text-[#14181F]/60 leading-snug">
                Millions of Children Abused Online
              </p>
            </div>
          </div>

          {/* Right - copy */}
          <div
            className={`transition-all duration-1000 delay-200 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
            }`}
          >
            <p className="eyebrow text-[#2F6FED] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2F6FED]" />
              Why We Exist
            </p>

            <h2 className="headline-bold text-3xl md:text-4xl lg:text-5xl text-[#14181F] leading-[1.1] mb-6">
              <span className="block">Protecting and Empowering</span>
              <span className="block font-normal text-[#14181F]/60">digital childhood through ethical,</span>
              <span className="block">Privacy-First AI</span>
            </h2>

            <p className="text-base text-[#14181F]/70 leading-relaxed max-w-md mb-8">
              A trusted partner for parents - protecting children while
              respecting privacy.
            </p>

            <Link href="#contact" className="chip-pop px-7 py-3.5">
              Request Early Access
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
