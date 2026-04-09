import { FINAL_CTA } from "@/lib/constants";
import { Container } from "@/components/landing/Container";
import { CTAButton } from "@/components/landing/CTAButton";

export function FinalCTASection() {
  return (
    <section
      id="fechar"
      className="scroll-mt-28 border-t border-accent/25 bg-gradient-to-b from-panel/85 via-panel/45 to-canvas py-12 sm:scroll-mt-24 sm:py-[4.25rem] md:py-20 lg:py-24"
      aria-labelledby="final-cta-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="final-cta-heading"
            className="mx-auto max-w-[44rem] font-display text-[1.625rem] font-semibold leading-[1.2] tracking-[-0.02em] text-ink text-balance sm:text-3xl sm:leading-[1.18] lg:text-[2.125rem] xl:text-4xl xl:leading-[1.15]"
          >
            {FINAL_CTA.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl whitespace-pre-line text-base leading-[1.7] text-ink-muted sm:mt-7 sm:text-lg sm:leading-[1.68]">
            {FINAL_CTA.subtitle}
          </p>
          <div className="mt-9 flex flex-col items-center sm:mt-12">
            <CTAButton
              href={FINAL_CTA.ctaHref}
              variant="primary"
              className="w-full min-h-[52px] min-w-[min(100%,17rem)] px-8 sm:w-auto sm:min-h-[52px]"
            >
              {FINAL_CTA.cta}
            </CTAButton>
            <p className="mt-4 max-w-md text-center text-base leading-[1.62] text-ink-muted">
              {FINAL_CTA.ctaHint}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
