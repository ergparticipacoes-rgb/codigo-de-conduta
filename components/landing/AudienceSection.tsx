import { AUDIENCE } from "@/lib/constants";
import { Container } from "@/components/landing/Container";
import { SectionBadge } from "@/components/landing/SectionBadge";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { SurfaceCard } from "@/components/landing/SurfaceCard";
import { Check, X } from "lucide-react";

export function AudienceSection() {
  return (
    <section
      className="border-t border-white/[0.06] bg-elevated/40 py-14 sm:py-[4.25rem] md:py-20 lg:py-24"
      aria-labelledby="audience-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <SectionBadge className="justify-center">
            {AUDIENCE.badge}
          </SectionBadge>
          <SectionHeading
            id="audience-heading"
            title={AUDIENCE.title}
            align="center"
            className="mx-auto"
          />
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:mt-12 md:grid-cols-2 md:gap-7 lg:mt-14">
          <SurfaceCard className="border-emerald-950/35 bg-panel/55">
            <h3 className="font-display text-xl font-semibold leading-snug text-ink sm:text-2xl">
              {AUDIENCE.forWho.title}
            </h3>
            <ul className="mt-6 space-y-4 sm:space-y-4">
              {AUDIENCE.forWho.lines.map((line) => (
                <li key={line} className="flex gap-3 text-base leading-[1.65] text-ink-muted">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </SurfaceCard>
          <SurfaceCard className="border-white/[0.06] bg-panel/40">
            <h3 className="font-display text-xl font-semibold leading-snug text-ink sm:text-2xl">
              {AUDIENCE.notFor.title}
            </h3>
            <ul className="mt-6 space-y-4 sm:space-y-4">
              {AUDIENCE.notFor.lines.map((line) => (
                <li key={line} className="flex gap-3 text-base leading-[1.65] text-ink-muted">
                  <X
                    className="mt-0.5 h-5 w-5 shrink-0 text-ink-muted"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </SurfaceCard>
        </div>
      </Container>
    </section>
  );
}
