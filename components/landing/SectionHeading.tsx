type SectionHeadingProps = {
  title: string;
  /** Frase curta entre título e subtítulo (ex.: oferta). */
  microLine?: string;
  subtitle?: string;
  /** Primeira linha do subtítulo mais forte (ex.: oferta em 3 linhas). */
  emphasizeFirstSubtitleLine?: boolean;
  align?: "left" | "center";
  className?: string;
  id?: string;
};

export function SectionHeading({
  title,
  microLine,
  subtitle,
  emphasizeFirstSubtitleLine = false,
  align = "left",
  className = "",
  id,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  const subMargin =
    microLine != null && microLine !== ""
      ? "mt-4 max-w-2xl sm:mt-6"
      : "mt-5 max-w-2xl sm:mt-7";

  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      <h2
        id={id}
        className="font-display text-[1.75rem] font-semibold leading-[1.18] tracking-[-0.02em] text-ink text-balance sm:text-[1.875rem] sm:leading-[1.17] md:text-[2.125rem] md:leading-[1.15] lg:text-[2.25rem] lg:leading-[1.14] xl:text-[2.375rem] xl:leading-[1.13]"
      >
        {title}
      </h2>
      {microLine ? (
        <p
          className={`mt-2.5 max-w-2xl text-base font-medium leading-snug tracking-wide text-ink-muted sm:mt-4 ${align === "center" ? "mx-auto" : ""}`}
        >
          {microLine}
        </p>
      ) : null}
      {subtitle ? (
        emphasizeFirstSubtitleLine && subtitle.includes("\n") ? (
          <div
            className={`${subMargin} flex flex-col gap-0 text-base leading-[1.65] sm:text-lg ${align === "center" ? "mx-auto text-center" : ""}`}
          >
            {subtitle
              .split("\n")
              .map((line) => line.trim())
              .filter(Boolean)
              .map((line, i) => (
                <p
                  key={i}
                  className={`m-0 ${i === 0 ? "font-semibold text-ink" : "text-ink-muted"} ${align === "center" ? "mx-auto" : ""}`}
                >
                  {line}
                </p>
              ))}
          </div>
        ) : (
          <p
            className={`${subMargin} whitespace-pre-line text-base leading-[1.65] text-ink-muted sm:text-lg ${align === "center" ? "mx-auto" : ""}`}
          >
            {subtitle}
          </p>
        )
      ) : null}
    </div>
  );
}
