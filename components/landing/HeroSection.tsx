import { HERO, PRODUCT_NAME } from "@/lib/constants";
import { Container } from "@/components/landing/Container";
import { CTAButton } from "@/components/landing/CTAButton";
import { SurfaceCard } from "@/components/landing/SurfaceCard";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/[0.06] pb-12 pt-10 sm:pb-[5.25rem] sm:pt-16 md:pb-24 md:pt-[4.25rem] lg:pb-28 lg:pt-20"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-15%,rgba(198,160,78,0.1),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(245,242,235,0.03)_0%,transparent_18%,transparent_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 top-[20%] h-80 w-80 rounded-full bg-accent/[0.06] blur-3xl sm:-right-28"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/4 h-px w-[min(40%,28rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/25 to-transparent"
        aria-hidden
      />
      <Container>
        <div className="grid items-center gap-7 md:gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-14">
          <div className="lg:col-span-7">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-accent sm:mb-5 sm:text-sm sm:tracking-[0.28em]">
              {PRODUCT_NAME}
            </p>
            <h1
              id="hero-heading"
              className="max-w-[36rem] font-display text-[1.9375rem] font-semibold leading-[1.11] tracking-[-0.035em] text-ink text-balance sm:text-[2.25rem] sm:leading-[1.09] md:max-w-[40rem] md:text-[2.75rem] md:leading-[1.07] lg:text-[3.125rem] lg:leading-[1.06] xl:text-[3.5rem] xl:leading-[1.05]"
            >
              {HERO.headline}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-[1.66] text-ink-muted sm:mt-8 sm:text-lg sm:leading-[1.62]">
              {HERO.subheadline}
            </p>
            <div className="mt-7 flex max-w-xl flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
              <CTAButton
                href={HERO.primaryCtaHref}
                variant="primary"
                className="min-h-[52px] w-full sm:w-auto sm:min-h-[52px] sm:min-w-[220px]"
              >
                {HERO.primaryCta}
              </CTAButton>
              <CTAButton
                href={HERO.secondaryCtaHref}
                variant="ghost"
                className="min-h-[48px] justify-center sm:min-h-[52px] sm:justify-center"
              >
                {HERO.secondaryCta}
              </CTAButton>
            </div>
            <p className="mt-4 max-w-xl text-base leading-[1.62] text-ink-muted">
              {HERO.primaryCtaHint}
            </p>
            <p className="mt-7 max-w-lg text-base leading-[1.65] text-ink-muted sm:mt-10 sm:text-lg sm:leading-[1.62]">
              {HERO.support}
            </p>
          </div>
          <div className="lg:col-span-5">
            <SurfaceCard className="relative overflow-hidden border-accent/25">
              <div
                className="absolute inset-0 bg-gradient-to-br from-accent/[0.12] via-transparent to-transparent"
                aria-hidden
              />
              <div className="relative space-y-5 sm:space-y-7">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_0_3px_rgba(198,160,78,0.2)]" aria-hidden />
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-muted sm:text-sm">
                    {HERO.card.kicker}
                  </span>
                </div>
                <ul className="space-y-5 sm:space-y-8">
                  {HERO.card.chapters.map((ch) => (
                    <li key={ch.n} className="flex gap-4 sm:gap-5">
                      <span className="w-9 shrink-0 text-center font-display text-2xl font-bold leading-none text-accent tabular-nums sm:w-10 sm:text-3xl">
                        {ch.n}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-base font-semibold leading-snug text-ink">
                          {ch.title}
                        </p>
                        <p className="mt-2.5 text-base leading-[1.62] text-ink-muted sm:mt-3">
                          {ch.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </SurfaceCard>
          </div>
        </div>
      </Container>
    </section>
  );
}
