import { PRODUCT_NAME, NAV } from "@/lib/constants";
import { Container } from "@/components/landing/Container";
import { CTAButton } from "@/components/landing/CTAButton";

export function NavbarSimple() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-canvas/75 backdrop-blur-xl backdrop-saturate-150">
      <Container
        as="div"
        className="flex h-14 items-center justify-between gap-4 sm:h-[4.25rem]"
      >
        <a
          href="#top"
          className="min-w-0 font-display text-lg font-semibold tracking-tight text-ink transition-colors duration-200 hover:text-accent sm:text-xl lg:text-2xl"
        >
          <span className="truncate">{PRODUCT_NAME}</span>
        </a>
        <CTAButton
          href={NAV.ctaHref}
          variant="secondary"
          className="shrink-0 px-4 py-2.5 sm:px-5"
        >
          {NAV.ctaLabel}
        </CTAButton>
      </Container>
    </header>
  );
}
