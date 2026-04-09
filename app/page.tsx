import { NavbarSimple } from "@/components/landing/NavbarSimple";
import { HeroSection } from "@/components/landing/HeroSection";
import { PainPointsSection } from "@/components/landing/PainPointsSection";
import { BreakBeliefSection } from "@/components/landing/BreakBeliefSection";
import { ProductSolutionSection } from "@/components/landing/ProductSolutionSection";
import { AudienceSection } from "@/components/landing/AudienceSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { OfferSection } from "@/components/landing/OfferSection";
import { GuaranteeSection } from "@/components/landing/GuaranteeSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { FooterSimple } from "@/components/landing/FooterSimple";
import { StickyMobileCta } from "@/components/landing/StickyMobileCta";

export default function Home() {
  return (
    <>
      {/*
        Mobile: coluna com min-h-svh para altura estável com UI dinâmica do Safari;
        CTA sticky no fim do fluxo. Desktop: md:contents “desfaz” a caixa do wrapper.
      */}
      <div className="flex min-h-svh flex-col md:contents">
        <NavbarSimple />
        <main className="w-full flex-1 pb-0">
          <HeroSection />
          <PainPointsSection />
          <BreakBeliefSection />
          <ProductSolutionSection />
          <AudienceSection />
          <TestimonialsSection />
          <OfferSection />
          <GuaranteeSection />
          <FAQSection />
          <FinalCTASection />
        </main>
        <FooterSimple />
        <StickyMobileCta />
      </div>
    </>
  );
}
