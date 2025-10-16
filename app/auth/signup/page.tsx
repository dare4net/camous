export default function Signup() {
  return (
    <div className="container" style={{ maxWidth: 640 }}>
      <div style={{ height: 16 }} />
      <div className="card" style={{ padding: 24 }}>
        <div style={{ display: "flex", gap: 16 }}>
          <span className="chip" style={{ background: "#2196f3", color: "#fff" }}>Sign Up</span>
          <a className="chip" href="/auth/login" style={{ background: "#eef6ff", color: "#2196f3", textDecoration: "none" }}>Login</a>
        </div>
        <div style={{ height: 12 }} />
        <label>Full Name</label>
        <input className="input" placeholder="Enter your full name" />
        <div style={{ height: 12 }} />
        <label>University Email</label>
        <input className="input" placeholder="Enter your university email" />
        <div style={{ height: 12 }} />
        <label>Password</label>
        <input className="input" placeholder="Enter your password" type="password" />
        <div style={{ height: 12 }} />
        <label>Select your School</label>
        <select className="select">
          <option>Select a school</option>
          <option>Harvard University</option>
          <option>State University</option>
        </select>
        <div style={{ height: 12 }} />
        <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <input type="checkbox" /> I agree to the <a href="#" style={{ color: "#2196f3", textDecoration: "none" }}>Terms of Service</a> and <a href="#" style={{ color: "#2196f3", textDecoration: "none" }}>Privacy Policy</a>.
        </label>
        <div style={{ height: 16 }} />
        <button className="btn btn-primary" style={{ width: "100%" }}>Sign Up</button>
        <div style={{ height: 16 }} />
        <div style={{ textAlign: "center", color: "#6b7280" }}>Or sign in with</div>
        <div style={{ display: "grid", gap: 8, marginTop: 8 }}>
          <button className="btn" style={{ background: "#fff", border: "1px solid #e5e7eb" }}>Sign in with Google</button>
          <button className="btn" style={{ background: "#111", color: "#fff" }}>Sign in with Apple</button>
        </div>
      </div>
    </div>
  );
}



