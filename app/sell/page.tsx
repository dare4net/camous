export default function Sell() {
  return (
    <div className="container" style={{ maxWidth: 720 }}>
      <div style={{ height: 16 }} />
      <div className="card" style={{ padding: 16 }}>
        <div style={{ color: "#6b7280" }}>Step 1 of 2</div>
        <div style={{ height: 8 }} />
        <div style={{ background: "#e5e7eb", height: 6, borderRadius: 999 }}>
          <div style={{ width: "45%", height: 6, background: "#2196f3", borderRadius: 999 }} />
        </div>
        <h3>Add Photos</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div className="card" style={{ height: 180, border: "2px dashed #d1d5db", display: "flex", alignItems: "center", justifyContent: "center", color: "#6b7280" }}>Add Photo</div>
          <div className="card" style={{ height: 180 }} />
        </div>
        <div style={{ height: 12 }} />
        <label>Product Name</label>
        <input className="input" placeholder="e.g. Vintage Polaroid Camera" />
        <div style={{ height: 12 }} />
        <label>Description</label>
        <textarea className="textarea" placeholder="Describe your item in detail..." />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div>
            <label>Price</label>
            <input className="input" placeholder="$ 50.00" />
          </div>
          <div>
            <label>Category</label>
            <select className="select"><option>Electronics</option></select>
          </div>
        </div>
        <h3>Delivery Options</h3>
        <div style={{ display: "grid", gap: 8 }}>
          <label className="card" style={{ padding: 12 }}><input type="radio" name="del" defaultChecked /> Campus Drop-off</label>
          <label className="card" style={{ padding: 12 }}><input type="radio" name="del" /> Local Meetup</label>
          <label className="card" style={{ padding: 12 }}><input type="radio" name="del" /> Student Delivery <span className="chip" style={{ marginLeft: 8 }}>Recommended</span></label>
        </div>
        <div style={{ height: 12 }} />
        <label>Delivery Budget for Students</label>
        <input className="input" placeholder="e.g. 5.00" />
        <div style={{ height: 16 }} />
        <button className="btn btn-primary" style={{ width: "100%" }}>Preview Listing</button>
      </div>
    </div>
  );
}



