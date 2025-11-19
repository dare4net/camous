export default function Recover() {
  return (
    <div className="container" style={{ maxWidth: 560 }}>
      <div style={{ height: 16 }} />
      <div className="card" style={{ padding: 24 }}>
        <h2 style={{ marginTop: 0 }}>Password Recovery</h2>
        <p style={{ color: "#6b7280" }}>Enter your university email to receive a reset link.</p>
        <div style={{ height: 8 }} />
        <label>University Email</label>
        <input className="input" placeholder="you@university.edu" />
        <div style={{ height: 16 }} />
        <button className="btn btn-primary" style={{ width: "100%" }}>Send Reset Link</button>
      </div>
    </div>
  );
}



