import { TESTIMONIALS } from "@/lib/constants";
import { Container } from "@/components/landing/Container";
import { SectionHeading } from "@/components/landing/SectionHeading";

export function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="scroll-mt-20 border-t border-white/[0.06] bg-elevated/40 py-14 sm:py-[4.25rem] md:py-20 lg:py-24"
      aria-labelledby="testimonials-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            id="testimonials-heading"
            title={TESTIMONIALS.title}
            align="center"
            className="mx-auto"
          />
        </div>
        <ul className="mx-auto mt-10 grid max-w-6xl list-none grid-cols-1 gap-6 sm:mt-12 md:mx-auto md:max-w-5xl md:grid-cols-2 md:gap-7 lg:mt-14 lg:max-w-6xl lg:grid-cols-3 lg:gap-7">
          {TESTIMONIALS.items.map((item) => (
            <li key={item.quote}>
              <div className="flex h-full min-h-0 flex-col rounded-2xl border border-white/[0.11] bg-white/[0.045] shadow-[0_2px_22px_-14px_rgba(0,0,0,0.48)] backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-200 ease-out hover:border-white/[0.16] hover:shadow-[0_6px_28px_-14px_rgba(0,0,0,0.48)] motion-safe:hover:-translate-y-0.5 motion-reduce:hover:translate-y-0">
                <blockquote className="m-0 flex min-h-0 flex-1 flex-col border-0 p-5 sm:p-6 md:p-6">
                  <p className="text-base leading-[1.65] text-ink text-pretty">
                    {item.quote}
                  </p>
                  <footer className="mt-5 space-y-1.5 sm:mt-6">
                    <p className="text-base font-semibold leading-snug text-ink">
                      — {item.firstName} {item.lastName}
                    </p>
                    <p className="text-base leading-snug text-ink-muted">
                      {item.profession}
                    </p>
                  </footer>
                </blockquote>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
