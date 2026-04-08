import { NavbarSimple } from "@/components/landing/NavbarSimple";
import { HeroSection } from "@/components/landing/HeroSection";
import { PainPointsSection } from "@/components/landing/PainPointsSection";
import { BreakBeliefSection } from "@/components/landing/BreakBeliefSection";
import { ProductSolutionSection } from "@/components/landing/ProductSolutionSection";
import { AudienceSection } from "@/components/landing/AudienceSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { OfferSection } from "@/components/landing/OfferSection";
import { UpsellSection } from "@/components/landing/UpsellSection";
import { GuaranteeSection } from "@/components/landing/GuaranteeSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { FooterSimple } from "@/components/landing/FooterSimple";
import { StickyMobileCta } from "@/components/landing/StickyMobileCta";

export default function Home() {
  return (
    <>
      <NavbarSimple />
      <main className="pb-[5.75rem] md:pb-0">
        <HeroSection />
        <PainPointsSection />
        <BreakBeliefSection />
        <ProductSolutionSection />
        <AudienceSection />
        <TestimonialsSection />
        <OfferSection />
        <UpsellSection />
        <GuaranteeSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <FooterSimple />
      <StickyMobileCta />
    </>
  );
}
