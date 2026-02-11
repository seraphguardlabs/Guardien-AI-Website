import Link from "next/link";

export default function HeroContent() {
  return (
    <div className="relative z-10 w-full">
      <div className="max-w-7xl mx-auto flex items-center min-h-screen">
        <div className="max-w-2xl py-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6">
            <img
              src="/Vector 92.svg"
              alt="Lightning icon"
              className="w-5 h-auto"
            />
            <span className="text-white font-light tracking-wide">
              BOOST CHILD SAFETY
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-caudex)" }}
          >
            Making The Digital <br />
            World Safer For Children
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl font-light">
            A trusted partner for parents - protecting <br />
            children while respecting privacy.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#early-access"
              className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl  transition-colors text-center"
            >
              Request Early Access
            </Link>
            <Link
              href="#demo"
              className="px-16 py-4 bg-[white] hover:bg-white/50 text-[#222] rounded-2xl  backdrop-blur-sm border border-white/50 transition-colors text-center"
            >
              Watch Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
