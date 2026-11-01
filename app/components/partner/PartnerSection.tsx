"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function PartnerSection() {
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

  return (
    <section
      ref={sectionRef}
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-[#060f1a] overflow-hidden"
    >
      {/* Background ambient decorative glow blobs */}
      <div className="blob top-10 left-10 w-96 h-96 opacity-25" style={{ backgroundColor: "#2F6FED" }} />
      <div className="blob top-1/2 -right-20 w-96 h-96 opacity-20" style={{ backgroundColor: "#38BDF8" }} />

      <div className="container-wide relative z-10">
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs md:text-sm text-white/60 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/25 text-[#38BDF8] text-xs font-semibold tracking-wider uppercase mb-5">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
              White Paper & Research Publication
            </div>

            <h1
              className="headline-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.1] mb-8"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Child Digital Security White Paper
            </h1>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/join-mission"
                className="chip-pop px-7 py-3.5 text-sm font-semibold shadow-lg shadow-[#2F6FED]/25"
              >
                Join Our Mission
              </Link>

              <a
                href="/files/Child Digital Security White Paper - Guardien AI x Seraphguard Labs.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-pill-ghost px-6 py-3.5 text-sm flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open in Fullscreen
              </a>
            </div>
          </div>
        </div>

        {/* PDF Reader Showcase Frame */}
        <div
          className={`w-full transition-all duration-1000 delay-200 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#0c1c2e] to-[#071322] border border-white/15 shadow-[0_24px_80px_rgba(0,0,0,0.6)] backdrop-blur-xl p-3 sm:p-5">
            {/* Top Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-3 py-3 mb-3 border-b border-white/10 text-xs">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                <span className="text-white/80 font-medium ml-2 truncate">
                  Child Digital Security White Paper - Guardien AI x Seraphguard Labs.pdf
                </span>
              </div>

              <div className="flex items-center gap-2 text-white/50">
                <span className="px-2.5 py-1 rounded-md bg-white/10 text-white/80 font-mono text-[11px]">
                  PDF • Published Research
                </span>
              </div>
            </div>

            {/* Document Iframe Viewer */}
            <div className="rounded-xl overflow-hidden bg-white shadow-inner">
              <iframe
                src="/files/Child Digital Security White Paper - Guardien AI x Seraphguard Labs.pdf#toolbar=0"
                className="w-full h-[600px] md:h-[800px] lg:h-[950px] border-0"
                title="Child Digital Security White Paper - Guardien AI x Seraphguard Labs"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
