import type { ReactNode } from "react";

type SurfaceCardProps = {
  children: ReactNode;
  className?: string;
  padded?: boolean;
};

export function SurfaceCard({
  children,
  className = "",
  padded = true,
}: SurfaceCardProps) {
  return (
    <div
      className={`rounded-2xl border border-white/[0.07] bg-panel/[0.92] shadow-[0_2px_28px_-14px_rgba(0,0,0,0.55)] backdrop-blur-sm transition-[box-shadow,border-color,background-color] duration-300 ease-out hover:border-white/[0.1] hover:shadow-[0_12px_40px_-20px_rgba(0,0,0,0.6)] ${
        padded ? "p-6 sm:p-7 md:p-8" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
