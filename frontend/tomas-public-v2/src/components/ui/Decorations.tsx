/* Bauhaus / Neo-Brutalist decorative components */

export function GridPattern({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        backgroundImage:
          "linear-gradient(rgba(26,26,26,1) 1px, transparent 1px), linear-gradient(90deg, rgba(26,26,26,1) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        opacity: 0.04,
      }}
    />
  );
}

export function BauhausCircle({
  size = 120,
  color = "#ffcc00",
  className = "",
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: color,
        border: "3px solid #1a1a1a",
        flexShrink: 0,
      }}
    />
  );
}

export function BauhausSquare({
  size = 80,
  color = "#0055ff",
  className = "",
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        border: "3px solid #1a1a1a",
        flexShrink: 0,
      }}
    />
  );
}

export function ThickDivider({
  color = "#1a1a1a",
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{ height: 3, backgroundColor: color }}
    />
  );
}

export function SectionNumber({
  n,
  className = "",
}: {
  n: string;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={className}
      style={{
        fontFamily: "var(--font-space-grotesk)",
        fontWeight: 900,
        fontSize: "clamp(5rem,12vw,10rem)",
        color: "#1a1a1a",
        opacity: 0.05,
        lineHeight: 1,
        userSelect: "none",
        display: "block",
      }}
    >
      {n}
    </span>
  );
}
