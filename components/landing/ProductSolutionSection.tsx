import { PRODUCT_SOLUTION } from "@/lib/constants";
import { Container } from "@/components/landing/Container";
import { SectionBadge } from "@/components/landing/SectionBadge";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { SurfaceCard } from "@/components/landing/SurfaceCard";
import { BookMarked, Compass, FileCheck, ListChecks } from "lucide-react";

const icons = [BookMarked, Compass, ListChecks, FileCheck];

const proseCard =
  "mt-5 max-w-3xl whitespace-pre-line text-base leading-[1.7] text-ink-muted sm:mt-6 sm:text-[1.0625rem] sm:leading-[1.68]";

export function ProductSolutionSection() {
  return (
    <section
      className="py-12 sm:py-[4.25rem] md:py-20 lg:py-24"
      aria-labelledby="solution-heading"
    >
      <Container>
        <SectionBadge>{PRODUCT_SOLUTION.badge}</SectionBadge>

        <SurfaceCard className="border-accent/25 bg-panel/40">
          <h3 className="font-display text-xl font-semibold leading-snug tracking-tight text-ink sm:text-2xl">
            {PRODUCT_SOLUTION.mechanismTitle}
          </h3>
          <p className={proseCard}>{PRODUCT_SOLUTION.mechanismBody}</p>
        </SurfaceCard>

        <div className="mt-10 sm:mt-12 lg:mt-14">
          <SectionHeading
            id="solution-heading"
            title={PRODUCT_SOLUTION.title}
            subtitle={PRODUCT_SOLUTION.subtitle}
          />
        </div>
        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 md:mx-auto md:max-w-5xl md:gap-6 lg:mt-10 lg:max-w-none lg:grid-cols-4">
          {PRODUCT_SOLUTION.benefits.map((b, i) => {
            const Icon = icons[i] ?? BookMarked;
            return (
              <SurfaceCard key={b.title} className="flex flex-col">
                <Icon className="h-6 w-6 text-accent" strokeWidth={1.6} aria-hidden />
                <h3 className="mt-5 font-display text-xl font-semibold leading-snug tracking-tight text-ink sm:mt-6 sm:text-2xl">
                  {b.title}
                </h3>
                <p className="mt-3 flex-1 text-base leading-[1.65] text-ink-muted sm:mt-4">
                  {b.description}
                </p>
              </SurfaceCard>
            );
          })}
        </div>
        {PRODUCT_SOLUTION.authorityNote.trim() ? (
          <p className="mt-8 max-w-2xl whitespace-pre-line text-base font-medium leading-[1.7] text-ink/95 sm:mt-10">
            {PRODUCT_SOLUTION.authorityNote}
          </p>
        ) : null}

        <div className="mt-12 space-y-6 sm:mt-14 sm:space-y-8 lg:mt-16">
          <SurfaceCard className="border-accent/20">
            <h3 className="font-display text-xl font-semibold leading-snug tracking-tight text-ink sm:text-2xl">
              {PRODUCT_SOLUTION.howItWorksTitle}
            </h3>
            <p className={proseCard}>{PRODUCT_SOLUTION.howItWorksBody}</p>
          </SurfaceCard>

          <SurfaceCard className="border-white/[0.1] bg-elevated/35">
            <h3
              className="font-display text-xl font-semibold leading-snug tracking-tight text-ink sm:text-2xl"
              id="usage-context-heading"
            >
              {PRODUCT_SOLUTION.visualizationTitle}
            </h3>
            <p className={proseCard}>{PRODUCT_SOLUTION.visualizationBody}</p>
          </SurfaceCard>

          <SurfaceCard className="border-white/[0.08] bg-panel/50">
            <h3
              className="font-display text-xl font-semibold leading-snug tracking-tight text-ink sm:text-2xl"
              id="results-practice-heading"
            >
              {PRODUCT_SOLUTION.resultsTitle}
            </h3>
            <p className={proseCard}>{PRODUCT_SOLUTION.resultsBody}</p>
          </SurfaceCard>
        </div>
      </Container>
    </section>
  );
}
