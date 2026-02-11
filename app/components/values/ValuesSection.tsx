export default function ValuesSection() {
  const values = [
    {
      title: "Integrity",
      description: (
        <>
          We lead with ethics and empathy. We know <br />
          that the most productive and prosperous <br />
          relationships are built on trust, collaboration, <br />
          and a shared sense of purpose.
        </>
      ),
    },
    {
      title: "Ingenuity",
      description: (
        <>
          We're astute at untangling complexity, <br />
          identifying opportunities, driving efficiency, <br />
          and leading with clarity. Now and for the future.
        </>
      ),
    },
    {
      title: "People before process",
      description: (
        <>
          We invest in our people and our customers <br />
          because we believe excellence is achieved <br />
          through a diversity of perspectives. While <br />
          processes matter, it's people who guide the <br />
          way to success.
        </>
      ),
    },
    {
      title: "Candor",
      description: (
        <>
          We invest the time required to truly understand <br />
          the perspective of our customers, partners, <br />
          and colleagues. Through open and direct lines <br />
          of communication, we deliver on our <br />
          commitments with honesty.
        </>
      ),
    },
  ];

  return (
    <section className="py-16 md:py-24" style={{ background: "#002227" }}>
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Title */}
        <h2
          className="text-4xl md:text-5xl text-white text-center mb-16 md:mb-20"
          style={{ fontFamily: "var(--font-caudex)" }}
        >
          Our values
        </h2>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className={`space-y-4 ${index % 2 === 1 ? "md:pl-16" : ""}`}
            >
              <h3
                className="text-2xl md:text-3xl text-white font-light"
                style={{ fontFamily: "var(--font-caudex)" }}
              >
                {value.title}
              </h3>
              <p
                className="text-sm md:text-base text-white/70 leading-relaxed"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
