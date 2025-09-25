import React, { useState } from "react";
import "./Cart.css";

function Cart() {
  const [itemCount, setItemCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Заглушка - позже заменим на реальные данные
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-widget">
      <button className="cart-button" onClick={toggleCart}>
        🛒 Корзина
        {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
      </button>

      {isCartOpen && (
        <div className="cart-dropdown">
          <div className="cart-dropdown__content">
            <p>Корзина пуста</p>
            <button
              className="cart-dropdown__close"
              onClick={() => setIsCartOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
