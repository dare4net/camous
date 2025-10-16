"use client";
import { useState } from "react";
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";

export default function SearchFilters({ placeholder = "Search for anything..." }: { placeholder?: string }) {
  const [query, setQuery] = useState("");
  return (
    <div className="card" style={{ padding: 12, borderRadius: 16 }}>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <div style={{ position: "relative", flex: 1 }}>
          <Search size={18} style={{ position: "absolute", left: 10, top: 15, color: "#6b7280" }} />
          <input className="input input-with-icon" placeholder={placeholder} value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
        <button className="btn btn-primary btn-icon" aria-label="Search" title="Search">
          <Search size={18} />
        </button>
      </div>
      <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}>
        <button className="chip chip-filter"><span className="hide-sm">Category</span><ChevronDown size={16} /></button>
        <button className="chip chip-filter"><span className="hide-sm">Price</span><ChevronDown size={16} /></button>
        <button className="chip chip-filter"><span className="hide-sm">School</span><ChevronDown size={16} /></button>
        <button className="chip chip-filter"><SlidersHorizontal size={16} /><span className="hide-sm">More</span></button>
      </div>
    </div>
  );
}



