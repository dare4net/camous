import Header from "../../components/Header";
import BottomNav from "../../components/BottomNav";

type ProductDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetail({ params }: ProductDetailPageProps) {
  const { id } = await params;
  return (
    <div>
      <Header />
      <section className="container">
        <div className="card" style={{ padding: 12 }}>
          <div style={{ position: "relative", width: "100%", paddingTop: "66%", background: "#e5e7eb", borderRadius: 12 }} />
          <div style={{ padding: 12 }}>
            <h1 style={{ margin: "8px 0", fontSize: 28 }}>Vintage Cruiser Bicycle</h1>
            <div style={{ color: "#ff9800", fontWeight: 800, fontSize: 24 }}>$120.00</div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div className="card" style={{ width: 44, height: 44, borderRadius: 999 }} />
                <div>
                  <div style={{ fontWeight: 700 }}>JaneDoe</div>
                  <div style={{ color: "#6b7280", fontSize: 12 }}>★ 4.8 (12 reviews)</div>
                </div>
              </div>
              <button className="btn" style={{ background: "#4caf50", color: "#fff" }}>Contact Seller</button>
            </div>

            <div className="card" style={{ padding: 12, marginTop: 12 }}>
              <h3 style={{ marginTop: 0 }}>Description</h3>
              <p style={{ color: "#4b5563" }}>
                Well-loved vintage cruiser, perfect for getting around campus. In great
                condition with minor cosmetic wear. Recently tuned up and ready to ride!
                Features a comfortable saddle, front basket, and a classic bell.
              </p>
            </div>

            <div className="card" style={{ padding: 12, marginTop: 12 }}>
              <h3 style={{ marginTop: 0 }}>Delivery Options</h3>
              <div style={{ display: "grid", gap: 8 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>Campus Drop-off</span><strong style={{ color: "#4caf50" }}>FREE</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>Public Meet-up</span><strong>$5.00</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>Standard Shipping</span><strong>$15.00</strong>
                </div>
              </div>
            </div>

            <div style={{ height: 12 }} />
            <button className="btn btn-primary" style={{ width: "100%" }}>Add to Cart</button>
          </div>
        </div>
      </section>
      <div style={{ height: 16 }} />
      <BottomNav />
    </div>
  );
}



