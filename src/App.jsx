import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./components/HomePage";
import CategoryPage from "./components/CategoryPage";
import CartPage from "./components/CartPage";

import { products } from "./data/products";
import "./styles/App.css";

function App() {

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("quickcart-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("quickcart-cart", JSON.stringify(cart));
  }, [cart]);

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

  const updateQuantity = (id, quantity) => {

    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );

    setCart(updatedCart);
  };

  const removeFromCart = (id) => {

    const updatedCart = cart.filter((item) => item.id !== id);

    setCart(updatedCart);
  };

  return (
    <Router>

      <div className="app">

        <Header />

        <main className="main-content">

          <Routes>

            <Route
              path="/"
              element={<HomePage onAddToCart={addToCart} />}
            />

            <Route
              path="/category/:category"
              element={<CategoryPage onAddToCart={addToCart} />}
            />

            <Route
              path="/cart"
              element={
                <CartPage
                  cart={cart}
                  updateQuantity={updateQuantity}
                  removeFromCart={removeFromCart}
                />
              }
            />

          </Routes>

        </main>

      </div>

    </Router>
  );
}

export default App;