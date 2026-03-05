"use client";

import Link from "next/link";
import Image from "next/image";

export default function ComingSoon() {
  return (
    <main
      className="min-h-screen w-full relative flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#002D34" }}
    >
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src="/green-aurora-with-aurora-borealis-visible-background 1.webp"
          alt="Background pattern"
          fill
          sizes="100vw"
          className="object-cover"
          loading="lazy"
          quality={60}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 text-center animate-pulse">
        <h1
          className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg"
          style={{ fontFamily: "var(--font-caudex)" }}
        >
          Coming Soon...
        </h1>
        <p
          className="text-lg md:text-xl text-white/80 max-w-xl mx-auto mb-10"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          We are working hard to bring you this feature. Stay tuned!
        </p>

        <Link
          href="/"
          className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl transition-all duration-300 font-light hover:scale-105 shadow-lg flex items-center gap-2"
          style={{
            backgroundColor: "#FE763C",
            fontFamily: "var(--font-poppins)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Home
        </Link>
      </div>
    </main>
  );
}
