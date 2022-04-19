import React from "react";
import "./Nav.scss";
const Nav = () => {
  return (
    <nav className="flex-spBt-end">
      <span className="relative">
        <span className="title">JOT</span>
        <span className="sub-title">it</span>

        <i class="fa-solid fa-feather-pointed title-icon"></i>
      </span>
      <i className="fa-solid fa-moon font-lg"></i>
    </nav>
  );
};

export { Nav };
