import { OFFER } from "@/lib/constants";
import { Container } from "@/components/landing/Container";
import { SectionBadge } from "@/components/landing/SectionBadge";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { SurfaceCard } from "@/components/landing/SurfaceCard";
import { CTAButton } from "@/components/landing/CTAButton";
import { EbookCoverMockup } from "@/components/landing/EbookCoverMockup";
import { Check } from "lucide-react";

export function OfferSection() {
  return (
    <section
      id="oferta"
      className="scroll-mt-28 py-12 sm:scroll-mt-24 sm:py-[4.25rem] md:py-20 lg:py-24"
      aria-labelledby="offer-heading"
    >
      <Container>
        <SectionBadge>{OFFER.badge}</SectionBadge>
        <SectionHeading
          id="offer-heading"
          title={OFFER.title}
          microLine={OFFER.microLine}
          subtitle={OFFER.description}
          emphasizeFirstSubtitleLine
        />
        <div className="mt-8 grid items-start gap-7 sm:mt-12 sm:gap-8 md:gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SurfaceCard
              padded={false}
              className="overflow-hidden border-accent/25 bg-gradient-to-b from-panel/95 to-elevated shadow-[0_8px_40px_-24px_rgba(0,0,0,0.55)]"
            >
              <div className="aspect-[4/5] w-full p-5 sm:p-7 md:p-8">
                <EbookCoverMockup />
              </div>
            </SurfaceCard>
          </div>
          <div className="lg:col-span-7">
            <SurfaceCard className="h-full">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted sm:text-sm">
                  {OFFER.includesTitle}
                </p>
                <ul className="mt-5 space-y-6 sm:mt-6 sm:space-y-8">
                  {OFFER.includes.map((item) => (
                    <li key={item.title} className="flex gap-4">
                      <Check
                        className="mt-1 h-5 w-5 shrink-0 text-accent"
                        strokeWidth={1.75}
                        aria-hidden
                      />
                      <div className="min-w-0">
                        <p className="text-base font-semibold leading-snug text-ink">
                          {item.title}
                        </p>
                        <p className="mt-2 text-base leading-[1.62] text-ink-muted">
                          {item.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-9 border-t border-white/[0.1] pt-9 sm:mt-12 sm:pt-11">
                <div className="my-5 rounded-r-xl border-l-2 border-accent/45 bg-white/[0.04] py-4 pl-5 pr-4 sm:my-8 sm:py-6 sm:pl-6 sm:pr-5">
                  <p className="max-w-2xl text-[1.0625rem] font-semibold leading-[1.55] text-ink/95 sm:text-lg sm:leading-[1.58]">
                    {OFFER.decisionReinforcement}
                  </p>
                </div>
                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-ink-muted sm:mt-9 sm:text-sm">
                  {OFFER.priceLabel}
                </p>
                <div className="relative mt-5 overflow-hidden rounded-2xl border border-white/[0.1] border-b-white/[0.06] bg-gradient-to-b from-panel/95 via-panel/70 to-elevated/90 px-6 py-7 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_1px_0_0_rgba(198,160,78,0.12)] sm:mt-6 sm:px-8 sm:py-8">
                  <div
                    className="pointer-events-none absolute -right-6 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-accent/[0.09] blur-3xl"
                    aria-hidden
                  />
                  <div className="relative">
                    <p className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-[0.8125rem] font-medium leading-none text-ink-muted sm:text-sm">
                      <span className="opacity-90">De</span>
                      <span className="text-base tabular-nums text-ink-muted/85 line-through decoration-ink-muted decoration-[1.5px] opacity-[0.62] sm:text-lg">
                        {OFFER.priceWas}
                      </span>
                      <span className="opacity-90">por:</span>
                    </p>
                    <p
                      className="mt-2 font-display text-[3.25rem] font-extrabold tabular-nums leading-[0.92] tracking-[-0.04em] text-ink [text-shadow:0_2px_28px_rgba(0,0,0,0.4)] sm:mt-2.5 sm:text-[4rem] md:text-[4.25rem] lg:text-[4.75rem]"
                      aria-label={`Preço atual ${OFFER.priceCurrent}`}
                    >
                      {OFFER.priceCurrent}
                    </p>
                    <div className="mt-6 border-t border-white/[0.08] pt-5 sm:mt-7 sm:pt-6">
                      <p className="max-w-xl whitespace-pre-line text-balance text-base font-medium leading-[1.58] text-ink/92 sm:text-lg sm:leading-[1.55]">
                        {OFFER.priceNote}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="comprar"
                className="mt-9 flex scroll-mt-28 justify-center border-t border-white/[0.1] pt-10 sm:mt-12 sm:pt-14"
              >
                <div className="flex w-full max-w-[22rem] flex-col items-center gap-4 sm:max-w-md">
                  <CTAButton
                    href={OFFER.ctaHref}
                    variant="primary"
                    className="w-full min-w-0 px-6 py-4 text-base font-semibold sm:min-h-[52px]"
                  >
                    {OFFER.cta}
                  </CTAButton>
                  <p className="max-w-[20rem] text-center text-base leading-[1.62] text-ink-muted">
                    {OFFER.ctaHint}
                  </p>
                </div>
              </div>
            </SurfaceCard>
          </div>
        </div>
      </Container>
    </section>
  );
}
