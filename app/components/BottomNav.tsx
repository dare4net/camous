"use client";
import { useEffect, useState } from "react";
import { Home, Store, PlusCircle, BriefcaseBusiness, User2 } from "lucide-react";

const items = [
  { href: "#/", label: "Home", Icon: Home },
  { href: "#/market", label: "Market", Icon: Store },
  { href: "#/sell", label: "Sell", Icon: PlusCircle },
  { href: "#/jobs", label: "Jobs", Icon: BriefcaseBusiness },
  { href: "#/profile", label: "Profile", Icon: User2 },
];

export default function BottomNav() {
  const [hash, setHash] = useState<string>(typeof window !== "undefined" ? window.location.hash : "#/");
  useEffect(() => {
    const onHash = () => setHash(window.location.hash || "#/");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return (
    <nav className="bottom-nav">
      {items.map(({ href, label, Icon }) => {
        const active = hash === href || hash.startsWith(href + "/");
        return (
          <a key={href} href={href} className={`nav-btn ${active ? "active" : ""}`} aria-label={label} title={label}>
            <Icon className="nav-icon" size={22} strokeWidth={active ? 2.6 : 2} />
            <span className="nav-label">{label}</span>
          </a>
        );
      })}
    </nav>
  );
}



