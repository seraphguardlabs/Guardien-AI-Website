import Header from "../components/hero/Header";
import { PartnerSection } from "../components/partner";
import { Footer } from "../components/footer";

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-[#060f1a] text-white">
      <div className="relative z-50">
        <Header forceLight={false} />
      </div>

      <div className="relative z-10">
        <PartnerSection />
        <Footer />
      </div>
    </main>
  );
}
