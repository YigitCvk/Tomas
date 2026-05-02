const STATS = [
  { n: "9",    label: "Hizmet Alanı",         suffix: "" },
  { n: "50",   label: "Ülke Pazarı",           suffix: "+" },
  { n: "100",  label: "Aktif İş Ortağı",       suffix: "+" },
  { n: "2018", label: "Kuruluş Yılı",          suffix: "" },
];

export default function Stats() {
  return (
    <section style={{ backgroundColor: "#ffcc00", borderBottom: "3px solid #1a1a1a", borderTop: "3px solid #1a1a1a" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: 0 }}>
          {STATS.map(({ n, label, suffix }, i) => (
            <div key={label} style={{ padding: "48px 32px", borderRight: i < STATS.length - 1 ? "3px solid #1a1a1a" : "none", textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 900, fontSize: "clamp(2.5rem,5vw,4rem)", color: "#1a1a1a", lineHeight: 1 }}>
                {n}<span style={{ fontSize: "0.6em" }}>{suffix}</span>
              </div>
              <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(26,26,26,0.6)", marginTop: 10, letterSpacing: "0.08em", textTransform: "uppercase" as const }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
