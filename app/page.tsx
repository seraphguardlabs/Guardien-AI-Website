import { HeroSection } from "./components/hero";
import { MissionSection } from "./components/mission";
import { AcceleratorSection } from "./components/accelerator";
import { FeaturesSection } from "./components/features";
import { DifferentSection } from "./components/different";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <MissionSection />
      <AcceleratorSection />
      <FeaturesSection />
      <DifferentSection />
    </main>
  );
}
