import Link from "next/link";

export default function Login() {
  return (
    <div className="container" style={{ maxWidth: 640 }}>
      <div style={{ height: 16 }} />
      <div className="card" style={{ padding: 24 }}>
        <div style={{ display: "flex", gap: 16 }}>
          <Link href="/auth/signup" className="chip" style={{ background: "#eef6ff", color: "#2196f3" }}>Sign Up</Link>
          <span className="chip" style={{ background: "#2196f3", color: "#fff" }}>Login</span>
        </div>
        <div style={{ height: 12 }} />
        <label>University Email</label>
        <input className="input" placeholder="Enter your university email" />
        <div style={{ height: 12 }} />
        <label>Password</label>
        <input className="input" placeholder="Enter your password" type="password" />
        <div style={{ height: 12 }} />
        <Link href="/auth/recover" style={{ color: "#2196f3", textDecoration: "none" }}>Forgot password?</Link>
        <div style={{ height: 16 }} />
        <button className="btn btn-primary" style={{ width: "100%" }}>Login</button>
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



