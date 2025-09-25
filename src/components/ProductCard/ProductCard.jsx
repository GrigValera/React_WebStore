import React, { useState } from "react";
import ImageGallery from "./ImageGallery";
import PriceTag from "./PriceTag";
import InquiryForm from "./InquiryForm";

// UI-компоненты
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const [showPayment, setShowPayment] = useState(false);
  const [showInquiry, setShowInquiry] = useState(false);

  if (!product) return <div className="product-card">Загрузка...</div>;

  return (
    <div className="product-card">
      {product.images?.length ? (
        <ImageGallery images={product.images} />
      ) : (
        <div className="no-images">Нет изображений</div>
      )}

      <div className="product-info">
        <h2>{product.title || "Название товара"}</h2>
        <p>{product.description || "Описание отсутствует"}</p>
        {product.price !== undefined && <PriceTag price={product.price} />}

        <div className="product-buttons">
          <Button variant="primary" onClick={() => setShowPayment(true)}>
            Купить
          </Button>
          <Button variant="secondary" onClick={() => setShowInquiry(true)}>
            Задать вопрос
          </Button>
        </div>
      </div>

      <Modal isOpen={showPayment} onClose={() => setShowPayment(false)}>
        <h3>Форма оплаты</h3>
        <p>Эмуляция покупки товара: {product.title}</p>
        <Button onClick={() => setShowPayment(false)}>Закрыть</Button>
      </Modal>

      <Modal isOpen={showInquiry} onClose={() => setShowInquiry(false)}>
        <InquiryForm
          productId={product.id}
          onClose={() => setShowInquiry(false)}
        />
      </Modal>
    </div>
  );
}
