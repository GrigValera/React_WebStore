import React from "react";
import Logo from "../../Logo/Logo";
import Search from "../../Search/Search";
import Cart from "../../Cart/Cart";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left">
          <Logo />
        </div>

        <div className="header__center">
          <Search />
        </div>

        <div className="header__right">
          <Cart />
        </div>
      </div>
    </header>
  );
}

export default Header;
