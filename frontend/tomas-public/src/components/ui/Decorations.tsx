/* Reusable decorative shape components — all Server-safe (pure SVG/CSS) */

/** Large blurred circle for background atmosphere */
export function BlobShape({
  color = "amber",
  className,
}: {
  color?: "amber" | "navy" | "sky" | "mint";
  className?: string;
}) {
  const colorMap: Record<string, string> = {
    amber: "bg-gold-400",
    navy:  "bg-navy-500",
    sky:   "bg-soft-sky",
    mint:  "bg-soft-mint",
  };
  return (
    <div
      aria-hidden
      className={`rounded-full blur-3xl pointer-events-none select-none ${colorMap[color]} ${className ?? ""}`}
    />
  );
}

/** CSS radial-gradient dot repeating pattern */
export function DottedPattern({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none select-none ${className ?? ""}`}
      style={{
        backgroundImage:
          "radial-gradient(circle, currentColor 1.5px, transparent 1.5px)",
        backgroundSize: "24px 24px",
      }}
    />
  );
}

/** SVG explicit dot grid — use in card corners, section accents */
export function DottedGrid({
  rows = 5,
  cols = 5,
  gap = 20,
  dotSize = 2.5,
  className,
}: {
  rows?: number;
  cols?: number;
  gap?: number;
  dotSize?: number;
  className?: string;
}) {
  const w = cols * gap;
  const h = rows * gap;
  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      className={className}
      aria-hidden
    >
      {Array.from({ length: rows * cols }, (_, i) => (
        <circle
          key={i}
          cx={(i % cols) * gap + gap / 2}
          cy={Math.floor(i / cols) * gap + gap / 2}
          r={dotSize}
          fill="currentColor"
        />
      ))}
    </svg>
  );
}

/** Wavy SVG underline — place absolutely under a heading word */
export function UnderlineSquiggle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 10"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M1 7 Q25 2 50 7 Q75 12 100 7 Q125 2 150 7 Q175 12 199 7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Globe illustration SVG — used in Hero right visual */
export function GlobeIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer circle */}
      <circle cx="160" cy="160" r="155" stroke="white" strokeWidth="1.5" opacity="0.4" />
      {/* Latitude rings */}
      <ellipse cx="160" cy="160" rx="155" ry="55"  stroke="white" strokeWidth="1" opacity="0.25" />
      <ellipse cx="160" cy="160" rx="155" ry="110" stroke="white" strokeWidth="1" opacity="0.2"  />
      {/* Longitude meridians */}
      <ellipse cx="160" cy="160" rx="55"  ry="155" stroke="white" strokeWidth="1" opacity="0.25" />
      <ellipse cx="160" cy="160" rx="110" ry="155" stroke="white" strokeWidth="1" opacity="0.2"  />
      {/* Trade route paths */}
      <path d="M 30 130 Q 160 75 290 130"  stroke="white" strokeWidth="1.5" opacity="0.55" strokeDasharray="8 5" />
      <path d="M 30 190 Q 160 245 290 190" stroke="white" strokeWidth="1.5" opacity="0.55" strokeDasharray="8 5" />
      {/* Endpoint dots */}
      <circle cx="30"  cy="130" r="5" fill="white" opacity="0.75" />
      <circle cx="290" cy="130" r="5" fill="white" opacity="0.75" />
      <circle cx="30"  cy="190" r="5" fill="white" opacity="0.75" />
      <circle cx="290" cy="190" r="5" fill="white" opacity="0.75" />
      <circle cx="160" cy="100" r="4" fill="white" opacity="0.5"  />
      <circle cx="160" cy="220" r="4" fill="white" opacity="0.5"  />
    </svg>
  );
}

/** Curved dashed SVG connector — used between Process steps */
export function CurvedConnector({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M 0 24 Q 60 6 120 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="7 5"
        strokeLinecap="round"
      />
      <polygon points="114,20 120,24 114,28" fill="currentColor" />
    </svg>
  );
}
