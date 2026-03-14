import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">🛒 QuickCart</h1>
        <p className="header-subtitle">Your one-stop shop for everything</p>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/category/Electronics">Electronics</Link>
          <Link to="/category/Home">Home Items</Link>
          <Link to="/category/Sports">Sports</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;