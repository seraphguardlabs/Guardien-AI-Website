import { HeroSection } from "./components/hero";
import { MarqueeSection } from "./components/marquee";
import { MissionSection } from "./components/mission";
import { AcceleratorSection } from "./components/accelerator";
import { FeaturesSection } from "./components/features";
import { ValuesSection } from "./components/values";
import { PricingSection } from "./components/pricing";
import { ContactSection } from "./components/contact";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <MarqueeSection />
      <MissionSection />
      <FeaturesSection />
      <AcceleratorSection />
      <ValuesSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
