import { PRODUCT_SOLUTION } from "@/lib/constants";
import { Container } from "@/components/landing/Container";
import { SectionBadge } from "@/components/landing/SectionBadge";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { SurfaceCard } from "@/components/landing/SurfaceCard";
import { BookMarked, Compass, FileCheck, ListChecks } from "lucide-react";

const icons = [BookMarked, Compass, ListChecks, FileCheck];

export function ProductSolutionSection() {
  return (
    <section
      className="py-14 sm:py-[4.25rem] md:py-20 lg:py-24"
      aria-labelledby="solution-heading"
    >
      <Container>
        <SectionBadge>{PRODUCT_SOLUTION.badge}</SectionBadge>
        <SectionHeading
          id="solution-heading"
          title={PRODUCT_SOLUTION.title}
          subtitle={PRODUCT_SOLUTION.subtitle}
        />
        {PRODUCT_SOLUTION.authorityNote.trim() ? (
          <p className="mt-6 max-w-2xl text-base leading-[1.65] text-ink-muted sm:mt-7">
            {PRODUCT_SOLUTION.authorityNote}
          </p>
        ) : null}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:mx-auto md:max-w-5xl md:gap-6 lg:mt-12 lg:max-w-none lg:grid-cols-4">
          {PRODUCT_SOLUTION.benefits.map((b, i) => {
            const Icon = icons[i] ?? BookMarked;
            return (
              <SurfaceCard key={b.title} className="flex flex-col">
                <Icon className="h-6 w-6 text-accent" strokeWidth={1.6} aria-hidden />
                <h3 className="mt-6 font-display text-xl font-semibold leading-snug tracking-tight text-ink sm:text-2xl">
                  {b.title}
                </h3>
                <p className="mt-4 flex-1 text-base leading-[1.65] text-ink-muted">
                  {b.description}
                </p>
              </SurfaceCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
