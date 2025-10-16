import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

export type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
  seller?: string;
  school?: string;
  rating?: number;
  discount?: number;
};

export default function ProductCard({ product }: { product: Product }) {
  const originalPrice = product.discount ? Math.round(product.price / (1 - product.discount / 100)) : product.price;
  
  return (
    <Link href={`/product/${product.id}`} className="card" style={{ overflow: "hidden", textDecoration: "none", color: "inherit", position: "relative" }}>
      {/* Discount Badge */}
      {product.discount && (
        <div style={{
          position: "absolute",
          top: 8,
          left: 8,
          background: "#ef4444",
          color: "#fff",
          padding: "4px 8px",
          borderRadius: 6,
          fontSize: 12,
          fontWeight: 600,
          zIndex: 1
        }}>
          -{product.discount}%
        </div>
      )}
      
      <div style={{ position: "relative", width: "100%", paddingTop: "66%", background: "#e5e7eb" }}>
        <Image src={product.image} alt={product.title} fill style={{ objectFit: "cover" }} />
      </div>
      
      <div style={{ padding: 12 }}>
        <div style={{ fontWeight: 700, marginBottom: 6 }}>{product.title}</div>
        
        {/* Price */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
          <div style={{ color: "#2196f3", fontWeight: 800, fontSize: 16 }}>
            ₦{product.price.toLocaleString()}
          </div>
          {product.discount && (
            <div style={{ 
              color: "#6b7280", 
              fontSize: 12, 
              textDecoration: "line-through",
              fontWeight: 500
            }}>
              ₦{originalPrice.toLocaleString()}
            </div>
          )}
        </div>
        
        {/* Rating */}
        {product.rating && (
          <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 6 }}>
            <Star size={14} style={{ color: "#fbbf24", fill: "#fbbf24" }} />
            <span style={{ fontSize: 12, fontWeight: 500, color: "#374151" }}>{product.rating}</span>
          </div>
        )}
        
        {/* Seller Info */}
        {product.seller && (
          <div style={{ color: "#6b7280", fontSize: 12 }}>
            @{product.seller}{product.school ? ` · ${product.school}` : ""}
          </div>
        )}
      </div>
    </Link>
  );
}



