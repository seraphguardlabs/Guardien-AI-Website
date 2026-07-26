import { HeroSection } from "./components/hero";
import { MissionSection } from "./components/mission";
import { AcceleratorSection } from "./components/accelerator";
import { FeaturesSection } from "./components/features";
import { DifferentSection } from "./components/different";
import { ValuesSection } from "./components/values";
import { PricingSection } from "./components/pricing";
import { ContactSection } from "./components/contact";
import { Footer } from "./components/footer";
import { IntroOverlay } from "./components/intro";

export default function Home() {
  return (
    <>
      {/* Rendered outside <main> so it can never be clipped by it, and so the
          whole page can be made inert in one attribute while it plays. */}
      <IntroOverlay />
      <main id="site-main" className="min-h-screen">
        <HeroSection />
        <MissionSection />
        <AcceleratorSection />
        <FeaturesSection />
        <DifferentSection />
        <ValuesSection />
        <PricingSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
