type SectionBadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionBadge({ children, className = "" }: SectionBadgeProps) {
  return (
    <p
      className={`mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent sm:mb-6 sm:text-sm sm:tracking-[0.22em] ${className}`}
    >
      <span
        className="h-px w-7 bg-accent/55 sm:w-9"
        aria-hidden
      />
      {children}
    </p>
  );
}
