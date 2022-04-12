import React from "react";
import "./Nav.scss";
const Nav = () => {
  return (
    <nav className="flex-spBt-center">
      <span className="font-xl color-dark">
        <span className="color-light">MY</span>BOOK
      </span>
      <i className="fa-solid fa-moon font-lg"></i>
    </nav>
  );
};

export { Nav };
