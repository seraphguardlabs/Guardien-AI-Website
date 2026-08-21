import Header from "../components/hero/Header";
import { PartnerSection } from "../components/partner";
import { ResearchSection } from "../components/research";
import { ExpertsSection } from "../components/experts";
import { Footer } from "../components/footer";

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-[#001a2d]">
      {/*
        No top padding: the header stays transparent over this dark-navy
        band (matching PartnerSection's bg) and turns solid white on scroll.
      */}
      <div className="relative z-50">
        <Header />
      </div>

      <div className="relative z-10">
        <PartnerSection />
        <ResearchSection />
        <ExpertsSection />
        <Footer />
      </div>
    </main>
  );
}
