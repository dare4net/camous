"use client";
import ProductCard, { Product } from "../components/ProductCard";
import SearchFilters from "../components/SearchFilters";
import { Search, Plus, Star, TrendingUp, MapPin, Clock, Users, Zap } from "lucide-react";

const trendingProducts: Product[] = [
  { id: "1", title: "AirPods Pro", price: 85000, image: "/product/airpods-6010254_1280.jpg", seller: "techstudent", school: "University of Lagos", rating: 4.9, discount: 20 },
  { id: "2", title: "Nike Air Max", price: 45000, image: "/product/nike-5041718_1280.jpg", seller: "sneakerhead", school: "Covenant University", rating: 4.8, discount: 15 },
  { id: "3", title: "Nike Running Shoes", price: 38000, image: "/product/nike-5644799_1280.jpg", seller: "athlete", school: "Babcock University", rating: 4.7, discount: 30 },
  { id: "4", title: "Premium Sneakers", price: 55000, image: "/product/shoe-2498994_1280.jpg", seller: "stylemaster", school: "Ahmadu Bello University", rating: 4.9, discount: 25 },
  { id: "5", title: "Cotton T-Shirt", price: 8000, image: "/product/t-shirt-1710578_1280.jpg", seller: "fashionista", school: "University of Ibadan", rating: 4.6, discount: 50 },
  { id: "6", title: "Gaming Headset", price: 65000, image: "/product/airpods-6010254_1280.jpg", seller: "gamerpro", school: "Federal University of Technology", rating: 4.8, discount: 35 },
];

const featuredVendors = [
  { name: "TechStudent", rating: 4.9, sales: 127, avatar: "/screens/screen.png" },
  { name: "BookWorm", rating: 4.8, sales: 89, avatar: "/screens/screen%20(2).png" },
  { name: "StyleHub", rating: 4.7, sales: 156, avatar: "/screens/screen%20(3).png" },
];

const trendingCampuses = [
  { name: "University of Lagos", products: 234, users: 1200 },
  { name: "Covenant University", products: 189, users: 980 },
  { name: "University of Ibadan", products: 156, users: 750 },
  { name: "Babcock University", products: 98, users: 420 },
];

const quickActions = [
  { icon: <Search size={20} />, label: "Search", href: "#/market" },
  { icon: <Plus size={20} />, label: "Sell Item", href: "#/sell" },
  { icon: <Star size={20} />, label: "Favorites", href: "#/favorites" },
  { icon: <Users size={20} />, label: "Vendors", href: "#/vendors" },
];

export default function HomeView() {
  return (
    <>
      {/* Hero Search Section */}
      <section className="container">
        <div className="card" style={{ padding: 20, borderRadius: 16, background: "linear-gradient(135deg, #2196f3 0%, #1e88e5 100%)", color: "#fff" }}>
          <div style={{ textAlign: "center", marginBottom: 20 }}>
            <h1 style={{ fontSize: 28, margin: "0 0 8px 0", fontWeight: 700 }}>Find Everything You Need</h1>
            <p style={{ margin: 0, opacity: 0.9 }}>From textbooks to tech, discover amazing deals from your campus community</p>
          </div>
          <SearchFilters placeholder="Search products, brands, or categories..." />
        </div>
      </section>

      {/* Quick Actions */}
      <section className="container" style={{ marginTop: 16 }}>
        <div className="card" style={{ padding: 16 }}>
          <h3 style={{ margin: "0 0 16px 0", fontSize: 18, fontWeight: 600 }}>Quick Actions</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
            {quickActions.map((action, index) => (
              <a key={index} href={action.href} style={{ 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center", 
                gap: 8, 
                padding: "12px 8px", 
                borderRadius: 12, 
                background: "#f8fafc", 
                textDecoration: "none", 
                color: "#374151",
                transition: "all 0.2s ease"
              }}>
                <div style={{ color: "#2196f3" }}>{action.icon}</div>
                <span style={{ fontSize: 12, fontWeight: 500 }}>{action.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="container" style={{ marginTop: 16 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
          <h2 style={{ margin: 0, fontSize: 20, fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}>
            <TrendingUp size={20} style={{ color: "#2196f3" }} />
            Trending Products
          </h2>
          <a href="#/market" style={{ color: "#2196f3", fontSize: 14, fontWeight: 500, textDecoration: "none" }}>View All</a>
        </div>
        <div className="grid-products">
          {trendingProducts.slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Trending Campuses */}
      <section className="container" style={{ marginTop: 16 }}>
        <div className="card" style={{ padding: 16 }}>
          <h3 style={{ margin: "0 0 16px 0", fontSize: 18, fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}>
            <MapPin size={18} style={{ color: "#2196f3" }} />
            Trending Campuses
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
            {trendingCampuses.map((campus, index) => (
              <div key={index} style={{ 
                padding: 12, 
                borderRadius: 8, 
                background: "#f8fafc", 
                border: "1px solid #e5e7eb" 
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                  <span style={{ fontWeight: 600, fontSize: 14 }}>{campus.name}</span>
                  <span style={{ fontSize: 12, color: "#6b7280" }}>{campus.products} items</span>
                </div>
                <div style={{ fontSize: 12, color: "#6b7280" }}>{campus.users} active users</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Vendors */}
      <section className="container" style={{ marginTop: 16 }}>
        <div className="card" style={{ padding: 16 }}>
          <h3 style={{ margin: "0 0 16px 0", fontSize: 18, fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}>
            <Star size={18} style={{ color: "#2196f3" }} />
            Featured Vendors
          </h3>
          <div style={{ display: "flex", gap: 12, overflowX: "auto", paddingBottom: 8 }}>
            {featuredVendors.map((vendor, index) => (
              <div key={index} style={{ 
                minWidth: 120, 
                padding: 12, 
                borderRadius: 8, 
                background: "#f8fafc", 
                border: "1px solid #e5e7eb",
                textAlign: "center"
              }}>
                <div style={{ 
                  width: 40, 
                  height: 40, 
                  borderRadius: "50%", 
                  background: "#e5e7eb", 
                  margin: "0 auto 8px auto",
                  backgroundImage: `url(${vendor.avatar})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }} />
                <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 2 }}>{vendor.name}</div>
                <div style={{ fontSize: 10, color: "#6b7280", display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
                  <Star size={10} style={{ color: "#fbbf24" }} />
                  {vendor.rating} • {vendor.sales} sales
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="container" style={{ marginTop: 16 }}>
        <div className="card" style={{ padding: 16, background: "linear-gradient(135deg, #ff9800 0%, #f57c00 100%)", color: "#fff" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <h3 style={{ margin: "0 0 4px 0", fontSize: 18, fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}>
                <Zap size={18} />
                Special Offers
              </h3>
              <p style={{ margin: 0, fontSize: 14, opacity: 0.9 }}>Free delivery on orders over ₦50,000</p>
            </div>
            <div style={{ fontSize: 24, fontWeight: 700 }}>50%</div>
          </div>
        </div>
      </section>
    </>
  );
}


