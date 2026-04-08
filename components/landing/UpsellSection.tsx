import { UPSELL } from "@/lib/constants";
import { Container } from "@/components/landing/Container";
import { SectionBadge } from "@/components/landing/SectionBadge";
import { SurfaceCard } from "@/components/landing/SurfaceCard";
import { CTAButton } from "@/components/landing/CTAButton";
import { Sparkles } from "lucide-react";

export function UpsellSection() {
  return (
    <section
      className="py-14 sm:py-[4.25rem] md:py-20"
      aria-labelledby="upsell-heading"
    >
      <Container>
        <SurfaceCard
          padded={false}
          className="mx-auto max-w-3xl border-white/[0.07] bg-panel/50 p-6 sm:p-8 md:p-9"
        >
          <div className="flex flex-col">
            <SectionBadge>{UPSELL.badge}</SectionBadge>
            <h2
              id="upsell-heading"
              className="mt-1 font-display text-[1.625rem] font-semibold leading-[1.18] tracking-[-0.02em] text-ink text-balance sm:mt-2 sm:text-[1.875rem] sm:leading-[1.16] md:text-[2rem] md:leading-[1.14] lg:text-[2.125rem]"
            >
              {UPSELL.title}
            </h2>
            <p className="mt-5 max-w-2xl whitespace-pre-line text-base leading-[1.66] text-ink-muted sm:mt-6 sm:text-lg sm:leading-[1.65]">
              {UPSELL.description}
            </p>
            <ul className="mt-6 space-y-4 sm:mt-7 sm:space-y-[1.125rem]">
              {UPSELL.points.map((p) => (
                <li
                  key={p}
                  className="flex gap-3.5 text-base leading-[1.65] text-ink-muted"
                >
                  <Sparkles
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="mt-7 border-t border-white/[0.07] pt-6 text-base leading-[1.62] text-ink-muted sm:mt-8 sm:pt-7">
              {UPSELL.note}
            </p>
            <div className="mt-8 flex justify-center sm:mt-9">
              <div className="w-full max-w-md">
                <CTAButton
                  href={UPSELL.ctaHref}
                  variant="secondary"
                  external
                  className="w-full min-h-[50px] min-w-0 sm:min-h-[52px]"
                >
                  {UPSELL.cta}
                </CTAButton>
              </div>
            </div>
          </div>
        </SurfaceCard>
      </Container>
    </section>
  );
}
