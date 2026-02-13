import StickyNav from "@/components/workshop/StickyNav";
import HeroSection from "@/components/workshop/HeroSection";
import TrustStrip from "@/components/workshop/TrustStrip";
import LearnSection from "@/components/workshop/LearnSection";
import AttendSection from "@/components/workshop/AttendSection";
import DetailsSection from "@/components/workshop/DetailsSection";
import AgendaSection from "@/components/workshop/AgendaSection";
import BonusesSection from "@/components/workshop/BonusesSection";
import PricingSection from "@/components/workshop/PricingSection";
import FAQSection from "@/components/workshop/FAQSection";
import FinalCTA from "@/components/workshop/FinalCTA";
import WorkshopRecap from "@/components/workshop/WorkshopRecap";
import StickyBottomCTA from "@/components/workshop/StickyBottomCTA";

const Index = () => {
  return (
    <main className="overflow-x-hidden bg-muted min-h-screen">
      <StickyNav />
      <div className="max-w-[430px] mx-auto bg-background pb-20 min-h-screen shadow-sm relative">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "url('/images/light-bg.webp')", backgroundRepeat: "repeat", backgroundSize: "200px", opacity: 0.4 }} />
        <HeroSection />
        <TrustStrip />
        <LearnSection />
        <AttendSection />
        <DetailsSection />
        <AgendaSection />
        <BonusesSection />
        <PricingSection />
        <FAQSection />
        <FinalCTA />
        <WorkshopRecap />
      </div>
      <StickyBottomCTA />
    </main>
  );
};

export default Index;
