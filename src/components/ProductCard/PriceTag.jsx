import React from "react";

export default function PriceTag({ price }) {
  return (
    <div className="price-tag">
      <span className="price">{price} ₽</span>
    </div>
  );
}
