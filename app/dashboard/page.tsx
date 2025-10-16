import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

export default function Dashboard() {
  return (
    <div>
      <Header />
      <section className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
          <div className="card" style={{ padding: 16, background: "#2196f3", color: "#fff" }}>
            <h2 style={{ margin: 0 }}>Hi David, welcome to Camous!</h2>
            <div>Ready to find some great deals on campus?</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
            <div className="card" style={{ padding: 16 }}>
              <div style={{ color: "#6b7280" }}>Earnings</div>
              <div style={{ fontSize: 28, fontWeight: 800 }}>$540.20</div>
            </div>
            <div className="card" style={{ padding: 16 }}>
              <div style={{ color: "#6b7280" }}>Orders</div>
              <div style={{ fontSize: 28, fontWeight: 800 }}>12</div>
            </div>
            <div className="card" style={{ padding: 16 }}>
              <div style={{ color: "#6b7280" }}>Delivery Tasks</div>
              <div style={{ fontSize: 28, fontWeight: 800 }}>3</div>
            </div>
          </div>
          <div className="card" style={{ padding: 16 }}>
            <h3 style={{ marginTop: 0 }}>Recent Orders</h3>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              <li>Backpack · $45.00 · Delivered</li>
              <li>Calculator · $40.00 · In transit</li>
              <li>Speaker · $30.00 · Processing</li>
            </ul>
          </div>
        </div>
      </section>
      <div style={{ height: 16 }} />
      <BottomNav />
    </div>
  );
}



