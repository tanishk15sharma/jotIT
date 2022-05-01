import React, { useState } from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import { NoteModal } from "../note-modal/NoteModal";
import { useAuth } from "../../context/AuthContext";
const Sidebar = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const { setAuth } = useAuth();
  const logoutHandler = () => {
    localStorage.removeItem("auth");
    setAuth({
      isLoggedIn: false,
      encodedToken: "",
    });
  };
  return (
    <aside className="sidebar">
      <ul className="sidebar-list">
        <Link to="/">
          <li className="sidebar-txt">
            <span className="material-icons side-icon  index-4"> home </span>
            <span className="index-4">HOME</span>
          </li>
        </Link>
        <Link to="/label">
          <li className="sidebar-txt">
            <span className="material-icons side-icon index-4">label </span>
            <span className="index-4">LABELS</span>
          </li>
        </Link>
        <Link to="/archive">
          <li className="sidebar-txt">
            <span className="material-icons side-icon index-4"> archive </span>
            <span className="index-4">ARCHIVE</span>
          </li>
        </Link>
        <Link to="trash">
          <li className="sidebar-txt">
            <span className="material-icons side-icon index-4"> delete </span>
            <span className="index-4">TRASH</span>
          </li>
        </Link>

        <Link to="/">
          <li className="sidebar-txt" onClick={logoutHandler}>
            <span className="material-icons side-icon index-4"> logout </span>
            <span className="index-4">LOGOUT</span>
          </li>
        </Link>

        <button
          className="create-btn"
          onClick={() => setToggleModal((val) => !val)}
        >
          <i className="fa-solid fa-feather-pointed"></i>
          CREATE NEW NOTE
        </button>
        {toggleModal ? <NoteModal toggleModal={setToggleModal} /> : null}
      </ul>
    </aside>
  );
};

export { Sidebar };
