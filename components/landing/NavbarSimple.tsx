import { PRODUCT_NAME, NAV } from "@/lib/constants";
import { Container } from "@/components/landing/Container";
import { CTAButton } from "@/components/landing/CTAButton";

type NavbarSimpleProps = { className?: string };

export function NavbarSimple({ className = "" }: NavbarSimpleProps) {
  return (
    <header
      className={`sticky top-0 z-50 shrink-0 border-b border-white/[0.06] bg-canvas/75 backdrop-blur-xl backdrop-saturate-150 ${className}`}
    >
      <Container
        as="div"
        className="flex items-center justify-center py-3.5 sm:h-[4.25rem] sm:justify-between sm:gap-4 sm:py-0"
      >
        <a
          href="#top"
          className="w-full min-w-0 px-1 text-center font-display text-[1.125rem] font-semibold leading-[1.2] tracking-tight text-ink text-balance transition-colors duration-200 hover:text-accent sm:w-auto sm:max-w-none sm:px-0 sm:text-left sm:text-xl sm:leading-snug lg:text-2xl"
        >
          {PRODUCT_NAME}
        </a>
        <CTAButton
          href={NAV.ctaHref}
          variant="secondary"
          className="max-sm:!hidden sm:!inline-flex shrink-0 px-5 py-2.5 text-base min-h-[48px] sm:min-h-[48px]"
        >
          {NAV.ctaLabel}
        </CTAButton>
      </Container>
    </header>
  );
}
