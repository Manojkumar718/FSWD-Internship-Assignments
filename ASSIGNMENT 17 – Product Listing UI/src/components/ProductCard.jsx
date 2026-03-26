import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <div className="price">₹{product.price}</div>
      <div className="rating">⭐ <span>{product.rating}</span></div>
      <button className="cta">Add to cart</button>
    </div>
  );
}
