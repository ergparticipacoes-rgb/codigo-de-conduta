"use client";

import { CHECKOUT_URL, NAV } from "@/lib/constants";
import { CTAButton } from "@/components/landing/CTAButton";

/**
 * Mobile (< md): `position: sticky; bottom: 0` no fluxo do documento (após o footer).
 * Evita no iPhone Safari o “vão” entre layout viewport e visual viewport típico de
 * `position: fixed` quando a barra de endereço expande/recolhe.
 *
 * Requer wrapper em `page.tsx` com `flex flex-col min-h-svh` no mobile para a coluna
 * ocupar pelo menos a altura estável da tela (`svh`).
 */
export function StickyMobileCta() {
  return (
    <div
      className="sticky bottom-0 z-[60] w-full shrink-0 md:hidden"
      role="region"
      aria-label="Acesso ao checkout"
    >
      <div
        className="border-t border-white/[0.12] bg-canvas px-4 pt-3 shadow-[0_-4px_24px_-8px_rgba(0,0,0,0.45)] sm:px-5 sm:pt-3.5"
        style={{
          paddingBottom:
            "calc(0.75rem + env(safe-area-inset-bottom, 0px))",
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
