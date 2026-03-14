import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

function HomePage({ onAddToCart }) {
  return (
    <div className="product-list">
      <h2 className="section-title">All Products</h2>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;