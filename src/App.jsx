import React, { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartSidebar from "./components/CartSidebar";
import { products } from "./data/products";
import "./styles/App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="app">
      <Header
        cartItemCount={totalItems}
        onCartClick={() => setIsCartOpen(!isCartOpen)}
      />

      <main className="main-content">
        <ProductList products={products} onAddToCart={addToCart} />
      </main>

      <CartSidebar isOpen={isCartOpen} cart={cart} />
    </div>
  );
}

export default App;