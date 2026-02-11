import Image from "next/image";
import Header from "./Header";
import HeroContent from "./HeroContent";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/medium-shot-man-kid-relaxing-home 2.png"
          alt="Father and child together"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Dark overlay for better text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(102deg, #00181B 9.8%, rgba(0, 92, 103, 0.10) 58.96%)",
          }}
        />
      </div>

      {/* Header Navigation */}
      <Header />

      {/* Hero Content */}
      <HeroContent />
    </section>
  );
}
