import React, { FC } from "react";

const Header: FC = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        <span className="header__logo" aria-label="Логотип страницы"></span>
      </h1>
      <button type="button" className="header__filter">
        <span className="header__filter-logo" aria-label="Иконка фильтра"></span>
        <span className="header__filter-span">Фильтры</span>
      </button>
    </header>
  );
};

export default Header;
