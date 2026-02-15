import Image from "next/image";

export default function PartnerSection() {
  return (
    <section 
      className="py-20 md:py-32" 
      style={{ 
        background: "#002227",
        backgroundImage: "url('/green-aurora-with-aurora-borealis-visible-background 1.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Main Heading */}
            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight"
              style={{ fontFamily: "var(--font-caudex)" }}
            >
              Every Threat, One Shield
            </h2>

            {/* Subheading */}
            <p
              className="text-xl md:text-2xl text-white font-light"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              A trusted partner for parents - protecting children while
            </p>

            {/* Body Text */}
            <div
              className="text-sm md:text-base text-white/80 leading-relaxed space-y-4"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              <p>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, Borem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam eu turpis molestie, dictum
                est a, mattis tellus. Sed dignissim, metus nec fringilla
                accumsan, risus sem sollicitudin lacus, ut interdum tellus elit
                sed risus. Maecenas eget condimentum velit, sit amet feugiat
                lectus. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra.
              </p>
            </div>

            {/* Read More Link */}
            <a
              href="#"
              className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors group"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              <span className="text-base">Read more</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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

          {/* Right Side - Image */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
            <Image
              src="/Group 1000002418.png"
              alt="Team collaboration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
