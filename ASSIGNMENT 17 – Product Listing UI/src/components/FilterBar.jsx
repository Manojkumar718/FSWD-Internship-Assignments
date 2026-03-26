import React from "react";

export default function FilterBar({ setCategory, setSearch }) {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div style={{ marginTop: 10 }}>
        <button onClick={() => setCategory("All")}>All</button>
        <button onClick={() => setCategory("Electronics")}>Electronics</button>
        <button onClick={() => setCategory("Fashion")}>Fashion</button>
      </div>
    </div>
  );
}
