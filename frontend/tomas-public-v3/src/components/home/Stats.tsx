const STATS = [
  { n: "9",    label: "Hizmet Alanı",    suffix: "" },
  { n: "50",   label: "Ülke Pazarı",     suffix: "+" },
  { n: "100",  label: "Aktif İş Ortağı", suffix: "+" },
  { n: "2018", label: "Kuruluş Yılı",    suffix: "" },
];

export default function Stats() {
  return (
    <section style={{ backgroundColor: "#F9FAFB", borderTop: "1px solid #E4E7EF", borderBottom: "1px solid #E4E7EF" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: 0 }}>
          {STATS.map(({ n, label, suffix }, i) => (
            <div key={label} style={{ padding: "48px 32px", borderRight: i < STATS.length - 1 ? "1px solid #E4E7EF" : "none", textAlign: "center" }}>
              <div style={{ fontWeight: 800, fontSize: "clamp(2.2rem,4vw,3.5rem)", color: "#0B5CFF", lineHeight: 1 }}>
                {n}<span style={{ fontSize: "0.6em" }}>{suffix}</span>
              </div>
              <div style={{ fontSize: 13, fontWeight: 500, color: "#6B7280", marginTop: 10, letterSpacing: "0.05em" }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
