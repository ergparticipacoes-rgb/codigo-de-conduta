"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { CHECKOUT_URL } from "@/lib/constants";
import { trackInitiateCheckout } from "@/lib/fbPixel";

type CTAButtonVariant = "primary" | "secondary" | "ghost";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: CTAButtonVariant;
  className?: string;
  /** Links externos em nova aba (não usar no checkout principal). */
  external?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl min-h-[48px] px-6 py-3.5 text-base tracking-normal transition-[color,background-color,border-color,box-shadow] duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variants: Record<CTAButtonVariant, string> = {
  primary:
    "font-bold bg-accent text-canvas shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14)] ring-1 ring-white/10 hover:bg-accent-hover hover:shadow-[0_4px_20px_-6px_rgba(198,160,78,0.45)]",
  secondary:
    "font-bold border-2 border-accent/55 bg-panel/50 text-ink shadow-sm hover:border-accent/80 hover:bg-panel/70 hover:shadow-[0_6px_24px_-12px_rgba(0,0,0,0.4)]",
  ghost:
    "min-h-[44px] px-3 py-2.5 font-semibold text-ink underline-offset-[5px] hover:text-accent hover:underline",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: CTAButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const isCheckoutLink = href === CHECKOUT_URL;

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  if (href.startsWith("http://") || href.startsWith("https://")) {
    return (
      <a
        href={href}
        className={classes}
        onClick={
          isCheckoutLink
            ? (e) => {
                e.preventDefault();
                trackInitiateCheckout();
                window.setTimeout(() => {
                  window.location.assign(href);
                }, 120);
              }
            : undefined
        }
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
