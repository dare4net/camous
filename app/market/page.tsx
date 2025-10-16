import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import ProductCard, { Product } from "../components/ProductCard";
import SearchFilters from "../components/SearchFilters";

const products: Product[] = [
  { id: "1", title: "Nike Air Force 1", price: 75, image: "/screens/screen.png", seller: "stylemaven", school: "University of Style" },
  { id: "2", title: "Graphic Calculator", price: 40, image: "/screens/screen%20(2).png", seller: "mathwiz", school: "Tech Institute" },
  { id: "3", title: "Desk Lamp", price: 15, image: "/screens/screen%20(3).png", seller: "brightideas", school: "State University" },
  { id: "4", title: "Mini Fridge", price: 50, image: "/screens/screen.png", seller: "coolfnds", school: "City College" },
  { id: "5", title: "Bluetooth Speaker", price: 30, image: "/screens/screen%20(2).png", seller: "soundwave", school: "Arts Academy" },
  { id: "6", title: "Ergonomic Chair", price: 120, image: "/screens/screen%20(3).png", seller: "studycomfort", school: "University of Health" },
];

export default function Market() {
  return (
    <div>
      <Header />
      <section className="container">
        <SearchFilters />
        <div style={{ height: 12 }} />
        <div className="grid-products">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
      <div style={{ height: 16 }} />
      <BottomNav />
    </div>
  );
}



