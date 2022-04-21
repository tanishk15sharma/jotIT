import React, { useState } from "react";
import { Tooltip } from "../tooltip/Tooltip";

import "./Nav.scss";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu);
  return (
    <nav className="nav flex-spBt-end">
      <span className="relative">
        <span className="title">JOT</span>
        <span className="sub-title">it</span>
        <i class="fa-solid fa-feather-pointed title-icon"></i>
      </span>
      <div>
        <button className="border-reset mobile-btn">
          <span className="material-icons side-icon index-4"> logout </span>
        </button>
        <button className="border-reset ">
          <span className="material-icons side-icon index-4"> dark_mode </span>
        </button>
      </div>
    </nav>
  );
};

export { Nav };
