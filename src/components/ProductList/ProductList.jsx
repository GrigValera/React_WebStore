import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useFetch } from "../../hooks/useFetch";
import "./ProductList.css";

export default function ProductList({ limit = 10 }) {
  // Загружаем товары через DummyJSON
  const { data, loading, error } = useFetch(
    `https://dummyjson.com/products?limit=${limit}`
  );

  if (loading) return <div className="product-list">Загрузка товаров...</div>;
  if (error) return <div className="product-list">Ошибка: {error}</div>;
  if (!data || !data.products)
    return <div className="product-list">Нет товаров</div>;

  return (
    <div className="product-list">
      {data.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
