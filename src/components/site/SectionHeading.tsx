import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <Reveal>
        {eyebrow && (
          <div className={`inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-accent text-petrol text-xs font-semibold tracking-wide uppercase ${align === "center" ? "" : ""}`}>
            <span className="h-1.5 w-1.5 rounded-full bg-petrol" />
            {eyebrow}
          </div>
        )}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold leading-[1.1] text-foreground tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        )}
      </Reveal>
    </div>
  );
}
