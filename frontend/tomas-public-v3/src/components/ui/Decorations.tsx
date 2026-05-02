export function GridPattern({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        backgroundImage:
          "radial-gradient(circle, #0B5CFF 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        opacity: 0.06,
      }}
    />
  );
}
