import { BREAK_BELIEF } from "@/lib/constants";
import { Container } from "@/components/landing/Container";
import { SectionBadge } from "@/components/landing/SectionBadge";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { SurfaceCard } from "@/components/landing/SurfaceCard";

export function BreakBeliefSection() {
  return (
    <section
      className="border-y border-white/[0.06] bg-elevated/45 py-12 sm:py-[4.25rem] md:py-20 lg:py-24"
      aria-labelledby="break-heading"
    >
      <Container>
        <SectionBadge>{BREAK_BELIEF.badge}</SectionBadge>
        <SectionHeading
          id="break-heading"
          title={BREAK_BELIEF.title}
          className="mb-8 sm:mb-12"
        />
        <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
          <SurfaceCard>
            <p className="whitespace-pre-line text-base leading-[1.66] text-ink-muted sm:text-lg">
              {BREAK_BELIEF.lead}
            </p>
            <p className="mt-6 whitespace-pre-line border-l-2 border-accent/80 pl-5 text-base font-medium leading-[1.66] text-ink sm:mt-7 sm:text-lg">
              {BREAK_BELIEF.emphasis}
            </p>
          </SurfaceCard>
          <div className="grid gap-5">
            <SurfaceCard className="border-border/55 bg-panel/45">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted sm:text-sm">
                {BREAK_BELIEF.contrast.mythLabel}
              </p>
              <p className="mt-4 text-base leading-[1.65] text-ink-muted">
                {BREAK_BELIEF.contrast.myth}
              </p>
            </SurfaceCard>
            <SurfaceCard className="border-accent/30 bg-panel/[0.95]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent sm:text-sm">
                {BREAK_BELIEF.contrast.truthLabel}
              </p>
              <p className="mt-4 text-base leading-[1.65] text-ink">
                {BREAK_BELIEF.contrast.truth}
              </p>
            </SurfaceCard>
          </div>
        </div>
      </Container>
    </section>
  );
}
