// Labels reused verbatim from FeaturesSection's feature titles — no new copy.
const items = [
  "AI-Powered Risk Detection",
  "Screen Time & Usage Control",
  "Location & Safety Shield",
  "Parent Dashboard",
  "Gamified Responsibility",
];

const Dot = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
  </svg>
);

export default function MarqueeSection() {
  const track = [...items, ...items];

  return (
    <div className="w-full bg-[#2F6FED] py-4 overflow-hidden">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center flex-shrink-0">
            {track.map((label, i) => (
              <div key={`${copy}-${i}`} className="flex items-center gap-3 px-6 text-[#04101f]">
                <Dot />
                <span className="headline-bold text-sm md:text-base uppercase tracking-wide whitespace-nowrap">
                  {label}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
