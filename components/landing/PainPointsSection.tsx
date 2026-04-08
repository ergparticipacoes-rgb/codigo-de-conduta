import { PAIN_POINTS } from "@/lib/constants";
import { Container } from "@/components/landing/Container";
import { SectionBadge } from "@/components/landing/SectionBadge";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { SurfaceCard } from "@/components/landing/SurfaceCard";

export function PainPointsSection() {
  return (
    <section
      id="identificacao"
      className="scroll-mt-20 py-14 sm:py-[4.25rem] md:py-20 lg:py-24"
      aria-labelledby="pain-heading"
    >
      <Container>
        <SectionBadge>{PAIN_POINTS.badge}</SectionBadge>
        <SectionHeading
          id="pain-heading"
          title={PAIN_POINTS.title}
          subtitle={PAIN_POINTS.subtitle}
        />
        <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 md:mx-auto md:max-w-5xl lg:mt-14 lg:max-w-none lg:gap-6">
          {PAIN_POINTS.items.map((item) => (
            <SurfaceCard key={item.title}>
              <h3 className="font-display text-xl font-semibold leading-snug tracking-tight text-ink sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-5 text-base leading-[1.62] text-ink-muted">
                {item.description}
              </p>
            </SurfaceCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
