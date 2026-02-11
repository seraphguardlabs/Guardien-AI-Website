export default function AcceleratorSection() {
  const stats = [
    {
      value: "50.4%",
      label: "Daily Non-School\nScreen Time",
    },
    {
      value: "12.7",
      label: "Average Age Children\nExplicit Content Dropped",
    },
    {
      value: "3+",
      label: "Hours of Social Media\nDoubles Mental Health",
    },
    {
      value: "300+",
      label: "Millions of Children\nAbused Online",
    },
  ];

  return (
    <section
      className="w-full py-16 md:py-20"
      style={{
        background: "linear-gradient(348deg, #001A1B 48.99%, #005C65 140.03%)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              {/* Stat Value */}
              <div
                className="text-5xl md:text-6xl font-bold text-[#93D4FF] mb-4"
                style={{ fontFamily: "var(--font-caudex)" }}
              >
                {stat.value}
              </div>

              {/* Stat Label */}
              <p
                className="text-sm md:text-base text-white leading-relaxed whitespace-pre-line"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
