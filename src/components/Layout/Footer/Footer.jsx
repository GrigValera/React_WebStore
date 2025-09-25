import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h3>Наш магазин</h3>
          <p>Лучшие товары по лучшим ценам</p>
        </div>

        <div className="footer__section">
          <h3>Контакты</h3>
          <p>Email: info@store.com</p>
          <p>Телефон: +7 (999) 999-99-99</p>
        </div>

        <div className="footer__section">
          <h3>Мы в соцсетях</h3>
          <p>Telegram | VK | WhatsApp</p>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; 2024 Наш магазин. Все права защищены.</p>
      </div>
    </footer>
  );
}

export default Footer;
