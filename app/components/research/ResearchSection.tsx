import Image from "next/image";

export default function ResearchSection() {
  const researchItems = [
    {
      id: 1,
      title: "AI-Powered Risk Detection",
      description: "Detects cyberbullying, paedophilic threats...",
      image: "/Image.svg",
    },
    {
      id: 2,
      title: "AI-Powered Risk Detection",
      description: "Detects cyberbullying, paedophilic threats...",
      image: "/Image.svg",
    },
    {
      id: 3,
      title: "AI-Powered Risk Detection",
      description: "Detects cyberbullying, paedophilic threats...",
      image: "/Image.svg",
    },
    {
      id: 4,
      title: "AI-Powered Risk Detection",
      description: "Detects cyberbullying, paedophilic threats...",
      image: "/Image.svg",
    },
    {
      id: 5,
      title: "AI-Powered Risk Detection",
      description: "Detects cyberbullying, paedophilic threats...",
      image: "/Image.svg",
    },
    {
      id: 6,
      title: "AI-Powered Risk Detection",
      description: "Detects cyberbullying, paedophilic threats...",
      image: "/Image.svg",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-[#DBE3E5] overflow-hidden">
      {/* Decorative Image at Top Right - Diagonal */}
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

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Section Title */}
        <h2
          className="text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] mb-16 md:mb-20"
          style={{ fontFamily: "var(--font-caudex)" }}
        >
          Latest Research
        </h2>

        {/* Research Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {researchItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-6 items-start group cursor-pointer"
            >
              {/* Image */}
              <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden bg-gray-300 relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-3">
                <h3
                  className="text-xl md:text-2xl text-[#1A1A1A] leading-snug"
                  style={{ fontFamily: "var(--font-caudex)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm md:text-base text-[#4A5568] leading-relaxed"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {item.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#002227] hover:text-[#004852] transition-colors group-hover:gap-3 group-hover:transition-all"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  <span className="text-sm md:text-base font-medium">
                    Read more
                  </span>
                  <svg
                    className="w-4 h-4 transform transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
