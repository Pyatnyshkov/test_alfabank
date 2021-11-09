import React, { FC } from "react";

const Header: FC = () => {
  return (
    <div className="header">
      <div className="header_logo" />
      <button type="button" className="header_filter">
        <span className="header_filter-logo" />
        Фильтры
      </button>
    </div>
  );
};

export default Header;
