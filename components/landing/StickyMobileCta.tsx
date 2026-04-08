"use client";

import { CHECKOUT_URL, NAV } from "@/lib/constants";
import { CTAButton } from "@/components/landing/CTAButton";

export function StickyMobileCta() {
  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[60] md:hidden"
      role="region"
      aria-label="Acesso ao checkout"
    >
      <div
        className="pointer-events-auto border-t border-white/[0.08] bg-canvas/94 px-4 pt-3.5 backdrop-blur-lg backdrop-saturate-150 sm:px-5 sm:pt-4"
        style={{
          paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
        }}
      >
        <div className="mx-auto w-full max-w-6xl">
          <CTAButton
            href={CHECKOUT_URL}
            variant="primary"
            className="w-full min-h-[56px] rounded-xl px-4 py-4 text-center text-[1.125rem] font-bold leading-snug tracking-tight text-balance text-canvas shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_10px_28px_-6px_rgba(198,160,78,0.55),0_8px_24px_-8px_rgba(0,0,0,0.55)] transition-[box-shadow,background-color] duration-200 hover:bg-accent-hover hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.22),0_12px_32px_-6px_rgba(198,160,78,0.58),0_10px_28px_-8px_rgba(0,0,0,0.5)]"
          >
            {NAV.ctaLabel}
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
