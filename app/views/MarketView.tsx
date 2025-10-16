"use client";
import ProductCard, { Product } from "../components/ProductCard";
import SearchFilters from "../components/SearchFilters";

const products: Product[] = [
  { id: "1", title: "AirPods Pro", price: 85000, image: "/product/airpods-6010254_1280.jpg", seller: "techstudent", school: "University of Lagos", rating: 4.9, discount: 20 },
  { id: "2", title: "Nike Air Max", price: 45000, image: "/product/nike-5041718_1280.jpg", seller: "sneakerhead", school: "Covenant University", rating: 4.8, discount: 15 },
  { id: "3", title: "Nike Running Shoes", price: 38000, image: "/product/nike-5644799_1280.jpg", seller: "athlete", school: "Babcock University", rating: 4.7, discount: 30 },
  { id: "4", title: "Premium Sneakers", price: 55000, image: "/product/shoe-2498994_1280.jpg", seller: "stylemaster", school: "Ahmadu Bello University", rating: 4.9, discount: 25 },
  { id: "5", title: "Cotton T-Shirt", price: 8000, image: "/product/t-shirt-1710578_1280.jpg", seller: "fashionista", school: "University of Ibadan", rating: 4.6, discount: 50 },
  { id: "6", title: "Gaming Headset", price: 65000, image: "/product/airpods-6010254_1280.jpg", seller: "gamerpro", school: "Federal University of Technology", rating: 4.8, discount: 35 },
  { id: "7", title: "Wireless Earbuds", price: 25000, image: "/product/airpods-6010254_1280.jpg", seller: "techdeals", school: "University of Nigeria", rating: 4.5, discount: 20 },
  { id: "8", title: "Sport Sneakers", price: 42000, image: "/product/nike-5041718_1280.jpg", seller: "sportsgear", school: "Obafemi Awolowo University", rating: 4.7, discount: 15 },
  { id: "9", title: "Casual T-Shirt", price: 6000, image: "/product/t-shirt-1710578_1280.jpg", seller: "fashionhub", school: "Lagos State University", rating: 4.4, discount: 40 },
  { id: "10", title: "Running Shoes", price: 35000, image: "/product/nike-5644799_1280.jpg", seller: "runner", school: "University of Benin", rating: 4.8, discount: 25 },
  { id: "11", title: "Classic Sneakers", price: 48000, image: "/product/shoe-2498994_1280.jpg", seller: "shoecollection", school: "Delta State University", rating: 4.6, discount: 30 },
  { id: "12", title: "Bluetooth Earbuds", price: 18000, image: "/product/airpods-6010254_1280.jpg", seller: "electronics", school: "Rivers State University", rating: 4.3, discount: 35 },
];

export default function MarketView() {
  return (
    <section className="container">
      <SearchFilters />
      <div style={{ height: 12 }} />
      <div className="grid-products">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}


