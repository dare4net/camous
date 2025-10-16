"use client";

export default function JobsView() {
  return (
    <section className="container">
      <div className="card" style={{ padding: 16 }}>
        <h2 style={{ marginTop: 0 }}>Student Jobs</h2>
        <p style={{ color: "#6b7280" }}>Find part‑time gigs and internships around campus.</p>
        <div style={{ display: "grid", gap: 12 }}>
          <div className="card" style={{ padding: 12 }}>
            <strong>Library Assistant</strong>
            <div style={{ color: "#6b7280" }}>10 hrs/week • $15/hr</div>
          </div>
          <div className="card" style={{ padding: 12 }}>
            <strong>Computer Lab Monitor</strong>
            <div style={{ color: "#6b7280" }}>Evenings • $16/hr</div>
          </div>
          <div className="card" style={{ padding: 12 }}>
            <strong>Research Assistant (Psych)</strong>
            <div style={{ color: "#6b7280" }}>Flexible • Stipend</div>
          </div>
        </div>
      </div>
    </section>
  );
}


