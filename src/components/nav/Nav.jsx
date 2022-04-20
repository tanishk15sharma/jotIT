import React, { useState } from "react";
import { Tooltip } from "../tooltip/Tooltip";
import { AiOutlineBars } from "react-icons/ai";
import "./Nav.scss";
import { Sidebar } from "../sidebar/Sidebar";
const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="flex-spBt-end">
      <span className="relative">
        <button className="hamburger" onClick={() => setShowMenu(!showMenu)}>
          <AiOutlineBars className="font-xl" />
        </button>
        {showMenu && <Sidebar />}
        <span className="title">JOT</span>
        <span className="sub-title">it</span>
        <i class="fa-solid fa-feather-pointed title-icon"></i>
      </span>
      <i className="fa-solid fa-moon font-lg"></i>
    </nav>
  );
};

export { Nav };
