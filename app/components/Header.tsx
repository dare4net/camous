"use client";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Wallet } from "lucide-react";

export default function Header() {
  return (
    <header className="header-bar">
      <div className="container header-inner">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, color: "#fff", textDecoration: "none", fontWeight: 800 }}>
            <Image src="/Camous3.png" alt="Camous" width={80} height={80} sizes="40px" priority />
          </Link>
          <nav style={{ display: "flex", gap: 8 }}>
            <a href="#/cart" className="chip chip-compact" aria-label="Cart" title="Cart" style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}>
              <ShoppingBag size={18} />
            </a>
            <a href="#/wallet" className="chip chip-compact" aria-label="Wallet" title="Wallet" style={{ background: "#ff9800", color: "#111" }}>
              <Wallet size={18} />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}



