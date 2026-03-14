import React from "react";
import "../styles/CartSidebar.css";

function CartSidebar({ isOpen, cart }) {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
      <h2 className="cart-title">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />

              <div className="cart-item-info">
                <h4>{item.name}</h4>
                <p>${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="cart-total">
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default CartSidebar;