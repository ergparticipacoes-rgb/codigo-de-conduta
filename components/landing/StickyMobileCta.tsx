"use client";

import { CHECKOUT_URL, STICKY_MOBILE_CTA_LABEL } from "@/lib/constants";
import { CTAButton } from "@/components/landing/CTAButton";

export function StickyMobileCta() {
  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[60] md:hidden"
      role="region"
      aria-label="Acesso ao checkout"
    >
      <div
        className="pointer-events-auto border-t border-white/[0.07] bg-canvas/92 px-4 py-3.5 backdrop-blur-lg backdrop-saturate-150 sm:px-5"
        style={{
          paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))",
        }}
      >
        <div className="mx-auto w-full max-w-6xl">
          <CTAButton
            href={CHECKOUT_URL}
            variant="primary"
            className="w-full shadow-[0_-4px_24px_-8px_rgba(0,0,0,0.45)]"
          >
            {STICKY_MOBILE_CTA_LABEL}
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
