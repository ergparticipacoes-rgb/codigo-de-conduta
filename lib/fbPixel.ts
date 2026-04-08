declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/** Dispara InitiateCheckout antes do redirecionamento (Pixel já deve estar carregado). */
export function trackInitiateCheckout(): void {
  if (typeof window === "undefined") return;
  if (typeof window.fbq !== "function") return;
  window.fbq("track", "InitiateCheckout");
}
