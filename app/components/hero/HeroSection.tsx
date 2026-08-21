import Header from "./Header";
import HeroContent from "./HeroContent";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        {/* Desktop / landscape */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
          src="/hero-16-9.mp4"
        />
        {/* Mobile / portrait */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="md:hidden absolute inset-0 w-full h-full object-cover"
          src="/hero-9-16.mp4"
        />
        {/* Dark overlay — desktop heavy, mobile/tablet light */}
        <div
          className="lg:hidden absolute inset-0"
          style={{ backgroundColor: "rgba(0, 29, 50, 0.35)" }}
        />
        <div
          className="hidden lg:block absolute inset-0"
          style={{
            background:
              "linear-gradient(102deg, #001a2d 9.8%, rgba(159, 191, 214, 0.10) 58.96%)",
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
