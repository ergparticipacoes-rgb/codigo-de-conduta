"use client";

import { useState } from "react";
import { FAQ, FAQ_ITEMS } from "@/lib/constants";
import { Container } from "@/components/landing/Container";
import { SectionBadge } from "@/components/landing/SectionBadge";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="scroll-mt-28 border-t border-white/[0.06] bg-elevated/40 py-12 sm:scroll-mt-24 sm:py-[4.25rem] md:py-20 lg:py-24"
      aria-labelledby="faq-heading"
    >
      <Container>
        <SectionBadge>{FAQ.badge}</SectionBadge>
        <h2 id="faq-heading" className="sr-only">
          Perguntas frequentes
        </h2>
        <div className="mx-auto mt-7 max-w-3xl overflow-hidden rounded-2xl border border-white/[0.07] bg-panel/45 shadow-[0_2px_28px_-14px_rgba(0,0,0,0.5)] sm:mt-10">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = open === index;
            return (
              <div
                key={item.q}
                className="border-b border-border/55 last:border-b-0"
              >
                <div className="px-5 sm:px-8">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    className="flex min-h-[52px] w-full items-start justify-between gap-4 py-5 text-left transition-[background-color,color] duration-200 ease-out hover:bg-white/[0.03] sm:min-h-[56px] sm:py-6"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-trigger-${index}`}
                  >
                    <span className="pt-0.5 text-base font-medium leading-snug text-ink">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`mt-1 h-5 w-5 shrink-0 text-accent transition-transform duration-300 ease-[cubic-bezier(0.33,1,0.68,1)] ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      strokeWidth={1.75}
                      aria-hidden
                    />
                  </button>
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${index}`}
                    className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.33,1,0.68,1)] ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="pb-5 pr-2 text-base leading-[1.65] text-ink-muted sm:pb-6">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
