export default function FeaturesSection() {
  const rightFeatures = [
    {
      image: "/father-son-looking-smartphone-home 1.svg",
      title: "AI-Powered Risk Detection",
      description: "Detects cyberbullying, paedophilic threats...",
    },
    {
      image: "/medium-shot-arab-women-with-smartphone 3.svg",
      title: "Screen Time & Usage Control",
      description: "Set healthy limits by app, schedule internet...",
    },
    {
      image: "/smiling-lady-using-tablet-smartphone-outdoor-cafe 1.svg",
      title: "Location & Safety Shield",
      description: "Track their location in real time, get alerts...",
    },
  ];

  return (
    <section
      className="relative w-full py-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #001A1B 0%, #003D45 50%, #005C67 100%)",
      }}
    >
      {/* Background Aurora SVG */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="/green-aurora-with-aurora-borealis-visible-background 1.svg"
          alt="Aurora background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Main Heading */}
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-12"
          style={{ fontFamily: "var(--font-caudex)" }}
        >
          Every Threat, One Shield
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          {/* Left Column - Main Feature */}
          <div className="space-y-6 flex flex-col justify-center">
            {/* Large Image */}
            <div className="overflow-hidden rounded-4xl w-full h-[450px] relative">
              <img
                src="/medium-shot-women-spending-quality-time-outdoors 1.svg"
                alt="Women looking at smartphone"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Feature Title */}
            <h4
              className="text-lg font-light text-[#93D4FF] mb-1"
              style={{ fontFamily: "var(--font-caudex)" }}
            >
              Intelligent Content & App Filtering
            </h4>

            {/* Feature Description */}
            <p
              className="text-base text-white mb-3 leading-relaxed font-light"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Blocks harmful & inappropriate content instantly & alerts you when
              your child searches for drugs, violence or self-harm before damage
              is done.
            </p>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-4 flex flex-col justify-between">
            {rightFeatures.map((feature, index) => (
              <div key={index} className="flex gap-8 items-center">
                {/* Small Image */}
                <div className="flex-shrink-0 overflow-hidden rounded-2xl w-40 h-40">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h4
                    className="text-lg font-light text-[#93D4FF] mb-1"
                    style={{ fontFamily: "var(--font-caudex)" }}
                  >
                    {feature.title}
                  </h4>
                  <p
                    className="text-base text-white mb-3 leading-relaxed font-light"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {feature.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm text-[#FFFFFF] hover:text-white transition-colors font-light"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
