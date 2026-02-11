export default function MissionSection() {
  return (
    <section
      id="mission"
      className="relative w-full min-h-screen flex items-center justify-center py-20 overflow-hidden"
      style={{ backgroundColor: "#DBE3E5" }}
    >
      {/* Background SVG Pattern */}
      <div className="absolute inset-0 z-0 opacity-500">
        <img
          src="/image 3280.svg"
          alt="Background pattern"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Small Label */}
        <p className="text-0.5xl md:text-xl lg:text-xl text-[#143039] mb-2 font-medium tracking-wide">
          Why We Exist
        </p>

        {/* Main Heading */}
        <h1
          className="text-4xl md:text-5xl lg:text-6xl text-[#143039] leading-tight"
          style={{ fontFamily: "var(--font-caudex)" }}
        >
          <span className="font-bold">Protecting and Empowering</span>
          <br />
          <span className="font-light">digital childhood through ethical,</span>
          <br />
          <span className="font-bold">Privacy-First AI</span>
        </h1>
      </div>
    </section>
  );
}
