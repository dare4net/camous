"use client";

export default function ProfileView() {
  return (
    <div>
      <section className="container">
        <div className="card" style={{ padding: 16 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div className="card" style={{ width: 80, height: 80, borderRadius: 999 }} />
              <div>
                <h2 style={{ margin: 0 }}>Alex Doe</h2>
                <div style={{ color: "#6b7280" }}>alex.doe@camous.app</div>
              </div>
            </div>
            <a href="#" className="chip" style={{ background: "#ff9800", color: "#111" }}>Edit</a>
          </div>
        </div>

        <div style={{ height: 12 }} />
        <div className="card" style={{ padding: 16 }}>
          <h3 style={{ marginTop: 0 }}>Personal Information</h3>
          <div style={{ display: "grid", gap: 8 }}>
            <div>Name: Alex Doe</div>
            <div>Email: alex.doe@camous.app</div>
            <div>Phone: +1 (234) 567-890</div>
          </div>
        </div>

        <div style={{ height: 12 }} />
        <div className="card" style={{ padding: 16 }}>
          <h3 style={{ marginTop: 0 }}>Notification Preferences</h3>
          <div style={{ display: "grid", gap: 8 }}>
            <label style={{ display: "flex", justifyContent: "space-between" }}>New Messages <input type="checkbox" defaultChecked /></label>
            <label style={{ display: "flex", justifyContent: "space-between" }}>Job Alerts <input type="checkbox" defaultChecked /></label>
            <label style={{ display: "flex", justifyContent: "space-between" }}>App Updates <input type="checkbox" /></label>
          </div>
        </div>

        <div style={{ height: 12 }} />
        <button className="btn btn-primary" style={{ width: "100%" }}>Save Changes</button>
      </section>
    </div>
  );
}


