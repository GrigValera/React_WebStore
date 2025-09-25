import React from "react";
import Header from "./components/Layout/Header/Header";
import Main from "./components/Layout/Main/Main";
import Footer from "./components/Layout/Footer/Footer";
import ProductList from "./components/ProductList/ProductList";
/* import TestedComponent from "./components/TestedComponent"; */
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Main>
        <h1>Добро пожаловать в наш магазин!</h1>
        <ProductList limit={12} />
      </Main>
      <Footer />
    </div>
  );
}
