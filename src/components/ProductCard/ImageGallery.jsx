import React from "react";

export default function ImageGallery({ images = [] }) {
  if (!images.length) return null;

  return (
    <div style={{ marginBottom: "12px" }}>
      <img src={images[0]} alt="product" width={250} />
    </div>
  );
}
