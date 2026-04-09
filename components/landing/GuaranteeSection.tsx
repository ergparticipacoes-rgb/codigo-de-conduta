import { GUARANTEE } from "@/lib/constants";
import { Container } from "@/components/landing/Container";
import { ShieldCheck } from "lucide-react";

export function GuaranteeSection() {
  return (
    <section
      className="border-t border-white/[0.06] py-12 sm:py-[4.25rem] md:py-16 lg:py-20"
      aria-labelledby="guarantee-heading"
    >
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <div className="rounded-full border border-white/[0.08] bg-panel/40 p-3 shadow-[0_2px_20px_-12px_rgba(0,0,0,0.45)]">
            <ShieldCheck
              className="h-9 w-9 text-accent sm:h-10 sm:w-10"
              strokeWidth={1.2}
              aria-hidden
            />
          </div>
          <h2
            id="guarantee-heading"
            className="mt-6 max-w-xl font-display text-2xl font-semibold leading-[1.18] tracking-tight text-ink text-balance sm:mt-7 sm:text-[1.75rem] md:text-[2rem] md:leading-[1.16]"
          >
            {GUARANTEE.title}
          </h2>
          <p className="mt-4 max-w-xl whitespace-pre-line text-base leading-[1.7] text-ink-muted sm:mt-6">
            {GUARANTEE.body}
          </p>
        </div>
      </Container>
    </section>
  );
}
