import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

function CategoryPage({ onAddToCart }) {
  const { category } = useParams();

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <div className="product-list">
      <h2 className="section-title">{category} Products</h2>

      <div className="product-grid">
        {filteredProducts.map((product) => (
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

export default CategoryPage;