import React, { useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import FilterBar from "./components/FilterBar";

const productsData = [
  {
    id: 1,
    name: "iPhone 14",
    category: "Electronics",
    price: 80000,
    image: "https://imgs.search.brave.com/1IuGAMg_BKAxIwcvOX-GJjK0K1gRDOx4peRRI-iSlYA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mZG4y/LmdzbWFyZW5hLmNv/bS92di9waWNzL2Fw/cGxlL2FwcGxlLWlw/aG9uZS0xNC1wcm8t/bWF4LTEuanBn",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Nike Shoes",
    category: "Fashion",
    price: 5000,
    image: "https://imgs.search.brave.com/jw2z8Irq8JLdBJvSlm6M65OdL1O5Xf1lY3MhmmR4P18/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMubmlrZS5jb20v/YS9pbWFnZXMvdF93/ZWJfcHdfNTkyX3Yy/L2ZfYXV0by91Xzlk/ZGYwNGM3LTJhOWEt/NGQ3Ni1hZGQxLWQx/NWFmOGYwMjYzZCxj/X3NjYWxlLGZsX3Jl/bGF0aXZlLHdfMS4w/LGhfMS4wLGZsX2xh/eWVyX2FwcGx5LzNl/ODQ1NWFkLWMwMGMt/NDk5Ni1hODVhLWI1/YzRkMzhjNmFlMi9X/K05JS0UrVjJLK1JV/Ti5wbmc",
    rating: 4.2,
  },
  {
    id: 3,
    name: "Laptop",
    category: "Electronics",
    price: 60000,
    image: "https://imgs.search.brave.com/ctLAzxagfiF15sSkECYxSUskm_QU0SN-SPU4MfhoRzM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE1/NzQyMTE0OS9waG90/by9ibGFuay1pc29s/YXRlZC1sYXB0b3At/c2NyZWVuLXdpdGgt/Y29weS1zcGFjZS1j/b3p5LXdvcmstcGxh/Y2UtZnJvbnQtdmll/dy1pbnRlcm5ldC1z/dXJmaW5nLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1zSGls/M0NkNms2YXBsZ1Z1/VWgwMERrTDVpZ3hp/dTJKMF9TS0MxMXBE/WFNBPQ",
    rating: 4.7,
  },
  {
    id: 4,
    name: "T-Shirt",
    category: "Fashion",
    price: 800,
    image: "https://imgs.search.brave.com/DfBvsjkIGWMHx3mLKGinzmwTcxW85ZzijakQGVaR4c4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubXludGFzc2V0/cy5jb20vZHByXzIs/cV82MCx3XzIxMCxj/X2xpbWl0LGZsX3By/b2dyZXNzaXZlL2Fz/c2V0cy9pbWFnZXMv/MjAyNS9OT1ZFTUJF/Ui8xNC9pZ25QNVhM/aV9kNjBmZjI5NTBh/NTY0YTU0YTdiYzYy/MzM0ZjZmODFiMS5q/cGc",
    rating: 4.0,
  },
];

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = productsData.filter((product) => {
    return (
      (category === "All" || product.category === category) &&
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="app">
      <h1>🛍 Product Store</h1>

      <FilterBar setCategory={setCategory} setSearch={setSearch} />

      <div className="grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;