import React, { useState } from "react";
import "./Search.css";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search for:", searchTerm);
    // Здесь будет логика поиска
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search__input"
        placeholder="Поиск товаров..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" className="search__button">
        🔍
      </button>
    </form>
  );
}

export default Search;
