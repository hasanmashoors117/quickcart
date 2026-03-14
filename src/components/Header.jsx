import React from "react";
import "../styles/Header.css";

function Header({ cartItemCount, onCartClick }) {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">🛒 QuickCart</h1>
        <p className="header-subtitle">Your one-stop shop for everything</p>

        <div className="cart-icon" onClick={onCartClick}>
          🛍️
          {cartItemCount > 0 && (
            <span className="cart-count">{cartItemCount}</span>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;