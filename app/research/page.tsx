import Header from "../components/hero/Header";
import { PartnerSection } from "../components/partner";
import { ResearchSection } from "../components/research";
import { ExpertsSection } from "../components/experts";
import { Footer } from "../components/footer";

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-[#E8EEF2] pt-24">
      {/* 
        We use pt-24 (padding-top) so the content isn't 
        hidden behind the fixed Header. Header has translucent bg. 
      */}
      <div className="fixed top-0 left-0 right-0 z-40 h-24 bg-[#001517] w-full" />
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
