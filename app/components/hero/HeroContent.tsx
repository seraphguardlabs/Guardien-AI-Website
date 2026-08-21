import Link from "next/link";

export default function HeroContent() {
  return (
    <div className="relative z-10 w-full">
      <div className="container-wide flex items-center min-h-screen">
        <div className="max-w-2xl py-20 flex flex-col items-center text-center md:items-start md:text-left">
          {/* Main Heading */}
          <h1
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold uppercase text-white leading-[1.05] tracking-tight mb-6 opacity-0 animate-fadeIn"
            style={{ fontFamily: "var(--font-poppins)", animationDelay: "300ms" }}
          >
            Making The Digital
            <br />
            World Safer For
            <br />
            Children
          </h1>

          {/* Subheading */}
          <p
            className="text-base md:text-lg text-white/85 mb-8 max-w-xl font-light opacity-0 animate-fadeIn"
            style={{ animationDelay: "450ms" }}
          >
            A trusted partner for parents - protecting{" "}
            <br className="hidden md:block" />
            children while respecting privacy.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 items-center justify-center md:items-start md:justify-start opacity-0 animate-fadeIn"
            style={{ animationDelay: "600ms" }}
          >
            <Link href="#contact" className="btn-pill btn-pill-primary">
              Request Early Access
            </Link>

            <Link href="#features" className="btn-pill btn-pill-ghost">
              Watch Demo
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
