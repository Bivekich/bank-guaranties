import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/header.css";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <h3>Банковские гарантии</h3>

      <nav>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={isOpen ? "bar open" : "bar"}></div>
          <div className={isOpen ? "bar open" : "bar"}></div>
          <div className={isOpen ? "bar open" : "bar"}></div>
        </div>

        <ul className={isOpen ? "he-nav open" : "he-nav"}>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Главная
            </Link>
          </li>
          <li>
            <Link to="/offers" onClick={toggleMenu}>
              Предложения
            </Link>
          </li>
          <li>
            <Link to="/calc" onClick={toggleMenu}>
              Калькулятор
            </Link>
          </li>
          <li>
            <Link to="/articles" onClick={toggleMenu}>
              Статьи
            </Link>
          </li>
          <li>
            <a href="#form" id="consultation" onClick={toggleMenu}>
              Консультация
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
