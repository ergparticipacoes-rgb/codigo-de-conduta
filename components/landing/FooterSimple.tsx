import { FOOTER, PRODUCT_NAME } from "@/lib/constants";
import { Container } from "@/components/landing/Container";

export function FooterSimple() {
  const year = new Date().getFullYear();
  const legal = FOOTER.legal.replace("{year}", String(year));

  return (
    <footer id="contato" className="scroll-mt-20 border-t border-white/[0.06] py-12 sm:py-14 md:py-16">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
          <div className="max-w-md">
            <p className="font-display text-xl font-semibold tracking-tight text-ink text-balance sm:text-2xl">
              {PRODUCT_NAME}
            </p>
            <p className="mt-4 text-base font-medium leading-[1.58] text-ink-muted text-balance sm:mt-5 sm:leading-[1.55]">
              {FOOTER.tagline}
            </p>
          </div>
          <nav
            aria-label="Links institucionais"
            className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-1 text-base leading-[1.6] text-ink-muted sm:mt-12 sm:justify-end"
          >
            <a
              href="#top"
              className="transition-colors hover:text-ink hover:underline hover:underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Termos
            </a>
            <span className="pointer-events-none select-none" aria-hidden>
              ·
            </span>
            <a
              href="#top"
              className="transition-colors hover:text-ink hover:underline hover:underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Privacidade
            </a>
            <span className="pointer-events-none select-none" aria-hidden>
              ·
            </span>
            <a
              href="#top"
              className="transition-colors hover:text-ink hover:underline hover:underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Suporte
            </a>
          </nav>
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-[1.62] text-ink-muted">
          {legal}
        </p>
      </Container>
    </footer>
  );
}
