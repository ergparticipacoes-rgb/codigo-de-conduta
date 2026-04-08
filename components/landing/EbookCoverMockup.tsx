import { OFFER, PRODUCT_NAME } from "@/lib/constants";

/** Overlay azul-noite ~68–78% (faixa 60–80%) para texto sempre em primeiro plano */
const COVER_OVERLAY =
  "linear-gradient(180deg, rgba(5, 8, 14, 0.72) 0%, rgba(5, 8, 14, 0.76) 42%, rgba(5, 8, 14, 0.78) 100%)";

export function EbookCoverMockup() {
  const src = OFFER.mockupCoverImageSrc;

  return (
    <div
      className="relative flex h-full min-h-[17.5rem] w-full flex-col justify-between overflow-hidden rounded-xl border border-accent/35 shadow-[0_12px_48px_-24px_rgba(0,0,0,0.75)]"
      style={{
        backgroundColor: "#0a0d12",
        backgroundImage: `${COVER_OVERLAY}, url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center 44%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_75%_at_50%_0%,rgba(198,160,78,0.09),transparent_55%)]"
        aria-hidden
      />
      <div className="relative z-[1] flex min-h-0 flex-1 flex-col justify-between gap-8 p-6 sm:p-8 sm:gap-10 md:p-9">
        <div className="max-w-[95%] space-y-4 sm:space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent sm:text-sm sm:tracking-[0.32em] [text-shadow:0_1px_3px_rgba(0,0,0,0.85)]">
            {OFFER.mockupEyebrow}
          </p>
          <p className="font-display text-2xl font-semibold leading-[1.14] tracking-tight text-ink text-balance sm:text-3xl sm:leading-[1.12] [text-shadow:0_2px_20px_rgba(0,0,0,0.65)]">
            {PRODUCT_NAME}
          </p>
          <p className="max-w-sm text-base font-medium leading-snug text-[#eceae4] sm:text-lg [text-shadow:0_1px_12px_rgba(0,0,0,0.55)]">
            {OFFER.mockupStrapline}
          </p>
        </div>
        <div className="space-y-5 border-t border-white/[0.18] pt-6 sm:space-y-6 sm:pt-7">
          <p className="text-base leading-[1.62] text-[#d4d0c8] [text-shadow:0_1px_10px_rgba(0,0,0,0.5)]">
            {OFFER.mockupNote}
          </p>
        </div>
      </div>
    </div>
  );
}
