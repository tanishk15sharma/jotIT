import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { NoteModal } from "../note-modal/NoteModal";
import "./MobileNav.scss";
const MobileNav = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const getActiveStyleBar = ({ isActive }) => ({
    borderBottom: isActive ? "3px solid #1d283a" : "",
  });
  return (
    <nav className="mobile-nav">
      <ul className="flex mobile-icons">
        <NavLink to="/" style={getActiveStyleBar}>
          <li className="mobile-icon">
            <span className="material-icons "> home </span>
          </li>
        </NavLink>
        <NavLink to="/label" style={getActiveStyleBar}>
          <li className="mobile-icon">
            <span className="material-icons  ">label </span>
          </li>
        </NavLink>

        <button
          className="border-reset main-color"
          onClick={() => setToggleModal((val) => !val)}
        >
          <span className="material-icons">add_circle</span>
        </button>

        <NavLink to="/archive" style={getActiveStyleBar}>
          <li className="mobile-icon">
            <span className="material-icons  "> archive </span>
          </li>
        </NavLink>
        <NavLink to="trash" style={getActiveStyleBar}>
          <li className="mobile-icon">
            <span className="material-icons  "> delete </span>
          </li>
        </NavLink>

        {toggleModal ? <NoteModal toggleModal={setToggleModal} /> : null}
      </ul>
    </nav>
  );
};

export { MobileNav };
