import { PRODUCT_NAME, NAV } from "@/lib/constants";
import { Container } from "@/components/landing/Container";
import { CTAButton } from "@/components/landing/CTAButton";

export function NavbarSimple() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-canvas/75 backdrop-blur-xl backdrop-saturate-150">
      <Container
        as="div"
        className="flex flex-col gap-3 py-3.5 sm:h-[4.25rem] sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-0"
      >
        <a
          href="#top"
          className="min-w-0 font-display text-[1.0625rem] font-semibold leading-snug tracking-tight text-ink transition-colors duration-200 hover:text-accent sm:text-xl lg:text-2xl"
        >
          <span className="block text-balance sm:inline">{PRODUCT_NAME}</span>
        </a>
        <CTAButton
          href={NAV.ctaHref}
          variant="secondary"
          className="w-full shrink-0 px-3 py-2.5 text-base min-h-[44px] sm:w-auto sm:min-h-[48px] sm:px-5 sm:py-2.5"
        >
          <span className="sm:hidden">{NAV.ctaLabelShort}</span>
          <span className="hidden sm:inline">{NAV.ctaLabel}</span>
        </CTAButton>
      </Container>
    </header>
  );
}
